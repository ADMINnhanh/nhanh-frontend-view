import { ruoyiUser } from "@/stores/user";
import axios, { AxiosError } from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const baseURL =
  (import.meta.env.DEV ? "http://localhost:5000" : "https://nhanh.xin") +
  "/ruoyi-admin/nhanh";

// 创建 axios 实例
const service = axios.create({
  baseURL,
  timeout: 60 * 1000,
  withCredentials: true,
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // 二进制数据则直接返回
    if (
      ["application/octet-stream", "blob", "arraybuffer"].includes(
        res.request.responseType
      )
    ) {
      return res.data;
    }
    // 未设置状态码则默认成功状态
    const { code, msg } = res.data;

    if ([0, 200].includes(code)) {
      return Promise.resolve(res.data);
    } else {
      window.$message.error(msg);
      return Promise.reject("error");
    }
  },
  (error: AxiosError) => {
    let { message, status, code, response } = error;

    if (code?.includes("ERR_NETWORK") && response === undefined) {
      /** 应该是跨域 */
      message = "";
      ruoyiUser.value = { token: undefined, info: undefined };
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (status == 413) {
      message = "文件大小超出限制";
    } else if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }

    message && window.$message.error(message, { duration: 5 * 1000 });
    return Promise.reject(error);
  }
);

export default service;

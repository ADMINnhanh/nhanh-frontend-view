import { ruoyiUser } from "@/stores/user";
import axios, { AxiosError } from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// 创建 axios 实例
const otherAsk = axios.create({
  timeout: 60 * 1000,
});

// 请求拦截器
otherAsk.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
otherAsk.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
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

export default otherAsk;

import axios, { AxiosError } from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const baseURL =
  (import.meta.env.DEV ? "http://localhost:5000" : "https://nhanh.xin") +
  "/ruoyi-admin/nhanh";

// 创建 axios 实例
const service = axios.create({
  baseURL,
  timeout: 60 * 1000,
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
    // 未设置状态码则默认成功状态
    const { code, msg } = res.data;

    if (code !== 200) {
      window.$message.error(msg);
      return Promise.reject("error");
    } else {
      return Promise.resolve(res.data);
    }
  },
  (error: AxiosError) => {
    let { message, status } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (status == 413) {
      message = "文件大小超出限制";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    window.$message.error(message, { duration: 5 * 1000 });
    return Promise.reject(error);
  }
);

export default service;

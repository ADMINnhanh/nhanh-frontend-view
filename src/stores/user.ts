import { useStorage } from "@vueuse/core";

/** csrf_token */
/** 登录信息 */
export const ruoyiUser = useStorage(
  "ruoyi-user",
  { token: undefined, info: undefined },
  localStorage
);

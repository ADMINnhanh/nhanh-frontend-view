// store.js
import { computed, ref } from "vue";

const GlobalLoading = ref(new Map<string, string>());
export const NSpinValue = computed(() => {
  const show = GlobalLoading.value.size > 0;
  const description = Array.from(GlobalLoading.value.values())
    .filter(Boolean)
    .map((s) => `<div style="text-align: center;">${s}</div>`)
    .join("");
  return { show, description };
});
export function showGlobalLoading(key: string, text?: string) {
  if (GlobalLoading.value.has(key))
    console.error("全局 loading 的 key 重名了， key : " + key);
  GlobalLoading.value.set(key, text ?? "");
}
export function hideGlobalLoading(key: string) {
  GlobalLoading.value.delete(key);
}

/** 使用示例 */
// showGlobalLoading("q", "测试测试");
// showGlobalLoading("w", "哈哈哈哈");
// setTimeout(() => {
//   hideGlobalLoading("q");
//   setTimeout(() => {
//     hideGlobalLoading("w");
//   }, 3000);
// }, 3000);

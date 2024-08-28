/** 向 html 节点注入 css 变量 */
export function injectStyle(style: { [key: string]: string }) {
  const html = document.querySelector("html");
  if (!html) return;
  for (const key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      html.style.setProperty("--" + key, style[key]);
    }
  }
}

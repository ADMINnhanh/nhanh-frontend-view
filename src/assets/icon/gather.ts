import { h } from "vue";

export const SystemSvg = {
  /** 画布 */
  canvas:
    '<svg t="1724724318254" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10543" width="200" height="200"><path d="M917.333333 682.666667H896V256a85.333333 85.333333 0 0 0-85.333333-85.333333h-256V106.666667a21.333333 21.333333 0 0 0-21.333334-21.333334h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333334V170.666667H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v426.666667h-21.333333a21.333333 21.333333 0 0 0-21.333334 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333334 21.333333h205.226666l-92.586666 132.266667a32.426667 32.426667 0 0 0-5.973334 18.346666v9.386667a10.666667 10.666667 0 0 0 10.666667 10.666667h50.346667a42.666667 42.666667 0 0 0 34.986666-18.346667L416 768h192l106.666667 152.32a42.666667 42.666667 0 0 0 34.986666 18.346667h50.346667a10.666667 10.666667 0 0 0 10.666667-10.666667v-9.386667a32.426667 32.426667 0 0 0-5.973334-18.346666L712.106667 768h205.226666a21.333333 21.333333 0 0 0 21.333334-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333334-21.333333z m-106.666666-27.306667a27.306667 27.306667 0 0 1-27.306667 27.306667 28.586667 28.586667 0 0 1-21.333333-10.24l-156.586667-194.986667a21.333333 21.333333 0 0 0-33.28 0l-97.706667 122.88a21.333333 21.333333 0 0 1-33.706666 0l-42.666667-58.026667a21.76 21.76 0 0 0-34.56 0l-95.146667 128a32 32 0 0 1-25.6 12.8 27.306667 27.306667 0 0 1-29.44-27.733333V256h597.333334zM405.333333 469.333333A64 64 0 1 0 341.333333 405.333333 64 64 0 0 0 405.333333 469.333333z" p-id="10544"></path></svg>',

  /** 编辑 */
  Edit: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M2 26h28v2H2z" fill="currentColor"></path><path d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z" fill="currentColor"></path></svg>',

  /** 数学 */
  Math: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 13l4 4m0-4l-4 4"></path><path d="M20 5h-7L9 19l-3-6H4"></path></g></svg>',

  /** 依赖 */
  ColumnDependency:
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M30 10V2h-8v3h-5a2.002 2.002 0 0 0-2 2v8h-5v-3H2v8h8v-3h5v8a2.002 2.002 0 0 0 2 2h5v3h8v-8h-8v3h-5v-8h5v3h8v-8h-8v3h-5V7h5v3zM8 18H4v-4h4zm16 6h4v4h-4zm0-10h4v4h-4zm0-10h4v4h-4z" fill="currentColor"></path></svg>',

  /** LockOpenOutline */
  LockOpenOutline: `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 112C16 90.7827 24.4285 70.4344 39.4315 55.4315C54.4344 40.4285 74.7827 32 96 32C117.217 32 137.566 40.4285 152.569 55.4315C167.571 70.4344 176 90.7827 176 112V208" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M368 208H144C117.49 208 96 229.49 96 256V432C96 458.51 117.49 480 144 480H368C394.51 480 416 458.51 416 432V256C416 229.49 394.51 208 368 208Z" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  /**  */
};

export default function SvgGather(svgName: keyof typeof SystemSvg) {
  if (!SystemSvg[svgName])
    window.$CustomizeError("未定义的SystemSvg " + svgName);
  return h("i", { innerHTML: SystemSvg[svgName] });
}

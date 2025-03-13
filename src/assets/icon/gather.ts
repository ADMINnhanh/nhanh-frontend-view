import { NIcon, type IconProps } from "naive-ui";
import { h } from "vue";

/** 键盘图标 */
const Keyboard = {
  /** 方向键 上 */
  ArrowUp: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 1H6C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1ZM6 0C2.68629 0 0 2.68629 0 6V26C0 29.3137 2.68629 32 6 32H26C29.3137 32 32 29.3137 32 26V6C32 2.68629 29.3137 0 26 0H6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 1H8C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H24C25.6569 23 27 21.6569 27 20V4C27 2.34315 25.6569 1 24 1ZM8 0C5.79086 0 4 1.79086 4 4V20C4 22.2091 5.79086 24 8 24H24C26.2091 24 28 22.2091 28 20V4C28 1.79086 26.2091 0 24 0H8Z" fill="currentColor"/>
<path d="M25.0664 23.5193L25.9324 23L29.9324 30.1949L29.0664 30.7141L25.0664 23.5193Z" fill="currentColor"/>
<path d="M6.86523 23.5193L5.99921 23L1.99921 30.1949L2.86523 30.7141L6.86523 23.5193Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 17L15.5 8L16.5 8L16.5 17L15.5 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5957 12.3536C20.4004 12.5488 20.0838 12.5488 19.8886 12.3536L15.9995 8.46447L12.1104 12.3536C11.9151 12.5488 11.5985 12.5488 11.4033 12.3536C11.208 12.1583 11.208 11.8417 11.4033 11.6464L15.9995 7.05025L20.5957 11.6464C20.7909 11.8417 20.7909 12.1583 20.5957 12.3536Z" fill="currentColor"/>
</svg>
`,

  /** 方向键 下 */
  ArrowDown: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 1H6C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1ZM6 0C2.68629 0 0 2.68629 0 6V26C0 29.3137 2.68629 32 6 32H26C29.3137 32 32 29.3137 32 26V6C32 2.68629 29.3137 0 26 0H6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 1H8C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H24C25.6569 23 27 21.6569 27 20V4C27 2.34315 25.6569 1 24 1ZM8 0C5.79086 0 4 1.79086 4 4V20C4 22.2091 5.79086 24 8 24H24C26.2091 24 28 22.2091 28 20V4C28 1.79086 26.2091 0 24 0H8Z" fill="currentColor"/>
<path d="M25.0664 23.5193L25.9324 23L29.9324 30.1949L29.0664 30.7141L25.0664 23.5193Z" fill="currentColor"/>
<path d="M6.86523 23.5193L5.99921 23L1.99921 30.1949L2.86523 30.7141L6.86523 23.5193Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7L16.5 16L15.5 16L15.5 7L16.5 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4043 11.6464C11.5996 11.4512 11.9162 11.4512 12.1114 11.6464L16.0005 15.5355L19.8896 11.6464C20.0849 11.4512 20.4015 11.4512 20.5967 11.6464C20.792 11.8417 20.792 12.1583 20.5967 12.3536L16.0005 16.9497L11.4043 12.3536C11.2091 12.1583 11.2091 11.8417 11.4043 11.6464Z" fill="currentColor"/>
</svg>
`,

  /** 方向键 左 */
  ArrowLeft: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 1H6C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1ZM6 0C2.68629 0 0 2.68629 0 6V26C0 29.3137 2.68629 32 6 32H26C29.3137 32 32 29.3137 32 26V6C32 2.68629 29.3137 0 26 0H6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 1H8C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H24C25.6569 23 27 21.6569 27 20V4C27 2.34315 25.6569 1 24 1ZM8 0C5.79086 0 4 1.79086 4 4V20C4 22.2091 5.79086 24 8 24H24C26.2091 24 28 22.2091 28 20V4C28 1.79086 26.2091 0 24 0H8Z" fill="currentColor"/>
<path d="M25.0664 23.5193L25.9324 23L29.9324 30.1949L29.0664 30.7141L25.0664 23.5193Z" fill="currentColor"/>
<path d="M6.86523 23.5193L5.99921 23L1.99921 30.1949L2.86523 30.7141L6.86523 23.5193Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 12.5L12 12.5L12 11.5L21 11.5L21 12.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3536 7.40385C16.5488 7.59911 16.5488 7.91569 16.3536 8.11095L12.4645 12L16.3536 15.8891C16.5488 16.0844 16.5488 16.401 16.3536 16.5962C16.1583 16.7915 15.8417 16.7915 15.6464 16.5962L11.0503 12L15.6464 7.40385C15.8417 7.20858 16.1583 7.20858 16.3536 7.40385Z" fill="currentColor"/>
</svg>
`,

  /** 方向键 右 */
  ArrowRight: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 1H6C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1ZM6 0C2.68629 0 0 2.68629 0 6V26C0 29.3137 2.68629 32 6 32H26C29.3137 32 32 29.3137 32 26V6C32 2.68629 29.3137 0 26 0H6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 1H8C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H24C25.6569 23 27 21.6569 27 20V4C27 2.34315 25.6569 1 24 1ZM8 0C5.79086 0 4 1.79086 4 4V20C4 22.2091 5.79086 24 8 24H24C26.2091 24 28 22.2091 28 20V4C28 1.79086 26.2091 0 24 0H8Z" fill="currentColor"/>
<path d="M25.0664 23.5193L25.9324 23L29.9324 30.1949L29.0664 30.7141L25.0664 23.5193Z" fill="currentColor"/>
<path d="M6.86523 23.5193L5.99921 23L1.99921 30.1949L2.86523 30.7141L6.86523 23.5193Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11.5L20 11.5L20 12.5L11 12.5L11 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 16.5962C15.4512 16.4009 15.4512 16.0843 15.6464 15.889L19.5355 12L15.6464 8.11087C15.4512 7.91561 15.4512 7.59903 15.6464 7.40377C15.8417 7.2085 16.1583 7.2085 16.3536 7.40377L20.9497 12L16.3536 16.5962C16.1583 16.7914 15.8417 16.7914 15.6464 16.5962Z" fill="currentColor"/>
</svg>
`,

  /** 加 */
  Plus: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 1H6C3.23858 1 1 3.23858 1 6V26C1 28.7614 3.23858 31 6 31H26C28.7614 31 31 28.7614 31 26V6C31 3.23858 28.7614 1 26 1ZM6 0C2.68629 0 0 2.68629 0 6V26C0 29.3137 2.68629 32 6 32H26C29.3137 32 32 29.3137 32 26V6C32 2.68629 29.3137 0 26 0H6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 1H8C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H24C25.6569 23 27 21.6569 27 20V4C27 2.34315 25.6569 1 24 1ZM8 0C5.79086 0 4 1.79086 4 4V20C4 22.2091 5.79086 24 8 24H24C26.2091 24 28 22.2091 28 20V4C28 1.79086 26.2091 0 24 0H8Z" fill="currentColor"/>
<path d="M25.0664 23.5193L25.9324 23L29.9324 30.1949L29.0664 30.7141L25.0664 23.5193Z" fill="currentColor"/>
<path d="M6.86523 23.5193L5.99921 23L1.99921 30.1949L2.86523 30.7141L6.86523 23.5193Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 17L15.5 7L16.5 7L16.5 17L15.5 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 11.5L21 11.5L21 12.5L11 12.5L11 11.5Z" fill="currentColor"/>
</svg>
`,

  /** 减 */
  Minus: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="currentColor"/>
<rect x="4.5" y="0.5" width="23" height="23" rx="3.5" stroke="currentColor"/>
<rect width="1.00976" height="8.232" transform="matrix(0.857655 -0.514225 0.485909 0.87401 25.0664 23.5193)" fill="currentColor"/>
<rect width="1.00976" height="8.232" transform="matrix(-0.857655 -0.514225 -0.485909 0.87401 6.86523 23.5193)" fill="currentColor"/>
<path d="M21 12L11 12" stroke="currentColor"/>
</svg>
`,
};

export const SystemSvg = {
  ...Keyboard,

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

type SvgGatherProps = IconProps & {
  icon: keyof typeof SystemSvg;
};
export default function SvgGather(props: SvgGatherProps) {
  const { icon } = props;
  if (!SystemSvg[icon]) window.$CustomizeError("未定义的SystemSvg " + icon);
  return h(NIcon, { ...props, innerHTML: SystemSvg[icon] });
}

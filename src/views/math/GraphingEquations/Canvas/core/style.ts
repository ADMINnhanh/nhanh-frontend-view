import BaseData from "./basedata";

/** 样式管理器 */
export default class Style extends BaseData {
  theme: KnownStyleKeys = "light";
  style: StyleType = {
    light: {
      background: "#fff",
      text: {
        color: "#222",
        secondary: "#909399",
        size: 12,
        family: "微软雅黑",
        bold: true,
      },
    },
    dark: {
      background: "#000",
      text: {
        color: "#aeaeae",
        secondary: "#8c8c8c",
        size: 12,
        family: "微软雅黑",
        bold: true,
      },
    },
  };

  constructor(id: string) {
    super(id);
    this.initStyle();
    this.clearScreen();
  }

  /** 初始化样式 */
  initStyle() {
    const { canvas, ctx, theme } = this;
    if (!canvas || !ctx)
      return console.error("ctx is not CanvasRenderingContext2D");

    canvas.classList.add("_nhanh_canvas");

    const style = this.style[theme];
    ctx.font = `${style.text.bold ? "bold" : ""} ${style.text.size}px ${
      style.text.family
    }`;
  }
  /** 清除画布 */
  clearScreen() {
    const { ctx, theme, rect } = this;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const { width, height } = rect!;

    ctx.fillStyle = this.style[theme].background;
    ctx.fillRect(0, 0, width, height);
  }
  /** 添加样式 */
  addStyle(style: StyleType) {
    this.style = { ...this.style, ...style };
    this.initStyle();
  }
}

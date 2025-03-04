import { _Throttle } from "nhanh-pure-function";
import Grid from "../tool/grid";
import Style from "./style";

/** 绘制方法 */
export default class Draw extends Style {
  /** 监听元素大小 */
  private resizeObserver?: ResizeObserver;

  /** 绘制网格 */
  protected drawGrid = new Grid();

  /** 在网格上开始创作 */
  startCreationOnGrid?: () => void;
  /** 在网格下开始创作 */
  startCreationBelowGrid?: () => void;

  constructor(id: string) {
    super(id);
    if (this.canvas) {
      this.resizeObserver = new ResizeObserver(
        _Throttle(() => {
          this.rect = this.canvas!.getBoundingClientRect();
          const { clientWidth, clientHeight } = this.canvas!;
          [this.canvas!.width, this.canvas!.height] = [
            clientWidth,
            clientHeight,
          ];
          this.redrawOnce();
        }, 100)
      );
      this.resizeObserver.observe(this.canvas);
    }
  }

  /** 重绘画布 */
  private redraw() {
    if (!this.canvas) return console.error("canvas is not HTMLCanvasElement");

    this.updateCenter();

    this.clearScreen();

    this.startCreationBelowGrid?.();

    this.drawGrid.drawAxisAndGrid(this);

    this.startCreationOnGrid?.();
  }
  /** 重绘画布 同一个渲染帧只会执行一次 */
  redrawOnce(isAuto?: boolean) {
    if (this.isAuto && !isAuto) this.isAuto = false;

    if (!this.redrawInNextRenderFrame) {
      this.redrawInNextRenderFrame = true;
      Promise.resolve().then(() => {
        // const time = performance.now();
        this.redraw();
        // // 计算重绘画布耗时
        // const elapsedTime = performance.now() - time;
        // const color =
        //   elapsedTime < 0.4
        //     ? "#67C23A"
        //     : elapsedTime < 0.8
        //     ? "#E6A23C"
        //     : "#F56C6C";
        // console.log(`%c重绘画布耗时：${elapsedTime}ms`, `color: ${color}`);
        this.redrawInNextRenderFrame = false;
      });
    }
  }
  /**
   * 在画布上绘制文本
   *
   * 此函数根据给定的文本、位置和选项参数，在画布上绘制文本它首先配置文本的字体和颜色，
   * 然后根据是否需要次要颜色和当前主题来绘制文本的描边和填充
   *
   * @param text 要绘制的文本内容
   * @param x 文本绘制的横坐标
   * @param y 文本绘制的纵坐标
   * @param secondary 是否为次要颜色
   */
  drawText(text: string, x: number, y: number, secondary?: boolean) {
    // 获取画布的上下文对象，用于绘制
    const { ctx, theme } = this;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    // 根据当前主题获取样式配置
    const style = this.style[theme];
    // 从样式配置中获取背景色
    const { background } = style;

    // 设置画布的字体样式，包括是否加粗、字体大小和字体家族
    ctx.font = `${style.text.bold ? "bold" : ""} ${style.text.size}px ${
      style.text.family
    }`;

    // 设置文本的描边颜色为背景色，并绘制文本的描边
    ctx.strokeStyle = background;
    ctx.strokeText(text, x, y);

    // 根据是否是次要颜色，选择相应的文本填充颜色，并填充文本
    ctx.fillStyle = style.text[secondary ? "secondary" : "color"];
    ctx.fillText(text, x, y);
  }

  /** 开关网格 */
  toggleGrid(show?: boolean | Partial<Grid["show"]>) {
    // 统一处理配置
    const newState = (() => {
      // 对象配置：未传的属性用默认值 true
      if (typeof show === "object") {
        const { grid = true, axis = true, axisText = true } = show;
        return { grid, axis, axisText };
      }
      // 布尔配置：全部属性同步开关
      if (typeof show === "boolean") {
        return { grid: show, axis: show, axisText: show };
      }
      // 无参数：根据当前状态取反
      const anyVisible = Object.values(this.drawGrid.show).some(Boolean);
      return { grid: !anyVisible, axis: !anyVisible, axisText: !anyVisible };
    })();

    this.drawGrid.show = newState;
    this.redrawOnce();
  }

  /** 销毁resizeObserver监听器 */
  destroy() {
    super.destroy();
    this.resizeObserver?.disconnect();
  }
}

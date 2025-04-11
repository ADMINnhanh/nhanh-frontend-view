import { _Debounce, _Throttle } from "nhanh-pure-function";
import Style from "./style";
import { _TimeConsumption } from "..";

/** 绘制方法 */
export default class Draw extends Style {
  /** 监听元素大小 */
  private resizeObserver?: ResizeObserver;

  /** 计算坐标所需依赖 */
  rely = "";
  /** 是否需要重新计算坐标 */
  isRecalculate = false;

  constructor(id: string) {
    super(id);
    if (this.canvas) {
      this.resizeObserver = new ResizeObserver(
        _Debounce(() => {
          const rect = this.rect!.value;
          [this.canvas.width, this.canvas.height] = [rect.width, rect.height];
          this.redrawOnce();
        }, 200)
      );
      this.resizeObserver.observe(this.canvas);
    }
    this.updateRely();
    this.isRecalculate = false;
  }

  /** 更新 计算坐标所需依赖 */
  private updateRely() {
    const { center, scale, rect, axisConfig } = this;

    const newRely = [
      center.x,
      center.y,
      scale,
      JSON.stringify(axisConfig),
      rect!.value.width,
      rect!.value.height,
    ].join();
    this.isRecalculate = this.rely !== newRely;
    this.rely = newRely;
  }

  /** 获取最大/小的 值 */
  maxMinValue = {
    minXV: 0,
    maxXV: 0,
    minYV: 0,
    maxYV: 0,
  };

  /** 重绘画布 */
  private redraw() {
    if (!this.canvas) return console.error("canvas is not HTMLCanvasElement");
    if (this.canvas.clientWidth == 0 || this.canvas.clientHeight == 0)
      return console.error(
        "The image argument is a canvas element with a width or height of 0."
      );

    this.updateCenter();

    this.updateRely();

    this.maxMinValue = this.getMaxMinValue();

    this.clearScreen();

    let canvasArr: [number, HTMLCanvasElement | (() => void)][] = [
      [0, () => this.drawAxis?.drawAxisAndGrid()],
    ];
    this.layerGroups.forEach(
      (layerGroup) => (canvasArr = canvasArr.concat(layerGroup.fetchCanvas()))
    );
    canvasArr.sort((a, b) => a[0] - b[0]);
    canvasArr.forEach(([, canvas]) => {
      if (typeof canvas === "function") canvas();
      else this.ctx.drawImage(canvas, 0, 0);
    });

    this.isRecalculate = false;
    this.isThemeUpdated = false;
  }

  /** 测量重绘性能 */
  private measureRedrawPerformance = _TimeConsumption(
    () => this.redraw(),
    [
      [1, "#F56C6C"],
      [0.5, "#E6A23C"],
      [0, "#67C23A"],
    ]
  );

  /** 重绘画布 同一个渲染帧只会执行一次 */
  redrawOnce(isAuto?: boolean) {
    if (this.isAuto && !isAuto) this.isAuto = false;

    if (!this.redrawInNextRenderFrame) {
      this.redrawInNextRenderFrame = true;
      requestAnimationFrame(() => {
        this.redrawInNextRenderFrame = false;
        this.measureRedrawPerformance();
        // this.redraw();
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

  /** 销毁resizeObserver监听器 */
  destroy() {
    this.resizeObserver?.disconnect();
  }
}

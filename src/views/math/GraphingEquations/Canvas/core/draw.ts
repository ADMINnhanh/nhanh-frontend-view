import { _Throttle } from "nhanh-pure-function";
import type Grid from "../tool/grid";
import Style from "./style";

/** 绘制方法 */
export default class Draw extends Style {
  /** 监听元素大小 */
  private resizeObserver?: ResizeObserver;

  /**
   * 在网格上开始创作
   *
   * 此函数可以有以下两种返回类型：
   * 1. void：表示创建过程不需要任何额外的信息或操作
   * 2. [number, () => void][]：表示返回一个数组，数组中的每个元素都是一个元组，
   *    元组的第一个元素是数字，绘制顺序，第二个元素是绘制方法
   */
  startCreationOnGrid?: () => void | [number, () => void][];
  /** 在网格下开始创作 */
  startCreationBelowGrid?: () => void;

  /** 计算坐标所需依赖 */
  rely = [this.center.x, this.center.y, this.scale].join();
  /** 是否需要重新计算坐标 */
  isRecalculate = false;

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

  // 封装添加函数到 zIndexs 对象的逻辑
  private addFunctionsToZIndexs(zIndexFuncPairs: [number, () => void][]) {
    const zIndexs: { [key: number]: (() => void)[] } = {};

    zIndexFuncPairs.forEach(([zIndex, func]) => {
      zIndexs[zIndex] = [...(zIndexs[zIndex] || []), func];
    });
    return zIndexs;
  }
  /** 重绘画布 */
  private redraw() {
    const { canvas, center, scale, rect } = this;
    if (!canvas || !rect)
      return console.error("canvas is not HTMLCanvasElement");

    this.updateCenter();

    const newRely = [center.x, center.y, scale].join();
    this.isRecalculate = this.rely !== newRely;
    this.rely = newRely;

    this.clearScreen();

    this.startCreationBelowGrid?.();

    this.drawGrid?.drawAxisAndGrid();

    const creationOnGrid = this.startCreationOnGrid;

    const zIndexs = this.addFunctionsToZIndexs(
      this.drawPoint
        .fetchDrawFunctions()
        .concat(this.drawLine.fetchDrawFunctions())
        .concat(Array.isArray(creationOnGrid) ? creationOnGrid : [])
    );

    Object.keys(zIndexs)
      .sort()
      .forEach((zIndex) => {
        const funcs = zIndexs[zIndex as unknown as number];
        funcs.forEach((func) => func());
      });

    if (typeof this.startCreationOnGrid === "function")
      this.startCreationOnGrid?.();

    this.isRecalculate = false;
  }
  // 在类中添加属性
  private drawTimes: number[] = [];
  // 保留最近10次的耗时数据
  private maxHistory = 10;
  /** 平均耗时 */
  private avgTime: number = 0;
  /** 测量重绘性能 */
  private measureRedrawPerformance() {
    // 记录开始时间
    const startTime = performance.now();

    // 执行重绘函数
    this.redraw();

    // 记录结束时间并计算本次重绘的耗时
    const elapsedTime = performance.now() - startTime;

    // 将本次耗时添加到 drawTimes 数组中
    this.drawTimes.push(elapsedTime);

    // 如果 drawTimes 数组的长度超过最大历史记录数，移除最早的记录
    if (this.drawTimes.length > this.maxHistory) this.drawTimes.shift();

    // 计算平均耗时
    this.avgTime =
      this.drawTimes.reduce((sum, time) => sum + time, 0) /
        this.drawTimes.length || 0;

    // 根据单次耗时确定颜色
    const singleColor =
      elapsedTime < 0.4 ? "#67C23A" : elapsedTime < 0.8 ? "#E6A23C" : "#F56C6C";

    // 根据平均耗时确定颜色
    const avgColor =
      this.avgTime < 0.4
        ? "#67C23A"
        : this.avgTime < 0.8
        ? "#E6A23C"
        : "#F56C6C";

    // 输出带样式的日志，包含单次耗时和平均耗时
    console.log(
      `%c单次耗时：${elapsedTime.toFixed(2)}ms
%c平均耗时（${this.drawTimes.length}次）：${this.avgTime.toFixed(2)}ms`,
      `color: ${singleColor}; padding: 2px 0;`,
      `color: ${avgColor}; padding: 2px 0;`
    );
  }

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
        const {
          grid = { main: true, secondary: true },
          axis = true,
          axisText = true,
        } = show;
        return { grid, axis, axisText };
      }
      // 布尔配置：全部属性同步开关
      if (typeof show === "boolean") {
        return {
          grid: { main: show, secondary: show },
          axis: show,
          axisText: show,
        };
      }
      // 无参数：根据当前状态取反
      show = !(
        this.drawGrid.show.axis ||
        this.drawGrid.show.axisText ||
        this.drawGrid.show.grid.main ||
        this.drawGrid.show.grid.secondary
      );
      return {
        grid: { main: show, secondary: show },
        axis: show,
        axisText: show,
      };
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

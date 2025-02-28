import { _Schedule, _Throttle } from "nhanh-pure-function";
import { Grid } from "./AxisAndGrid";

/** 基础数据 */
class BaseData {
  /** 画布元素 */
  canvas?: HTMLCanvasElement;
  /** 画布上下文 */
  ctx?: CanvasRenderingContext2D;
  /** 画布宽度 */
  width = 0;
  /** 画布高度 */
  height = 0;
  /** 画布偏移量 */
  offset = { x: 0, y: 0 };
  /** 画布中心点 */
  centent = { x: 0, y: 0 };
  /** 缩放比例 */
  scale = 1;
  /** 百分比 */
  percentage = 1;
  /** 网格大小 */
  gridConfig = {
    /** 初始状态下每个网格表示的数字 */
    count: 2,
    /** 网格最小尺寸 */
    min: 75,
    /** 网格最大尺寸 */
    max: 150,
    /** 网格当前大小 */
    size: 75,
  };
  /** 滚动10次一个周期 */
  cycle = 10;
  /** 滚轮滚动的值 */
  delta = 0.02;
  /** 是否在下一个渲染帧进行重绘 */
  protected redrawInNextRenderFrame = false;
  /** 是否正在自动调整 */
  protected isAuto = false;

  constructor(id: string) {
    const canvas = document.getElementById(id);
    if (canvas instanceof HTMLCanvasElement) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d")!;

      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      this.width = clientWidth;
      this.height = clientHeight;
    } else console.error("canvas is not HTMLCanvasElement");
  }

  /** 获取每个网格表示的数字 */
  getGridCount() {
    const { gridConfig, scale, cycle, delta } = this;

    let count = gridConfig.count;
    if (scale > 1) {
      count /= Math.pow(2, Math.floor((scale - 1) / (cycle * delta)));
    } else if (scale < 1) {
      count *= Math.pow(2, Math.ceil(Math.abs(scale - 1) / (cycle * delta)));
    }

    return count;
  }
  /** 获取鼠标在坐标轴上的位置 */
  getMousePositionOnAxis(event: MouseEvent) {
    const { canvas, centent } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { clientX, clientY } = event;
    const rect = canvas.getBoundingClientRect();
    const x = -(centent.x - (clientX - rect.left));
    const y = centent.y - (clientY - rect.top);
    return { x, y };
  }
  /** 获取坐标轴上的值 */
  getAxisPointValue(x: number, y: number) {
    const { gridConfig } = this;
    const count = this.getGridCount();
    const xV = (x / gridConfig.size) * count;
    const yV = (y / gridConfig.size) * count;
    return { xV, yV };
  }
  /** 通过坐标轴上的值 获取坐标轴上的点 */
  getAxisPointByValue(xV: number, yV: number) {
    const { gridConfig } = this;
    const count = this.getGridCount();
    const x = (xV / count) * gridConfig.size;
    const y = (yV / count) * gridConfig.size;
    return { x, y };
  }
  /** 更新网格大小 */
  updateSize() {
    const { scale, cycle, delta, gridConfig } = this;

    let size = (Math.abs(scale - 1) % (cycle * delta)) / delta;
    size = Math.round(scale < 1 ? cycle - size : size);
    gridConfig.size =
      (size / cycle) * (gridConfig.max - gridConfig.min) + gridConfig.min;

    this.percentage = this.getAxisPointByValue(2, 0).x / 75;
  }
}

/** 样式管理器 */
class Style extends BaseData {
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
        secondary: "#A3A6AD",
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
    const { ctx, theme } = this;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const style = this.style[theme];
    ctx.font = `${style.text.bold ? "bold" : ""} ${style.text.size}px ${
      style.text.family
    }`;
  }
  /** 清除画布 */
  clearScreen() {
    const { ctx, theme, width, height } = this;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    ctx.fillStyle = this.style[theme].background;
    ctx.fillRect(0, 0, width, height);
  }
  /** 添加样式 */
  addStyle(style: StyleType) {
    this.style = { ...this.style, ...style };
    this.initStyle();
  }
}
export class Draw extends Style {
  /** 监听元素大小 */
  private resizeObserver?: ResizeObserver;

  /** 开启网格 */
  private grid = true;
  /** 绘制网格 */
  protected drawGrid = new Grid();

  /** 在这里进行你的创作 */
  startCreation?: () => void;

  constructor(id: string) {
    super(id);
    if (this.canvas) {
      this.resizeObserver = new ResizeObserver(
        _Throttle(() => this.redrawOnce(), 100)
      );
      this.resizeObserver.observe(this.canvas);
    }
  }

  /** 重绘画布 */
  private redraw() {
    const { canvas, offset } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { clientWidth, clientHeight } = canvas;
    canvas.width = clientWidth;
    canvas.height = clientHeight;
    this.width = clientWidth;
    this.height = clientHeight;

    this.clearScreen();
    this.centent = {
      x: this.width / 2 + offset.x,
      y: this.height / 2 + offset.y,
    };

    if (this.grid) this.drawGrid.drawAxisAndGrid(this);

    this.startCreation?.();
  }
  /** 重绘画布 同一个渲染帧只会执行一次 */
  redrawOnce() {
    if (!this.redrawInNextRenderFrame) {
      this.redrawInNextRenderFrame = true;
      Promise.resolve().then(() => {
        this.redraw();
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
  toggleGrid() {
    this.grid = !this.grid;
    this.redrawOnce();
  }

  /** 销毁resizeObserver监听器 */
  destroy() {
    this.resizeObserver?.disconnect();
  }
}

/** 事件管理器 */
class Event extends Draw {
  /** 鼠标是否在画布内 */
  private mouseInCanvas = false;
  /** 鼠标是否按下 */
  private mouseIsDown = false;
  /** 鼠标上一帧位置 */
  private mouseLastPosition = { x: 0, y: 0 };

  private unBind?: () => void;

  constructor(id: string) {
    super(id);
    this.initEvent();
  }
  /** 初始化事件 */
  private initEvent() {
    const { canvas } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    // 定义事件配置数组：类型、处理函数、目标元素（默认canvas）
    const eventConfigs = [
      { type: "mouseenter", handler: this.mouseenter.bind(this) },
      { type: "mouseleave", handler: this.mouseleave.bind(this) },
      { type: "wheel", handler: this.wheel.bind(this) },
      { type: "mousedown", handler: this.mousedown.bind(this) },
      { type: "mouseup", handler: this.mouseup.bind(this), target: window },
      { type: "mousemove", handler: this.mousemove.bind(this), target: window },
    ];

    // 批量添加事件监听
    eventConfigs.forEach(({ type, handler, target = canvas }) => {
      target.addEventListener(type, handler as any);
    });

    // 销毁方法：批量移除事件监听
    this.unBind = () => {
      eventConfigs.forEach(({ type, handler, target = canvas }) => {
        target.removeEventListener(type, handler as any);
      });
    };
  }

  /** 鼠标进入画布 */
  private mouseenter(event: MouseEvent) {
    this.mouseInCanvas = true;
  }
  /** 鼠标离开画布 */
  private mouseleave(event: MouseEvent) {
    this.mouseInCanvas = false;
  }
  /** 滚轮滚动 */
  private wheel(event: WheelEvent) {
    const { delta, isAuto } = this;
    if (isAuto) this.isAuto = false;

    const { deltaY } = event;

    const mousePoint = this.getMousePositionOnAxis(event)!;
    const mouseValue = this.getAxisPointValue(mousePoint.x, mousePoint.y);

    /** 是否是放大 */
    if (deltaY < 0) this.scale += delta;
    else this.scale -= delta;

    this.updateSize();

    const newMousePoint = this.getAxisPointByValue(
      mouseValue.xV,
      mouseValue.yV
    );
    this.offset.x += -(newMousePoint.x - mousePoint.x);
    this.offset.y += newMousePoint.y - mousePoint.y;

    this.redrawOnce();
  }
  /** 鼠标按下 */
  private mousedown(event: MouseEvent) {
    this.mouseIsDown = true;
    const { clientX, clientY } = event;
    this.mouseLastPosition = { x: clientX, y: clientY };
  }
  /** 鼠标松开 */
  private mouseup(event: MouseEvent) {
    this.mouseIsDown = false;
  }
  /** 鼠标移动 */
  private mousemove(event: MouseEvent) {
    const { mouseIsDown, offset, mouseLastPosition } = this;
    if (mouseIsDown) {
      const { clientX, clientY } = event;

      offset.x += clientX - mouseLastPosition.x;
      offset.y += clientY - mouseLastPosition.y;

      this.redrawOnce();

      this.mouseLastPosition = { x: clientX, y: clientY };
    }
  }

  destroy() {
    super.destroy();
    this.unBind?.();
  }
}

/** 快速方法 */
class QuickMethod extends Event {
  /** 重置画布 */
  reset() {
    this.isAuto = true;
    const time = 300;
    const waitResetData = {
      offset: { ...this.offset },
      scale: this.scale - 1,
    };

    _Schedule((schedule) => {
      if (!this.isAuto) return;

      if (schedule === 1) {
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        this.updateSize();
        this.isAuto = false;
      } else if (schedule > 0) {
        schedule = 1 - schedule;
        this.offset = {
          x: waitResetData.offset.x * schedule,
          y: waitResetData.offset.y * schedule,
        };
        this.scale = 1 + waitResetData.scale * schedule;
        this.updateSize();
      }
      this.redrawOnce();
    }, time);
  }

  /** 缩放画布 */
  zoom(delta: number) {
    const { canvas } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");
    const rect = canvas.getBoundingClientRect();

    const mousePoint = this.getMousePositionOnAxis({
      clientX: rect.left + rect.width / 2,
      clientY: rect.top + rect.height / 2,
    } as any)!;
    const mouseValue = this.getAxisPointValue(mousePoint.x, mousePoint.y);

    this.scale += delta;

    this.updateSize();

    const newMousePoint = this.getAxisPointByValue(
      mouseValue.xV,
      mouseValue.yV
    );
    this.offset.x += -(newMousePoint.x - mousePoint.x);
    this.offset.y += newMousePoint.y - mousePoint.y;

    this.redrawOnce();
  }

  /** 放大 */
  zoomIn() {
    this.zoom(this.delta);
  }
  /** 缩小 */
  zoomOut() {
    this.zoom(-this.delta);
  }
  /** 设置主题 */
  setTheme(theme: KnownStyleKeys) {
    const { style, drawGrid } = this;
    if (theme in style) this.theme = theme;
    if (theme in drawGrid.style) drawGrid.theme = theme;
    this.redrawOnce();
  }
}

/** 画布类 */
export class Canvas extends QuickMethod {
  /** 销毁 */
  destroy() {
    super.destroy();
  }
}

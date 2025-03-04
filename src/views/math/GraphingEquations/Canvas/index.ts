import { _Schedule, _Throttle } from "nhanh-pure-function";
import { Grid } from "./AxisAndGrid";
import "./index.less";

/** 基础数据 */
class BaseData {
  /** 画布元素 */
  canvas?: HTMLCanvasElement;
  /** 画布上下文 */
  ctx?: CanvasRenderingContext2D;
  /** 画布矩形 */
  rect?: DOMRect;
  /** 画布偏移量 */
  offset = { x: 0, y: 0 };
  /** 画布中心点 */
  center = { x: 0, y: 0 };
  /** 默认画布中心点 */
  defaultCenter: DefaultCenter = {
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
  };
  /** 缩放比例 */
  scale = 1;
  /** 百分比 */
  percentage = 1;
  /** 网格大小 */
  gridConfig = {
    /** 缩放比例为1时每个网格表示的数字 */
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
  /** 是否在当前渲染帧进行重绘 */
  protected redrawInNextRenderFrame = false;
  /** 是否正在自动调整 */
  protected isAuto = false;

  constructor(id: string) {
    const canvas = document.getElementById(id);
    if (canvas instanceof HTMLCanvasElement) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d")!;
      this.rect = canvas.getBoundingClientRect();

      const { clientWidth, clientHeight } = canvas;
      [canvas.width, canvas.height] = [clientWidth, clientHeight];
    } else console.error("canvas is not HTMLCanvasElement");
  }

  /** 更新中心点 */
  updateCenter() {
    const { canvas, rect, offset, defaultCenter } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { width, height } = rect!;
    const { top, bottom, left, right } = defaultCenter;

    // 值解析策略
    const valueParsers = {
      /* 垂直方向解析 */
      vertical: (value: string | number, max: number) => {
        if (value == Infinity || value == -Infinity) return undefined;
        if (typeof value === "number") return value;
        if (["top", "left"].includes(value)) return 0;
        if (["bottom", "right"].includes(value)) return max;
        if (["middle", "center"].includes(value)) return max / 2;
        const percent = value.match(/^(\d+)%*$/)?.[1];
        return (
          (percent ? (max * Number(percent)) / 100 : Number(value)) || undefined
        );
      },

      /* 反向解析 (bottom/right) */
      reverse: (value: string | number, max: number) => {
        if (value == Infinity || value == -Infinity) return undefined;
        if (typeof value === "number") return max - value;
        const parsed = valueParsers.vertical(value, max);
        return parsed ? max - parsed : undefined;
      },
    };

    // 坐标计算器
    const calculateCoordinate = (
      primary: string | number | undefined,
      secondary: string | number | undefined,
      max: number
    ) => {
      if (primary !== undefined) {
        const v = valueParsers.vertical(primary, max);
        if (v !== undefined) return v;
      }
      if (secondary !== undefined) {
        const v = valueParsers.reverse(secondary, max);
        if (v !== undefined) return v;
      }
      return max / 2;
    };

    // 计算坐标
    const y = calculateCoordinate(top, bottom, height);
    const x = calculateCoordinate(left, right, width);

    this.center = {
      x: x + offset.x,
      y: y + offset.y,
    };
  }
  /** 更新网格大小 */
  updateSize() {
    const { scale, cycle, delta, gridConfig } = this;

    let size = (Math.abs(scale - 1) % (cycle * delta)) / delta;
    size = Math.round(scale < 1 ? cycle - size : size);
    gridConfig.size =
      (size / cycle) * (gridConfig.max - gridConfig.min) + gridConfig.min;

    this.percentage =
      this.getAxisPointByValue(gridConfig.count, 0).x / gridConfig.min;
  }

  /** 设置缩放 */
  setScale(
    event: "center" | { clientX: number; clientY: number },
    delta: number
  ) {
    const { canvas, rect } = this;
    if (!canvas || !rect)
      return console.error("canvas is not HTMLCanvasElement");

    let clientX, clientY;
    if (event === "center") {
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    } else {
      [clientX, clientY] = [event.clientX, event.clientY];
    }

    const mousePoint = this.getMousePositionOnAxis({ clientX, clientY })!;
    const mouseValue = this.getAxisPointValue(mousePoint.x, mousePoint.y);

    this.scale += delta;

    this.updateSize();

    const newMousePoint = this.getAxisPointByValue(
      mouseValue.xV,
      mouseValue.yV
    );
    this.offset.x += -(newMousePoint.x - mousePoint.x);
    this.offset.y += newMousePoint.y - mousePoint.y;
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
  getMousePositionOnAxis(event: { clientX: number; clientY: number }) {
    const { canvas, center, rect } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { clientX, clientY } = event;
    const { left, top } = rect!;

    const x = -(center.x - (clientX - left));
    const y = center.y - (clientY - top);
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

  destroy() {
    this.canvas = undefined;
    this.ctx = undefined;
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

/** 绘制方法 */
export class Draw extends Style {
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
      { type: "click", handler: this.click.bind(this) },
      { type: "contextmenu", handler: this.contextmenu.bind(this) },
      { type: "mouseenter", handler: this.mouseenter.bind(this) },
      { type: "mouseleave", handler: this.mouseleave.bind(this) },
      { type: "keydown", handler: this.keydown.bind(this), target: window },
      { type: "keyup", handler: this.keyup.bind(this), target: window },
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
  /** 鼠标左键点击画布 */
  private click(event: MouseEvent) {
    console.log("mouseclick");
  }
  /** 鼠标右键点击画布 */
  private contextmenu(event: MouseEvent) {
    event.preventDefault();
    console.log("mousecontextmenu");
  }
  /** 鼠标进入画布 */
  private mouseenter(event: MouseEvent) {
    this.mouseInCanvas = true;
  }
  /** 鼠标离开画布 */
  private mouseleave(event: MouseEvent) {
    this.mouseInCanvas = false;
  }

  /** 上次按下的按键 */
  private lastPressedKey = {
    /** 按下的按键 */
    key: "",
    /** 松开的时间 */
    keyupTime: 0,
    /** 是否是双击 */
    dblclick: false,
  };
  /** 获取按键的步长 */
  private getStep(key: string): number {
    const { lastPressedKey } = this;
    if (lastPressedKey.dblclick) return 4;

    if (
      lastPressedKey.key === key &&
      Date.now() - lastPressedKey.keyupTime < 300
    ) {
      lastPressedKey.dblclick = true;
      return 4;
    }

    return 1;
  }
  /** 键盘按下事件 */
  private keydown(event: KeyboardEvent) {
    const { mouseInCanvas, offset, delta } = this;
    if (mouseInCanvas) {
      // console.log(event.key);

      const key = event.key;
      const step = this.getStep(key);

      switch (key) {
        case "ArrowUp":
          offset.y -= step;
          break;
        case "ArrowDown":
          offset.y += step;
          break;
        case "ArrowLeft":
          offset.x -= step;
          break;
        case "ArrowRight":
          offset.x += step;
          break;
        case "+":
          this.setScale("center", delta);
          break;
        case "-":
          this.setScale("center", -delta);
          break;
      }

      /** 是否需要重绘 */
      const shouldRedraw = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "+",
        "-",
      ].includes(key);

      if (shouldRedraw) this.redrawOnce();
    }
  }
  /** 键盘松开事件 */
  private keyup(event: KeyboardEvent) {
    const { mouseInCanvas, lastPressedKey } = this;
    if (mouseInCanvas) {
      const key = event.key;
      lastPressedKey.key = key;
      lastPressedKey.keyupTime = Date.now();
      lastPressedKey.dblclick = false;
    }
  }
  /** 滚轮滚动 */
  private wheel(event: WheelEvent) {
    const { delta } = this;

    this.setScale(event, event.deltaY < 0 ? delta : -delta);
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
      if (!this.isAuto || !this.canvas) return;

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
      this.redrawOnce(true);
    }, time);
  }
  /** 缩放画布 */
  zoom(delta: number) {
    const { canvas, rect } = this;
    if (!canvas || !rect)
      return console.error("canvas is not HTMLCanvasElement");

    this.setScale("center", delta);

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

import Draw from "./draw";

/** 事件管理器 */
export default class Event extends Draw {
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

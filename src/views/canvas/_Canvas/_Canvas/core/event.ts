import { _CalculateDistance2D, _GetMidpoint } from "nhanh-pure-function";
import type { Overlay } from "../OverlayGroup";
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
      { type: "touchend", handler: this.touchend.bind(this) },
      { type: "touchmove", handler: this.touchmove.bind(this) },
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

  /** 上一个被点击的覆盖物 */
  private lastClickedOverlay?: Overlay;
  /** 鼠标左键点击画布 */
  private click(event: MouseEvent) {
    const clickOverlay = this.findOverlayByPoint(event.offsetX, event.offsetY);

    if (this.lastClickedOverlay != clickOverlay)
      this.lastClickedOverlay?.notifyClick(false, event.offsetX, event.offsetY);

    clickOverlay?.notifyClick(true, event.offsetX, event.offsetY);
    this.lastClickedOverlay = clickOverlay;
  }
  /** 鼠标右键点击画布 */
  private contextmenu(event: MouseEvent) {
    event.preventDefault();
    console.log("mousecontextmenu");
    this.lastClickedOverlay?.notifyClick(false, event.offsetX, event.offsetY);
    this.lastClickedOverlay = undefined;
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
    const { mouseInCanvas, offset, delta, lockDragAndResize } = this;
    const key = event.key;
    // console.log(key);

    if (mouseInCanvas) {
      if (!lockDragAndResize) {
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
    event.preventDefault();

    const { delta, lockDragAndResize } = this;
    if (lockDragAndResize) return;

    this.setScale(event, event.deltaY < 0 ? delta : -delta);
    this.redrawOnce();
  }
  /** 上一个被点击的覆盖物 */
  private lastDownOverlay?: Overlay;
  /** 鼠标按下 */
  private mousedown(event: MouseEvent) {
    this.mouseIsDown = true;
    const { clientX, clientY } = event;
    this.mouseLastPosition = { x: clientX, y: clientY };

    const downOverlay = this.findOverlayByPoint(event.offsetX, event.offsetY);

    if (this.lastDownOverlay != downOverlay) {
      this.lastDownOverlay?.notifyDown(false, event.offsetX, event.offsetY);
      downOverlay?.notifyDown(true, event.offsetX, event.offsetY);
    }

    this.lastDownOverlay = downOverlay;
  }
  /** 鼠标松开 */
  private mouseup(event: MouseEvent) {
    this.mouseIsDown = false;
    this.lastDownOverlay = undefined;
  }

  /** 上一个被hover的覆盖物 */
  private lastHoverOverlay?: Overlay;
  /** 鼠标移动 */
  private mousemove(event: MouseEvent) {
    const { clientX, clientY } = event;
    const { mouseIsDown, offset, mouseLastPosition, lockDragAndResize } = this;

    if (mouseIsDown) {
      if (lockDragAndResize) return;
      if (this.lastDownOverlay?.draggable) {
        this.lastDownOverlay.notifyDraggable(
          clientX - mouseLastPosition.x,
          clientY - mouseLastPosition.y
        );
      } else {
        offset.x += clientX - mouseLastPosition.x;
        offset.y += clientY - mouseLastPosition.y;

        this.redrawOnce();
      }
      this.mouseLastPosition = { x: clientX, y: clientY };
    } else {
      /** hover 覆盖物 */ {
        const rect = this.rect!.value;
        const x = clientX - rect.x;
        const y = clientY - rect.y;
        if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
        const hoverOverlay = this.findOverlayByPoint(
          event.offsetX,
          event.offsetY
        );

        const getClass = (overlay: Overlay) => {
          if (overlay.draggable) return "_nhanh_canvas_hover_overlay_draggable";
          else return "_nhanh_canvas_hover_overlay";
        };

        if (this.lastHoverOverlay != hoverOverlay) {
          if (this.lastHoverOverlay) {
            this.canvas.classList.remove(getClass(this.lastHoverOverlay));
            this.lastHoverOverlay.notifyHover(
              false,
              event.offsetX,
              event.offsetY
            );
          }
          if (hoverOverlay) {
            this.canvas.classList.add(getClass(hoverOverlay));
            hoverOverlay.notifyHover(true, event.offsetX, event.offsetY);
          }
        }

        this.lastHoverOverlay = hoverOverlay;
      }
    }
  }

  private oldClientX: number[] = [];
  private oldClientY: number[] = [];
  /** 移动端 松开 */
  private touchend(event: TouchEvent) {
    this.oldClientX = this.oldClientY = [];
  }
  /** 移动端 移动 */
  private touchmove(event: TouchEvent) {
    const touches = event.touches;
    event.preventDefault();
    const { oldClientX, oldClientY, offset, delta, lockDragAndResize } = this;

    if (!lockDragAndResize) {
      if (touches.length === 1) {
        const { clientX, clientY } = touches[0];
        if (oldClientX.length) {
          offset.x += clientX - oldClientX[0];
          offset.y += clientY - oldClientY[0];
          this.redrawOnce();
        }
        this.oldClientX = [clientX];
        this.oldClientY = [clientY];
      } else if (touches.length === 2) {
        const { clientX: clientX1, clientY: clientY1 } = touches[0];
        const { clientX: clientX2, clientY: clientY2 } = touches[1];

        if (oldClientX.length == 2) {
          const oldDistance = _CalculateDistance2D(
            oldClientX[0],
            oldClientY[0],
            oldClientX[1],
            oldClientY[1]
          );
          const newDistance = _CalculateDistance2D(
            clientX1,
            clientY1,
            clientX2,
            clientY2
          );

          const { x: clientX, y: clientY } = _GetMidpoint(
            clientX1,
            clientY1,
            clientX2,
            clientY2
          );

          this.setScale(
            { clientX, clientY },
            newDistance > oldDistance ? delta : -delta
          );
          this.redrawOnce();
        }
        this.oldClientX = [clientX1, clientX2];
        this.oldClientY = [clientY1, clientY2];
      }
    }
  }

  /** 销毁事件 */
  destroy() {
    super.destroy();
    this.unBind?.();
  }
}

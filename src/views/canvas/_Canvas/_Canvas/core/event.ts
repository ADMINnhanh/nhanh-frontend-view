import { _CalculateDistance2D, _GetMidpoint } from "nhanh-pure-function";
import type { Overlay } from "../OverlayGroup";
import Draw from "./draw";
import type { EventHandler } from "../public/eventController";

type ConstructorOption = ConstructorParameters<typeof Draw>[0];

/** 事件管理器 */
export default class Event extends Draw {
  /** 鼠标是否在画布内 */
  private mouseInCanvas = false;
  /** 鼠标是否按下 */
  private mouseIsDown = false;
  /** 鼠标上一帧位置 */
  private mouseLastPosition = { x: 0, y: 0 };

  private unBind?: () => void;

  constructor(option: ConstructorOption) {
    super(option);
    this.initEvent();
    this.addEventListener("contextmenu", this.defaultContextmenu);
    this.addEventListener("down", this.defaultDown);
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
  private lockNotifyClick = false;
  /** 鼠标左键点击画布 */
  private click(event: MouseEvent) {
    if (this.lockNotifyClick) return (this.lockNotifyClick = false);

    const clickOverlay = this.findOverlayByPoint(event.offsetX, event.offsetY);

    if (this.lastClickedOverlay != clickOverlay)
      this.lastClickedOverlay?.notifyClick(false, event);

    clickOverlay?.notifyClick(true, event);
    this.lastClickedOverlay = clickOverlay;

    this.notifyClick(true, event);
  }
  /** 上一个被右击的覆盖物 */
  private lastContextmenuOverlay?: Overlay;
  /** 鼠标右键点击画布 */
  private contextmenu(event: MouseEvent) {
    event.preventDefault();
    const contextmenuOverlay = this.findOverlayByPoint(
      event.offsetX,
      event.offsetY
    );

    if (this.lastContextmenuOverlay != contextmenuOverlay)
      this.lastContextmenuOverlay?.notifyContextmenu(false, event);

    contextmenuOverlay?.notifyContextmenu(true, event);
    this.lastContextmenuOverlay = contextmenuOverlay;

    this.notifyContextmenu(true, event);
  }
  defaultContextmenu: EventHandler<"contextmenu"> = (event, mouseEvent) => {
    const lastClickedOverlay = this.lastClickedOverlay;
    if (lastClickedOverlay?.isDraggable)
      lastClickedOverlay.notifyClick(false, mouseEvent);
  };
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
    doubleClick: false,
  };
  /** 获取按键的步长 */
  private getStep(key: string): number {
    const { lastPressedKey } = this;
    if (lastPressedKey.doubleClick) return 4;

    if (
      lastPressedKey.key === key &&
      Date.now() - lastPressedKey.keyupTime < 300
    ) {
      lastPressedKey.doubleClick = true;
      return 4;
    }

    return 1;
  }
  /** 键盘按下事件 */
  private keydown(event: KeyboardEvent) {
    const { mouseInCanvas, offset, delta } = this;
    const key = event.key;
    if (mouseInCanvas) {
      if (this.isDraggable && !this.isAuto) {
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
      lastPressedKey.doubleClick = false;
    }
  }
  /** 滚轮滚动 */
  private wheel(event: WheelEvent) {
    event.preventDefault();

    const { delta, isScaleable, isAuto } = this;

    if (!isScaleable || isAuto) return;

    this.setScale(event, event.deltaY < 0 ? delta : -delta);
    // console.log(
    //   "scale:" + this.scale,
    //   "offset:" + JSON.stringify(this.offset),
    //   "GridSize:" + this.getGridSize(this.scale)
    // );

    this.redrawOnce();
  }
  /** 上一个被点击的覆盖物 */
  private lastDownOverlay?: Overlay;
  /** 鼠标按下 */
  private mousedown(event: MouseEvent) {
    const { clientX, clientY } = event;
    this.mouseLastPosition = { x: clientX, y: clientY };

    const downOverlay = this.findOverlayByPoint(event.offsetX, event.offsetY);

    if (this.lastDownOverlay != downOverlay) {
      this.lastDownOverlay?.notifyDown(false, event);
      downOverlay?.notifyDown(true, event);
    }

    this.lastDownOverlay = downOverlay;

    this.notifyDown(true, event);
  }
  defaultDown: EventHandler<"down"> = (event, mouseEvent) => {
    if (mouseEvent?.button == 0) this.mouseIsDown = true;
  };
  /** 鼠标松开 */
  private mouseup(event: MouseEvent) {
    this.mouseIsDown = false;
    this.lastDownOverlay = undefined;
  }

  /** 上一个被hover的覆盖物 */
  private lastHoverOverlay?: Overlay;
  /** 鼠标移动 */
  private mousemove(event: MouseEvent) {
    if (this.isAuto) return;

    this.canvas.classList.toggle("_nhanh_canvas_draggable", this.isDraggable);

    // 处理拖拽逻辑
    if (this.mouseIsDown) this.handleDragMove(event);
    // 处理 hover 逻辑
    else this.handleHover(event);
  }
  /** 处理拖拽移动 */
  private handleDragMove(event: MouseEvent) {
    const { lastDownOverlay } = this;

    if (!this.isDraggable) return;

    if (lastDownOverlay?.isDraggable) {
      this.notifyDraggOverlays(event);
    } else {
      this.handleCanvasPan(event);
    }

    const { clientX, clientY } = event;
    this.mouseLastPosition = { x: clientX, y: clientY };
    this.lockNotifyClick = true;
  }
  /** 通知可拖拽的 overlays */
  private notifyDraggOverlays(event: MouseEvent) {
    const lastDownOverlay = this.lastDownOverlay!;
    const { mouseLastPosition } = this;
    const { clientX, clientY } = event;

    lastDownOverlay.notifyDragg(
      {
        offsetX: clientX - mouseLastPosition.x,
        offsetY: clientY - mouseLastPosition.y,
      },
      event
    );
  }
  /** 处理画布平移 */
  private handleCanvasPan(event: MouseEvent) {
    const { clientX, clientY } = event;
    const { offset, mouseLastPosition } = this;

    const offsetX = clientX - mouseLastPosition.x;
    const offsetY = clientY - mouseLastPosition.y;

    offset.x += offsetX;
    offset.y += offsetY;
    this.redrawOnce();
    this.notifyDragg({ offsetX, offsetY }, event);
  }
  /** 处理 hover 逻辑 */
  private handleHover(event: MouseEvent) {
    const { clientX, clientY } = event;
    const rect = this.rect!.value;
    const x = clientX - rect.x;
    const y = clientY - rect.y;

    // 检查是否在画布范围内
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      return;
    }

    const hoverOverlay = this.findOverlayByPoint(event.offsetX, event.offsetY);

    this.updateHoverState(hoverOverlay, event);

    this.notifyHover(true, event);
  }
  /** 更新 hover 状态 */
  private updateHoverState(
    hoverOverlay: Overlay | undefined,
    event: MouseEvent
  ) {
    if (this.lastHoverOverlay === hoverOverlay) return;

    const isSharedHover =
      this.lastHoverOverlay &&
      hoverOverlay &&
      hoverOverlay.hasController("hover", this.lastHoverOverlay);

    if (!isSharedHover) {
      this.clearHoverState(event);
      this.applyHoverState(hoverOverlay, event);
    }

    this.lastHoverOverlay = hoverOverlay;
  }
  /** 清除旧的 hover 状态 */
  private clearHoverState(event: MouseEvent) {
    if (!this.lastHoverOverlay) return;

    this.canvas.classList.remove(this.getHoverClass(this.lastHoverOverlay));
    this.lastHoverOverlay.notifyHover(false, event);
  }
  /** 应用新的 hover 状态 */
  private applyHoverState(overlay: Overlay | undefined, event: MouseEvent) {
    if (!overlay) return;

    this.canvas.classList.add(this.getHoverClass(overlay));
    overlay.notifyHover(true, event);
  }
  /** 获取 hover 的 CSS class */
  private getHoverClass(overlay: Overlay): string {
    return overlay?.isDraggable
      ? "_nhanh_canvas_hover_overlay_draggable"
      : "_nhanh_canvas_hover_overlay";
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
    const { oldClientX, oldClientY, offset, delta, isAuto, isDraggable } = this;

    if (isDraggable && !isAuto) {
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

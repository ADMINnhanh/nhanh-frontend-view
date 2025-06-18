import {
  _AreAllArraysValid,
  _CalculateDistance2D,
  _GetMidpoint,
  _IsSingleArrayValid,
} from "nhanh-pure-function";
import type { OverlayType } from "../OverlayGroup";
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
    this.addEventListener("wheel", this.defaultWheel);
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
  private lastClickedOverlay?: OverlayType;
  private lockNotifyClick = false;
  /** 鼠标左键点击画布 */
  private click(event: MouseEvent) {
    if (!this.isClickable) return;

    if (this.lockNotifyClick) return (this.lockNotifyClick = false);

    const clickOverlay = this.findOverlayByPoint(event.offsetX, event.offsetY);

    if (this.lastClickedOverlay != clickOverlay)
      this.lastClickedOverlay?.notifyClick(false, event);

    clickOverlay?.notifyClick(true, event);
    this.lastClickedOverlay = clickOverlay;

    this.notifyClick(true, event);
  }
  /** 上一个被右击的覆盖物 */
  private lastContextmenuOverlay?: OverlayType;
  /** 鼠标右键点击画布 */
  private contextmenu(event: MouseEvent) {
    if (!this.isContextmenuable) return;

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
    const { mouseInCanvas, offset, delta, axisConfig } = this;
    const key = event.key;

    if (!mouseInCanvas || !this.isDraggable || this.isAuto) return;

    const step = this.getStep(key);
    const overlay = this.lastClickedOverlay;
    const moveOverlay =
      overlay?.isDraggable && this.currentDrawOverlays.includes(overlay);
    const valueType =
      moveOverlay &&
      (_AreAllArraysValid(overlay.value)
        ? "Matrix"
        : _IsSingleArrayValid(overlay.value)
        ? "Single"
        : false);

    // 方向键处理逻辑抽象
    const handleDirection = (dx: number, dy: number) => {
      if (!valueType) {
        offset.x += dx * step;
        offset.y += dy * step;
        return true;
      }

      const stepPx = this.getAxisValueByPoint(step, 0).xV;
      const [xStep, yStep] = [stepPx * axisConfig.x, stepPx * axisConfig.y];

      if (valueType === "Single") {
        const val = overlay!.value as number[];
        val[0] += dx * xStep;
        val[1] += dy * yStep;
      } else {
        // Matrix
        (overlay!.value as number[][]).forEach((point) => {
          point[0] += dx * xStep;
          point[1] += dy * yStep;
        });
      }

      // 触发响应式更新
      overlay!.value = [...overlay!.value!];
      return true;
    };

    // 缩放操作抽象
    const handleScale = (direction: number) => {
      this.setScale("center", direction * delta);
      return true;
    };

    const actionMap: Record<string, () => boolean> = {
      ArrowUp: () => handleDirection(0, -1),
      ArrowDown: () => handleDirection(0, 1),
      ArrowLeft: () => handleDirection(-1, 0),
      ArrowRight: () => handleDirection(1, 0),
      "+": () => handleScale(1),
      "-": () => handleScale(-1),
    };

    const actionHandler = actionMap[key];
    if (actionHandler?.()) {
      this.redrawOnce();
      event.preventDefault();
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
    if (!this.isWheelable) return;
    event.preventDefault();

    const { delta, isAuto } = this;

    if (isAuto) return;

    const step = event.deltaY < 0 ? delta : -delta;

    const overlay = this.findOverlayByPoint(event.offsetX, event.offsetY);
    overlay?.notifyWheel(step, event);

    this.notifyWheel(step, event);
  }
  defaultWheel: EventHandler<"wheel"> = (event, mouseEvent) => {
    this.setScale(mouseEvent!, event.data);
    // console.log(
    //   "scale:" + this.scale,
    //   "offset:" + JSON.stringify(this.offset),
    //   "GridSize:" + this.getGridSize(this.scale),
    //   "density:" + this.getNowGridCount / this.axisConfig.size
    // );

    this.redrawOnce();
  };
  /** 上一个被按下的覆盖物 */
  private lastDownOverlay?: OverlayType;
  /** 鼠标按下 */
  private mousedown(event: MouseEvent) {
    if (!this.isDownable) return;

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
  private lastHoverOverlay?: OverlayType;
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
    if (!this.isDraggable) return;

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
    if (!this.isHoverable) return;

    if (event.target != this.canvas) return;

    const hoverOverlay = this.findOverlayByPoint(event.offsetX, event.offsetY);

    this.updateHoverState(hoverOverlay, event);

    this.notifyHover(true, event);
  }
  /** 最后的光标样式 */
  private lastCursorStyle?: string;
  /** 更新 hover 状态 */
  private updateHoverState(
    hoverOverlay: OverlayType | undefined,
    event: MouseEvent
  ) {
    if (this.lastHoverOverlay === hoverOverlay) {
      const cursorStyle = hoverOverlay?.cursorStyle;
      if (cursorStyle !== this.lastCursorStyle) {
        this.lastCursorStyle &&
          this.canvas.classList.remove(this.lastCursorStyle);
        cursorStyle && this.canvas.classList.add(cursorStyle);
        this.lastCursorStyle = cursorStyle;
      }
      return;
    }

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

    this.lastHoverOverlay.notifyHover(false, event);
    this.canvas.classList.remove(this.lastHoverOverlay.cursorStyle);
  }
  /** 应用新的 hover 状态 */
  private applyHoverState(overlay: OverlayType | undefined, event: MouseEvent) {
    if (!overlay) return;

    overlay.notifyHover(true, event);
    this.lastCursorStyle = overlay.cursorStyle;
    this.canvas.classList.add(this.lastCursorStyle);
  }

  private oldClientX: number[] = [];
  private oldClientY: number[] = [];
  /** 移动端 松开 */
  private touchend(event: TouchEvent) {
    this.oldClientX = this.oldClientY = [];
  }
  /** 移动端 移动 */
  private touchmove(event: TouchEvent) {
    if (!this.isDraggable) return;

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

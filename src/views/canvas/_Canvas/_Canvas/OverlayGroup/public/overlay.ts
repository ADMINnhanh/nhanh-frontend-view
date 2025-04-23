import _Canvas from "../..";
import Show from "./show";
import { type Overlay as OverlayType } from "../index";

const eventType = ["click", "dblclick", "hover", "draggable"] as const;
type EventType = (typeof eventType)[number];

export default abstract class Overlay<
  T,
  V extends [number, number] | [number, number][]
> {
  static ctx = document.createElement("canvas").getContext("2d")!;

  /** 是否显示 */
  show = new Show();
  /** 样式 */
  style?: DeepPartial<T> | string;
  /** 坐标轴上的点位 */
  position?: V;
  /** 坐标轴上的值 */
  value?: V;
  /** 层级 */
  zIndex: number;
  /** 动态点位 */
  dynamicPosition?: V;
  /** 名称 */
  name?: string;

  /** 是否可交互 */
  isInteractable = true;
  /** 绘制路径 */
  protected path?: Path2D;

  /** 自定义扩展数据 */
  extData?: any;

  /** 事件管理器 */
  private eventListener = new Map<EventType, Set<(state: boolean) => void>>();

  constructor(overlay: {
    /** 主画布 */
    mainCanvas?: _Canvas;
    /** 通知重新加载 */
    notifyReload?: (needForceExecute?: boolean) => void;
    /** 是否显示 */
    show?: boolean;
    /** 样式 */
    style?: DeepPartial<T> | string;
    /** 层级 */
    zIndex?: number;
    /** 坐标轴上的点位 */
    position?: V;
    /** 动态点位 */
    dynamicPosition?: V;
    /** 坐标轴上的值 */
    value?: V;
    /** 名称 */
    name?: string;
    /** 是否可拖动 */
    draggable?: boolean;
    /** 是否可交互 */
    isInteractable?: boolean;
  }) {
    this.mainCanvas = overlay.mainCanvas;
    if (overlay.notifyReload) this.setNotifyReload(overlay.notifyReload);
    this.show.setShow(overlay.show ?? true);
    this.style = overlay.style;
    this.zIndex = overlay.zIndex ?? 0;
    this.position = overlay.position;
    this.dynamicPosition = overlay.dynamicPosition;
    this.value = overlay.value;
    this.name = overlay.name;
    this.draggable = overlay.draggable ?? false;
    this.isInteractable = overlay.isInteractable ?? true;

    eventType.forEach((key) => this.eventListener.set(key, new Set()));
  }

  addEventListener(type: EventType, listener: (state: boolean) => void) {
    this.eventListener.get(type)?.add(listener);
  }
  removeEventListener(type: EventType, listener: (state: boolean) => void) {
    this.eventListener.get(type)?.delete(listener);
  }

  /** 是否点击 */
  isClick = false;
  clickTime = 0;
  /** 是否双击 */
  isDblClick = false;
  notifyClick(isClick: boolean, offsetX: number, offsetY: number) {
    if (isClick) {
      this.isDblClick = Date.now() - this.clickTime < 300;
      this.clickTime = Date.now();
    } else {
      this.isDblClick = false;
      this.clickTime = 0;
    }
    this.isClick = isClick;

    if (!this.isInteractable) return;
    if (this.isDblClick) {
      this.eventListener.get("dblclick")?.forEach((listener) => listener(true));
    } else if (this.isClick) {
      this.eventListener.get("click")?.forEach((listener) => listener(true));
    }
  }
  /** 是否按下 */
  isDown = false;
  notifyDown(isDown: boolean, offsetX: number, offsetY: number) {
    this.isDown = isDown;
  }
  /** 是否悬停 */
  isHover = false;
  notifyHover(isHover: boolean, offsetX: number, offsetY: number) {
    this.isHover = isHover;

    if (!this.isInteractable) return;
    this.eventListener.get("hover")?.forEach((listener) => listener(isHover));
  }
  /** 是否可拖动 */
  draggable = false;
  notifyDraggable(offsetX: number, offsetY: number) {
    if (this.mainCanvas) {
      const { percentage, axisConfig } = this.mainCanvas;
      const base = axisConfig.count / axisConfig.min / percentage;
      const x = {
        value: offsetX * base * axisConfig.x,
        position: (offsetX / percentage) * axisConfig.x,
        dynamicPosition: offsetX * axisConfig.x,
      };
      const y = {
        value: offsetY * base * axisConfig.y,
        position: (offsetY / percentage) * axisConfig.y,
        dynamicPosition: offsetY * axisConfig.y,
      };
      return { x, y };
    }

    if (!this.isInteractable) return;
    this.eventListener.get("draggable")?.forEach((listener) => listener(true));
  }

  abstract updateBaseData(): void;
  abstract isPointInPath(x: number, y: number): boolean;
  abstract isPointInStroke(x: number, y: number): boolean;
  isPointInAnywhere(x: number, y: number) {
    return this.isPointInPath(x, y) || this.isPointInStroke(x, y);
  }

  /** 主画布 */
  mainCanvas?: _Canvas;
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    mainCanvas && this.updateBaseData();
  }
  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }

  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;
  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute?: boolean) => {
          if (needForceExecute) {
            notifyReload();
          } else if (this.show.shouldRender(this.mainCanvas?.scale)) {
            notifyReload();
          }
        }
      : undefined;

    this.show.notifyReload = this.notifyReload;
  }

  setStyle(style?: Overlay<T, V>["style"]) {
    this.style = style;
    if (this.dynamicPosition) this.notifyReload?.();
  }
  setZIndex(zIndex: Overlay<T, V>["zIndex"]) {
    this.zIndex = zIndex;
    if (this.dynamicPosition) this.notifyReload?.();
  }
  setPosition(position: Overlay<T, V>["position"]) {
    this.position = position;
    /** 位置改变时，清除值信息 */
    this.value = undefined;
    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseData();
    if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
  }
  setValue(value: Overlay<T, V>["value"]) {
    this.value = value;
    /** 值改变时，清除位置信息 */
    this.position = undefined;
    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseData();
    if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
  }

  /** 获取绘制函数 */
  abstract getDraw():
    | [(ctx: CanvasRenderingContext2D) => void, OverlayType]
    | void;
}

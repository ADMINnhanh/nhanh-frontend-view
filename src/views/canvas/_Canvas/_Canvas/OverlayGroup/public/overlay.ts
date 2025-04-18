import _Canvas from "../..";
import Show from "./show";
import { type Overlay as OverlayType } from "../index";

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
  /** 是否可拖动 */
  draggable = false;

  /** 绘制路径 */
  protected path?: Path2D;

  /** 自定义扩展数据 */
  extData?: any;

  constructor(overlay: {
    show?: boolean;
    style?: DeepPartial<T> | string;
    zIndex?: number;
    position?: V;
    dynamicPosition?: V;
    value?: V;
    name?: string;
    draggable?: boolean;
  }) {
    this.show.setShow(overlay.show ?? true);
    this.style = overlay.style;
    this.zIndex = overlay.zIndex ?? 0;
    this.position = overlay.position;
    this.dynamicPosition = overlay.dynamicPosition;
    this.value = overlay.value;
    this.name = overlay.name;
    this.draggable = overlay.draggable ?? false;
  }

  isClick = false;
  notifyClick(isClick: boolean) {
    this.isClick = isClick;
  }
  isDown = false;
  notifyDown(isDown: boolean) {
    this.isDown = isDown;
  }
  isHover = false;
  notifyHover(isHover: boolean) {
    this.isHover = isHover;
  }
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
    this.updateBaseData();
  }
  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }

  /** 通知重新加载 */
  protected notifyReload?: (needForceExecute?: boolean) => void;
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

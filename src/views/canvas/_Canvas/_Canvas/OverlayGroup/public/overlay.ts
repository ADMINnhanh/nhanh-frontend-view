import _Canvas from "../..";
import Show from "./show";

export default abstract class Overlay<
  T,
  V extends [number, number] | [number, number][]
> {
  /** 是否显示 */
  show = new Show();
  protected style?: DeepPartial<T> | string;
  protected zIndex: number;
  protected position?: V;
  protected value?: V;
  protected dynamicPosition?: V;

  /** 自定义扩展数据 */
  extData?: any;

  constructor(overlay: {
    show?: boolean;
    style?: DeepPartial<T> | string;
    zIndex?: number;
  }) {
    this.show.setShow(overlay.show ?? true);
    this.style = overlay.style;
    this.zIndex = overlay.zIndex ?? 0;
  }

  abstract updateBaseDate(): void;

  /** 主画布 */
  protected mainCanvas?: _Canvas;
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    this.updateBaseDate();
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
  getStyle() {
    return this.style;
  }
  setZIndex(zIndex: Overlay<T, V>["zIndex"]) {
    this.zIndex = zIndex;
    if (this.dynamicPosition) this.notifyReload?.();
  }
  getZIndex() {
    return this.zIndex;
  }
  setPosition(position: Overlay<T, V>["position"]) {
    this.position = position;
    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseDate();
    if (!!this.dynamicPosition != prevDynamicStatus) this.notifyReload?.();
  }
  getPosition() {
    return this.position;
  }
  setValue(value: Overlay<T, V>["value"]) {
    this.value = value;
    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseDate();
    if (!!this.dynamicPosition != prevDynamicStatus) this.notifyReload?.();
  }
  getValue() {
    return this.value;
  }

  /** 获取绘制函数 */
  abstract getDraw(): ((ctx: CanvasRenderingContext2D) => void) | void;
}

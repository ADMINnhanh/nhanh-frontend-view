import _Canvas from "..";
import Show from "./show";

export default class Overlay<T> {
  /** 是否显示 */
  show = new Show();
  private style?: DeepPartial<T> | string;
  private zIndex: number;

  constructor(overlay: {
    show?: boolean;
    style?: DeepPartial<T> | string;
    zIndex?: number;
  }) {
    this.show.setShow(overlay.show ?? true);
    this.style = overlay.style;
    this.zIndex = overlay.zIndex ?? 0;
  }

  /** 主画布 */
  mainCanvas?: _Canvas;

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

  setStyle(style?: Overlay<T>["style"]) {
    this.style = style;
    this.notifyReload?.();
  }
  getStyle() {
    return this.style;
  }
  setZIndex(zIndex: Overlay<T>["zIndex"]) {
    this.zIndex = zIndex;
    this.notifyReload?.();
  }
  getZIndex() {
    return this.zIndex;
  }
}

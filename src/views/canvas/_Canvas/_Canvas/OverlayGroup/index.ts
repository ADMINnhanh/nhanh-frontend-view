import _Canvas from "..";

import Point from "./point";
import Line from "./line";
import Polygon from "./polygon";
import Show from "./public/show";
import { _GenerateUUID } from "nhanh-pure-function";
import _Worker from "../worker";

type Overlay = Point | Line | Polygon;

export default class OverlayGroup {
  /** 群组名称 */
  name;
  /** 群组是否显示 */
  show = new Show();

  private overlays = new Set<Point | Line | Polygon>();

  constructor(name: string) {
    this.name = name;
  }

  /** 主画布 */
  private mainCanvas?: _Canvas;
  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    this.overlays.forEach((overlay) => overlay.setMainCanvas(mainCanvas));

    if (mainCanvas && this.overlays.size) this.notifyReload?.();
  }

  /** 通知重新加载 */
  private notifyReload?: (needForceExecute?: boolean) => void;
  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute?: boolean) => {
          if (needForceExecute) {
            notifyReload();
          } else if (
            this.show.shouldRender(this.mainCanvas?.scale) &&
            this.overlays.size
          ) {
            notifyReload();
          }
        }
      : undefined;

    this.overlays.forEach((overlay) =>
      overlay.setNotifyReload(this.notifyReload)
    );

    this.show.notifyReload = this.notifyReload;
  }

  addOverlays(overlays: Overlay[] | Overlay) {
    [overlays].flat().forEach((overlay) => {
      overlay.setNotifyReload(this.notifyReload);
      overlay.setMainCanvas(this.mainCanvas);
      this.overlays.add(overlay);
    });
    this.notifyReload?.();
  }
  hasOverlay(overlay: Overlay) {
    return this.overlays.has(overlay);
  }
  removeOverlays(overlays: Overlay[] | Overlay) {
    [overlays].flat().forEach((overlay) => {
      this.overlays.delete(overlay);
      overlay.setNotifyReload();
      overlay.setMainCanvas();
    });
    this.notifyReload?.();
  }
  clearOverlays() {
    this.notifyReload?.();
    this.overlays.forEach((overlay) => {
      overlay.setNotifyReload();
      overlay.setMainCanvas();
    });
    this.overlays.clear();
  }

  /** 获取覆盖物的绘制方法 */
  getOverlays() {
    const groupArr: [number, (ctx: CanvasRenderingContext2D) => void][] = [];

    if (this.show.shouldRender(this.mainCanvas?.scale)) {
      this.overlays.forEach((overlay) => {
        if (overlay.equalsMainCanvas(this.mainCanvas)) {
          const draw = overlay.getDraw();
          if (draw) groupArr.push([overlay.getZIndex(), draw]);
        } else {
          this.overlays.delete(overlay);
        }
      });
    }

    return groupArr;
  }
}

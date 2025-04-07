import _Canvas from "..";

import Point from "./point";
import Line from "./line";
import Polygon from "./polygon";
import Show from "../public/show";

type Overlay = Point | Line | Polygon;

export default class OverlayGroup {
  /** 群组名称 */
  name;
  /** 群组是否显示 */
  show = new Show();

  /** 点位集合 - 单独优化 */
  private overlayPoint = new Set<Point>();
  private overlayOther = new Set<Line | Polygon>();

  constructor(name: string) {
    this.name = name;
  }

  /** 主画布 */
  private mainCanvas?: _Canvas;
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    this.overlayPoint.forEach((point) => (point.mainCanvas = mainCanvas));
    this.overlayOther.forEach((other) => (other.mainCanvas = mainCanvas));
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
            (this.overlayPoint.size || this.overlayOther.size)
          ) {
            notifyReload();
          }
        }
      : undefined;

    this.overlayPoint.forEach((point) =>
      point.setNotifyReload(this.notifyReload)
    );
    this.overlayOther.forEach((other) =>
      other.setNotifyReload(this.notifyReload)
    );

    this.show.notifyReload = this.notifyReload;
  }

  addOverlays(overlays: Overlay[] | Overlay) {
    [overlays].flat().forEach((overlay) => {
      if (overlay instanceof Point) this.overlayPoint.add(overlay);
      else this.overlayOther.add(overlay);
      overlay.setNotifyReload(this.notifyReload);
      overlay.mainCanvas = this.mainCanvas;
    });
  }
  hasOverlay(overlay: Overlay) {
    if (overlay instanceof Point) return this.overlayPoint.has(overlay);
    return this.overlayOther.has(overlay);
  }
  removeOverlays(overlays: Overlay[] | Overlay) {
    [overlays].flat().forEach((overlay) => {
      if (overlay instanceof Point) this.overlayPoint.delete(overlay);
      else this.overlayOther.delete(overlay);
      overlay.setNotifyReload();
      overlay.mainCanvas = undefined;
    });
    this.notifyReload?.();
  }
  clearOverlays() {
    this.notifyReload?.();
    this.overlayPoint.forEach((point) => {
      point.setNotifyReload();
      point.mainCanvas = undefined;
    });
    this.overlayOther.forEach((other) => {
      other.setNotifyReload();
      other.mainCanvas = undefined;
    });
    this.overlayPoint.clear();
    this.overlayOther.clear();
  }
}

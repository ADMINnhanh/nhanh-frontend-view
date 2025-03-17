import Point from "../Overlay/point";
import Line from "../Overlay/line";
import Polygon from "../Overlay/polygon";

type Overlay = Point | Line | Polygon;

export default class OverlayGroup {
  /** 群组名称 */
  name;
  /** 群组是否显示 */
  show = true;
  /** 点位集合 - 单独优化 */
  overlayPoint = new Set<Point>();
  overlayOther = new Set<Line | Polygon>();

  constructor(name: string) {
    this.name = name;
  }

  reload() {}

  setShow(show: boolean) {
    this.show = show;
    this.reload();
  }

  addOverlays(overlays: Overlay[] | Overlay) {
    [overlays].flat().forEach((overlay) => {
      if (overlay instanceof Point) this.overlayPoint.add(overlay);
      else this.overlayOther.add(overlay);
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
    });
  }
  clearOverlays() {
    this.overlayPoint.clear();
    this.overlayOther.clear();
  }
}

import "./index.less";
import QuickMethod from "./core/quikmethod";
import Grid from "./tool/grid";
import Point from "./tool/point";
import Line from "./tool/line";
import Polygon from "./tool/polygon";

/** 画布类 */
export default class Canvas extends QuickMethod {
  constructor(id: string) {
    super(id);
    this.drawGrid = new Grid(this);
    this.drawPoint = new Point(this);
    this.drawLine = new Line(this);
    this.drawPolygon = new Polygon(this);
  }

  /** 销毁 */
  destroy() {
    super.destroy();
  }
}

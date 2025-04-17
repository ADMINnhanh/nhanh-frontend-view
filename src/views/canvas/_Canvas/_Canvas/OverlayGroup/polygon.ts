import _Canvas from "..";
import Overlay from "./public/overlay";
import { type Overlay as OverlayType } from "./index";
import DataProcessor from "../core/dataProcessor";

export default class Polygon extends Overlay<
  PolygonStyleType,
  [number, number][]
> {
  size?: [number, number];
  private dynamicSize?: [number, number];

  constructor(polygon: PolygonType) {
    super(polygon);
    this.size = polygon.size;
  }

  isPointInPath(x: number, y: number) {
    if (this.path) return Overlay.ctx.isPointInPath(this.path, x, y);
    return false;
  }
  isPointInStroke(x: number, y: number) {
    if (this.path && this.mainCanvas) {
      this.setCanvasStyles(Overlay.ctx);
      return Overlay.ctx.isPointInStroke(this.path, x, y);
    }
    return false;
  }

  updateBaseData() {
    if (!this.mainCanvas) return;
    const { axisConfig, percentage } = this.mainCanvas;
    let { value, position, size } = this;

    const [isValue, isPosition, isRect] = [
      DataProcessor.IsValids(value),
      DataProcessor.IsValids(position),
      DataProcessor.IsValid(size),
    ];

    if (!isValue && !isPosition) return (this.dynamicPosition = undefined);

    if (isRect) {
      if (isPosition) position!.length = 1;
      else if (isValue) value!.length = 1;
    } else {
      if (
        (isValue && value!.length < 3) ||
        (isPosition && position!.length < 3)
      )
        return (this.dynamicPosition = undefined);
      size = undefined;
    }

    if (isValue) {
      position = [];
      for (let i = 0; i < value!.length; i++) {
        const item = value![i];
        const loc = this.mainCanvas.getAxisPointByValue(item[0], item[1], true);
        position.push([loc.x, loc.y]);
      }
    } else {
      value = [];
      for (let i = 0; i < position!.length; i++) {
        const item = position![i];
        const val = this.mainCanvas.getAxisValueByPoint(item[0], item[1], true);
        value.push([val.xV, val.yV]);
      }
    }

    const dynamicPosition = this.mainCanvas.transformPosition(position!);
    const dynamicSize = [];
    if (isRect) {
      const [width, height] = size!;
      dynamicSize[0] = width * percentage * axisConfig.x;
      dynamicSize[1] = height * percentage * axisConfig.y;
    }

    this.dynamicSize = dynamicSize as any;
    this.dynamicPosition = dynamicPosition;
    this.value = value;
    this.position = position;
    this.size = size;
  }

  setSize(size: Polygon["size"]) {
    this.size = size;

    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseData();
    if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
  }

  private setCanvasStyles(ctx: CanvasRenderingContext2D) {
    const { mainCanvas } = this;
    if (!mainCanvas) return;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].polygon;
    let style = {} as PolygonStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.polygon || defaultStyle;
    } else if (typeof this.style == "object") {
      style = Object.assign({}, defaultStyle, this.style as any);
    } else {
      style = defaultStyle;
    }

    const { width, stroke, dash, dashGap, dashOffset, fill } = style;

    ctx.setLineDash(dash ? (dashGap as any) : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineWidth = width;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
  }

  /** 绘制矩形 */
  drawRect(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition, dynamicSize } = this;

    this.setCanvasStyles(ctx);

    ctx.beginPath();

    // ctx.rect(
    //   dynamicPosition![0][0],
    //   dynamicPosition![0][1],
    //   dynamicSize![0],
    //   dynamicSize![1]
    // );
    // 创建 Path2D 对象
    this.path = new Path2D();
    this.path.rect(
      dynamicPosition![0][0],
      dynamicPosition![0][1],
      dynamicSize![0],
      dynamicSize![1]
    );

    ctx.stroke(this.path);
    ctx.fill(this.path);
  }
  /** 绘制多边形 */
  drawPolygon(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition } = this;

    this.setCanvasStyles(ctx);

    ctx.beginPath();

    // 创建 Path2D 对象
    this.path = new Path2D();

    dynamicPosition!.forEach((item, index) => {
      // ctx[index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
      this.path![index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });
    this.path.lineTo(dynamicPosition![0][0], dynamicPosition![0][1]);
    ctx.closePath();
    ctx.stroke(this.path);
    ctx.fill(this.path);
  }

  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { show, dynamicPosition, position, mainCanvas } = this;
    if (!mainCanvas) return;

    const { scale, isRecalculate, percentage, axisConfig } = mainCanvas;
    const isShow = show.shouldRender(scale);
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      if (isRecalculate) {
        this.dynamicPosition = mainCanvas.transformPosition(position!);
        if (this.size) {
          this.dynamicSize = [
            this.size[0] * percentage * axisConfig.x,
            this.size[1] * percentage * axisConfig.y,
          ];
        }
      }
      if (this.dynamicSize?.length) return [this.drawRect, this];
      return [this.drawPolygon, this];
    }
  }
}

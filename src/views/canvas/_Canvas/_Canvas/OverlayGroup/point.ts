import _Canvas from "..";
import Overlay from "./public/overlay";

export default class Point extends Overlay<PointStyleType, [number, number]> {
  /** 点的半径值 */
  radiusValue = 0;
  private angle = 2 * Math.PI;

  constructor(points: PointListType[number]) {
    super(points);
    this.position = points.position;
    this.value = points.value;
  }

  updateBaseData() {
    if (!this.mainCanvas) return;
    const IsValid = this.mainCanvas.IsValid;
    let { value, position } = this;
    const [isValue, isPosition] = [IsValid(value), IsValid(position)];

    if (!isValue && !isPosition) {
      return (this.dynamicPosition = undefined);
    } else if (isValue) {
      const loc = this.mainCanvas.getAxisPointByValue(
        value![0],
        value![1],
        true
      );
      position = [loc.x, loc.y];
    } else {
      const val = this.mainCanvas.getAxisValueByPoint(
        position![0],
        position![1],
        true
      );
      value = [val.xV, val.yV];
    }

    const dynamicPosition = this.mainCanvas.transformPosition([position!])[0];

    this.dynamicPosition = dynamicPosition;
    this.value = value;
    this.position = position;

    const defaultStyle = this.mainCanvas.style[this.mainCanvas.theme].point;
    let style = {} as PointStyleType;
    if (typeof this.style == "string") {
      style = this.mainCanvas.style[this.style]?.point;
    } else if (typeof this.style == "object") {
      style = this.style as any;
    }
    const radius =
      (style?.width || defaultStyle.width) +
      (style?.radius || defaultStyle.radius);

    this.radiusValue = this.mainCanvas.preservePrecision(
      (value![0] / position![0]) * radius
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition, mainCanvas } = this;
    if (!mainCanvas) return;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].point;
    let style = {} as PointStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.point || defaultStyle;
    } else if (typeof this.style == "object") {
      style = Object.assign({}, defaultStyle, this.style as any);
    } else {
      style = defaultStyle;
    }

    const { width, stroke, fill, radius } = style;

    ctx.lineWidth = width;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(dynamicPosition![0], dynamicPosition![1], radius, 0, this.angle);
    ctx.fill();
    ctx.stroke();
  }
  getDraw() {
    const { show, dynamicPosition, position, value, radiusValue, mainCanvas } =
      this;
    if (!mainCanvas) return;

    const { scale, maxMinValue, isRecalculate } = mainCanvas;
    const isShow = show.shouldRender(scale);
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      const [x, y] = value!;

      const isPointWithinRange =
        maxMinValue.maxXV > x - radiusValue &&
        maxMinValue.minXV < x + radiusValue &&
        maxMinValue.maxYV > y - radiusValue &&
        maxMinValue.minYV < y + radiusValue;

      if (isPointWithinRange) {
        if (isRecalculate)
          this.dynamicPosition = mainCanvas.transformPosition([position!])[0];
        return this.draw.bind(this);
      }
    }
  }
}

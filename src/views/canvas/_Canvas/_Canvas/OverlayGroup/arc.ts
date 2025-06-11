import {
  _AreAllArraysValid,
  _Clone,
  _IsSingleArrayValid,
} from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";

type ConstructorOption = ConstructorParameters<
  typeof Overlay<ArcStyleType, [number, number]>
>[0] & {
  /** 是否填充 */
  isFill?: boolean;
  /** 圆弧的半径。必须为正值。 */
  radius: number;
  /** 圆弧的起始点，从 x 轴方向开始计算，以弧度为单位。 */
  startAngle: number;
  /** 圆弧的终点，从 x 轴方向开始计算，以弧度为单位。 */
  endAngle: number;
  /** 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认为 false（顺时针）。 */
  counterclockwise?: boolean;
};

export default class Arc extends Overlay<ArcStyleType, [number, number]> {
  /** 是否填充 */
  isFill = false;
  /** 圆弧的半径。必须为正值。 */
  radius = 0;
  /** 圆弧的起始点，从 x 轴方向开始计算，以弧度为单位。 */
  startAngle = 0;
  /** 圆弧的终点，从 x 轴方向开始计算，以弧度为单位。 */
  endAngle = 0;
  /** 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认为 false（顺时针）。 */
  counterclockwise = false;

  constructor(option: ConstructorOption) {
    option.redrawOnIsHoverChange = option.redrawOnIsHoverChange ?? true;

    super(option);

    const { isFill, radius, startAngle, endAngle, counterclockwise } = option;
    Object.assign(this, {
      isFill,
      radius,
      startAngle,
      endAngle,
      counterclockwise,
    });
  }

  protected updateValueScope() {
    this.initValueScope();
    this.calculatePointRadiusValue(this.setCanvasStyles().point);
    this.setExtraOffset(this.extraOffset, false);
  }

  isPointInPath(x: number, y: number) {
    if (this.isFill && this.path)
      return Overlay.ctx.isPointInPath(this.path, x, y);
    return false;
  }
  isPointInStroke(x: number, y: number) {
    if (this.path && this.mainCanvas) {
      this.setCanvasStyles(Overlay.ctx);
      if (this.isDraggable)
        Overlay.ctx.lineWidth = Math.max(Overlay.ctx.lineWidth, 20);
      return Overlay.ctx.isPointInStroke(this.path, x, y);
    }
    return false;
  }
  isPointInAnywhere(x: number, y: number): boolean {
    const isLine = super.isPointInAnywhere(x, y);
    return isLine;
  }

  private setCanvasStyles(ctx?: CanvasRenderingContext2D) {
    const isHover = this.isHover;
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].arc;
    let style = {} as PolygonStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.arc || defaultStyle;
    } else if (typeof this.style == "object") {
      const stroke = this.style.stroke
        ? Object.assign({}, defaultStyle.stroke, this.style.stroke as any)
        : defaultStyle.stroke;
      style = Object.assign({}, defaultStyle, this.style as any, { stroke });
    } else {
      style = defaultStyle;
    }

    const { fill, fill_hover } = style;

    if (ctx) {
      this.setBaseLineStyle(ctx, style.stroke);
      ctx.fillStyle = isHover ? fill_hover : fill;
    }
    return style;
  }

  updateBaseData() {
    if (!this.mainCanvas) return;
    let { value, position } = this;
    const [isValue, isPosition] = [
      _IsSingleArrayValid(value),
      _IsSingleArrayValid(position),
    ];

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

    this.updateValueScope();
  }

  draw(ctx: CanvasRenderingContext2D) {
    const {
      dynamicPosition,
      mainCanvas,
      extraOffset,
      radius,
      startAngle,
      endAngle,
      counterclockwise,
      isFill,
    } = this;
    if (!mainCanvas && radius > 0) return;
    this.setGlobalAlpha(ctx);

    this.setCanvasStyles(ctx);

    const x = dynamicPosition![0] + extraOffset.x;
    const y = dynamicPosition![1] + extraOffset.y;

    ctx.beginPath();

    this.path = new Path2D();
    this.path.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    ctx.stroke(this.path);
    isFill && ctx.fill(this.path);
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { dynamicPosition, position, valueScope, mainCanvas } = this;
    if (!mainCanvas) return;

    const { maxMinValue, isScaleUpdated } = mainCanvas;
    const isShow = this.shouldRender();
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      if (isScaleUpdated) {
        this.setExtraOffset(this.extraOffset, false);
        this.calculatePointRadiusValue();
      }

      const pointNotWithinRange =
        maxMinValue.maxXV < valueScope!.minX ||
        maxMinValue.minXV > valueScope!.maxX ||
        maxMinValue.maxYV < valueScope!.minY ||
        maxMinValue.minYV > valueScope!.maxY;
      if (pointNotWithinRange) return;

      if (this.isRecalculate)
        this.dynamicPosition = mainCanvas.transformPosition([position!])[0];
      return [this.draw, this];
    }
  }
}

import _Canvas from "..";
import Overlay from "./public/overlay";
import { type Overlay as OverlayType } from "./index";
import GeometricBoundary from "./public/geometricBoundary";
import { _AreAllArraysValid } from "nhanh-pure-function";

type ConstructorOption = ConstructorParameters<
  typeof GeometricBoundary<PolygonStyleType>
>[0] & {
  /** 是否为矩形 */
  isRect?: boolean;
};

export default class Polygon extends GeometricBoundary<PolygonStyleType> {
  /** 是否为矩形 */
  isRect = false;

  /** 是否闭合 */
  protected isClosed = true;
  protected minNeededHandlePoints = 3;

  constructor(option: ConstructorOption) {
    super(option);

    const { isRect } = option;
    Object.assign(this, { isRect });

    if (option.isRect) this.canCreateOrDeleteHandlePoint = false;
  }

  protected updateValueScope() {
    this.initValueScope();
    this.calculatePointRadiusValue(this.setCanvasStyles().point);
    this.setExtraOffset(this.extraOffset, false);
  }

  isPointInPath(x: number, y: number) {
    if (this.path) return Overlay.ctx.isPointInPath(this.path, x, y);
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
    const isPoint =
      this.isClick &&
      this.isShowHandlePoint &&
      this.handlePoints.some((point) => {
        const is = point.isPointInAnywhere(x, y);
        is != point.isHover && point.notifyHover(is);
        return is;
      });

    return isLine || isPoint;
  }

  /** 更新基础数据 */
  updateBaseData() {
    if (!this.mainCanvas) return;
    let { value, position, isRect } = this;

    let [isValue, isPosition] = [
      _AreAllArraysValid(value) && value!.length > (isRect ? 1 : 2),
      _AreAllArraysValid(position) && position!.length > (isRect ? 1 : 2),
    ];

    if (!isValue && !isPosition) return (this.dynamicPosition = undefined);

    if (isRect) {
      if (isValue) {
        value!.length = 2;
        const [point1, point2] = value!;
        isValue = !(point1[0] == point2[0] || point1[1] == point2[1]);
      }
      if (isPosition) {
        position!.length = 2;
        const [point1, point2] = position!;
        isPosition = !(point1[0] == point2[0] || point1[1] == point2[1]);
      }
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

    this.dynamicPosition = dynamicPosition;
    this.value = value;
    this.position = position;

    this.updateHandlePoints();

    this.updateValueScope();
  }

  setRect(isRect: Polygon["isRect"]) {
    if (this.isRect != isRect) {
      this.isRect = isRect;
      this.canCreateOrDeleteHandlePoint = !isRect;

      const prevDynamicStatus = !!this.dynamicPosition;
      this.updateBaseData();
      if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
    }
  }

  private setCanvasStyles(ctx?: CanvasRenderingContext2D) {
    const isHover = this.isHover;
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].polygon;
    let style = {} as PolygonStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.polygon || defaultStyle;
    } else if (typeof this.style == "object") {
      style = Object.assign({}, defaultStyle, this.style as any);
    } else {
      style = defaultStyle;
    }

    const {
      width,
      stroke,
      dash,
      dashGap,
      dashOffset,
      fill,
      fill_hover,
      stroke_hover,
    } = style;

    if (ctx) {
      ctx.setLineDash(dash ? (dashGap as any) : []);
      ctx.lineDashOffset = dashOffset;
      ctx.lineWidth = width;
      ctx.strokeStyle = isHover ? stroke_hover : stroke;
      ctx.fillStyle = isHover ? fill_hover : fill;
    }
    return style;
  }

  /** 绘制矩形 */
  drawRect(ctx: CanvasRenderingContext2D) {
    const [[x1, y1], [x2, y2]] = this.dynamicPosition!;
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);
    const left = Math.min(x1, x2);
    const top = Math.min(y1, y2);

    const style = this.setCanvasStyles(ctx);

    ctx.beginPath();

    // ctx.rect( left, top, width, height );

    // 创建 Path2D 对象
    this.path = new Path2D();
    this.path.rect(left, top, width, height);

    ctx.stroke(this.path);
    ctx.fill(this.path);

    // 绘制 线段控制点
    if (this.isClick && this.isShowHandlePoint)
      this.handlePoints.forEach((point) => {
        point.style = style.point;
        point.draw(ctx);
      });
  }
  /** 绘制多边形 */
  drawPolygon(ctx: CanvasRenderingContext2D) {
    const dynamicPosition = this.dynamicPosition!;

    const style = this.setCanvasStyles(ctx);

    ctx.beginPath();

    // 创建 Path2D 对象
    this.path = new Path2D();

    dynamicPosition!.forEach((item, index) => {
      // ctx[index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
      this.path![index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });
    this.path.lineTo(dynamicPosition[0][0], dynamicPosition[0][1]);
    ctx.closePath();
    ctx.stroke(this.path);
    ctx.fill(this.path);

    // 绘制 线段控制点
    if (this.isClick && this.isShowHandlePoint)
      this.handlePoints.forEach((point) => {
        point.style = style.point;
        point.draw(ctx);
      });
  }

  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { show, dynamicPosition, position, mainCanvas, valueScope } = this;
    if (!mainCanvas) return;

    const { scale, isScaleUpdated, maxMinValue } = mainCanvas;
    const isShow = show.shouldRender(scale);
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

      if (this.isRecalculate) {
        this.dynamicPosition = mainCanvas.transformPosition(position!);
        this.handlePoints.forEach(
          (point, index) =>
            (point.dynamicPosition = this.dynamicPosition![index])
        );
      }

      if (this.isRect) return [this.drawRect, this];
      return [this.drawPolygon, this];
    }
  }
}

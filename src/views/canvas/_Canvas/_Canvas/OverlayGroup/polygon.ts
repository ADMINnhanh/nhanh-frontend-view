import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import GeometricBoundary from "./public/geometricBoundary";
import { _AreAllArraysValid } from "nhanh-pure-function";

type ConstructorOption = ConstructorParameters<
  typeof GeometricBoundary<PolygonStyleType>
>[0] & {
  /** 是否为矩形 */
  isRect?: boolean;
  /** 矩形圆角半径 */
  borderRadius?: number | number[];
  /** 矩形圆角半径类型.  默认为 "position" */
  borderRadiusType?: "position" | "value";
};

export default class Polygon extends GeometricBoundary<PolygonStyleType> {
  private _isRect = false;
  /** 是否为矩形 */
  get isRect() {
    return this._isRect;
  }
  set isRect(isRect: boolean) {
    if (this._isRect != isRect) {
      this._isRect = isRect;
      this.canCreateOrDeleteHandlePoint = !isRect;

      this.updateBaseData();
      this.notifyReload?.();
    }
  }
  /** 动态矩形圆角半径 */
  private dynamicBorderRadius?: number | number[];
  private _borderRadius?: number | number[];
  /** 矩形圆角半径 */
  get borderRadius() {
    return this._borderRadius;
  }
  set borderRadius(borderRadius: number | number[] | undefined) {
    if (this._borderRadius != borderRadius) {
      this._borderRadius = borderRadius;

      this.updateDynamicRadius();
      this.notifyReload?.();
    }
  }
  private _borderRadiusType = "position" as "position" | "value";
  /** 矩形圆角半径类型.  默认为 "position" */
  get borderRadiusType() {
    return this._borderRadiusType;
  }
  set borderRadiusType(borderRadiusType: "position" | "value") {
    if (this._borderRadiusType != borderRadiusType) {
      this._borderRadiusType = borderRadiusType;
      this.updateDynamicRadius();
      this.notifyReload?.();
    }
  }

  protected isClosed = true;
  protected minNeededHandlePoints = 3;

  constructor(option: ConstructorOption) {
    super(option);

    ["isRect", "borderRadius", "borderRadiusType"].forEach((key) => {
      /** @ts-ignore */
      if (key in option) this[key] = option[key];
    });

    if (option.isRect) this.canCreateOrDeleteHandlePoint = false;
  }

  protected updateValueScope() {
    this.initValueScope();
  }

  isPointInPath(x: number, y: number) {
    if (this.path) return Overlay.ctx.isPointInPath(this.path, x, y);
    return false;
  }
  isPointInStroke(x: number, y: number) {
    if (this.path && this.mainCanvas) {
      this.setOverlayStyles(Overlay.ctx);
      if (this.isDraggable)
        Overlay.ctx.lineWidth = Math.max(Overlay.ctx.lineWidth, 20);
      return Overlay.ctx.isPointInStroke(this.path, x, y);
    }
    return false;
  }
  isPointInAnywhere(x: number, y: number): boolean {
    const isLine = super.isPointInAnywhere(x, y);

    const isPoint = ((allow) => {
      if (!allow) return false;
      let point_hover = false;
      const handlePoints = [...this.handlePoints].sort(
        (a, b) => (a.isHover ? 0 : 1) - (b.isHover ? 0 : 1)
      );
      handlePoints.forEach((point) => {
        if (point_hover) {
          point.isHover && point.notifyHover(false);
        } else {
          point_hover = point.isPointInAnywhere(x, y);
          point_hover != point.isHover && point.notifyHover(point_hover);
        }
      });
      return point_hover;
    })(this.isClick && this.isHandlePointsVisible);

    return isLine || isPoint;
  }

  /** 更新动态圆角半径 */
  private updateDynamicRadius() {
    const { mainCanvas, borderRadius } = this;

    // 1. 清理无效情况：无画布或未设置圆角
    if (!mainCanvas || !borderRadius) {
      this.dynamicBorderRadius = undefined;
      return;
    }

    // 2. 处理数字类型半径
    if (typeof borderRadius === "number") {
      this.dynamicBorderRadius = this.handleSingleRadius(borderRadius);
      return;
    }

    // 3. 处理数组类型半径
    this.dynamicBorderRadius = borderRadius.map((v) =>
      this.handleSingleRadius(v, true)
    );
  }
  private handleSingleRadius(radius: number): number | undefined;
  private handleSingleRadius(radius: number, allowZero: true): number;
  /** 处理单个半径值转换 */
  private handleSingleRadius(
    radius: number,
    allowZero?: boolean
  ): number | undefined {
    const { mainCanvas, borderRadiusType } = this;

    // 非正数处理逻辑
    if (radius <= 0) return allowZero ? 0 : undefined;

    // 根据类型转换半径值
    switch (borderRadiusType) {
      case "position": // 百分比模式
        return radius * mainCanvas!.percentage;
      default: // 坐标值模式
        return mainCanvas!.getAxisPointByValue(radius, 0).x;
    }
  }
  /** 更新基础数据 */
  protected updateBaseData() {
    if (!this.mainCanvas) return;
    let { value, position, isRect } = this;

    let [isValue, isPosition] = [
      _AreAllArraysValid(value) && value!.length > (isRect ? 1 : 2),
      _AreAllArraysValid(position) && position!.length > (isRect ? 1 : 2),
    ];

    if (!isValue && !isPosition)
      return this.internalUpdate({ dynamicPosition: undefined });

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

    this.internalUpdate({ value, position, dynamicPosition });

    this.updateHandlePoints();
    this.updateDynamicRadius();
  }

  protected setOverlayStyles(ctx?: CanvasRenderingContext2D) {
    const isHover = this.isHover;
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].polygon;
    let style = {} as PolygonStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.polygon || defaultStyle;
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
  protected get handlePointStyle() {
    return this.setOverlayStyles().point;
  }

  /** 绘制矩形 */
  drawRect(ctx: CanvasRenderingContext2D) {
    this.setGlobalAlpha(ctx);

    const [[x1, y1], [x2, y2]] = this.dynamicPosition!;
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);
    const left = Math.min(x1, x2);
    const top = Math.min(y1, y2);

    const style = this.setOverlayStyles(ctx);

    ctx.beginPath();

    // 创建 Path2D 对象
    this.path = new Path2D();

    if (this.dynamicBorderRadius)
      this.path.roundRect(left, top, width, height, this.dynamicBorderRadius);
    else this.path.rect(left, top, width, height);

    ctx.stroke(this.path);
    ctx.fill(this.path);

    // 绘制 线段控制点
    this.isShowHandlePoint = this.isClick && this.isHandlePointsVisible;
    if (this.isShowHandlePoint)
      this.handlePoints.forEach((point) => {
        point.internalUpdate({ style: style.point });
        point.getDraw()?.[0].call(point, ctx);
      });
  }
  /** 绘制多边形 */
  drawPolygon(ctx: CanvasRenderingContext2D) {
    this.setGlobalAlpha(ctx);

    const dynamicPosition = this.dynamicPosition!;

    const style = this.setOverlayStyles(ctx);

    ctx.beginPath();

    // 创建 Path2D 对象
    this.path = new Path2D();

    dynamicPosition!.forEach((item, index) => {
      this.path![index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });
    this.path.lineTo(dynamicPosition[0][0], dynamicPosition[0][1]);
    ctx.closePath();
    ctx.stroke(this.path);
    ctx.fill(this.path);

    // 绘制 线段控制点
    this.isShowHandlePoint = this.isClick && this.isHandlePointsVisible;
    if (this.isShowHandlePoint)
      this.handlePoints.forEach((point) => {
        point.internalUpdate({ style: style.point });
        point.getDraw()?.[0].call(point, ctx);
      });
  }

  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      const { mainCanvas, position } = this;

      if (this.isRecalculate) {
        this.updateDynamicRadius();
        const dynamicPosition = mainCanvas!.transformPosition(position!);
        this.internalUpdate({ dynamicPosition });
        this.handlePoints.forEach((point, index) => {
          point.internalUpdate({ dynamicPosition: dynamicPosition![index] });
        });
      }

      if (this.isRect) return [this.drawRect, this];
      return [this.drawPolygon, this];
    }
  }
}

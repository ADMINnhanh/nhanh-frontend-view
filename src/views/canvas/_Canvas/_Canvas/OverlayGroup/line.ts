import { _AreAllArraysValid, _Clone } from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import GeometricBoundary from "./public/geometricBoundary";

type ConstructorOption = ConstructorParameters<
  typeof GeometricBoundary<LineStyleType>
>[0] & {
  /** 是否是 两点相连向外延展的无限线 */
  isInfinite?: boolean;
};

export default class Line extends GeometricBoundary<LineStyleType> {
  private _isInfinite?: boolean;
  /** 是否是 两点相连向外延展的无限线 */
  get isInfinite() {
    return this._isInfinite;
  }
  set isInfinite(isInfinite: boolean | undefined) {
    if (this._isInfinite != isInfinite) {
      this._isInfinite = isInfinite;
      this.canCreateOrDeleteHandlePoint = !isInfinite;
      this.notifyReload?.();
    }
  }

  protected isClosed = false;
  protected minNeededHandlePoints = 2;

  constructor(option: ConstructorOption) {
    super(option);

    const { isInfinite } = option;
    Object.assign(this, { isInfinite });

    if (isInfinite) this.canCreateOrDeleteHandlePoint = false;
  }

  protected updateValueScope() {
    this.initValueScope();
  }

  isPointInPath(x: number, y: number) {
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
    })((this.isClick || !!this.isInfinite) && this.isHandlePointsVisible);

    return isLine || isPoint;
  }

  protected updateBaseData() {
    if (!this.mainCanvas) return;

    let { value, position } = this;
    const [isValue, isPosition] = [
      _AreAllArraysValid(value) && value!.length > 1,
      _AreAllArraysValid(position) && position!.length > 1,
    ];

    if (!isValue && !isPosition) {
      this.handlePoints = [];
      return this.internalUpdate({ dynamicPosition: undefined });
    } else if (isValue) {
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
  }

  protected setOverlayStyles(ctx?: CanvasRenderingContext2D) {
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].line;
    let style = {} as LineStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.line || defaultStyle;
    } else if (typeof this.style == "object") {
      style = Object.assign({}, defaultStyle, this.style as any);
    } else {
      style = defaultStyle;
    }

    if (ctx) this.setBaseLineStyle(ctx, style.stroke);

    return style;
  }
  protected get computedValueScopeStyles() {
    return this.setOverlayStyles();
  }
  /** 绘制线段 */
  drawLine(ctx: CanvasRenderingContext2D, position?: [number, number][]) {
    const { mainCanvas, isInfinite, isClick } = this;
    position = position || this.dynamicPositionWithOffset;
    if (!mainCanvas) return;
    this.setGlobalAlpha(ctx);

    const style = this.setOverlayStyles(ctx);

    ctx.beginPath();

    // 创建 Path2D 对象
    this.path = new Path2D();

    position!.forEach((item, index) => {
      this.path![index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });

    ctx.stroke(this.path);

    // 绘制 线段控制点
    this.isShowHandlePoint =
      (isInfinite || isClick) && this.isHandlePointsVisible;

    if (this.isShowHandlePoint)
      this.handlePoints.forEach((point) => {
        point.style = style.point;
        point.getDraw()?.[0].call(point, ctx);
      });
  }
  /** 绘制无限延伸线段 */
  drawisInfiniteStraightLine(ctx: CanvasRenderingContext2D) {
    const { mainCanvas, dynamicPositionWithOffset } = this;
    if (!mainCanvas) return;
    this.setGlobalAlpha(ctx);

    const { rect } = mainCanvas;

    const [start, end]: [number, number][] = _Clone(
      dynamicPositionWithOffset!
    ) as any;

    // 方向向量计算（终点到起点）
    const dirVector: [number, number] = [end[0] - start[0], end[1] - start[1]];
    if (dirVector[0] === 0 && dirVector[1] === 0) {
      return console.error("重合点无法确定方向");
    }

    // 计算延长后的实际坐标
    const extendedStart = _GetBoundaryIntersection(
      start,
      [-dirVector[0], -dirVector[1]],
      rect.width,
      rect.height
    );
    const extendedEnd = _GetBoundaryIntersection(
      end,
      dirVector,
      rect.width,
      rect.height
    );

    // 绘制最终线段
    this.drawLine(ctx, [extendedStart, extendedEnd]);
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      const { mainCanvas, position, isInfinite } = this;

      if (this.isRecalculate) {
        const dynamicPosition = mainCanvas!.transformPosition(position!);
        this.internalUpdate({ dynamicPosition });
        this.handlePoints.forEach((point, index) => {
          point.internalUpdate({ dynamicPosition: dynamicPosition![index] });
        });
      }
      if (isInfinite) return [this.drawisInfiniteStraightLine, this];
      return [this.drawLine, this];
    }
  }
}

// 核心算法：计算线段与画布边界的交点
function _GetBoundaryIntersection(
  point: [number, number],
  vector: [number, number],
  width: number,
  height: number
): [number, number] {
  const [px, py] = point; // 当前点的x,y坐标
  const [vx, vy] = vector; // 方向向量的x,y分量
  let t = Infinity; // 记录最小正值的参数t

  // 横向边界检测 (left/right)
  if (vx !== 0) {
    // 计算到达横向边界的参数t
    const tx =
      vx > 0
        ? (width - px) / vx // 向右延伸至右边界（x=rect.width）
        : -px / vx; // 向左延伸至左边界（x=0）

    if (tx > 0) t = Math.min(t, tx); // 只保留最小的正t值
  }

  // 纵向边界检测 (top/bottom)
  if (vy !== 0) {
    // 计算到达纵向边界的参数t
    const ty =
      vy > 0
        ? (height - py) / vy // 向下延伸至下边界（y=rect.height）
        : -py / vy; // 向上延伸至上边界（y=0）

    if (ty > 0) t = Math.min(t, ty); // 只保留最小的正t值
  }

  // 延长向量至边界
  return t === Infinity ? point : [px + vx * t, py + vy * t];
}

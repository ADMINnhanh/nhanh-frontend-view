import {
  _Utility_MergeObjects,
  _Valid_Is2DNumberArray,
} from "nhanh-pure-function";
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
    const isPoint = (allow: boolean) => {
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
    };

    return (
      isPoint((this.isClick || !!this.isInfinite) && this.isShowHandlePoint) ||
      super.isPointInAnywhere(x, y)
    );
  }

  protected get isWithinRange() {
    if (this.isInfinite) {
      if (this.isRecalculate) this.updateDynamicPosition();

      const { width, height } = this.mainCanvas!.rect;
      return _DoesInfiniteLineIntersectRectangle(
        [0, 0],
        [width, height],
        this.finalDynamicPosition[0],
        this.finalDynamicPosition[1]
      );
    }
    return super.isWithinRange;
  }
  protected updateBaseData() {
    if (!this.handleValuePosition("array2D", 2)) return;

    this.updateHandlePoints();
  }
  /** 更新动态点位数据 */
  protected updateDynamicPosition() {
    const { mainCanvas, position } = this;

    const dynamicPosition = mainCanvas!.transformPosition(position!);
    this.internalUpdate({ dynamicPosition });
    this.updateHandlePointsPosition();
  }

  protected setOverlayStyles(ctx?: CanvasRenderingContext2D) {
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].line;
    let style = {} as LineStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.line || defaultStyle;
    } else if (typeof this.style == "object") {
      style = _Utility_MergeObjects(
        JSON.parse(JSON.stringify(defaultStyle)),
        this.style
      );
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
    position = position || this.finalDynamicPosition;
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
    const { mainCanvas, finalDynamicPosition } = this;
    if (!mainCanvas) return;
    this.setGlobalAlpha(ctx);

    const { rect } = mainCanvas;

    const [start, end]: [number, number][] = finalDynamicPosition!;

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
      const { isRecalculate, isInfinite } = this;

      if (isRecalculate) this.updateDynamicPosition();
      if (isInfinite) return [this.drawisInfiniteStraightLine, this];
      return [this.drawLine, this];
    }
  }
}

// /** 计算线段与画布边界的交点 */
// function _GetBoundaryIntersection(
//   point: [number, number],
//   vector: [number, number],
//   width: number,
//   height: number
// ): [number, number] {
//   const [px, py] = point; // 当前点的x,y坐标
//   const [vx, vy] = vector; // 方向向量的x,y分量
//   let t = Infinity; // 记录最小正值的参数t

//   // 横向边界检测 (left/right)
//   if (vx !== 0) {
//     // 计算到达横向边界的参数t
//     const tx =
//       vx > 0
//         ? (width - px) / vx // 向右延伸至右边界（x=rect.width）
//         : -px / vx; // 向左延伸至左边界（x=0）

//     if (tx > 0) t = Math.min(t, tx); // 只保留最小的正t值
//   }

//   // 纵向边界检测 (top/bottom)
//   if (vy !== 0) {
//     // 计算到达纵向边界的参数t
//     const ty =
//       vy > 0
//         ? (height - py) / vy // 向下延伸至下边界（y=rect.height）
//         : -py / vy; // 向上延伸至上边界（y=0）

//     if (ty > 0) t = Math.min(t, ty); // 只保留最小的正t值
//   }

//   // 延长向量至边界
//   return t === Infinity ? point : [px + vx * t, py + vy * t];
// }

// /** 判断线段是否与矩形相交 */
// function _DoesLineIntersectRectangle(
//   j1: [number, number],
//   j2: [number, number],
//   y3: [number, number],
//   y4: [number, number]
// ): boolean {
//   // 计算矩形边界
//   const xMin = Math.min(j1[0], j2[0]);
//   const xMax = Math.max(j1[0], j2[0]);
//   const yMin = Math.min(j1[1], j2[1]);
//   const yMax = Math.max(j1[1], j2[1]);

//   // 矩形四个顶点
//   const vertices: [number, number][] = [
//     [xMin, yMin], // 左上
//     [xMax, yMin], // 右上
//     [xMax, yMax], // 右下
//     [xMin, yMax], // 左下
//   ];

//   // 计算直线方程 Ax + By + C = 0
//   const A = y4[1] - y3[1];
//   const B = y3[0] - y4[0];
//   const C = y4[0] * y3[1] - y3[0] * y4[1];

//   // 处理两点重合的情况
//   if (A === 0 && B === 0) {
//     const [x, y] = y3;
//     return x >= xMin && x <= xMax && y >= yMin && y <= yMax;
//   }

//   // 检查矩形顶点相对于直线的位置
//   let hasPositive = false;
//   let hasNegative = false;
//   const epsilon = 1e-10; // 浮点精度容差

//   for (const [x, y] of vertices) {
//     const value = A * x + B * y + C;

//     if (Math.abs(value) < epsilon) {
//       // 点在直线上
//       return true;
//     } else if (value > epsilon) {
//       hasPositive = true;
//     } else if (value < -epsilon) {
//       hasNegative = true;
//     }

//     // 如果已检测到两侧都有点，提前结束
//     if (hasPositive && hasNegative) {
//       return true;
//     }
//   }

//   // 矩形是否与直线相交（点在两侧或点在直线上）
//   return hasPositive && hasNegative;
// }

/**
 * 计算从起点沿方向向量延伸后与画布边界的交点
 * @param startPoint 线段起点坐标 [x, y]
 * @param direction 方向向量 [dx, dy]
 * @param canvasWidth 画布宽度
 * @param canvasHeight 画布高度
 * @returns 与边界的交点坐标
 */
function _GetBoundaryIntersection(
  startPoint: [number, number],
  direction: [number, number],
  canvasWidth: number,
  canvasHeight: number
): [number, number] {
  const [startX, startY] = startPoint;
  const [dirX, dirY] = direction;
  let minT = Infinity; // 存储到达边界的最小正比例系数

  // 检测左右边界（垂直边界）
  if (dirX !== 0) {
    const tToVerticalBoundary =
      dirX > 0
        ? (canvasWidth - startX) / dirX // 到达右边界
        : -startX / dirX; // 到达左边界

    if (tToVerticalBoundary > 0) {
      minT = Math.min(minT, tToVerticalBoundary);
    }
  }

  // 检测上下边界（水平边界）
  if (dirY !== 0) {
    const tToHorizontalBoundary =
      dirY > 0
        ? (canvasHeight - startY) / dirY // 到达下边界
        : -startY / dirY; // 到达上边界

    if (tToHorizontalBoundary > 0) {
      minT = Math.min(minT, tToHorizontalBoundary);
    }
  }

  // 当向量指向边界外时返回 null
  return minT === Infinity
    ? startPoint
    : [startX + dirX * minT, startY + dirY * minT];
}

/**
 * 判断无限延伸的直线是否与矩形区域相交
 * @param rectCorner1 矩形对角顶点1 [x, y]
 * @param rectCorner2 矩形对角顶点2 [x, y]
 * @param linePointA 直线上一点A [x, y]
 * @param linePointB 直线上一点B [x, y]
 * @returns 直线是否与矩形相交
 */
function _DoesInfiniteLineIntersectRectangle(
  rectCorner1: [number, number],
  rectCorner2: [number, number],
  linePointA: [number, number],
  linePointB: [number, number]
): boolean {
  // 计算矩形边界范围
  const rectMinX = Math.min(rectCorner1[0], rectCorner2[0]);
  const rectMaxX = Math.max(rectCorner1[0], rectCorner2[0]);
  const rectMinY = Math.min(rectCorner1[1], rectCorner2[1]);
  const rectMaxY = Math.max(rectCorner1[1], rectCorner2[1]);

  // 矩形四个顶点（顺时针顺序）
  const rectVertices: [number, number][] = [
    [rectMinX, rectMinY], // 左上
    [rectMaxX, rectMinY], // 右上
    [rectMaxX, rectMaxY], // 右下
    [rectMinX, rectMaxY], // 左下
  ];

  // 计算直线方程系数: Ax + By + C = 0
  const coefA = linePointB[1] - linePointA[1];
  const coefB = linePointA[0] - linePointB[0];
  const coefC = linePointB[0] * linePointA[1] - linePointA[0] * linePointB[1];

  // 处理两点重合的退化情况
  if (coefA === 0 && coefB === 0) {
    const [pointX, pointY] = linePointA;
    return (
      pointX >= rectMinX &&
      pointX <= rectMaxX &&
      pointY >= rectMinY &&
      pointY <= rectMaxY
    );
  }

  // 检测矩形顶点在直线的分布情况
  const FLOAT_EPSILON = 1e-10; // 浮点计算容差
  let hasPositiveSidePoint = false;
  let hasNegativeSidePoint = false;

  for (const [vertexX, vertexY] of rectVertices) {
    const positionValue = coefA * vertexX + coefB * vertexY + coefC;

    // 顶点落在直线上（直接判定相交）
    if (Math.abs(positionValue) < FLOAT_EPSILON) {
      return true;
    }
    // 顶点在直线正侧
    else if (positionValue > FLOAT_EPSILON) {
      hasPositiveSidePoint = true;
    }
    // 顶点在直线负侧
    else {
      hasNegativeSidePoint = true;
    }

    // 当检测到直线穿过矩形时提前退出
    if (hasPositiveSidePoint && hasNegativeSidePoint) {
      return true;
    }
  }

  // 当矩形顶点分居直线两侧时判定相交
  return hasPositiveSidePoint && hasNegativeSidePoint;
}

import { _Clone } from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./public/overlay";
import { type Overlay as OverlayType } from "./index";
import DataProcessor from "../core/dataProcessor";

export default class Line extends Overlay<LineStyleType, [number, number][]> {
  /** 两点相连向外延展的无限线 */
  infinite?: boolean;
  private angle = 2 * Math.PI;

  constructor(line: LineType) {
    super(line);
    this.infinite = line.infinite;
  }

  isPointInPath(x: number, y: number) {
    if (this.path) return Overlay.ctx.isPointInPath(this.path, x, y);
    return false;
  }
  isPointInStroke(x: number, y: number) {
    if (this.path && this.mainCanvas) {
      this.setCanvasStylesLine(Overlay.ctx);
      return Overlay.ctx.isPointInStroke(this.path, x, y);
    }
    return false;
  }

  updateBaseData() {
    if (!this.mainCanvas) return;

    let { value, position } = this;
    const [isValue, isPosition] = [
      DataProcessor.IsValids(value) && value!.length > 1,
      DataProcessor.IsValids(position) && position!.length > 1,
    ];

    if (!isValue && !isPosition) {
      return (this.dynamicPosition = undefined);
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

    this.dynamicPosition = dynamicPosition;
    this.value = value;
    this.position = position;
  }

  setInfinite(infinite: Line["infinite"]) {
    if (infinite != this.infinite) {
      this.infinite = infinite;
      if (this.dynamicPosition) this.notifyReload?.();
    }
  }

  private setCanvasStylesPoint(ctx: CanvasRenderingContext2D) {
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].line.point;
    let style = {} as PointStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.line.point || defaultStyle;
    } else if (typeof this.style?.point == "object") {
      style = Object.assign({}, defaultStyle, this.style.point as any);
    } else {
      style = defaultStyle;
    }

    const { width, stroke, fill, radius } = style;

    ctx.lineWidth = width;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;

    return style;
  }
  /** 绘制点 */
  drawPoint(ctx: CanvasRenderingContext2D) {
    const { mainCanvas, dynamicPosition } = this;
    if (!mainCanvas) return;

    const { radius } = this.setCanvasStylesPoint(ctx);

    dynamicPosition!.forEach((position) => {
      ctx.beginPath();
      ctx.arc(position[0], position[1], radius, 0, this.angle);
      ctx.fill();
      ctx.stroke();
    });
  }
  private setCanvasStylesLine(ctx: CanvasRenderingContext2D) {
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

    const { width, color, dash, dashGap, dashOffset, cap, join } = style;

    ctx.setLineDash(dash ? (dashGap as number[]) : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineCap = cap;
    ctx.lineJoin = join;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;

    return style;
  }
  /** 绘制线段 */
  drawLine(ctx: CanvasRenderingContext2D, position?: [number, number][]) {
    const { mainCanvas } = this;
    position = position || this.dynamicPosition;
    if (!mainCanvas) return;

    this.setCanvasStylesLine(ctx);

    ctx.beginPath();

    // 创建 Path2D 对象
    this.path = new Path2D();

    position!.forEach((item, index) => {
      // ctx[index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
      this.path![index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });

    ctx.stroke(this.path);
  }
  /** 绘制无限延伸线段 */
  drawInfiniteStraightLine(ctx: CanvasRenderingContext2D) {
    const { mainCanvas, dynamicPosition } = this;
    if (!mainCanvas) return;

    const { rect } = mainCanvas;

    const [start, end]: [number, number][] = _Clone(dynamicPosition!) as any;

    // 方向向量计算（终点到起点）
    const dirVector: [number, number] = [end[0] - start[0], end[1] - start[1]];
    if (dirVector[0] === 0 && dirVector[1] === 0) {
      return console.error("重合点无法确定方向");
    }

    // 核心算法：计算线段与画布边界的交点
    const getBoundaryIntersection = (
      point: [number, number],
      vector: [number, number]
    ): [number, number] => {
      const [px, py] = point; // 当前点的x,y坐标
      const [vx, vy] = vector; // 方向向量的x,y分量
      let t = Infinity; // 记录最小正值的参数t

      // 横向边界检测 (left/right)
      if (vx !== 0) {
        // 计算到达横向边界的参数t
        const tx =
          vx > 0
            ? (rect!.value.width - px) / vx // 向右延伸至右边界（x=rect!.value.width）
            : -px / vx; // 向左延伸至左边界（x=0）

        if (tx > 0) t = Math.min(t, tx); // 只保留最小的正t值
      }

      // 纵向边界检测 (top/bottom)
      if (vx !== 0) {
        // 计算到达横向边界的参数t
        const tx =
          vx > 0
            ? (rect!.value.width - px) / vx // 向右延伸至右边界（x=rect!.value.width）
            : -px / vx; // 向左延伸至左边界（x=0）

        if (tx > 0) t = Math.min(t, tx); // 只保留最小的正t值
      }

      // 延长向量至边界
      return t === Infinity ? point : [px + vx * t, py + vy * t];
    };

    // 计算延长后的实际坐标
    const extendedStart = getBoundaryIntersection(start, [
      -dirVector[0],
      -dirVector[1],
    ]);
    const extendedEnd = getBoundaryIntersection(end, dirVector);

    // 绘制最终线段
    this.drawLine(ctx, [extendedStart, extendedEnd]);

    // 绘制原始端点
    this.drawPoint(ctx);
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { show, dynamicPosition, position, infinite, mainCanvas } = this;
    if (!mainCanvas) return;

    const { scale, isRecalculate } = mainCanvas;
    const isShow = show.shouldRender(scale);
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      if (isRecalculate)
        this.dynamicPosition = mainCanvas.transformPosition(position!);
      if (infinite) return [this.drawInfiniteStraightLine, this];
      return [this.drawLine, this];
    }
  }
}

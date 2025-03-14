import type Canvas from "..";
import _Worker from "../worker";

export default class Line {
  /** 画布 */
  private canvas: Canvas;
  /** 点位开关 */
  show = true;
  /** 点位列表 */
  private lineMap = new Map<number, LineListType>();

  /** 默认样式 */
  private defaultStyle: LineStyleType;

  constructor(canvas: Canvas) {
    this.canvas = canvas;
    const { theme, style } = this.canvas;
    this.defaultStyle = (style[theme] || style.light).line;
  }

  /** 绘制线段 */
  drawLine(position: [number, number][], style?: DeepPartial<LineStyleType>) {
    const ctx = this.canvas?.ctx;

    const {
      width = this.defaultStyle.width,
      color = this.defaultStyle.color,
      dash = this.defaultStyle.dash,
      dashGap = this.defaultStyle.dashGap,
      dashOffset = this.defaultStyle.dashOffset,
      cap = this.defaultStyle.cap,
      join = this.defaultStyle.join,
    } = style || {};

    ctx.setLineDash(dash ? (dashGap as number[]) : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineCap = cap;
    ctx.lineJoin = join;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.beginPath();

    position.forEach((item, index) => {
      ctx[index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });

    ctx.stroke();
  }
  /** 绘制无限延伸线段 */
  drawInfiniteStraightLine(item: LineListType[number]) {
    const { ctx, rect, drawPoint } = this.canvas;

    // 解构关键数据并校验
    const { dynamicPosition, style, value } = item;
    if (!dynamicPosition || !value) return console.error("坐标数据缺失");
    const [start, end]: [number, number][] = dynamicPosition.map((p) => [
      p[0],
      p[1],
    ]); // 克隆坐标避免污染原始数据

    // 方向向量计算（终点到起点）
    const dirVector: [number, number] = [end[0] - start[0], end[1] - start[1]];
    if (dirVector[0] === 0 && dirVector[1] === 0) {
      return console.error("重合点无法确定方向");
    }

    // 绘制原始端点
    const defaultPointStyle = this.defaultStyle.point;
    const {
      radius = defaultPointStyle.radius,
      stroke = defaultPointStyle.stroke,
      width = defaultPointStyle.width,
      fill = defaultPointStyle.fill,
    } = style?.point || {};
    drawPoint.drawSinglePoint(start, { radius, stroke, width, fill });
    drawPoint.drawSinglePoint(end, { radius, stroke, width, fill });

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
            ? (rect.width - px) / vx // 向右延伸至右边界（x=rect.width）
            : -px / vx; // 向左延伸至左边界（x=0）

        if (tx > 0) t = Math.min(t, tx); // 只保留最小的正t值
      }

      // 纵向边界检测 (top/bottom)
      if (vx !== 0) {
        // 计算到达横向边界的参数t
        const tx =
          vx > 0
            ? (rect.width - px) / vx // 向右延伸至右边界（x=rect.width）
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
    this.drawLine([extendedStart, extendedEnd], item.style);
  }
  /** 绘制多条线段 */
  drawLines(lines: LineListType) {
    const { show, canvas } = this;
    const isRecalculate = canvas.isRecalculate;
    if (!show) return;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const { show, infinite, position } = line;
      if (!show) continue;

      if (isRecalculate)
        line.dynamicPosition = canvas.transformPosition(position!);

      if (infinite) this.drawInfiniteStraightLine(line);
      else this.drawLine(line.dynamicPosition!, line.style);
    }
  }

  /** 待添加的线段 */
  private lineList: LineListType = [];
  /** 向绘图对象中添加一条线段 */
  addLines(items: LineListType | LineListType[number]) {
    const canvas = this.canvas;

    if (this.lineList.length == 0) {
      Promise.resolve().then(() => {
        const { center, percentage, axisConfig } = canvas;

        const result = [],
          step = 1000;
        for (let i = 0; i < this.lineList.length; i += step) {
          result.push(this.lineList.slice(i, i + step));
        }
        result.forEach((list) => {
          _Worker(
            {
              type: "line",
              list,
              config: { axisConfig, percentage, center },
            },
            (lineMap: Map<number, LineListType>) => {
              if (lineMap) {
                lineMap.forEach((list, zIndex) => {
                  if (this.lineMap.has(zIndex)) {
                    this.lineMap.set(
                      zIndex,
                      this.lineMap.get(zIndex)!.concat(list)
                    );
                  } else {
                    this.lineMap.set(zIndex, list);
                  }
                });
                canvas.redrawOnce();
              }
            }
          );
        });

        this.lineList = [];
      });
    }
    this.lineList = this.lineList.concat(items);
  }
  /** 获取绘制函数 */
  fetchDrawFunctions(): [number, () => void][] {
    const { show, canvas } = this;
    const { theme, style } = canvas;
    if (!show) return [];

    this.defaultStyle = (style[theme] || style.light).line;

    const keys = Array.from(this.lineMap.keys());
    return keys.map((zIndex) => [
      zIndex,
      () => this.drawLines(this.lineMap.get(zIndex)!),
    ]);
  }
  /** 清除绘图对象中的所有线段 */
  clearAllLines() {
    this.lineMap.clear();
  }
}

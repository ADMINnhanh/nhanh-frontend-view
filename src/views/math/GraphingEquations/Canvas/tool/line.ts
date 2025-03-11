import type Canvas from "..";
import _Worker from "../worker";

/** 样式管理器 */
class Style {
  style: LineStyleType = {
    light: {
      color: "#c74440",
      width: 4,
      dash: false,
      dashGap: [5, 10],
      dashOffset: 0,
      cap: "round",
      join: "round",
      point: {
        radius: 4,
        stroke: "#c7444080",
        width: 12,
        fill: "#c74440",
      },
    },
    dark: {
      color: "#d98d40",
      width: 4,
      dash: false,
      dashGap: [5, 10],
      dashOffset: 0,
      cap: "round",
      join: "round",
      point: {
        radius: 4,
        stroke: "#d98d40" + "80",
        width: 12,
        fill: "#d98d40",
      },
    },
  };

  /** 添加样式 */
  addStyle(style: LineStyleType) {
    this.style = { ...this.style, ...style };
  }
}

export default class Line extends Style {
  /** 画布 */
  private canvas?: Canvas;
  /** 点位开关 */
  show = true;
  /** 点位列表 */
  private lineMap = new Map<number, LineListType>();

  constructor(canvas: Canvas) {
    super();
    this.canvas = canvas;
  }

  /** 绘制线段 */
  drawLine(location: [number, number][], style?: LineItemType) {
    const { ctx, theme } = this.canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const { width, color, dash, dashGap, dashOffset, cap, join } =
      style || this.style[theme] || this.style.light;

    ctx.setLineDash(dash ? dashGap : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineCap = cap;
    ctx.lineJoin = join;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.beginPath();

    location.forEach((item, index) => {
      ctx[index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });

    ctx.stroke();
  }
  /** 绘制无限延伸线段 */
  drawInfiniteStraightLine(item: LineListType[number]) {
    const { ctx, theme, rect, drawPoint } = this.canvas!;
    if (!ctx || !rect) return console.error("Canvas上下文丢失");

    // 解构关键数据并校验
    const { dynamicLocation, style, value } = item;
    if (!dynamicLocation || !value) return console.error("坐标数据缺失");
    const [start, end]: [number, number][] = dynamicLocation.map((p) => [
      p[0],
      p[1],
    ]); // 克隆坐标避免污染原始数据

    // 方向向量计算（终点到起点）
    const dirVector: [number, number] = [end[0] - start[0], end[1] - start[1]];
    if (dirVector[0] === 0 && dirVector[1] === 0) {
      return console.error("重合点无法确定方向");
    }

    // 绘制原始端点
    const pointStyle =
      style?.point || this.style[theme]?.point || this.style.light.point;
    drawPoint.drawSinglePoint(start, pointStyle);
    drawPoint.drawSinglePoint(end, pointStyle);

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
    const { ctx, center, percentage, isRecalculate } = canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");
    if (!show) return;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const { show, infinite, location } = line;
      if (!show) return;

      if (isRecalculate) {
        line.dynamicLocation = location?.map((item) => {
          let [x, y] = item!;
          x = center.x + x * percentage;
          y = center.y + y * percentage;
          return [x, y];
        });
      }

      if (infinite) this.drawInfiniteStraightLine(line);
      else this.drawLine(line.dynamicLocation!, line.style);
    }
  }

  /** 待添加的线段 */
  private lineList: LineListType = [];
  /** 向绘图对象中添加一条线段 */
  addLines(items: LineListType | LineListType[number]) {
    const canvas = this.canvas!;

    if (this.lineList.length == 0) {
      Promise.resolve().then(() => {
        const { center, percentage, gridConfig } = canvas;
        const count = gridConfig.count;

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
              config: { count, gridConfig, percentage, center },
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
    const { ctx } = canvas!;
    if (!ctx || !show) return [];

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

import type Canvas from "..";
import { IsValids } from "./public";

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
    },
    dark: {
      color: "#2d70b3",
      width: 4,
      dash: false,
      dashGap: [5, 10],
      dashOffset: 0,
      cap: "round",
      join: "round",
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

  /** 普通线 */
  drawLine(item: LineListType[number]) {
    const { ctx } = this.canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    item.dynamicLocation?.forEach((item, index) => {
      ctx[index == 0 ? "moveTo" : "lineTo"](...item);
    });
  }
  /** 无限线 */
  drawInfiniteLine(item: LineListType[number]) {
    const { ctx, center, theme, percentage, isRecalculate, rect } =
      this.canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const start = [...item.dynamicLocation![0]];
    const end = [...item.dynamicLocation![1]];

    // start[0]
  }
  /** 绘制点位 */
  drawLines(items: LineListType) {
    const { show, style, canvas } = this;
    const { ctx, center, theme, percentage, isRecalculate, rect } = canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");
    if (!show) return;

    items.forEach((line) => {
      const { show, infinite, location, dynamicLocation } = line;
      if (!show) return;

      if (isRecalculate || !dynamicLocation) {
        line.dynamicLocation = location?.map((item) => {
          let [x, y] = item!;
          x = center.x + x * percentage;
          y = center.y + y * percentage;
          return [x, y];
        });
      }

      const { width, color, dash, dashGap, dashOffset, cap, join } =
        line.style || style[theme] || style.light;

      ctx.setLineDash(dash ? dashGap : []);
      ctx.lineDashOffset = dashOffset;
      ctx.lineCap = cap;
      ctx.lineJoin = join;
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.beginPath();

      if (infinite) this.drawInfiniteLine(line);
      else this.drawLine(line);

      ctx.stroke();
    });
  }

  /** 添加点位 */
  addLine(items: LineListType | LineListType[number]) {
    const canvas = this.canvas!;
    [items].flat().forEach((item) => {
      let { location, value, zIndex = 0, show = true, style, infinite } = item;

      const [isValue, isLocation] = [IsValids(value), IsValids(location)];
      if (!isValue && !isLocation) return;

      if (isValue && !isLocation) {
        location = value!.map((item) => {
          const loc = canvas.getAxisPointByValue(...item);
          return [loc.x, loc.y];
        });
      } else if (!isValue && isLocation) {
        value = value!.map((item) => {
          const val = canvas.getAxisValueByPoint(...item!);
          return [val.xV, val.yV];
        });
      }
      const list = (this.lineMap.get(zIndex) || []).concat({
        location,
        value,
        zIndex,
        show,
        style,
        infinite: infinite && location?.length == 2,
      });
      this.lineMap.set(zIndex, list);
    });

    canvas.redrawOnce();
  }
  /** 获取绘制函数 */
  fetchDrawFunctions(): [number, () => void][] {
    const keys = Array.from(this.lineMap.keys());
    return keys.map((zIndex) => [
      zIndex,
      () => this.drawLines(this.lineMap.get(zIndex)!),
    ]);
  }
  /** 清除线 */
  clearLine() {
    this.lineMap.clear();
  }
}

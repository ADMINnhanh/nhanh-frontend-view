import type Canvas from "..";
import _Worker from "../worker";

export default class Polygon {
  /** 画布 */
  private canvas?: Canvas;
  /** 点位开关 */
  show = true;
  /** 点位列表 */
  private polygonMap = new Map<number, PolygonListType>();

  constructor(canvas: Canvas) {
    this.canvas = canvas;
  }

  private color() {
    const { theme, style } = this.canvas!;
    return (style[theme] || style.light).polygon;
  }

  private setStyle(ctx: CanvasRenderingContext2D, style?: PolygonStyleType) {
    const { width, stroke, dash, dashGap, dashOffset, fill } =
      style || this.color();
    ctx.setLineDash(dash ? dashGap : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineWidth = width;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
  }

  /** 绘制矩形 */
  drawRect(
    location: [number, number],
    size: [number, number],
    style?: PolygonStyleType
  ) {
    const { ctx } = this.canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    this.setStyle(ctx, style);

    ctx.beginPath();

    ctx.rect(location[0], location[1], size[0], size[1]);

    ctx.stroke();
    ctx.fill();
  }
  /** 绘制多边形 */
  drawPolygon(location: [number, number][], style?: PolygonStyleType) {
    const ctx = this.canvas?.ctx;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    this.setStyle(ctx, style);

    ctx.beginPath();

    location.forEach((item, index) => {
      ctx[index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
  /** 绘制多个多边形 */
  drawPolygons(polygons: PolygonListType) {
    const { show, canvas } = this;
    const { ctx, center, percentage, isRecalculate } = canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");
    if (!show) return;

    for (let i = 0; i < polygons.length; i++) {
      const polygon = polygons[i];
      const { show, location, style } = polygon;
      if (!show) continue;

      if (isRecalculate) {
        polygon.dynamicLocation = location?.map((item) => {
          let [x, y] = item!;
          x = center.x + x * percentage;
          y = center.y + y * percentage;
          return [x, y];
        });
        if (polygon.size) {
          polygon.dynamicSize = [
            polygon.size[0] * percentage,
            polygon.size[1] * percentage,
          ];
        }
      }

      const { dynamicLocation, dynamicSize } = polygon;
      if (polygon.size) this.drawRect(dynamicLocation![0], dynamicSize!, style);
      else this.drawPolygon(dynamicLocation!, style);
    }
  }

  /** 待添加的多边形 */
  private polygonList: PolygonListType = [];
  /** 向绘图对象中添加多边形 */
  addPolygons(items: PolygonListType | PolygonListType[number]) {
    const canvas = this.canvas!;

    if (this.polygonList.length == 0) {
      Promise.resolve().then(() => {
        const { center, percentage, gridConfig } = canvas;

        const result = [],
          step = 1000;
        for (let i = 0; i < this.polygonList.length; i += step) {
          result.push(this.polygonList.slice(i, i + step));
        }
        result.forEach((list) => {
          _Worker(
            {
              type: "polygon",
              list,
              config: { gridConfig, percentage, center },
            },
            (polygonMap: Map<number, PolygonListType>) => {
              if (polygonMap) {
                polygonMap.forEach((list, zIndex) => {
                  if (this.polygonMap.has(zIndex)) {
                    this.polygonMap.set(
                      zIndex,
                      this.polygonMap.get(zIndex)!.concat(list)
                    );
                  } else {
                    this.polygonMap.set(zIndex, list);
                  }
                });
                canvas.redrawOnce();
              }
            }
          );
        });

        this.polygonList = [];
      });
    }
    this.polygonList = this.polygonList.concat(items);
  }
  /** 获取绘制函数 */
  fetchDrawFunctions(): [number, () => void][] {
    const { show, canvas } = this;
    const { ctx } = canvas!;
    if (!ctx || !show) return [];

    const keys = Array.from(this.polygonMap.keys());
    return keys.map((zIndex) => [
      zIndex,
      () => this.drawPolygons(this.polygonMap.get(zIndex)!),
    ]);
  }
  /** 清除绘图对象中的所有多边形 */
  clearAllLines() {
    this.polygonMap.clear();
  }
}

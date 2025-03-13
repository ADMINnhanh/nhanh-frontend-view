import type Canvas from "..";
import _Worker from "../worker";
import { CalculatePointPosition } from "./public";

export default class Polygon {
  /** 画布 */
  private canvas?: Canvas;
  /** 点位开关 */
  show = true;
  /** 点位列表 */
  private polygonMap = new Map<number, PolygonListType>();

  /** 默认样式 */
  private defaultStyle: PolygonStyleType;

  constructor(canvas: Canvas) {
    this.canvas = canvas;

    const { theme, style } = this.canvas!;
    this.defaultStyle = (style[theme] || style.light).polygon;
  }

  private setStyle(
    ctx: CanvasRenderingContext2D,
    style?: DeepPartial<PolygonStyleType>
  ) {
    const {
      width = this.defaultStyle.width,
      stroke = this.defaultStyle.stroke,
      dash = this.defaultStyle.dash,
      dashGap = this.defaultStyle.dashGap,
      dashOffset = this.defaultStyle.dashOffset,
      fill = this.defaultStyle.fill,
    } = style || {};

    ctx.setLineDash(dash ? (dashGap as any) : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineWidth = width;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
  }

  /** 绘制矩形 */
  drawRect(
    location: [number, number],
    size: [number, number],
    style?: DeepPartial<PolygonStyleType>
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
  drawPolygon(
    location: [number, number][],
    style?: DeepPartial<PolygonStyleType>
  ) {
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
    const { ctx, center, percentage, isRecalculate, axisConfig } = canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");
    if (!show) return;

    for (let i = 0; i < polygons.length; i++) {
      const polygon = polygons[i];
      const { show, location, style } = polygon;
      if (!show) continue;

      if (isRecalculate) {
        polygon.dynamicLocation = CalculatePointPosition(location!, {
          center,
          percentage,
          axisConfig,
        });
        if (polygon.size) {
          polygon.dynamicSize = [
            polygon.size[0] * percentage * axisConfig.x,
            polygon.size[1] * percentage * axisConfig.y,
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
        const { center, percentage, axisConfig } = canvas;

        const result = [],
          step = 100;
        for (let i = 0; i < this.polygonList.length; i += step) {
          result.push(this.polygonList.slice(i, i + step));
        }

        result.forEach((list) => {
          _Worker(
            {
              type: "polygon",
              list,
              config: { axisConfig, percentage, center },
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
    const { ctx, theme, style } = canvas!;
    if (!ctx || !show) return [];

    this.defaultStyle = (style[theme] || style.light).polygon;

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

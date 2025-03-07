import type Canvas from "..";
import { IsValid } from "./public";

/** 样式管理器 */
class Style {
  style: PointStyleType = {
    light: {
      radius: 4,
      fill: "#6042a6",
      width: 12,
      stroke: "#6042a680",
    },
    dark: {
      radius: 4,
      fill: "#5faaff",
      width: 12,
      stroke: "#5faaff70",
    },
  };

  /** 添加样式 */
  addStyle(style: PointStyleType) {
    this.style = { ...this.style, ...style };
  }
}

export default class Point extends Style {
  /** 画布 */
  private canvas?: Canvas;
  /** 点位开关 */
  show = true;
  /** 点位列表 */
  private pointMap = new Map<number, PointListType>();
  /** 角度 */
  private angle = 2 * Math.PI;

  /** 需要绘制点位数量 */
  private pointCount = 0;
  /** 简化绘制的数量 */
  private pointSimplifyCount = 5000;
  /** 是否简化 */
  private simplify = false;

  constructor(canvas: Canvas) {
    super();
    this.canvas = canvas;
  }

  /** 绘制单个点位 */
  drawSinglePoint(location: [number, number], style?: PointItemType) {
    const { ctx, theme } = this.canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const { width, stroke, fill, radius } =
      style || this.style[theme] || this.style.light;

    ctx.lineWidth = width;
    if (!this.simplify) ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(...location, radius, 0, this.angle);
    ctx.fill();
    if (!this.simplify) ctx.stroke();
  }
  /** 批量绘制多个点位 */
  drawMultiplePoints(points: PointListType) {
    if (!this.show) return;

    points.forEach((point) => {
      const { show, dynamicLocation, style } = point;
      if (!show) return;
      this.drawSinglePoint(dynamicLocation!, style);
    });
  }
  /** 向数据集合中添加点位 */
  addPoints(points: PointListType | PointListType[number]) {
    const canvas = this.canvas!;
    const { center, percentage } = canvas!;

    [points].flat().forEach((item) => {
      let { location, value, zIndex = 0, show = true, style } = item;

      const [isValue, isLocation] = [IsValid(value), IsValid(location)];
      if (!isValue && !isLocation) return;
      if (isValue && !isLocation) {
        const loc = canvas.getAxisPointByValue(...value!);
        location = [loc.x, loc.y];
      } else if (!isValue && isLocation) {
        const val = canvas.getAxisValueByPoint(...location!);
        value = [val.xV, val.yV];
      }

      let [x, y] = location!;
      x = center.x + x * percentage;
      y = center.y + y * percentage;
      const dynamicLocation: [number, number] = [x, y];

      const list = (this.pointMap.get(zIndex) || []).concat({
        location,
        dynamicLocation,
        value,
        zIndex,
        show,
        style,
      });
      this.pointMap.set(zIndex, list);
    });

    this.canvas!.redrawOnce();
  }
  /** 获取绘制函数 */
  fetchDrawFunctions() {
    const { show, style, canvas } = this;
    const { ctx, center, theme, percentage, isRecalculate, rect } = canvas!;
    if (!ctx || !show) return [];

    this.pointCount = 0;

    const keys = Array.from(this.pointMap.keys());
    const funcs: [number, () => void][] = keys.map((zIndex) => {
      const points = this.pointMap.get(zIndex)!.filter((point) => {
        const { location, show } = point;
        if (!show) return;
        const { width, radius } = point.style || style[theme] || style.light;

        let x, y;

        if (isRecalculate) {
          [x, y] = location!;
          x = center.x + x * percentage;
          y = center.y + y * percentage;
          point.dynamicLocation = [x, y];
        } else {
          [x, y] = point.dynamicLocation!;
        }

        if (
          x > rect!.width + radius + width ||
          x < -radius - width ||
          y > rect!.height + radius + width ||
          y < -radius - width
        )
          return;

        return true;
      });

      this.pointCount += points.length;
      this.simplify = this.pointCount > this.pointSimplifyCount;

      return [zIndex, () => this.drawMultiplePoints(points)];
    });

    return funcs;
  }
  /** 清除画布上所有已绘制的点位 */
  clearAllPoints() {
    this.pointMap.clear();
  }
}

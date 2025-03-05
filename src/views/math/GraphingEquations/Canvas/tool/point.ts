import type Canvas from "..";

/** 样式管理器 */
class Style {
  style: PointStyleType = {
    light: {
      radius: 4,
      stroke: "#6042a680",
      width: 12,
      fill: "#6042a6",
    },
    dark: {
      radius: 4,
      stroke: "#5faaff70",
      width: 12,
      fill: "#5faaff",
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

  constructor(canvas: Canvas) {
    super();
    this.canvas = canvas;
  }

  /** 绘制点位 */
  drawPoints(points: PointListType) {
    const { show, style, angle, canvas } = this;
    const { ctx, center, theme, percentage, isRecalculate, rect } = canvas!;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");
    if (!show) return;

    points.forEach((point) => {
      const { location, show, dynamicLocation } = point;
      if (!show) return;
      const { width, stroke, fill, radius } =
        point.style || style[theme] || style.light;

      let x, y;

      if (isRecalculate || !dynamicLocation) {
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

      ctx.lineWidth = width;
      ctx.strokeStyle = stroke;
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, angle);
      ctx.stroke();
      ctx.fill();
    });
  }
  /** 参数是否合法 */
  isValid(arr: any) {
    return (
      Array.isArray(arr) &&
      typeof arr[0] === "number" &&
      typeof arr[1] === "number" &&
      isFinite(arr[0]) &&
      isFinite(arr[1])
    );
  }
  /** 添加点位 */
  addPoint(points: PointListType | PointListType[number]) {
    const canvas = this.canvas!;
    [points].flat().forEach((item) => {
      let { location, value, zIndex = 0, show = true, style } = item;

      const [isValue, isLocation] = [
        this.isValid(value),
        this.isValid(location),
      ];
      if (!isValue && !isLocation) return;
      if (isValue && !isLocation) {
        const loc = canvas.getAxisPointByValue(...value!);
        location = [loc.x, loc.y];
      } else if (!isValue && isLocation) {
        const val = canvas.getAxisValueByPoint(...location!);
        value = [val.xV, val.yV];
      }
      const list = (this.pointMap.get(zIndex) || []).concat({
        location,
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
  fetchDrawFunctions(): [number, () => void][] {
    const keys = Array.from(this.pointMap.keys());
    return keys.map((zIndex) => [
      zIndex,
      () => this.drawPoints(this.pointMap.get(zIndex)!),
    ]);
  }
  /** 清除点 */
  clearPoint() {
    this.pointMap.clear();
  }
}

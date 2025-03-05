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
  canvas?: Canvas;
  /** 点位开关 */
  show = true;
  /** 点位列表 */
  private pointMap = new Map<number, PointListType>();

  constructor(canvas: Canvas) {
    super();
    this.canvas = canvas;
  }

  drawPoints(points: PointListType) {
    const canvas = this.canvas!;
    const { ctx, center, theme, percentage } = canvas;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    if (this.show) {
      points.forEach((point) => {
        const { location, show } = point;
        if (show) {
          const { width, stroke, fill, radius } =
            point.style || this.style[theme] || this.style.light;

          const [x, y] = location!;

          ctx.lineWidth = width;
          ctx.strokeStyle = stroke;
          ctx.fillStyle = fill;
          ctx.beginPath();
          ctx.arc(
            center.x + x * percentage,
            center.y + y * percentage,
            radius,
            0,
            2 * Math.PI
          );
          ctx.stroke();
          ctx.fill();
        }
      });
    }
  }

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
  fetchDrawFunctions(): [number, () => void][] {
    const keys = Array.from(this.pointMap.keys());
    return keys.map((zIndex) => [
      zIndex,
      () => this.drawPoints(this.pointMap.get(zIndex)!),
    ]);
  }

  clearPoint() {
    this.pointMap.clear();
  }
}

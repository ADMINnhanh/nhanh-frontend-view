import type Draw from "../core/draw";

/** 样式管理器 */
class Style {
  style: PointStyleType = {
    light: {
      radius: 2,
      stroke: "#6042a680",
      width: 4,
      fill: "#6042a6",
    },
    dark: {
      radius: 2,
      stroke: "#6042a680",
      width: 4,
      fill: "#6042a6",
    },
  };

  /** 添加样式 */
  addStyle(style: PointStyleType) {
    this.style = { ...this.style, ...style };
  }
}

export default class Point extends Style {
  /** 点位开关 */
  show = true;

  private pointList: PointListType = [];

  drawPoint(canvas: Draw) {
    if (this.show) {
      const { ctx, rect, center, gridConfig, theme } = canvas;
      if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");
      const style = this.style[theme] || this.style.light;
    }
  }

  validateLocationAndValue(
    location?: [number, number],
    value?: [number, number]
  ) {
    function isValid(arr: any) {
      return (
        Array.isArray(arr) &&
        typeof arr[0] === "number" &&
        typeof arr[1] === "number" &&
        isFinite(arr[0]) &&
        isFinite(arr[1])
      );
    }
    return isValid(location) || isValid(value);
  }
  /** 添加点位 */
  addPoint(point: PointListType | PointListType[number]) {
    [point].flat().forEach((item) => {
      const { location, value, zIndex = 0, show = true } = item;
      if (!this.validateLocationAndValue(location, value)) return;
      // if (point.x == undefined || point.y == undefined) return;
      // this.pointList.push(point);
    });
    // this.pointList.push(point);
  }
}

import type Canvas from "..";
import _Worker from "../worker";

export default class Point {
  /** 画布 */
  private canvas: Canvas;
  /** 角度 */
  private angle = 2 * Math.PI;
  /** 点位开关 */
  show = true;

  /** 点位列表 zIndex -> xAxis -> yAxis -> PointListType */
  private pointMap: PointMap = new Map();

  /** 最大的半径 */
  private maxRadius = 16;

  /** 需要绘制点位数量 */
  private pointCount = 0;
  /** 简化绘制的数量 */
  private pointSimplifyCount = 5000;
  /** 是否简化 */
  private simplify = false;

  /** 默认样式 */
  private defaultStyle: PointStyleType;

  constructor(canvas: Canvas) {
    this.canvas = canvas;
    const { theme, style } = this.canvas;
    this.defaultStyle = (style[theme] || style.light).point;
  }

  /** 绘制单个点位 */
  drawSinglePoint(
    position: [number, number],
    style?: DeepPartial<PointStyleType>
  ) {
    const ctx = this.canvas.ctx;

    const {
      width = this.defaultStyle.width,
      stroke = this.defaultStyle.stroke,
      fill = this.defaultStyle.fill,
      radius = this.defaultStyle.radius,
    } = style || {};

    ctx.lineWidth = width;
    if (!this.simplify) ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(position[0], position[1], radius, 0, this.angle);

    ctx.fill();
    if (!this.simplify) ctx.stroke();
  }
  /** 批量绘制多个点位 */
  drawMultiplePoints(points: PointListType) {
    if (!this.show) return;
    for (let i = 0; i < points.length; i++) {
      const { show, dynamicPosition, style } = points[i];
      if (!show) continue;
      this.drawSinglePoint(dynamicPosition!, style);
    }
  }

  /** 待添加的点位 */
  private pointList: PointListType = [];
  /** 向数据集合中添加点位 */
  addPoints(points: PointListType | PointListType[number]) {
    const canvas = this.canvas;

    if (this.pointList.length == 0) {
      Promise.resolve().then(() => {
        const { center, percentage, axisConfig } = canvas;
        const maxRadius = this.maxRadius;

        const result = [],
          step = 20000;
        for (let i = 0; i < this.pointList.length; i += step) {
          result.push(this.pointList.slice(i, i + step));
        }
        result.forEach((list) => {
          _Worker(
            {
              type: "point",
              list,
              config: { maxRadius, axisConfig, percentage, center },
            },
            (data) => {
              if (data) {
                const { pointMap, maxRadius } = data as {
                  pointMap: PointMap;
                  maxRadius: number;
                };
                this.maxRadius = Math.max(this.maxRadius, maxRadius);

                pointMap.forEach((xMap, zIndex) => {
                  if (this.pointMap.has(zIndex)) {
                    const oldXMap = this.pointMap.get(zIndex)!;
                    xMap.forEach((yMap, x) => {
                      if (oldXMap.has(x)) {
                        const oldYMap = oldXMap.get(x)!;
                        yMap.forEach((point, y) => {
                          if (oldYMap.has(y)) {
                            const oldPoints = oldYMap.get(y)!;
                            oldYMap.set(y, oldPoints.concat(point));
                          } else {
                            oldYMap.set(y, point);
                          }
                        });
                      } else {
                        oldXMap.set(x, yMap);
                      }
                    });
                  } else {
                    this.pointMap.set(zIndex, xMap);
                  }
                });
                canvas.redrawOnce();
              }
            }
          );
        });

        this.pointList = [];
      });
    }
    this.pointList = this.pointList.concat(points);
  }
  /** 获取绘制函数 */
  fetchDrawFunctions() {
    const canvas = this.canvas;
    const { isRecalculate, rect, axisConfig, theme, style } = canvas;
    if (!this.show) return [];

    this.defaultStyle = (style[theme] || style.light).point;

    const count = axisConfig.count;

    this.pointCount = 0;

    this.maxRadius = Math.max(
      this.defaultStyle.radius + this.defaultStyle.width,
      this.maxRadius
    );

    const { left, right, top, bottom } = rect;
    const pointRect = {
      left: left - this.maxRadius,
      right: right + this.maxRadius,
      top: top - this.maxRadius,
      bottom: bottom + this.maxRadius,
    };

    const videoXyRange = canvas.getMaxMinValue(pointRect);

    videoXyRange.minXV = Math.floor(videoXyRange.minXV / count) * count;
    videoXyRange.minYV = Math.floor(videoXyRange.minYV / count) * count;
    videoXyRange.maxXV = Math.ceil(videoXyRange.maxXV / count) * count;
    videoXyRange.maxYV = Math.ceil(videoXyRange.maxYV / count) * count;

    const funcs: [number, () => void][] = [];
    this.pointMap.forEach((xMap, zIndex) => {
      const _points: PointListType = [];
      xMap.forEach((yMap, x) => {
        if (x < videoXyRange.minXV || x + count > videoXyRange.maxXV) return;
        yMap.forEach((points, y) => {
          if (y < videoXyRange.minYV || y + count > videoXyRange.maxYV) return;
          points.forEach((point) => {
            const { position, show } = point;
            if (!show) return;

            if (isRecalculate)
              point.dynamicPosition = canvas.transformPosition([position!])[0];

            _points.push(point);
          });
        });
      });

      this.pointCount += _points.length;

      funcs.push([zIndex, () => this.drawMultiplePoints(_points)]);
    });
    this.simplify = this.pointCount > this.pointSimplifyCount;

    console.log(
      `%c本次需要绘制点位数量：${this.pointCount}\n%c本次是否简化绘制：${this.simplify}`,
      "color:" +
        (this.pointCount > 50000
          ? "#F56C6C"
          : this.pointCount > 10000
          ? "#E6A23C"
          : "#67C23A"),
      "color:" + (this.simplify ? "#F56C6C" : "#67C23A")
    );

    return funcs;
  }
  /** 清除画布上所有已绘制的点位 */
  clearAllPoints() {
    this.pointMap.clear();
  }
}

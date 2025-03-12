import "./index.less";
import QuickMethod from "./core/quikmethod";
import Grid from "./tool/grid";
import Point from "./tool/point";
import Line from "./tool/line";
import Polygon from "./tool/polygon";

/** 画布类 */
export default class Canvas extends QuickMethod {
  constructor(id: string) {
    super(id);
    this.drawGrid = new Grid(this);
    this.drawPoint = new Point(this);
    this.drawLine = new Line(this);
    this.drawPolygon = new Polygon(this);

    this.updateCenter();
  }

  /** 销毁 */
  destroy() {
    super.destroy();
  }
}

export function _TimeConsumption(func: Function, level: [number, string][]) {
  // 检查参数类型
  if (typeof func !== "function") {
    throw new Error("The first argument must be a function.");
  }
  if (!Array.isArray(level)) {
    throw new Error("The second argument must be an array.");
  }

  // 在类中添加属性
  let drawTimes: number[] = [];
  // 保留最近10次的耗时数据
  let maxHistory = 100;
  /** 平均耗时 */
  let avgTime: number = 0;

  // 定义一个辅助函数来确定颜色
  const getColor = (elapsedTime: number, level: [number, string][]) => {
    for (const [time, color] of level) {
      if (elapsedTime >= time) {
        return color;
      }
    }
    return "black"; // 默认颜色
  };

  return function (...args: any[]) {
    // 记录开始时间
    const startTime = performance.now();

    // 执行函数
    const result = func(...args);

    // 记录结束时间并计算本次重绘的耗时
    const elapsedTime = performance.now() - startTime;

    // 将本次耗时添加到 drawTimes 数组中
    drawTimes.push(elapsedTime);

    // 如果 drawTimes 数组的长度超过最大历史记录数，移除最早的记录
    if (drawTimes.length > maxHistory) drawTimes.shift();

    // 计算平均耗时
    avgTime =
      drawTimes.reduce((sum, time) => sum + time, 0) / drawTimes.length || 0;

    // 根据单次耗时确定颜色
    const singleColor = getColor(elapsedTime, level);

    // 根据平均耗时确定颜色
    const avgColor = getColor(avgTime, level);

    // 输出带样式的日志，包含单次耗时和平均耗时
    console.log(
      `%c单次耗时：${elapsedTime.toFixed(2)}ms\n%c平均耗时（${
        drawTimes.length
      }次）：${avgTime.toFixed(2)}ms`,
      `color: ${singleColor}; padding: 2px 0;`,
      `color: ${avgColor}; padding: 2px 0;`
    );

    return result;
  };
}

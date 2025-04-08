import "./index.less";
import QuickMethod from "./core/quikmethod";
import LayerGroup from "./LayerGroup";
import OverlayGroup from "./OverlayGroup";
import Layer from "./LayerGroup/layer";
import Point from "./OverlayGroup/point";
import Line from "./OverlayGroup/line";
import Polygon from "./OverlayGroup/polygon";
import Axis from "./core/axis";

type Overlay = Point | Line | Polygon;

type InitConfig = DeepPartial<{
  theme: _Canvas["theme"];
  axisConfig: _Canvas["axisConfig"];
  axisShow: _Canvas["drawAxis"]["show"];
  defaultCenter: _Canvas["defaultCenter"];
}>;

/** 画布类 */
export default class _Canvas extends QuickMethod {
  /** 图层群组 */
  static LayerGroup = LayerGroup;
  /** 图层 */
  static Layer = Layer;
  /** 覆盖物群组 */
  static OverlayGroup = OverlayGroup;

  /** 点位 */
  static Point = Point;
  /** 线段 */
  static Line = Line;
  /** 多边形 */
  static Polygon = Polygon;

  constructor(id: string, config?: InitConfig) {
    super(id);
    this.drawAxis = new Axis(this);

    if (config) {
      const { theme, axisConfig, axisShow, defaultCenter } = config;
      if (theme) this.setTheme(theme);
      if (axisConfig) this.setAxis(axisConfig);
      if (axisShow) this.toggleAxis(axisShow);
      if (defaultCenter) this.setDefaultCenter(defaultCenter);
    }

    this.initLayerGroups();
    this.updateCenter();
  }

  private initLayerGroups() {
    const layer_polygon = new Layer("多边形图层");
    layer_polygon.addGroup(new OverlayGroup("多边形覆盖物群组"));
    layer_polygon.setzIndex(1);

    const layer_line = new Layer("线段图层");
    layer_line.addGroup(new OverlayGroup("线段覆盖物群组"));
    layer_line.setzIndex(2);

    const layer_point = new Layer("点位图层");
    layer_point.addGroup(new OverlayGroup("点位覆盖物群组"));
    layer_point.setzIndex(3);

    const layerGroup = new LayerGroup("默认图层群组");
    layerGroup.addLayer([layer_point, layer_line, layer_polygon]);

    this.setLayerGroups(layerGroup);
  }
  /** 获取图层群组 集合 */
  gteLayerGroups(key: string) {
    return this.layerGroups.get(key);
  }
  /** 设置图层群组 */
  setLayerGroups(layerGroup: LayerGroup) {
    if (layerGroup instanceof LayerGroup) {
      this.layerGroups.set(layerGroup.name, layerGroup);
      layerGroup.setNotifyReload(() => this.redrawOnce());
      layerGroup.setMainCanvas(this);
    }
  }
  /** 移除图层群组 */
  removeLayerGroups(layerGroup: LayerGroup | LayerGroup[]) {
    if (layerGroup instanceof LayerGroup) {
      this.layerGroups.delete(layerGroup.name);
      layerGroup.setNotifyReload();
      layerGroup.setMainCanvas();
      this.redrawOnce();
    }
  }
  /** 添加图层 */
  addLayer(layers: Layer | Layer[]) {
    const layerGroup = this.layerGroups.get("默认图层群组");
    if (!layerGroup) return;
    layerGroup.addLayer([layers].flat());
  }
  /** 移除图层 */
  removeLayer(layers: Layer | Layer[]) {
    const layerGroup = this.layerGroups.get("默认图层群组");
    if (!layerGroup) return;
    layerGroup.removeLayer([layers].flat());
  }
  /** 添加覆盖物 */
  addOverlay(overlays: Overlay | Overlay[]) {
    const { overlays_point, overlays_line, overlays_polygon } =
      this.getDefaultOverlayGroup() || {};
    [overlays].flat().forEach((overlay) => {
      if (overlay instanceof Point) overlays_point?.addOverlays(overlay);
      else if (overlay instanceof Line) overlays_line?.addOverlays(overlay);
      else if (overlay instanceof Polygon)
        overlays_polygon?.addOverlays(overlay);
    });
  }
  /** 移除覆盖物 */
  removeOverlay(overlays: Overlay | Overlay[]) {
    const { overlays_point, overlays_line, overlays_polygon } =
      this.getDefaultOverlayGroup() || {};
    [overlays].flat().forEach((overlay) => {
      if (overlay instanceof Point) overlays_point?.removeOverlays(overlay);
      else if (overlay instanceof Line) overlays_line?.removeOverlays(overlay);
      else if (overlay instanceof Polygon)
        overlays_polygon?.removeOverlays(overlay);
    });
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

// 计算平面直角坐标系中两点的距离
export function _CalculateDistance2D(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/** 获取两点的中点 */
export function _GetMidpoint(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  return { x: midX, y: midY };
}

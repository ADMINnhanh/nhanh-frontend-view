import "./index.less";
import QuickMethod from "./core/quikmethod";
import LayerGroup from "./LayerGroup";
import OverlayGroup, { type Overlay } from "./OverlayGroup";
import Layer from "./LayerGroup/layer";
import Point from "./OverlayGroup/point";
import Text from "./OverlayGroup/text";
import Line from "./OverlayGroup/line";
import Polygon from "./OverlayGroup/polygon";
import Axis from "./core/axis";
import Custom from "./OverlayGroup/custom";

type ConstructorOption = ConstructorParameters<typeof QuickMethod>[0] &
  DeepPartial<{
    /** 轴线显示属性 */
    axisShow: _Canvas["drawAxis"]["show"];
  }>;

/** 画布类 */
export default class _Canvas extends QuickMethod {
  /** 图层群组 */
  static LayerGroup = LayerGroup;
  /** 图层 */
  static Layer = Layer;
  /** 覆盖物群组 */
  static OverlayGroup = OverlayGroup;

  /** 文字 */
  static Text = Text;
  /** 点位 */
  static Point = Point;
  /** 线段 */
  static Line = Line;
  /** 多边形 */
  static Polygon = Polygon;
  /** 自定义绘制 */
  static Custom = Custom;

  constructor(option: ConstructorOption) {
    super(option);

    const { axisShow } = option;

    this.drawAxis = new Axis(this);
    if (axisShow) this.toggleAxis(axisShow);

    this.initLayerGroups();
    this.updateCenter();
  }

  private initLayerGroups() {
    const layer_polygon = new Layer({ name: "多边形图层" });
    layer_polygon.addGroup(new OverlayGroup({ name: "多边形覆盖物群组" }));
    layer_polygon.setzIndex(1);

    const layer_line = new Layer({ name: "线段图层" });
    layer_line.addGroup(new OverlayGroup({ name: "线段覆盖物群组" }));
    layer_line.setzIndex(2);

    const layer_point = new Layer({ name: "点位图层" });
    layer_point.addGroup(new OverlayGroup({ name: "点位覆盖物群组" }));
    layer_point.setzIndex(3);

    const layer_text = new Layer({ name: "文字图层" });
    layer_text.addGroup(new OverlayGroup({ name: "文字覆盖物群组" }));
    layer_text.setzIndex(4);

    const layer_custom = new Layer({ name: "自定义绘制图层" });
    layer_custom.addGroup(new OverlayGroup({ name: "自定义绘制覆盖物群组" }));
    layer_custom.setzIndex(5);

    const layerGroup = new LayerGroup({ name: "默认图层群组" });
    layerGroup.addLayer([
      layer_text,
      layer_point,
      layer_line,
      layer_polygon,
      layer_custom,
    ]);

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
      layerGroup.parent = this;
    }
  }
  /** 移除图层群组 */
  removeLayerGroups(layerGroup: LayerGroup | LayerGroup[]) {
    if (layerGroup instanceof LayerGroup) {
      this.layerGroups.delete(layerGroup.name);
      layerGroup.setNotifyReload();
      layerGroup.setMainCanvas();
      layerGroup.parent = undefined;
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
    const {
      overlays_text,
      overlays_point,
      overlays_line,
      overlays_polygon,
      overlays_custom,
    } = this.getDefaultOverlayGroup() || {};
    [overlays].flat().forEach((overlay) => {
      if (overlay instanceof Text) overlays_text?.addOverlays(overlay);
      else if (overlay instanceof Point) overlays_point?.addOverlays(overlay);
      else if (overlay instanceof Line) overlays_line?.addOverlays(overlay);
      else if (overlay instanceof Polygon)
        overlays_polygon?.addOverlays(overlay);
      else if (overlay instanceof Custom) overlays_custom?.addOverlays(overlay);
    });
  }
  /** 移除覆盖物 */
  removeOverlay(overlays: Overlay | Overlay[]) {
    const {
      overlays_text,
      overlays_point,
      overlays_line,
      overlays_polygon,
      overlays_custom,
    } = this.getDefaultOverlayGroup() || {};
    [overlays].flat().forEach((overlay) => {
      if (overlay instanceof Text) overlays_text?.removeOverlays(overlay);
      else if (overlay instanceof Point)
        overlays_point?.removeOverlays(overlay);
      else if (overlay instanceof Line) overlays_line?.removeOverlays(overlay);
      else if (overlay instanceof Polygon)
        overlays_polygon?.removeOverlays(overlay);
      else if (overlay instanceof Custom) overlays_custom?.addOverlays(overlay);
    });
  }

  /** 销毁 */
  destroy() {
    super.destroy();
  }
}

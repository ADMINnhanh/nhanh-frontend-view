import _Canvas from "..";
import Layer from "./layer";

export default class LayerGroup {
  /** 图层组名称 */
  name = "默认图层组";
  /** 图层组是否显示 */
  show = true;
  /** 图层组 */
  layers = new Set([new Layer("默认图层")]);

  addLayers(layers: Layer | Layer[]) {
    [layers].flat().forEach((layer) => {
      this.layers.add(layer);
    });
  }
  removeLayers(layers: Layer | Layer[]) {
    [layers].flat().forEach((layer) => {
      this.layers.delete(layer);
    });
  }
  clearLayers() {
    this.layers.clear();
  }
}

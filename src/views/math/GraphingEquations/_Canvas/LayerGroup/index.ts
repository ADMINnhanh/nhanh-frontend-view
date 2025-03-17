import _Canvas from "..";
import Layer from "./layer";

export default class LayerGroup {
  /** 图层群组名称 */
  name;
  /** 图层群组是否显示 */
  show = true;
  /** 图层群组 */
  layers = new Map<string, Layer>();

  /** 主画布 */
  protected mainCanvas?: _Canvas;

  constructor(name: string) {
    this.name = name;
  }

  /** 设置主画布 */
  setMainCanvas(mainCanvas: _Canvas) {
    if (mainCanvas instanceof _Canvas) {
      this.mainCanvas = mainCanvas;
      this.layers.forEach((layer) => layer.setMainCanvas(mainCanvas));
      this.notifyReload();
    }
  }
  /** 通知重新加载 */
  notifyReload() {
    this.mainCanvas?.redrawOnce();
  }

  /** 重新加载 */
  reload() {
    if (!this.show || !this.mainCanvas) return;
    const layers = Array.from(this.layers.values())
      .map((layer) => {
        if (layer.equalsMainCanvas(this.mainCanvas!)) {
          return layer.reload();
        } else {
          this.removeLayer(layer);
        }
      })
      .filter(Boolean) as [number, HTMLCanvasElement][];
  }

  /** 获取图层 */
  getLayer(name: string) {
    return this.layers.get(name);
  }
  /** 添加图层 */
  addLayer(layers: Layer | Layer[]) {
    let isReload = false;
    [layers].flat().forEach((layer) => {
      if (layer instanceof Layer) {
        this.mainCanvas && layer.setMainCanvas(this.mainCanvas);
        this.layers.set(layer.name, layer);
        isReload = true;
      }
    });
    isReload && this.notifyReload();
  }
  /** 删除图层 */
  removeLayer(layers: Layer | Layer[]) {
    let isReload = false;
    [layers].flat().forEach((layer) => {
      if (layer instanceof Layer) {
        this.layers.delete(layer.name);
        isReload = true;
      }
    });
    isReload && this.notifyReload();
  }
  /** 清空图层 */
  clearLayers() {
    if (this.layers.size) {
      this.layers.clear();
      this.notifyReload();
    }
  }
  /** 销毁 图层群组 */
  destroy?: () => void;
}

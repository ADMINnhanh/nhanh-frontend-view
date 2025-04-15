import _Canvas from "..";
import type { Overlay } from "../OverlayGroup";
import Show from "../OverlayGroup/public/show";
import Layer from "./layer";

export default class LayerGroup {
  /** 图层群组名称 */
  name;
  /** 图层群组是否显示 */
  show = new Show();

  /** 图层群组 */
  private layers = new Map<string, Layer>();

  constructor(name: string) {
    this.name = name;
  }

  /** 主画布 */
  private mainCanvas?: _Canvas;
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    this.layers.forEach((layer) => layer.setMainCanvas(mainCanvas));
  }

  /** 通知重新加载 */
  private notifyReload?: (needForceExecute?: boolean) => void;
  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute) => {
          if (needForceExecute) {
            notifyReload();
          } else if (
            this.show.shouldRender(this.mainCanvas?.scale) &&
            this.layers.size
          ) {
            notifyReload();
          }
        }
      : undefined;

    this.layers.forEach((layer) => layer.setNotifyReload(this.notifyReload));
    this.show.notifyReload = this.notifyReload;
  }

  /** 获取图层 */
  getLayer(name: string) {
    return this.layers.get(name);
  }
  /** 添加图层 */
  addLayer(layers: Layer | Layer[]) {
    [layers].flat().forEach((layer) => {
      if (layer instanceof Layer) {
        layer.setNotifyReload(this.notifyReload);
        layer.setMainCanvas(this.mainCanvas);
        this.layers.set(layer.name, layer);
      }
    });
  }
  /** 删除图层 */
  removeLayer(layers: Layer | Layer[]) {
    let isReload = false;
    [layers].flat().forEach((layer) => {
      if (layer instanceof Layer) {
        this.layers.delete(layer.name);
        layer.setNotifyReload();
        layer.setMainCanvas();
        isReload = true;
      }
    });
    isReload && this.notifyReload?.();
  }
  /** 清空图层 */
  clearLayers() {
    if (this.layers.size) {
      this.layers.forEach((layer) => {
        layer.setNotifyReload();
        layer.setMainCanvas();
      });
      this.layers.clear();
      this.notifyReload?.();
    }
  }

  /** 收集图层的 canvas */
  fetchCanvas() {
    if (this.show.shouldRender(this.mainCanvas?.scale) && this.layers.size) {
      const canvasArr: [number, HTMLCanvasElement, [number, Overlay][]][] = [];
      this.layers.forEach((layer) => {
        if (layer.equalsMainCanvas(this.mainCanvas)) {
          const canvas = layer.getCanvas();
          canvas && canvasArr.push(canvas);
        } else {
          this.layers.delete(layer.name);
        }
      });

      return canvasArr;
    }
    return [];
  }
}

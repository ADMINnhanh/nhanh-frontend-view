import _Canvas from "..";
import type { Overlay } from "../OverlayGroup";
import Layer from "./layer";
import Base from "../OverlayGroup/public/base";

type ConstructorOption = ConstructorParameters<typeof Base>[0];

export default class LayerGroup extends Base {
  /** 图层群组 */
  layers = new Map<string, Layer>();

  constructor(option: ConstructorOption) {
    super(option);
  }

  setMainCanvas(mainCanvas?: _Canvas) {
    super.setMainCanvas(mainCanvas);
    this.layers.forEach((layer) => layer.setMainCanvas(mainCanvas));
  }

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
        layer.parent = this;
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
        layer.parent = undefined;
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
        layer.parent = undefined;
      });
      this.layers.clear();
      this.notifyReload?.();
    }
  }

  /** 收集图层的 canvas */
  fetchCanvas() {
    if (this.show.shouldRender(this.mainCanvas?.scale) && this.layers.size) {
      const canvasArr: [
        number,
        HTMLCanvasElement,
        [[number, number], Overlay][]
      ][] = [];
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

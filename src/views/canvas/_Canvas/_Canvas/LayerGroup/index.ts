import _Canvas from "..";
import type { OverlayType } from "../OverlayGroup";
import Layer from "./layer";
import type { EventHandler } from "../public/eventController";
import EventController from "../public/eventController";

type ConstructorOption = ConstructorParameters<typeof EventController>[0];

export default class LayerGroup extends EventController {
  /** 图层群组 */
  layers = new Map<string, Layer>();

  constructor(option: ConstructorOption) {
    super(option);

    /** 无需继承透明度，主画布的透明度另有用途 */
    this.inheritOpacity = false;

    this.setNotifyReload(option.notifyReload);

    this.addEventListener("contextmenu", this.defaultContextmenu);
    this.addEventListener("click", this.defaultClick);
    this.addEventListener("doubleClick", this.defaultDoubleClick);
    this.addEventListener("hover", this.defaultHover);
    this.addEventListener("dragg", this.defaultDragg);
    this.addEventListener("down", this.defaultDown);
  }

  /** 地图的事件触发不需要传递 */
  defaultContextmenu: EventHandler<"contextmenu"> = (event, mouseEvent) =>
    event.stopPropagation();
  defaultClick: EventHandler<"click"> = (event, mouseEvent) =>
    event.stopPropagation();
  defaultDoubleClick: EventHandler<"doubleClick"> = (event, mouseEvent) =>
    event.stopPropagation();
  defaultHover: EventHandler<"hover"> = (event, mouseEvent) =>
    event.stopPropagation();
  defaultDragg: EventHandler<"dragg"> = (event, mouseEvent) =>
    event.stopPropagation();
  defaultDown: EventHandler<"down"> = (event, mouseEvent) =>
    event.stopPropagation();

  setMainCanvas(mainCanvas?: _Canvas) {
    super.setMainCanvas(mainCanvas);
    this.layers.forEach((layer) => {
      layer.setMainCanvas(mainCanvas);
      layer.parent = this;
    });
  }

  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute) => {
          if (needForceExecute) this.isRecalculate = true;

          if (needForceExecute || (this.shouldRender() && this.layers.size)) {
            notifyReload();
          }
        }
      : undefined;

    this.layers.forEach((layer) => layer.setNotifyReload(this.notifyReload));
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
    if (this.shouldRender() && this.layers.size) {
      const canvasArr: [
        number,
        HTMLCanvasElement,
        [[number, number], OverlayType][]
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

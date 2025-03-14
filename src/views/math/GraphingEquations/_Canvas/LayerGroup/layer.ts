import _Canvas from "..";
import OverlayGroup from "../OverlayGroup";
import LayerBaseData from "./layerbasedata";

export default class Layer extends LayerBaseData {
  groups = [new OverlayGroup()];
  // 定义构造函数，接收一个包含配置信息的对象
  constructor(
    name: string,
    config: {
      scales?: [number, number];
      opacity?: number;
      show?: boolean;
      zIndex?: number;
    } = {}
  ) {
    super();
    this.name = name;
    if (config.scales) this.scales = config.scales;
    if (config.opacity) this.opacity = config.opacity;
    if (config.show !== undefined) this.show = config.show;
    if (config.zIndex) this.zIndex = config.zIndex;
  }

  setMainCanvas(mainCanvas: _Canvas) {
    if (mainCanvas instanceof _Canvas) {
      this.mainCanvas = mainCanvas;
      const { width, height } = mainCanvas.rect;
      [this.canvas.width, this.canvas.height] = [width, height];
    }
    this.reload();
  }

  shouldRender() {
    if (!this.show || this.opacity == 0 || !this.mainCanvas) return;
    if (this.scales) {
      const scale = this.mainCanvas.scale;
      const max = Math.max(...this.scales);
      const min = Math.min(...this.scales);
      if (!(scale >= min && scale <= max)) return;
    }
    return true;
  }
  reload() {
    if (this.shouldRender()) {
      const groups = this.groups.filter(
        (group) => group.show && group.overlay.size
      );
      const overlays = groups
        .map((group) => Array.from(group.overlay.values()))
        .flat();
    }
  }
}

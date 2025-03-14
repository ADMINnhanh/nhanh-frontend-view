import _Canvas from "..";

export default class LayerBaseData {
  name?: string;
  scales?: [number, number];
  opacity = 1;
  show = true;
  zIndex = 1;

  protected mainCanvas?: _Canvas;

  protected canvas = document.createElement("canvas");
  protected ctx = this.canvas.getContext("2d")!;

  // 设置图层的 zIndex 值
  setzIndex(zIndex: number) {
    this.zIndex = zIndex;
  }

  // 设置图层的透明度
  setOpacity(opacity: number) {
    if (opacity >= 0 && opacity <= 1) {
      this.opacity = opacity;
    } else {
      console.warn("Opacity value should be between 0 and 1.");
    }
  }

  // 设置图层的缩放范围
  setScales(scales: [number, number]) {
    this.scales = scales;
  }
}

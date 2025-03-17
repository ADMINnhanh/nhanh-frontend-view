import _Canvas from "..";

export default class LayerBaseData {
  name: string;
  scales?: [number, number];
  opacity = 1;
  show = true;
  zIndex = 4;

  protected mainCanvas?: _Canvas;

  protected canvas = document.createElement("canvas");
  protected ctx = this.canvas.getContext("2d")!;

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
    this.name = name;
    if (config.scales) this.scales = config.scales;
    if (config.opacity) this.opacity = config.opacity;
    if (config.show !== undefined) this.show = config.show;
    if (config.zIndex) this.zIndex = config.zIndex;
  }

  /** 设置主画布 */
  setMainCanvas(mainCanvas: _Canvas) {
    if (mainCanvas instanceof _Canvas) {
      this.mainCanvas = mainCanvas;
      const { width, height } = mainCanvas.rect;
      [this.canvas.width, this.canvas.height] = [width, height];
    }
  }
  /** 判断是否是主画布 */
  equalsMainCanvas(mainCanvas: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }
  /** 通知重新加载 */
  notifyReload() {
    this.mainCanvas?.redrawOnce();
  }

  // 设置图层的 zIndex 值
  setzIndex(zIndex: number) {
    if (zIndex != this.zIndex) {
      this.zIndex = zIndex;
      this.notifyReload();
    }
  }

  // 设置图层的透明度
  setOpacity(opacity: number) {
    if (this.opacity != opacity) {
      if (opacity >= 0 && opacity <= 1) {
        this.opacity = opacity;
        this.notifyReload();
      } else {
        console.warn("Opacity value should be between 0 and 1.");
      }
    }
  }

  // 设置图层的缩放范围
  setScales(scales: [number, number]) {
    if (JSON.stringify(this.scales) != JSON.stringify(scales)) {
      this.scales = scales;
      this.notifyReload();
    }
  }
}

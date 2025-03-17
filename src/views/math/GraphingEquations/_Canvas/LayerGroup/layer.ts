import _Canvas from "..";
import OverlayGroup from "../OverlayGroup";
import LayerBaseData from "./layerbasedata";

export default class Layer extends LayerBaseData {
  groups = new Map<string, OverlayGroup>();
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
    super(name, config);
  }

  /** 设置主画布 */
  setMainCanvas(mainCanvas: _Canvas) {
    super.setMainCanvas(mainCanvas);
    this.notifyReload();
  }
  /** 判断是否需要渲染 */
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

  /** 重新渲染 */
  reload() {
    if (this.shouldRender()) {
      // this.groups.forEach((group) => {
      //   if (!group.equalsMainCanvas(this.mainCanvas!)) this.removeLayer(layer);
      // });
      // const groups = Array.from(this.groups.values()).filter(
      //   (group) => group.show && group.overlay.size
      // );
      // const overlays = groups
      //   .map((group) => Array.from(group.overlay.values()))
      //   .flat();
      return [this.zIndex, this.canvas];
    }
  }

  /** 获取覆盖物组 */
  getGroup(name: string) {
    return this.groups.get(name);
  }
  /** 添加覆盖物组 */
  addGroup(groups: OverlayGroup | OverlayGroup[]) {
    let isReload = false;
    [groups].flat().forEach((group) => {
      if (group instanceof OverlayGroup) {
        this.groups.set(group.name, group);
        isReload = true;
      }
    });
    isReload && this.notifyReload();
  }
  /** 移除覆盖物组 */
  removeGroup(groups: OverlayGroup | OverlayGroup[]) {
    let isReload = false;
    [groups].flat().forEach((group) => {
      if (group instanceof OverlayGroup) {
        this.groups.delete(group.name);
        isReload = true;
      }
    });
    isReload && this.notifyReload();
  }
  /** 清空覆盖物 */
  clearGroup() {
    if (this.groups.size) {
      this.groups.clear();
      this.notifyReload();
    }
  }
}

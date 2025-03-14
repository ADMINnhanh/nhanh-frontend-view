export default class OverlayGroup {
  /** 群组名称 */
  name = "默认群组";
  /** 群组是否显示 */
  show = true;
  /** 覆盖物集合 */
  overlay = new Set<number>();

  constructor(name?: string) {
    if (name) this.name = name;
  }

  addOverlays(overlays: any[] | any) {
    [overlays].flat().forEach((overlay) => {
      this.overlay.add(overlay);
    });
  }
  hasOverlay(overlay: any) {
    return this.overlay.has(overlay);
  }
  removeOverlays(overlays: any[] | any) {
    [overlays].flat().forEach((overlay) => {
      this.overlay.delete(overlay);
    });
  }
  clearOverlays() {
    this.overlay.clear();
  }
}

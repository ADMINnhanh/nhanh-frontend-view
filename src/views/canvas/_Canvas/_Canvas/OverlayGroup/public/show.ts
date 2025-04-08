export default class Show {
  private show = true;
  private scales?: [number, number];

  constructor(config?: { show?: boolean; scales?: [number, number] }) {
    if (config?.show !== undefined) this.show = config.show;
    if (config?.scales) this.scales = config.scales;
  }

  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;

  setShow(show: boolean) {
    if (show != this.show) {
      this.show = show;
      this.notifyReload?.(true);
    }
  }
  getShow() {
    return this.show;
  }
  setScales(scales: [number, number]) {
    if (scales != this.scales) {
      this.scales = scales;
      if (this.show) this.notifyReload?.();
    }
  }
  getScales() {
    return this.scales;
  }

  shouldRender(scale?: number, opacity?: number) {
    return (
      this.show &&
      scale !== undefined &&
      (this.scales
        ? scale >= this.scales[0] && scale <= this.scales[1]
        : true) &&
      opacity !== 0
    );
  }
}

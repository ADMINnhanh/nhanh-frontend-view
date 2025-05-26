export default class Show {
  show = true;
  scales?: [number, number];

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
  setScales(scales: [number, number]) {
    if (scales != this.scales) {
      this.scales = scales;
      if (this.show) this.notifyReload?.();
    }
  }

  shouldRender(scale?: number, opacity?: number) {
    if (!this.show || scale === undefined || opacity === 0) return false;

    if (this.scales) {
      const min = Math.min(...this.scales);
      const max = Math.max(...this.scales);
      return scale >= min && scale <= max;
    }
    return true;
  }
}

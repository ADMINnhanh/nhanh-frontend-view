export default class Show {
  private _isVisible = true;
  /** 是否显示 */
  get isVisible() {
    return this._isVisible;
  }
  set isVisible(isVisible: boolean) {
    if (isVisible != this.isVisible) {
      this._isVisible = isVisible;
      this.notifyReload?.(true);
    }
  }

  private _scaleRange?: [number, number];
  /** 显示范围 缩放比例 */
  get scaleRange() {
    return this._scaleRange;
  }
  set scaleRange(scaleRange: [number, number] | undefined) {
    if (scaleRange != this.scaleRange) {
      this._scaleRange = scaleRange;
      if (this.isVisible) this.notifyReload?.();
    }
  }

  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;

  shouldRender(scale?: number, opacity?: number) {
    if (!this.isVisible || scale === undefined || opacity === 0) return false;

    if (this.scaleRange) {
      const min = Math.min(...this.scaleRange);
      const max = Math.max(...this.scaleRange);
      return scale >= min && scale <= max;
    }
    return true;
  }
}

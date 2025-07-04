import { _Utility_GenerateUUID } from "nhanh-pure-function";
import type _Canvas from "..";

abstract class Base<T extends Base<T>> {
  /** 父级 */
  parent?: T;

  /** 名称 */
  name = "";

  /** 自定义扩展数据 */
  extData?: any;

  /** 主画布 */
  mainCanvas?: _Canvas;

  private _isRecalculate = false;
  /** 是否需要重新计算坐标 */
  get isRecalculate(): boolean {
    return (
      (this.parent ? this.parent.isRecalculate : false) || this._isRecalculate
    );
  }
  set isRecalculate(isRecalculate: boolean) {
    this._isRecalculate = isRecalculate;
  }

  /** 是否是同一个主画布 */
  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }
  /** 设置主画布 */
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
  }

  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;
  /** 设置通知重新加载 */
  abstract setNotifyReload(notifyReload?: () => void): void;
}
abstract class Show<T extends Show<T>> extends Base<T> {
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

  /** 是否继承父级透明度 */
  protected inheritOpacity = true;
  private _opacity: undefined | number = undefined;
  /** 透明度 */
  get opacity() {
    return this.inheritOpacity
      ? this._opacity ?? this.parent?.opacity
      : this._opacity;
  }
  set opacity(opacity: number | undefined) {
    if (this._opacity != opacity) {
      if (opacity === undefined || (opacity >= 0 && opacity <= 1)) {
        this._opacity = opacity;
        this.notifyReload?.(false);
      } else {
        console.warn("Opacity value should be between 0 and 1.");
      }
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

  /** 是否需要渲染 */
  shouldRender(): boolean {
    if (!this.isVisible || this.opacity === 0) return false;

    const scale = this.mainCanvas?.scale;
    if (this.scaleRange && scale) {
      const min = Math.min(...this.scaleRange);
      const max = Math.max(...this.scaleRange);
      return scale >= min && scale <= max;
    }
    return true;
  }
}

interface BaseDataOptions {
  /** 父级 */
  parent?: BaseData<any>;

  /** 名称 */
  name?: string;
  /** 自定义扩展数据 */
  extData?: any;
  /** 主画布 */
  mainCanvas?: _Canvas;
  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;

  /** 是否显示 */
  isVisible?: boolean;
  /** 透明度 */
  opacity?: number;
  /** 显示范围 缩放比例 */
  scaleRange?: [number, number];
}
/** 基础数据 公共 */
export default abstract class BaseData<T extends BaseData<T>> extends Show<T> {
  constructor(options: BaseDataOptions) {
    super();
    options.name = options.name || _Utility_GenerateUUID("default-name-");
    Object.assign(this, { ...options });
  }
}

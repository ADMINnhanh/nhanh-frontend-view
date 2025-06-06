import { _GenerateUUID } from "nhanh-pure-function";
import type _Canvas from "..";
import Show from "./show";

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
}

/** 基础数据 公共 */
export default abstract class BaseData<T extends BaseData<T>> {
  /** 父级 */
  parent?: T;

  /** 名称 */
  name = "";

  /** 自定义扩展数据 */
  extData?: any;

  /** 是否显示 */
  readonly show = new Show();

  /** 主画布 */
  protected mainCanvas?: _Canvas;

  private _isRecalculate = false;
  /** 是否需要重新计算坐标 */
  get isRecalculate(): boolean {
    return (
      (this.parent ? this.parent.isRecalculate : true) || this._isRecalculate
    );
  }
  set isRecalculate(isRecalculate: boolean) {
    this._isRecalculate = isRecalculate;
  }

  constructor(options: BaseDataOptions) {
    options.name = options.name || _GenerateUUID("default-name-");
    Object.assign(this, { ...options });
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
  protected notifyReload?: (needForceExecute?: boolean) => void;
  /** 设置通知重新加载 */
  abstract setNotifyReload(notifyReload?: () => void): void;

  /** 是否需要渲染 */
  shouldRender(scale?: number, opacity?: number): boolean {
    scale = scale ?? this.mainCanvas?.scale;
    return (
      (this.parent ? this.parent.shouldRender(scale, opacity) : true) &&
      this.show.shouldRender(scale, opacity)
    );
  }
}

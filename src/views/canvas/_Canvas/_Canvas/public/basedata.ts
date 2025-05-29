interface BaseDataOptions {
  /** 父级 */
  parent?: BaseData<any>;
  /** 是否可以交互 */
  isInteractive?: boolean;
}

/** 基础数据 公共 */
export default class BaseData<T extends BaseData<T>> {
  /** 父级 */
  parent?: T;

  private _isRecalculate = false;
  /** 是否需要重新计算坐标 */
  get isRecalculate(): boolean {
    return (
      (this.parent ? this.parent.isRecalculate : true) && this._isRecalculate
    );
  }
  set isRecalculate(isRecalculate: boolean) {
    this._isRecalculate = isRecalculate;
  }

  constructor(options: BaseDataOptions) {
    Object.assign(this, { ...options });
  }
}

import BaseData from "./basedata";

type EventControllerOptions<T extends EventControllerBasedata<T>> =
  ConstructorParameters<typeof BaseData<EventControllerBasedata<T>>>[0] & {
    /** 是否可以触发交互事件 */
    isInteractive?: boolean;
    /** 是否可以触发悬停事件 */
    isHoverable?: boolean;
    /** 是否可以触发按下事件 */
    isDownable?: boolean;
    /** 是否可以触发右击事件 */
    isContextmenuable?: boolean;
    /** 是否可以触发点击事件 */
    isClickable?: boolean;
    /** 是否可以触发双击事件 */
    isDoubleClickable?: boolean;
    /** 是否可以触发拖动事件 */
    isDraggable?: boolean;
    /** 是否可以触发滚轮滚动事件 */
    isWheelable?: boolean;
  };

export default abstract class EventControllerBasedata<
  T extends EventControllerBasedata<T>
> extends BaseData<T> {
  private _isInteractive = true;
  /** 是否可以触发交互事件 */
  get isInteractive() {
    return this.getPropValue("isInteractive", this._isInteractive, false);
  }
  set isInteractive(value: boolean) {
    this._isInteractive = value;
  }

  private _isHoverable = true;
  /** 是否可以触发悬停事件 */
  get isHoverable() {
    return this.getPropValue("isHoverable", this._isHoverable);
  }
  set isHoverable(value: boolean) {
    this._isHoverable = value;
  }

  private _isDownable = true;
  /** 是否可以触发按下事件 */
  get isDownable() {
    return this.getPropValue("isDownable", this._isDownable);
  }
  set isDownable(value: boolean) {
    this._isDownable = value;
  }

  private _isContextmenuable = true;
  /** 是否可以触发右击事件 */
  get isContextmenuable() {
    return this.getPropValue("isContextmenuable", this._isContextmenuable);
  }
  set isContextmenuable(value: boolean) {
    this._isContextmenuable = value;
  }

  private _isClickable = true;
  /** 是否可以触发点击事件 */
  get isClickable() {
    return this.getPropValue("isClickable", this._isClickable);
  }
  set isClickable(value: boolean) {
    this._isClickable = value;
  }

  private _isDoubleClickable = true;
  /** 是否可以触发双击事件 */
  get isDoubleClickable() {
    return this.getPropValue("isDoubleClickable", this._isDoubleClickable);
  }
  set isDoubleClickable(value: boolean) {
    this._isDoubleClickable = value;
  }

  private _isDraggable = true;
  /** 是否可以触发拖动事件 */
  get isDraggable() {
    return this.getPropValue("isDraggable", this._isDraggable);
  }
  set isDraggable(value: boolean) {
    this._isDraggable = value;
  }

  private _isWheelable = true;
  /** 是否可以触发滚轮滚动事件 */
  get isWheelable() {
    return this.getPropValue("isWheelable", this._isWheelable);
  }
  set isWheelable(value: boolean) {
    this._isWheelable = value;
  }

  /**
   * 通用属性获取方法
   * @param parentProp 父级属性名
   * @param ownValue 当前实例的属性值
   * @param checkInteractive 是否检查交互状态（isInteractive 属性专用）
   */
  private getPropValue(
    parentProp: keyof T,
    ownValue: boolean,
    checkInteractive = true
  ): boolean {
    const parentValue = this.parent
      ? (this.parent[parentProp] as boolean)
      : true;

    return (
      parentValue && ownValue && (checkInteractive ? this.isInteractive : true)
    );
  }

  constructor(options: EventControllerOptions<T>) {
    super(options);
    Object.assign(this, { ...options });
  }
}

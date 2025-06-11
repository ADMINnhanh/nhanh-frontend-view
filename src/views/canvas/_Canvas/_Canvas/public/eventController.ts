import EventControllerBasedata from "./eventControllerBasedata";

class _CanvasEvent<T = undefined> {
  private propagationStopped = false;

  constructor(public readonly data: T) {}

  stopPropagation() {
    this.propagationStopped = true;
  }

  get canPropagate() {
    return !this.propagationStopped;
  }
}
type State = { state: boolean; oldState: boolean };
//#region  1. 添加事件传值映射
type EventMap = {
  wheel: number;
  down: State;
  contextmenu: State;
  click: State;
  doubleClick: State;
  hover: State;
  dragg: { offsetX: number; offsetY: number };
};

export type EventHandler<T extends keyof EventMap> = (
  event: _CanvasEvent<EventMap[T]>,
  mouseEvent?: MouseEvent
) => void;

type EventListeners = {
  [K in keyof EventMap]: Set<EventHandler<K>>;
};

//#region  2. 添加事件通知方法声明
type NotifyType =
  | "notifyWheel"
  | "notifyDown"
  | "notifyDragg"
  | "notifyContextmenu"
  | "notifyClick"
  | "notifyDoubleClick"
  | "notifyHover";

//#region  3. 添加事件是否可用
type InteractionType =
  | "isWheelable"
  | "isDownable"
  | "isDraggable"
  | "isContextmenuable"
  | "isClickable"
  | "isDoubleClickable"
  | "isHoverable";

export default abstract class EventController extends EventControllerBasedata<EventController> {
  //#region  4. 添加事件管理器
  /** 事件管理器 */
  private readonly listeners: EventListeners = {
    wheel: new Set(),
    hover: new Set(),
    down: new Set(),
    contextmenu: new Set(),
    click: new Set(),
    doubleClick: new Set(),
    dragg: new Set(),
  };

  /** 添加事件监听器 */
  addEventListener<T extends keyof EventMap>(
    type: T,
    handler: EventHandler<T>
  ) {
    this.listeners[type].add(handler as EventHandler<keyof EventMap>);
  }
  /** 移除事件监听器 */
  removeEventListener<T extends keyof EventMap>(
    type: T,
    handler: EventHandler<T>
  ) {
    this.listeners[type].delete(handler as EventHandler<keyof EventMap>);
  }

  /** 共享事件状态集合 控制器 */
  private sharedControllers: Partial<
    Record<keyof EventMap, EventController[]>
  > = {};
  /** 注册指定类型的共享事件状态集合 */
  registerControllers(type: keyof EventMap, controllers: EventController[]) {
    this.sharedControllers[type] = controllers;
  }
  /** 检查指定类型下是否存在特定控制器 */
  hasController(type: keyof EventMap, controller: EventController) {
    return this.sharedControllers[type]?.includes(controller);
  }

  // 核心事件触发逻辑
  private trigger<T extends keyof EventMap>(
    type: T,
    data: EventMap[T],
    mouseEvent: MouseEvent | WheelEvent | undefined,
    interaction: InteractionType
  ) {
    if (!this[interaction]) return;

    this.updateStates(type, data);

    const event = new _CanvasEvent(data);
    this.listeners[type].forEach((handler) => handler(event, mouseEvent));

    const notifyHandler = ("notify" +
      (type.charAt(0).toUpperCase() + type.slice(1))) as NotifyType;

    //#region  5. 检查事件值
    const transferData = ["notifyDragg", "notifyWheel"].includes(notifyHandler)
      ? data
      : (data as EventMap[Exclude<keyof EventMap, "dragg" | "wheel">]).state;

    if (event.canPropagate)
      this.parent?.[notifyHandler](transferData as never, mouseEvent as any);

    this.sharedControllers[type]?.forEach(
      (controller) =>
        controller !== this &&
        controller[notifyHandler](transferData as never, mouseEvent as any)
    );
  }
  // 状态更新方法
  private updateStates<T extends keyof EventMap>(type: T, data: EventMap[T]) {
    const _data = data as any;
    switch (type) {
      case "hover":
        this._isHover = _data.state;
        break;
      case "down":
        this._isDown = _data.state;
        break;
      case "contextmenu":
        this._isContextmenu = _data.state;
        break;
      case "click":
        this._isClick = _data.state;
        break;
      case "doubleClick":
        this._isDblClick = _data.state;
        break;
    }
  }

  private _eventDate: Partial<Record<keyof EventMap, string>> = {};
  private _clearEventDate = false;
  private checkEventDate(key: keyof EventMap, value: any) {
    const oldValue = this._eventDate[key];
    const newValue = JSON.stringify(value);

    if (oldValue == newValue) return false;
    this._eventDate[key] = newValue;
    if (!this._clearEventDate) {
      this._clearEventDate = true;
      Promise.resolve().then(() => {
        this._clearEventDate = false;
        this._eventDate = {};
      });
    }
    return true;
  }

  private _isHover = false;
  /** 是否触发悬停 */
  get isHover() {
    return this.isHoverable && this._isHover;
  }
  /**
   * 接收悬停状态变更通知（由外部事件处理器判断后调用）
   * @param state - 当前悬停状态（true:进入元素 / false:离开元素）
   * @param [event] - 可选的关联鼠标事件对象
   */
  notifyHover = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("hover", state) &&
    this.trigger(
      "hover",
      { state, oldState: this.isHover },
      event,
      "isHoverable"
    );

  private _isDown = false;
  /** 是否触发按下 */
  get isDown() {
    return this.isDraggable && this._isDown;
  }
  /**
   * 接收鼠标按下状态变更通知（由外部事件处理器判断后调用）
   * @param state - 当前按下状态（true:按下开始 / false:按下结束）
   * @param [event] - 可选的关联鼠标事件对象
   */
  notifyDown = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("down", state) &&
    this.trigger("down", { state, oldState: this.isDown }, event, "isDownable");

  private _isContextmenu = false;
  /** 是否触发右击 */
  get isContextmenu() {
    return this.isClickable && this._isContextmenu;
  }
  /**
   * 接收右键菜单触发通知（由外部事件处理器判断后调用）
   * @param state - 右键触发状态（true: 右键开始 / false: 右键结束）
   * @param [event] - 可选的关联鼠标事件对象
   */
  notifyContextmenu = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("contextmenu", state) &&
    this.trigger(
      "contextmenu",
      { state, oldState: this.isContextmenu },
      event,
      "isContextmenuable"
    );

  private _isClick = false;
  /** 是否触发点击 */
  get isClick() {
    return this.isClickable && this._isClick;
  }
  /** 点击时间 */
  private clickTimestamp = 0;
  /** 双击判定，两次点击之间的间隔（毫秒） */
  doubleClickInterval = 300;
  /**
   * 接收单击动作通知（由外部事件处理器判断点击动作后调用）
   * @param state - 点击状态（true: 单击开始 / false: 单击结束）
   * @param [event] - 可选的关联鼠标事件对象
   */
  notifyClick = (state: boolean, event?: MouseEvent) => {
    if (!this.checkEventDate("click", state)) return;

    let isDblClick = false;
    if (state) {
      isDblClick = Date.now() - this.clickTimestamp < this.doubleClickInterval;
      this.clickTimestamp = isDblClick ? 0 : Date.now();
    } else {
      this._isDblClick = false;
      this.clickTimestamp = 0;
    }
    if (isDblClick) this.notifyDoubleClick(isDblClick, event);
    else
      this.trigger(
        "click",
        { state, oldState: this.isClick },
        event,
        "isClickable"
      );
  };

  private _isDblClick = false;
  /** 是否触发双击 */
  get isDblClick() {
    return this.isDoubleClickable && this._isDblClick;
  }
  /**
   * 接收双击动作通知（由外部事件处理器判断双击动作后调用）
   * @param state - 双击状态（true: 双击开始 / false: 双击结束）
   * @param [event] - 可选的关联鼠标事件对象
   */
  notifyDoubleClick = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("doubleClick", state) &&
    this.trigger(
      "doubleClick",
      { state, oldState: this.isDblClick },
      event,
      "isDoubleClickable"
    );

  /**
   * 接收拖拽位置更新通知（由外部事件处理器判断拖拽动作后调用）
   * @param position - 当前拖拽位置坐标
   * @param position.offsetX - 相对于元素X轴的偏移量
   * @param position.offsetY - 相对于元素Y轴的偏移量
   * @param [event] - 可选的关联鼠标事件对象
   */
  notifyDragg = (
    position: { offsetX: number; offsetY: number },
    event?: MouseEvent
  ) =>
    this.checkEventDate("dragg", position) &&
    this.trigger("dragg", position, event, "isDraggable");

  /**
   * 接收滚轮滚动通知（由外部事件处理器判断滚轮动作后调用）
   * @param step - 滚轮滚动步长（正数：向上滚动 / 负数：向下滚动）
   * @param [event] - 可选的关联滚轮事件对象
   */
  notifyWheel = (step: number, event?: WheelEvent) =>
    this.checkEventDate("wheel", step) &&
    this.trigger("wheel", step, event, "isWheelable");

  //#region  6. 添加事件通知方法
}

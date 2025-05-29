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
type EventMap = {
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

type NotifyType =
  | "notifyDown"
  | "notifyDragg"
  | "notifyContextmenu"
  | "notifyClick"
  | "notifyDoubleClick"
  | "notifyHover";

type InteractionType =
  | "isDownable"
  | "isDraggable"
  | "isContextmenuable"
  | "isClickable"
  | "isDoubleClickable"
  | "isHoverable";

export default class EventController extends EventControllerBasedata<EventController> {
  /** 事件管理器 */
  private readonly listeners: EventListeners = {
    hover: new Set(),
    down: new Set(),
    contextmenu: new Set(),
    click: new Set(),
    doubleClick: new Set(),
    dragg: new Set(),
  };

  addEventListener<T extends keyof EventMap>(
    type: T,
    handler: EventHandler<T>
  ) {
    this.listeners[type].add(handler as EventHandler<keyof EventMap>);
  }
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
    mouseEvent: MouseEvent | undefined,
    interaction: InteractionType
  ) {
    if (!this[interaction]) return;

    this.updateStates(type, data);

    const event = new _CanvasEvent(data);
    this.listeners[type].forEach((handler) => handler(event, mouseEvent));

    const notifyHandler = ("notify" +
      (type.charAt(0).toUpperCase() + type.slice(1))) as NotifyType;

    const transferData: any =
      notifyHandler == "notifyDragg"
        ? data
        : (data as EventMap[Exclude<keyof EventMap, "dragg">]).state;

    if (event.canPropagate)
      this.parent?.[notifyHandler](transferData, mouseEvent);

    this.sharedControllers[type]?.forEach(
      (controller) =>
        controller !== this &&
        controller[notifyHandler](transferData, mouseEvent)
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

  /** 是否悬停 */
  private _isHover = false;
  get isHover() {
    return this.isHoverable && this._isHover;
  }
  notifyHover = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("hover", state) &&
    this.trigger(
      "hover",
      { state, oldState: this.isHover },
      event,
      "isHoverable"
    );

  /** 是否按下 */
  private _isDown = false;
  get isDown() {
    return this.isDraggable && this._isDown;
  }
  notifyDown = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("down", state) &&
    this.trigger("down", { state, oldState: this.isDown }, event, "isDownable");

  /** 是否右击 */
  private _isContextmenu = false;
  get isContextmenu() {
    return this.isClickable && this._isContextmenu;
  }
  notifyContextmenu = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("contextmenu", state) &&
    this.trigger(
      "contextmenu",
      { state, oldState: this.isContextmenu },
      event,
      "isContextmenuable"
    );

  /** 是否点击 */
  private _isClick = false;
  get isClick() {
    return this.isClickable && this._isClick;
  }
  /** 点击时间 */
  private clickTimestamp = 0;
  /** 双击判定，两次点击之间的间隔（毫秒） */
  doubleClickInterval = 300;
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

  /** 是否双击 */
  private _isDblClick = false;
  get isDblClick() {
    return this.isDoubleClickable && this._isDblClick;
  }
  notifyDoubleClick = (state: boolean, event?: MouseEvent) =>
    this.checkEventDate("doubleClick", state) &&
    this.trigger(
      "doubleClick",
      { state, oldState: this.isDblClick },
      event,
      "isDoubleClickable"
    );

  notifyDragg = (
    position: { offsetX: number; offsetY: number },
    event?: MouseEvent
  ) =>
    this.checkEventDate("dragg", position) &&
    this.trigger("dragg", position, event, "isDraggable");
}

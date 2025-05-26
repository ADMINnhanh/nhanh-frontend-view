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
  dblclick: State;
  hover: State;
  draggable: { offsetX: number; offsetY: number };
};

export type EventHandler<T extends keyof EventMap> = (
  event: _CanvasEvent<EventMap[T]>,
  mouseEvent?: MouseEvent
) => void;

type EventListeners = {
  [K in keyof EventMap]: Set<EventHandler<K>>;
};

type InteractionType =
  | "isDownable"
  | "isDraggable"
  | "isContextmenuable"
  | "isClickable"
  | "isDoubleClickable"
  | "isHoverable";

interface EventControllerOptions {
  /** 父级 */
  parent?: EventController;
  /** 是否可以交互 */
  isInteractive?: boolean;
  /** 是否可以悬停 */
  isHoverable?: boolean;
  /** 是否可以按下 */
  isDownable?: boolean;
  /** 是否可以右击 */
  isContextmenuable?: boolean;
  /** 是否可以点击 */
  isClickable?: boolean;
  /** 是否可以双击 */
  isDoubleClickable?: boolean;
  /** 是否可以拖动 */
  isDraggable?: boolean;
}

export default class EventController {
  /** 父级 */
  parent?: EventController;

  /** 是否可以交互 */
  isInteractive = true;
  /** 是否可以悬停 */
  isHoverable = true;
  /** 是否可以按下 */
  isDownable = true;
  /** 是否可以右击 */
  isContextmenuable = true;
  /** 是否可以点击 */
  isClickable = true;
  /** 是否可以双击 */
  isDoubleClickable = true;
  /** 是否可以拖动 */
  isDraggable = true;

  /** 事件管理器 */
  private readonly listeners: EventListeners = {
    hover: new Set(),
    down: new Set(),
    contextmenu: new Set(),
    click: new Set(),
    dblclick: new Set(),
    draggable: new Set(),
  };

  constructor(options: EventControllerOptions) {
    Object.assign(this, { ...options });
  }

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

  /**
   * 检查特定交互类型是否启用
   * @param type - 要检查的交互类型
   * @returns 如果全局交互启用且特定交互类型也启用，则返回 true
   */
  checkInteraction(type: InteractionType): boolean {
    return (
      (this.parent ? this.parent.checkInteraction(type) : true) &&
      this.isInteractive &&
      this[type]
    );
  }

  /** 共享状态集合 控制器 */
  private sharedControllers: Partial<
    Record<keyof EventMap, EventController[]>
  > = {};
  /** 注册指定类型的事件控制器集合 */
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
    if (!this.checkInteraction(interaction)) return;

    this.updateStates(type, data);

    const event = new _CanvasEvent(data);
    this.listeners[type].forEach((handler) => handler(event, mouseEvent));

    const notifyHandler =
      "notify" + (type.charAt(0).toUpperCase() + type.slice(1));

    /** @ts-ignore */
    if (event.canPropagate) this.parent?.[notifyHandler](data, mouseEvent);
    this.sharedControllers[type]?.forEach(
      (controller) =>
        /** @ts-ignore */
        controller !== this && controller[notifyHandler](data, mouseEvent)
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
      case "dblclick":
        this._isDblClick = _data.state;
        break;
    }
  }

  /** 是否悬停 */
  private _isHover = false;
  get isHover() {
    return this.isHoverable && this._isHover;
  }
  notifyHover = (state: boolean, event?: MouseEvent) =>
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
    this.trigger("down", { state, oldState: this.isDown }, event, "isDownable");

  /** 是否右击 */
  private _isContextmenu = false;
  get isContextmenu() {
    return this.isClickable && this._isContextmenu;
  }
  notifyContextmenu = (state: boolean, event?: MouseEvent) =>
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
    this.trigger(
      "click",
      { state, oldState: this.isClick },
      event,
      "isClickable"
    );

    const oldDblClick = this._isDblClick;
    let newDblClick = this._isDblClick;
    if (state) {
      newDblClick = Date.now() - this.clickTimestamp < this.doubleClickInterval;
      this.clickTimestamp = newDblClick ? 0 : Date.now();
    } else {
      this._isDblClick = false;
      this.clickTimestamp = 0;
    }
    if (newDblClick != oldDblClick) this.notifyDblclick(newDblClick, event);
  };

  /** 是否双击 */
  private _isDblClick = false;
  get isDblClick() {
    return this.isDoubleClickable && this._isDblClick;
  }
  notifyDblclick = (state: boolean, event?: MouseEvent) =>
    this.trigger(
      "dblclick",
      { state, oldState: this.isDblClick },
      event,
      "isDoubleClickable"
    );

  notifyDraggable = (
    position: { offsetX: number; offsetY: number },
    event?: MouseEvent
  ) => this.trigger("draggable", position, event, "isDraggable");
}

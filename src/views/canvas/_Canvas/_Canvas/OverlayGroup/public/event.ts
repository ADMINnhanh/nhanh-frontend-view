class _CanvasEvent<T = undefined> {
  private propagationStopped = false;

  constructor(public readonly data?: T) {}

  stopPropagation() {
    this.propagationStopped = true;
  }

  get canPropagate() {
    return !this.propagationStopped;
  }
}

type EventMap = {
  click: boolean;
  dblclick: boolean;
  hover: boolean;
  draggable: { offsetX: number; offsetY: number };
};

type EventHandler<T extends keyof EventMap> = (
  event: _CanvasEvent<EventMap[T]>,
  mouseEvent: MouseEvent
) => void;

type EventListeners = {
  [K in keyof EventMap]: Set<EventHandler<K>>;
};

type InteractionType =
  | "isDraggable"
  | "isClickable"
  | "isDoubleClickable"
  | "isHoverable";

interface EventControllerOptions {
  parent?: EventController;
  isInteractive?: boolean;
  isHoverable?: boolean;
  isClickable?: boolean;
  isDoubleClickable?: boolean;
  isDraggable?: boolean;
}

export default class EventController {
  /** 父级 */
  parent?: EventController;

  /** 是否可以交互 */
  isInteractive = true;
  /** 是否可以悬停 */
  isHoverable = true;
  /** 是否可以点击 */
  isClickable = true;
  /** 是否可以双击 */
  isDoubleClickable = true;
  /** 是否可以拖动 */
  isDraggable = false;

  /** 事件管理器 */
  private readonly listeners: EventListeners = {
    click: new Set(),
    dblclick: new Set(),
    hover: new Set(),
    draggable: new Set(),
  };

  constructor(options: EventControllerOptions = {}) {
    Object.assign(this, {
      isInteractive: true,
      isHoverable: true,
      isClickable: true,
      isDoubleClickable: true,
      isDraggable: false,
      ...options,
    });
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
  private checkInteraction(type: InteractionType) {
    return this.isInteractive && this[type];
  }

  /** 共享状态集合 控制器 */
  private sharedControllers: Partial<
    Record<keyof EventMap, EventController[]>
  > = {};
  // 共享控制器管理
  shareControllers(type: keyof EventMap, controllers: EventController[]) {
    this.sharedControllers[type] = controllers;
  }

  // 核心事件触发逻辑
  private trigger<T extends keyof EventMap>(
    type: T,
    data: EventMap[T],
    mouseEvent: MouseEvent,
    interaction: InteractionType
  ) {
    if (!this.checkInteraction(interaction)) return;

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

    this.updateStates(type, data);
  }
  // 状态更新方法
  private updateStates<T extends keyof EventMap>(type: T, data: EventMap[T]) {
    switch (type) {
      case "hover":
        this._isHover = data as boolean;
        break;
      case "click":
        this._isClick = data as boolean;
        break;
      case "dblclick":
        this._isDblClick = data as boolean;
        break;
    }
  }

  /** 是否悬停 */
  private _isHover = false;
  get isHover() {
    return this.isHoverable && this._isHover;
  }
  notifyHover = (state: boolean, event: MouseEvent) =>
    this.trigger("hover", state, event, "isHoverable");

  /** 是否点击 */
  private _isClick = false;
  get isClick() {
    return this.isClickable && this._isClick;
  }
  /** 点击时间 */
  private clickTimestamp = 0;
  notifyClick = (state: boolean, event: MouseEvent) => {
    this.trigger("click", state, event, "isClickable");

    const oldDblClick = this._isDblClick;
    if (state) {
      this._isDblClick = Date.now() - this.clickTimestamp < 300;
      this.clickTimestamp = this._isDblClick ? 0 : Date.now();
    } else {
      this._isDblClick = false;
      this.clickTimestamp = 0;
    }
    if (this._isDblClick != oldDblClick)
      this.trigger("dblclick", this._isDblClick, event, "isDoubleClickable");
  };

  /** 是否双击 */
  private _isDblClick = false;
  get isDblClick() {
    return this.isDoubleClickable && this._isDblClick;
  }

  notifyDraggable = (
    position: { offsetX: number; offsetY: number },
    event: MouseEvent
  ) => this.trigger("draggable", position, event, "isDraggable");
}

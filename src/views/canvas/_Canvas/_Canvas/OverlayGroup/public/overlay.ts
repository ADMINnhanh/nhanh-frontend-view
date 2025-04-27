import _Canvas from "../..";
import Show from "./show";
import { type Overlay as OverlayType } from "../index";

type EventListener = {
  [key in "click" | "dblclick" | "hover"]: (state: boolean) => void;
} & {
  [key in "draggable"]: (offsetX: number, offsetY: number) => void;
};
type EventType = keyof EventListener;
type EventListenerSet = {
  [key in EventType]: Set<EventListener[key]>;
};

export default abstract class Overlay<
  T,
  V extends [number, number] | [number, number][]
> {
  static ctx = document.createElement("canvas").getContext("2d")!;

  /** 名称 */
  name?: string;

  /** 是否显示 */
  show = new Show();
  /** 样式 */
  style?: DeepPartial<T> | string;
  /** 坐标轴上的点位 */
  position?: V;
  /** 坐标轴上的值 */
  value?: V;
  /** 层级 */
  zIndex: number;
  /** 动态点位 */
  dynamicPosition?: V;

  /** 是否可交互 */
  isInteractable = true;
  /** 绘制路径 */
  protected path?: Path2D;

  /** 自定义扩展数据 */
  extData?: any;

  constructor(overlay: {
    /** 主画布 */
    mainCanvas?: _Canvas;
    /** 通知重新加载 */
    notifyReload?: (needForceExecute?: boolean) => void;
    /** 是否显示 */
    show?: boolean;
    /** 样式 */
    style?: DeepPartial<T> | string;
    /** 层级 */
    zIndex?: number;
    /** 坐标轴上的点位 */
    position?: V;
    /** 动态点位 */
    dynamicPosition?: V;
    /** 坐标轴上的值 */
    value?: V;
    /** 名称 */
    name?: string;
    /** 是否可拖动 */
    draggable?: boolean;
    /** 是否可交互 */
    isInteractable?: boolean;
    /** 额外偏移 */
    extraOffset?: { x: number; y: number };
  }) {
    this.mainCanvas = overlay.mainCanvas;
    if (overlay.notifyReload) this.setNotifyReload(overlay.notifyReload);
    this.show.setShow(overlay.show ?? true);
    this.style = overlay.style;
    this.zIndex = overlay.zIndex ?? 0;
    this.position = overlay.position;
    this.dynamicPosition = overlay.dynamicPosition;
    this.value = overlay.value;
    this.name = overlay.name;
    this.draggable = overlay.draggable ?? false;
    this.isInteractable = overlay.isInteractable ?? true;
    this.setExtraOffset(overlay.extraOffset);
  }

  /** 值范围 */
  valueScope?: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
  /** 初始化值范围 */
  protected initValueScope() {
    const value = this.value!;
    if (Array.isArray(value[0])) {
      let minX = Infinity,
        maxX = -Infinity,
        minY = Infinity,
        maxY = -Infinity;
      (value as [number, number][]).forEach(([x, y]) => {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      });
      this.valueScope = {
        minX,
        maxX,
        minY,
        maxY,
      };
    } else {
      const [x, y] = value as [number, number];
      this.valueScope = {
        minX: x,
        maxX: x,
        minY: y,
        maxY: y,
      };
    }
  }
  protected abstract updateValueScope(): void;

  /** 额外偏移 */
  protected extraOffset = {
    x: 0,
    y: 0,
    xV: 0,
    yV: 0,
  };
  /** 设置额外偏移 */
  setExtraOffset(extraOffset?: { x: number; y: number }) {
    extraOffset = extraOffset || { x: 0, y: 0 };
    if (!this.valueScope) return Object.assign(this.extraOffset, extraOffset);

    const { xV, yV } = this.mainCanvas!.getAxisValueByPoint(
      extraOffset.x,
      extraOffset.y
    );

    const offsetXV = xV - this.extraOffset.xV;
    const offsetYV = yV - this.extraOffset.yV;

    this.valueScope.minX -= offsetXV;
    this.valueScope.maxX += offsetXV;
    this.valueScope.minY -= offsetYV;
    this.valueScope.maxY += offsetYV;

    Object.assign(this.extraOffset, extraOffset, {
      xV,
      yV,
    });

    this.notifyReload?.();
  }
  /** 点位半径值 */
  protected lastPointRadius = {
    value: 0,
    radius: 0,
  };
  /** 计算点位半径值 */
  protected calculatePointRadiusValue(style?: PointStyleType) {
    if (!this.valueScope) return;
    const radius = style
      ? style.radius + style.width / 2
      : this.lastPointRadius.radius;
    const radiusValue = this.mainCanvas!.getAxisValueByPoint(radius, 0).xV;

    const offset = radiusValue - this.lastPointRadius.value;

    this.valueScope.minX -= offset;
    this.valueScope.maxX += offset;
    this.valueScope.minY -= offset;
    this.valueScope.maxY += offset;

    this.lastPointRadius = { radius, value: radiusValue };
  }

  /** 事件管理器 */
  private eventListener: EventListenerSet = {
    click: new Set(),
    dblclick: new Set(),
    hover: new Set(),
    draggable: new Set(),
  };
  addEventListener<T extends EventType>(type: T, listener: EventListener[T]) {
    this.eventListener[type].add(listener);
  }
  removeEventListener<T extends EventType>(
    type: T,
    listener: EventListener[T]
  ) {
    this.eventListener[type].delete(listener);
  }

  /** 是否点击 */
  isClick = false;
  /** 点击时间 */
  clickTime = 0;
  /** 是否双击 */
  isDblClick = false;
  notifyClick(isClick: boolean, offsetX: number, offsetY: number) {
    if (isClick) {
      this.isDblClick = Date.now() - this.clickTime < 300;
      this.clickTime = Date.now();
    } else {
      this.isDblClick = false;
      this.clickTime = 0;
    }

    if (!this.isInteractable) return;

    this.isClick = isClick;

    if (this.isDblClick) {
      this.eventListener.dblclick.forEach((listener) => listener(true));
    } else if (this.isClick) {
      this.eventListener.click.forEach((listener) => listener(true));
    }
  }
  /** 是否按下 */
  isDown = false;
  notifyDown(isDown: boolean, offsetX: number, offsetY: number) {
    if (!this.isInteractable) return;

    this.isDown = isDown;
  }
  /** 是否悬停 */
  isHover = false;
  /** 鼠标悬停状态改变时重新绘制 */
  redrawOnIsHoverChange = true;
  /** 共享 hover 状态的集合 */
  sharedHoverOverlays?: Overlay<any, any>[];
  notifyHover(isHover: boolean, offsetX: number, offsetY: number) {
    if (!this.isInteractable) return;

    this.isHover = isHover;
    this.eventListener.hover.forEach((listener) => listener(isHover));

    this.redrawOnIsHoverChange && this.notifyReload?.();
  }
  /** 是否可拖动 */
  draggable = false;
  /** 共享 拖动 状态的集合 */
  sharedDraggableOverlays?: Overlay<any, any>[];
  notifyDraggable(offsetX: number, offsetY: number) {
    if (this.isInteractable && this.draggable && this.mainCanvas) {
      this.eventListener.draggable.forEach((listener) =>
        listener(offsetX, offsetY)
      );

      const { percentage, axisConfig } = this.mainCanvas;
      const base = axisConfig.count / axisConfig.min / percentage;
      const x = {
        value: offsetX * base * axisConfig.x,
        position: (offsetX / percentage) * axisConfig.x,
        dynamicPosition: offsetX * axisConfig.x,
      };
      const y = {
        value: offsetY * base * axisConfig.y,
        position: (offsetY / percentage) * axisConfig.y,
        dynamicPosition: offsetY * axisConfig.y,
      };
      return { x, y };
    }
  }

  abstract updateBaseData(): void;
  abstract isPointInPath(x: number, y: number): boolean;
  abstract isPointInStroke(x: number, y: number): boolean;
  isPointInAnywhere(x: number, y: number) {
    return this.isPointInPath(x, y) || this.isPointInStroke(x, y);
  }

  /** 主画布 */
  mainCanvas?: _Canvas;
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    mainCanvas && this.updateBaseData();
  }
  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }

  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;
  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute?: boolean) => {
          if (needForceExecute) {
            notifyReload();
          } else if (this.show.shouldRender(this.mainCanvas?.scale)) {
            notifyReload();
          }
        }
      : undefined;

    this.show.notifyReload = this.notifyReload;
  }

  setStyle(style?: Overlay<T, V>["style"]) {
    this.style = style;
    if (this.dynamicPosition) this.notifyReload?.();
  }
  setZIndex(zIndex: Overlay<T, V>["zIndex"]) {
    this.zIndex = zIndex;
    if (this.dynamicPosition) this.notifyReload?.();
  }
  setPosition(position: Overlay<T, V>["position"]) {
    this.position = position;
    /** 位置改变时，清除值信息 */
    this.value = undefined;
    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseData();
    if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
  }
  setValue(value: Overlay<T, V>["value"]) {
    this.value = value;
    /** 值改变时，清除位置信息 */
    this.position = undefined;
    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseData();
    if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
  }

  /** 获取绘制函数 */
  abstract getDraw():
    | [(ctx: CanvasRenderingContext2D) => void, OverlayType]
    | void;
}

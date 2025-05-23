import _Canvas from "../..";
import { type Overlay as OverlayType } from "../index";
import Base from "./base";
import type { EventHandler } from "../../core/eventController";

type ConstructorOption<T, V> = ConstructorParameters<typeof Base>[0] & {
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
  /** 额外偏移 */
  extraOffset?: { x: number; y: number };
  /** 鼠标移入时是否重新绘制 */
  redrawOnIsHoverChange?: boolean;
};

export default abstract class Overlay<
  T,
  V extends [number, number] | [number, number][]
> extends Base {
  static ctx = document.createElement("canvas").getContext("2d")!;

  /** 样式 */
  style?: DeepPartial<T> | string;
  /** 坐标轴上的点位 */
  position?: V;
  /** 坐标轴上的值 */
  value?: V;
  /** 层级 */
  zIndex = 0;
  /** 动态点位 */
  dynamicPosition?: V;

  /** 绘制路径 */
  protected path?: Path2D;

  constructor(option: ConstructorOption<T, V>) {
    super(option);

    const {
      extraOffset,
      notifyReload,
      style,
      zIndex,
      position,
      dynamicPosition,
      value,
      redrawOnIsHoverChange,
    } = option;

    this.setExtraOffset(extraOffset, false);
    this.setNotifyReload(notifyReload);
    Object.assign(this, {
      style,
      zIndex,
      position,
      dynamicPosition,
      value,
      redrawOnIsHoverChange,
    });

    this.addEventListener("hover", this.defaultHover);
  }

  setMainCanvas(mainCanvas?: _Canvas) {
    super.setMainCanvas(mainCanvas);
    mainCanvas && this.updateBaseData();
  }
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

  /** 静态的值范围 不含偏移、点半径 */
  staticValueScope?: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
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
    this.staticValueScope = { ...this.valueScope };
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
  setExtraOffset(extraOffset?: { x: number; y: number }, reload = true) {
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
    reload && this.notifyReload?.();
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

  // defaultClick: EventHandler<"click"> = (event, mouseEvent) => {

  // };
  /** 鼠标移入时是否重新绘制 */
  redrawOnIsHoverChange = false;
  defaultHover: EventHandler<"hover"> = (event, mouseEvent) => {
    this.redrawOnIsHoverChange && this.notifyReload?.();
  };
  calculateOffset(offsetX: number, offsetY: number) {
    const { percentage, axisConfig } = this.mainCanvas!;
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

  abstract updateBaseData(): void;
  abstract isPointInPath(x: number, y: number): boolean;
  abstract isPointInStroke(x: number, y: number): boolean;
  isPointInAnywhere(x: number, y: number) {
    return this.isPointInPath(x, y) || this.isPointInStroke(x, y);
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

import _Canvas from "../..";
import { type OverlayType } from "../index";
import type { EventHandler } from "../../public/eventController";
import EventController from "../../public/eventController";
import { _Clone } from "nhanh-pure-function";

type ConstructorOption<T, V> = ConstructorParameters<
  typeof EventController
>[0] & {
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
> extends EventController {
  static ctx = document.createElement("canvas").getContext("2d")!;

  private _style?: DeepPartial<T> | string;
  /** 样式 */
  get style() {
    return this._style;
  }
  set style(style: Overlay<T, V>["_style"] | undefined) {
    this._style = style;

    if (this.mainCanvas) {
      if (this.dynamicPosition) this.notifyReload?.();
      this.calculatePointRadiusValue();
    }
  }

  private _position?: V;
  /** 坐标轴上的点位 */
  get position() {
    return this._position;
  }
  set position(position: V | undefined) {
    this._position = position;
    /** 位置改变时，清除值信息 */
    this._value = undefined;

    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseData();
    if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
  }
  private _value?: V;
  /** 坐标轴上的值 */
  get value() {
    return this._value;
  }
  set value(value: V | undefined) {
    this._value = value;
    /** 值改变时，清除位置信息 */
    this._position = undefined;

    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseData();
    if (this.dynamicPosition || prevDynamicStatus) this.notifyReload?.();
  }
  private _zIndex = 0;
  /** 层级 */
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(zIndex: number) {
    if (this._zIndex != zIndex) {
      this._zIndex = zIndex;
      if (this.dynamicPosition) this.notifyReload?.();
    }
  }
  private _dynamicPosition?: V;
  /** 动态点位 */
  get dynamicPosition() {
    return this._dynamicPosition;
  }
  private set dynamicPosition(dynamicPosition: V | undefined) {
    this._dynamicPosition = dynamicPosition;
  }

  /** 绘制路径 */
  protected path?: Path2D;

  constructor(option: ConstructorOption<T, V>) {
    option = { ...option };
    option.isDraggable = option.isDraggable ?? false;
    const { mainCanvas, notifyReload } = option;
    delete option.mainCanvas;
    delete option.notifyReload;

    super(option);

    const {
      extraOffset,
      style,
      zIndex = 0,
      position,
      dynamicPosition,
      value,
      redrawOnIsHoverChange,
    } = option;

    this.setExtraOffset(extraOffset, false);
    this.setNotifyReload(notifyReload);
    Object.assign(this, { mainCanvas, redrawOnIsHoverChange });

    this.internalUpdate({
      style,
      zIndex,
      position,
      dynamicPosition,
      value,
    });

    this.addEventListener("hover", this.defaultHover);
  }

  /** 请勿在实体对象中调用此方法，此方法仅用于类内部无副作用更新 （请勿使用！） */
  internalUpdate(option: {
    position?: V;
    value?: V;
    dynamicPosition?: V;
    zIndex?: number;
    style?: DeepPartial<T> | string;
  }) {
    option = _Clone(option) as any;
    for (const key in option) {
      if (Object.prototype.hasOwnProperty.call(option, key)) {
        this[("_" + key) as never] = option[key as never];
      }
    }
  }

  setMainCanvas(mainCanvas?: _Canvas) {
    super.setMainCanvas(mainCanvas);
    mainCanvas && this.updateBaseData();
  }
  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute?: boolean) => {
          if (needForceExecute) this.isRecalculate = true;
          if (this.mainCanvas?.redrawInNextRenderFrame) return;
          if (needForceExecute || this.isNeedRender) notifyReload();
        }
      : undefined;
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
  /** 更新值范围 */
  protected abstract updateValueScope(): void;
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

    ["extraScope", "extraOffset", "lastPointRadius"].forEach((item) => {
      /** @ts-ignore */
      Object.keys(this[item]).forEach((key) => (this[item][key] = 0));
    });

    this.calculatePointRadiusValue();
    this.setExtraOffset(this.extraOffset, false);
  }

  /** 额外范围 */
  protected extraScope = {
    topV: 0,
    bottomV: 0,
    leftV: 0,
    rightV: 0,
  };
  /** 设置额外范围 */
  setExtraScope(extraScope?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }) {
    extraScope = extraScope || { top: 0, bottom: 0, left: 0, right: 0 };
    if (this.valueScope) {
      const { xV: topV, yV: bottomV } = this.mainCanvas!.getAxisValueByPoint(
        extraScope.top,
        extraScope.bottom
      );
      const { xV: leftV, yV: rightV } = this.mainCanvas!.getAxisValueByPoint(
        extraScope.left,
        extraScope.right
      );

      this.setExtraScopeByValue({ topV, bottomV, leftV, rightV });
    }
  }
  /** 设置额外范围 */
  setExtraScopeByValue(extraScope?: {
    topV: number;
    bottomV: number;
    leftV: number;
    rightV: number;
  }) {
    extraScope = extraScope || { topV: 0, bottomV: 0, leftV: 0, rightV: 0 };
    if (this.valueScope) {
      const { leftV, rightV, topV, bottomV } = extraScope;

      this.valueScope.minX -= leftV - this.extraScope.leftV;
      this.valueScope.maxX += rightV - this.extraScope.rightV;
      this.valueScope.minY -= topV - this.extraScope.topV;
      this.valueScope.maxY += bottomV - this.extraScope.bottomV;

      Object.assign(this.extraScope, extraScope);
    }
  }

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

  /** 获取控制点样式 */
  protected abstract get handlePointStyle(): PointStyleType | undefined;
  /** 点位半径值 */
  private lastPointRadius = {
    value: 0,
    radius: 0,
  };
  /** 计算点位半径值 */
  protected calculatePointRadiusValue(uselastFact = false) {
    if (!this.valueScope) return;
    if (uselastFact && this.lastPointRadius.value == 0) return;

    const radius = (() => {
      if (uselastFact) return this.lastPointRadius.radius;
      const style = this.handlePointStyle;
      if (style) return style.radius + style.width / 2;
    })();
    if (radius === undefined) return;

    const radiusValue = this.mainCanvas!.getAxisValueByPoint(radius, 0).xV;

    const offset = radiusValue - this.lastPointRadius.value;

    this.valueScope.minX -= offset;
    this.valueScope.maxX += offset;
    this.valueScope.minY -= offset;
    this.valueScope.maxY += offset;

    this.lastPointRadius = { radius, value: radiusValue };
  }

  /** 鼠标移入时是否重新绘制 */
  redrawOnIsHoverChange = false;
  /** 默认 hover  事件 */
  defaultHover: EventHandler<"hover"> = (event, mouseEvent) => {
    this.redrawOnIsHoverChange && this.notifyReload?.();
  };
  /** 计算偏移量 */
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

  /** 更新基础数据 */
  abstract updateBaseData(): void;
  /** 判断当前路径中是否包含指定点 */
  abstract isPointInPath(x: number, y: number): boolean;
  /** 检测某点是否在路径的描边所在的区域内 */
  abstract isPointInStroke(x: number, y: number): boolean;
  /** 检测某点是否在当前覆盖物中 */
  isPointInAnywhere(x: number, y: number) {
    return this.isPointInPath(x, y) || this.isPointInStroke(x, y);
  }

  /** 判断是否在可视范围内 */
  protected get isWithinRange() {
    const { mainCanvas, valueScope, extraOffset } = this;
    if (!mainCanvas) return false;

    const { isScaleUpdated, maxMinValue } = mainCanvas;

    if (isScaleUpdated) {
      this.setExtraOffset(extraOffset, false);
      this.calculatePointRadiusValue(true);
    }

    return !(
      maxMinValue.maxXV < valueScope!.minX ||
      maxMinValue.minXV > valueScope!.maxX ||
      maxMinValue.maxYV < valueScope!.minY ||
      maxMinValue.minYV > valueScope!.maxY
    );
  }
  /** 判断是否需要渲染 */
  protected get isNeedRender() {
    if (
      this.mainCanvas &&
      this.shouldRender() &&
      !!this.dynamicPosition &&
      this.isWithinRange
    )
      return true;
    return false;
  }

  /** 设置透明度 */
  setGlobalAlpha(ctx: CanvasRenderingContext2D) {
    const opacity = this.opacity ?? this.parent?.opacity;
    if (opacity !== undefined) ctx.globalAlpha = opacity;
  }

  /** 绘制线基础样式 */
  protected setBaseLineStyle(
    ctx: CanvasRenderingContext2D,
    style: BaseLineStyle
  ) {
    const { width, dash, dashGap, dashOffset, color, color_hover, cap, join } =
      style;

    ctx.setLineDash(dash ? (dashGap as any) : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineCap = cap;
    ctx.lineJoin = join;
    ctx.lineWidth = width;
    ctx.strokeStyle = this.isHover ? color_hover : color;

    return style;
  }

  /** 设置画布样式 */
  protected abstract setOverlayStyles(ctx?: CanvasRenderingContext2D): T;

  /** 获取绘制函数 */
  abstract getDraw():
    | [(ctx: CanvasRenderingContext2D) => void, OverlayType]
    | void;
}

import _Canvas from "../..";
import { type OverlayType } from "../index";
import type { EventHandler } from "../../public/eventController";
import EventController from "../../public/eventController";
import {
  _AreAllArraysValid,
  _Clone,
  _IsSingleArrayValid,
} from "nhanh-pure-function";

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
  /** 偏移 */
  offset?: { x: number; y: number };
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

    if (!this.mainCanvas) return;
    this.updateValueScope();
    this.notifyReload?.();
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

    this.updateBaseData();
    this.notifyReload?.();
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

    this.updateBaseData();
    this.notifyReload?.();
  }
  private _zIndex = 0;
  /** 层级 */
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(zIndex: number) {
    if (this._zIndex != zIndex) {
      this._zIndex = zIndex;
      this.notifyReload?.();
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

  private _offset = { x: 0, y: 0 };
  /** 偏移量 */
  get offset() {
    return this._offset;
  }
  set offset(offset: { x: number; y: number }) {
    this._offset = offset;

    this.calculateOffsetValue();
    this.notifyReload?.();
  }
  /** 带偏移的动态位置 */
  get dynamicPositionWithOffset() {
    const { x, y } = this.offset;
    return this.dynamicPosition?.map((v, i) => {
      if (typeof v === "number") return i == 0 ? v + x : v + y;
      return [v[0] + x, v[1] + y];
    }) as V;
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

    this.setNotifyReload(notifyReload);
    this.mainCanvas = mainCanvas;
    ["redrawOnIsHoverChange"].forEach((key) => {
      /** @ts-ignore */
      if (key in option) this[key] = option[key];
    });

    const value = {};
    [
      "offset",
      "style",
      "zIndex",
      "position",
      "dynamicPosition",
      "value",
    ].forEach((key) => {
      /** @ts-ignore */
      if (key in option) value[key] = option[key];
    });
    this.internalUpdate(value);

    this.addEventListener("hover", this.defaultHover);
  }

  /** 请勿在实体对象中调用此方法，此方法仅用于类内部无副作用更新 （请勿使用！） */
  internalUpdate(
    option: {
      offset?: { x: number; y: number };
      position?: V;
      value?: V;
      dynamicPosition?: V;
      zIndex?: number;
      style?: DeepPartial<T> | string;
    },
    updateValueScope?: boolean
  ) {
    option = _Clone(option) as any;
    for (const key in option) {
      if (Object.prototype.hasOwnProperty.call(option, key)) {
        this[("_" + key) as never] = option[key as never];
      }
    }

    updateValueScope && this.updateValueScope();
  }

  /** 鼠标移入时是否重新绘制 */
  redrawOnIsHoverChange = true;
  /** 默认 hover  事件 */
  defaultHover: EventHandler<"hover"> = (event, mouseEvent) => {
    this.redrawOnIsHoverChange && this.notifyReload?.();
  };

  setMainCanvas(mainCanvas?: _Canvas) {
    super.setMainCanvas(mainCanvas);
    mainCanvas && this.updateBaseData();
  }
  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute?: boolean) => {
          if (needForceExecute) this.isRecalculate = true;

          /** 确认当前覆盖物需要渲染 */
          if (needForceExecute || this.isNeedRender) notifyReload();
          /** 上一帧时当前覆盖物若已渲染，通知原因（清除当前覆盖物） */ else if (
            this.mainCanvas?.currentDrawOverlays.includes(this as any)
          )
            notifyReload();
        }
      : undefined;
  }

  /** 值范围 */
  private _valueScope?: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
  /** 值范围 */
  get valueScope() {
    return this._valueScope;
  }
  private set valueScope(
    value:
      | {
          minX: number;
          maxX: number;
          minY: number;
          maxY: number;
        }
      | undefined
  ) {
    this._valueScope = value;
  }
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
      this.valueScope = { minX, maxX, minY, maxY };
    } else {
      const [x, y] = value as [number, number];
      this.valueScope = { minX: x, maxX: x, minY: y, maxY: y };
    }
    this.calculateStyleRadiusValue(false);
    this.calculateOffsetValue(false);
    this.setFixedExtraScope(true);
    this.setExtraScope(true);
  }

  /** 计算 valueScope 所需要的样式 */
  protected abstract get computedValueScopeStyles(): {
    stroke?: BaseLineStyle;
    point?: PointStyleType;
  };
  /** 描边半径值 */
  private styleRadius = {
    value: 0,
    radius: 0,
  };
  /** 计算样式半径值 */
  protected calculateStyleRadiusValue(uselastFact = true) {
    if (!this.mainCanvas || !this.valueScope) return;

    if (uselastFact) {
      const { radius, value } = this.styleRadius;
      if (radius == 0) return;
      const radiusValue = this.mainCanvas.getAxisValueByPoint(radius, 0).xV;
      const offset = radiusValue - value;

      this.valueScope.minX -= offset;
      this.valueScope.maxX += offset;
      this.valueScope.minY -= offset;
      this.valueScope.maxY += offset;

      this.styleRadius = { radius, value: radiusValue };
    } else {
      const { stroke, point } = this.computedValueScopeStyles;
      const pointRadius = point
        ? point.radius + Math.max(0, point.width / 2)
        : 0;
      const strokeRadius = stroke ? Math.max(0, stroke.width / 2) : 0;

      const radius = Math.max(pointRadius, strokeRadius);

      if (radius == 0) return (this.styleRadius = { radius: 0, value: 0 });

      const radiusValue = this.mainCanvas.getAxisValueByPoint(radius, 0).xV;

      this.valueScope.minX -= radiusValue;
      this.valueScope.maxX += radiusValue;
      this.valueScope.minY -= radiusValue;
      this.valueScope.maxY += radiusValue;

      this.styleRadius = { radius, value: radiusValue };
    }
  }
  /** 额外偏移 */
  private offsetValue = {
    xV: 0,
    yV: 0,
  };
  /** 计算偏移 */
  protected calculateOffsetValue(uselastFact = true) {
    const { mainCanvas, valueScope, offset, offsetValue } = this;
    if (!mainCanvas || !valueScope) return;

    if (uselastFact) {
      const { xV, yV } = mainCanvas.getAxisValueByPoint(offset.x, offset.y);

      const offsetXV = xV - offsetValue.xV;
      const offsetYV = yV - offsetValue.yV;

      valueScope.minX += offsetXV;
      valueScope.maxX += offsetXV;
      valueScope.minY += offsetYV;
      valueScope.maxY += offsetYV;

      this.offsetValue = { xV, yV };
    } else {
      this.offsetValue = { xV: 0, yV: 0 };
      if (offset.x == 0 && offset.y == 0) return;
      this.calculateOffsetValue();
    }
  }
  /** 固定的额外范围 */
  private fixedExtraScope = {
    topV: 0,
    bottomV: 0,
    leftV: 0,
    rightV: 0,
  };
  /** 初始化设置固定的额外范围 */
  protected setFixedExtraScope(init: true): void;
  /** 设置固定的额外范围 */
  protected setFixedExtraScope(fixedExtraScope?: {
    topV: number;
    bottomV: number;
    leftV: number;
    rightV: number;
  }): void;
  /** 设置固定的额外范围 */
  protected setFixedExtraScope(
    value?:
      | {
          topV: number;
          bottomV: number;
          leftV: number;
          rightV: number;
        }
      | true
  ) {
    if (value === true) {
      this.fixedExtraScope = { topV: 0, bottomV: 0, leftV: 0, rightV: 0 };
    } else {
      const fixedExtraScope = value || {
        topV: 0,
        bottomV: 0,
        leftV: 0,
        rightV: 0,
      };
      if (this.valueScope) {
        const { leftV, rightV, topV, bottomV } = fixedExtraScope;

        this.valueScope.minX -= leftV - this.fixedExtraScope.leftV;
        this.valueScope.maxX += rightV - this.fixedExtraScope.rightV;
        this.valueScope.minY -= topV - this.fixedExtraScope.topV;
        this.valueScope.maxY += bottomV - this.fixedExtraScope.bottomV;

        this.fixedExtraScope = fixedExtraScope;
      }
    }
  }
  /** 额外范围 */
  private extraScope = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    topV: 0,
    bottomV: 0,
    leftV: 0,
    rightV: 0,
  };
  /** 初始化设置额外范围 */
  protected setExtraScope(init: true): void;
  /** 更新额外范围 */
  protected setExtraScope(): void;
  /** 设置新的额外范围 */
  protected setExtraScope(extraScope?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }): void;
  /** 设置额外范围 */
  protected setExtraScope(
    value?:
      | {
          top: number;
          bottom: number;
          left: number;
          right: number;
        }
      | true
  ) {
    const { valueScope, mainCanvas, extraScope } = this;
    if (!valueScope || !mainCanvas) return;

    if (value === true) {
      this.extraScope = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        topV: 0,
        bottomV: 0,
        leftV: 0,
        rightV: 0,
      };
    } else if (value) {
      const { left, right, top, bottom } = value;

      const { xV: topV, yV: bottomV } = mainCanvas.getAxisValueByPoint(
        top,
        bottom
      );
      const { xV: leftV, yV: rightV } = mainCanvas.getAxisValueByPoint(
        left,
        right
      );

      valueScope.minX -= leftV - extraScope.leftV;
      valueScope.maxX += rightV - extraScope.rightV;
      valueScope.minY -= topV - extraScope.topV;
      valueScope.maxY += bottomV - extraScope.bottomV;

      this.extraScope = { ...value, topV, bottomV, leftV, rightV };
    } else {
      this.setExtraScope(this.extraScope);
    }
  }

  /** 判断是否在可视范围内 */
  protected get isWithinRange() {
    const { mainCanvas, valueScope } = this;
    if (!mainCanvas) return false;

    const { isScaleUpdated, maxMinValue } = mainCanvas;

    if (isScaleUpdated) {
      this.calculateStyleRadiusValue();
      this.calculateOffsetValue();
      this.setExtraScope();
    }

    return valueScope
      ? !(
          maxMinValue.maxXV < valueScope.minX ||
          maxMinValue.minXV > valueScope.maxX ||
          maxMinValue.maxYV < valueScope.minY ||
          maxMinValue.minYV > valueScope.maxY
        )
      : true;
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

  /** 计算偏移量 */
  protected calculateOffset(offsetX: number, offsetY: number) {
    const { percentage, axisConfig } = this.mainCanvas!;
    const base = axisConfig.count / axisConfig.min / percentage;
    const x = {
      value: offsetX * base * axisConfig.x,
      position: (offsetX / percentage) * axisConfig.x,
      dynamicPosition: offsetX,
    };
    const y = {
      value: offsetY * base * axisConfig.y,
      position: (offsetY / percentage) * axisConfig.y,
      dynamicPosition: offsetY,
    };
    return { x, y };
  }
  /** 处理一维数组的坐标数据 */
  protected handleValuePosition(type: "array1D"): boolean;
  /** 处理二维数组的坐标数据 */
  protected handleValuePosition(type: "array2D", minLen: number): boolean;
  protected handleValuePosition(type: "array1D" | "array2D", minLen?: number) {
    let { value, position, mainCanvas } = this;

    if (!mainCanvas) return false;

    const valid = type === "array1D" ? _IsSingleArrayValid : _AreAllArraysValid;
    const [isValue, isPosition] = [
      valid(value) && (!minLen || value!.length >= minLen),
      valid(position) && (!minLen || position!.length >= minLen),
    ];

    const newV: { value: any; position: any; dynamicPosition: any } = {
      value,
      position,
      dynamicPosition: [],
    };

    if (!isValue && !isPosition) {
      this.internalUpdate({ dynamicPosition: undefined });
      return false;
    } else if (isValue) {
      const v = value as any;
      if (type === "array1D") {
        const loc = mainCanvas.getAxisPointByValue(v[0], v[1], true);
        newV.position = [loc.x, loc.y];
      } else {
        newV.position = [];
        for (let i = 0; i < v.length; i++) {
          const item = v![i];
          const loc = mainCanvas.getAxisPointByValue(item[0], item[1], true);
          newV.position.push([loc.x, loc.y]);
        }
      }
    } else {
      const p = position as any;
      if (type === "array1D") {
        const loc = mainCanvas.getAxisValueByPoint(p[0], p[1], true);
        newV.value = [loc.xV, loc.yV];
      } else {
        newV.value = [];
        for (let i = 0; i < p.length; i++) {
          const item = p![i];
          const loc = mainCanvas.getAxisValueByPoint(item[0], item[1], true);
          newV.value.push([loc.xV, loc.yV]);
        }
      }
    }
    newV.dynamicPosition = mainCanvas.transformPosition(newV.position);
    this.internalUpdate(newV, true);
    return true;
  }

  /** 更新基础数据 */
  protected abstract updateBaseData(): void;
  /** 判断当前路径中是否包含指定点 */
  abstract isPointInPath(x: number, y: number): boolean;
  /** 检测某点是否在路径的描边所在的区域内 */
  abstract isPointInStroke(x: number, y: number): boolean;
  /** 检测某点是否在当前覆盖物中 */
  isPointInAnywhere(x: number, y: number) {
    return this.isPointInPath(x, y) || this.isPointInStroke(x, y);
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

  /** 光标样式 */
  get cursorStyle(): string {
    return this.isDraggable
      ? "_nhanh_canvas_hover_overlay_draggable"
      : "_nhanh_canvas_hover_overlay";
  }

  /** 获取绘制函数 */
  abstract getDraw():
    | [(ctx: CanvasRenderingContext2D) => void, OverlayType]
    | void;
}

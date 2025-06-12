import {
  _AreAllArraysValid,
  _Clone,
  _IsSingleArrayValid,
} from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import Point from "./point";
import type { EventHandler } from "../public/eventController";

type ConstructorOption = ConstructorParameters<
  typeof Overlay<ArcStyleType, [number, number]>
>[0] & {
  /** 是否填充 */
  isFill?: boolean;
  /** 圆弧的半径类型.  默认为 "position" */
  radiusType?: "position" | "value";
  /** 圆弧的半径。必须为正值。 */
  radius: number;
  /** 圆弧的起始点，从 x 轴方向开始计算，以弧度为单位。 */
  startAngle: number;
  /** 圆弧的终点，从 x 轴方向开始计算，以弧度为单位。 */
  endAngle: number;
  /** 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认为 false（顺时针）。 */
  counterclockwise?: boolean;
  /** 是否可显示控制点 */
  isHandlePointsVisible?: boolean;
};

export default class Arc extends Overlay<ArcStyleType, [number, number]> {
  private _isFill = false;
  /** 是否填充 */
  get isFill() {
    return this._isFill;
  }
  set isFill(isFill: boolean) {
    if (this._isFill != isFill) {
      this._isFill = isFill;
      this.notifyReload?.();
    }
  }
  private _radiusType = "position" as "position" | "value";
  /** 圆弧的半径类型.  默认为 "position" */
  get radiusType() {
    return this._radiusType;
  }
  set radiusType(radiusType: "position" | "value") {
    if (this._radiusType != radiusType) {
      this._radiusType = radiusType;
      this.notifyReload?.();
    }
  }

  /** 圆弧的半径。必须为正值。 */
  radius = 0;
  /** 圆弧的起始点，从 x 轴方向开始计算，以弧度为单位。 */
  startAngle = 0;
  /** 圆弧的终点，从 x 轴方向开始计算，以弧度为单位。 */
  endAngle = 0;
  /** 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认为 false（顺时针）。 */
  counterclockwise = false;

  /** 是否可显示控制点 */
  private _isHandlePointsVisible = true;
  /** 是否可显示控制点 */
  get isHandlePointsVisible() {
    return this._isHandlePointsVisible;
  }
  set isHandlePointsVisible(value: boolean) {
    if (this._isHandlePointsVisible !== value) {
      this._isHandlePointsVisible = value;
      if (this.isShowHandlePoint != value) this.notifyReload?.();
    }
  }

  /** 当前是否渲染了控制点 */
  protected isShowHandlePoint = false;

  constructor(option: ConstructorOption) {
    option.redrawOnIsHoverChange = option.redrawOnIsHoverChange ?? true;

    super(option);

    [
      "isFill",
      "radius",
      "radiusType",
      "startAngle",
      "endAngle",
      "counterclockwise",
      "isHandlePointsVisible",
    ].forEach((key) => {
      if (key in option) {
        /** @ts-ignore */
        this[key] = option[key];
      }
    });

    this.addEventListener("click", this.defaultClick);
  }

  /** 默认点击事件 点击后切换控制点显示状态 */
  defaultClick: EventHandler<"click"> = (event, mouseEvent) => {
    if (!this.isHandlePointsVisible) return;

    const { state, oldState } = event.data;

    if (state != oldState) this.notifyReload?.();
  };

  updateValueScope() {
    this.initValueScope();
    this.calculatePointRadiusValue(this.getHandlePointStyle());
    this.setExtraOffset(this.extraOffset, false);
  }

  isPointInPath(x: number, y: number) {
    if (this.isFill && this.path)
      return Overlay.ctx.isPointInPath(this.path, x, y);
    return false;
  }
  isPointInStroke(x: number, y: number) {
    if (this.path && this.mainCanvas) {
      this.setOverlayStyles(Overlay.ctx);
      if (this.isDraggable)
        Overlay.ctx.lineWidth = Math.max(Overlay.ctx.lineWidth, 20);
      return Overlay.ctx.isPointInStroke(this.path, x, y);
    }
    return false;
  }
  isPointInAnywhere(x: number, y: number): boolean {
    const isLine = super.isPointInAnywhere(x, y);

    const isPoint = ((allow) => {
      if (!allow) return false;
      let point_hover = false;
      const { start, end, radius } = this.handlePoints;
      const handlePoints = (
        [start, end, radius].filter(Boolean) as Point[]
      ).sort((a, b) => (a.isHover ? 0 : 1) - (b.isHover ? 0 : 1));
      handlePoints.forEach((point) => {
        if (point_hover) {
          point.isHover && point.notifyHover(false);
        } else {
          point_hover = point.isPointInAnywhere(x, y);
          point_hover != point.isHover && point.notifyHover(point_hover);
        }
      });
      return point_hover;
    })(this.isClick && this.isHandlePointsVisible);

    return isLine || isPoint;
  }

  setOverlayStyles(ctx?: CanvasRenderingContext2D) {
    const isHover = this.isHover;
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].arc;
    let style = {} as PolygonStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.arc || defaultStyle;
    } else if (typeof this.style == "object") {
      const stroke = this.style.stroke
        ? Object.assign({}, defaultStyle.stroke, this.style.stroke as any)
        : defaultStyle.stroke;
      style = Object.assign({}, defaultStyle, this.style as any, { stroke });
    } else {
      style = defaultStyle;
    }

    const { fill, fill_hover } = style;

    if (ctx) {
      this.setBaseLineStyle(ctx, style.stroke);
      ctx.fillStyle = isHover ? fill_hover : fill;
    }
    return style;
  }
  getHandlePointStyle() {
    return this.setOverlayStyles().point;
  }

  handlePoints = {
    start: undefined as Point | undefined,
    end: undefined as Point | undefined,
    radius: undefined as Point | undefined,
  };
  /** 更新控制点 */
  private updateHandlePoints() {
    let {
      mainCanvas,
      value,
      radius,
      radiusType,
      startAngle,
      endAngle,
      dynamicPosition,
    } = this;

    if (!mainCanvas || !dynamicPosition) return;

    const radiusValue =
      radiusType == "value"
        ? radius
        : mainCanvas.getAxisValueByPoint(radius, 0, true).xV;

    const [start, end] = GetArcPoints(
      ...value!,
      radiusValue,
      startAngle,
      endAngle
    );

    const getPoint = () =>
      new Point({
        isDraggable: true,
        mainCanvas: this.mainCanvas,
        notifyReload: () => this.notifyReload?.(),
      });
    const startPoint = this.handlePoints.start || getPoint();
    const endPoint = this.handlePoints.end || getPoint();
    const radiusPoint = this.handlePoints.radius || getPoint();
    startPoint.value = start;
    endPoint.value = end;

    const x = value![0] + radiusValue * 2;
    radiusPoint.value = [x, value![1]];

    this.handlePoints = {
      start: startPoint,
      end: endPoint,
      radius: radiusPoint,
    };
  }

  updateBaseData() {
    if (!this.mainCanvas) return;
    let { value, position } = this;
    const [isValue, isPosition] = [
      _IsSingleArrayValid(value),
      _IsSingleArrayValid(position),
    ];

    if (!isValue && !isPosition) {
      return this.internalUpdate({
        dynamicPosition: undefined,
      });
    } else if (isValue) {
      const loc = this.mainCanvas.getAxisPointByValue(
        value![0],
        value![1],
        true
      );
      position = [loc.x, loc.y];
    } else {
      const val = this.mainCanvas.getAxisValueByPoint(
        position![0],
        position![1],
        true
      );
      value = [val.xV, val.yV];
    }

    const dynamicPosition = this.mainCanvas.transformPosition([position!])[0];

    this.internalUpdate({
      value,
      position,
      dynamicPosition,
    });

    this.updateHandlePoints();

    this.updateValueScope();
  }

  calculateRadius() {
    const { mainCanvas, radius, radiusType } = this;
    if (!mainCanvas || radius <= 0) return 0;

    if (radiusType == "position") return radius * mainCanvas.percentage;
    return mainCanvas.getAxisPointByValue(radius, 0).x;
  }
  draw(ctx: CanvasRenderingContext2D) {
    const {
      dynamicPosition,
      mainCanvas,
      extraOffset,
      radius,
      startAngle,
      endAngle,
      counterclockwise,
      isFill,
    } = this;
    if (!mainCanvas || radius <= 0) return;
    this.setGlobalAlpha(ctx);

    const style = this.setOverlayStyles(ctx);

    const x = dynamicPosition![0] + extraOffset.x;
    const y = dynamicPosition![1] + extraOffset.y;

    ctx.beginPath();

    this.path = new Path2D();
    this.path.arc(
      x,
      y,
      this.calculateRadius(),
      startAngle,
      endAngle,
      counterclockwise
    );
    ctx.stroke(this.path);
    isFill && ctx.fill(this.path);

    // 绘制 控制点
    this.isShowHandlePoint = this.isClick && this.isHandlePointsVisible;

    if (this.isShowHandlePoint) {
      Object.values(this.handlePoints).forEach((point) => {
        if (point) {
          point.internalUpdate({ style: style.point });
          point.draw(ctx);
        }
      });
    }
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { dynamicPosition, position, valueScope, mainCanvas } = this;
    if (!mainCanvas) return;

    const { maxMinValue, isScaleUpdated } = mainCanvas;
    const isShow = this.shouldRender();
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      if (isScaleUpdated) {
        this.setExtraOffset(this.extraOffset, false);
        this.calculatePointRadiusValue();
      }

      const pointNotWithinRange =
        maxMinValue.maxXV < valueScope!.minX ||
        maxMinValue.minXV > valueScope!.maxX ||
        maxMinValue.maxYV < valueScope!.minY ||
        maxMinValue.minYV > valueScope!.maxY;
      if (pointNotWithinRange) return;

      if (this.isRecalculate) {
        this.internalUpdate({
          dynamicPosition: mainCanvas.transformPosition([position!])[0],
        });
      }
      return [this.draw, this];
    }
  }
}

/**
 * 计算圆弧的起点和终点坐标
 * @param x 圆心X坐标
 * @param y 圆心Y坐标
 * @param radius 圆弧半径
 * @param startAngle 起始角度（弧度制，0表示X轴正方向）
 * @param endAngle 结束角度（弧度制）
 * @returns [起点坐标, 终点坐标]
 */
function GetArcPoints(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
): [[number, number], [number, number]] {
  // 计算起点坐标并保留两位小数
  const startX = parseFloat((x + radius * Math.cos(startAngle)).toFixed(2));
  const startY = parseFloat((y + radius * Math.sin(startAngle)).toFixed(2));

  // 计算终点坐标并保留两位小数
  const endX = parseFloat((x + radius * Math.cos(endAngle)).toFixed(2));
  const endY = parseFloat((y + radius * Math.sin(endAngle)).toFixed(2));

  return [
    [startX, startY],
    [endX, endY],
  ];
}

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
      this.updateRadius();
    }
  }

  /** 动态圆弧半径 */
  private dynamicRadius = 0;
  private _radius = 0;
  /** 圆弧的半径。必须为正值。 */
  get radius() {
    return this._radius;
  }
  set radius(radius: number) {
    if (this._radius != radius) {
      this._radius = radius;
      this.updateRadius();
    }
  }
  private _startAngle = 0;
  /** 圆弧的起始点，从 x 轴方向开始计算，以弧度为单位。 */
  get startAngle() {
    return this._startAngle;
  }
  set startAngle(startAngle: number) {
    if (this._startAngle != startAngle) {
      this._startAngle = startAngle;
      this.updateDynamicRadius();
      this.updateHandlePoints();
      this.notifyReload?.();
    }
  }
  private _endAngle = 0;
  /** 圆弧的终点，从 x 轴方向开始计算，以弧度为单位。 */
  get endAngle() {
    return this._endAngle;
  }
  set endAngle(endAngle: number) {
    if (this._endAngle != endAngle) {
      this._endAngle = endAngle;
      this.updateDynamicRadius();
      this.updateHandlePoints();
      this.notifyReload?.();
    }
  }
  private _counterclockwise = false;
  /** 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认为 false（顺时针）。 */
  get counterclockwise() {
    return this._counterclockwise;
  }
  set counterclockwise(counterclockwise: boolean) {
    if (this._counterclockwise != counterclockwise) {
      this._counterclockwise = counterclockwise;
      this.updateDynamicRadius();
      this.updateHandlePoints();
      this.notifyReload?.();
    }
  }

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
        this["_" + key] = option[key];
      }
    });

    this.addEventListener("click", this.defaultClick);
    this.addEventListener("dragg", this.defaultDragg);
  }

  /** 默认点击事件 点击后切换控制点显示状态 */
  defaultClick: EventHandler<"click"> = (event, mouseEvent) => {
    if (!this.isHandlePointsVisible) return;

    const { state, oldState } = event.data;

    if (state != oldState) this.notifyReload?.();
  };
  /** 处理拖动状态变化 */
  defaultDragg: EventHandler<"dragg"> = (event, mouseEvent) => {
    if (!this.mainCanvas) return;

    const { start, end, radius } = this.handlePoints;

    /** 移动整体 */
    const moveTheWhole = () => {
      const { offsetX, offsetY } = event.data;
      const { x, y } = this.calculateOffset(offsetX, offsetY)!;

      const points = [this, start, end, radius] as (Point | Arc)[];
      points.forEach((item) => {
        item.internalUpdate({
          value: [item.value![0] + x.value, item.value![1] + y.value],
          position: [
            item.position![0] + x.position,
            item.position![1] + y.position,
          ],
          dynamicPosition: [
            item.dynamicPosition![0] + x.dynamicPosition,
            item.dynamicPosition![1] + y.dynamicPosition,
          ],
        });
      });
      this.notifyReload?.();
    };
    if (this.isHandlePointsVisible) {
      const { start, end, radius } = this.handlePoints;
      const handlePoint = (
        [start, end, radius].filter(Boolean) as Point[]
      ).find((point) => point.isHover);

      if (handlePoint) {
        const offsetX = event.data.offsetX;
        if (handlePoint == start) {
          this.startAngle =
            (this.startAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
        } else if (handlePoint == end) {
          this.endAngle =
            (this.endAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
        } else if (handlePoint == radius) {
          let v = 0;
          if (this.radiusType == "position") {
            v = offsetX / 2;
          } else {
            v = this.mainCanvas.getAxisValueByPoint(offsetX, 0).xV / 2;
          }
          if (this.radius + v > 0) this.radius += v;
        }
      } else moveTheWhole();
    } else moveTheWhole();

    this.updateValueScope();
  };

  updateValueScope() {
    this.initValueScope();
    this.updateExtraScope();
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
  get handlePointStyle() {
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

    const data = this[radiusType]!;
    const [start, end] = GetArcPoints(...data, radius, startAngle, endAngle);

    const getPoint = () =>
      new Point({
        isDraggable: true,
        mainCanvas: this.mainCanvas,
        notifyReload: () => this.notifyReload?.(),
      });
    const startPoint = this.handlePoints.start || getPoint();
    const endPoint = this.handlePoints.end || getPoint();
    const radiusPoint = this.handlePoints.radius || getPoint();
    startPoint[radiusType] = start;
    endPoint[radiusType] = end;

    const x = data![0] + radius * 2;
    radiusPoint[radiusType] = [x, data![1]];

    this.handlePoints = {
      start: startPoint,
      end: endPoint,
      radius: radiusPoint,
    };
  }
  /** 更新半径 */
  private updateRadius() {
    if (this.mainCanvas) {
      this.updateDynamicRadius();
      this.updateHandlePoints();
      this.updateExtraScope();
    }
  }
  /** 更新额外范围 */
  private updateExtraScope() {
    const { mainCanvas, radius, radiusType } = this;
    if (mainCanvas) {
      if (radius == 0) this.setExtraScopeByValue();
      else if (radiusType == "position") {
        const xV = mainCanvas.getAxisValueByPoint(radius, 0).xV;
        this.setExtraScopeByValue({
          topV: xV,
          bottomV: xV,
          leftV: xV,
          rightV: xV * 2,
        });
      } else if (radiusType == "value") {
        this.setExtraScopeByValue({
          topV: radius,
          bottomV: radius,
          leftV: radius,
          rightV: radius * 2,
        });
      }
    }
  }

  /** 更新动态半径 */
  updateDynamicRadius() {
    const { mainCanvas, radius, radiusType } = this;
    if (!mainCanvas || radius <= 0) {
      this.dynamicRadius = 0;
    } else {
      if (radiusType == "position") {
        this.dynamicRadius = radius * mainCanvas.percentage;
      } else {
        this.dynamicRadius = mainCanvas.getAxisPointByValue(radius, 0).x;
      }
    }
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

    this.updateDynamicRadius();

    this.updateHandlePoints();

    this.updateValueScope();
  }

  /** 绘制从中心点到半径控制点的虚线 */
  private drawCenterToRadiusLine(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    stroke: BaseLineStyle
  ) {
    this.setBaseLineStyle(ctx, { ...stroke, dash: true });
    ctx.beginPath();
    ctx.moveTo(x, y);
    const radiusPoint = this.handlePoints.radius!.dynamicPosition!;
    ctx.lineTo(radiusPoint[0], radiusPoint[1]);
    ctx.stroke();
  }

  draw(ctx: CanvasRenderingContext2D) {
    const {
      dynamicPosition,
      mainCanvas,
      extraOffset,
      dynamicRadius,
      startAngle,
      endAngle,
      counterclockwise,
      isFill,
    } = this;
    if (!mainCanvas || dynamicRadius <= 0) return;
    this.setGlobalAlpha(ctx);

    const style = this.setOverlayStyles(ctx);

    const x = dynamicPosition![0] + extraOffset.x;
    const y = dynamicPosition![1] + extraOffset.y;

    ctx.beginPath();

    this.path = new Path2D();
    this.path.arc(x, y, dynamicRadius, startAngle, endAngle, counterclockwise);
    ctx.stroke(this.path);
    isFill && ctx.fill(this.path);

    // 绘制 控制点
    this.isShowHandlePoint = this.isClick && this.isHandlePointsVisible;

    if (this.isShowHandlePoint) {
      this.drawCenterToRadiusLine(ctx, x, y, style.stroke);

      Object.values(this.handlePoints).forEach((point) => {
        if (point) {
          point.internalUpdate({ style: style.point });
          point.draw(ctx);
        }
      });
    }
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      if (this.isRecalculate) {
        const { position, mainCanvas } = this;
        this.updateDynamicRadius();
        this.internalUpdate({
          dynamicPosition: mainCanvas!.transformPosition([position!])[0],
        });
        this.updateHandlePoints();
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
  const startX = x + radius * Math.cos(startAngle);
  const startY = y + radius * Math.sin(startAngle);

  // 计算终点坐标并保留两位小数
  const endX = x + radius * Math.cos(endAngle);
  const endY = y + radius * Math.sin(endAngle);

  return [
    [startX, startY],
    [endX, endY],
  ];
}

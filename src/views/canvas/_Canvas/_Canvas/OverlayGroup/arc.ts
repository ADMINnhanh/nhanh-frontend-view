import {
  _Utility_MergeObjects,
  _Valid_Is2DNumberArray,
  _Valid_IsNumberArray,
} from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import Point from "./point";
import type { EventHandler } from "../public/eventController";
import { _Number } from "../public/tools";

type ConstructorOption = ConstructorParameters<
  typeof Overlay<ArcStyleType, [number, number]>
>[0] & {
  /** 是否填充 */
  isFill?: boolean;
  /** 是否闭合 */
  isClosed?: boolean;
  /** 闭合时是否经过中心点 */
  isClosedThroughCenter?: boolean;
  /** 圆弧的半径。必须为正值。 */
  radiusValue?: number;
  /** 圆弧的半径。必须为正值。 */
  radiusPosition?: number;
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

  protected _isClosed = false;
  /** 是否闭合 */
  get isClosed() {
    return this._isClosed;
  }
  set isClosed(isClosed: boolean) {
    if (this._isClosed != isClosed) {
      this._isClosed = isClosed;
      this.notifyReload?.();
    }
  }
  private _isClosedThroughCenter = false;
  /** 闭合时是否经过中心点 */
  get isClosedThroughCenter() {
    return this._isClosedThroughCenter;
  }
  set isClosedThroughCenter(isClosedThroughCenter: boolean) {
    if (this._isClosedThroughCenter != isClosedThroughCenter) {
      this._isClosedThroughCenter = isClosedThroughCenter;
      this.notifyReload?.();
    }
  }

  private _radiusValue = 0;
  /** 圆弧的半径。必须为正值。 */
  get radiusValue() {
    return this._radiusValue;
  }
  set radiusValue(radius: number) {
    if (this._radiusValue != radius) {
      this._radiusValue = radius;
      this._radiusPosition = 0;

      this.updateBaseData();
    }
  }
  private _radiusPosition = 0;
  /** 圆弧的半径。必须为正值。 */
  get radiusPosition() {
    return this._radiusPosition;
  }
  set radiusPosition(radius: number) {
    if (this._radiusPosition != radius) {
      this._radiusPosition = radius;
      this._radiusValue = 0;

      this.updateBaseData();
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
      this.notifyReload?.();
    }
  }

  /** 当前是否渲染了控制点 */
  private isShowHandlePoint = false;
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
      this.updateHandlePoints();
    }
  }

  /** 偏移量 */
  get offset() {
    return super.offset;
  }
  set offset(offset: { x: number; y: number }) {
    super.offset = offset;

    let { isHandlePointsVisible, handlePointsArr } = this;
    if (isHandlePointsVisible) {
      handlePointsArr.forEach((p) => p.internalUpdate({ offset }));
    }
  }

  constructor(option: ConstructorOption) {
    super(option);

    [
      "isFill",
      "isClosed",
      "isClosedThroughCenter",
      "radiusValue",
      "radiusPosition",
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

    /** 移动整体 */
    const moveTheWhole = () => {
      const { offsetX, offsetY } = event.data;
      const { x, y } = this.calculateOffset(offsetX, offsetY)!;

      const points = (this.handlePointsArr as (Point | Arc)[]).concat(this);

      points.forEach((item) => {
        item.internalUpdate(
          {
            value: [
              _Number.add(item.value![0], x.value),
              _Number.add(item.value![1], y.value),
            ],
            position: [
              _Number.add(item.position![0], x.position),
              _Number.add(item.position![1], y.position),
            ],
            dynamicPosition: [
              _Number.add(item.dynamicPosition![0], x.dynamicPosition),
              _Number.add(item.dynamicPosition![1], y.dynamicPosition),
            ],
          },
          true
        );
      });
      this.notifyReload?.();
    };
    if (this.isHandlePointsVisible) {
      const { start, end, radius } = this.handlePoints;
      const handlePoint = this.handlePointsArr.find((point) => point.isHover);

      if (handlePoint) {
        const offsetX = event.data.offsetX;
        if (handlePoint == start) {
          this.startAngle =
            (this.startAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
        } else if (handlePoint == end) {
          this.endAngle =
            (this.endAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
        } else if (handlePoint == radius) {
          const v = offsetX / 2 / this.mainCanvas.percentage;
          if (this.radiusPosition + v > 0) this.radiusPosition += v;
        }
      } else moveTheWhole();
    } else moveTheWhole();
  };

  protected updateValueScope() {
    const { mainCanvas, radiusValue } = this;
    if (mainCanvas) {
      this.initValueScope();
      this.setFixedExtraScope({
        topV: radiusValue,
        bottomV: radiusValue,
        leftV: radiusValue,
        rightV: radiusValue * 2,
      });
    }
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
    const isPoint = (allow: boolean) => {
      if (!allow) return false;
      let point_hover = false;

      this.handlePointsArr.forEach((point) => {
        if (point_hover) {
          point.isHover && point.notifyHover(false);
        } else {
          point_hover = point.isPointInAnywhere(x, y);
          point_hover != point.isHover && point.notifyHover(point_hover);
        }
      });
      return point_hover;
    };

    return (
      isPoint(this.isClick && this.isShowHandlePoint) ||
      super.isPointInAnywhere(x, y)
    );
  }

  get cursorStyle() {
    const point = this.handlePointsArr.some((point) => point?.isHover);
    return this.isInteractive
      ? this.isDraggable
        ? "_nhanh_canvas_hover_overlay_draggable" + (point ? "_ew" : "")
        : "_nhanh_canvas_hover_overlay"
      : undefined;
  }
  protected setOverlayStyles(ctx?: CanvasRenderingContext2D) {
    const isHover = this.isHover;
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].arc;
    let style = {} as PolygonStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.arc || defaultStyle;
    } else if (typeof this.style == "object") {
      style = _Utility_MergeObjects(
        JSON.parse(JSON.stringify(defaultStyle)),
        this.style
      );
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
  protected get computedValueScopeStyles() {
    return this.setOverlayStyles();
  }

  /** 控制点 */
  private handlePoints = {
    start: undefined as Point | undefined,
    end: undefined as Point | undefined,
    radius: undefined as Point | undefined,
  };
  /** 控制点数组 */
  private get handlePointsArr() {
    const radiusPoint = this.handlePoints.radius;

    return (Object.values(this.handlePoints).filter(Boolean) as Point[]).sort(
      (a, b) =>
        (a.isHover || a == radiusPoint ? 0 : 1) -
        (b.isHover || b == radiusPoint ? 0 : 1)
    );
  }
  /** 更新控制点 */
  private updateHandlePoints() {
    let {
      mainCanvas,
      value,
      radiusValue,
      startAngle,
      endAngle,
      dynamicPosition,
      isHandlePointsVisible,
      offset,
    } = this;

    if (!mainCanvas || !dynamicPosition || !isHandlePointsVisible) return;

    const [start, end] = _GetArcPoints(
      ...value!,
      radiusValue,
      startAngle,
      endAngle,
      mainCanvas.axisConfig.x,
      mainCanvas.axisConfig.y
    );

    const getPoint = (name: string) =>
      new Point({
        name,
        offset,
        isDraggable: true,
        mainCanvas: this.mainCanvas,
        notifyReload: () => this.notifyReload?.(),
      });
    const startPoint = this.handlePoints.start || getPoint("start");
    const endPoint = this.handlePoints.end || getPoint("end");
    const radiusPoint = this.handlePoints.radius || getPoint("radius");
    startPoint.value = start;
    endPoint.value = end;

    const x = value![0] + radiusValue * 2 * mainCanvas.axisConfig.x;
    radiusPoint.value = [x, value![1]];

    this.handlePoints = {
      start: startPoint,
      end: endPoint,
      radius: radiusPoint,
    };
  }

  protected updateBaseData() {
    if (!this.mainCanvas) return;

    if (this.radiusValue)
      this._radiusPosition = this.mainCanvas.getAxisPointByValue(
        this.radiusValue,
        0,
        true
      ).x;
    else
      this._radiusValue = this.mainCanvas.getAxisValueByPoint(
        this.radiusPosition,
        0,
        true
      ).xV;

    if (!this.handleValuePosition("array1D")) return;

    this.updateHandlePoints();
  }

  /** 绘制辅助虚线 */
  private drawGuideLine(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    style: ArcStyleType
  ) {
    this.setBaseLineStyle(ctx, { ...style.stroke, dash: !style.stroke.dash });

    const {
      radiusPosition,
      startAngle,
      endAngle,
      counterclockwise,
      mainCanvas,
    } = this;
    ctx.beginPath();
    ctx.arc(
      x,
      y,
      radiusPosition * mainCanvas!.percentage,
      endAngle,
      startAngle,
      counterclockwise
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y);
    const radiusPoint = this.handlePoints.radius!.finalDynamicPosition;
    ctx.lineTo(radiusPoint[0], radiusPoint[1]);
    ctx.stroke();

    if (this.isClosed && this.isClosedThroughCenter) return;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.beginPath();
    ctx.arc(x, y, style.point.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  draw(ctx: CanvasRenderingContext2D) {
    const {
      finalDynamicPosition,
      mainCanvas,
      startAngle,
      endAngle,
      counterclockwise,
      isFill,
      isClosed,
      isClosedThroughCenter,
      radiusPosition,
    } = this;
    if (!mainCanvas || radiusPosition <= 0) return;
    this.setGlobalAlpha(ctx);

    const style = this.setOverlayStyles(ctx);

    const [x, y] = finalDynamicPosition;

    ctx.beginPath();
    this.path = new Path2D();
    this.path.arc(
      x,
      y,
      radiusPosition * mainCanvas.percentage,
      startAngle,
      endAngle,
      counterclockwise
    );
    if (isClosed) {
      this.path.lineTo(x, y);
      isClosedThroughCenter && this.path.closePath();
    }
    ctx.stroke(this.path);
    isFill && ctx.fill(this.path);

    // 绘制 控制点
    this.isShowHandlePoint = this.isClick && this.isHandlePointsVisible;

    if (this.isShowHandlePoint) {
      this.drawGuideLine(ctx, x, y, style);

      this.handlePointsArr.forEach((point) => {
        point.internalUpdate({ style: style.point });
        point.getDraw()?.[0].call(point, ctx);
      });
    }
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      if (this.isRecalculate) {
        const { position, mainCanvas } = this;

        const dynamicPosition = this.dynamicPosition!;
        const newDynamicPosition = mainCanvas!.transformPosition(position!);
        this.internalUpdate({ dynamicPosition: newDynamicPosition });
        if (this.isHandlePointsVisible) {
          if (mainCanvas?.isScaleUpdated) {
            this.updateHandlePoints();
          } else {
            const offsetx = newDynamicPosition[0] - dynamicPosition[0];
            const offsety = newDynamicPosition[1] - dynamicPosition[1];
            this.handlePointsArr.forEach((point) => {
              const x = point.dynamicPosition![0] + offsetx;
              const y = point.dynamicPosition![1] + offsety;
              point.internalUpdate({ dynamicPosition: [x, y] });
            });
          }
        }
      }
      return [this.draw, this];
    }
  }
}

/**
 * 计算圆弧的起点和终点坐标（支持坐标轴方向调整）
 * @param x 圆心X坐标
 * @param y 圆心Y坐标
 * @param radius 圆弧半径
 * @param startAngle 起始角度（弧度制，0表示X轴正方向）
 * @param endAngle 结束角度（弧度制）
 * @param axisX X轴方向（1=正方向向右，-1=正方向向左）
 * @param axisY Y轴方向（1=正方向向上，-1=正方向向下）
 * @returns [起点坐标, 终点坐标]
 */
function _GetArcPoints(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  axisX: number = 1,
  axisY: number = 1
): [[number, number], [number, number]] {
  // 计算起点坐标（考虑坐标轴方向）
  const startX = x + radius * Math.cos(startAngle) * axisX;
  const startY = y + radius * Math.sin(startAngle) * axisY;

  // 计算终点坐标（考虑坐标轴方向）
  const endX = x + radius * Math.cos(endAngle) * axisX;
  const endY = y + radius * Math.sin(endAngle) * axisY;

  return [
    [startX, startY],
    [endX, endY],
  ];
}

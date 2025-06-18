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
  typeof Overlay<ArcToStyleType, [number, number][]>
>[0] & {
  /** 是否可显示控制点 */
  isHandlePointsVisible?: boolean;
};

export default class ArcTo extends Overlay<ArcToStyleType, [number, number][]> {
  /** 控制点 */
  private handlePoints?: { radius: Point; other: Point[] } = undefined;
  /** 控制点数组 */
  private get handlePointsArr() {
    if (this.handlePoints) {
      const { radius, other } = this.handlePoints;

      return ([radius, ...other].filter(Boolean) as Point[]).sort(
        (a, b) =>
          (a.isHover || a == radius ? 0 : 1) -
          (b.isHover || b == radius ? 0 : 1)
      );
    }
    return [];
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

  constructor(option: ConstructorOption) {
    super(option);

    ["isHandlePointsVisible"].forEach((key) => {
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
    // const moveTheWhole = () => {
    //   const { offsetX, offsetY } = event.data;
    //   const { x, y } = this.calculateOffset(offsetX, offsetY)!;

    //   const points = (this.handlePointsArr as (Point | Arc)[]).concat(this);
    //   points.forEach((item) => {
    //     item.internalUpdate({
    //       value: [item.value![0] + x.value, item.value![1] + y.value],
    //       position: [
    //         item.position![0] + x.position,
    //         item.position![1] + y.position,
    //       ],
    //       dynamicPosition: [
    //         item.dynamicPosition![0] + x.dynamicPosition,
    //         item.dynamicPosition![1] + y.dynamicPosition,
    //       ],
    //     });
    //   });
    //   this.notifyReload?.();
    // };
    // if (this.isHandlePointsVisible) {
    //   const { start, end, radius } = this.handlePoints;
    //   const handlePoint = this.handlePointsArr.find((point) => point.isHover);

    //   if (handlePoint) {
    //     const offsetX = event.data.offsetX;
    //     if (handlePoint == start) {
    //       this.startAngle =
    //         (this.startAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
    //     } else if (handlePoint == end) {
    //       this.endAngle =
    //         (this.endAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
    //     } else if (handlePoint == radius) {
    //       let v = 0;
    //       if (this.radiusType == "position") {
    //         v = offsetX / 2 / this.mainCanvas.percentage;
    //       } else {
    //         v = this.mainCanvas.getAxisValueByPoint(offsetX, 0).xV / 2;
    //       }
    //       if (this.radius + v > 0) this.radius += v;
    //     }
    //   } else moveTheWhole();
    // } else moveTheWhole();
  };

  protected updateValueScope() {
    this.initValueScope();
  }

  isPointInPath(x: number, y: number) {
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
      this.handlePointsArr.forEach((point) => {
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

  get cursorStyle() {
    const radiusIsHover = this.handlePoints?.radius.isHover;
    return this.isDraggable
      ? "_nhanh_canvas_hover_overlay_draggable" + (radiusIsHover ? "_ns" : "")
      : "_nhanh_canvas_hover_overlay";
  }
  protected setOverlayStyles(ctx?: CanvasRenderingContext2D) {
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].arcTo;
    let style = {} as ArcToStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.arcTo || defaultStyle;
    } else if (typeof this.style == "object") {
      const stroke = this.style.stroke
        ? Object.assign({}, defaultStyle.stroke, this.style.stroke as any)
        : defaultStyle.stroke;
      style = Object.assign({}, defaultStyle, this.style as any, { stroke });
    } else {
      style = defaultStyle;
    }

    if (ctx) this.setBaseLineStyle(ctx, style.stroke);

    return style;
  }
  protected get handlePointStyle() {
    return this.setOverlayStyles().point;
  }

  /** 更新控制点 */
  private updateHandlePoints() {
    let { value, position, dynamicPosition } = this;
    if (!dynamicPosition) return;

    const getPoint = () =>
      new Point({
        mainCanvas: this.mainCanvas,
        isDraggable: true,
        notifyReload: () => this.notifyReload?.(),
      });

    const other = this.handlePoints?.other || [];
    value?.forEach((_, index) => {
      if (!other[index]) other.push(getPoint());

      other[index].internalUpdate(
        {
          value: value![index],
          position: position![index],
          dynamicPosition: dynamicPosition![index],
        },
        true
      );
    });
    other.length = value!.length;

    const radius = this.handlePoints?.radius || getPoint();

    this.handlePoints = { radius, other };
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
        // const xV = mainCanvas.getAxisValueByPoint(radius, 0).xV;
        // this.setExtraScopeByValue({
        //   topV: xV,
        //   bottomV: xV,
        //   leftV: xV,
        //   rightV: xV * 2,
        // });
      } else if (radiusType == "value") {
        // this.setExtraScopeByValue({
        //   topV: radius,
        //   bottomV: radius,
        //   leftV: radius,
        //   rightV: radius * 2,
        // });
      }
    }
  }
  /** 更新动态半径 */
  private updateDynamicRadius() {
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
  protected updateBaseData() {
    if (!this.mainCanvas) return;

    let { value, position } = this;
    const [isValue, isPosition] = [
      _AreAllArraysValid(value) && value!.length > 1,
      _AreAllArraysValid(position) && position!.length > 1,
    ];

    if (!isValue && !isPosition) {
      this.handlePoints = undefined;
      return this.internalUpdate({ dynamicPosition: undefined });
    } else if (isValue) {
      position = [];
      for (let i = 0; i < value!.length; i++) {
        const item = value![i];
        const loc = this.mainCanvas.getAxisPointByValue(item[0], item[1], true);
        position.push([loc.x, loc.y]);
      }
    } else {
      value = [];
      for (let i = 0; i < position!.length; i++) {
        const item = position![i];
        const val = this.mainCanvas.getAxisValueByPoint(item[0], item[1], true);
        value.push([val.xV, val.yV]);
      }
    }

    const dynamicPosition = this.mainCanvas.transformPosition(position!);

    this.internalUpdate({ value, position, dynamicPosition });

    this.updateHandlePoints();
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition, mainCanvas, extraOffset, dynamicRadius } = this;
    if (!mainCanvas) return;
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      if (this.isRecalculate) {
        const { position, mainCanvas } = this;
        this.updateDynamicRadius();

        const dynamicPosition = this.dynamicPosition!;
        const newDynamicPosition = mainCanvas!.transformPosition(position!);
        if (mainCanvas?.isScaleUpdated) {
          this.updateHandlePoints();
        } else {
          const offsetx = newDynamicPosition[0][0] - dynamicPosition[0][0];
          const offsety = newDynamicPosition[0][1] - dynamicPosition[0][1];
          this.handlePointsArr.forEach((point) => {
            const x = point.dynamicPosition![0] + offsetx;
            const y = point.dynamicPosition![1] + offsety;
            point.internalUpdate({ dynamicPosition: [x, y] });
          });
        }
        this.internalUpdate({ dynamicPosition: newDynamicPosition });
      }
      return [this.draw, this];
    }
  }
}

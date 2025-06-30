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

type ConstructorOption = ConstructorParameters<
  typeof Overlay<ArcToStyleType, [number, number][]>
>[0] & {
  /** 是否可显示控制点 */
  isHandlePointsVisible?: boolean;
  /** 圆弧的半径。必须为正值。 */
  radiusValue?: number;
  /** 圆弧的半径。必须为正值。 */
  radiusPosition?: number;
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

  private _radiusValue = 0;
  /** 圆弧的半径。必须为正值。 */
  get radiusValue() {
    return this._radiusValue;
  }
  set radiusValue(radius: number) {
    if (this._radiusValue != radius) {
      this._radiusValue = radius;

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

      this.updateBaseData();
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
      style = _Utility_MergeObjects(
        JSON.parse(JSON.stringify(defaultStyle)),
        this.style
      );
    } else {
      style = defaultStyle;
    }

    if (ctx) this.setBaseLineStyle(ctx, style.stroke);

    return style;
  }
  protected get computedValueScopeStyles() {
    return this.setOverlayStyles();
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

  /** 更新额外范围 */
  private updateExtraScope() {
    const { mainCanvas, radiusValue } = this;
    if (mainCanvas) {
      if (radiusValue == 0) this.setExtraScopeByValue();
    }
  }
  protected updateBaseData() {
    if (!this.mainCanvas) return;

    let { value, position } = this;
    const [isValue, isPosition] = [
      _Valid_Is2DNumberArray(value) && value!.length > 1,
      _Valid_Is2DNumberArray(position) && position!.length > 1,
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
    const { dynamicPosition, mainCanvas, extraOffset, radiusValue } = this;
    if (!mainCanvas) return;
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      if (this.isRecalculate) {
        const { position, mainCanvas } = this;

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

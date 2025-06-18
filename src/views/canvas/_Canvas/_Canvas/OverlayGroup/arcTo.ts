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
  typeof Overlay<ArcStyleType, [number, number][]>
>[0] & {
  /** 是否可显示控制点 */
  isHandlePointsVisible?: boolean;
};

// export default class ArcTo extends Overlay<
//   ArcStyleType,
//   [number, number][]
// > {
//   /** 控制点 */
//   private handlePoints: Point[] = [];
//   /** 当前是否渲染了控制点 */
//   private isShowHandlePoint = false;
//   /** 是否可显示控制点 */
//   private _isHandlePointsVisible = true;
//   /** 是否可显示控制点 */
//   get isHandlePointsVisible() {
//     return this._isHandlePointsVisible;
//   }
//   set isHandlePointsVisible(value: boolean) {
//     if (this._isHandlePointsVisible !== value) {
//       this._isHandlePointsVisible = value;
//       if (this.isShowHandlePoint != value) this.notifyReload?.();
//     }
//   }

//   constructor(option: ConstructorOption) {
//     super(option);

//     ["isHandlePointsVisible"].forEach((key) => {
//       if (key in option) {
//         /** @ts-ignore */
//         this["_" + key] = option[key];
//       }
//     });

//     this.addEventListener("click", this.defaultClick);
//     this.addEventListener("dragg", this.defaultDragg);
//   }
//   /** 默认点击事件 点击后切换控制点显示状态 */
//   defaultClick: EventHandler<"click"> = (event, mouseEvent) => {
//     if (!this.isHandlePointsVisible) return;

//     const { state, oldState } = event.data;

//     if (state != oldState) this.notifyReload?.();
//   };
//   /** 处理拖动状态变化 */
//   defaultDragg: EventHandler<"dragg"> = (event, mouseEvent) => {
//     if (!this.mainCanvas) return;

//     /** 移动整体 */
//     // const moveTheWhole = () => {
//     //   const { offsetX, offsetY } = event.data;
//     //   const { x, y } = this.calculateOffset(offsetX, offsetY)!;

//     //   const points = (this.handlePointsArr as (Point | Arc)[]).concat(this);
//     //   points.forEach((item) => {
//     //     item.internalUpdate({
//     //       value: [item.value![0] + x.value, item.value![1] + y.value],
//     //       position: [
//     //         item.position![0] + x.position,
//     //         item.position![1] + y.position,
//     //       ],
//     //       dynamicPosition: [
//     //         item.dynamicPosition![0] + x.dynamicPosition,
//     //         item.dynamicPosition![1] + y.dynamicPosition,
//     //       ],
//     //     });
//     //   });
//     //   this.notifyReload?.();
//     // };
//     // if (this.isHandlePointsVisible) {
//     //   const { start, end, radius } = this.handlePoints;
//     //   const handlePoint = this.handlePointsArr.find((point) => point.isHover);

//     //   if (handlePoint) {
//     //     const offsetX = event.data.offsetX;
//     //     if (handlePoint == start) {
//     //       this.startAngle =
//     //         (this.startAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
//     //     } else if (handlePoint == end) {
//     //       this.endAngle =
//     //         (this.endAngle + (-offsetX / 180) * Math.PI) % (Math.PI * 2);
//     //     } else if (handlePoint == radius) {
//     //       let v = 0;
//     //       if (this.radiusType == "position") {
//     //         v = offsetX / 2 / this.mainCanvas.percentage;
//     //       } else {
//     //         v = this.mainCanvas.getAxisValueByPoint(offsetX, 0).xV / 2;
//     //       }
//     //       if (this.radius + v > 0) this.radius += v;
//     //     }
//     //   } else moveTheWhole();
//     // } else moveTheWhole();
//   };

//   protected updateValueScope() {
//     this.initValueScope();
//   }

//   isPointInPath(x: number, y: number) {
//     return false;
//   }
//   isPointInStroke(x: number, y: number) {
//     if (this.path && this.mainCanvas) {
//       this.setOverlayStyles(Overlay.ctx);
//       if (this.isDraggable)
//         Overlay.ctx.lineWidth = Math.max(Overlay.ctx.lineWidth, 20);
//       return Overlay.ctx.isPointInStroke(this.path, x, y);
//     }
//     return false;
//   }
//   isPointInAnywhere(x: number, y: number): boolean {
//     const isLine = super.isPointInAnywhere(x, y);

//     const isPoint = ((allow) => {
//       if (!allow) return false;
//       let point_hover = false;
//       const handlePoints = [...this.handlePoints].sort(
//         (a, b) => (a.isHover ? 0 : 1) - (b.isHover ? 0 : 1)
//       );
//       handlePoints.forEach((point) => {
//         if (point_hover) {
//           point.isHover && point.notifyHover(false);
//         } else {
//           point_hover = point.isPointInAnywhere(x, y);
//           point_hover != point.isHover && point.notifyHover(point_hover);
//         }
//       });
//       return point_hover;
//     })(this.isClick && this.isHandlePointsVisible);

//     return isLine || isPoint;
//   }

//   /** 更新控制点 */
//   private updateHandlePoints() {
//     let { value, position, dynamicPosition } = this;
//     if (!dynamicPosition) return;

//     value?.forEach((_, index) => {
//       if (!this.handlePoints[index]) {
//         const point = new Point({
//           mainCanvas: this.mainCanvas,
//           isDraggable: true,
//           notifyReload: () => this.notifyReload?.(),
//         });
//         this.handlePoints.push(point);
//       }

//       this.handlePoints[index].internalUpdate(
//         {
//           value: value![index],
//           position: position![index],
//           dynamicPosition: dynamicPosition![index],
//         },
//         true
//       );
//     });
//     this.handlePoints.length = value!.length;
//   }
//   protected updateBaseData() {
//     if (!this.mainCanvas) return;

//     let { value, position } = this;
//     const [isValue, isPosition] = [
//       _AreAllArraysValid(value) && value!.length > 1,
//       _AreAllArraysValid(position) && position!.length > 1,
//     ];

//     if (!isValue && !isPosition) {
//       this.handlePoints = [];
//       return this.internalUpdate({ dynamicPosition: undefined });
//     } else if (isValue) {
//       position = [];
//       for (let i = 0; i < value!.length; i++) {
//         const item = value![i];
//         const loc = this.mainCanvas.getAxisPointByValue(item[0], item[1], true);
//         position.push([loc.x, loc.y]);
//       }
//     } else {
//       value = [];
//       for (let i = 0; i < position!.length; i++) {
//         const item = position![i];
//         const val = this.mainCanvas.getAxisValueByPoint(item[0], item[1], true);
//         value.push([val.xV, val.yV]);
//       }
//     }

//     const dynamicPosition = this.mainCanvas.transformPosition(position!);

//     this.internalUpdate({ value, position, dynamicPosition });

//     this.updateHandlePoints();
//   }
// }

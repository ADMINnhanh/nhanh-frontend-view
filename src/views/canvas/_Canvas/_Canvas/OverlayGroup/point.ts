import _Canvas from "..";
import Overlay from "./public/overlay";
import { type Overlay as OverlayType } from "./index";
import DataProcessor from "../core/dataProcessor";
import { _Schedule } from "nhanh-pure-function";

export default class Point extends Overlay<PointStyleType, [number, number]> {
  /** 点的半径值 */
  radiusValue = 0;
  private angle = 2 * Math.PI;

  constructor(
    points: ConstructorParameters<
      typeof Overlay<PointStyleType, [number, number]>
    >[0]
  ) {
    super(points);
  }

  notifyDraggable(offsetX: number, offsetY: number): undefined {
    if (!this.mainCanvas || !this.draggable) return;

    const { x, y } = super.notifyDraggable(offsetX, offsetY)!;
    this.value = [this.value![0] + x.value, this.value![1] + y.value];
    this.position = [
      this.position![0] + x.position,
      this.position![1] + y.position,
    ];
    this.dynamicPosition = [
      this.dynamicPosition![0] + x.dynamicPosition,
      this.dynamicPosition![1] + y.dynamicPosition,
    ];
    this.notifyReload?.();
  }

  private fillProgress?: {
    lineWidthOffset: number;
    progress: number;
    scheduleCallback: () => void;
  };
  /**
   * 处理悬停状态变化
   * @param isHover 是否悬停
   */
  notifyHover(isHover: boolean, offsetX: number, offsetY: number) {
    super.notifyHover(isHover, offsetX, offsetY);

    const animationDuration = 300; // 动画持续时间(ms)
    const defaultLineWidth = this.setCanvasStyles().width;

    // 处理已有动画的情况
    if (this.fillProgress) {
      this.cancelAndRestartAnimation(
        isHover,
        defaultLineWidth,
        animationDuration - 100
      );
    }
    // 处理新的悬停动画
    else if (isHover) {
      this.startNewHoverAnimation(defaultLineWidth, animationDuration);
    }
  }
  /** 取消当前动画并重新开始相反方向的动画 */
  private cancelAndRestartAnimation(
    isHover: boolean,
    defaultLineWidth: number,
    duration: number
  ) {
    this.fillProgress!.scheduleCallback(); // 取消当前动画

    let lastScheduleTime = 0;
    this.fillProgress!.scheduleCallback = _Schedule((currentTime) => {
      if (!this.fillProgress || !currentTime) return;

      // 更新进度(正向或反向)
      this.fillProgress.progress +=
        (currentTime - lastScheduleTime) * (isHover ? 1 : -1);
      lastScheduleTime = currentTime;

      // 限制进度在0-1之间
      this.fillProgress.progress = Math.min(
        1,
        Math.max(0, this.fillProgress.progress)
      );

      // 计算并更新线宽偏移
      this.updateLineWidthOffset(defaultLineWidth);

      // 动画完成处理
      if (
        this.fillProgress.progress === 1 ||
        this.fillProgress.progress === 0
      ) {
        this.fillProgress.scheduleCallback(); // 停止动画
        if (this.fillProgress.progress === 0) {
          this.fillProgress = undefined; // 清除完成的动画
        }
      }
    }, duration);
  }
  /** 开始新的悬停动画 */
  private startNewHoverAnimation(defaultLineWidth: number, duration: number) {
    this.fillProgress = {
      lineWidthOffset: 0,
      progress: 0,
      scheduleCallback: _Schedule((progress) => {
        if (!this.fillProgress) return;

        this.fillProgress.progress = progress;
        this.updateLineWidthOffset(defaultLineWidth);
      }, duration),
    };
  }
  /** 更新线宽偏移并触发重绘 */
  private updateLineWidthOffset(defaultLineWidth: number) {
    if (!this.fillProgress) return;

    const newOffset = Math.ceil(defaultLineWidth * this.fillProgress.progress);
    if (newOffset !== this.fillProgress.lineWidthOffset) {
      this.fillProgress.lineWidthOffset = newOffset;
      this.notifyReload?.();
    }
  }

  isPointInPath(x: number, y: number) {
    if (this.path) return Overlay.ctx.isPointInPath(this.path, x, y);
    return false;
  }
  isPointInStroke(x: number, y: number) {
    if (this.path && this.mainCanvas) {
      const { width } = this.setCanvasStyles(Overlay.ctx);
      if (this.fillProgress?.lineWidthOffset == width) return false;
      return Overlay.ctx.isPointInStroke(this.path, x, y);
    }
    return false;
  }

  updateBaseData() {
    if (!this.mainCanvas) return;
    const IsValid = DataProcessor.IsValid;
    let { value, position } = this;
    const [isValue, isPosition] = [IsValid(value), IsValid(position)];

    if (!isValue && !isPosition) {
      return (this.dynamicPosition = undefined);
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

    this.dynamicPosition = dynamicPosition;
    this.value = value;
    this.position = position;

    const defaultStyle = this.mainCanvas.style[this.mainCanvas.theme].point;
    let style = {} as PointStyleType;
    if (typeof this.style == "string") {
      style = this.mainCanvas.style[this.style]?.point;
    } else if (typeof this.style == "object") {
      style = this.style as any;
    }
    const radius =
      (style?.width || defaultStyle.width) +
      (style?.radius || defaultStyle.radius);

    this.radiusValue = this.mainCanvas.preservePrecision(
      (value![0] / position![0]) * radius
    );
  }

  private setCanvasStyles(ctx?: CanvasRenderingContext2D) {
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].point;
    let style = {} as PointStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.point || defaultStyle;
    } else if (typeof this.style == "object") {
      style = Object.assign({}, defaultStyle, this.style as any);
    } else {
      style = defaultStyle;
    }

    const { width, stroke, fill } = style;

    if (ctx) {
      const lineWidthOffset = this.fillProgress?.lineWidthOffset || 0;
      ctx.lineWidth = width - lineWidthOffset;
      ctx.strokeStyle = stroke;
      ctx.fillStyle = fill;
    }

    return { ...style };
  }
  draw(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition, mainCanvas } = this;
    if (!mainCanvas) return;

    const { radius, width } = this.setCanvasStyles(ctx);
    const lineWidthOffset = this.fillProgress?.lineWidthOffset || 0;

    ctx.beginPath();

    // ctx.arc(dynamicPosition![0], dynamicPosition![1], radius, 0, this.angle);
    // 创建 Path2D 对象
    this.path = new Path2D();
    this.path.arc(
      dynamicPosition![0],
      dynamicPosition![1],
      radius + lineWidthOffset / 2,
      0,
      this.angle
    );
    ctx.fill(this.path);
    if (width != lineWidthOffset) ctx.stroke(this.path);
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { show, dynamicPosition, position, value, radiusValue, mainCanvas } =
      this;
    if (!mainCanvas) return;

    const { scale, maxMinValue, isRecalculate } = mainCanvas;
    const isShow = show.shouldRender(scale);
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      const [x, y] = value!;

      const isPointWithinRange =
        maxMinValue.maxXV > x - radiusValue &&
        maxMinValue.minXV < x + radiusValue &&
        maxMinValue.maxYV > y - radiusValue &&
        maxMinValue.minYV < y + radiusValue;

      if (isPointWithinRange) {
        if (isRecalculate)
          this.dynamicPosition = mainCanvas.transformPosition([position!])[0];
        return [this.draw, this];
      }
    }
  }
}

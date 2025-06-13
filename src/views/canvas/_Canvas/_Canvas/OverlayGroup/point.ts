import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import { _IsSingleArrayValid, _Schedule } from "nhanh-pure-function";
import type { EventHandler } from "../public/eventController";

type ConstructorOption = ConstructorParameters<
  typeof Overlay<PointStyleType, [number, number]>
>[0];

export default class Point extends Overlay<PointStyleType, [number, number]> {
  private angle = 2 * Math.PI;

  constructor(option: ConstructorOption) {
    option.redrawOnIsHoverChange = option.redrawOnIsHoverChange ?? true;

    super(option);

    this.addEventListener("hover", this.defaultHover);
    this.addEventListener("dragg", this.defaultDragg);
  }

  protected updateValueScope() {
    this.initValueScope();
  }

  defaultDragg: EventHandler<"dragg"> = (event, mouseEvent) => {
    const { offsetX, offsetY } = event.data;
    const { x, y } = this.calculateOffset(offsetX, offsetY);

    this.internalUpdate({
      value: [this.value![0] + x.value, this.value![1] + y.value],
      position: [
        this.position![0] + x.position,
        this.position![1] + y.position,
      ],
      dynamicPosition: [
        this.dynamicPosition![0] + x.dynamicPosition,
        this.dynamicPosition![1] + y.dynamicPosition,
      ],
    });

    this.notifyReload?.();
  };

  /** 填充进度 */
  private fillProgress?: {
    lineWidthOffset: number;
    progress: number;
    scheduleCallback: () => void;
  };
  /** 处理悬停状态变化 */
  defaultHover: EventHandler<"hover"> = (event, mouseEvent) => {
    const isHover = event.data.state;

    const animationDuration = 300; // 动画持续时间(ms)
    const defaultLineWidth = this.setOverlayStyles().width;

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
  };

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
      const { width } = this.setOverlayStyles(Overlay.ctx);
      if (this.fillProgress?.lineWidthOffset == width) return false;
      return Overlay.ctx.isPointInStroke(this.path, x, y);
    }
    return false;
  }

  protected updateBaseData() {
    if (!this.mainCanvas) return;
    let { value, position } = this;
    const [isValue, isPosition] = [
      _IsSingleArrayValid(value),
      _IsSingleArrayValid(position),
    ];

    if (!isValue && !isPosition) {
      return this.internalUpdate({ dynamicPosition: undefined });
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

    this.internalUpdate({ value, position, dynamicPosition });
  }

  protected setOverlayStyles(ctx?: CanvasRenderingContext2D) {
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
      ctx.setLineDash([]);
      const lineWidthOffset = this.fillProgress?.lineWidthOffset || 0;
      ctx.lineWidth = width - lineWidthOffset;
      ctx.strokeStyle = stroke;
      ctx.fillStyle = fill;
    }

    return { ...style };
  }
  protected get handlePointStyle() {
    return this.setOverlayStyles();
  }
  draw(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition, mainCanvas, extraOffset } = this;

    if (!mainCanvas) return;
    this.setGlobalAlpha(ctx);
    // console.log(this.valueScope);

    const { radius, width } = this.setOverlayStyles(ctx);
    const lineWidthOffset = this.fillProgress?.lineWidthOffset || 0;

    const x = dynamicPosition![0] + extraOffset.x;
    const y = dynamicPosition![1] + extraOffset.y;

    ctx.beginPath();

    // ctx.arc(dynamicPosition![0], dynamicPosition![1], radius, 0, this.angle);
    // 创建 Path2D 对象
    this.path = new Path2D();
    this.path.arc(x, y, radius + lineWidthOffset / 2, 0, this.angle);
    ctx.fill(this.path);
    if (width != lineWidthOffset) ctx.stroke(this.path);
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      const { mainCanvas, position } = this;

      if (this.isRecalculate) {
        this.internalUpdate({
          dynamicPosition: mainCanvas!.transformPosition([position!])[0],
        });
      }
      return [this.draw, this];
    }
  }
}

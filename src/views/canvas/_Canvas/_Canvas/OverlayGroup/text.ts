import _Canvas from "..";
import Overlay from "./public/overlay";
import { type Overlay as OverlayType } from "./index";
import DataProcessor from "../core/dataProcessor";
import type { EventHandler } from "./public/event";

type ConstructorOption = ConstructorParameters<
  typeof Overlay<TextStyleType, [number, number]>
>[0] & {
  text?: string;
};

export default class Text extends Overlay<TextStyleType, [number, number]> {
  /** 文字偏差 */
  private textOffset = { x: 0, y: 0 };

  /** 文字 */
  text?: string;

  constructor(option: ConstructorOption) {
    super(option);

    this.addEventListener("draggable", this.defaultDraggable);
  }

  defaultDraggable: EventHandler<"draggable"> = (event, mouseEvent) => {
    const { offsetX, offsetY } = event.data;
    const { x, y } = this.calculateOffset(offsetX, offsetY);
    this.value = [this.value![0] + x.value, this.value![1] + y.value];
    this.position = [
      this.position![0] + x.position,
      this.position![1] + y.position,
    ];
    this.dynamicPosition = [
      this.dynamicPosition![0] + x.dynamicPosition,
      this.dynamicPosition![1] + y.dynamicPosition,
    ];

    this.updateValueScope();
    this.notifyReload?.();
  };

  protected updateValueScope() {
    const { textOffset, value } = this;

    const { xV: width, yV: height } = this.mainCanvas!.getAxisValueByPoint(
      textOffset.x * 2,
      textOffset.y * 2
    );
    this.valueScope = {
      minX: value![0] - width / 2,
      maxX: value![0] + width / 2,
      minY: value![1] - height / 2,
      maxY: value![1] + height / 2,
    };
    this.staticValueScope = {
      minX: value![0],
      maxX: value![0],
      minY: value![1],
      maxY: value![1],
    };
    this.setExtraOffset(this.extraOffset, false);
  }

  isPointInPath(x: number, y: number) {
    if (this.path) return Overlay.ctx.isPointInPath(this.path, x, y);
    return false;
  }
  isPointInStroke(x: number, y: number) {
    return false;
  }

  updateBaseData() {
    if (!this.mainCanvas) return;
    if (!this.text || this.text.length == 0)
      return (this.dynamicPosition = undefined);
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

    const ctx = this.mainCanvas.ctx;
    this.setCanvasStyles(ctx);
    const textMetrics = ctx.measureText(this.text);
    this.textOffset = {
      x: textMetrics.width / 2,
      y: textMetrics.actualBoundingBoxAscent / 2,
    };

    this.updateValueScope();
  }

  setText(text: string) {
    if (text != this.text) {
      this.text = text;
      this.updateBaseData();
      if (this.dynamicPosition) this.notifyReload?.();
    }
  }

  /** 设置样式 */
  setCanvasStyles(ctx: CanvasRenderingContext2D) {
    const mainCanvas = this.mainCanvas!;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].text;
    let style = {} as TextStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.text || defaultStyle;
    } else if (typeof this.style == "object") {
      style = Object.assign({}, defaultStyle, this.style as any);
    } else {
      style = defaultStyle;
    }

    // 设置画布的字体样式，包括是否加粗、字体大小和字体家族
    ctx.font = `${style.bold ? "bold" : ""} ${style.size}px ${style.family}`;
    /** 设置文本的描边宽度为2px */
    ctx.lineWidth = 2;
    // // 设置文本的描边颜色为背景色，并绘制文本的描边
    ctx.strokeStyle = style.stroke;
    // 根据是否是次要颜色，选择相应的文本填充颜色，并填充文本
    ctx.fillStyle = style[this.isHover ? "secondary" : "color"];
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.mainCanvas) return;

    const dynamicPosition = this.dynamicPosition!;
    const textOffset = this.textOffset!;
    const text = this.text!;
    const extraOffset = this.extraOffset;

    this.setCanvasStyles(ctx);

    const x = dynamicPosition[0] + extraOffset.x - textOffset.x;
    const y = dynamicPosition[1] + extraOffset.y + textOffset.y;

    // 绘制文本的描边
    ctx.strokeText(text, x, y);
    // 填充文本
    ctx.fillText(text, x, y);

    // 获取文本的路径 使用 Path2D 绘制文本路径
    this.path = new Path2D();
    this.path.rect(
      x,
      dynamicPosition[1] + extraOffset.y - textOffset.y,
      textOffset.x * 2,
      textOffset.y * 2
    );
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { show, dynamicPosition, position, valueScope, mainCanvas } = this;
    if (!mainCanvas) return;

    const { scale, maxMinValue, isRecalculate, isScaleUpdated } = mainCanvas;
    const isShow = show.shouldRender(scale);

    if (isShow && !!dynamicPosition) {
      if (isScaleUpdated) this.setExtraOffset(this.extraOffset, false);

      const pointNotWithinRange =
        maxMinValue.maxXV < valueScope!.minX ||
        maxMinValue.minXV > valueScope!.maxX ||
        maxMinValue.maxYV < valueScope!.minY ||
        maxMinValue.minYV > valueScope!.maxY;
      if (pointNotWithinRange) return;

      if (isRecalculate)
        this.dynamicPosition = mainCanvas.transformPosition([position!])[0];
      return [this.draw, this];
    }
  }
}

import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import type { EventHandler } from "../public/eventController";
import { _IsSingleArrayValid } from "nhanh-pure-function";

type ConstructorOption = ConstructorParameters<
  typeof Overlay<TextStyleType, [number, number]>
>[0] & {
  /** 文字 */
  text?: string;
};

export default class Text extends Overlay<TextStyleType, [number, number]> {
  /** 文字偏差 */
  private textOffset = { x: 0, y: 0 };

  private _text?: string;
  /** 文字 */
  get text(): string | undefined {
    return this._text;
  }
  set text(text: string | undefined) {
    if (this._text != text) {
      this._text = text;
      if (this.mainCanvas) {
        this.updateBaseData();
        if (this.dynamicPosition) this.notifyReload?.();
      }
    }
  }

  constructor(option: ConstructorOption) {
    option.redrawOnIsHoverChange = option.redrawOnIsHoverChange ?? true;

    super(option);

    const { text } = option;
    Object.assign(this, { text });

    this.addEventListener("dragg", this.defaultDragg);
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

  protected updateBaseData() {
    if (!this.mainCanvas) return;
    if (!this.text || this.text.length == 0)
      return this.internalUpdate({ dynamicPosition: undefined });
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

    this.internalUpdate({
      value,
      position,
      dynamicPosition,
    });

    const ctx = this.mainCanvas.ctx;
    this.setOverlayStyles(ctx);
    const textMetrics = ctx.measureText(this.text);
    this.textOffset = {
      x: textMetrics.width / 2,
      y: textMetrics.actualBoundingBoxAscent / 2,
    };

    this.updateValueScope();
  }

  /** 设置样式 */
  setOverlayStyles(ctx: CanvasRenderingContext2D) {
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

    return style;
  }
  protected get handlePointStyle() {
    return undefined;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.mainCanvas) return;
    this.setGlobalAlpha(ctx);

    const dynamicPosition = this.dynamicPosition!;
    const textOffset = this.textOffset!;
    const text = this.text!;
    const extraOffset = this.extraOffset;

    this.setOverlayStyles(ctx);

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
    if (this.isNeedRender) {
      if (this.isRecalculate) {
        const { position, mainCanvas } = this;
        this.internalUpdate({
          dynamicPosition: mainCanvas!.transformPosition([position!])[0],
        });
      }

      return [this.draw, this];
    }
  }
}

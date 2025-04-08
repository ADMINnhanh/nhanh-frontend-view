import _Canvas from "..";
import Overlay from "./public/overlay";

export default class Polygon extends Overlay<
  PolygonStyleType,
  [number, number][]
> {
  private size?: [number, number];
  private dynamicSize?: [number, number];

  constructor(polygon: PolygonListType[number]) {
    super(polygon);
    this.position = polygon.position;
    this.value = polygon.value;
    this.size = polygon.size;
  }

  updateBaseDate() {
    if (!this.mainCanvas) return;
    const { IsValids, IsValid, axisConfig, percentage } = this.mainCanvas;
    let { value, position, size } = this;

    const [isValue, isPosition, isRect] = [
      IsValids(value),
      IsValids(position),
      IsValid(size),
    ];
    if (isRect) {
      if (!isValue && !isPosition) return (this.dynamicPosition = undefined);
      else if (isPosition) position!.length = 1;
      else if (isValue) value!.length = 1;
    } else {
      if (
        (isValue && value!.length < 3) ||
        (isPosition && position!.length < 3)
      )
        return (this.dynamicPosition = undefined);
      size = undefined;
    }

    if (isValue && !isPosition) {
      position = [];
      for (let i = 0; i < value!.length; i++) {
        const item = value![i];
        const loc = this.mainCanvas.getAxisPointByValue(item[0], item[1]);
        position.push([loc.x, loc.y]);
      }
    } else if (!isValue && isPosition) {
      value = [];
      for (let i = 0; i < position!.length; i++) {
        const item = position![i];
        const val = this.mainCanvas.getAxisValueByPoint(item[0], item[1]);
        value.push([val.xV, val.yV]);
      }
    }

    const dynamicPosition = this.mainCanvas.transformPosition(position!);
    const dynamicSize = [];
    if (isRect) {
      const [width, height] = size!;
      dynamicSize[0] = width * percentage * axisConfig.x;
      dynamicSize[1] = height * percentage * axisConfig.y;
    }

    this.dynamicSize = dynamicSize as any;
    this.dynamicPosition = dynamicPosition;
    this.value = value;
    this.position = position;
    this.size = size;
  }

  setSize(size: Polygon["size"]) {
    this.size = size;

    const prevDynamicStatus = !!this.dynamicPosition;
    this.updateBaseDate();
    if (!!this.dynamicPosition != prevDynamicStatus) this.notifyReload?.();
  }
  getSize() {
    return this.size;
  }

  private setCanvasStyles(ctx: CanvasRenderingContext2D) {
    const { mainCanvas } = this;
    if (!mainCanvas) return;

    const defaultStyle = mainCanvas.style[mainCanvas.theme].polygon;
    let style = {} as PolygonStyleType;
    if (typeof this.style == "string") {
      style = mainCanvas.style[this.style]?.polygon || defaultStyle;
    } else if (typeof this.style == "object") {
      style = Object.assign({}, defaultStyle, this.style as any);
    }

    const { width, stroke, dash, dashGap, dashOffset, fill } = style;

    ctx.setLineDash(dash ? (dashGap as any) : []);
    ctx.lineDashOffset = dashOffset;
    ctx.lineWidth = width;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
  }

  /** 绘制矩形 */
  drawRect(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition, dynamicSize } = this;

    this.setCanvasStyles(ctx);

    ctx.beginPath();

    ctx.rect(
      dynamicPosition![0][0],
      dynamicPosition![0][1],
      dynamicSize![0],
      dynamicSize![1]
    );

    ctx.stroke();
    ctx.fill();
  }
  /** 绘制多边形 */
  drawPolygon(ctx: CanvasRenderingContext2D) {
    const { dynamicPosition } = this;

    this.setCanvasStyles(ctx);

    ctx.beginPath();

    dynamicPosition!.forEach((item, index) => {
      ctx[index == 0 ? "moveTo" : "lineTo"](item[0], item[1]);
    });
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  getDraw() {
    const { show, dynamicPosition, position, mainCanvas } = this;
    if (!mainCanvas) return;

    const { scale, isRecalculate, percentage, axisConfig } = mainCanvas;
    const isShow = show.shouldRender(scale);
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      if (isRecalculate) {
        this.dynamicPosition = mainCanvas.transformPosition(position!);
        if (this.size) {
          this.dynamicSize = [
            this.size[0] * percentage * axisConfig.x,
            this.size[1] * percentage * axisConfig.y,
          ];
        }
      }
      if (this.dynamicSize) return this.drawRect.bind(this);
      return this.drawPolygon.bind(this);
    }
  }
}

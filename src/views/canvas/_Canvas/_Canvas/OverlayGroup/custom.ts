import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import Decimal from "decimal.js";

type ConstructorOption<T> = ConstructorParameters<
  typeof Overlay<T, [number, number][]>
>[0] & {
  /** 绘制函数 */
  draw: (ctx: CanvasRenderingContext2D) => void;
};

export default class Custom<T> extends Overlay<T, [number, number][]> {
  constructor(option: ConstructorOption<T>) {
    super(option);
    this.redrawOnIsHoverChange = false;

    const { draw } = option;
    Object.assign(this, { draw });
  }

  protected updateValueScope(): void {
    this.initValueScope();
  }

  isPointInPath(x: number, y: number) {
    return false;
  }
  isPointInStroke(x: number, y: number) {
    return false;
  }

  protected updateBaseData() {
    if (!this.mainCanvas) return;

    this.internalUpdate({ dynamicPosition: undefined });

    let value = this.value as any;
    let position = this.position as any;

    if (value) {
      position = this.convertValuesToPositions(value);
    } else {
      value = this.convertPositionsToValues(position!);
    }

    this.updateDataProperties(value, position);
  }
  private convertValuesToPositions(values: any[]): [number, number][] {
    const positions: [number, number][] = [];
    let scale = 1;

    values.forEach((item, i) => {
      if (i === 0) {
        const loc = this.mainCanvas!.getAxisPointByValue(
          item[0],
          item[1],
          true
        );
        positions.push([loc.x, loc.y]);
        // scale = this.mainCanvas!.preservePrecision(loc.x / item[0]);
        scale = new Decimal(loc.x).div(item[0]).toNumber();
      } else {
        positions.push([
          // this.mainCanvas!.preservePrecision(scale * item[0]),
          // this.mainCanvas!.preservePrecision(scale * item[1]),
          new Decimal(scale).mul(item[0]).toNumber(),
          new Decimal(scale).mul(item[1]).toNumber(),
        ]);
      }
    });

    return positions;
  }
  private convertPositionsToValues(positions: [number, number][]): any[] {
    const values: any[] = [];
    let scale = 1;

    positions.forEach((item, i) => {
      if (i === 0) {
        const val = this.mainCanvas!.getAxisValueByPoint(
          item[0],
          item[1],
          true
        );
        values.push([val.xV, val.yV]);
        // scale = this.mainCanvas!.preservePrecision(val.xV / item[0]);
        scale = new Decimal(val.xV).div(item[0]).toNumber();
      } else {
        values.push([
          // this.mainCanvas!.preservePrecision(scale * item[0]),
          // this.mainCanvas!.preservePrecision(scale * item[1]),
          new Decimal(scale).mul(item[0]).toNumber(),
          new Decimal(scale).mul(item[1]).toNumber(),
        ]);
      }
    });

    return values;
  }
  private updateDataProperties(value: any, position: [number, number][]) {
    this.internalUpdate({
      value,
      position,
      dynamicPosition: this.mainCanvas!.transformPosition(position),
    });
  }

  protected setOverlayStyles(ctx?: CanvasRenderingContext2D): any {}
  protected get computedValueScopeStyles() {
    return {};
  }

  private _draw?: (ctx: CanvasRenderingContext2D) => void;
  /** 传入的自定义绘制函数 */
  get draw() {
    return (ctx: CanvasRenderingContext2D) => {
      this.setGlobalAlpha(ctx);
      this._draw?.(ctx);
    };
  }
  set draw(draw: (ctx: CanvasRenderingContext2D) => void) {
    this._draw = draw;
  }
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    if (this.isNeedRender) {
      const { mainCanvas, position } = this;
      if (this.isRecalculate) {
        this.internalUpdate({
          dynamicPosition: mainCanvas!.transformPosition(position!),
        });
      }
      return [this.draw, this];
    }
  }
}

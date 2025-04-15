import _Canvas from "..";
import Overlay from "./public/overlay";
import { type Overlay as OverlayType } from "./index";

export default class Custom<
  T,
  V extends [number, number] | [number, number][]
> extends Overlay<T, V> {
  /** 是否为多点 */
  multiple?: boolean = undefined;
  constructor(
    config: ConstructorParameters<typeof Overlay<T, V>>[0],
    draw: (ctx: CanvasRenderingContext2D) => void
  ) {
    super(config);
    this.draw = draw;
  }

  isMultiple() {
    if (!this.mainCanvas) return;
    const IsValid = this.mainCanvas.IsValid;
    const IsValids = this.mainCanvas.IsValids.bind(this.mainCanvas);
    let { value, position } = this;

    const checkAndClearInvalidValue = (isValid: Function) => {
      const isValue = isValid(value);
      const isPosition = isValid(position);
      if (isValue || isPosition) {
        if (!isValue) this.value = undefined;
        if (!isPosition) this.position = undefined;
        return true;
      }
      return false;
    };

    if (checkAndClearInvalidValue(IsValid)) this.multiple = false;
    else if (checkAndClearInvalidValue(IsValids)) this.multiple = true;

    return this.multiple;
  }

  updateBaseData() {
    if (!this.mainCanvas) return;
    this.isMultiple();

    this.dynamicPosition = undefined;

    if (this.multiple === true) {
      this.handleMultipleData();
    } else if (this.multiple === false) {
      this.handleSingleData();
    }
  }
  private handleMultipleData() {
    let value = this.value as any;
    let position = this.position as any;

    if (value) {
      position = this.convertValuesToPositions(value);
    } else {
      value = this.convertPositionsToValues(position!);
    }

    this.updateDataProperties(value, position);
  }
  private handleSingleData() {
    let value = this.value as any;
    let position = this.position as any;

    if (value) {
      const loc = this.mainCanvas!.getAxisPointByValue(
        value[0],
        value[1],
        true
      );
      position = [loc.x, loc.y];
    } else {
      const val = this.mainCanvas!.getAxisValueByPoint(
        position[0],
        position[1],
        true
      );
      value = [val.xV, val.yV];
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
        scale = this.mainCanvas!.preservePrecision(loc.x / item[0]);
      } else {
        positions.push([
          this.mainCanvas!.preservePrecision(scale * item[0]),
          this.mainCanvas!.preservePrecision(scale * item[1]),
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
        scale = this.mainCanvas!.preservePrecision(val.xV / item[0]);
      } else {
        values.push([
          this.mainCanvas!.preservePrecision(scale * item[0]),
          this.mainCanvas!.preservePrecision(scale * item[1]),
        ]);
      }
    });

    return values;
  }
  private updateDataProperties(value: any, position: any) {
    this.dynamicPosition = (
      this.multiple
        ? this.mainCanvas!.transformPosition(position as [number, number][])
        : this.mainCanvas!.transformPosition([position as [number, number]])[0]
    ) as any;
    this.value = value;
    this.position = position;
  }

  draw: (ctx: CanvasRenderingContext2D) => void;
  getDraw(): [(ctx: CanvasRenderingContext2D) => void, OverlayType] | void {
    const { show, dynamicPosition, mainCanvas, multiple, position } = this;
    if (!mainCanvas || typeof multiple != "boolean") return;

    const { scale, isRecalculate } = mainCanvas;
    const isShow = show.shouldRender(scale);
    const prevDynamicStatus = !!dynamicPosition;

    if (isShow && prevDynamicStatus) {
      if (isRecalculate)
        this.dynamicPosition = (
          multiple
            ? mainCanvas.transformPosition(position as [number, number][])
            : mainCanvas.transformPosition([position as [number, number]])[0]
        ) as any;
      return [this.draw, this];
    }
  }
}

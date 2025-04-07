import _Canvas from "..";
import Overlay from "../public/overlay";

export default class Point extends Overlay<PointStyleType> {
  private position?: [number, number];
  private value?: [number, number];
  private dynamicPosition?: [number, number];

  constructor(points: PointListType[number]) {
    super(points);
    this.position = points.position;
    this.dynamicPosition = points.dynamicPosition;
    this.value = points.value;
  }

  setPosition(position: Point["position"]) {
    this.position = position;
    this.notifyReload?.();
  }
  getPosition() {
    return this.position;
  }
  setValue(value: Point["value"]) {
    this.value = value;
    this.notifyReload?.();
  }
  getValue() {
    return this.value;
  }
}

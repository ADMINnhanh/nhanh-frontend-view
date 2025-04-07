import _Canvas from "..";
import Overlay from "../public/overlay";

export default class Polygon extends Overlay<PolygonStyleType> {
  private position?: [number, number][];
  private dynamicPosition?: [number, number][];
  private value?: [number, number][];
  private size?: [number, number];
  private dynamicSize?: [number, number];

  constructor(polygon: PolygonListType[number]) {
    super(polygon);
    this.position = polygon.position;
    this.value = polygon.value;
    this.size = polygon.size;
  }

  setPosition(position: Polygon["position"]) {
    this.position = position;
    this.notifyReload?.();
  }
  getPosition() {
    return this.position;
  }
  setValue(value: Polygon["value"]) {
    this.value = value;
    this.notifyReload?.();
  }
  getValue() {
    return this.value;
  }
  setSize(size: Polygon["size"]) {
    this.size = size;
    this.notifyReload?.();
  }
  getSize() {
    return this.size;
  }
}

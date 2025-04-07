import _Canvas from "..";
import Overlay from "../public/overlay";

export default class Line extends Overlay<LineStyleType> {
  private position?: [number, number][];
  private value?: [number, number][];
  private dynamicPosition?: [number, number][];

  constructor(line: LineListType[number]) {
    super(line);
    this.position = line.position;
    this.value = line.value;
  }

  setPosition(position: Line["position"]) {
    this.position = position;
    this.notifyReload?.();
  }
  getPosition() {
    return this.position;
  }
  setValue(value: Line["value"]) {
    this.value = value;
    this.notifyReload?.();
  }
  getValue() {
    return this.value;
  }
}

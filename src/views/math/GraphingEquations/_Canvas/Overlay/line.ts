export default class Line {
  /** 是否显示 */
  show: boolean;
  style?: DeepPartial<LineStyleType>;
  zIndex: number;
  position?: [number, number][];
  dynamicPosition?: [number, number][];
  value?: [number, number][];

  constructor(line: LineListType[number]) {
    this.show = line.show ?? true;
    this.style = line.style;
    this.zIndex = line.zIndex ?? 0;
    this.position = line.position;
    this.value = line.value;
  }
  reload?: () => void;
  setShow(show: Line["show"]) {
    this.show = show;
    this.reload?.();
  }
  setStyle(style?: Line["style"]) {
    this.style = style;
    this.reload?.();
  }
  setZIndex(zIndex: Line["zIndex"]) {
    this.zIndex = zIndex;
    this.reload?.();
  }
  setPosition(position: Line["position"]) {
    this.position = position;
    this.reload?.();
  }
  setValue(value: Line["value"]) {
    this.value = value;
    this.reload?.();
  }
}

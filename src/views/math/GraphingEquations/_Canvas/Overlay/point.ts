export default class Point {
  /** 是否显示 */
  show: boolean;
  style?: Partial<PointStyleType>;
  zIndex: number;
  position?: [number, number];
  dynamicPosition?: [number, number];
  value?: [number, number];

  constructor(points: PointListType[number]) {
    this.show = points.show ?? true;
    this.style = points.style;
    this.zIndex = points.zIndex ?? 0;
    this.position = points.position;
    this.dynamicPosition = points.dynamicPosition;
    this.value = points.value;
  }

  reload?: () => void;
  setShow(show: Point["show"]) {
    this.show = show;
    this.reload?.();
  }
  setStyle(style?: Point["style"]) {
    this.style = style;
    this.reload?.();
  }
  setZIndex(zIndex: Point["zIndex"]) {
    this.zIndex = zIndex;
    this.reload?.();
  }
  setPosition(position: Point["position"]) {
    this.position = position;
    this.reload?.();
  }
  setValue(value: Point["value"]) {
    this.value = value;
    this.reload?.();
  }
}

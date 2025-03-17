export default class Polygon {
  /** 是否显示 */
  show: boolean;
  style?: DeepPartial<PolygonStyleType>;
  zIndex: number;
  position?: [number, number][];
  dynamicPosition?: [number, number][];
  value?: [number, number][];
  size?: [number, number];
  dynamicSize?: [number, number];

  constructor(polygon: PolygonListType[number]) {
    this.show = polygon.show ?? true;
    this.style = polygon.style;
    this.zIndex = polygon.zIndex ?? 0;
    this.position = polygon.position;
    this.value = polygon.value;
    this.size = polygon.size;
  }
  reload?: () => void;
  setShow(show: Polygon["show"]) {
    this.show = show;
    this.reload?.();
  }
  setStyle(style?: Polygon["style"]) {
    this.style = style;
    this.reload?.();
  }
  setZIndex(zIndex: Polygon["zIndex"]) {
    this.zIndex = zIndex;
    this.reload?.();
  }
  setPosition(position: Polygon["position"]) {
    this.position = position;
    this.reload?.();
  }
  setValue(value: Polygon["value"]) {
    this.value = value;
    this.reload?.();
  }
  setSize(size: Polygon["size"]) {
    this.size = size;
    this.reload?.();
  }
}

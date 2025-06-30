import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { _Utility_GenerateUUID } from "nhanh-pure-function";

export const id = _Utility_GenerateUUID();

const m = new _Canvas.Polygon({
  value: [
    [0, -1.464],
    [-2, 2],
    [2, 2],
  ],
  isDraggable: true,
  canCreateOrDeleteHandlePoint: false,
  style: {
    fill: "transparent",
    fill_hover: "transparent",
  },
});
const config = (color: string, dash?: boolean) => ({
  isInteractive: false,
  style: {
    stroke: { color, width: 2, dash },
  },
});
const abl = new _Canvas.Line(config("#8a2be2"));
const ablp = new _Canvas.Line(config("#8a2be2", true));
const bcl = new _Canvas.Line(config("#ff69b4"));
const bclp = new _Canvas.Line(config("#ff69b4", true));
const cal = new _Canvas.Line(config("#3bc0cd"));
const calp = new _Canvas.Line(config("#3bc0cd", true));
export const overlays = [m, abl, bcl, cal, ablp, bclp, calp];

type Point = { x: number; y: number };
type PointA = [number, number];
/** 快捷方法 */
class MP {
  constructor(private mp: typeof m) {
    this.mp = mp;
  }
  private p(i: number) {
    const p = this.mp.value![i];
    return { x: p[0], y: p[1] };
  }
  get a() {
    return this.p(0);
  }
  get b() {
    return this.p(1);
  }
  get c() {
    return this.p(2);
  }
  /** 获取中垂线 */
  static perpBisector(a: Point, b: Point, xT: number, yT: number) {
    const x = (a.x + b.x) / 2;
    const y = (a.y + b.y) / 2;
    const xy = -1 / ((b.y - a.y) / (b.x - a.x));

    if (a.x === b.x) return { x: xT, y };
    if (a.y === b.y) return { x, y: yT };

    return { x: xT, y: (xT - x) * xy + y };
  }

  static transform(a: Point): PointA;
  static transform(a: Point[]): PointA[];
  static transform(a: Point | Point[]): PointA | PointA[] {
    if (Array.isArray(a)) return a.map((v) => this.transform(v));
    return [a.x, a.y];
  }
}
const mp = new MP(m);

export function Update() {
  const dom = document.getElementById(id)!;
  const rect = dom.getBoundingClientRect();

  const mainCanvas = abl.mainCanvas!;

  const minP = mainCanvas.getMousePositionOnAxis({
    clientX: rect.left,
    clientY: rect.top,
  })!;
  const maxP = mainCanvas.getMousePositionOnAxis({
    clientX: rect.right,
    clientY: rect.bottom,
  })!;
  const min = mainCanvas.getAxisValueByPoint(minP.x, minP.y);
  const max = mainCanvas.getAxisValueByPoint(maxP.x, maxP.y);

  const perpBisector = (a: Point, b: Point) =>
    MP.transform([
      MP.perpBisector(a, b, min.xV, min.yV),
      MP.perpBisector(a, b, max.xV, max.yV),
    ]);
  ablp.value = perpBisector(mp.a, mp.b);
  bclp.value = perpBisector(mp.b, mp.c);
  calp.value = perpBisector(mp.c, mp.a);

  abl.value = MP.transform([mp.a, mp.b]);
  bcl.value = MP.transform([mp.b, mp.c]);
  cal.value = MP.transform([mp.c, mp.a]);
}

m.addEventListener("dragg", (event) => {
  Update();
});

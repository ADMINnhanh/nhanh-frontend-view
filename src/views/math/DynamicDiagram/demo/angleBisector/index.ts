import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import { ABC } from "../../tool";

export const id = _Utility_GenerateUUID();

const l = new _Canvas.Line({
  value: [
    [0, -1.464],
    [-2, 2],
    [2, 2],
  ],
  isDraggable: true,
  canCreateOrDeleteHandlePoint: false,
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
export const overlays = [l, abl, bcl, ablp, bclp];

const abc = new ABC(l as any);

export function Update() {
  // const dom = document.getElementById(id)!;
  // const rect = dom.getBoundingClientRect();
  // const mainCanvas = abl.mainCanvas!;
  // const minP = mainCanvas.getMousePositionOnAxis({
  //   clientX: rect.left,
  //   clientY: rect.top,
  // })!;
  // const maxP = mainCanvas.getMousePositionOnAxis({
  //   clientX: rect.right,
  //   clientY: rect.bottom,
  // })!;
  // const min = mainCanvas.getAxisValueByPoint(minP.x, minP.y);
  // const max = mainCanvas.getAxisValueByPoint(maxP.x, maxP.y);
  // const perpBisector = (a: Point, b: Point): PointA[] | undefined => {
  //   const point = LP.perpBisector(
  //     a,
  //     b,
  //     { min: min.xV, max: max.xV },
  //     { min: min.yV, max: max.yV }
  //   );
  //   if (point) {
  //     const { x, y } = point;
  //     return [
  //       [x.min, y.min],
  //       [x.max, y.max],
  //     ];
  //   }
  // };
  // ablp.value = perpBisector(lp.a, lp.b);
  // bclp.value = perpBisector(lp.b, lp.c);
  // calp.value = perpBisector(lp.c, lp.a);
  // abl.value = LP.transform([lp.a, lp.b]);
  // bcl.value = LP.transform([lp.b, lp.c]);
  // cal.value = LP.transform([lp.c, lp.a]);
}

l.addEventListener("dragg", (event) => {
  Update();
});

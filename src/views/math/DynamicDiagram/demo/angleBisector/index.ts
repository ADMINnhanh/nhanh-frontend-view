import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { _Utility_GenerateUUID } from "nhanh-pure-function";

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
const cal = new _Canvas.Line(config("#3bc0cd"));
const calp = new _Canvas.Line(config("#3bc0cd", true));
export const overlays = [l, abl, bcl, cal, ablp, bclp, calp];

// type Point = { x: number; y: number };
// type PointA = [number, number];
// /** 快捷方法 */
// class MP {
//   constructor(private mp: typeof m) {
//     this.mp = mp;
//   }
//   private p(i: number) {
//     const p = this.mp.value![i];
//     return { x: p[0], y: p[1] };
//   }
//   get a() {
//     return this.p(0);
//   }
//   get b() {
//     return this.p(1);
//   }
//   get c() {
//     return this.p(2);
//   }
//   /** 获取中垂线（在给定范围内裁剪） */
//   static perpBisector(
//     a: Point,
//     b: Point,
//     xScope: { min: number; max: number },
//     yScope: { min: number; max: number }
//   ) {
//     // 处理两点重合的情况
//     if (a.x === b.x && a.y === b.y) return;

//     // 计算中点
//     const midX = (a.x + b.x) / 2;
//     const midY = (a.y + b.y) / 2;

//     // 处理垂直线段（中垂线为水平线）
//     if (a.x === b.x) {
//       return {
//         x: { ...xScope },
//         y: { min: midY, max: midY },
//       };
//     }

//     // 处理水平线段（中垂线为垂直线）
//     if (a.y === b.y) {
//       return {
//         x: { min: midX, max: midX },
//         y: { ...yScope },
//       };
//     }

//     // 计算原线段斜率和中垂线斜率
//     const slope = (b.y - a.y) / (b.x - a.x);
//     const perpSlope = -1 / slope;

//     // 收集有效交点
//     const intersections: Point[] = [];

//     // 检查与左右边界的交点
//     const checkXBoundary = (xBoundary: number) => {
//       const y = perpSlope * (xBoundary - midX) + midY;
//       if (y >= yScope.min && y <= yScope.max) {
//         intersections.push({ x: xBoundary, y });
//       }
//     };

//     // 检查与上下边界的交点
//     const checkYBoundary = (yBoundary: number) => {
//       const x = (yBoundary - midY) / perpSlope + midX;
//       if (x >= xScope.min && x <= xScope.max) {
//         intersections.push({ x, y: yBoundary });
//       }
//     };

//     // 计算四条边界的交点
//     checkXBoundary(xScope.min);
//     checkXBoundary(xScope.max);
//     checkYBoundary(yScope.min);
//     checkYBoundary(yScope.max);

//     // 去重（浮点数容差1e-10）
//     const uniquePoints: Point[] = [];
//     for (const p of intersections) {
//       if (
//         !uniquePoints.some(
//           (q) => Math.abs(p.x - q.x) < 1e-10 && Math.abs(p.y - q.y) < 1e-10
//         )
//       ) {
//         uniquePoints.push(p);
//       }
//     }

//     // 处理交点不足的情况
//     if (uniquePoints.length < 2) return;

//     // 计算线段边界框
//     const min = uniquePoints.reduce((p, p1) => {
//       if (!p || p?.x > p1.x) return p1;
//       return p;
//     });
//     const max = uniquePoints.reduce((p, p1) => {
//       if (!p || p?.x < p1.x) return p1;
//       return p;
//     });

//     return {
//       x: { min: min.x, max: max.x },
//       y: { min: min.y, max: max.y },
//     };
//   }

//   static transform(a: Point): PointA;
//   static transform(a: Point[]): PointA[];
//   static transform(a: Point | Point[]): PointA | PointA[] {
//     if (Array.isArray(a)) return a.map((v) => this.transform(v));
//     return [a.x, a.y];
//   }
// }
// const mp = new MP(m);

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
  //   const point = MP.perpBisector(
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
  // ablp.value = perpBisector(mp.a, mp.b);
  // bclp.value = perpBisector(mp.b, mp.c);
  // calp.value = perpBisector(mp.c, mp.a);
  // abl.value = MP.transform([mp.a, mp.b]);
  // bcl.value = MP.transform([mp.b, mp.c]);
  // cal.value = MP.transform([mp.c, mp.a]);
}

l.addEventListener("dragg", (event) => {
  Update();
});

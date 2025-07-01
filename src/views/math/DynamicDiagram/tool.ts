import { _Math_CalculateDistance2D } from "nhanh-pure-function";

export type Point = { x: number; y: number };
export type PointA = [number, number];

export class MyMath {
  /** 是否重合 */
  static isOverlap(...arr: Point[]) {
    let str: string[] = [];
    return arr.some((p) => {
      const s = `${p.x}${p.y}`;
      if (str.includes(s)) return true;
      str.push(s);
    });
  }
  /** 是否轴重合 */
  static isAxisOverlap(...arr: Point[]) {
    let x: number[] = [];
    let y: number[] = [];
    arr.forEach((p) => {
      if (!x.includes(p.x)) x.push(p.x);
      if (!y.includes(p.y)) y.push(p.y);
    });
    return x.length == 1 || y.length == 1;
  }

  /** 获取中垂线（在给定范围内裁剪） */
  static perpBisectorByScope(
    a: Point,
    b: Point,
    xScope: { min: number; max: number },
    yScope: { min: number; max: number }
  ) {
    // 处理两点重合的情况
    if (MyMath.isOverlap(a, b)) return;

    // 计算中点
    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;

    // 处理垂直线段（中垂线为水平线）
    if (a.x === b.x) {
      return {
        x: { ...xScope },
        y: { min: midY, max: midY },
      };
    }

    // 处理水平线段（中垂线为垂直线）
    if (a.y === b.y) {
      return {
        x: { min: midX, max: midX },
        y: { ...yScope },
      };
    }

    // 计算原线段斜率和中垂线斜率
    const slope = (b.y - a.y) / (b.x - a.x);
    const perpSlope = -1 / slope;

    // 收集有效交点
    const intersections: Point[] = [];

    // 检查与左右边界的交点
    const checkXBoundary = (xBoundary: number) => {
      const y = perpSlope * (xBoundary - midX) + midY;
      if (y >= yScope.min && y <= yScope.max) {
        intersections.push({ x: xBoundary, y });
      }
    };

    // 检查与上下边界的交点
    const checkYBoundary = (yBoundary: number) => {
      const x = (yBoundary - midY) / perpSlope + midX;
      if (x >= xScope.min && x <= xScope.max) {
        intersections.push({ x, y: yBoundary });
      }
    };

    // 计算四条边界的交点
    checkXBoundary(xScope.min);
    checkXBoundary(xScope.max);
    checkYBoundary(yScope.min);
    checkYBoundary(yScope.max);

    // 去重（浮点数容差1e-10）
    const uniquePoints: Point[] = [];
    for (const p of intersections) {
      if (
        !uniquePoints.some(
          (q) => Math.abs(p.x - q.x) < 1e-10 && Math.abs(p.y - q.y) < 1e-10
        )
      ) {
        uniquePoints.push(p);
      }
    }

    // 处理交点不足的情况
    if (uniquePoints.length < 2) return;

    // 计算线段边界框
    const min = uniquePoints.reduce((p, p1) => {
      if (!p || p?.x > p1.x) return p1;
      return p;
    });
    const max = uniquePoints.reduce((p, p1) => {
      if (!p || p?.x < p1.x) return p1;
      return p;
    });

    return {
      x: { min: min.x, max: max.x },
      y: { min: min.y, max: max.y },
    };
  }

  /** 获取直角符号 */
  static getRightAngleSymbol(a: Point, b: Point, c: Point) {
    if (MyMath.isOverlap(a, b, c)) return;
    if (MyMath.isAxisOverlap(a, b, c)) return;

    // 计算向量
    const abVec = { x: b.x - a.x, y: b.y - a.y };
    const lenAB = Math.sqrt(abVec.x * abVec.x + abVec.y * abVec.y);

    // 处理长度接近0的情况
    if (lenAB < 1e-10) return;

    // 计算单位向量
    const unitAB = { x: abVec.x / lenAB, y: abVec.y / lenAB };

    // 计算中点
    const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };

    // 计算从mid指向c的向量
    const mcVec = { x: c.x - mid.x, y: c.y - mid.y };

    // 计算中垂线向量（两个可能方向）
    const perp1 = { x: abVec.y, y: -abVec.x }; // 逆时针旋转90度
    const perp2 = { x: -abVec.y, y: abVec.x }; // 顺时针旋转90度

    // 选择与mcVec同向的中垂线
    const dot1 = perp1.x * mcVec.x + perp1.y * mcVec.y;
    const perpVec = dot1 >= 0 ? perp1 : perp2;

    // 归一化中垂线向量
    const lenPerp = Math.sqrt(perpVec.x * perpVec.x + perpVec.y * perpVec.y);
    const unitPerp = {
      x: perpVec.x / lenPerp,
      y: perpVec.y / lenPerp,
    };

    // 计算三条边的长度
    const abLength = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    const bcLength = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2));
    const caLength = Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2));

    // 获取最短边长度
    const minLength = Math.min(abLength, bcLength, caLength);

    // 处理长度接近0的情况
    if (minLength < 1e-10) return;

    // 计算直角符号大小（最短边的1/10）
    const size = Number((minLength / 10).toFixed(2));

    // 计算直角符号的顶点（从中点偏移）
    const apex = {
      x: mid.x + size * unitPerp.x + size * unitAB.x,
      y: mid.y + size * unitPerp.y + size * unitAB.y,
    };

    // 计算符号的两个端点
    const point1 = {
      x: apex.x - size * unitAB.x,
      y: apex.y - size * unitAB.y,
    };

    const point2 = {
      x: apex.x - size * unitPerp.x,
      y: apex.y - size * unitPerp.y,
    };

    return [point1, apex, point2];
  }

  static transform(a: Point): PointA;
  static transform(a: Point[]): PointA[];
  static transform(a: Point | Point[]): PointA | PointA[] {
    if (Array.isArray(a)) return a.map((v) => this.transform(v));
    return [a.x, a.y];
  }
}

type ABCA = {
  value: PointA[];
};
/** 快捷方法 */
export class ABC {
  constructor(private abc: ABCA) {
    this.abc = abc;
  }
  private p(i: number) {
    const p = this.abc.value[i];
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
}

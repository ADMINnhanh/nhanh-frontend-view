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

  /** 获取∠abc的平分线（在给定范围内裁剪） */
  static getAngleBisector(
    a: Point,
    b: Point,
    c: Point,
    xScope: { min: number; max: number },
    yScope: { min: number; max: number }
  ): [Point, Point] | null {
    // 计算从顶点b出发的两个向量
    const ba = { x: a.x - b.x, y: a.y - b.y };
    const bc = { x: c.x - b.x, y: c.y - b.y };

    // 计算向量长度
    const lenBA = Math.sqrt(ba.x * ba.x + ba.y * ba.y);
    const lenBC = Math.sqrt(bc.x * bc.x + bc.y * bc.y);

    // 检查零向量（点重合情况）
    if (lenBA < 1e-10 || lenBC < 1e-10) {
      return null;
    }

    // 归一化向量
    const normBA = { x: ba.x / lenBA, y: ba.y / lenBA };
    const normBC = { x: bc.x / lenBC, y: bc.y / lenBC };

    // 计算角平分线方向向量
    const bisectorDir = {
      x: normBA.x + normBC.x,
      y: normBA.y + normBC.y,
    };

    // 检查方向向量是否为零
    const dirLength = Math.sqrt(
      bisectorDir.x * bisectorDir.x + bisectorDir.y * bisectorDir.y
    );
    if (dirLength < 1e-10) {
      return null;
    }

    // 归一化方向向量
    const dir = {
      x: bisectorDir.x / dirLength,
      y: bisectorDir.y / dirLength,
    };

    // 计算直线与矩形边界的交点
    const intersections: { point: Point; t: number }[] = [];

    // 辅助函数：添加有效交点（带容差检查）
    const addIntersection = (t: number) => {
      const x = b.x + t * dir.x;
      const y = b.y + t * dir.y;

      // 使用容差检查点是否在矩形边界上
      const epsilon = 1e-8;
      const onVerticalEdge =
        Math.abs(x - xScope.min) < epsilon ||
        Math.abs(x - xScope.max) < epsilon;
      const onHorizontalEdge =
        Math.abs(y - yScope.min) < epsilon ||
        Math.abs(y - yScope.max) < epsilon;

      // 检查点是否在矩形范围内（包括边界）
      if (
        (x >= xScope.min || Math.abs(x - xScope.min) < epsilon) &&
        (x <= xScope.max || Math.abs(x - xScope.max) < epsilon) &&
        (y >= yScope.min || Math.abs(y - yScope.min) < epsilon) &&
        (y <= yScope.max || Math.abs(y - yScope.max) < epsilon) &&
        (onVerticalEdge || onHorizontalEdge) // 确保点在边界上
      ) {
        // 精确对齐到边界
        const finalX = onVerticalEdge
          ? Math.abs(x - xScope.min) < epsilon
            ? xScope.min
            : xScope.max
          : x;
        const finalY = onHorizontalEdge
          ? Math.abs(y - yScope.min) < epsilon
            ? yScope.min
            : yScope.max
          : y;

        intersections.push({
          point: { x: finalX, y: finalY },
          t,
        });
      }
    };

    // 计算与垂直边（x = min/max）的交点
    if (Math.abs(dir.x) > 1e-10) {
      const tLeft = (xScope.min - b.x) / dir.x;
      const tRight = (xScope.max - b.x) / dir.x;
      addIntersection(tLeft);
      addIntersection(tRight);
    }

    // 计算与水平边（y = min/max）的交点
    if (Math.abs(dir.y) > 1e-10) {
      const tBottom = (yScope.min - b.y) / dir.y;
      const tTop = (yScope.max - b.y) / dir.y;
      addIntersection(tBottom);
      addIntersection(tTop);
    }

    // 去重相同的交点（基于坐标）
    const uniqueIntersections: { point: Point; t: number }[] = [];
    const epsilon = 1e-8;

    for (const inter of intersections) {
      const isDuplicate = uniqueIntersections.some(
        (u) =>
          Math.abs(u.point.x - inter.point.x) < epsilon &&
          Math.abs(u.point.y - inter.point.y) < epsilon
      );
      if (!isDuplicate) {
        uniqueIntersections.push(inter);
      }
    }

    // 按参数t排序
    uniqueIntersections.sort((a, b) => a.t - b.t);

    // 处理单点情况：尝试扩展范围寻找第二个交点
    if (uniqueIntersections.length === 1) {
      const extendFactor = 1000; // 扩展系数
      const extendedT = [
        uniqueIntersections[0].t - extendFactor,
        uniqueIntersections[0].t + extendFactor,
      ];

      const extendedPoints: Point[] = [];
      for (const t of extendedT) {
        const x = b.x + t * dir.x;
        const y = b.y + t * dir.y;
        if (
          x >= xScope.min &&
          x <= xScope.max &&
          y >= yScope.min &&
          y <= yScope.max
        ) {
          extendedPoints.push({ x, y });
        }
      }

      if (extendedPoints.length > 0) {
        return [uniqueIntersections[0].point, extendedPoints[0]];
      }
    }

    // 有效交点不足时返回null
    if (uniqueIntersections.length < 2) {
      return null;
    }

    // 返回裁剪后的线段端点
    return [
      uniqueIntersections[0].point,
      uniqueIntersections[uniqueIntersections.length - 1].point,
    ];
  }

  /** 获取 ab中垂线 的直角符号 */
  static getRightAngleSymbol(a: Point, b: Point, c: Point) {
    if (MyMath.isOverlap(a, b, c)) return;
    if (MyMath.isAxisOverlap(a, b, c)) return;

    // 计算向量
    const abVec = { x: b.x - a.x, y: b.y - a.y };
    const lenAB = Math.hypot(abVec.x, abVec.y);

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
    const lenPerp = Math.hypot(perpVec.x, perpVec.y);
    const unitPerp = {
      x: perpVec.x / lenPerp,
      y: perpVec.y / lenPerp,
    };

    // 计算三条边的长度
    const abLength = Math.hypot(b.x - a.x, b.y - a.y);
    const bcLength = Math.hypot(c.x - b.x, c.y - b.y);
    const caLength = Math.hypot(a.x - c.x, a.y - c.y);

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

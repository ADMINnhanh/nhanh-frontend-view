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

  /** 获取∠abc的角平分线（在给定范围内裁剪） */
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
  static getPerpendicularBisectorRightAngleSymbol(
    a: Point,
    b: Point,
    c: Point
  ) {
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

  /**
   * 计算∠abc的角平分线上的垂线及直角符号
   * @param {Point} a - 点a
   * @param {Point} b - 点b（角的顶点）
   * @param {Point} c - 点c
   * @returns {Object} 包含ab和bc边上的垂线及直角符号
   */
  static calculatePerpendiculars(a: Point, b: Point, c: Point) {
    // 计算向量和长度
    const vecBA = { x: a.x - b.x, y: a.y - b.y };
    const vecBC = { x: c.x - b.x, y: c.y - b.y };
    const lenAB = Math.sqrt(vecBA.x * vecBA.x + vecBA.y * vecBA.y);
    const lenBC = Math.sqrt(vecBC.x * vecBC.x + vecBC.y * vecBC.y);

    // 单位化向量
    const unitBA = { x: vecBA.x / lenAB, y: vecBA.y / lenAB };
    const unitBC = { x: vecBC.x / lenBC, y: vecBC.y / lenBC };

    // 计算角平分线方向
    const bisector = {
      x: unitBA.x + unitBC.x,
      y: unitBA.y + unitBC.y,
    };
    const lenBisector = Math.sqrt(
      bisector.x * bisector.x + bisector.y * bisector.y
    );
    const unitBisector = {
      x: bisector.x / lenBisector,
      y: bisector.y / lenBisector,
    };

    // 计算角平分线上点D的位置
    const dLength = Math.min(lenAB, lenBC);
    const d: Point = {
      x: b.x + unitBisector.x * dLength,
      y: b.y + unitBisector.y * dLength,
    };

    // 计算垂足
    const calculateFoot = (vec: Point, unit: Point): Point => {
      const vecBD = { x: d.x - b.x, y: d.y - b.y };
      const dot = vecBD.x * unit.x + vecBD.y * unit.y;
      return {
        x: b.x + unit.x * dot,
        y: b.y + unit.y * dot,
      };
    };

    // 计算垂线方向（指向角内侧）
    const calculatePerpDirection = (unit: Point, bisector: Point) => {
      // 初始垂直方向（逆时针旋转90度）
      let perpDir = { x: -unit.y, y: unit.x };

      // 检查方向是否朝向角内侧
      const dotProduct = perpDir.x * bisector.x + perpDir.y * bisector.y;
      if (dotProduct < 0) {
        // 如果方向朝外，取反方向
        perpDir = { x: unit.y, y: -unit.x };
      }
      return perpDir;
    };

    // 计算AB边的垂足和方向
    const footAB = calculateFoot(vecBA, unitBA);
    const perpDirAB = calculatePerpDirection(unitBA, unitBisector);

    // 计算BC边的垂足和方向
    const footBC = calculateFoot(vecBC, unitBC);
    const perpDirBC = calculatePerpDirection(unitBC, unitBisector);

    // 创建垂线段（从D到垂足）
    const createPerpendicular = (d: Point, foot: Point): [Point, Point] => {
      return [d, foot];
    };

    // 创建直角符号
    const createRightAngleSymbol = (
      foot: Point,
      edgeDir: Point, // 边的单位向量（从角顶点b指向边）
      perpDir: Point // 垂线单位向量（朝向角内侧）
    ): [Point, Point, Point] => {
      const symbolLength = Math.min(lenAB, lenBC) * 0.1; // 符号长度为最短边的10%

      // 计算沿边方向的点（从foot向角内侧偏移）
      const alongEdge: Point = {
        x: foot.x - edgeDir.x * symbolLength,
        y: foot.y - edgeDir.y * symbolLength,
      };

      // 计算沿垂线方向的点（从foot向角内侧偏移）
      const alongPerp: Point = {
        x: foot.x + perpDir.x * symbolLength,
        y: foot.y + perpDir.y * symbolLength,
      };

      // 关键修正：创建镜像点，形成直角路径 [alongEdge -> (镜像点) -> alongPerp]
      const mirroredFoot: Point = {
        x: alongEdge.x + perpDir.x * symbolLength,
        y: alongEdge.y + perpDir.y * symbolLength,
      };

      return [alongEdge, mirroredFoot, alongPerp];
    };

    return {
      ab: {
        perpendicular: createPerpendicular(d, footAB),
        rightAngleSymbol: createRightAngleSymbol(footAB, unitBA, perpDirAB),
      },
      bc: {
        perpendicular: createPerpendicular(d, footBC),
        rightAngleSymbol: createRightAngleSymbol(footBC, unitBC, perpDirBC),
      },
    };
  }

  /** 获取直角三角形的直角符号 */
  static getRightAngleSymbol(
    a: Point,
    b: Point,
    c: Point
  ): [Point, Point, Point] {
    // 计算向量AB和AC
    const vecAB = { x: b.x - a.x, y: b.y - a.y };
    const vecAC = { x: c.x - a.x, y: c.y - a.y };

    // 计算向量长度
    const lenAB = Math.sqrt(vecAB.x * vecAB.x + vecAB.y * vecAB.y);
    const lenAC = Math.sqrt(vecAC.x * vecAC.x + vecAC.y * vecAC.y);

    // 处理零向量（理论上不会发生，但确保安全）
    if (lenAB === 0 || lenAC === 0) {
      // 如果任一向量为零，返回三个相同的点（直角符号无法生成）
      return [a, a, a];
    }

    // 计算单位向量
    const unitAB = { x: vecAB.x / lenAB, y: vecAB.y / lenAB };
    const unitAC = { x: vecAC.x / lenAC, y: vecAC.y / lenAC };

    // 计算直角符号的大小（取两向量长度中较小值的20%）
    const d = Math.min(lenAB, lenAC) * 0.2;

    // 计算点D：a + d * unitAB
    const D = {
      x: a.x + d * unitAB.x,
      y: a.y + d * unitAB.y,
    };

    // 计算点E：a + d * unitAC
    const E = {
      x: a.x + d * unitAC.x,
      y: a.y + d * unitAC.y,
    };

    // 计算点F：D + d * unitAC（或等价于 E + d * unitAB）
    const F = {
      x: D.x + d * unitAC.x,
      y: D.y + d * unitAC.y,
    };

    return [D, F, E];
  }

  /** 围绕指定下标点位进行旋转  */
  static rotatePoints(points: Point[], index: number, angle: number): Point[] {
    // 获取旋转中心点
    const center = points[index];
    const a = center.x;
    const b = center.y;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    // 遍历所有点进行旋转计算
    return points.map((point) => {
      // 计算相对于旋转中心的偏移量
      const dx = point.x - a;
      const dy = point.y - b;

      // 应用旋转公式
      const rotatedX = a + dx * cos - dy * sin;
      const rotatedY = b + dx * sin + dy * cos;

      return { x: rotatedX, y: rotatedY };
    });
  }

  static transform(a: Point): PointA;
  static transform(a: Point[]): PointA[];
  static transform(a: Point | Point[]): PointA | PointA[] {
    if (Array.isArray(a)) return a.map((v) => this.transform(v));
    return [a.x, a.y];
  }

  // 将PointA转换为Point
  static inverseTransform(a: PointA): Point;
  static inverseTransform(a: PointA[]): Point[];
  static inverseTransform(a: PointA | PointA[]): Point | Point[] {
    if (Array.isArray(a) && Array.isArray(a[0]))
      return a.map((v) => this.inverseTransform(v as PointA));
    return { x: (a as PointA)[0], y: (a as PointA)[1] };
  }
}

type ABCA = {
  value?: PointA[];
  finalDynamicPosition?: PointA[];
};
/** 快捷方法 */
export class ABC {
  constructor(private abc: ABCA) {
    this.abc = abc;
  }
  private v(i: number) {
    if (!this.abc.value) return { x: 0, y: 0 };
    const v = this.abc.value[i];
    return { x: v[0], y: v[1] };
  }
  get a() {
    return this.v(0);
  }
  get b() {
    return this.v(1);
  }
  get c() {
    return this.v(2);
  }
  private p(i: number) {
    if (!this.abc.finalDynamicPosition) return { x: 0, y: 0 };
    const p = this.abc.finalDynamicPosition[i];
    return { x: p[0], y: p[1] };
  }
  get ap() {
    return this.p(0);
  }
  get bp() {
    return this.p(1);
  }
  get cp() {
    return this.p(2);
  }
  static getMid(a: { value?: PointA }, b: { value?: PointA }): PointA {
    if (!a.value || !b.value) return [0, 0];
    return [(a.value[0] + b.value[0]) / 2, (a.value[1] + b.value[1]) / 2];
  }
  static join(...arr: { value?: PointA }[]) {
    return arr
      .map((v) => v.value && [v.value[0], v.value[1]])
      .filter(Boolean) as PointA[];
  }
}

import type { _Canvas } from "nhanh-pure-function";

export const color = [
  "#91cc75",
  "#fac858",
  "#ee6666",
  "#73c0de",
  "#3ba272",
  "#fc8452",
  "#9a60b4",
  "#ea7ccc",
  "#5470c6",
];
export const FUNCTIONS = [
  "sin",
  "cos",
  "tan",
  "arcsin",
  "arccos",
  "arctan",
] as const;
export type FunctionName = (typeof FUNCTIONS)[number];

/** 单位圆半径 */
let unitCircleRadius = 1;
/** 圆心 */
let center = { x: 0, y: 0 };
/** 正弦 */
function sin(x: number) {
  const radian = (x - center.x) / unitCircleRadius;
  return Math.sin(radian) * unitCircleRadius;
}
/** 余弦 */
function cos(x: number) {
  const radian = (x - center.x) / unitCircleRadius;
  return Math.cos(radian) * unitCircleRadius;
}
/** 正切 */
function tan(x: number) {
  const maxAmplitude = unitCircleRadius * 2; // 可视范围上下限

  const radian = (x - center.x) / unitCircleRadius;
  const tanValue = Math.tan(radian);

  // 判断是否超出可视范围（接近渐近线）
  const outOfRange = Math.abs(tanValue * unitCircleRadius) > maxAmplitude;

  if (outOfRange) return undefined;
  return tanValue * unitCircleRadius;
}
function cycleLimit(x: number): number {
  x = (x - center.x) / unitCircleRadius;
  return ((((x + 1) % 2) + 2) % 2) - 1;
}
/** 反正弦 */
function arcsin(x: number) {
  const value = cycleLimit(x);
  return Math.asin(value) * unitCircleRadius;
}
/** 反余弦 */
function arccos(x: number) {
  const value = cycleLimit(x);
  return (Math.acos(value) - 3.14 / 2) * unitCircleRadius;
}
/** 反正切 */
function arctan(x: number) {
  const value = cycleLimit(x);
  return Math.atan(value) * unitCircleRadius;
}

const FUNCTION_MAP: Record<
  FunctionName,
  {
    compute: (x: number) => number | undefined;
    colorIndex: number;
  }
> = {
  sin: { compute: sin, colorIndex: 0 },
  cos: { compute: cos, colorIndex: 1 },
  tan: { compute: tan, colorIndex: 2 },
  arcsin: { compute: arcsin, colorIndex: 3 },
  arccos: { compute: arccos, colorIndex: 4 },
  arctan: { compute: arctan, colorIndex: 5 },
};

export default function draw(
  canvas: _Canvas,
  ctx: CanvasRenderingContext2D,
  functions: FunctionName[],
) {
  const { percentage, axisConfig } = canvas;
  unitCircleRadius = (percentage * axisConfig.min) / axisConfig.count;
  center = canvas.center;
  ctx.lineWidth = 2;

  const width = ctx.canvas.width;
  let baseY = center.y - unitCircleRadius * ((functions.length * 4) / 2 - 2);

  const list: Partial<
    Record<FunctionName, { y: (number | undefined)[]; color: string }>
  > = {};

  for (const fnName of functions) {
    list[fnName] = {
      y: [],
      color: color[FUNCTION_MAP[fnName].colorIndex],
    };
  }

  for (let x = 0; x < width; x++) {
    for (const fnName of functions) {
      const y = FUNCTION_MAP[fnName].compute(x);
      list[fnName]?.y.push(y);
    }
  }

  for (const key in list) {
    if (Object.prototype.hasOwnProperty.call(list, key)) {
      const item = list[key as FunctionName]!;
      ctx.strokeStyle = item.color;
      ctx.beginPath();

      let drawing = false; // 是否正在绘制路径

      item.y.forEach(function (y, x) {
        if (y === undefined) {
          drawing = false;
        } else if (drawing) {
          ctx.lineTo(x, baseY - y);
        } else {
          ctx.moveTo(x, baseY - y);
          drawing = true;
        }
      });

      ctx.stroke();
      baseY += unitCircleRadius * 4;
    }
  }
}

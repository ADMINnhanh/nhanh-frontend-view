import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import {
  _Animate_CreateOscillator,
  _Animate_NumericTransition,
  _Browser_GetFrameRate,
  _Math_CalculateDistance2D,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { ABC, MyMath } from "@/views/math/DynamicDiagram/tool";
import Media from "@/stores/media";

export const id = _Utility_GenerateUUID();

const GOLDEN_RATIO = 0.61803;

function GetGoldenRatioX(a: [number, number], b: [number, number]) {
  return a[0] + (b[0] - a[0]) * GOLDEN_RATIO;
}
function GetGoldenRatioY(a: [number, number], b: [number, number]) {
  return a[1] + (b[1] - a[1]) * GOLDEN_RATIO;
}
function GetGoldenRatio(
  a: [number, number],
  b: [number, number]
): [number, number] {
  if (a[0] == b[0]) return [a[0], GetGoldenRatioY(a, b)];
  return [GetGoldenRatioX(a, b), a[1]];
}

const text_config = (text: string, value?: [number, number]) => ({
  value,
  text,
  offset: { x: 0, y: -25 },
  style: { size: 20 },
  isInteractive: false,
});
const t_a = new _Canvas.Text(text_config("A", [-4, -5]));
const t_b = new _Canvas.Text(text_config("B", [4, -5]));
const t_p = new _Canvas.Text(
  text_config("P", GetGoldenRatio(t_a.value!, t_b.value!))
);
const texts = [t_a, t_b, t_p];

const l = new _Canvas.Line({
  value: [t_a.value!, t_b.value!],
  isInteractive: false,
});

const p_a = new _Canvas.Point({ value: t_a.value });
const p_b = new _Canvas.Point({ value: t_b.value });
const p_p = new _Canvas.Point({ value: t_p.value });
const points = [p_a, p_b, p_p];

const m_l = t_b.value![0] - t_a.value![0];
const m_l_g = t_p.value![0] - t_a.value![0];
const m = new _Canvas.Polygon({
  value: [
    [-(m_l_g / 2), -(m_l / 2)],
    [m_l_g / 2, m_l / 2],
  ],
  isRect: true,
  isInteractive: false,
  style: { fill: "transparent" },
});

const ms: (typeof m)[] = [];
const arcs = [];

let prev = m.value!;
for (let i = 0; i < 16; i++) {
  const value: any = [];

  const cycle = Math.ceil((ms.length + 1) / 2) % 2;

  let startAngle = 0,
    endAngle = 0,
    radiusValue = 0,
    arcValue = [0, 0] as [number, number];

  if ((i + 1) % 2 > 0) {
    if (cycle) {
      const y = GetGoldenRatioY(prev[1], prev[0]);
      value.push(prev[0], [prev[1][0], y]);

      arcValue = [value[0][0], value[1][1]];
      endAngle = Math.PI / 2;
    } else {
      const y = GetGoldenRatioY(prev[0], prev[1]);
      value.push([prev[0][0], y], prev[1]);

      arcValue = [value[1][0], value[0][1]];
      startAngle = Math.PI;
      endAngle = Math.PI * 1.5;
    }
    radiusValue = value[1][0] - value[0][0];
  } else {
    if (cycle) {
      const x = GetGoldenRatioX(prev[1], prev[0]);
      value.push(prev[0], [x, prev[1][1]]);

      arcValue = value[1];
      startAngle = Math.PI * 1.5;
    } else {
      const x = GetGoldenRatioX(prev[0], prev[1]);
      value.push([x, prev[0][1]], prev[1]);

      arcValue = value[0];
      startAngle = Math.PI / 2;
      endAngle = Math.PI;
    }
    radiusValue = value[1][1] - value[0][1];
  }

  prev = value;

  const _m = new _Canvas.Polygon({
    value,
    isRect: true,
    style: { fill: "transparent" },
    isInteractive: false,
  });

  const arc = new _Canvas.Arc({
    isInteractive: false,
    startAngle,
    endAngle,
    radiusValue,
    value: arcValue,
  });
  ms.push(_m);
  arcs.push(arc);
}

export const overlays = [l, m, ...texts, ...points, ...ms, ...arcs];

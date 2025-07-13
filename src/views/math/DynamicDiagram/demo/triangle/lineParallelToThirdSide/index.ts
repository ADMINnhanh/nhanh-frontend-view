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

const text_config = (text: string, x: number, y: number) => ({
  text,
  offset: { x, y },
  style: { size: 20 },
  isInteractive: false,
});
const a_text = new _Canvas.Text({
  value: [0, -2],
  ...text_config("A", 0, -20),
});
const b_text = new _Canvas.Text({
  value: [-3, 2],
  ...text_config("B", -15, 15),
});
const c_text = new _Canvas.Text({
  value: [2, 2],
  ...text_config("C", 15, 15),
});
const d_text = new _Canvas.Text({
  value: ABC.getMid(a_text, b_text),
  ...text_config("D", -15, -15),
});
const e_text = new _Canvas.Text({
  value: ABC.getMid(a_text, c_text),
  ...text_config("E", 15, -15),
});
const f_text = new _Canvas.Text({
  value: b_text.value,
  ...text_config("F", 0, 15),
});
const texts = [a_text, b_text, c_text, d_text, e_text, f_text];

const t = new _Canvas.Polygon({
  value: ABC.join(a_text, b_text, c_text),
  isInteractive: false,
});
const t_d = new _Canvas.Polygon({
  value: ABC.join(d_text, e_text, f_text),
  isInteractive: false,
  style: { fill: "#C73A64" + 80 },
});
const polygons = [t, t_d];

const line_config = (color: string, dash = false, width = 4) => ({
  isInteractive: false,
  style: { stroke: { color, dash, width } },
});
const l_eb = new _Canvas.Line({
  value: ABC.join(e_text, b_text),
  ...line_config("#C73A64", true, 2),
});
const l_dc = new _Canvas.Line({
  value: ABC.join(d_text, c_text),
  ...line_config("#C73A64", true, 2),
});
const lines = [l_eb, l_dc];

export const overlays = [...polygons, ...lines, ...texts];

let angle = 0;

export function Update() {
  const percentage = angle / 180;
  const x = percentage * c_text.value![0] + (1 - percentage) * b_text.value![0];
  f_text.value![0] = x;
  f_text.value = [...f_text.value!];
  t_d.value = ABC.join(d_text, e_text, f_text);
}

const oscillator = _Animate_CreateOscillator(0, 180, 180, (v) => {
  if (v == 0 || v == 180) oscillator.pause();
  angle = v;
  Update();
});
setTimeout(() => {
  const step = (Media.value.fps / 60) * 180;
  oscillator.updateParams(0, 180, step);
}, 1200);

export function Transform() {
  if (oscillator.isPlaying()) oscillator.pause();
  else oscillator.play();
}

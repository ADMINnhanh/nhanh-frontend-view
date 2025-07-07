import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import {
  _Math_CalculateDistance2D,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { ABC, MyMath } from "@/views/math/DynamicDiagram/tool";

export const id = _Utility_GenerateUUID();

const text_config = (text: string, x: number, y: number) => ({
  text,
  offset: { x, y },
  style: { size: 20 },
  isInteractive: false,
});
const a_text = new _Canvas.Text({
  value: [1, -2],
  ...text_config("A", 0, -20),
});
const b_text = new _Canvas.Text({
  value: [-2, 2],
  ...text_config("B", -15, 15),
});
const c_text = new _Canvas.Text({
  value: [3, 2],
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
  value: [2 * e_text.value![0] - d_text.value![0], e_text.value![1]],
  ...text_config("F", 15, -15),
});

export const texts = [a_text, b_text, c_text, d_text, e_text, f_text];

const t = new _Canvas.Polygon({
  value: ABC.join(d_text, b_text, c_text, e_text),
  isInteractive: false,
});
const t_d = new _Canvas.Polygon({
  value: ABC.join(d_text, a_text, e_text),
  isInteractive: false,
  style: { fill: "#B5B3A6" + 80, stroke: { color: "transparent" } },
});
const polygons = [t, t_d];

const line_config = (color: string) => ({
  isInteractive: false,
  style: { stroke: { color } },
});
const l = new _Canvas.Line({
  value: ABC.join(d_text, a_text, e_text, f_text, c_text),
  isInteractive: false,
  style: { stroke: { dash: true } },
});
const l_ab_s = new _Canvas.Line({
  value: ABC.join(a_text, d_text),
  ...line_config("#C73A64"),
});
const l_ae_s = new _Canvas.Line({
  value: ABC.join(a_text, e_text),
  ...line_config("#ff69b4"),
});
const l_de_s = new _Canvas.Line({
  value: ABC.join(d_text, e_text),
  ...line_config("#8a2be2"),
});
const lines = [l, l_ab_s, l_ae_s, l_de_s];

export const overlays = [...polygons, ...lines, ...texts];

export function Update() {}

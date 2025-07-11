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

//#region 定理1
const text_config = (text: string, x: number, y: number) => ({
  text,
  offset: { x, y },
  style: { size: 20 },
  isInteractive: false,
});
const a_text = new _Canvas.Text({
  value: [-4, -2],
  ...text_config("A", 0, -20),
});
const b_text = new _Canvas.Text({
  value: [-7, 2],
  ...text_config("B", -15, 15),
});
const c_text = new _Canvas.Text({
  value: [-2, 2],
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

export const t = new _Canvas.Polygon({
  value: ABC.join(d_text, b_text, c_text, e_text),
  isInteractive: false,
});
const t_d = new _Canvas.Polygon({
  value: ABC.join(d_text, a_text, e_text),
  isInteractive: false,
  style: { fill: "#73c09a" + 80 },
});
const polygons = [t, t_d];

const line_config = (color: string, dash = false, width = 4) => ({
  isInteractive: false,
  style: { stroke: { color, dash, width } },
});
const l_ab_s = new _Canvas.Line({
  value: ABC.join(a_text, b_text),
  ...line_config("#ff0000", true),
});
const l_fc_s = new _Canvas.Line({
  value: ABC.join(f_text, c_text),
  ...line_config("#ff0000", true),
});
const l_ae_s = new _Canvas.Line({
  value: ABC.join(a_text, e_text),
  ...line_config("#0ed6ea", true),
});
const l_ec_s = new _Canvas.Line({
  value: ABC.join(e_text, c_text),
  ...line_config("#0ed6ea", true),
});
const l_de_s = new _Canvas.Line({
  value: ABC.join(d_text, e_text),
  ...line_config("#8a2be2", true),
});
const l_ef_s = new _Canvas.Line({
  value: ABC.join(e_text, f_text),
  ...line_config("#8a2be2", true),
});

const l_ad = new _Canvas.Line({
  value: ABC.join(a_text, d_text),
  ...line_config("#ff0000"),
});
const l_ae = new _Canvas.Line({
  value: ABC.join(a_text, e_text),
  ...line_config("#0ed6ea"),
});
const l_de = new _Canvas.Line({
  value: ABC.join(d_text, e_text),
  ...line_config("#8a2be2"),
});
const lines = [
  l_ab_s,
  l_fc_s,
  l_ae_s,
  l_ec_s,
  l_de_s,
  l_ef_s,
  l_ad,
  l_ae,
  l_de,
];

const overlays1 = [...polygons, ...lines, ...texts];
//#endregion

//#region 定理2
const a1_text = new _Canvas.Text({
  value: [4, -2],
  ...text_config("A`", 0, -20),
});
const b1_text = new _Canvas.Text({
  value: [1, 2],
  ...text_config("B`", -15, 15),
});
const c1_text = new _Canvas.Text({
  value: [6, 2],
  ...text_config("C`", 15, 15),
});
const d1_text = new _Canvas.Text({
  value: ABC.getMid(a1_text, b1_text),
  ...text_config("D`", -15, -15),
});
const e1_text = new _Canvas.Text({
  value: ABC.getMid(a1_text, c1_text),
  ...text_config("E`", 15, -15),
});
const f1_text = new _Canvas.Text({
  value: b1_text.value,
  ...text_config("F`", 7, 15),
});
const texts1 = [a1_text, b1_text, c1_text, d1_text, e1_text, f1_text];

const t1 = new _Canvas.Polygon({
  value: ABC.join(a1_text, b1_text, c1_text),
  isInteractive: false,
});
const t1_d = new _Canvas.Polygon({
  value: ABC.join(d1_text, e1_text, f1_text),
  isInteractive: false,
  style: { fill: "#C73A64" + 80 },
});
const polygons1 = [t1, t1_d];

const l_eb = new _Canvas.Line({
  value: ABC.join(e1_text, b1_text),
  ...line_config("#C73A64", true, 2),
});
const l_dc = new _Canvas.Line({
  value: ABC.join(d1_text, c1_text),
  ...line_config("#C73A64", true, 2),
});
const lines1 = [l_eb, l_dc];

const overlays2 = [...polygons1, ...lines1, ...texts1];
//#endregion

export const overlays = [...overlays1, ...overlays2];

let angle = 0;

export function Update() {
  const _val = MyMath.inverseTransform(ABC.join(d_text, a_text, e_text));
  const val = MyMath.transform(
    MyMath.rotatePoints(_val, 2, (angle * Math.PI) / 180)
  );

  t_d.value = val;
  l_ad.value = [val[1], val[0]];
  l_ae.value = [val[1], val[2]];
  l_de.value = [val[0], val[2]];

  const percentage = angle / 180;
  const x =
    percentage * c1_text.value![0] + (1 - percentage) * b1_text.value![0];
  f1_text.value![0] = x;
  f1_text.value = [...f1_text.value!];
  t1_d.value = ABC.join(d1_text, e1_text, f1_text);
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

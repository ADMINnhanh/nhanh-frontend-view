import {
  _Animate_CreateOscillator,
  _Animate_NumericTransition,
  _Canvas,
  _Math_CalculateDistance2D,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { ABC, MyMath } from "@/views/math/DynamicDiagram/tool";
import Media from "@/stores/media";
import { ref } from "vue";

export const id = _Utility_GenerateUUID();

const text_config = (text: string, x: number, y: number) => ({
  text,
  offset: { x, y },
  style: { size: 20 },
  isInteractive: false,
});
const a_text = new _Canvas.Text({
  value: [0, 2],
  ...text_config("A", 0, -20),
});
const b_text = new _Canvas.Text({
  value: [-3, -2],
  ...text_config("B", -15, 15),
});
const c_text = new _Canvas.Text({
  value: [2, -2],
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
  value: [
    c_text.value![0] - e_text.value![0] + d_text.value![0],
    b_text.value![1],
  ],
  ...text_config("F", 0, 15),
});
const g_text = new _Canvas.Text({
  value: b_text.value,
  ...text_config("G", 0, 15),
});
const texts = [a_text, b_text, c_text, d_text, e_text, f_text, g_text];

const t = new _Canvas.Polygon({
  value: ABC.join(a_text, b_text, c_text),
  isInteractive: false,
});
const t_d = new _Canvas.Polygon({
  value: ABC.join(d_text, e_text, g_text),
  isInteractive: false,
  style: { fill: "#C73A64" + 80, stroke: { color: "transparent" } },
});
const polygons = [t, t_d];

const line_config = (color: string, dash = false, width = 4) => ({
  isInteractive: false,
  style: { stroke: { color, dash, width } },
});
const l_de = new _Canvas.Line({
  isInteractive: false,
  style: { stroke: { dash: true, width: 2 } },
});
const l_eb = new _Canvas.Line({
  value: ABC.join(e_text, b_text),
  ...line_config("#C73A64", true, 2),
});
const l_dc = new _Canvas.Line({
  value: ABC.join(d_text, c_text),
  ...line_config("#C73A64", true, 2),
});
const l_df = new _Canvas.Line({
  value: ABC.join(d_text, f_text),
  ...line_config("#C73A64", true, 2),
});
const l_bd = new _Canvas.Line({
  ...line_config("#C73A64", true, 2),
});
const l_ce = new _Canvas.Line({
  ...line_config("#C73A64", true, 2),
});
const lines = [l_de, l_eb, l_dc, l_df, l_bd, l_ce];

export const overlays = [polygons, lines, texts];

export const Y = ref(0);
let percentage = 0,
  steps = 200;

const X = {
  abv: {} as { [key: number]: number },
  ab(y: number) {
    if (String(y) in X.abv) return X.abv[y];

    const x = MyMath.calculateXFromY(
      MyMath.inverseTransform(a_text.value!),
      MyMath.inverseTransform(b_text.value!),
      y
    );
    return (X.abv[y] = x);
  },
  acv: {} as { [key: number]: number },
  ac(y: number) {
    if (String(y) in X.acv) return X.acv[y];

    const x = MyMath.calculateXFromY(
      MyMath.inverseTransform(a_text.value!),
      MyMath.inverseTransform(c_text.value!),
      y
    );
    return (X.acv[y] = x);
  },
};
export function Update() {
  const y = Y.value;

  d_text.value = [X.ab(y), y];
  e_text.value = [X.ac(y), y];

  if (y >= 2 || y == -2) {
    f_text.value = g_text.value = l_df.value = undefined;
  } else {
    l_dc.value = ABC.join(d_text, c_text);
    l_eb.value = ABC.join(e_text, b_text);
  }

  if (y > 2) {
    l_de.value = [
      [X.ac(y) - 1, y],
      [X.ab(y) + 1, y],
    ];

    /** BD */ {
      const x = X.ab(y + 0.5);
      l_bd.value = [a_text.value!, [x, y + 0.5]];
    }
    /** CE */ {
      const x = X.ac(y + 0.5);
      l_ce.value = [a_text.value!, [x, y + 0.5]];
    }

    const x =
      percentage * d_text.value![0] + (1 - percentage) * e_text.value![0];
    const v = ABC.join(b_text, c_text);
    v.push([x, d_text.value![1]]);
    t_d.value = v;

    l_dc.value = ABC.join(d_text, c_text);
    l_eb.value = ABC.join(e_text, b_text);
  } else if (2 == y) {
    l_de.value = [
      [X.ac(y) - 1, y],
      [X.ab(y) + 1, y],
    ];
    t_d.value = l_ce.value = l_bd.value = undefined;
  } else if (2 > y && y > -2) {
    l_de.value = [
      [X.ab(y) - 1, y],
      [X.ac(y) + 1, y],
    ];

    const x =
      percentage * c_text.value![0] + (1 - percentage) * b_text.value![0];
    g_text.value = [x, c_text.value![1]];
    t_d.value = ABC.join(d_text, e_text, g_text);

    f_text.value = [
      c_text.value![0] - e_text.value![0] + d_text.value![0],
      c_text.value![1],
    ];
    l_df.value = ABC.join(d_text, f_text);
    l_ce.value = l_bd.value = undefined;
  } else {
    l_de.value = [
      [X.ab(y) - 1, y],
      [X.ac(y) + 1, y],
    ];

    /** BD */ {
      const x = X.ab(y - 0.5);
      l_bd.value = [b_text.value!, [x, y - 0.5]];
    }
    /** CE */ {
      const x = X.ac(y - 0.5);
      l_ce.value = [c_text.value!, [x, y - 0.5]];
    }

    const x =
      percentage * e_text.value![0] + (1 - percentage) * d_text.value![0];
    g_text.value = [x, e_text.value![1]];
    t_d.value = ABC.join(b_text, c_text, g_text);

    f_text.value = [
      e_text.value![0] - c_text.value![0] + b_text.value![0],
      e_text.value![1],
    ];
    l_df.value = ABC.join(b_text, f_text);
  }
}

const oscillator = _Animate_CreateOscillator(
  0,
  1,
  steps,
  (v) => {
    if (v == 0 || v == 1 || Y.value == -2 || Y.value == 2) oscillator.pause();
    percentage = v;
    Update();
  },
  4
);

Media.value.fpsCallback((fps) => {
  const step = (fps / 60) * steps;
  steps = step;
  oscillator.updateParams(0, 1, step);
});

export function Transform() {
  if (oscillator.isPlaying()) oscillator.pause();
  else if (!(Y.value == -2 || Y.value == 2)) oscillator.play();
}

import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import {
  _Animate_NumericTransition,
  _Math_CalculateDistance2D,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { ABC, MyMath } from "@/views/math/DynamicDiagram/tool";
import { ref } from "vue";

export const id = _Utility_GenerateUUID();

export const J_ABC = ref(45);
const BC = 5;

const t = new _Canvas.Polygon({
  value: [
    [0, 0],
    [-BC / 2, 0],
    [BC / 2, 0],
  ],
  isInteractive: false,
});
const tra = new _Canvas.Line({
  isInteractive: false,
  style: { stroke: { color: "#18a058" } },
});
const polygon_config = (color?: string, rect?: boolean) => ({
  ...(color
    ? {
        style: {
          fill: color + 80,
          stroke: { color: color + 80 },
        },
      }
    : {}),
  isRect: rect,
  isInteractive: false,
});
const ab_polygon = new _Canvas.Polygon(polygon_config("#8a2be2"));
const ac_polygon = new _Canvas.Polygon(polygon_config("#ff69b4"));

const bc_polygon_ab = new _Canvas.Polygon(polygon_config("#8a2be2", true));
const bc_polygon_ac = new _Canvas.Polygon(polygon_config("#ff69b4", true));

const ahb_polygon = new _Canvas.Polygon({
  ...polygon_config("#ff0033"),
  isVisible: false,
});

const polygon = [
  t,
  tra,
  ab_polygon,
  ac_polygon,
  bc_polygon_ab,
  bc_polygon_ac,
  ahb_polygon,
];

const text_config = (text: string, x = 0, y = 0) => ({
  text,
  offset: { x, y },
  style: { size: 20 },
  isInteractive: false,
});
const a_text = new _Canvas.Text(text_config("A", 0, -15));
const b_text = new _Canvas.Text({
  value: [-BC / 2, 0],
  ...text_config("B", -10, 15),
});
const c_text = new _Canvas.Text({
  ...text_config("C", 10, 15),
  value: [BC / 2, 0],
});
const d_text = new _Canvas.Text({
  ...text_config("D", -10, 15),
  value: [-BC / 2, BC],
});
const e_text = new _Canvas.Text({
  ...text_config("E", 10, 15),
  value: [BC / 2, BC],
});
const f_text = new _Canvas.Text(text_config("F", 10, 15));
const g_text = new _Canvas.Text(text_config("G", 10, 15));
const h_text = new _Canvas.Text(text_config("H", -10, 15));
const i_text = new _Canvas.Text(text_config("I", -10, -15));
const j_text = new _Canvas.Text(text_config("J", 10, 15));
const k_text = new _Canvas.Text(text_config("K", 10, -15));

const text = [
  a_text,
  b_text,
  c_text,
  d_text,
  e_text,
  f_text,
  g_text,
  h_text,
  i_text,
  j_text,
  k_text,
];

const line_config = () => ({
  isInteractive: false,
  style: { stroke: { dash: true } },
});
const ah_line = new _Canvas.Line(line_config());
const ad_line = new _Canvas.Line(line_config());
const ag_line = new _Canvas.Line(line_config());
const bg_line = new _Canvas.Line(line_config());
const hc_line = new _Canvas.Line(line_config());
const line = [ah_line, ad_line, ag_line, bg_line, hc_line];

export const overlays = [...text, ...line, ...polygon];

const abc = new ABC(t as any);

export function Update() {
  const j = (J_ABC.value * Math.PI) / 180;
  const cos_b = Math.cos(j);
  const ab = cos_b * BC;

  const bp = ab * cos_b;
  const h = ab * Math.sin(j);

  a_text.value = [-BC / 2 + bp, -h];

  const x = -BC / 2 + (ab * ab) / BC;
  f_text.value = [x, 0];
  g_text.value = [x, BC];

  /** 直角三角形 */ {
    t.value![0] = a_text.value;
    t.value = [...t.value!];
    tra.value =
      J_ABC.value == 0 || J_ABC.value == 90
        ? undefined
        : MyMath.transform(MyMath.getRightAngleSymbol(abc.a, abc.b, abc.c));
  }

  h_text.value = [abc.b.x - (abc.b.y - abc.a.y), abc.b.y + (abc.b.x - abc.a.x)];
  i_text.value = [abc.a.x - (abc.b.y - abc.a.y), abc.a.y + (abc.b.x - abc.a.x)];
  j_text.value = [abc.c.x + (abc.c.y - abc.a.y), abc.c.y - (abc.c.x - abc.a.x)];
  k_text.value = [abc.a.x + (abc.c.y - abc.a.y), abc.a.y - (abc.c.x - abc.a.x)];

  ah_line.value = [a_text.value, h_text.value];
  ad_line.value = [a_text.value, d_text.value!];
  ag_line.value = [a_text.value, g_text.value];
  bg_line.value = [b_text.value!, g_text.value];
  hc_line.value = [h_text.value, c_text.value!];

  ahb_polygon.value = [a_text.value, h_text.value, b_text.value!];
  ahb_polygon.isVisible = false;

  ab_polygon.value = [i_text.value, a_text.value, b_text.value!, h_text.value];
  ac_polygon.value = [k_text.value, a_text.value, c_text.value!, j_text.value];

  /** bc_polygon 面 */ {
    bc_polygon_ab.value =
      J_ABC.value == 90 ? undefined : [b_text.value!, g_text.value!];
    bc_polygon_ac.value =
      J_ABC.value == 0 ? undefined : [f_text.value, e_text.value!];
  }
}

export const isPlay = ref(false);

export function Tips() {
  if (J_ABC.value == 0 || J_ABC.value == 90) {
    J_ABC.value = 45;
    Update();
  }

  ahb_polygon.value = [a_text.value!, h_text.value!, b_text.value!];

  isPlay.value = true;
  ahb_polygon.isVisible = true;

  const startValue = a_text.value![0];
  const targetValue = c_text.value![0];
  const yValue = c_text.value![1] - a_text.value![1];

  const timeout = 500;
  setTimeout(() => {
    _Animate_NumericTransition(
      startValue,
      targetValue,
      150,
      (x) => {
        const y =
          ((x - startValue) / (targetValue - startValue)) * yValue +
          a_text.value![1];
        ahb_polygon.value![0] = [x, y];
        ahb_polygon.value = [...ahb_polygon.value!];
        if (x == targetValue) {
          const oldV = [...ahb_polygon.value!];
          setTimeout(() => {
            _Animate_NumericTransition(0, 90, 90, (r) => {
              ahb_polygon.value = MyMath.transform(
                MyMath.rotatePoints(
                  MyMath.inverseTransform(oldV),
                  2,
                  (r * Math.PI) / 180
                )
              );
              if (r == 90) {
                const startValue = ahb_polygon.value![1][1];
                const targetValue = g_text.value![1];
                setTimeout(() => {
                  _Animate_NumericTransition(
                    startValue,
                    targetValue,
                    150,
                    (y) => {
                      ahb_polygon.value![1][1] = y;
                      ahb_polygon.value = [...ahb_polygon.value!];
                      if (y == targetValue) isPlay.value = false;
                    },
                    6
                  );
                }, timeout);
              }
            });
          }, timeout);
        }
      },
      6
    );
  }, timeout * 2);
}

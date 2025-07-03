import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import {
  _Math_CalculateDistance2D,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { ABC, MyMath } from "@/views/math/DynamicDiagram/tool";
import { ref } from "vue";

export const id = _Utility_GenerateUUID();

/**
 * ∠BAC为直角（90°）
 * 
          A
         /|\
        / | \
       /  |  \
      /   |   \
     /    |h   \
    /     |     \
   B------P------C
   
*/

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
  style: { stroke: { color: "#18a058", width: 2 } },
});

// "#3bc0cd"
const color_m = {
  ab: {
    fill: "#8a2be2" + 80,
    stroke: { color: "#8a2be2" + 80 },
  },
  ac: {
    fill: "#ff69b4" + 80,
    stroke: { color: "#ff69b4" + 80 },
  },
};

const abm = new _Canvas.Polygon({
  isInteractive: false,
  style: color_m.ab,
});
const acm = new _Canvas.Polygon({
  isInteractive: false,
  style: color_m.ac,
});

const bcm_ab = new _Canvas.Polygon({
  isInteractive: false,
  style: color_m.ab,
  isRect: true,
});
const bcm_ac = new _Canvas.Polygon({
  isInteractive: false,
  style: color_m.ac,
  isRect: true,
});

export const overlays = [t, tra, abm, acm, bcm_ab, bcm_ac];

const abc = new ABC(t as any);

export function Update() {
  const j = (J_ABC.value * Math.PI) / 180;
  const cos_b = Math.cos(j);
  const ab = cos_b * BC;

  const bp = ab * cos_b;
  const h = ab * Math.sin(j);

  /** 直角三角形 */ {
    t.value![0] = [-BC / 2 + bp, -h];
    t.value = [...t.value!];

    tra.value =
      J_ABC.value == 0 || J_ABC.value == 90
        ? undefined
        : MyMath.transform(MyMath.getRightAngleSymbol(abc.a, abc.b, abc.c));
  }

  /** bcm 面 */ {
    const x = -BC / 2 + (ab * ab) / BC;

    bcm_ab.value = J_ABC.value == 90 ? undefined : [t.value![1], [x, BC]];
    bcm_ac.value =
      J_ABC.value == 0
        ? undefined
        : [
            [x, 0],
            [t.value![1][0] + BC, t.value![1][1] + BC],
          ];
  }
}

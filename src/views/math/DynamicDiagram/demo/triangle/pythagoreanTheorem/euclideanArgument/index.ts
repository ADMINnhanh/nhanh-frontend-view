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
export const overlays = [t, tra];

const abc = new ABC(t as any);

export function Update() {
  const j = (J_ABC.value * Math.PI) / 180;
  const cos_b = Math.cos(j);
  const ab = cos_b * BC;

  const bp = ab * cos_b;
  const h = ab * Math.sin(j);

  t.value![0] = [-BC / 2 + bp, -h];
  t.value = [...t.value!];

  tra.value =
    J_ABC.value == 0 || J_ABC.value == 90
      ? []
      : MyMath.transform(MyMath.getRightAngleSymbol(abc.a, abc.b, abc.c));
}

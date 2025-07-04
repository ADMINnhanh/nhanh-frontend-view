import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import {
  _Math_CalculateDistance2D,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { ABC, MyMath } from "@/views/math/DynamicDiagram/tool";
import { ref } from "vue";
import { Settings } from "@/components/popups/components/Settings";

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
  style: { stroke: { color: "#18a058", width: 2 } },
});

const abc = new ABC(t as any);

const text_config = (text: string, x = 0, y = 0) => ({
  text,
  offset: { x, y },
  style: { size: 25 },
  isInteractive: false,
});
const a_text = new _Canvas.Text(text_config("A", 0, -25));
const b_text = new _Canvas.Text({
  value: [-BC / 2, 0],
  ...text_config("B", -10, 15),
});
const c_text = new _Canvas.Text({
  ...text_config("C", 10, 15),
  value: [BC / 2, 0],
});
const text = [a_text, b_text, c_text];

const bc_arc = new _Canvas.Arc({
  value: [0, 0],
  radiusValue: BC / 2,
  startAngle: Math.PI,
  endAngle: 0,
  zIndex: 1,
  style: { stroke: { width: 2 } },
});

const _canvas = document.createElement("canvas");
const _ctx = _canvas.getContext("2d")!;
const ab_ac_arc = new _Canvas.Custom({
  value: [[0, 0]],
  draw(ctx) {
    const mainCanvas = ab_ac_arc.mainCanvas!;
    _canvas.width = mainCanvas.rect.width;
    _canvas.height = mainCanvas.rect.height;

    const theme = Settings.value.theme;
    const line_style = mainCanvas.style[theme].line.stroke;

    _ctx.strokeStyle = line_style.color;
    _ctx.lineWidth = 2;

    /** AB 半圆 */ {
      const angle = (J_ABC.value * Math.PI) / 180;
      const ab_mid = [(abc.ap.x + abc.bp.x) / 2, (abc.ap.y + abc.bp.y) / 2];
      const r =
        _Math_CalculateDistance2D(abc.ap.x, abc.ap.y, abc.bp.x, abc.bp.y) / 2;

      _ctx.fillStyle = "#8a2be280";
      _ctx.beginPath();
      _ctx.arc(ab_mid[0], ab_mid[1], r, Math.PI - angle, -angle);
      _ctx.fill();
      _ctx.stroke();
    }

    /** AC 半圆 */ {
      const angle = ((90 - J_ABC.value) * Math.PI) / 180;
      const ac_mid = [(abc.ap.x + abc.cp.x) / 2, (abc.ap.y + abc.cp.y) / 2];
      const r =
        _Math_CalculateDistance2D(abc.ap.x, abc.ap.y, abc.cp.x, abc.cp.y) / 2;

      _ctx.fillStyle = "#ff69b480";
      _ctx.beginPath();
      _ctx.arc(ac_mid[0], ac_mid[1], r, angle + Math.PI, angle);
      _ctx.fill();
      _ctx.stroke();
    }

    _Canvas.clearPathRegion(_ctx, bc_arc.path!);

    ctx.drawImage(_canvas, 0, 0);
  },
});

export const layer = new _Canvas.Layer({ name: "希波克拉底月牙定理" });
const group = new _Canvas.OverlayGroup({});
group.addOverlays([t, tra, ...text, bc_arc, ab_ac_arc]);
layer.addGroup(group);

export function Update() {
  const j = (J_ABC.value * Math.PI) / 180;
  const cos_b = Math.cos(j);
  const ab = cos_b * BC;

  const bp = ab * cos_b;
  const h = ab * Math.sin(j);

  a_text.value = [-BC / 2 + bp, -h];

  /** 直角三角形 */ {
    t.value![0] = a_text.value;
    t.value = [...t.value!];
    tra.value =
      J_ABC.value == 0 || J_ABC.value == 90
        ? undefined
        : MyMath.transform(MyMath.getRightAngleSymbol(abc.a, abc.b, abc.c));
  }

  ab_ac_arc.notifyReload?.();
}

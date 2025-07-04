import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import {
  _Math_CalculateDistance2D,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { ABC, MyMath } from "@/views/math/DynamicDiagram/tool";
import { ref } from "vue";

export const id = _Utility_GenerateUUID();
// https://basic.smartedu.cn/syncClassroom/classActivity?activityId=314b07ca-a341-11ec-92ef-246e9675e50c&chapterId=1d266936-49d6-37ba-8a82-466e03e69efa&teachingmaterialId=561056b2-29a1-4588-9ed2-a9440667e589&fromPrepare=0&classHourId=lesson_1
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // 绘制蓝色圆形
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, Math.PI * 2);
// ctx.fillStyle = "blue";
// ctx.fill();

// // 清除指定圆形区域（使用临时路径）
// ctx.save();
// ctx.beginPath();
// ctx.arc(120, 95, 50, 0, Math.PI * 2);
// clip 是指定后续可操作的区域
// ctx.clip();
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.restore();
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
const text = [a_text, b_text, c_text];

export const overlays = [t, tra, ...text];

const abc = new ABC(t as any);

export function Update() {
  const j = (J_ABC.value * Math.PI) / 180;
  const cos_b = Math.cos(j);
  const ab = cos_b * BC;

  const bp = ab * cos_b;
  const h = ab * Math.sin(j);

  a_text.value = [-BC / 2 + bp, -h];

  const x = -BC / 2 + (ab * ab) / BC;

  /** 直角三角形 */ {
    t.value![0] = a_text.value;
    t.value = [...t.value!];
    tra.value =
      J_ABC.value == 0 || J_ABC.value == 90
        ? undefined
        : MyMath.transform(MyMath.getRightAngleSymbol(abc.a, abc.b, abc.c));
  }
}

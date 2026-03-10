<script setup lang="ts">
import { onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { _Canvas, _Utility_GenerateUUID } from "nhanh-pure-function";
import { NSpace, NText } from "naive-ui";
import { color } from ".";

const id = _Utility_GenerateUUID();
let canvas = shallowRef<_Canvas>();

const num = (v: number) => Number(v.toFixed(3));
const radians = ref(num(Math.PI / 4));
const sin = ref(0);
const cos = ref(0);
const tan = ref(0);

const circle = new _Canvas.Arc({
  value: [0, 0],
  startAngle: 0,
  endAngle: Math.PI * 2,
  radiusValue: 1,
  style: { stroke: { color: color[3] } },
});
const arc = new _Canvas.Arc({
  value: [0, 0],
  startAngle: -Math.PI / 4,
  endAngle: 0,
  radiusValue: 0.3,
  style: { stroke: { color: color[3] } },
});
const a = new _Canvas.Line({
  value: [
    [0, 0],
    [1, 0],
  ],
  style: { stroke: { color: color[0] } },
});
const b = new _Canvas.Line({
  value: [
    [0, 0],
    [0, 1],
  ],
  style: { stroke: { color: color[1] } },
});
const c = new _Canvas.Line({
  value: [
    [0, 0],
    [1, 1],
  ],
  style: { stroke: { color: "#8A8A8AFF" } },
});
const tanθ = new _Canvas.Line({
  value: [
    [0, 0],
    [1, 1],
  ],
  style: { stroke: { color: color[2] } },
});
const av = new _Canvas.Text({
  text: "",
  value: [0.5, 0.5],
  style: { color: color[0] },
});
const bv = new _Canvas.Text({
  text: "",
  value: [0.5, 0.5],
  style: { color: color[1] },
});
const overlays = [circle, arc, c, a, b, tanθ, av, bv];

function update() {
  arc.startAngle = -radians.value;
  sin.value = num(Math.sin(radians.value));
  cos.value = num(Math.cos(radians.value));
  tan.value = num(Math.tan(radians.value));
  a.value = [
    [cos.value, 0],
    [cos.value, sin.value],
  ];
  b.value = [
    [0, 0],
    [cos.value, 0],
  ];
  c.value = [
    [0, 0],
    [cos.value, sin.value],
  ];
  tanθ.value = [
    [cos.value, sin.value],
    [1 / Math.cos(radians.value), 0],
  ];

  av.text = sin.value.toString();
  av.value = [a.value[1][0], a.value[1][1] / 2];
  bv.text = cos.value.toString();
  bv.value = [cos.value / 2, -0.05];
}
update();

let dom: HTMLElement | null;
function mouseMove(e: MouseEvent) {
  if (!dom) return;

  const { x, y, width, height } = dom.getBoundingClientRect();
  const center = { x: x + width / 2, y: y + height / 2 };

  /** 更新弧度 */ {
    const x = e.clientX - center.x;
    const y = center.y - e.clientY;
    let rad = Math.atan2(y, x);
    if (rad < 0) rad += 2 * Math.PI;
    radians.value = num(rad);

    update();
  }
}

onMounted(() => {
  dom = document.getElementById(id);

  canvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisConfig: { count: 1, min: 150, y: -1 },
    axisShow: { grid: { secondary: false } },
    isInteractive: false,
  });
  canvas.value.addOverlay(overlays);
});
</script>

<template>
  <Card
    @mousemove="mouseMove"
    :canvas="canvas"
    vertical
    title="单位圆"
    size="small"
  >
    <NSpace justify="space-between">
      <NText type="success">sin({{ radians }}) = {{ sin }}</NText>
      <NText type="warning">cos({{ radians }}) = {{ cos }}</NText>
      <NText type="error">tan({{ radians }}) = {{ tan }}</NText>
    </NSpace>
    <div><canvas :id="id"></canvas></div>
  </Card>
</template>

<style scoped lang="less">
.n-card {
  position: absolute;
  bottom: 0;
  left: 0;
  --width: 460px;
  width: var(--width);
  box-shadow: 0 0 10px 5px var(--box-shadow);
  border-radius: 15px;
  div {
    canvas {
      width: 100%;
      height: calc(var(--width) - 90px);
    }
  }
}
</style>

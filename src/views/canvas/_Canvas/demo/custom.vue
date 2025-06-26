<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const overlay = new _Canvas.Custom<any>({
  value: [
    [0, 0],
    [-1, -1],
    [1, 1],
  ],
  draw: (ctx: CanvasRenderingContext2D) => {
    const mainCanvas = myCanvas.value!;
    const percentage = mainCanvas.percentage; // 获取缩放比例
    const [x, y] = overlay.dynamicPosition![0]; // 获取中心点坐标

    // 基础尺寸（可根据需要调整）
    const baseSize = 50;
    const size = baseSize * percentage; // 计算实际尺寸

    // 保存画布当前状态
    ctx.save();

    // 将原点移动到中心位置
    ctx.translate(x, y);

    /* 开始绘制熊猫 */

    // 1. 绘制头部（白色圆形）
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 2. 绘制耳朵（黑色圆形）
    const earSize = size * 0.4; // 耳朵大小
    // 左耳
    ctx.beginPath();
    ctx.arc(-size * 0.6, -size * 0.6, earSize, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    // 右耳
    ctx.beginPath();
    ctx.arc(size * 0.6, -size * 0.6, earSize, 0, Math.PI * 2);
    ctx.fill();

    // 3. 绘制眼睛（带白色高光）
    const eyeSize = size * 0.15; // 眼睛大小
    const eyeX = size * 0.3; // 眼睛X轴偏移
    const eyeY = size * 0.2; // 眼睛Y轴偏移

    // 左眼
    ctx.beginPath();
    ctx.arc(-eyeX, -eyeY, eyeSize, 0, Math.PI * 2);
    ctx.fill();
    // 右眼
    ctx.beginPath();
    ctx.arc(eyeX, -eyeY, eyeSize, 0, Math.PI * 2);
    ctx.fill();

    // 眼睛高光（白色小圆点）
    ctx.beginPath();
    ctx.arc(-eyeX * 0.8, -eyeY * 1.1, eyeSize * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(eyeX * 0.8, -eyeY * 1.1, eyeSize * 0.3, 0, Math.PI * 2);
    ctx.fill();

    // 4. 绘制鼻子（黑色椭圆形）
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.15, size * 0.1, 0, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();

    // 5. 绘制嘴巴（简单曲线）
    ctx.beginPath();
    ctx.moveTo(0, size * 0.1); // 起点（鼻子下方）
    // 右嘴角
    ctx.quadraticCurveTo(size * 0.2, size * 0.3, size * 0.4, size * 0.2);
    // 回到起点
    ctx.moveTo(0, size * 0.1);
    // 左嘴角
    ctx.quadraticCurveTo(-size * 0.2, size * 0.3, -size * 0.4, size * 0.2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 恢复画布状态
    ctx.restore();
  },
});

onMounted(() => {
  myCanvas.value = new _Canvas({ id, theme: Settings.value.theme });
  myCanvas.value.addOverlay(overlay);
});
defineExpose({ myCanvas });
</script>

<template>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

const n=`<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NDivider, NFlex, NSpace, NText } from "naive-ui";
import SvgGather from "@/assets/icon/gather";

const id = _GenerateUUID();

let myCanvas: _Canvas;
watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
});
<\/script>

<template>
  <NSpace vertical>
    <NText type="success" strong>
      <NSpace>
        <SvgGather icon="ArrowUp" size="30" />
        <SvgGather icon="ArrowDown" size="30" />
        <SvgGather icon="ArrowLeft" size="30" />
        <SvgGather icon="ArrowRight" size="30" />
      </NSpace>
    </NText>
    <div>
      按下不放画布会以每次键盘事件<NText type="info" strong> 1px </NText>
      的速度移动画布，双击速度 <NText type="error" strong> x4 </NText>。
    </div>
    <NFlex>
      <NFlex>
        <NText type="success" strong>
          <SvgGather icon="ArrowUp" size="30" />
        </NText>
        向上移动
      </NFlex>

      <NDivider vertical />
      <NFlex>
        <NText type="success" strong>
          <SvgGather icon="ArrowDown" size="30" />
        </NText>
        向下移动
      </NFlex>

      <NDivider vertical />
      <NFlex>
        <NText type="success" strong>
          <SvgGather icon="ArrowLeft" size="30" />
        </NText>
        向左移动
      </NFlex>

      <NDivider vertical />
      <NFlex>
        <NText type="success" strong>
          <SvgGather icon="ArrowRight" size="30" />
        </NText>
        向右移动
      </NFlex>
    </NFlex>
    <NFlex>
      <NFlex>
        <NText type="success" strong>
          <SvgGather icon="Plus" size="30" />
        </NText>
        画布比例 + 0.02
      </NFlex>

      <NDivider vertical />
      <NFlex>
        <NText type="success" strong>
          <SvgGather icon="Minus" size="30" />
        </NText>
        画布比例 - 0.02
      </NFlex>
    </NFlex>
  </NSpace>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  width: 100%;
  height: 270px;
}
</style>
`;export{n as default};

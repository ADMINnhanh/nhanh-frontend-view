<script lang="ts" setup>
import {
  _File_Download,
  _Utility_Debounce,
  _Utility_GenerateUUID,
  _Utility_Throttle,
} from "nhanh-pure-function";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import gridTextGenerator, { FontFamilyOptions } from ".";
import {
  NButton,
  NCard,
  NIcon,
  NInput,
  NInputGroup,
  NInputGroupLabel,
  NInputNumber,
  NSelect,
  NSlider,
  NSwitch,
} from "naive-ui";
import { ref, watch } from "vue";
import { CloudDownloadOutline } from "@vicons/ionicons5";
import FontFamily from "./fontFamily.vue";
import ImageViewerHelp from "./imageViewerHelp.vue";

const fontFamilyOptions = ref([...FontFamilyOptions]);

const id = _Utility_GenerateUUID();
gridTextGenerator.id = id;

const textOccupiedGridCount = ref(0);
const fontStyle = ref({
  fontFamily: "cursive",
  fontSize: 280,
  fontWeight: "normal",
});
const config = ref({
  text: "你好",
  uniformization: true,
  gridCount: 44,
  fontColorThresholdRatio: 0.4,
  textOffset: { x: 0, y: 0 },
});

const generator = _Utility_Throttle(() => {
  requestAnimationFrame(() => {
    gridTextGenerator.generator();
    textOccupiedGridCount.value = gridTextGenerator.textOccupiedGridCount;
  });
}, 200);
watch(
  [config, fontStyle],
  ([config, fontStyle]) => {
    Object.keys(config).forEach((key) => {
      /** @ts-ignore */
      gridTextGenerator[key] = config[key];
    });
    gridTextGenerator.fontStyle = `${fontStyle.fontWeight} ${fontStyle.fontSize}px ${fontStyle.fontFamily}`;

    generator();
  },
  { immediate: true, deep: true }
);

/** 下载 ‘图片查看器.exe’ */
function downloadImageViewer() {
  _File_Download({ href: "/nhanh-frontend-view/script/nhanh的图片查看器.exe" });
}
</script>

<template>
  <ResponsiveDirectionLayout :default-size="0.35" :min="0">
    <template #left>
      <div class="config-panel">
        <NCard title="文本占用网格计数" size="small">
          <NInput :value="textOccupiedGridCount + ''" />
        </NCard>

        <NCard title="文字样式" size="small">
          <div class="config-panel">
            <NInputGroup>
              <NInputGroupLabel>文字</NInputGroupLabel>
              <NInput v-model:value="config.text" clearable />
            </NInputGroup>
            <NInputGroup>
              <NInputGroupLabel>文字大小</NInputGroupLabel>
              <NInputNumber
                v-model:value="fontStyle.fontSize"
                :min="9"
                :precision="0"
              />
              <NInputGroupLabel>px</NInputGroupLabel>
            </NInputGroup>
            <NInputGroup>
              <NInputGroupLabel>文字粗细</NInputGroupLabel>
              <NSelect
                v-model:value="fontStyle.fontWeight"
                :options="[
                  { label: '正常', value: 'normal' },
                  { label: '粗体', value: 'bold' },
                ]"
              />
            </NInputGroup>
            <NInputGroup>
              <NInputGroupLabel>文字字体</NInputGroupLabel>
              <NSelect
                v-model:value="fontStyle.fontFamily"
                :options="fontFamilyOptions"
              />
            </NInputGroup>
            <FontFamily v-model:fontFamilyOptions="fontFamilyOptions" />
            <NInputGroup>
              <NInputGroupLabel>文字偏移</NInputGroupLabel>
              <NInputNumber v-model:value="config.textOffset.x" :precision="0">
                <template #prefix>X</template>
                <template #suffix>px</template>
              </NInputNumber>
              <NInputNumber v-model:value="config.textOffset.y" :precision="0">
                <template #prefix>Y</template>
                <template #suffix>px</template>
              </NInputNumber>
            </NInputGroup>
          </div>
        </NCard>

        <NCard title="网格" size="small">
          <div class="config-panel">
            <NInputGroup>
              <NInputGroupLabel>网格行列数量</NInputGroupLabel>
              <NInputNumber
                v-model:value="config.gridCount"
                :min="1"
                :precision="0"
              />
            </NInputGroup>
            <NInputGroup>
              <NInputGroupLabel>字体颜色阈值比率</NInputGroupLabel>
              <NSlider
                v-model:value="config.fontColorThresholdRatio"
                :min="0.01"
                :max="0.49"
                :step="0.01"
              />
            </NInputGroup>

            <NInputGroup>
              <NInputGroupLabel>网格颜色统一化</NInputGroupLabel>
              <NSwitch v-model:value="config.uniformization" />
            </NInputGroup>
          </div>
        </NCard>

        <NCard title="其他" size="small">
          <div class="button-panel">
            <NButton
              type="success"
              ghost
              @click="gridTextGenerator.exportImage()"
            >
              <template #icon>
                <NIcon :component="CloudDownloadOutline" />
              </template>
              导出图片
            </NButton>

            <NInputGroup>
              <NButton type="info" ghost @click="downloadImageViewer">
                <template #icon>
                  <NIcon :component="CloudDownloadOutline" />
                </template>
                图片查看器.exe
              </NButton>
              <ImageViewerHelp />
            </NInputGroup>
          </div>
        </NCard>
      </div>
    </template>
    <template #right>
      <div class="canvas-container">
        <canvas :id="id" />
      </div>
    </template>
  </ResponsiveDirectionLayout>
</template>

<style scoped lang="less">
.canvas-container {
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  canvas {
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
}
.config-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .n-input-group {
    align-items: center;
  }
  .n-input,
  .n-input-number {
    text-align: center;
    flex-grow: 1;
  }
  .n-slider,
  .n-switch {
    margin-left: 10px !important;
  }
}
.button-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  > * {
    width: auto;
  }
}
</style>

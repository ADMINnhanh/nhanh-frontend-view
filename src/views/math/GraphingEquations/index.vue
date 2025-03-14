<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import {
  NButton,
  NIcon,
  NSpace,
  NButtonGroup,
  NText,
  NA,
  NDrawer,
  NDrawerContent,
  NTabs,
  NTabPane,
  NForm,
  NFormItem,
  NSwitch,
  NRadioGroup,
  NRadioButton,
  NRadio,
  NDivider,
  NFlex,
} from "naive-ui";
import {
  Add,
  ArrowBack,
  ArrowDown,
  ArrowForward,
  ArrowUp,
  GridOutline,
  Home,
  LockClosedOutline,
  Remove,
  SettingsOutline,
} from "@vicons/ionicons5";
import { Settings } from "@/components/popups/components/Settings";
import { _GenerateUUID, _ReadFile } from "nhanh-pure-function";
import { useFps } from "@vueuse/core";
import _Canvas from "./_Canvas";
import InputMath from "./InputMath/index.vue";
import SvgGather from "@/assets/icon/gather";
import DrawChina from "./china";

const buttonApi = computed(() => {
  const theme = Settings.value.theme;
  return {
    color: theme === "dark" ? "#666" : "#ededed",
    "text-color": theme === "dark" ? "#ededed" : "#666",
    style: {
      "--n-color-hover": theme === "dark" ? "rgba(126, 126, 126, 1)" : "#fff",
    },
  };
});

const fps = useFps();
const id = _GenerateUUID("canvas-");
const setActive = ref(false);
const lock = ref(false);
let canvas: _Canvas;

const setConfig = ref({
  theme: "",
  defaultCenter: "bottom,left",
  axis: {
    x: 1 as 1 | -1,
    y: -1 as 1 | -1,
    count: 85,
    show: {
      all: true,
      grid: {
        main: true,
        secondary: true,
      },
      axis: true,
      axisText: true,
    },
  },
  point: {
    show: true,
  },
  line: {
    show: true,
  },
  polygon: {
    show: true,
  },
});
function UpdateCanvasConfig() {
  const config = setConfig.value;
  canvas.toggleAxis(config.axis.show);
  canvas.togglePoint(config.point.show);
  canvas.toggleLine(config.line.show);
  canvas.togglePolygon(config.polygon.show);
  const { x, y, count } = config.axis;
  canvas.setAxis({ x, y, count });
  const [top, left] = config.defaultCenter.split(",") as any;
  canvas.setDefaultCenter({ top, left });
  if (config.theme) canvas.setTheme(config.theme as any);
}
watch(setConfig, UpdateCanvasConfig, { deep: true });

watch(
  () => Settings.value.theme,
  (theme) => {
    if (!setConfig.value.theme) canvas?.setTheme(theme);
  }
);

const img = new Image(200, 300);
img.src =
  "https://fastly.picsum.photos/id/440/200/300.jpg?hmac=3Nx5MHMCVguEcZQ1M3RnSrCpHNn9sabFI5y6aYzvceQ";

img.onload = () => {
  canvas?.redrawOnce();
};

// const list = Array.from({ length: 10000 * 200 });
// const t = performance.now();

// for (let i = 0; i < list.length; i++) {}

// console.log(performance.now() - t + "ms");

onMounted(() => {
  canvas = new _Canvas(id);
  // canvas.defaultCenter.top = "top";
  // canvas.defaultCenter.left = "left";
  // canvas.axisConfig.count = 75;
  canvas.setTheme(Settings.value.theme);
  UpdateCanvasConfig();
  DrawChina(canvas);

  // canvas.drawPoint.addPoints([
  //   { zIndex: 1, location: [75, 75] },
  //   { value: [6, 6] },
  //   { value: [-6, 6] },
  //   { value: [-6, -6] },
  //   { value: [6, -6] },
  // ]);
  // const points = Array.from({ length: 10000 * 1 }).map((_, i) => ({
  //   value: [Math.random() * 100 - 50, Math.random() * 100 - 50],
  // }));
  // canvas.drawPoint.addPoints(points as any);

  // canvas.drawLine.addLines([
  //   {
  //     location: [
  //       [-75 * 2, 75 * 2],
  //       [75 * 2, 75 * 2],
  //       [75 * 2, 0 * 2],
  //     ],
  //   },
  //   {
  //     value: [
  //       [-2, -2],
  //       [-2, -6],
  //       [-4, -4],
  //     ],
  //   },
  //   {
  //     value: [
  //       [-2, 0],
  //       [0, -2],
  //     ],
  //     infinite: true,
  //   },
  //   {
  //     value: [
  //       [2, 0],
  //       [0, 2],
  //     ],
  //     infinite: true,
  //   },
  // ]);

  // canvas.drawPolygon.addPolygons([
  //   {
  //     value: [
  //       [4, -4],
  //       [2, -6],
  //       [0, -4],
  //     ],
  //   },
  //   {
  //     value: [[2, 2]],
  //     size: [200, 200],
  //   },
  // ]);

  // canvas.startCreationOnGrid = [
  //   [
  //     0,
  //     () => {
  //       const { ctx, center, percentage } = canvas;
  //       ctx?.drawImage(
  //         img,
  //         center.x,
  //         center.y,
  //         200 * percentage,
  //         300 * percentage
  //       );
  //     },
  //   ],
  // ] as any;
});
onUnmounted(() => {
  canvas?.destroy();
});

{
}
</script>

<template>
  <div class="graphing-equations">
    <nav>
      <NA
        href="https://www.desmos.com/calculator/mekfho0w38?lang=zh-CN"
        target="_blank"
      >
        希望达到的目标！ desmos
      </NA>
      <InputMath />
    </nav>
    <canvas :id="id"></canvas>

    <div class="button-box">
      <NSpace vertical>
        <NButtonGroup vertical>
          <NButton :="buttonApi" @click="canvas.zoomIn()">
            <template #icon><NIcon :component="Add" /></template>
          </NButton>
          <NButton :="buttonApi" @click="canvas.zoomOut()">
            <template #icon><NIcon :component="Remove" /></template>
          </NButton>
        </NButtonGroup>
        <NButton :="buttonApi" @click="canvas.reset()">
          <template #icon><NIcon :component="Home" /></template>
        </NButton>
        <NButton
          :="buttonApi"
          @click="setConfig.axis.show.all = !setConfig.axis.show.all"
        >
          <template #icon><NIcon :component="GridOutline" /></template>
        </NButton>
        <NButton :="buttonApi" @click="lock = canvas.toggleLock()">
          <template #icon>
            <NIcon v-if="lock" :component="LockClosedOutline" />
            <SvgGather v-else icon="LockOpenOutline" />
          </template>
        </NButton>
        <NButton :="buttonApi" @click="setActive = true">
          <template #icon>
            <NIcon :component="SettingsOutline" />
          </template>
        </NButton>
      </NSpace>
      <n-text
        class="fps"
        :type="fps > 60 ? 'success' : fps > 30 ? 'warning' : 'error'"
      >
        {{ fps }}
      </n-text>
    </div>
  </div>
  <NDrawer v-model:show="setActive" :width="500" to=".graphing-equations">
    <NDrawerContent title="更加全面的配置">
      <NTabs addable animated placement="left">
        <NTabPane name="公共">
          <NForm :model="setConfig" label-width="auto">
            <NFormItem label="主题">
              <NRadioGroup v-model:value="setConfig.theme">
                <NRadioButton value="light">浅色</NRadioButton>
                <NRadioButton value="dark">深色</NRadioButton>
                <NRadioButton value="">跟随外部主题</NRadioButton>
              </NRadioGroup>
            </NFormItem>
            <NFormItem label="默认中心">
              <NRadioGroup v-model:value="setConfig.defaultCenter">
                <NSpace vertical>
                  <NSpace>
                    <NRadio value="top,left" />
                    <NRadio value="top,center" />
                    <NRadio value="top,right" />
                  </NSpace>

                  <NSpace>
                    <NRadio value="middle,left" />
                    <NRadio value="middle,center" />
                    <NRadio value="middle,right" />
                  </NSpace>

                  <NSpace>
                    <NRadio value="bottom,left" />
                    <NRadio value="bottom,center" />
                    <NRadio value="bottom,right" />
                  </NSpace>
                </NSpace>
              </NRadioGroup>
            </NFormItem>
          </NForm>
        </NTabPane>
        <NTabPane name="快捷键">
          <NText type="success" strong>
            <NSpace>
              <SvgGather icon="ArrowUp" size="30" />
              <SvgGather icon="ArrowDown" size="30" />
              <SvgGather icon="ArrowLeft" size="30" />
              <SvgGather icon="ArrowRight" size="30" />
            </NSpace>
          </NText>
          按下不放画布会以每次键盘事件<NText type="info" strong> 1px </NText>
          的速度移动画布，双击速度 <NText type="error" strong> x4 </NText>。
          <NFlex> </NFlex>
          <NDivider />
          <NFlex>
            <NText type="success" strong>
              <SvgGather icon="ArrowUp" size="30" />
            </NText>
            向上移动
          </NFlex>

          <NDivider />
          <NFlex>
            <NText type="success" strong>
              <SvgGather icon="ArrowDown" size="30" />
            </NText>
            向下移动
          </NFlex>

          <NDivider />
          <NFlex>
            <NText type="success" strong>
              <SvgGather icon="ArrowLeft" size="30" />
            </NText>
            向左移动
          </NFlex>

          <NDivider />
          <NFlex>
            <NText type="success" strong>
              <SvgGather icon="ArrowRight" size="30" />
            </NText>
            向右移动
          </NFlex>

          <NDivider />
          <NFlex>
            <NText type="success" strong>
              <SvgGather icon="Plus" size="30" />
            </NText>
            画布比例 + 0.02
          </NFlex>

          <NDivider />
          <NFlex>
            <NText type="success" strong>
              <SvgGather icon="Minus" size="30" />
            </NText>
            画布比例 - 0.02
          </NFlex>
        </NTabPane>
        <NTabPane name="坐标轴">
          <NForm :model="setConfig" label-width="auto">
            <NFormItem label="整体显示">
              <NSwitch v-model:value="setConfig.axis.show.all" />
            </NFormItem>
            <NFormItem label="x 轴向">
              <NRadioGroup v-model:value="setConfig.axis.x">
                <NRadioButton :value="-1">
                  <NIcon :component="ArrowBack" />
                </NRadioButton>
                <NRadioButton :value="1">
                  <NIcon :component="ArrowForward" />
                </NRadioButton>
              </NRadioGroup>
            </NFormItem>
            <NFormItem label="y 轴向">
              <NRadioGroup v-model:value="setConfig.axis.y">
                <NRadioButton :value="1">
                  <NIcon :component="ArrowDown" />
                </NRadioButton>
                <NRadioButton :value="-1">
                  <NIcon :component="ArrowUp" />
                </NRadioButton>
              </NRadioGroup>
            </NFormItem>
            <NFormItem label="x 、y 轴显示">
              <NSwitch v-model:value="setConfig.axis.show.axis" />
            </NFormItem>
            <NFormItem label="x 、y 轴文字显示">
              <NSwitch v-model:value="setConfig.axis.show.axisText" />
            </NFormItem>
            <NFormItem label="网格 - 主要的">
              <NSwitch v-model:value="setConfig.axis.show.grid.main" />
            </NFormItem>
            <NFormItem label="网格 - 次要的">
              <NSwitch v-model:value="setConfig.axis.show.grid.secondary" />
            </NFormItem>
          </NForm>
        </NTabPane>
        <NTabPane name="点">
          <NForm :model="setConfig" label-width="auto">
            <NFormItem label="整体显示">
              <NSwitch v-model:value="setConfig.point.show" />
            </NFormItem>
          </NForm>
        </NTabPane>
        <NTabPane name="线">
          <NForm :model="setConfig" label-width="auto">
            <NFormItem label="整体显示">
              <NSwitch v-model:value="setConfig.line.show" />
            </NFormItem>
          </NForm>
        </NTabPane>
        <NTabPane name="面">
          <NForm :model="setConfig" label-width="auto">
            <NFormItem label="整体显示">
              <NSwitch v-model:value="setConfig.polygon.show" />
            </NFormItem>
          </NForm>
        </NTabPane>
      </NTabs>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped lang="less">
.graphing-equations {
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  position: relative;

  nav {
    width: 400px;
    box-shadow: 0 0 3px 1px var(--box-shadow);
    border-radius: 5px;
    z-index: 2;
    padding: 5px;
    .n-a {
      display: flex;
      justify-content: center;
      padding: 5px 0;
    }
  }

  canvas {
    flex-grow: 1;
    width: 100px;
  }

  .button-box {
    position: absolute;
    top: 10px;
    right: 10px;

    .n-space {
      :deep(> div > *) {
        box-shadow: 0 0 5px 1px var(--box-shadow);
      }
    }

    .fps {
      position: absolute;
      top: 0;
      left: -40px;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>

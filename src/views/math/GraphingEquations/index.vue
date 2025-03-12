<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { NButton, NIcon, NSpace, NButtonGroup, NText, NA } from "naive-ui";
import {
  Add,
  GridOutline,
  Home,
  LockClosedOutline,
  Remove,
} from "@vicons/ionicons5";
import { Settings } from "@/components/popups/components/Settings";
import { _GenerateUUID } from "nhanh-pure-function";
import { useFps } from "@vueuse/core";
import Canvas from "./Canvas";
import InputMath from "./InputMath/index.vue";
import SvgGather from "@/assets/icon/gather";

const fps = useFps();
const id = _GenerateUUID("canvas-");
const lock = ref(false);
let canvas: Canvas;

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

watch(
  () => Settings.value.theme,
  (theme) => canvas.setTheme(theme)
);

const img = new Image(200, 300);
img.src =
  "https://fastly.picsum.photos/id/440/200/300.jpg?hmac=3Nx5MHMCVguEcZQ1M3RnSrCpHNn9sabFI5y6aYzvceQ";

img.onload = () => {
  canvas?.redrawOnce();
};

// const list = Array.from({ length: 10000 * 200 });
// let a = 0;
// const t = performance.now();
// for (let i = 0; i < list.length; i++) {
//   a++;
// }
// // for (const e of list) {
// //   a++;
// // }
// console.log(performance.now() - t + "ms");

onMounted(() => {
  canvas = new Canvas(id);
  // canvas.defaultCenter.top = "top";
  // canvas.defaultCenter.left = "left";
  // canvas.gridConfig.count = 75;
  canvas.setTheme(Settings.value.theme);
  canvas.drawPoint.addPoints([
    { zIndex: 1, location: [75, 75] },
    { value: [6, 6] },
    { value: [-6, 6] },
    { value: [-6, -6] },
    { value: [6, -6] },
  ]);
  // const points = Array.from({ length: 10000 * 10 }).map((_, i) => ({
  //   value: [Math.random() * 100 - 50, Math.random() * 100 - 50],
  // }));
  // canvas.drawPoint.addPoints(points as any);

  canvas.drawLine.addLines([
    {
      location: [
        [-75 * 2, 75 * 2],
        [75 * 2, 75 * 2],
        [75 * 2, 0 * 2],
      ],
    },
    {
      value: [
        [-2, -2],
        [-2, -6],
        [-4, -4],
      ],
    },
    {
      value: [
        [-2, 0],
        [0, -2],
      ],
      infinite: true,
    },
    {
      value: [
        [2, 0],
        [0, 2],
      ],
      infinite: true,
    },
  ]);

  canvas.drawPolygon.addPolygons([
    {
      value: [
        [4, -4],
        [2, -6],
        [0, -4],
      ],
    },
    {
      value: [[2, 2]],
      size: [200, 200],
    },
  ]);

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
      <NA href="https://www.desmos.com/calculator?lang=zh-CN" target="_blank">
        希望达到的目标！ desmos
      </NA>
      <InputMath />
    </nav>
    <canvas :id="id"></canvas>

    <div class="button-box">
      <NSpace vertical>
        <NButtonGroup vertical>
          <NButton :="buttonApi" @click="canvas?.zoomIn()">
            <template #icon><NIcon :component="Add" /></template>
          </NButton>
          <NButton :="buttonApi" @click="canvas?.zoomOut()">
            <template #icon><NIcon :component="Remove" /></template>
          </NButton>
        </NButtonGroup>
        <NButton :="buttonApi" @click="canvas.reset()">
          <template #icon><NIcon :component="Home" /></template>
        </NButton>
        <NButton :="buttonApi" @click="canvas.toggleGrid()">
          <template #icon><NIcon :component="GridOutline" /></template>
        </NButton>
        <NButton :="buttonApi" @click="lock = canvas.toggleLock()">
          <template #icon>
            <NIcon
              :component="
                lock ? LockClosedOutline : SvgGather('LockOpenOutline')
              "
            />
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

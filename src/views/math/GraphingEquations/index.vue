<script setup lang="ts">
import { computed } from "vue";
import { graphingEquations, Init } from ".";
import { MouseInCanvas, MouseOutCanvas, MouseDown } from "./Event";
import { NButton, NIcon, NSpace, NButtonGroup, NText } from "naive-ui";
import { Add, Home, Remove } from "@vicons/ionicons5";
import { Settings } from "@/components/popups/components/Settings";
import { _GenerateUUID } from "nhanh-pure-function";
import { useFps } from "@vueuse/core";

const fps = useFps();
const id = _GenerateUUID("canvas-");
requestAnimationFrame(() => Init(id));

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
</script>

<template>
  <div class="graphing-equations">
    <nav></nav>
    <canvas
      :id="id"
      @mouseover="MouseInCanvas"
      @mouseleave="MouseOutCanvas"
      @mousedown="MouseDown"
    ></canvas>
    <div class="button-box">
      <NSpace vertical>
        <NButtonGroup vertical>
          <NButton :="buttonApi" @click="graphingEquations?.updateScale(0.1)"
            ><template #icon><NIcon :component="Add" /></template
          ></NButton>
          <NButton :="buttonApi" @click="graphingEquations?.updateScale(-0.1)"
            ><template #icon><NIcon :component="Remove" /></template
          ></NButton>
        </NButtonGroup>
        <NButton :="buttonApi" @click="graphingEquations?.reset()"
          ><template #icon><NIcon :component="Home" /></template
        ></NButton>
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
  }
  canvas {
    flex-grow: 1;
    width: 100px;
    cursor: grab;
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

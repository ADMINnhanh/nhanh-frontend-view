<script setup lang="ts">
import { computed, onUnmounted } from "vue";
import { id, baseData, Init, ZoomIn, ZoomOut } from ".";
import { MouseInCanvas, MouseOutCanvas, MouseDown } from "./Event";
import { NButton, NIcon, NSpace, NButtonGroup } from "naive-ui";
import { Add, Home, Remove } from "@vicons/ionicons5";
import { Settings } from "@/components/popups/components/Settings";

requestAnimationFrame(Init);
const resize = () => baseData.value?.updateCanvasSize();
window.addEventListener("resize", resize);
onUnmounted(() => window.removeEventListener("resize", resize));

const buttonApi = computed(() => {
  const theme = Settings.value.theme;
  return {
    color: theme === "dark" ? "#666" : "#ededed",
    "text-color": theme === "dark" ? "#ededed" : "#666",
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
          <NButton :="buttonApi" @click="ZoomIn"
            ><template #icon><NIcon :component="Add" /></template
          ></NButton>
          <NButton :="buttonApi" @click="ZoomOut"
            ><template #icon><NIcon :component="Remove" /></template
          ></NButton>
        </NButtonGroup>
        <NButton :="buttonApi"
          ><template #icon><NIcon :component="Home" /></template
        ></NButton>
      </NSpace>
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
    width: 100px;
    box-shadow: 0 0 3px 1px var(--box-shadow);
    border-radius: 5px;
    z-index: 2;
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
  }
}
</style>

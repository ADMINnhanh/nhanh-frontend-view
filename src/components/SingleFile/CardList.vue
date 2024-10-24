<script setup lang="ts">
import { onUnmounted, ref } from "vue";

type PropsType = {
  itemCount: number;

  minWidth?: number;
  maxWidth?: number;
  marginBottom?: number;
};

const Props = withDefaults(defineProps<PropsType>(), {
  minWidth: 325,
  maxWidth: 400,
  marginBottom: 20,
});

const listBoxRef = ref<HTMLElement>();
/** 每行占位盒子数量 */
const rowCount = ref(0);
const itemStyle = ref({
  "--width": Props.minWidth,
  "--margin-bottom": Props.marginBottom,
});

function ChangeItemWidth() {
  const dom = listBoxRef.value as HTMLElement;
  if (!dom) return;

  const { itemCount, minWidth, maxWidth, marginBottom } = Props;

  itemStyle.value["--margin-bottom"] = marginBottom;

  const width = dom.clientWidth;

  if (width < minWidth) {
    itemStyle.value["--width"] = minWidth;
  } else {
    const count = Math.min(Math.floor(width / minWidth), itemCount);

    const countSet = new Set();

    function Loop(count: number) {
      const offsetWidth =
        width - (count * minWidth + (count - 1) * marginBottom);

      rowCount.value = itemCount == count ? 0 : count - (itemCount % count);

      if (offsetWidth > 0) {
        const w = minWidth + offsetWidth / count;
        if (maxWidth && maxWidth > minWidth && w > maxWidth) {
          if (countSet.has(count)) {
            itemStyle.value["--width"] = w;
          } else {
            countSet.add(count);
            Loop(Math.floor(width / minWidth));
          }
        } else {
          itemStyle.value["--width"] = w;
        }
      } else if (offsetWidth < 0) {
        Loop(count - 1);
      } else {
        itemStyle.value["--width"] = minWidth;
      }
    }
    Loop(count);
  }
}
requestAnimationFrame(ChangeItemWidth);
window.addEventListener("resize", ChangeItemWidth);
onUnmounted(() => {
  window.removeEventListener("resize", ChangeItemWidth);
});
</script>

<template>
  <div ref="listBoxRef" class="list-box" :style="itemStyle">
    <slot></slot>
    <div v-for="i in rowCount" :key="i" style="opacity: 0"></div>
  </div>
</template>

<style lang="less" scoped>
.list-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    margin-bottom: calc(var(--margin-bottom) * 1px);
    width: calc(var(--width) * 1px);
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #dcdfe6;
    padding: 24px 16px;
    display: flex;

    box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s linear;
    &:hover {
      box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

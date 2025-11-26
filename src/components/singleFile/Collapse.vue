<script setup lang="ts">
import { ChevronForward } from "@vicons/ionicons5";
import { NButton, NIcon, type ButtonGroupProps } from "naive-ui";
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import { onUnmounted, ref } from "vue";

interface Props {
  size?: ButtonGroupProps["size"];
  direction?: "vertical" | "horizontal";
}
const props = withDefaults(defineProps<Props>(), {
  size: "small",
  direction: "horizontal",
});

const id = _Utility_GenerateUUID("collapse-box-");
const hide = ref(false);

const resizeObserver = new ResizeObserver((entries) => {
  const target = entries[0].target as HTMLElement;
  const { width } = target.getBoundingClientRect();
  console.log(target, width);
  target.parentElement!.style.setProperty("--width", width + "px");
});
setTimeout(() => {
  resizeObserver.observe(document.querySelector(`#${id} .content-box >div`)!);
}, 500);
onUnmounted(() => {
  resizeObserver.disconnect();
});
</script>

<template>
  <div :id="id" :class="['collapse-box', props.direction, hide && 'hide']">
    <NButton @click="hide = !hide" :size="props.size" circle>
      <template #icon>
        <NIcon :component="ChevronForward" />
      </template>
    </NButton>
    <div class="content-box">
      <div><slot /></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.collapse-box.horizontal {
  display: flex;
  .content-box {
    margin-left: 10px;
    transition: width 0.5s ease-in-out;
    width: var(--width);

    display: flex;
    overflow: hidden;

    > div {
      flex-shrink: 0;
      width: auto;
      height: auto;
    }
  }
  > .n-button {
    transition: transform 0.5s ease-in-out;
  }
}
.collapse-box.horizontal.hide {
  .content-box {
    margin-left: 0;
    width: 0;
  }
  > .n-button {
    transform: rotate(-180deg);
  }
}
</style>

<script setup lang="ts">
import { Close } from "@vicons/ionicons5";
import { NIcon, NEllipsis, NSpace } from "naive-ui";
import { UseDraggable } from "@vueuse/components";
import { onUnmounted, ref } from "vue";

interface PropsType {
  componentName: string;
  width: number;
  height: number;
}
const props = defineProps<PropsType>();

interface EmitType {
  (e: "closure"): void;
}
const Emit = defineEmits<EmitType>();

const storageKey = props.componentName + "-draggable";
const initialValue = {
  x: (window.innerWidth - props.width) / 2,
  y: (window.innerHeight - props.height) / 2,
};
const handleRef = ref();

const useDraggableRef = ref();
let isDown = false;
function MouseDown() {
  isDown = true;
}
function MouseUp() {
  if (isDown) {
    isDown = false;
    const el = useDraggableRef.value.$el;
    const rect = el.getBoundingClientRect();

    let { x, y } = rect;
    x = Math.min(Math.max(0, x), window.innerWidth - 100);
    y = Math.min(Math.max(0, y), window.innerHeight - 100);

    if (rect.x != x || rect.y != y) {
      el.style.left = x + "px";
      el.style.top = y + "px";
      localStorage.setItem(storageKey, JSON.stringify({ x, y }));
    }
  }
}
window.addEventListener("mouseup", MouseUp);
onUnmounted(() => {
  window.removeEventListener("mouseup", MouseUp);
});
</script>

<template>
  <UseDraggable
    ref="useDraggableRef"
    :storage-key="storageKey"
    storage-type="local"
    :handle="handleRef?.triggerRef"
    :initial-value="initialValue"
    class="popup"
    :style="{ width: props.width + 'px', height: props.height + 'px' }"
    @mousedown="MouseDown"
  >
    <header>
      <NEllipsis ref="handleRef"><slot name="header"></slot></NEllipsis>
      <NSpace>
        <slot name="tool"></slot>
        <div class="clickable" @click="Emit('closure')">
          <NIcon size="22" :component="Close" />
        </div>
      </NSpace>
    </header>
    <slot></slot>
  </UseDraggable>
</template>

<style lang="less" scoped>
.popup {
  position: fixed;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--border-color-radius);
  padding: var(--popup-padding);
  background: var(--background-color);
  border: 1px solid var(--border-color);
  box-shadow: 0px 12px 24px 0px var(--box-shadow);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: var(--text-color-focus);
    margin-bottom: 25px;
    :deep(.n-ellipsis) {
      width: calc(100% - 150px);
      cursor: move;
      // 禁止文字被鼠标选中
      moz-user-select: -moz-none;
      -moz-user-select: none;
      -o-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
}
</style>

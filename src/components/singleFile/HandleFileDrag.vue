<script lang="ts" setup>
import { configProviderPropsRef } from "@/utils/windows";
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import { ref } from "vue";

interface Emit {
  (e: "drop-callback", files: File[]): void;
}
const emit = defineEmits<Emit>();

const id = _Utility_GenerateUUID("handle-file-drag-");
const isFileDropHintVisible = ref(false);
/** 拖拽进入目标区域时触发 */
function handleDragEnter(payload: DragEvent) {
  payload.preventDefault();
  payload.stopPropagation();

  if (!payload.dataTransfer) {
    isFileDropHintVisible.value = false;
    return;
  }

  const types = payload.dataTransfer.types;
  isFileDropHintVisible.value = types.includes("Files");
}

/** 拖拽在目标区域内移动时触发 */
function handleDragOver(payload: DragEvent) {
  handleDragEnter(payload);
}
/** 移出拖拽目标区域内时触发 */
function handleDragLeave(payload: DragEvent) {
  const target = payload.target as HTMLElement;
  if (target.id != id) return;
  isFileDropHintVisible.value = false;
}

/** 拖拽放手时触发 */
function handleDrop(payload: DragEvent) {
  // 阻止浏览器默认打开文件的行为
  payload.preventDefault();
  payload.stopPropagation();
  isFileDropHintVisible.value = false;

  const files = payload.dataTransfer?.files;
  emit("drop-callback", Array.from(files || []));
}
</script>

<template>
  <div
    :id="id"
    :class="['handle-file-drag', isFileDropHintVisible && 'file-drop-hint']"
    :style="{
      '--color':
        configProviderPropsRef.theme?.common?.successColor || '#63e2b7',
    }"
    drag-tip="请将音频文件拖拽至此"
    @dragenter="handleDragEnter"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
  >
    <slot />
  </div>
</template>

<style scoped lang="less">
.file-drop-hint {
  position: relative;
  * {
    pointer-events: none;
  }
  &::after {
    content: attr(drag-tip);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    background-color: color-mix(in srgb, var(--color) 20%, transparent);
    border: 2px dashed var(--color);
    border-radius: 4px;
    font-size: 30px;
    color: var(--color);
    text-decoration: wavy underline;
  }
}
</style>

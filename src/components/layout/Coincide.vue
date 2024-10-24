<script setup lang="ts">
import { NSpace, NCollapseTransition, NButton, NCard } from "naive-ui";

interface PropsType {
  state: boolean;
  coincideTitle?: string;
  saveLabel?: string;
  closeLabel?: string;
}
const props = defineProps<PropsType>();

interface EmitsType {
  (e: "close"): void;
  (e: "save"): void;
}
const emit = defineEmits<EmitsType>();
</script>

<template>
  <div class="coincide-container">
    <slot></slot>
    <NCollapseTransition :show="props.state">
      <NCard class="coincide-content">
        <NSpace vertical class="coincide-content-body">
          <NSpace justify="space-between">
            <div v-if="props.coincideTitle" class="title">
              {{ props.coincideTitle }}
            </div>
            <slot name="header-button">
              <NSpace>
                <NButton @click="emit('save')" type="primary">{{
                  props.saveLabel || "保存"
                }}</NButton>
                <NButton @click="emit('close')" type="error">{{
                  props.closeLabel || "取消"
                }}</NButton>
              </NSpace>
            </slot>
          </NSpace>
          <slot name="coincide-content"></slot>
        </NSpace>
      </NCard>
    </NCollapseTransition>
  </div>
</template>

<style lang="less" scoped>
.coincide-container {
  width: 100%;
  height: 100%;
  position: relative;

  :deep(> .n-collapse-transition) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .coincide-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    z-index: 5;
    .coincide-content-body {
      height: 100%;
      .title {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 20px;
        font-weight: bold;
      }
      :deep(> div:last-child) {
        flex-grow: 1;
        height: 50px;
        overflow: hidden;
      }
    }
  }
}
</style>

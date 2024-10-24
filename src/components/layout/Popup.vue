<script setup lang="ts">
import { Close } from "@vicons/ionicons5";
import { NIcon, NEllipsis, NSpace } from "naive-ui";

interface EmitType {
  (e: "Closure"): void;
}
const Emit = defineEmits<EmitType>();
</script>

<template>
  <section class="popup-layout">
    <header>
      <NEllipsis><slot name="header"></slot></NEllipsis>
      <NSpace>
        <slot name="tool"></slot>
        <div class="clickable" @click="Emit('Closure')">
          <NIcon size="22" :component="Close" />
        </div>
      </NSpace>
    </header>
    <slot></slot>
  </section>
</template>

<style lang="less" scoped>
.popup-layout {
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
    }
  }
}
</style>

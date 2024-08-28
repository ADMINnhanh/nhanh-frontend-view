<script setup lang="ts"></script>

<template>
  <div class="set-item">
    <div class="title"><slot name="title"></slot></div>
    <div class="describe"><slot name="describe"></slot></div>
    <div class="value"><slot name="value"></slot></div>
  </div>
</template>

<style lang="less" scoped>
.set-item {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 16px;
    color: var(--text-color);
    :deep(*) {
      font-size: 14px;
      color: var(--text-color);
    }
  }
  .describe {
    font-size: 14px;
    color: var(--text-color);
    margin: 5px 0;
    :deep(focus) {
      color: #ff4444ba;
    }
  }
}
</style>

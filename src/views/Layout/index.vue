<script setup lang="ts">
import MyHeader from "./header/index.vue";
import MyBody from "./body/index.vue";
</script>

<template>
  <div class="home">
    <MyHeader />
    <MyBody />
  </div>
</template>

<style scoped lang="less">
.home {
  width: 100vw;
  height: var(--100vh);
  display: flex;
  flex-direction: column;
}
</style>

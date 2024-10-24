<script setup lang="ts">
import MyHeader from "./header.vue";
import MyBody from "./body.vue";
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
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

<script setup lang="ts">
import { NScrollbar } from "naive-ui";
import Echart from "./echarts.vue";
import SessionList from "./sessionList/index.vue";
</script>

<template>
  <NScrollbar>
    <Echart />
    <SessionList />
  </NScrollbar>
</template>

<style scoped lang="less"></style>

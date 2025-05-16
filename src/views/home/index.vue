<script setup lang="ts">
import { NScrollbar, NH1, NH6, NText } from "naive-ui";
import Echart from "./echarts.vue";
import SessionList from "./sessionList/index.vue";
</script>

<template>
  <NScrollbar>
    <NH1>
      <NText type="primary">站点访问统计</NText>
    </NH1>
    <NH6>
      <NText depth="3">基于用户会话的 PV/UV、停留时长、跳出率分析</NText>
    </NH6>
    <!-- <Echart /> -->
    <SessionList />
  </NScrollbar>
</template>

<style scoped lang="less">
.n-h1 {
  text-align: center;
  margin: 10px 0 0 !important;
}
.n-h6 {
  text-align: center;
  margin: 0 0 10px 0 !important;
}
</style>

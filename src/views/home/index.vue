<script setup lang="ts">
import service from "@/utils/axios";
import { NScrollbar } from "naive-ui";
//  import Echart from './echarts.vue'
import SessionList from "./sessionList.vue";
</script>

<template>
  <NScrollbar>
    <!-- <Echart/> -->
    <SessionList />
  </NScrollbar>
</template>

<style scoped lang="less"></style>

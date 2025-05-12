<script setup lang="ts">
import service from "@/utils/axios";
import { NScrollbar, NSkeleton, c } from "naive-ui";
import { ref } from "vue";
import * as echarts from "echarts";

const visitQualityStats = "visit-quality-stats";
const visitQualityStatsChart = ref<echarts.ECharts>();
const dailyVisitTrend = "daily-visit-trend";
const dailyVisitTrendChart = ref<echarts.ECharts>();
const pageVisitStats = "page-visit-stats";
const pageVisitStatsChart = ref<echarts.ECharts>();
// if (0)
service.get("/sys-visit-session/visit-quality-stats").then((res) => {
  const { highQualityCount, lowQualityCount, mediumQualityCount, totalVisits } =
    res.data;
  const option = {
    color: [
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#5470c6",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
      "#ea7ccc",
    ],
    title: {
      text: "访问质量统计信息",
      subtext: "总访问次数：" + totalVisits + "次",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      valueFormatter: (value: number) => value + "次访问",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        type: "pie",
        radius: "60%",
        center: ["50%", "60%"],
        data: [
          { value: highQualityCount, name: "高质量访问" },
          { value: mediumQualityCount, name: "中等质量访问" },
          { value: lowQualityCount, name: "低质量访问" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  const dom = document.getElementById(visitQualityStats);
  visitQualityStatsChart.value = echarts.init(dom);
  visitQualityStatsChart.value.setOption(option);
  requestAnimationFrame(() => visitQualityStatsChart.value!.resize());
});
</script>

<template>
  <NScrollbar>
    <div class="echarts">
      <div v-show="visitQualityStatsChart" :id="visitQualityStats"></div>
      <NSkeleton v-show="!visitQualityStatsChart" :sharp="false" />

      <div v-show="dailyVisitTrendChart" :id="dailyVisitTrend"></div>
      <NSkeleton v-show="!dailyVisitTrendChart" :sharp="false" />

      <div v-show="pageVisitStatsChart" :id="pageVisitStats"></div>
      <NSkeleton v-show="!pageVisitStatsChart" :sharp="false" />
    </div>
  </NScrollbar>
</template>

<style scoped lang="less">
.echarts {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    margin: 10px;
    flex-grow: 1;
    max-width: 100%;
    min-width: 500px;
    width: auto;
    height: 400px;
  }
}
</style>

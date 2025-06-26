<script setup lang="ts">
import { NScrollbar, NSkeleton } from "naive-ui";
import { markRaw, onUnmounted, ref, watch } from "vue";
import * as echarts from "echarts";
import {
  _Utility_Clone,
  _Utility_Debounce,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import type { ECBasicOption } from "echarts/types/dist/shared";
import { Settings } from "@/components/popups/components/Settings";
import {
  DailyVisitTrend,
  PageVisitStats,
  VisitQualityStats,
} from "@/assets/api/ruoyi/sysVisitSession";
import Media from "@/stores/media";

type Chart = {
  id: string;
  option?: ECBasicOption;
  chart?: echarts.ECharts;
};
/** 访问质量统计信息 */
const visitQualityStats = ref<Chart>({ id: "visit-quality-stats" });
/** 访问趋势统计信息 */
const dailyVisitTrend = ref<Chart>({ id: "daily-visit-trend" });
/** 页面访问统计信息 */
const pageVisitStats = ref<Chart>({ id: "page-visit-stats" });

function Init(theme?: string) {
  requestAnimationFrame(() => {
    [
      visitQualityStats.value,
      dailyVisitTrend.value,
      pageVisitStats.value,
    ].forEach((item) => {
      const { id, option, chart } = item;
      if (option && (theme || !chart)) {
        item.chart?.dispose();
        const dom = document.getElementById(id);
        const newChart = echarts.init(
          dom,
          (theme || Settings.value.theme) == "dark" ? "dark" : undefined
        );
        newChart.setOption(option);
        item.chart = markRaw(newChart);
      }
    });
  });
}
watch(() => Settings.value.theme, Init);

/** 访问质量统计 */
VisitQualityStats().then((res) => {
  const { highQualityCount, lowQualityCount, mediumQualityCount, totalVisits } =
    res.data;
  const option = {
    backgroundColor: "",
    color: [
      "#ee6666",
      "#fac858",
      "#91cc75",
      "#5470c6",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
      "#ea7ccc",
    ],
    title: {
      text: "访问质量统计",
      subtext: "总访问次数：" + totalVisits + "次",
      left: Media.value.isMobileStyle ? "right" : "center",
    },
    tooltip: {
      trigger: "item",
      valueFormatter: (value: number) => value + "次访问",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: {
      type: "pie",
      radius: "60%",
      center: ["50%", "60%"],
      selectedMode: "single",
      label: {
        position: "inner",
      },
      data: [
        { value: lowQualityCount, name: "低质量访问" },
        { value: mediumQualityCount, name: "中等质量访问" },
        { value: highQualityCount, name: "高质量访问", selected: true },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  };
  visitQualityStats.value.option = option;
  Init();
});
/** 每日访问趋势 */
DailyVisitTrend().then((res) => {
  const seriesOption = {
    type: "line",
    showSymbol: false,
    stack: "Total",
    smooth: true,
  };
  const visualMapOption = {
    show: false,
    type: "continuous",
    min: 0,
    max: 0,
    color: ["#ee6666", "#fac858", "#91cc75"],
  };

  const dateList: string[] = [];
  const seriesList = [
    {
      name: "低质量访问次数",
      ...seriesOption,
      data: [] as number[],
    },
    {
      name: "中等质量访问次数",
      ...seriesOption,
      data: [] as number[],
    },
    {
      name: "高质量访问次数",
      ...seriesOption,
      data: [] as number[],
    },
  ];

  res.data.forEach((item) => {
    const {
      date,
      highQualityCount,
      lowQualityCount,
      mediumQualityCount,
      totalDailyVisits,
    } = item;
    dateList.push(date);
    seriesList[0].data.push(lowQualityCount);
    seriesList[1].data.push(mediumQualityCount);
    seriesList[2].data.push(highQualityCount);
    visualMapOption.max = Math.max(visualMapOption.max, totalDailyVisits);
  });
  const visualMap = [
    {
      ...visualMapOption,
      seriesIndex: 0,
      color: ["#ee6666", "#ee666633"],
    },
    {
      ...visualMapOption,
      seriesIndex: 1,
      color: ["#fac858", "#fac85833"],
    },
    {
      ...visualMapOption,
      seriesIndex: 2,
      color: ["#91cc75", "#91cc7533"],
    },
  ];
  const option = {
    backgroundColor: "",
    color: ["#ee6666", "#fac858", "#91cc75"],
    visualMap,
    title: {
      text: "每日访问趋势数据",
      left: Media.value.isMobileStyle ? "right" : "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      data: dateList,
    },
    yAxis: {},
    grid: {
      top: 100,
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 90,
        end: 100,
      },
      {
        type: "inside",
        realtime: true,
        start: 90,
        end: 100,
      },
    ],
    series: seriesList,
  };

  dailyVisitTrend.value.option = option;

  Init();
});
/** 页面访问统计 */
PageVisitStats().then((res) => {
  const data = res.data;
  const dateList = data.map((item) => item.pageName);
  const series = (
    [
      ["lowQualityCount", "低质量访问"],
      ["mediumQualityCount", "中等质量访问"],
      ["highQualityCount", "高质量访问"],
    ] as const
  ).map(([key, name]) => {
    return {
      name,
      type: "bar",
      stack: "total",
      label: {
        show: true,
        formatter: (params: any) =>
          params.data.value > 0
            ? Math.round((params.data.value / params.data.total) * 1000) / 10 +
              "%"
            : "",
      },
      data: data.map((item) => ({
        value: item[key],
        total: item.totalDailyVisits,
      })),
    };
  });

  const option = {
    backgroundColor: "",
    color: ["#ee6666", "#fac858", "#91cc75"],
    title: {
      text: "页面访问统计",
      left: Media.value.isMobileStyle ? "right" : "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      valueFormatter: (value: number) => value + "次访问",
    },
    yAxis: {
      type: "value",
    },
    xAxis: {
      type: "category",
      data: dateList,
      axisLabel: {
        formatter: function (value: string) {
          return value.slice(0, 6) + (value.length > 6 ? "..." : "");
        },
      },
    },
    grid: {
      top: 100,
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100,
      },
      {
        type: "inside",
        realtime: true,
        start: 0,
        end: 100,
      },
    ],
    series,
  };

  pageVisitStats.value.option = option;
  Init();
});

const resizeOpt = {
  animation: { duration: 1500, easing: "cubicInOut" },
} as const;
const echartsId = _Utility_GenerateUUID("echarts-");
const resize = new ResizeObserver(
  _Utility_Debounce(() => {
    visitQualityStats.value.chart?.resize(resizeOpt);
    dailyVisitTrend.value.chart?.resize(resizeOpt);
    pageVisitStats.value.chart?.resize(resizeOpt);
  }, 200)
);
requestAnimationFrame(() => {
  resize.observe(document.getElementById(echartsId)!);
});
onUnmounted(() => {
  resize.disconnect();
});
</script>

<template>
  <NScrollbar>
    <div class="echarts" :id="echartsId">
      <template
        v-for="item in [visitQualityStats, dailyVisitTrend, pageVisitStats]"
        :key="item.id"
      >
        <div v-if="item.option" :id="item.id"></div>
        <NSkeleton v-else :sharp="false" />
      </template>
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
    :deep(> div:first-child) {
      width: 100% !important;
    }
  }
}
.is-mobile {
  .echarts {
    > div {
      min-width: 100%;
    }
  }
}
</style>

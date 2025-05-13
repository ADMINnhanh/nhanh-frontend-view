<script setup lang="ts">
import service from "@/utils/axios";
import { NCard, NDataTable, type DataTableBaseColumn } from "naive-ui";
import type { RowData } from "naive-ui/es/data-table/src/interface";
import { reactive, ref } from "vue";

const tableRef = ref<InstanceType<typeof NDataTable>>();
interface Query {
  /**
   * 客户端IP地址（模糊匹配）
   */
  clientIp?: string;
  /**
   * 访问结束时间（格式：yyyy-MM-dd HH:mm:ss）
   */
  endTime?: string;
  /**
   * 当前页码
   */
  pageIndex?: number;
  /**
   * 每页数量
   */
  pageSize?: number;
  /**
   * 访问开始时间（格式：yyyy-MM-dd HH:mm:ss）
   */
  startTime?: string;
  /**
   * 访问质量（如：0=低质量, 1=中质量, 2=高质量）
   */
  visitQuality?: string;
  /**
   * 访问来源（如：搜索引擎、直接访问）
   */
  visitSource?: string;
  /**
   * 是否升序（true=升序，false=降序）
   */
  asc?: boolean;
  /**
   * 排序字段（如：visitStartTime, clientIp）
   */
  sortBy?: string;
}
const query = ref<Query>({});

const data = ref([
  {
    sessionId: 42,
    visitStartTime: "2025-05-13 14:07:57",
    visitEndTime: "2025-05-13 14:16:20",
    totalVisitTime: 503,
    visitQuality: 1,
    entryName: "home",
    exitName: "GraphingEquations",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 06:16:37",
  },
  {
    sessionId: 41,
    visitStartTime: "2025-05-13 14:09:30",
    visitEndTime: "2025-05-13 14:16:20",
    totalVisitTime: 410,
    visitQuality: 1,
    entryName: "home",
    exitName: "GraphingEquations",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 06:16:18",
  },
  {
    sessionId: 40,
    visitStartTime: "2025-05-13 14:03:02",
    visitEndTime: "2025-05-13 14:07:57",
    totalVisitTime: 294,
    visitQuality: 1,
    entryName: "home",
    exitName: "home",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 06:08:13",
  },
  {
    sessionId: 39,
    visitStartTime: "2025-05-13 14:00:16",
    visitEndTime: "2025-05-13 14:03:02",
    totalVisitTime: 165,
    visitQuality: 0,
    entryName: "home",
    exitName: "home",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 06:02:59",
  },
  {
    sessionId: 38,
    visitStartTime: "2025-05-13 13:54:51",
    visitEndTime: "2025-05-13 14:00:16",
    totalVisitTime: 324,
    visitQuality: 1,
    entryName: "_Canvas",
    exitName: "home",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 06:00:13",
  },
  {
    sessionId: 37,
    visitStartTime: "2025-05-13 13:41:33",
    visitEndTime: "2025-05-13 13:54:51",
    totalVisitTime: 798,
    visitQuality: 2,
    entryName: "home",
    exitName: "_Canvas",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 05:54:48",
  },
  {
    sessionId: 36,
    visitStartTime: "2025-05-13 13:13:27",
    visitEndTime: "2025-05-13 13:41:32",
    totalVisitTime: 1685,
    visitQuality: 2,
    entryName: "home",
    exitName: "home",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 05:41:30",
  },
  {
    sessionId: 35,
    visitStartTime: "2025-05-13 13:03:16",
    visitEndTime: "2025-05-13 13:13:27",
    totalVisitTime: 610,
    visitQuality: 2,
    entryName: "home",
    exitName: "home",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 05:13:24",
  },
  {
    sessionId: 34,
    visitStartTime: "2025-05-13 12:36:30",
    visitEndTime: "2025-05-13 13:03:16",
    totalVisitTime: 1606,
    visitQuality: 2,
    entryName: "home",
    exitName: "home",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 05:03:13",
  },
  {
    sessionId: 33,
    visitStartTime: "2025-05-13 12:36:42",
    visitEndTime: "2025-05-13 13:03:16",
    totalVisitTime: 1594,
    visitQuality: 2,
    entryName: "home",
    exitName: "home",
    visitSource: "https://localhost:5173/",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    clientIp: "0:0:0:0:0:0:0:1",
    createTime: "2025-05-13 05:03:13",
  },
]);
const columns = ref<DataTableBaseColumn<RowData>[]>([
  {
    title: "访问质量",
    key: "visitQuality",
    width: 100,
    sorter: true,
  },
  {
    title: "访问开始时间",
    key: "visitStartTime",
    width: 160,
    sorter: true,
  },
  {
    title: "访问结束时间",
    key: "visitEndTime",
    width: 160,
    sorter: true,
  },
  {
    title: "总访问时长（秒）",
    key: "totalVisitTime",
    width: 160,
    sorter: true,
  },
  {
    title: "入口页",
    key: "entryName",
    width: 160,
    sorter: true,
  },
  {
    title: "出口页",
    key: "exitName",
    width: 160,
    sorter: true,
  },
  {
    title: "访问来源",
    key: "visitSource",
    width: 160,
    sorter: true,
  },
  {
    title: "用户设备信息",
    key: "userAgent",
    sorter: true,
  },
]);
const paginationReactive = reactive({
  page: 1,
  pageSize: 10,
  pageCount: 0,
  showSizePicker: true,
  pageSizes: [10, 20, 50, 100],
  onChange: (page: number) => {
    paginationReactive.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize;
  },
});
function UpdateSort(option: {
  columnKey: string;
  sorter: boolean;
  order: "descend" | "ascend" | false;
}) {
  const { columnKey, order } = option;
  const newAsc =
    order == "ascend" ? true : order == "descend" ? false : undefined;
  const newSortBy = order ? columnKey : undefined;
  const { asc, sortBy } = query.value;
  if (asc != newAsc || sortBy != newSortBy) {
    query.value.asc = newAsc;
    query.value.sortBy = newSortBy;
    tableRef.value?.sort(option.columnKey, option.order);
  }
}
</script>

<template>
  <NCard title="访问会话列表">
    <NDataTable
      ref="tableRef"
      :data="data"
      :columns="columns"
      :pagination="paginationReactive"
      flex-height
      :scroll-x="1600"
      @update:sorter="UpdateSort"
    />
  </NCard>
</template>

<style scoped lang="less">
.n-data-table {
  height: calc(100vh - 171px);
}
</style>

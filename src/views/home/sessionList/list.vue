<script setup lang="ts">
import Media from "@/stores/media";
import ruoyi from "@/utils/ruoyi";
import { Refresh, Search } from "@vicons/ionicons5";
import {
  NButton,
  NDataTable,
  NDatePicker,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NIcon,
  NInput,
  NPagination,
  NSelect,
  NSpace,
  NTag,
  useLoadingBar,
  type DataTableBaseColumn,
} from "naive-ui";
import { computed, h, ref } from "vue";

const isCloud = import.meta.env.VITE_SHOW_RECORD_NUMBER;

interface Query {
  /**
   * 客户端IP地址（模糊匹配）
   */
  clientIp?: string;
  /**
   * 访问结束时间戳
   */
  endTime?: number;
  /**
   * 当前页码
   */
  pageIndex?: number;
  /**
   * 每页数量
   */
  pageSize?: number;
  /**
   * 访问开始时间戳
   */
  startTime?: number;
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
const query = ref<Query>({
  pageIndex: 1,
  pageSize: 10,
});
const timeRange = ref<[number, number] | null>();

/**
 * 网站访问会话返回数据
 */
interface WebsiteAccessSessionReturnsData {
  /**
   * 客户端IP地址
   */
  clientIp: string;
  /**
   * 记录创建时间
   */
  createTime: string;
  /**
   * 入口页名称
   */
  entryName: string;
  /**
   * 出口页名称
   */
  exitName: string;
  /**
   * 会话ID（自增长主键）
   */
  sessionId: number;
  /**
   * 总访问时长（秒）
   */
  totalVisitTime: number;
  /**
   * 用户设备信息（User-Agent）
   */
  userAgent: string;
  /**
   * 访问结束时间
   */
  visitEndTime: string;
  /**
   * 访问质量: 0=低质量, 1=中质量, 2=高质量
   */
  visitQuality: number;
  /**
   * 访问来源
   */
  visitSource: string;
  /**
   * 访问开始时间
   */
  visitStartTime: string;
}
const data = ref({
  list: [] as WebsiteAccessSessionReturnsData[],
  total: 0,
});

function FormatDuration(seconds: number) {
  if (seconds <= 0) return "0 秒";

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = Math.floor(seconds % 60);

  let result = "";

  if (days > 0) result += `${days} 天 `;
  if (hours > 0) result += `${hours} 小时 `;
  if (minutes > 0 && days === 0) result += `${minutes} 分 `;
  if (seconds > 0 && hours === 0 && days === 0) result += `${seconds} 秒 `;

  return result || "0 秒"; // 防止所有单位都是0的情况
}
const tableRef = ref<InstanceType<typeof NDataTable>>();
const columns = ref<DataTableBaseColumn<WebsiteAccessSessionReturnsData>[]>([
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
    title: "访问质量",
    key: "visitQuality",
    width: 100,
    sorter: true,
    render(rowData, rowIndex) {
      const text = ["低", "中等", "高"][rowData.visitQuality] + "质量";
      const type = (["error", "warning", "success"] as const)[
        rowData.visitQuality
      ];
      return h(NTag, { type }, () => text);
    },
  },
  {
    title: "总访问时长",
    key: "totalVisitTime",
    width: 160,
    sorter: true,
    render: (rowData, rowIndex) => FormatDuration(rowData.totalVisitTime),
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
    width: 190,
    sorter: true,
  },
  {
    title: "用户设备信息",
    key: "userAgent",
    minWidth: 200,
    sorter: true,
  },
  {
    title: "操作",
    key: "operate",
    fixed: "right",
    width: 60,
    render(rowData, rowIndex) {
      return h(
        NButton,
        {
          type: "primary",
          text: true,
          onClick: () => GetDetails(rowData.sessionId),
        },
        () => "明细"
      );
    },
  },
]);
const formHeight = ref(66);
const formRef = ref();
requestAnimationFrame(() => {
  formHeight.value = formRef.value.$el.offsetHeight;
});
const dataTableStyle = computed(() => {
  const headerHeight = 61;
  const tabHeight = Media.value.isMobileStyle ? 0 : 39;
  const routerViewMargin = isCloud && !Media.value.isMobileStyle ? 10 : 20;
  const cardMargin = 20;
  const cardHeaderHeight = 73;
  const gap = 8 * 2;
  const pageHeight = 28;
  const cardPadding = 20;
  const recordNumber = isCloud ? 40 : 0;
  const border = 2;

  const height =
    "calc(100vh " +
    [
      headerHeight,
      tabHeight,
      routerViewMargin,
      cardMargin,
      cardHeaderHeight,
      formHeight.value,
      gap,
      pageHeight,
      cardPadding,
      recordNumber,
      border,
    ]
      .map((v) => `- ${v}px`)
      .join(" ") +
    ")";

  return { height };
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

  query.value.asc = newAsc;
  query.value.sortBy = newSortBy;
  UpdateList();
}
const loadingBar = useLoadingBar();
function UpdateList() {
  query.value.startTime = timeRange.value?.[0];
  query.value.endTime = timeRange.value?.[1];

  loadingBar.start();
  ruoyi
    .get("/sys-visit-session/list", { params: query.value })
    .then((res) => {
      data.value = res.data;
      loadingBar.finish();
    })
    .catch(() => loadingBar.error());
}
function RefreshQuery() {
  tableRef.value?.clearSorter();
  query.value = {
    pageIndex: 1,
    pageSize: 10,
  };
  timeRange.value = null;
  UpdateList();
}
UpdateList();

/**
 * 页面访问日志实体
 */
interface PageAccessLogEntity {
  /**
   * 日志ID（自增长主键）
   */
  logId: number;
  /**
   * 访问的页面名称
   */
  pageName: string;
  /**
   * 关联会话ID
   */
  sessionId: number;
  /**
   * 页面停留时间（秒）
   */
  stayTime: number;
  /**
   * 访问质量: 0=低质量, 1=中质量, 2=高质量
   */
  visitQuality: number;
  [property: string]: any;
}

const sessionId = ref();
const detailsList = ref<{ [sessionId in string]: PageAccessLogEntity[] }>({});
const detailsColumns: DataTableBaseColumn<PageAccessLogEntity>[] = [
  {
    title: "页面名称",
    key: "pageName",
    sorter: "default",
  },
  {
    title: "页面停留时间",
    key: "stayTime",
    sorter: "default",
    width: 150,
    render: (rowData, rowIndex) => FormatDuration(rowData.stayTime),
  },
  {
    title: "访问质量",
    key: "visitQuality",
    sorter: "default",
    width: 150,
    render(rowData, rowIndex) {
      const text = ["低", "中等", "高"][rowData.visitQuality] + "质量";
      const type = (["error", "warning", "success"] as const)[
        rowData.visitQuality
      ];
      return h(NTag, { type }, () => text);
    },
  },
];
function GetDetails(id: number) {
  sessionId.value = id;
  if (!detailsList.value[id]) {
    loadingBar.start();
    ruoyi
      .get("/sys-visit-session/detail/" + id)
      .then((res) => {
        detailsList.value[id] = res.data;
        loadingBar.finish();
      })
      .catch(() => loadingBar.error());
  }
}
</script>

<template>
  <NSpace vertical>
    <NForm
      ref="formRef"
      inline
      label-width="auto"
      label-placement="left"
      :model="query"
    >
      <NFormItem label="客户端IP地址">
        <NInput
          v-model:value="query.clientIp"
          placeholder="请输入 客户端IP地址"
        />
      </NFormItem>
      <NFormItem label="访问来源">
        <NInput
          v-model:value="query.visitSource"
          placeholder="请输入 访问来源"
        />
      </NFormItem>
      <NFormItem label="访问质量">
        <NSelect
          v-model:value="query.visitQuality"
          placeholder="请输入 访问质量"
          :options="[
            { label: '低质量', value: 0 },
            { label: '中质量', value: 1 },
            { label: '高质量', value: 2 },
          ]"
        />
      </NFormItem>
      <NFormItem label="访问时间">
        <NDatePicker
          v-model:value="timeRange"
          type="datetimerange"
          clearable
          :is-date-disabled="(ts :number)=> ts > Date.now()"
        />
      </NFormItem>
      <NFormItem>
        <NSpace>
          <NButton type="primary" @click="UpdateList">
            <template #icon>
              <NIcon :component="Search" />
            </template>
            搜索
          </NButton>
          <NButton @click="RefreshQuery">
            <template #icon>
              <NIcon :component="Refresh" />
            </template>
            重置
          </NButton>
        </NSpace>
      </NFormItem>
    </NForm>
    <NDataTable
      ref="tableRef"
      :data="data.list"
      :columns="columns"
      flex-height
      :scroll-x="1600"
      @update:sorter="UpdateSort"
      :style="dataTableStyle"
    />
    <NPagination
      v-model:page="query.pageIndex"
      @update:page="UpdateList"
      v-model:page-size="query.pageSize"
      @update:page-size="UpdateList"
      :item-count="data.total"
      :page-sizes="[10, 20, 50, 100]"
      show-quick-jumper
      show-size-picker
    >
      <template #prefix>共 {{ data.total }} 项</template>
    </NPagination>
  </NSpace>
  <NDrawer
    :show="!!sessionId"
    @update:show="sessionId = undefined"
    :width="600"
  >
    <NDrawerContent title="访问会话详情">
      <NDataTable
        :data="detailsList[sessionId]"
        :columns="detailsColumns"
        style="height: calc(100vh - 100px)"
      />
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped lang="less">
.n-form {
  flex-wrap: wrap;
  .n-select {
    width: 171px;
  }
}
.n-pagination {
  justify-content: end;
}
</style>

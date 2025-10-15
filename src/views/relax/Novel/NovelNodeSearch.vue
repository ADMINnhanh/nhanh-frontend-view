<script setup lang="ts">
import {
  NCard,
  NSpace,
  NScrollbar,
  NIcon,
  NButton,
  NSpin,
  NInput,
  NEmpty,
  NInputGroup,
  NAlert,
  NFlex,
  NTag,
  NDrawer,
  NDrawerContent,
  NText,
  NButtonGroup,
  NInputGroupLabel,
} from "naive-ui";
import {
  ArrowBackOutline,
  ArrowForwardOutline,
  DocumentTextOutline,
  SearchOutline,
} from "@vicons/ionicons5";
import { ref, watch } from "vue";
import { NovelService, novelService, type Chapter, type Novel } from ".";
import {
  _Format_NumberWithCommas,
  _Format_NumberWithUnit,
} from "nhanh-pure-function";
import ChapterContent from "./ChapterContent.vue";

interface Props {
  novelId?: number;
}
const props = defineProps<Props>();

const loading = ref(false);
const keyword = ref("");
type Chapters = {
  chapter: Chapter;
  contentSnippet: string;
}[];
const novel = ref<Novel>();
const chapters = ref<Chapter[]>();
const chaptersByKeyword = ref<Chapters>();
watch(
  () => props.novelId,
  (id) => {
    chapters.value = undefined;
    chaptersByKeyword.value = undefined;
    keyword.value = "";
    loading.value = false;
    if (id) {
      loading.value = true;
      const promises = [
        novelService.getNovel(id).then((v) => (novel.value = v)),
        novelService.getChapters(id).then((v) => (chapters.value = v)),
      ];
      Promise.allSettled(promises).finally(() => (loading.value = false));
    }
  }
);

function search() {
  loading.value = true;

  novelService
    .searchChapters(props.novelId!, keyword.value)
    .then((v) => (chaptersByKeyword.value = v))
    .finally(() => (loading.value = false));
}

const active = ref(false);
const chapterDetails = ref<Chapter & { content: string }>();
function openChapter(item: Chapter) {
  novelService.getChapterContent(item.id!).then((v) => {
    v = NovelService.formatString(v || "", keyword.value);
    chapterDetails.value = { ...item, content: v };
    active.value = true;
  });
}
function goToPrevChapter() {
  const order = chapterDetails.value!.order - 2;
  const item = chapters.value![order];
  if (item) openChapter(item);
  else window.$message.warning("没有上一章了");
}
function goToNextChapter() {
  const order = chapterDetails.value!.order;
  const item = chapters.value![order];
  if (item) openChapter(item);
  else window.$message.warning("没有下一章了");
}
</script>

<template>
  <NSpin v-if="novelId" :show="loading">
    <NAlert v-if="novel" type="info" :title="novel.name">
      <NFlex>
        <NTag round type="info">
          章节总数: {{ _Format_NumberWithCommas(novel.chapterCount) }}
        </NTag>
        <n-tag round type="info">
          字符数: {{ _Format_NumberWithUnit(novel.contentLength) }}
        </n-tag>
        <n-tag round type="primary"> 更新时间: {{ novel.updatedTime }} </n-tag>
      </NFlex>
    </NAlert>
    <NInputGroup>
      <NInputGroupLabel>
        共匹配到 {{ chaptersByKeyword ? chaptersByKeyword.length : "*" }} 章
      </NInputGroupLabel>
      <NInput
        v-model:value="keyword"
        :disabled="loading"
        placeholder="请输入关键字"
        clearable
        @keydown.enter="search"
      />
      <NButton :disabled="loading || !keyword" type="primary" @click="search">
        <template #icon>
          <NIcon :component="SearchOutline" />
        </template>
        搜索
      </NButton>
    </NInputGroup>

    <NScrollbar v-if="chaptersByKeyword && chaptersByKeyword.length > 0">
      <NCard
        v-for="novel in chaptersByKeyword"
        :key="novel.chapter.id"
        :title="novel.chapter.title"
        size="small"
        class="novel-card"
        embedded
      >
        <template #header-extra>
          <NButton
            @click="openChapter(novel.chapter)"
            type="info"
            quaternary
            size="small"
          >
            <template #icon>
              <NIcon :component="DocumentTextOutline" />
            </template>
            查看完整章节
          </NButton>
        </template>
        <ChapterContent v-html="novel.contentSnippet" min />
      </NCard>
    </NScrollbar>
    <NEmpty v-else-if="chaptersByKeyword" description="没有相关文字" />
    <NScrollbar v-else-if="chapters">
      <NCard
        v-for="novel in chapters"
        :key="novel.id"
        :title="novel.title"
        size="small"
        class="novel-card"
        embedded
      >
        <template #header-extra>
          <NSpace>
            <NButton
              @click="openChapter(novel)"
              type="info"
              quaternary
              size="small"
            >
              <template #icon>
                <NIcon :component="DocumentTextOutline" />
              </template>
              查看章节
            </NButton>
          </NSpace>
        </template>
      </NCard>
    </NScrollbar>
  </NSpin>
  <NEmpty v-else description="还未选择小说" />

  <NDrawer
    v-model:show="active"
    style="width: 1000px; max-width: 100vw"
    :auto-focus="false"
  >
    <NDrawerContent closable>
      <template #header>
        <NSpace align="center">
          <NText>{{ chapterDetails?.title }}</NText>
          <NButtonGroup>
            <NButton @click="goToPrevChapter">
              <template #icon>
                <NIcon :component="ArrowBackOutline" />
              </template>
              上一章
            </NButton>
            <NButton @click="goToNextChapter" icon-placement="right">
              <template #icon>
                <NIcon :component="ArrowForwardOutline" />
              </template>
              下一章
            </NButton>
          </NButtonGroup>
        </NSpace>
      </template>
      <ChapterContent v-html="chapterDetails?.content" />
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped lang="less">
.n-spin-container {
  height: 100%;
  :deep(.n-spin-content) {
    height: 100%;
    display: flex;
    flex-direction: column;
    .n-input-group {
      margin: 10px 0;
    }
    .n-scrollbar {
      height: 0;
      flex-grow: 1;
      .n-card {
        margin-bottom: 10px;
        line-height: 2;
        font-family: cursive;
      }
    }
  }
}
</style>

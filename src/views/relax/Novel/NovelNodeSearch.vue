<script setup lang="ts">
import {
  NCard,
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
  NInputGroupLabel,
} from "naive-ui";
import { DocumentTextOutline, SearchOutline } from "@vicons/ionicons5";
import { ref, watch } from "vue";
import { novelService, type Chapter, type Novel } from ".";
import {
  _Format_NumberWithCommas,
  _Format_NumberWithUnit,
} from "nhanh-pure-function";
import ChapterContent from "./ChapterContent.vue";
import ReadingMode from "./ReadingMode.vue";
import { useLocalStorage } from "@vueuse/core";
import Media from "@/stores/media";

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
  if (!keyword.value.trim()) {
    loading.value = true;
    setTimeout(() => (loading.value = false), 500);
    return setTimeout(() => (chaptersByKeyword.value = undefined), 50);
  }

  loading.value = true;

  novelService
    .searchChapters(props.novelId!, keyword.value)
    .then((v) => (chaptersByKeyword.value = v))
    .finally(() => (loading.value = false));
}

const chapterDetails = useLocalStorage<any>("novel-chapter-reading-mode", {});
function openChapter(item: Chapter) {
  chapterDetails.value = {};
  requestAnimationFrame(() => {
    chapterDetails.value = {
      novelId: props.novelId!,
      order: item.order,
      min: false,
      color: "rgba(255, 255, 255, 0.4)",
      size: Media.value.isMobileStyle ? 19 : 22,
    };
  });
}
</script>

<template>
  <NSpin v-if="novelId" :show="loading">
    <NAlert v-if="novel" type="info" :title="novel.name" closable>
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
      <NButton :disabled="loading" type="primary" @click="search">
        <template #icon>
          <NIcon :component="SearchOutline" />
        </template>
        搜索
      </NButton>
    </NInputGroup>

    <NCard class="n-card-class" size="small" :bordered="false">
      <NScrollbar v-if="chaptersByKeyword && chaptersByKeyword.length > 0">
        <div
          v-for="novel in chaptersByKeyword"
          :key="novel.chapter.id"
          class="my-n-card"
        >
          <div class="header">
            <span>{{ novel.chapter.title }}</span>
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
          </div>
          <div class="content">
            <ChapterContent v-html="novel.contentSnippet" min />
          </div>
        </div>
      </NScrollbar>
      <NEmpty v-else-if="chaptersByKeyword" description="没有相关文字" />
      <NScrollbar v-else-if="chapters">
        <div v-for="novel in chapters" :key="novel.id" class="my-n-card">
          <div class="header">
            <span>{{ novel.title }}</span>
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
          </div>
        </div>
      </NScrollbar>
    </NCard>
  </NSpin>
  <NEmpty v-else description="还未选择小说" />

  <ReadingMode
    v-if="chapterDetails.novelId && chapterDetails.order"
    @close="chapterDetails = {}"
  />
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
    .n-card-class > .n-card__content {
      padding: 0;

      display: flex;
      flex-direction: column;
      > .n-scrollbar {
        height: 0;
        flex-grow: 1;
        .my-n-card {
          margin-bottom: 10px;
          line-height: 2;
          font-family: cursive;

          background-color: var(--n-color-embedded);
          border: 1px solid var(--n-border-color);
          border-radius: var(--n-border-radius);

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--n-padding-top) var(--n-padding-left)
              var(--n-padding-bottom) var(--n-padding-left);
          }
          .content {
            padding: 0 var(--n-padding-left) var(--n-padding-bottom)
              var(--n-padding-left);
          }
        }
      }
    }
  }
}
</style>

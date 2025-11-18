<script setup lang="ts">
import {
  NScrollbar,
  NIcon,
  NButton,
  NSpin,
  NButtonGroup,
  NModal,
} from "naive-ui";
import { ArrowBackOutline, ArrowForwardOutline } from "@vicons/ionicons5";
import { ref } from "vue";
import { novelService, type Chapter } from ".";
import ChapterContent from "./ChapterContent.vue";
import { useLocalStorage } from "@vueuse/core";

interface Props {
  novelId: number;
  order: number;
}
const props = defineProps<Props>();
interface Emit {
  (e: "close"): void;
}
const emit = defineEmits<Emit>();

const active = ref(false);
requestAnimationFrame(() => (active.value = true));

const loading = ref(true);
const chapters = ref<Chapter[]>();
const chapterDetails = ref<Chapter & { content: string }>();

novelService
  .getChapters(props.novelId)
  .then((v) => {
    chapters.value = v;
    openChapter(v[props.order - 1]);

    const mask = document
      .getElementById("ReadingMode")
      ?.closest(".n-scrollbar-content")
      ?.querySelector(".n-modal-mask") as HTMLElement;
    mask.style.backgroundColor = "rgba(0,0,0,0.85)";
  })
  .finally(() => (loading.value = false));

const scrollbarRef = ref<InstanceType<typeof NScrollbar>>();
/** 滚动条回归顶部 */
function scrollToTop() {
  scrollbarRef.value?.scrollTo(0, 0);
}

const chapterDetailsLocal = useLocalStorage<any>(
  "novel-chapter-reading-mode",
  {}
);
function openChapter(item: Chapter) {
  novelService.getChapterContent(item.id!).then((v) => {
    chapterDetailsLocal.value.order = item.order;

    chapterDetails.value = { ...item, content: v! };
    scrollToTop();
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
  <NModal
    v-model:show="active"
    @after-leave="emit('close')"
    :auto-focus="false"
    preset="card"
    :title="chapterDetails?.title"
    style="width: 1300px"
    id="ReadingMode"
  >
    <template #header-extra>
      <NButtonGroup size="small">
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
    </template>
    <NScrollbar ref="scrollbarRef" style="max-height: calc(100vh - 88px)">
      <NSpin :show="loading">
        <ChapterContent v-html="chapterDetails?.content" />
      </NSpin>
    </NScrollbar>
  </NModal>
</template>

<style lang="less">
body.dark #ReadingMode * {
  color: rgba(255, 255, 255, 0.4);
}
</style>

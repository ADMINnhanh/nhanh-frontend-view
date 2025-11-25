<script setup lang="ts">
import {
  NScrollbar,
  NIcon,
  NButton,
  NSpin,
  NButtonGroup,
  NModal,
  NSplit,
  NVirtualList,
  NMenu,
  type VirtualListInst,
  NSpace,
  NRadioGroup,
  NRadioButton,
} from "naive-ui";
import { ArrowBackOutline, ArrowForwardOutline } from "@vicons/ionicons5";
import { onUnmounted, ref } from "vue";
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
/** 滚动条滚动指定距离 */
function scrollTo(y: number) {
  const container = scrollbarRef.value?.$el.nextSibling.querySelector(
    ".n-scrollbar-container"
  ) as HTMLElement;

  const scrollTop = container.getAttribute("scrollTop");
  container.setAttribute("scrollToTop", Number(scrollTop) + y + "");
}

const virtualListInst = ref<VirtualListInst>();
const chapterDetailsLocal = useLocalStorage<any>(
  "novel-chapter-reading-mode",
  {}
);
function openChapter(item: Chapter) {
  novelService.getChapterContent(item.id!).then((v) => {
    chapterDetailsLocal.value.order = item.order;
    virtualListInst.value?.scrollTo({
      key: item.order,
      debounce: true,
      behavior: "smooth",
    });
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
/** 快捷键 */
function shortcutKey(e: KeyboardEvent) {
  if (e.key === "ArrowLeft") goToPrevChapter();
  else if (e.key === "ArrowRight") goToNextChapter();
  else if (e.key === "ArrowUp") scrollTo(-100);
  else if (e.key === "ArrowDown") scrollTo(100);
}
window.addEventListener("keydown", shortcutKey);
onUnmounted(() => window.removeEventListener("keydown", shortcutKey));
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
      <NSpace>
        <NRadioGroup
          v-model:value="chapterDetailsLocal.min"
          size="small"
          class="size-radio"
        >
          <NRadioButton :value="true" label="min" />
          <NRadioButton :value="false" label="max" />
        </NRadioGroup>
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
      </NSpace>
    </template>
    <NSplit
      style="height: calc(100vh - 88px)"
      direction="horizontal"
      :max="0.75"
      :default-size="0.25"
    >
      <template #1>
        <NVirtualList
          ref="virtualListInst"
          key-field="order"
          :item-size="54"
          :items="chapters"
        >
          <template #default="{ item }">
            <NMenu
              :value="chapterDetails?.id"
              @update:value="openChapter(item)"
              :options="[{ label: item.title, key: item.id }]"
            />
          </template>
        </NVirtualList>
      </template>
      <template #2>
        <NScrollbar ref="scrollbarRef">
          <NSpin :show="loading">
            <ChapterContent
              v-html="chapterDetails?.content"
              :min="chapterDetailsLocal.min"
            />
          </NSpin>
        </NScrollbar>
      </template>
    </NSplit>
  </NModal>
</template>

<style lang="less">
body.dark #ReadingMode * {
  color: rgba(255, 255, 255, 0.4);
}
.size-radio {
  --n-button-border-color-active: #63e2b87a !important;
  .n-radio-button {
    background: transparent !important;
    line-height: calc(var(--n-height) - 2px) !important;
  }
}
</style>

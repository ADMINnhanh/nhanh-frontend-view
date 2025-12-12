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
  NInputNumber,
  NColorPicker,
  NH4,
} from "naive-ui";
import { ArrowBackOutline, ArrowForwardOutline } from "@vicons/ionicons5";
import { computed, onUnmounted, ref } from "vue";
import { novelService, type Chapter } from ".";
import ChapterContent from "./ChapterContent.vue";
import { useLocalStorage } from "@vueuse/core";
import Collapse from "@/components/singleFile/Collapse.vue";
import SvgGather from "@/assets/icon/gather";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import Media from "@/stores/media";

interface Emit {
  (e: "close"): void;
}
const emit = defineEmits<Emit>();

const active = ref(false);
requestAnimationFrame(() => (active.value = true));

/** 收缩 */
const shrinkScreen = ref(false);
const loading = ref(true);
const chapters = ref<Chapter[]>();
const chapterDetails = ref<Chapter & { content: string }>();

type ChapterDetailsLocalType = {
  novelId: number;
  order: number;
  min: boolean;
  color: string;
  size: number;
};
const chapterDetailsLocal = useLocalStorage<ChapterDetailsLocalType>(
  "novel-chapter-reading-mode",
  {} as any
);

const readingStyle = computed(() => {
  const style = {
    width: "1300px",
    "--reading-text-color": chapterDetailsLocal.value.color,
    "--reading-text-size": chapterDetailsLocal.value.size + "px",
  };
  if (shrinkScreen.value) {
    Object.assign(style, {
      position: "fixed",
      top: "10px",
      left: "calc(50vw - 200px)",
      width: "400px",
    });
  }
  return style;
});
function toggleShrinkScreen() {
  shrinkScreen.value = !shrinkScreen.value;
  requestAnimationFrame(setReadingModeMaskColor);
}
function setReadingModeMaskColor() {
  const mask = document
    .getElementById("ReadingMode")
    ?.closest(".n-scrollbar-content")
    ?.querySelector(".n-modal-mask") as HTMLElement;
  if (mask) mask.style.backgroundColor = "rgba(0,0,0,0.85)";
}

novelService
  .getChapters(chapterDetailsLocal.value.novelId)
  .then((v) => {
    chapters.value = v;
    openChapter(v[chapterDetailsLocal.value.order - 1]);

    setReadingModeMaskColor();
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
  if (container) container.scrollTop += y;
}

const virtualListInst = ref<VirtualListInst>();
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
  console.log(e.key);

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
    v-if="Media.isMobileStyle"
    v-model:show="active"
    @after-leave="emit('close')"
    :auto-focus="false"
    :mask-closable="false"
    preset="card"
    :title="chapterDetails?.title"
    :style="readingStyle"
    id="ReadingMode"
    :show-mask="!shrinkScreen"
    :draggable="shrinkScreen"
    size="small"
  >
    <template v-if="shrinkScreen" #header-extra>
      <NButton @click="toggleShrinkScreen" size="small">
        <template #icon>
          <SvgGather icon="ShrinkScreen" />
        </template>
      </NButton>
    </template>
    <div v-if="!shrinkScreen" class="flex-box">
      <NInputNumber
        v-model:value="chapterDetailsLocal.size"
        style="width: 100px"
        :min="12"
        size="small"
      >
        <template #suffix>px</template>
      </NInputNumber>
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
      <NButton @click="toggleShrinkScreen" size="small">
        <template #icon>
          <SvgGather icon="ShrinkScreen" />
        </template>
      </NButton>
    </div>
    <ResponsiveDirectionLayout
      :style="{ height: shrinkScreen ? 0 : 'calc(100vh - 95px)' }"
      :max="0.75"
      :min="0"
      :default-size="0.25"
    >
      <template #left>
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
      <template #right>
        <NScrollbar ref="scrollbarRef">
          <NSpin :show="loading">
            <ChapterContent v-html="chapterDetails?.content" min />
          </NSpin>
        </NScrollbar>
      </template>
    </ResponsiveDirectionLayout>
  </NModal>
  <NModal
    v-else
    v-model:show="active"
    @after-leave="emit('close')"
    :auto-focus="false"
    :mask-closable="false"
    preset="card"
    :title="chapterDetails?.title"
    :style="readingStyle"
    id="ReadingMode"
    :show-mask="!shrinkScreen"
    :draggable="shrinkScreen"
  >
    <template #header-extra>
      <div class="flex-box">
        <template v-if="!shrinkScreen">
          <Collapse>
            <div class="flex-box">
              <NColorPicker
                v-model:value="chapterDetailsLocal.color"
                style="width: 200px"
                size="small"
              />
              <NInputNumber
                v-model:value="chapterDetailsLocal.size"
                style="width: 100px"
                :min="12"
                size="small"
              >
                <template #suffix>px</template>
              </NInputNumber>
              <NRadioGroup
                v-model:value="chapterDetailsLocal.min"
                size="small"
                class="size-radio"
              >
                <NRadioButton :value="true" label="min" />
                <NRadioButton :value="false" label="max" />
              </NRadioGroup>
            </div>
          </Collapse>
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
        <NButton @click="toggleShrinkScreen" size="small">
          <template #icon>
            <SvgGather icon="ShrinkScreen" />
          </template>
        </NButton>
      </div>
    </template>
    <ResponsiveDirectionLayout
      :style="{ height: shrinkScreen ? 0 : 'calc(100vh - 88px)' }"
      direction="horizontal"
      :max="0.75"
      :min="0"
      :default-size="0.25"
    >
      <template #left>
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
      <template #right>
        <div style="height: 100%; padding: 40px 0">
          <NScrollbar ref="scrollbarRef">
            <NSpin :show="loading">
              <ChapterContent
                v-html="chapterDetails?.content"
                :min="chapterDetailsLocal.min"
              />
            </NSpin>
          </NScrollbar>
        </div>
      </template>
    </ResponsiveDirectionLayout>
  </NModal>
</template>

<style lang="less">
body.dark #ReadingMode * {
  color: var(--reading-text-color, rgba(255, 255, 255, 0.4));
  .chapter-content {
    font-size: var(--reading-text-size, 18px);
  }
  .n-space > div {
    display: flex;
  }
}
.size-radio {
  --n-button-border-color-active: #63e2b87a !important;
  .n-radio-button {
    background: transparent !important;
    line-height: calc(var(--n-height) - 2px) !important;
  }
}
.flex-box {
  display: flex;
  flex-wrap: wrap;
  > *:not(:last-child) {
    margin-right: 8px;
  }
}
</style>

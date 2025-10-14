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
} from "naive-ui";
import { DocumentTextOutline, SearchOutline } from "@vicons/ionicons5";
import { computed, ref, watch } from "vue";
import { novelService, type Chapter } from ".";

interface Props {
  novelId?: number;
}
const props = defineProps<Props>();

// 见阳环

const loading = ref(false);
const keyword = ref("");
const chapters = ref<
  {
    chapter: Chapter;
    contentSnippet: string;
  }[]
>();
watch(
  () => props.novelId,
  (id) => {
    if (!id) {
      chapters.value = undefined;
      keyword.value = "";
      loading.value = false;
    }
  }
);

function search() {
  loading.value = true;

  novelService
    .searchChapters(props.novelId!, keyword.value)
    .then((v) => (chapters.value = v))
    .finally(() => (loading.value = false));
}
</script>

<template>
  <div class="right-box">
    <NInputGroup>
      <NInput
        v-model:value="keyword"
        :disabled="loading || !novelId"
        placeholder="请输入关键字"
        clearable
      />
      <NButton
        :disabled="loading || !novelId || !keyword"
        type="primary"
        @click="search"
      >
        <template #icon>
          <NIcon :component="SearchOutline" />
        </template>
        搜索
      </NButton>
    </NInputGroup>
    <NScrollbar>
      <NSpin :show="loading">
        <NSpace vertical>
          <NCard
            v-if="chapters && chapters.length > 0"
            v-for="novel in chapters"
            :key="novel.chapter.id"
            :title="novel.chapter.title"
            size="small"
            class="novel-card"
            embedded
          >
            <template #header-extra>
              <NSpace>
                <NButton type="info" quaternary size="small">
                  <template #icon>
                    <NIcon :component="DocumentTextOutline" />
                  </template>
                  查看完整章节
                </NButton>
              </NSpace>
            </template>
            <div v-html="novel.contentSnippet"></div>
          </NCard>
          <NEmpty v-else-if="chapters" description="没有相关文字" />
        </NSpace>
      </NSpin>
    </NScrollbar>
  </div>
</template>

<style scoped lang="less">
.right-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  :deep(.n-scrollbar) {
    margin-top: 10px;
    height: 0;
    flex-grow: 1;
  }
}
</style>

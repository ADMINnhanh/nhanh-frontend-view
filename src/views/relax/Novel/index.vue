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
  NEllipsis,
  NRadio,
  NRadioGroup,
} from "naive-ui";
import { CreateOutline, TrashBinOutline } from "@vicons/ionicons5";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import { computed, ref } from "vue";
import { novelService, renameNovel, type Novel } from ".";
import { _Format_NumberWithUnit } from "nhanh-pure-function";
import NovelNodeSearch from "./NovelNodeSearch.vue";
import AddNovel from "./AddNovel.vue";

const loading = ref(false);
const keyword = ref("");
const novelId = ref<number>();
const novelList = ref<Novel[]>([]);
const filteredNovelList = computed(() =>
  novelList.value.filter((v) => v.name.includes(keyword.value))
);

function updateNovelList() {
  loading.value = true;
  novelService
    .getNovelList()
    .then((list) => {
      novelList.value = list;

      const has = list.some((v) => v.id == novelId.value);
      if (!has) novelId.value = undefined;
    })
    .finally(() => (loading.value = false));
}
updateNovelList();
function deleteNovel(id: number) {
  loading.value = true;
  novelService.deleteNovel(id).finally(updateNovelList);
}
function addNovelCallback(promie: Promise<void>) {
  loading.value = true;
  promie.finally(updateNovelList);
}
</script>

<template>
  <ResponsiveDirectionLayout :default-size="0.35">
    <template #left>
      <NSpin :show="loading">
        <AddNovel :callback="addNovelCallback" />
        <NCard v-if="novelList.length > 0" title="书架" size="small">
          <template #header-extra>
            <NInput
              v-model:value="keyword"
              placeholder="请输入小说名"
              clearable
            />
          </template>
          <NScrollbar style="height: 100%">
            <NRadioGroup v-model:value="novelId">
              <NSpace vertical>
                <NCard
                  v-for="novel in filteredNovelList"
                  :key="novel.id"
                  size="small"
                  class="novel-card"
                  embedded
                >
                  <template #header>
                    <NRadio :value="novel.id" />
                    <NEllipsis>
                      {{ novel.name }} ({{
                        _Format_NumberWithUnit(novel.contentLength)
                      }}字)
                    </NEllipsis>
                  </template>
                  <template #header-extra>
                    <NSpace>
                      <NButton
                        type="info"
                        quaternary
                        size="small"
                        @click="renameNovel(novel, updateNovelList)"
                      >
                        <template #icon>
                          <NIcon :component="CreateOutline" />
                        </template>
                      </NButton>
                      <NButton
                        type="error"
                        quaternary
                        size="small"
                        @click="deleteNovel(novel.id!)"
                      >
                        <template #icon>
                          <NIcon :component="TrashBinOutline" />
                        </template>
                      </NButton>
                    </NSpace>
                  </template>
                </NCard>
              </NSpace>
            </NRadioGroup>
          </NScrollbar>
        </NCard>
        <NEmpty v-else description="你的书架空空如也" />
      </NSpin>
    </template>
    <template #right>
      <NovelNodeSearch :novel-id="novelId" />
    </template>
  </ResponsiveDirectionLayout>
</template>

<style scoped lang="less">
:deep(.n-spin-container) {
  height: 100%;
  .n-spin-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    > .n-card {
      height: 0;
      flex-grow: 1;
    }
  }
}
.n-radio-group {
  width: 100%;
  .novel-card {
    :deep(.n-card-header) {
      .n-card-header__main {
        width: 0;
        flex-grow: 1;
        margin-right: 10px;
        .n-ellipsis {
          margin-left: 7px;
          width: calc(100% - 25px);
        }
      }
    }
  }
}
</style>

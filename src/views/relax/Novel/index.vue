<script setup lang="ts">
import {
  NCard,
  NSpace,
  NScrollbar,
  NUpload,
  NUploadDragger,
  NIcon,
  NText,
  type UploadFileInfo,
  NButton,
  NSpin,
  NInput,
  NEmpty,
  NEllipsis,
  NRadio,
  NRadioGroup,
} from "naive-ui";
import {
  ArchiveOutline,
  CreateOutline,
  Prism,
  TrashBinOutline,
} from "@vicons/ionicons5";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import { computed, ref } from "vue";
import { importNewNovel, novelService, renameNovel, type Novel } from ".";
import { _Format_NumberWithUnit } from "nhanh-pure-function";
import NovelNodeSearch from "./NovelNodeSearch.vue";

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

const fileList = ref<UploadFileInfo[]>([]);
function analysis() {
  loading.value = true;
  const promies = fileList.value
    .map((file) => {
      if (!file.file) return;
      return importNewNovel(file.file);
    })
    .filter(Boolean);
  Promise.allSettled(promies).finally(updateNovelList);
  fileList.value = [];
}
</script>

<template>
  <ResponsiveDirectionLayout :default-size="0.35">
    <template #left>
      <NScrollbar style="max-height: 100%">
        <NSpin :show="loading">
          <NSpace class="left-space" vertical>
            <NUpload
              v-model:file-list="fileList"
              multiple
              directory-dnd
              accept="text/*"
            >
              <NUploadDragger>
                <div style="margin-bottom: 6px">
                  <NIcon size="35" :depth="3" :component="ArchiveOutline" />
                </div>
                <NText> 点击或者拖动文件到该区域来上传 </NText>
              </NUploadDragger>
            </NUpload>
            <NSpace justify="end">
              <NButton
                type="primary"
                :disabled="fileList.length == 0"
                @click="analysis"
              >
                <template #icon>
                  <NIcon :component="Prism" />
                </template>
                解析
              </NButton>
            </NSpace>
            <NCard v-if="novelList.length > 0" title="书架" size="small">
              <template #header-extra>
                <NInput
                  v-model:value="keyword"
                  placeholder="请输入小说名"
                  clearable
                />
              </template>
              <NScrollbar style="max-height: 50vh">
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
          </NSpace>
        </NSpin>
      </NScrollbar>
    </template>
    <template #right>
      <NovelNodeSearch :novel-id="novelId" />
    </template>
  </ResponsiveDirectionLayout>
</template>

<style scoped lang="less">
:deep(.n-upload-dragger) {
  padding: 10px;
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

<script setup lang="ts">
import {
  NCard,
  NA,
  NButton,
  NIcon,
  NSpace,
  NH6,
  NBlockquote,
  NText,
} from "naive-ui";
import { UselessFact, uselessFact, loadingBar } from ".";
import { Add } from "@vicons/ionicons5";
import { useLoadingBar } from "naive-ui";
import Media from "@/stores/media";

loadingBar.value = useLoadingBar();

UselessFact("random");
UselessFact("today");
</script>

<template>
  <NCard title="无用但可能有趣的知识">
    <template #header-extra>
      <NA href="https://uselessfacts.jsph.pl/" target="_blank">Api 作者</NA>
    </template>

    <NSpace :vertical="Media.isMobileStyle">
      <NCard
        v-for="(value, key) in uselessFact"
        :key="key"
        :title="value.title"
      >
        <template #header-extra>
          <NButton @click="UselessFact(key)" strong secondary type="info">
            <template #icon>
              <NIcon><Add /></NIcon>
            </template>
            再来一个
          </NButton>
        </template>
        <template v-for="item in value.list" :key="item.id">
          <NH6 prefix="bar" align-text>{{ item.en }}</NH6>
          <NBlockquote v-if="item.zh">
            <NText depth="3">翻译: {{ item.zh }}</NText>
          </NBlockquote>
        </template>
      </NCard>
    </NSpace>
  </NCard>
</template>

<style scoped lang="less">
.is-mobile {
  .n-space {
    :deep(> div) {
      width: 100%;
    }
  }
}
.n-space {
  :deep(> div) {
    width: calc(50% - 6px);
  }
}
</style>

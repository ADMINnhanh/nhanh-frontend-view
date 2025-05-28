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
  NGrid,
  NGi,
} from "naive-ui";
import { UselessFact, uselessFact, loadingBar } from ".";
import { Add } from "@vicons/ionicons5";
import { useLoadingBar } from "naive-ui";
import Media from "@/stores/media";

loadingBar.value = useLoadingBar();

// UselessFact("random");
// UselessFact("today");
</script>

<template>
  <NCard title="无用但可能有趣的知识">
    <template #header-extra>
      <NA href="https://uselessfacts.jsph.pl/" target="_blank">Api 作者</NA>
    </template>

    <NSpace vertical>
      <NCard title="今天无用的事实">
        <template v-for="item in uselessFact.today" :key="item.id">
          <NH6 prefix="bar" align-text>{{ item.en }}</NH6>
          <NBlockquote v-if="item.zh">
            <NText depth="3">翻译: {{ item.zh }}</NText>
          </NBlockquote>
        </template>
      </NCard>
      <NCard title="随机无用的事实">
        <template #header-extra>
          <NButton @click="UselessFact('random')" strong secondary type="info">
            <template #icon>
              <NIcon><Add /></NIcon>
            </template>
            再来一个
          </NButton>
        </template>
        <NGrid x-gap="30" y-gap="30" :cols="Media.isMobileStyle ? 1 : 2">
          <NGi v-for="item in uselessFact.random" :key="item.id">
            <NH6 prefix="bar" align-text>{{ item.en }}</NH6>
            <NBlockquote v-if="item.zh">
              <NText depth="3">翻译: {{ item.zh }}</NText>
            </NBlockquote>
          </NGi>
        </NGrid>
      </NCard>
    </NSpace>
  </NCard>
</template>

<style scoped lang="less"></style>

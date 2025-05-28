<script setup lang="ts">
import { NCard, NSpace, NGrid, NGi, NScrollbar } from "naive-ui";
import {
  UselessFact,
  uselessFact,
  loadingBar,
  techPhraseList,
  TechyPhrases,
  jokeList,
  RandomJoke,
  CompanyPhrases,
  companyPhraseList,
} from ".";
import { useLoadingBar } from "naive-ui";
import Media from "@/stores/media";
import En_zh from "./en_zh.vue";
import Header_extra from "./header_extra.vue";

loadingBar.value = useLoadingBar();

UselessFact("random");
UselessFact("today");
TechyPhrases();
RandomJoke();
CompanyPhrases();
</script>

<template>
  <NScrollbar>
    <NGrid
      x-gap="15"
      y-gap="15"
      style="padding: 10px"
      :cols="Media.isMobileStyle ? 1 : 2"
    >
      <NGi>
        <NSpace vertical :size="15">
          <NCard title="今天无用的事实" hoverable>
            <template #header-extra>
              <Header_extra not-click href="https://uselessfacts.jsph.pl/" />
            </template>
            <En_zh :list="uselessFact.today" />
          </NCard>
          <NCard title="chuck 笑话" hoverable>
            <template #header-extra>
              <Header_extra
                @click="RandomJoke"
                href="https://api.chucknorris.io/"
              />
            </template>

            <NSpace vertical>
              <En_zh :list="jokeList" />
            </NSpace>
          </NCard>
          <NCard title="企业流行语" hoverable>
            <template #header-extra>
              <Header_extra
                @click="CompanyPhrases"
                href="https://github.com/sameerkumar18/corporate-bs-generator-api"
              />
            </template>
            <NSpace vertical>
              <En_zh :list="companyPhraseList" />
            </NSpace>
          </NCard>
        </NSpace>
      </NGi>

      <NGi>
        <NSpace vertical :size="15">
          <NCard title="随机无用的事实" hoverable>
            <template #header-extra>
              <Header_extra
                @click="UselessFact('random')"
                href="https://uselessfacts.jsph.pl/"
              />
            </template>
            <En_zh :list="uselessFact.random" />
          </NCard>
          <NCard title="技术感十足的短语" hoverable>
            <template #header-extra>
              <Header_extra
                @click="TechyPhrases"
                href="https://techy-api.vercel.app/"
              />
            </template>
            <NSpace vertical>
              <En_zh :list="techPhraseList" />
            </NSpace>
          </NCard>
        </NSpace>
      </NGi>
    </NGrid>
  </NScrollbar>
</template>

<style scoped lang="less">
.joke-search {
  :deep(> div:not(:last-child)) {
    flex-grow: 1;
    .n-input-group > *:first-child {
      flex-grow: 1;
    }
  }
}
</style>

<script setup lang="ts">
import { NScrollbar, NSpace } from "naive-ui";
import MyCard from "./card.vue";

const code = `<script setup lang="ts">
import { NScrollbar, NSpace } from "naive-ui";
import MyCard from "./card.vue";
 

<template>
  <NScrollbar>
    <div class="box">
      <NSpace vertical>
        <MyCard title="什么都不做"> </MyCard>
      </NSpace>
      <NSpace vertical>
        <MyCard title="什么都不做" code=""> </MyCard>
      </NSpace>
    </div>
  </NScrollbar>
</template>

<style scoped lang="less">
.box {
  display: flex;
  justify-content: space-between;
  padding: 14px;
  :deep(> div) {
    width: calc(50% - 7px);
  }
}
</style>
`;
</script>

<template>
  <NScrollbar>
    <div class="box">
      <NSpace vertical>
        <MyCard title="什么都不做" :code="code"> </MyCard>
      </NSpace>
      <NSpace vertical>
        <MyCard title="什么都不做" :code="code"> </MyCard>
      </NSpace>
    </div>
  </NScrollbar>
</template>

<style scoped lang="less">
.box {
  display: flex;
  justify-content: space-between;
  padding: 14px;
  :deep(> div) {
    width: calc(50% - 7px);
  }
}
</style>

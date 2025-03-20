<script setup lang="ts">
import SvgGather from "@/assets/icon/gather";
import Media from "@/stores/media";
import { NButton, NCollapseTransition, NSpace, NIcon } from "naive-ui";
import { ref } from "vue";
import Button from "./button.vue";
import { showMenu } from "../body";
import { MenuOutline } from "@vicons/ionicons5";

const show = ref(false);

window.addEventListener("click", (ev) => {
  /** @ts-ignore */
  if (ev.target?.closest) {
    /** @ts-ignore */
    if (ev.target.closest(".menu-button")) {
      show.value = !show.value;
    } else {
      show.value = false;
    }
  }
});
</script>

<template>
  <header>
    <div class="name">
      <img src="/nhanh.ico" alt="" />
      你好啊你好
    </div>
    <NSpace v-if="Media.isMobileStyle">
      <NButton @click="showMenu = !showMenu" quaternary>
        <template #icon>
          <NIcon :component="MenuOutline" />
        </template>
      </NButton>
      <NButton quaternary class="menu-button">
        <template #icon>
          <SvgGather icon="IosMore" />
        </template>
        <NCollapseTransition :show="show">
          <Button vertical />
        </NCollapseTransition>
      </NButton>
    </NSpace>
    <Button v-else />
  </header>
</template>

<style scoped lang="less">
header {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-color);
  > * {
    flex-shrink: 0;
  }
  .name {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: var(--text-color);
    img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }
  }
  .menu-button {
    position: relative;
    :deep(.n-button__icon) {
      margin-right: 0;
    }
    .n-collapse-transition {
      position: absolute;
      right: 0;
      top: 100%;
      background-color: var(--background-color);
      box-shadow: 0 0 2px 2px var(--box-shadow);
      z-index: 9;
      border-radius: var(--button-border-radius);
    }
  }
}
</style>

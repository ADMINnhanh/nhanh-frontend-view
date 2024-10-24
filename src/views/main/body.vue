<script setup lang="ts">
import { Settings } from "@/components/popups/components/Settings/index";
import router from "@/router";
import Routes from "@/router/Routes";
import { NMenu, type MenuOption, NIcon, NLayout, NLayoutSider } from "naive-ui";
import { computed, h, ref, type Component } from "vue";

function RenderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = computed<MenuOption[]>(() => {
  const language = Settings.value.language;
  /** 生成菜单 */
  const generateMenu = (item: typeof Routes) => {
    return item.map((item) => {
      const i: MenuOption = {
        label: item.meta.name[language],
        key: item.name as string,
      };
      if (item.meta.icon) i.icon = RenderIcon(item.meta.icon);
      if (item.children) i.children = generateMenu(item.children);

      return i;
    });
  };
  return generateMenu(Routes);
});
const activeKey = computed({
  get() {
    return (router.currentRoute.value.name || "") as string;
  },
  set(key: string) {
    router.push({ name: key });
  },
});
const collapsed = ref(false);
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        accordion
      />
    </n-layout-sider>
    <n-layout class="router-view">
      <router-view></router-view>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="less">
.n-layout {
  height: 100px;
  flex-grow: 1;
  background-color: var(--main-content-box-background-color);

  .n-layout.router-view {
    height: 100%;
    :deep(.n-layout-scroll-container) {
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      > * {
        background-color: var(--background-color);
      }
    }
  }
}
</style>

<script setup lang="ts">
import { Settings } from "@/components/popups/components/Settings/index";
import router from "@/router";
import Routes from "@/router/Routes";
import { NMenu, type MenuOption } from "naive-ui";
import { computed, h, ref } from "vue";
import { collapsed } from ".";
import { RouterLink } from "vue-router";

interface EmitType {
  (el: "updateActiveKey"): void;
}
const Emit = defineEmits<EmitType>();

const menuOptions = computed<MenuOption[]>(() => {
  const language = Settings.value.language;
  /** 生成菜单 */
  const generateMenu = (item: typeof Routes) => {
    return item.map((item) => {
      const label = item.meta.name[language];
      const key = item.name as string;
      const i: MenuOption = { key };
      if (item.meta.icon) i.icon = () => item.meta.icon;
      if (item.children) {
        i.label = label;
        i.children = generateMenu(item.children);
      } else {
        i.label = () =>
          h(RouterLink, { to: { name: key } }, { default: () => label });
      }

      return i;
    });
  };
  return generateMenu(Routes);
});
const activeKey = computed({
  get() {
    return (router.currentRoute.value.name || "") as string;
  },
  set() {
    Emit("updateActiveKey");
  },
});
</script>

<template>
  <n-menu
    v-model:value="activeKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    accordion
  />
</template>

<style scoped lang="less"></style>

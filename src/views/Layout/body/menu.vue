<script setup lang="ts">
import { Settings } from "@/components/popups/components/Settings/index";
import router from "@/router";
import Routes from "@/router/Routes";
import { NMenu, type MenuOption } from "naive-ui";
import { computed, ref } from "vue";
import { collapsed } from ".";

interface EmitType {
  (el: "updateActiveKey"): void;
}
const Emit = defineEmits<EmitType>();

const menuOptions = computed<MenuOption[]>(() => {
  const language = Settings.value.language;
  /** 生成菜单 */
  const generateMenu = (item: typeof Routes) => {
    return item.map((item) => {
      const i: MenuOption = {
        label: item.meta.name[language],
        key: item.name as string,
      };
      if (item.meta.icon) i.icon = () => item.meta.icon;
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

<script setup lang="ts">
import Scroll from "@/components/singleFile/Scroll.vue";
import { NTabs, NTabPane, NIcon, NSelect, NButton, NSpace } from "naive-ui";
import SetItem from "./setItem.vue";
import { _CloseOnOutsideClick } from "nhanh-pure-function";
import { Sync, Add } from "@vicons/ionicons5";
import {
  Settings,
  SetOptions,
  languageOptions,
  themeOptions,
  shortcutKeysList,
  SetDefaultShortcutKey,
  SetCustomShortcutKey,
} from ".";
import { InterfaceText } from "@/assets/Ts/Interface text";
import { computed, ref } from "vue";
import SvgGather from "@/assets/icon/gather";
import Popup from "@/components/layout/Popup.vue";

interface EmitType {
  (e: "closure"): void;
}
const Emit = defineEmits<EmitType>();

function Closure() {
  SetOptions();
  Emit("closure");
}
_CloseOnOutsideClick([".Settings.center-positioning"], Closure);

const tabsValue = ref();
const tabsRef = ref();
const interfaceText = computed(() => {
  const text = InterfaceText.value.components.popups.settings;
  if (tabsRef.value) {
    tabsValue.value = text.tabs[0].name;
    requestAnimationFrame(() => {
      tabsRef.value.syncBarPosition();
    });
  }
  return text;
});
</script>

<template>
  <Popup class="Settings center-positioning" @closure="Closure">
    <template #header>{{ interfaceText.header }}</template>
    <NTabs ref="tabsRef" v-model:value="tabsValue" :animated="true">
      <n-tab-pane :name="interfaceText.tabs[0].name">
        <Scroll>
          <SetItem>
            <template v-slot:title>{{
              interfaceText.tabs[0].items[0].title
            }}</template>
            <template v-slot:value>
              <n-select
                v-model:value="Settings.language"
                :options="(languageOptions as any)"
              />
            </template>
          </SetItem>
          <SetItem>
            <template v-slot:title>{{
              interfaceText.tabs[0].items[1].title
            }}</template>
            <template v-slot:value>
              <n-select
                v-model:value="Settings.theme"
                :options="(themeOptions as any)"
              />
            </template>
          </SetItem>
        </Scroll>
      </n-tab-pane>
      <n-tab-pane :name="interfaceText.tabs[1].name">
        <Scroll>
          <SetItem v-for="item in shortcutKeysList" :key="item.id">
            <template v-slot:title>{{ item.title }}</template>
            <template v-slot:value>
              <NSpace justify="space-between">
                <NSpace>
                  <NButton
                    quaternary
                    :disabled="!item.isCustom"
                    @click="SetDefaultShortcutKey(item.id)"
                  >
                    <NIcon size="20" :component="Sync" />
                  </NButton>
                  <NButton quaternary @click="SetCustomShortcutKey(item)">
                    <SvgGather size="20" icon="Edit" />
                  </NButton>
                </NSpace>
                <NSpace>
                  <template
                    v-for="(key, index) in item.shortcutKey"
                    :key="index"
                  >
                    <NButton>{{ key }}</NButton>
                    <NButton
                      v-if="index != item.shortcutKey.length - 1"
                      :bordered="false"
                      style="pointer-events: none"
                    >
                      <NIcon size="20" :component="Add" />
                    </NButton>
                  </template>
                </NSpace>
              </NSpace>
            </template>
          </SetItem>
        </Scroll>
      </n-tab-pane>
    </NTabs>
  </Popup>
</template>

<style lang="less" scoped>
.Settings {
  --width: 550px;
  --height: 700px;
  .n-tabs {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    :deep(.n-tab-pane) {
      flex-grow: 1;
      .moduls-scroll-section {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

import { Settings } from "@/components/popups/components/Settings";
import { computed } from "vue";

const zhCN = {
  components: {
    popups: {
      settings: {
        header: "设置",
        tabs: [
          {
            name: "常用",
            items: [
              {
                title: "语言",
              },
              {
                title: "主题",
              },
            ],
          },
          {
            name: "快捷键",
          },
        ],
      },
    },
  },
  404: {
    goHome: "前往首页",
  },
} as const;

const enUS = {
  components: {
    popups: {
      settings: {
        header: "Settings",
        tabs: [
          {
            name: "General",
            items: [
              {
                title: "Language",
              },
              {
                title: "Theme",
              },
            ],
          },
          {
            name: "Shortcuts",
          },
        ],
      },
    },
  },
  404: {
    goHome: "Go Home",
  },
} as const;

export const InterfaceText = computed(() => {
  return Settings.value.language == "enUS" ? enUS : zhCN;
});

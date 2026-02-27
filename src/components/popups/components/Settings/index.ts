import SvgGather from "@/assets/icon/gather";
import { ShortcutKeys, type ShortcutKey } from "@/utils/shortcutKey";
import { NSpace, NTag } from "naive-ui";
import { computed, h, ref, toRaw } from "vue";

const OldSettings = localStorage.getItem("Settings");

const defaultSettings: SettingsType = {
  language: "zhCN",
  theme: "dark",
  customShortcutKeys: [],
};
export const Settings = ref<SettingsType>(
  OldSettings
    ? Object.assign(structuredClone(defaultSettings), JSON.parse(OldSettings))
    : structuredClone(defaultSettings)
);
export function SetOptions() {
  const options = JSON.stringify(toRaw(Settings.value));
  localStorage.setItem("Settings", options);
}

export const languageOptions = [
  {
    label: "简体中文",
    value: "zhCN",
  },
  {
    label: "English",
    value: "enUS",
  },
] as const;
type LanguageOptionValue = (typeof languageOptions)[number]["value"];
export const themeOptions = computed(() => {
  return [
    {
      label: Settings.value.language == "zhCN" ? "浅色" : "Light",
      value: "light" as const,
    },
    {
      label: Settings.value.language == "zhCN" ? "深色" : "Dark",
      value: "dark" as const,
    },
  ];
});
type ThemeOptionsValue = (typeof themeOptions.value)[number]["value"];

type CustomShortcutKeys = {
  id: number;
  shortcutKey: (ShortcutKey | ShortcutKey[])[];
}[];
type SettingsType = {
  language: LanguageOptionValue;
  theme: ThemeOptionsValue;
  customShortcutKeys: CustomShortcutKeys;
};

/** 自定义快捷键列表 */
export const shortcutKeysList = computed(() => {
  return ShortcutKeys.value.map((item) => {
    const custom = Settings.value.customShortcutKeys.find(
      (key) => key.id == item.id
    );
    return {
      id: item.id,
      title: item.name[Settings.value.language],
      isCustom: !!custom,
      shortcutKey: custom?.shortcutKey || item.shortcutKey,
    };
  });
});

/** 使用默认快捷键 */
export function SetDefaultShortcutKey(id: number) {
  Settings.value.customShortcutKeys = Settings.value.customShortcutKeys.filter(
    (key) => key.id != id
  );
  SetOptions();
}
/** 自定义快捷键 */
export function SetCustomShortcutKey(item: (typeof shortcutKeysList.value)[0]) {
  const newKeys = ref<string[]>([]);

  const title = () => {
    const text = h("i", { style: { color: "var(--n-icon-color" } }, item.title);
    return h(NSpace, () =>
      Settings.value.language == "zhCN"
        ? ["自定义 ", text, " 快捷键"]
        : ["Custom ", text, " shortcut key"]
    );
  };
  const content = () => {
    const tips =
      Settings.value.language == "zhCN"
        ? "开始依次键入你希望的快捷键吧~"
        : "Start typing the shortcut key sequence now~";
    return h(NSpace, { vertical: true }, () => [
      tips,
      h(NSpace, () =>
        newKeys.value.map((key, index) =>
          h(
            NTag,
            {
              closable: true,
              onClose: () => newKeys.value.splice(index, 1),
            },
            () => key
          )
        )
      ),
    ]);
  };
  /** 按键事件 */
  const keyUp = (e: KeyboardEvent) => {
    e.preventDefault();
    newKeys.value.push(e.key);
  };
  /** 捕获事件 */
  window.addEventListener("keydown", keyUp);
  window.$dialog.success({
    title,
    icon: () => SvgGather({ icon: "Edit" }),
    content,
    positiveText: Settings.value.language == "zhCN" ? "保存" : "Save",
    negativeText: Settings.value.language == "zhCN" ? "取消" : "Cancel",
    onPositiveClick: () => {
      if (newKeys.value.length > 0) {
        /** 是否重复 */
        const isRepeat = shortcutKeysList.value.some(
          (key) => key.shortcutKey.join("") == newKeys.value.join("")
        );
        if (isRepeat) {
          const text =
            Settings.value.language == "zhCN"
              ? "快捷键重复~"
              : "Duplicate shortcut key~";
          window.$message.error(text);
          return false;
        } else {
          Settings.value.customShortcutKeys =
            Settings.value.customShortcutKeys.filter(
              (key) => key.id != item.id
            );
          Settings.value.customShortcutKeys.push({
            id: item.id,
            shortcutKey: newKeys.value as any,
          });
          SetOptions();
          return true;
        }
      } else {
        const text =
          Settings.value.language == "zhCN"
            ? "快捷键不能为空~"
            : "Shortcut key cannot be empty~";
        window.$message.error(text);
        return false;
      }
    },
    onAfterLeave: () => window.removeEventListener("keydown", keyUp),
  });
}

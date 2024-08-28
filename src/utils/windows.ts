import { computed } from "vue";
import {
  createDiscreteApi,
  darkTheme,
  lightTheme,
  enUS,
  zhCN,
  dateEnUS,
  dateZhCN,
  type ConfigProviderProps,
  type GlobalThemeOverrides,
} from "naive-ui";
import { Settings } from "@/components/popups/components/Settings/index";

const ThemeOverrides: GlobalThemeOverrides = {
  common: {},
};
export const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: Settings.value.theme === "light" ? lightTheme : darkTheme,
  "theme-overrides": ThemeOverrides,
  locale: Settings.value.language == "enUS" ? enUS : zhCN,
  "date-locale": Settings.value.language == "enUS" ? dateEnUS : dateZhCN,
}));
const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
  ["message", "dialog", "notification", "loadingBar", "modal"],
  {
    configProviderProps: configProviderPropsRef,
  }
);
window.$message = message;
window.$notification = notification;
window.$dialog = dialog;
window.$loadingBar = loadingBar;
window.$modal = modal;

window.$CustomizeError = function (message: string, error?: any) {
  error && console.error(error);
  const err = () => {
    window.$message.warning(message);
    throw new Error(message);
  };
  if (!window.$message?.warning) setTimeout(err, 50);
  else err();
};

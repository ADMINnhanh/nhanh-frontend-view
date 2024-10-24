import { Settings } from "@/components/popups/components/Settings/index";
import { InjectStyle } from "@/utils/vueMethod";
import { watch } from "vue";

const publicCss = {
  "border-radius": "3px",
  "n-spin-background-color": "#535353",
};
InjectStyle(publicCss);

const light = {
  "active-hover": "rgba(24, 160, 88, 0.1)",
  "background-color": "rgb(255, 255, 255)",
  "border-color": "#efeff5",
  "box-shadow": "rgba(0, 0, 0, 0.2)",

  "text-color": "rgb(51, 54, 57)",
  "text-color-focus": "rgb(0, 0, 0)",

  "button-bg-focus": "rgba(0, 0, 0, 0.1)",

  "main-content-box-background-color": "#f4f4f4",
};

const dark = {
  "active-hover": "rgba(99, 226, 183, 0.15)",
  "background-color": "rgb(16, 16, 20)",
  "border-color": "#ffffff17",
  "box-shadow": "rgba(255, 255, 255, 0.2)",

  "text-color": "rgba(255, 255, 255, 0.82)",
  "text-color-focus": "#ffffff",

  "button-bg-focus": "rgba(255, 255, 255, 0.1)",

  "main-content-box-background-color": "#262626",
};

watch(
  () => Settings.value.theme,
  (theme) => InjectStyle(theme === "light" ? light : dark),
  { immediate: true }
);

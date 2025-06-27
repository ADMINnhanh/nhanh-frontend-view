import { useLocalStorage } from "@vueuse/core";
import { ref } from "vue";

export const showMenu = ref(false);
export const collapsed = useLocalStorage("layout-collapsed", false);

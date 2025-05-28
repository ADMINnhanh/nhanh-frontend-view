import { TranslateText } from "@/utils/googleapis";
import axios from "axios";
import type { LoadingBarInst } from "naive-ui/es/loading-bar/src/LoadingBarProvider";
import { ref } from "vue";

type UselessFactType = Record<
  "random" | "today",
  {
    title: string;
    list: {
      id: string;
      en: string;
      zh: string;
    }[];
  }
>;
export const uselessFact = ref<UselessFactType>({
  today: {
    title: "今天无用的事实",
    list: [],
  },
  random: {
    title: "随机无用的事实",
    list: [],
  },
});
const Retry = 3;
export const loadingBar = { value: undefined as unknown as LoadingBarInst };
export function UselessFact(type: "today" | "random", retry = 0) {
  loadingBar.value.start();
  axios
    .get(`https://uselessfacts.jsph.pl/api/v2/facts/${type}`)
    .then((res) => {
      const { text, id } = res.data;
      const enText = text;
      if (uselessFact.value[type].list.some((item) => item.id === id)) {
        if (retry >= Retry)
          return window.$message.warning(
            `看来你知道的太多了，已经重复获取了 ${retry} 次，仍未获取到新数据`,
            { duration: 5000 }
          );
        return UselessFact(type, retry);
      }
      let zhText = "";
      TranslateText(enText)
        .then((text) => {
          zhText = text;
        })
        .catch(() => loadingBar.value.error())
        .finally(() => {
          uselessFact.value[type].list.unshift({
            id,
            en: enText,
            zh: zhText,
          });
          loadingBar.value.finish();
        });
    })
    .catch(() => loadingBar.value.error());
}

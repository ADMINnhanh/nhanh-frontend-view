import { TranslateTextBaidu } from "@/assets/api/otherAsk/baidu";
import axios from "axios";
import type { LoadingBarInst } from "naive-ui/es/loading-bar/src/LoadingBarProvider";
import { ref } from "vue";

type UselessFactType = Record<
  "random" | "today",
  {
    id: string;
    en: string;
    zh: string;
  }[]
>;
export const uselessFact = ref<UselessFactType>({
  today: [],
  random: [],
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
      if (uselessFact.value[type].some((item) => item.id === id)) {
        if (retry >= Retry) {
          loadingBar.value.error();
          return window.$message.warning(
            `看来你知道的太多了，已经重复获取了 ${retry} 次，仍未获取到新数据`,
            { duration: 5000 }
          );
        }
        return UselessFact(type, retry + 1);
      }
      let zhText = "";
      TranslateTextBaidu(enText)
        .then((text) => (zhText = text))
        .catch(() => loadingBar.value.error())
        .finally(() => {
          uselessFact.value[type].unshift({
            id,
            en: enText,
            zh: zhText,
          });
          loadingBar.value.finish();
        });
    })
    .catch(() => loadingBar.value.error());
}

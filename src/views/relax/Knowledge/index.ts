import { TranslateTextBaidu } from "@/assets/api/otherAsk/baidu";
import axios from "axios";
import { NText, type SelectOption } from "naive-ui";
import type { LoadingBarInst } from "naive-ui/es/loading-bar/src/LoadingBarProvider";
import { h, ref } from "vue";

export type TextList = {
  id: string;
  en: string;
  zh: string;
}[];
const Retry = 3;
export const loadingBar = { value: undefined as unknown as LoadingBarInst };

let ask = 0;
function StartLoadingBar() {
  ask++;
  loadingBar.value.start();
}
function ErrorLoadingBar() {
  ask--;
  ask == 0 && loadingBar.value.error();
}
function FinishLoadingBar() {
  ask--;
  ask == 0 && loadingBar.value.finish();
}
function RequestLimitReached() {
  ErrorLoadingBar();
  window.$message.warning(
    `看来你知道的太多了，已经重复获取了 ${Retry} 次，仍未获取到新数据`,
    { duration: 5000 }
  );
}

//#region 无用但可能有趣的知识
type UselessFactType = Record<"random" | "today", TextList>;
export const uselessFact = ref<UselessFactType>({
  today: [],
  random: [],
});
export function UselessFact(type: "today" | "random", retry = 0) {
  StartLoadingBar();
  axios
    .get(`https://uselessfacts.jsph.pl/api/v2/facts/${type}`)
    .then((res) => {
      const { text, id } = res.data;
      const enText = text;
      if (uselessFact.value[type].some((item) => item.id === id)) {
        if (retry >= Retry) return RequestLimitReached();
        return UselessFact(type, retry + 1);
      }
      uselessFact.value[type].unshift({ id, en: enText, zh: "" });
      FinishLoadingBar();

      TranslateTextBaidu(enText).then((text) => {
        const item = uselessFact.value[type].find((item) => item.id === id);
        if (item) item.zh = text!;
      });
    })
    .catch(ErrorLoadingBar);
}
//#endregion

//#region chuck 笑话
export const jokeList = ref<TextList>([]);
/** Chuck Norris 笑话数据结构 */
interface ChuckNorrisJoke {
  /** 分类列表，通常为空 */
  categories: string[];
  /** 创建时间 */
  created_at: string;
  /** 图标 URL */
  icon_url: string;
  /** 笑话唯一 ID */
  id: string;
  /** 更新时间 */
  updated_at: string;
  /** 笑话详情 URL */
  url: string;
  /** 笑话内容 */
  value: string;
}
/** 随机检索 */
export function RandomJoke(retry = 0) {
  StartLoadingBar();
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      const data = res.data as ChuckNorrisJoke;
      const { value, id } = data;
      if (jokeList.value.some((item) => item.id === id)) {
        if (retry >= Retry) return RequestLimitReached();
        return RandomJoke(retry + 1);
      }
      jokeList.value.unshift({ id, en: value, zh: "" });
      FinishLoadingBar();

      TranslateTextBaidu(value).then((text) => {
        const item = jokeList.value.find((item) => item.id === id);
        if (item) item.zh = text!;
      });
    })
    .catch(ErrorLoadingBar);
}
//#endregion

//#region 技术感十足的短语
export const techPhraseList = ref<TextList>([]);
export function TechyPhrases(retry = 0) {
  StartLoadingBar();

  axios
    .get("https://techy-api.vercel.app/api/text")
    .then((res) => {
      const enText = res.data;
      if (techPhraseList.value.some((item) => item.en === enText)) {
        if (retry >= Retry) return RequestLimitReached();
        return TechyPhrases(retry + 1);
      }

      techPhraseList.value.unshift({ id: enText, en: enText, zh: "" });
      FinishLoadingBar();

      TranslateTextBaidu(enText).then((text) => {
        const item = techPhraseList.value.find((item) => item.en === enText);
        if (item) item.zh = text!;
      });
    })
    .catch(ErrorLoadingBar);
}
//#endregion

//#region 企业流行语
export const companyPhraseList = ref<TextList>([]);
export function CompanyPhrases(retry = 0) {
  StartLoadingBar();
  axios
    .get("https://corporatebs-generator.sameerkumar.website")
    .then((res) => {
      const enText = res.data.phrase;
      if (companyPhraseList.value.some((item) => item.en === enText)) {
        if (retry >= Retry) return RequestLimitReached();
        return CompanyPhrases(retry + 1);
      }
      companyPhraseList.value.unshift({ id: enText, en: enText, zh: "" });
      FinishLoadingBar();

      TranslateTextBaidu(enText).then((text) => {
        const item = companyPhraseList.value.find((item) => item.en === enText);
        if (item) item.zh = text!;
      });
    })
    .catch(ErrorLoadingBar);
}
//#endregion

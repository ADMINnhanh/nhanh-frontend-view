import { defineAsyncComponent, markRaw, ref } from "vue";
import AllComponent from "@/components/popups/main";

type Transition =
  | "fade-in-linear"
  | "fade-in"
  | "zoom-in-center"
  | "zoom-in-top"
  | "zoom-in-bottom";

interface PopupConfig {
  component: ReturnType<typeof defineAsyncComponent>; // 组件
  componentName: string; // 组件名称
  transition: Transition; // 组件的显隐动画
  zIndex: number;
  show: boolean;
  data?: any;
}

interface AddPopupParams {
  componentName: string; // 组件名称
  transition?: Transition; // 组件的显隐动画
  data?: any;
}
interface SetPopupParams {
  transition?: Transition; // 组件的显隐动画
  data?: any;
  show?: boolean;
  zIndex: number;
}

// 作为弹窗层级 及 唯一标识
const ZINDEX = 50;
let zIndex: number = ZINDEX;

export const PopupItems = ref<PopupConfig[]>([]);

/** 添加弹窗 dataTs 应当是全新对象 */
export function AddPopup(parmas: AddPopupParams): number {
  if (!AllComponent[parmas.componentName])
    window.$CustomizeError(`没有名为: ${parmas.componentName} 的组件`);

  // 类型转换
  const data = parmas as never as PopupConfig;

  data.component = markRaw(
    defineAsyncComponent(AllComponent[parmas.componentName])
  );

  // 累加弹窗层级 若要自定义zIndex，需自行在组件内部设置样式进行覆盖
  data.zIndex = ++zIndex;
  Object.defineProperty(data, "zIndex", {
    writable: false,
    configurable: false,
  });

  // 动画名称
  data.transition = data.transition || "fade-in-linear";

  // 添加展示项
  PopupItems.value.push(data);

  //  触发 transition 动画
  requestAnimationFrame(() => {
    SetPopupConfig({ zIndex: data.zIndex, show: true });
  });

  //  由于zIndex的唯一性,返回其作为后续操作的标识符
  return zIndex;
}
/** 删除弹窗 */
export function DeletePopup(zIndex: number) {
  const itemIndex = PopupItems.value.findIndex((item) => item.zIndex == zIndex);
  if (itemIndex != -1) PopupItems.value.splice(itemIndex, 1);
  //   关闭所有弹窗时复位层级
  if (PopupItems.value.length == 0) zIndex = ZINDEX;
}
/** 根据 zIndex 获取对应弹窗配置  */
export function GetPopupConfig(zIndex: number) {
  return PopupItems.value.find((item) => item.zIndex == zIndex);
}
/** 设置属性 data 应当是全新对象  */
export function SetPopupConfig(parmas: SetPopupParams) {
  const item = GetPopupConfig(parmas.zIndex);

  if (item) {
    const keys = Object.keys(parmas).filter((key) => key != "zIndex");
    /** @ts-ignore */
    keys.forEach((key) => (item[key] = parmas[key]));
  }
}

/** 提升弹窗样式的层级 (多个弹窗共存时，被点击弹窗应当位于顶层) */
export function PromotePopupLevel(dataZIndex: number) {
  const dom = document.querySelector(
    `[data-zindex="${dataZIndex}"]`
  ) as HTMLElement;
  if (dom) {
    if (dom.style.zIndex != String(zIndex)) dom.style.zIndex = String(++zIndex);
  }
}

// 检查元素是否在视口内
function IsElementInViewport(
  el: HTMLElement,
  minDisplaySize?: { width?: number; height?: number }
) {
  if (!el) return false;

  const { width = 0, height = 0 } = minDisplaySize || {};

  const rect = el.getBoundingClientRect();
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top <= viewHeight - height &&
    rect.left <= viewWidth - width &&
    rect.bottom >= height &&
    rect.right >= width
  );
}

/** 组件默认是可复用的，若希望组件是唯一的可使用本方法 */
export function AddUniqueModal(parmas: AddPopupParams) {
  const item = PopupItems.value.find(
    (item) => item.componentName == parmas.componentName
  );

  if (item) {
    SetPopupConfig({ ...parmas, zIndex: item.zIndex, show: true });
    PromotePopupLevel(item.zIndex);
    const dom = document.querySelector(
      `[data-zindex="${item.zIndex}"]`
    ) as HTMLElement;
    if (dom) {
      /** 不在可视范围内 */
      if (!IsElementInViewport(dom, { width: 100, height: 100 })) {
        const rect = dom.getBoundingClientRect();
        const viewHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const viewWidth =
          window.innerWidth || document.documentElement.clientWidth;
        const top = (viewHeight - rect.height) / 2 + "px";
        const left = (viewWidth - rect.width) / 2 + "px";

        const style = window.getComputedStyle(dom);
        if (style.getPropertyValue("--top"))
          dom.style.setProperty("--top", top);
        else dom.style.setProperty("top", top);
        if (style.getPropertyValue("--left"))
          dom.style.setProperty("--left", left);
        else dom.style.setProperty("left", left);
      }
      dom.classList.add("lookHere");
      setTimeout(() => dom.classList.remove("lookHere"), 1000);
    }
  } else {
    AddPopup(parmas);
  }
}

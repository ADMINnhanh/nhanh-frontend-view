import type { Component } from "vue";
import { _CloseOnOutsideClick } from "nhanh-pure-function";

type _AllComponent = { [key: string]: () => Promise<Component> };
const AllComponent = (function (gather) {
  const AllComponent: _AllComponent = {};
  for (const key in gather) {
    if (Object.prototype.hasOwnProperty.call(gather, key)) {
      const componentName = key.replace(/^.+\/([^/]+)\/index.vue$/, "$1");
      const item = gather[key];
      AllComponent[componentName] = item as any;
    }
  }
  return AllComponent;
})(import.meta.glob("./components/**/*.vue"));

export default AllComponent;

export function EnhancedCloseOnOutsideClick(
  clickableSelector: string[],
  callback: Function,
  zIndex: number
) {
  const isClickAllowed = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target) {
      const popup = target.closest(".popups-gather >*") as HTMLElement | null;
      if (!popup) return;
      if (Number(popup.dataset.zindex) > zIndex) return true;
    }
  };
  _CloseOnOutsideClick(clickableSelector, callback, { isClickAllowed });
}

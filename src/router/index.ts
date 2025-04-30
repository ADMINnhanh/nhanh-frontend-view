import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import home from "../views/Layout/index.vue";
import Routes from "./Routes";
import { _WaitForCondition } from "nhanh-pure-function";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: { name: Routes[0].name },
      children: Routes,
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/404.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 清除所有高亮
    const clearHighlights = () => {
      document
        .querySelector(".is-target-css")
        ?.classList.remove("is-target-css");
    };
    // 高亮元素并滚动到视口
    const highlightAndScroll = (el: Element) => {
      if (!el) return;

      clearHighlights();
      el.classList.add("is-target-css");

      // 支持 CSS scroll-margin-top（避免固定头部遮挡）
      const scrollMarginTop =
        parseInt(window.getComputedStyle(el).scrollMarginTop) || 0;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // 手动调整位置（兼容不支持 scroll-margin 的浏览器）
      if (scrollMarginTop > 0) {
        window.scrollBy(0, -scrollMarginTop);
      }
    };

    // 主逻辑
    if (to.hash) {
      const targetHash = to.hash.replace(/\//g, "%2F").slice(1); // 例如 "#polygon"
      const targetEl = document.getElementById(targetHash);

      if (targetEl && !targetEl.classList.contains("n-skeleton")) {
        // 如果元素存在且已加载，直接滚动
        highlightAndScroll(targetEl);
      } else {
        _WaitForCondition(() => {
          const targetEl = document.getElementById(targetHash);
          return Boolean(
            targetEl && !targetEl.classList.contains("n-skeleton")
          );
        }, 1000).finally(() => {
          const targetEl = document.getElementById(targetHash);
          targetEl && highlightAndScroll(targetEl);
        });
      }
    } else {
      clearHighlights();
      return savedPosition || { top: 0, left: 0 };
    }
  },
});

export default router;

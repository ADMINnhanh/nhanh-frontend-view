import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import home from "../views/Layout/index.vue";
import Routes from "./Routes";
import { _Utility_WaitForCondition } from "nhanh-pure-function";
import { Settings } from "@/components/popups/components/Settings";
import { ref, watch } from "vue";

const routes = [
  {
    path: "/",
    name: "main",
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
];
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
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
        _Utility_WaitForCondition(() => {
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

const title = ref<Record<string, string>>();
router.afterEach((to, from) => {
  title.value = to.meta.name as any;
});
watch([title, () => Settings.value.language], ([title, language]) => {
  document.title = title?.[language] || "你好啊你好";
});

// console.log(
//   router
//     .getRoutes()
//     .map((item) => {
//       if (item.path == "/:pathMatch(.*)") return;

//       const meta: any = item.meta || {};
//       const name: any = meta.name;
//       const details: any = meta.details;

//       const fallback = {
//         title:
//           "前端Canvas工具集 - 可视化/绘图/音频/数学动态图解/Frontend Canvas Toolkit - Visualization/Drawing/Audio/Math Dynamic Diagram",
//         seo: "涵盖Canvas绘画（YOLO8标注、Threejs、GLSL、图片打散重组、网格文字生成）、数学动态图解、多媒体（取流、在线PCM/MP3/WAV音频可视化播放器）、解乏小组件（弹跳球、小说搜索等）等前端实用工具集。",
//       };
//       const title =
//         name && name.zhCN && name.enUS
//           ? `${name.zhCN}/${name.enUS}`
//           : fallback.title;
//       const seo =
//         details && details.zhCN && details.enUS
//           ? `${details.zhCN}/${details.enUS}`
//           : fallback.seo;
//       return [title, item.path, seo];
//     })
//     .filter(Boolean)
// );

export default router;

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
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (el?.classList.contains("n-skeleton")) {
        _WaitForCondition(
          () =>
            !document.querySelector(to.hash)?.classList.contains("n-skeleton"),
          1000
        ).finally(() => {
          const el = document.querySelector(to.hash);
          el?.scrollIntoView({ behavior: "smooth" });
        });
      } else el?.scrollIntoView({ behavior: "smooth" });
    }
  },
});

export default router;

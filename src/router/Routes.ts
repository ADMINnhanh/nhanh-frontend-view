import svgGather from "@/assets/icon/gather";
import { FishOutline } from "@vicons/ionicons5";
import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";

type RouteRecordRaw2 = RouteRecordRaw & {
  meta: {
    icon?: Component;
    name: {
      zhCN: string;
      enUS: string;
    };
  };
  children?: RouteRecordRaw2[];
};

/** 画布 */
const canvasRoutes: RouteRecordRaw2 = {
  path: "canvas",
  name: "canvas",
  meta: {
    icon: svgGather("canvas"),
    name: {
      zhCN: "Canvas 绘画",
      enUS: "Canvas Drawing",
    },
  },
  children: [
    {
      path: "YOLOFormatAnnotator",
      name: "YOLOFormatAnnotator",
      meta: {
        name: {
          zhCN: "YOLO8 格式标注器",
          enUS: "YOLO8 Format Annotator",
        },
      },
      component: () => import("@/views/canvas/YOLOFormatAnnotator/index.vue"),
    },
    {
      path: "BasicWebGL",
      name: "BasicWebGL",
      meta: {
        name: {
          zhCN: "初识 WebGL",
          enUS: "Basic WebGL",
        },
      },
      component: () => import("@/views/canvas/Basic WebGL/index.vue"),
    },
  ],
};

/** 解乏 */
const relaxRouting: RouteRecordRaw2 = {
  path: "relax",
  name: "relax",
  meta: {
    icon: FishOutline,
    name: {
      zhCN: "解乏小组件",
      enUS: "Relax Widget",
    },
  },
  children: [
    {
      path: "Bounce",
      name: "Bounce",
      meta: {
        name: {
          zhCN: "弹跳球",
          enUS: "Bounce",
        },
      },
      component: () => import("@/views/relax/Bounce/index.vue"),
    },
  ],
};

/** 添加重定向 */
function addRedirect(item: RouteRecordRaw2[]) {
  return item.map((item) => {
    if (!item.component && item.children) {
      item.redirect = { name: item.children[0].name };
      item.children = addRedirect(item.children);
    }
    return item;
  });
}

/** 集合 */
const Routes = addRedirect([canvasRoutes, relaxRouting]);
export default Routes;

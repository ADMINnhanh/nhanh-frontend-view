import svgGather from "@/assets/icon/gather";
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

const canvasRoutes: RouteRecordRaw2 = {
  path: "/canvas",
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
      path: "3DBase",
      name: "3D Base",
      meta: {
        name: {
          zhCN: "3D 基础",
          enUS: "3D Base",
        },
      },
      component: () => import("@/views/canvas/3D Base/index.vue"),
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
const Routes = addRedirect([canvasRoutes]);
export default Routes;

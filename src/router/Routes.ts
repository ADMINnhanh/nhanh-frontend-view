import SvgGather from "@/assets/icon/gather";
import { FishOutline, FootballOutline } from "@vicons/ionicons5";
import { NIcon } from "naive-ui";
import { h, type Component } from "vue";
import type { RouteRecordRaw } from "vue-router";

type CustomRouteRecord = RouteRecordRaw & {
  meta: {
    icon?: ReturnType<typeof h>;
    name: {
      zhCN: string;
      enUS: string;
    };
  };
  children?: CustomRouteRecord[];
};

function RenderIcon(icon: Component) {
  return h(NIcon, null, { default: () => h(icon) });
}

/** 数学 */
const math: CustomRouteRecord = {
  path: "math",
  name: "math",
  meta: {
    icon: SvgGather({ icon: "Math" }),
    name: {
      zhCN: "数学",
      enUS: "Math",
    },
  },
  children: [
    {
      path: "GraphingEquations",
      name: "GraphingEquations",
      meta: {
        name: {
          zhCN: "图形方程",
          enUS: "GraphingEquations",
        },
      },
      component: () => import("@/views/math/GraphingEquations/index.vue"),
    },
  ],
};

/** 多媒体 */
const multimedia: CustomRouteRecord = {
  path: "multimedia",
  name: "multimedia",
  meta: {
    icon: SvgGather({ icon: "Multimedia" }),
    name: {
      zhCN: "多媒体",
      enUS: "Multimedia",
    },
  },
  children: [
    {
      path: "Peerjs",
      name: "Peerjs",
      meta: {
        name: {
          zhCN: "Peerjs 音视频通话",
          enUS: "Peerjs Video Call",
        },
      },
      component: () => import("@/views/multimedia/Peerjs/index.vue"),
    },
  ],
};

/** 画布 */
const canvas: CustomRouteRecord = {
  path: "canvas",
  name: "canvas",
  meta: {
    icon: SvgGather({ icon: "canvas" }),
    name: {
      zhCN: "Canvas 绘画",
      enUS: "Canvas Drawing",
    },
  },
  children: [
    {
      path: "_Canvas",
      name: "_Canvas",
      meta: {
        name: {
          zhCN: "我的 Canvas 工具",
          enUS: "My Canvas Tools",
        },
      },
      component: () => import("@/views/canvas/_Canvas/index.vue"),
    },
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
      component: () => import("@/views/canvas/BasicWebGL/index.vue"),
    },
  ],
};

/** 解乏 */
const relaxRouting: CustomRouteRecord = {
  path: "relax",
  name: "relax",
  meta: {
    icon: RenderIcon(FishOutline),
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

const AllRoute = [math, multimedia, canvas, relaxRouting];

/** 路由重名检测 */
function CheckPath(item: CustomRouteRecord[]) {
  const pathList: string[] = [];
  item.forEach((item) => {
    if (pathList.includes(item.path)) {
      throw new Error(`路由重名：${item.path}`);
    }
    pathList.push(item.path);
    if (item.children && item.children.length > 0) {
      CheckPath(item.children);
    }
  });
}
CheckPath(AllRoute);

/** 添加重定向 */
function AddRedirect(item: CustomRouteRecord[]) {
  return item.map((item) => {
    if (!item.component && item.children) {
      item.redirect = { name: item.children[0].name };
      item.children = AddRedirect(item.children);
    }
    return item;
  });
}

/** 集合 */
const Routes = AddRedirect(AllRoute);
export default Routes;

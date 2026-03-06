import SvgGather from "@/assets/icon/gather";
import { RenderIcon } from "@/utils/vue";
import { FishOutline, HomeOutline } from "@vicons/ionicons5";
import { h } from "vue";
import type { RouteRecordRaw } from "vue-router";

type CustomRouteRecord = RouteRecordRaw & {
  meta: {
    icon?: ReturnType<typeof h>;
    name: {
      zhCN: string;
      enUS: string;
    };
    details?: {
      zhCN: string;
      enUS: string;
    };
  };
  children?: CustomRouteRecord[];
};

/** 首页 */
// const home: CustomRouteRecord = {
//   path: "home",
//   name: "home",
//   meta: {
//     icon: RenderIcon(HomeOutline),
//     name: {
//       zhCN: "首页",
//       enUS: "Home",
//     },
//   },
//   component: () => import("@/views/home/index.vue"),
// };

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
    details: {
      zhCN: "Canvas绘画工具集合：YOLO8标注、Threejs、GLSL、图片打散重组、网格文字生成等在线演示。",
      enUS: "Canvas tools: YOLO8 annotator, Three.js, GLSL, image scatter/recombine, grid text.",
    },
  },
  children: [
    {
      path: "_Canvas",
      name: "_Canvas",
      meta: {
        name: {
          zhCN: "Canvas 工具",
          enUS: "Canvas Tools",
        },
        details: {
          zhCN: "Canvas工具导航与示例入口，汇集绘图、交互与渲染相关小工具。",
          enUS: "Canvas tools hub with drawing, interaction and rendering demos.",
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
        details: {
          zhCN: "基于YOLOv8格式的图片标注器，支持框选、编辑、导出标注，用于数据集制作。",
          enUS: "YOLOv8 image annotator supporting boxing, editing and export for datasets.",
        },
      },
      component: () => import("@/views/canvas/YOLOFormatAnnotator/index.vue"),
    },
    {
      path: "Threejs",
      name: "Threejs",
      meta: {
        name: {
          zhCN: "Threejs",
          enUS: "Threejs",
        },
        details: {
          zhCN: "Three.js 3D示例与交互演示，涵盖基础渲染、相机、材质与光照。",
          enUS: "Three.js 3D demos with rendering, camera, materials and lighting.",
        },
      },
      component: () => import("@/views/canvas/Threejs/index.vue"),
    },
    {
      path: "GLSL",
      name: "GLSL",
      meta: {
        name: {
          zhCN: "GLSL",
          enUS: "GLSL",
        },
        details: {
          zhCN: "GLSL片段着色器在线实验，探索流体、颜色空间转换与图形效果。",
          enUS: "GLSL fragment shader playground for fluids, color spaces and effects.",
        },
      },
      component: () => import("@/views/canvas/GLSL/index.vue"),
    },
    {
      path: "ImageScatterRecombine",
      name: "ImageScatterRecombine",
      meta: {
        name: {
          zhCN: "图片打散重组",
          enUS: "Image Scatter and Recombine",
        },
        details: {
          zhCN: "将图片打散为网格块并动态重组，支持动画与抛掷效果的可视化。",
          enUS: "Scatter an image into blocks and recombine with animations and throws.",
        },
      },
      component: () => import("@/views/canvas/ImageScatterRecombine/index.vue"),
    },
    {
      path: "GridTextGenerator",
      name: "GridTextGenerator",
      meta: {
        name: {
          zhCN: "网格文字生成",
          enUS: "Grid Text Generator",
        },
        details: {
          zhCN: "将文本映射到网格生成像素化文字效果，支持导出与样式调整。",
          enUS: "Generate pixelated text on grids with export and styling options.",
        },
      },
      component: () => import("@/views/canvas/GridTextGenerator/index.vue"),
    },
  ],
};

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
    details: {
      zhCN: "数学可视化与交互演示集合，提供定理与关系的动态图解。",
      enUS: "Interactive math visualizations with dynamic diagrams of relations.",
    },
  },
  children: [
    {
      path: "DynamicDiagram",
      name: "DynamicDiagram",
      meta: {
        name: {
          zhCN: "动态图解",
          enUS: "Dynamic Diagram",
        },
        details: {
          zhCN: "用动画展示几何与数学关系的动态图解，支持参数交互与说明。",
          enUS: "Animated diagrams for geometry and math with interactive parameters.",
        },
      },
      props: true,
      component: () => import("@/views/math/DynamicDiagram/index.vue"),
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
    details: {
      zhCN: "多媒体工具集合：取流与音频可视化，提供解析、渲染与播放示例。",
      enUS: "Multimedia tools: stream capture and audio visualization demos.",
    },
  },
  children: [
    // {
    //   path: "Peerjs",
    //   name: "Peerjs",
    //   meta: {
    //     name: {
    //       zhCN: "Peerjs 音视频通话",
    //       enUS: "Peerjs Video Call",
    //     },
    //   },
    //   component: () => import("@/views/multimedia/Peerjs/index.vue"),
    // },
    {
      path: "AudioPlayer",
      name: "AudioPlayer",
      meta: {
        name: {
          zhCN: "音频可视化播放器",
          enUS: "Audio Player",
        },
        details: {
          zhCN: "可视化音频播放器：同步波形+频谱双视图；支持PCM/MP3/WAV，LFE 混合/多声道/位深/采样率/字节序..识别。",
          enUS: "PCM/MP3/WAV Visual audio player: synced waveform + spectrum views.",
        },
      },
      component: () => import("@/views/multimedia/AudioPlayer/index.vue"),
    },

    {
      path: "TakeFlow",
      name: "TakeFlow",
      meta: {
        name: {
          zhCN: "取流",
          enUS: "TakeFlow",
        },
        details: {
          zhCN: "取流工具，演示媒体流获取与播放流程，便于调试与学习。",
          enUS: "Stream capture tool demonstrating media retrieval and playback.",
        },
      },
      component: () => import("@/views/multimedia/TakeFlow/index.vue"),
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
    details: {
      zhCN: "解乏小组件集合，提供轻松有趣的交互与阅读体验。",
      enUS: "Relax widgets with playful interactions and reading.",
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
        details: {
          zhCN: "弹跳球物理效果演示，简单有趣的放松小玩具。",
          enUS: "Bouncing ball physics demo for fun.",
        },
      },
      component: () => import("@/views/relax/Bounce/index.vue"),
    },
    {
      path: "Knowledge",
      name: "Knowledge",
      meta: {
        name: {
          zhCN: "无用的知识",
          enUS: "Useless knowledge",
        },
        details: {
          zhCN: "无用的知识随机浏览，轻松有趣的碎片阅读页面。",
          enUS: "Random tidbits of useless knowledge for casual reading.",
        },
      },
      component: () => import("@/views/relax/Knowledge/index.vue"),
    },
    {
      path: "Novel",
      name: "Novel",
      meta: {
        name: {
          zhCN: "小说节点搜索",
          enUS: "Novel",
        },
        details: {
          zhCN: "小说节点搜索与阅读工具，快速定位章节并沉浸阅读。",
          enUS: "Novel node search and reading with quick chapter locating.",
        },
      },
      component: () => import("@/views/relax/Novel/index.vue"),
    },
  ],
};

const AllRoute = [
  // home,
  multimedia,
  canvas,
  math,
  relaxRouting,
];

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

/** 重命名组件 */
function RenameComponent(item: CustomRouteRecord[]) {
  return item.map((item) => {
    if (item.component) {
      const oldComponent = item.component as () => Promise<any>;
      item.component = () =>
        oldComponent().then((module) => {
          return h({
            name: item.name as string,
            render: () => h(module.default),
          });
        });
    }
    if (item.children) RenameComponent(item.children);
  });
}
RenameComponent(AllRoute);

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

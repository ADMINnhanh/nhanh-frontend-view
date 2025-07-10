import { useLocalStorage } from "@vueuse/core";

export type Collection = {
  title: string;
  children?: Collection;
  component?: any;
}[];
export const dynamicDiagramCollection: Collection = [
  {
    title: "反直觉",
    children: [
      {
        title: "三边围墙",
        component: () => import("./demo/unintuitive/threeWalledEnclosure.vue"),
      },
    ],
  },
  {
    title: "三角形",
    children: [
      {
        title: "垂直平分线",
        component: () =>
          import("./demo/triangle/perpendicularBisector/index.vue"),
      },
      {
        title: "角平分线",
        component: () => import("./demo/triangle/angleBisector/index.vue"),
      },
      {
        title: "中位线",
        component: () => import("./demo/triangle/midline/index.vue"),
      },
      {
        title: "勾股定理",
        children: [
          {
            title: "欧几里得论证法",
            component: () =>
              import(
                "./demo/triangle/pythagoreanTheorem/euclideanArgument/index.vue"
              ),
          },
          {
            title: "月牙定理",
            component: () =>
              import(
                "./demo/triangle/pythagoreanTheorem/lunesTheorem/index.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    title: "多边形",
    children: [],
  },
] as const;
export const dynamicDiagram = useLocalStorage(
  "math-dynamic-diagram",
  "三边围墙"
);

const otherColor = ["#8a2be2", "#ff69b4"];
const moneyColor = {
  "0.1": ["#604041", "#66484A", "#A68784", "#CDA8A2", "#CBB9B7", "#D1C1A7"],
  "0.2": ["#546056", "#616E5D", "#6A8F95", "#A7AE9E", "#C7D9DD", "#8D998F"],
  "0.5": ["#5C4652", "#846D72", "#845B63", "#BCB6C0", "#B5BEC5", "#FEDEE1"],
  "1": ["#353D26", "#727F65", "#BDCBB1", "#CCBC81", "#B5B3A6", "#E5E6E0"],
  "5": ["#423458", "#77608E", "#A18EAE", "#D8C6B2", "#CFD0B1", "#AFAA97"],
  "10": ["#233342", "#4A5A69", "#A7AEBE", "#B8A49D", "#B5B3A6", "#B7957C"],
  "20": ["#543C30", "#978473", "#B8967A", "#DDBDA4", "#A7C9B9", "#E5CDDA"],
  "50": ["#496D63", "#527A71", "#99BFB2", "#7D81A4", "#CFC8DA", "#898A7C"],
  "100": ["#C73A64", "#D35C7C", "#ED80A7", "#EAD4E0", "#A8B7DE", "#F0EEFB"],
};

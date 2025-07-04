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

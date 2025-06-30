import { useLocalStorage } from "@vueuse/core";
import threeWalledEnclosure from "./demo/threeWalledEnclosure.vue";
import perpendicularBisector from "./demo/perpendicularBisector/index.vue";
import angleBisector from "./demo/angleBisector/index.vue";

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
        component: threeWalledEnclosure,
      },
    ],
  },
  {
    title: "三角形",
    children: [
      {
        title: "垂直平分线",
        component: perpendicularBisector,
      },
      {
        title: "角平分线",
        component: angleBisector,
      },
    ],
  },
] as const;
export const dynamicDiagram = useLocalStorage(
  "math-dynamic-diagram",
  "三边围墙"
);

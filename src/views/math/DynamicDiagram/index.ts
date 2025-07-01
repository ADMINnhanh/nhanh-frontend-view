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
      {
        // https://basic.smartedu.cn/syncClassroom/classActivity?activityId=314b07ca-a341-11ec-92ef-246e9675e50c&chapterId=1d266936-49d6-37ba-8a82-466e03e69efa&teachingmaterialId=561056b2-29a1-4588-9ed2-a9440667e589&fromPrepare=0&classHourId=lesson_1
        title: "勾股定理",
        children: [
          {
            title: "欧几里得论证法",
            component: angleBisector,
          },
          {
            title: "月牙定理",
            component: angleBisector,

            // const canvas = document.getElementById("canvas");
            // const ctx = canvas.getContext("2d");

            // ctx.save();

            // // 创建两个裁剪路径
            // let circlePath = new Path2D();
            // circlePath.arc(150, 75, 75, 0, 2 * Math.PI);
            // let squarePath = new Path2D();
            // squarePath.arc(50, 75, 75, 0, 2 * Math.PI);

            // // 将裁剪区域设置为圆形
            // ctx.clip(circlePath);
            // // 将裁剪区域设置为圆形和正方形的交集
            // ctx.clip(squarePath);

            // // 绘制被裁剪的内容
            // ctx.fillStyle = "blue";
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            // ctx.restore()

            // ctx.fillStyle = "orange";
            // ctx.fillRect(0, 0, 100, 100);
          },
        ],
      },
    ],
  },
] as const;
export const dynamicDiagram = useLocalStorage(
  "math-dynamic-diagram",
  "三边围墙"
);

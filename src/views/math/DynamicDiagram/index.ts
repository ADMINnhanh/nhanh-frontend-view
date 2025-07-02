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
        // https://basic.smartedu.cn/syncClassroom/classActivity?activityId=314b07ca-a341-11ec-92ef-246e9675e50c&chapterId=1d266936-49d6-37ba-8a82-466e03e69efa&teachingmaterialId=561056b2-29a1-4588-9ed2-a9440667e589&fromPrepare=0&classHourId=lesson_1
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
            title: "月牙定理(待完善)",
            component: () =>
              import(
                "./demo/triangle/pythagoreanTheorem/lunesTheorem/index.vue"
              ),

            // const canvas = document.getElementById("canvas");
            // const ctx = canvas.getContext("2d");

            // // 绘制蓝色圆形
            // ctx.beginPath();
            // ctx.arc(100, 75, 50, 0, Math.PI * 2);
            // ctx.fillStyle = "blue";
            // ctx.fill();

            // // 清除指定圆形区域（使用临时路径）
            // ctx.save();
            // ctx.beginPath();
            // ctx.arc(120, 95, 50, 0, Math.PI * 2);
            // clip 是指定后续可操作的区域
            // ctx.clip();
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.restore();
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

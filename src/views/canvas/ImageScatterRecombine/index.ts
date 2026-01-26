/** 动画类型 - 图片打散重组相关 */
export const ANIMATION_TYPES = [
  "像素块依次飞入",
  "像素块随机飞入",
  "像素块以中心为原点旋转着依次飞入",
  "像素块以中心为原点旋转着随机飞入",
] as const;

/** 动画类型联合类型 */
export type ImageScatterAnimationType = (typeof ANIMATION_TYPES)[number];

/** 块数据类型 */
export type BlockData = [number, number, number, number][][];

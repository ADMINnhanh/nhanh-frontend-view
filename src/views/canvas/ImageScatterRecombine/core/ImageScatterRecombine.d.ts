/** 图像打散重组配置项 */
type ImageScatterConfig = {
  /** 画布 */
  id: string;
  /** 图片 */
  url: string | Blob | URL;
  /** 原点 */
  origin: { x: number; y: number };
  /** 渲染大小 */
  renderSize: { width: number; height: number };
  /** 数据块大小 */
  blockSize: { width: number; height: number };
  /** 区块排序方式 */
  blockSortType: "sortInSequence" | "sortRandomly";
  /** 区块起始位置生成方式 */
  blockStartPositionGenerator: "center" | "top" | "bottom" | "left" | "right";
  /** 动画 */
  animation: {
    /** 动画类型 */
    name?: "linear" | "ease";
    /** 动画周期 秒 */
    duration?: number;
  };
};

/** 块数据类型 */
type BlockData = [number, number, number, number][][];

/** 定义区块排序函数的类型，输入区块总数，返回坐标数组 */
type BlockSortFunction = (
  totalXBlocks: number,
  totalYBlocks: number
) => { blockXIndex: number; blockYIndex: number }[];

/**
 * 区块坐标与移动状态信息
 * 包含区块的索引位置、移动的起始/目标位置、当前位置及移动进度
 */
type BlockCoordinate = {
  /** 区块在X轴方向的索引（网格中的列位置） */
  blockXIndex: number;
  /** 区块在Y轴方向的索引（网格中的行位置） */
  blockYIndex: number;
  /** 区块当前所在的X坐标（像素/实际坐标） */
  currentX: number;
  /** 区块当前所在的Y坐标（像素/实际坐标） */
  currentY: number;
  /** 区块移动的起始位置X坐标（像素/实际坐标） */
  startX: number;
  /** 区块移动的起始位置Y坐标（像素/实际坐标） */
  startY: number;
  /** 区块移动的结束位置X坐标（像素/实际坐标） */
  endX: number;
  /** 区块移动的结束位置Y坐标（像素/实际坐标） */
  endY: number;
  /** 区块移动进度（0-1之间的数值，0表示未开始，1表示完成） */
  progress: number;
};
/**
 * 区块起始位置生成方法
 * @param block 区块坐标对象
 * @returns 计算后的区块起始位置坐标对象，包含 x/y 轴像素值
 */
type BlockPositionFunction = (block: BlockCoordinate) => {
  x: number;
  y: number;
};
/**
 * 区块移动方法
 * @param block 区块坐标对象
 * @returns 移动后的区块目标位置坐标对象，包含 x/y 轴像素值
 */
type BlockMoveFunction = (block: BlockCoordinate) => {
  x: number;
  y: number;
};

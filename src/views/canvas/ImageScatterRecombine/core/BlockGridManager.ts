import type ImageScatterRecombine from ".";

/** 区块网格生成和排序 */
class BlockSortGenerator {
  /** 当前使用的排序类型 */
  private _sortType: ImageScatterConfig["blockSortType"] = "sortInSequence";
  get sortType() {
    return this._sortType;
  }
  set sortType(value: undefined | ImageScatterConfig["blockSortType"]) {
    if (value && value in this) this._sortType = value;
  }

  /** 排序 */
  sort: BlockSortFunction = (totalXBlocks, totalYBlocks) => {
    return this[this.sortType!](totalXBlocks, totalYBlocks);
  };

  /**
   * 按顺序排序：从上到下、从左到右生成区块坐标
   */
  private sortInSequence: BlockSortFunction = (totalXBlocks, totalYBlocks) => {
    const coordinates: ReturnType<BlockSortFunction> = [];
    for (let y = 0; y < totalYBlocks; y++) {
      for (let x = 0; x < totalXBlocks; x++) {
        coordinates.push({ blockXIndex: x, blockYIndex: y });
      }
    }
    return coordinates;
  };

  /**
   * 随机排序：在顺序排序的基础上打乱坐标顺序
   */
  private sortRandomly: BlockSortFunction = (totalXBlocks, totalYBlocks) => {
    const coordinates = this.sortInSequence(totalXBlocks, totalYBlocks);

    // Fisher-Yates 洗牌算法实现随机打乱
    for (let i = coordinates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [coordinates[i], coordinates[j]] = [coordinates[j], coordinates[i]];
    }

    return coordinates;
  };
}

/**
 * 区块网格起始位置生成器
 * 负责根据预设/自定义的位置计算方法，生成区块在画布中的起始坐标
 * 支持内置位置算法（center/top/bottom/left/right）和用户自定义位置算法
 */
class BlockStartPositionGenerator {
  /**
   * 当前使用的位置计算方法名称
   * 内置值：center/top/bottom/left/right，也可存储用户自定义方法名
   */
  private _positionMethod: ImageScatterConfig["blockStartPositionGenerator"] =
    "center";

  /** 获取当前使用的位置计算方法名称 */
  get positionMethod() {
    return this._positionMethod;
  }
  set positionMethod(
    value: ImageScatterConfig["blockStartPositionGenerator"] | undefined
  ) {
    if (value && value in this) this._positionMethod = value;
  }

  /** 主控制器实例 */
  private main: ImageScatterRecombine;

  /**
   * 构造函数
   * @param main 主控制器实例
   */
  constructor(main: ImageScatterRecombine) {
    this.main = main;
  }

  /**
   * 为所有区块生成起始位置坐标
   * @param blockCoordinates 区块坐标列表
   */
  generate(blockCoordinates: BlockCoordinate[]): void {
    blockCoordinates.forEach((block) => {
      // 根据当前选中的方法名获取坐标（兼容内置/自定义方法）
      const position = this[this.positionMethod!](block);
      // 四舍五入确保坐标为整数
      const startX = Math.round(position.x);
      const startY = Math.round(position.y);

      // 初始化区块的起始和当前坐标
      block.startX = startX;
      block.startY = startY;
      block.currentX = startX;
      block.currentY = startY;
    });
  }

  /**
   * 获取画布和区块尺寸的快捷方法
   * 抽离重复逻辑，方便内置/自定义方法复用
   */
  protected getDimensions() {
    const { canvasWidth, canvasHeight } = this.main.canvasProcessor.export;
    const { blockSize } = this.main.imageProcessor.export;
    return {
      canvasWidth,
      canvasHeight,
      blockWidth: blockSize.width,
      blockHeight: blockSize.height,
    };
  }

  // ===================== 内置位置计算方法（私有，外部通过positionMethod调用） =====================
  /** 居中对齐（内置） */
  private center: BlockPositionFunction = () => {
    const { canvasWidth, canvasHeight, blockWidth, blockHeight } =
      this.getDimensions();
    return {
      x: (canvasWidth - blockWidth) / 2,
      y: (canvasHeight - blockHeight) / 2,
    };
  };

  /** 顶部对齐（内置） */
  private top: BlockPositionFunction = () => {
    const { canvasWidth, blockWidth } = this.getDimensions();
    return {
      x: (canvasWidth - blockWidth) / 2,
      y: 0,
    };
  };

  /** 底部对齐（内置） */
  private bottom: BlockPositionFunction = () => {
    const { canvasWidth, canvasHeight, blockWidth, blockHeight } =
      this.getDimensions();
    return {
      x: (canvasWidth - blockWidth) / 2,
      y: canvasHeight - blockHeight,
    };
  };

  /** 左侧对齐（内置） */
  private left: BlockPositionFunction = () => {
    const { canvasHeight, blockHeight } = this.getDimensions();
    return {
      x: 0,
      y: (canvasHeight - blockHeight) / 2,
    };
  };

  /** 右侧对齐（内置） */
  private right: BlockPositionFunction = () => {
    const { canvasWidth, canvasHeight, blockWidth, blockHeight } =
      this.getDimensions();
    return {
      x: canvasWidth - blockWidth,
      y: (canvasHeight - blockHeight) / 2,
    };
  };
}

/** 区块网格移动 */
class BlockMoveGenerator {
  /** 当前使用的位置计算方法名称  */
  private _moveMethod: ImageScatterConfig["blockMoveType"] = "linear";

  /** 获取当前使用的位置计算方法名称 */
  get moveMethod() {
    return this._moveMethod;
  }
  set moveMethod(value: ImageScatterConfig["blockMoveType"] | undefined) {
    if (value && value in this) this._moveMethod = value;
  }

  /** 移动 */
  move(blockCoordinate: BlockCoordinate[]) {
    const method = this[this.moveMethod!];
    blockCoordinate.forEach((item) => {
      if (item.progress == 0) {
        item.currentX = item.startX;
        item.currentY = item.startY;
      } else if (item.progress == 1) {
        item.currentX = item.endX;
        item.currentY = item.endY;
      } else {
        const { x, y } = method(item);
        item.currentX = x;
        item.currentY = y;
      }
    });
  }

  /** 平滑（线性） */
  private linear: BlockMoveFunction = (block) => {
    const { progress, startX, startY, endX, endY } = block;
    return {
      x: (endX - startX) * progress + startX,
      y: (endY - startY) * progress + startY,
    };
  };

  /** 慢-快-慢（缓动） */
  private ease: BlockMoveFunction = (block) => {
    const { progress, startX, startY, endX, endY } = block;
    const easeProgress = 0.5 * (1 - Math.cos(progress * Math.PI));
    return {
      x: (endX - startX) * easeProgress + startX,
      y: (endY - startY) * easeProgress + startY,
    };
  };
}

/** 区块网格管理器 */
class BlockManager {
  /** x轴方向的区块总数 */
  private totalXBlocks = 0;
  /** y轴方向的区块总数 */
  private totalYBlocks = 0;
  /** 数据块大小 */
  private blockSize?: ImageScatterConfig["blockSize"];

  /** 排序 */
  private blockSort = new BlockSortGenerator();
  /** 起始位置 */
  private blockStartPosition: BlockStartPositionGenerator;
  /** 移动 */
  private blockMove = new BlockMoveGenerator();

  /** 区块坐标列表 */
  blockCoordinates: BlockCoordinate[] = [];

  /** 主类 */
  main: ImageScatterRecombine;
  constructor(main: ImageScatterRecombine) {
    this.main = main;
    this.blockStartPosition = new BlockStartPositionGenerator(main);
  }

  /**
   * 更新区块网格配置
   * @param config 网格配置项
   * @returns 是否发生了配置变更
   */
  update() {
    const { totalXBlocks, totalYBlocks, blockSize } =
      this.main.imageProcessor.export;
    const {
      blockSortType: sortType,
      blockStartPositionGenerator: positionMethod,
      blockMoveType,
    } = this.main.config;

    // 判断配置是否发生变化
    const isConfigChanged =
      totalXBlocks !== this.totalXBlocks ||
      totalYBlocks !== this.totalYBlocks ||
      JSON.stringify(blockSize) !== JSON.stringify(this.blockSize) ||
      (sortType && sortType !== this.blockSort.sortType) ||
      (positionMethod &&
        positionMethod !== this.blockStartPosition.positionMethod);

    this.totalXBlocks = totalXBlocks;
    this.totalYBlocks = totalYBlocks;
    this.blockSize = blockSize;
    this.blockMove.moveMethod = blockMoveType;

    // 如果配置变更，重新生成区块坐标
    if (isConfigChanged) {
      this.blockSort.sortType = sortType;
      this.blockStartPosition.positionMethod = positionMethod;
      this.regenerateBlockCoordinates();
    }
  }

  /** 重新生成区块坐标列表 */
  private regenerateBlockCoordinates() {
    const { totalXBlocks, totalYBlocks } = this;
    const blockCoordinates = this.blockSort.sort(
      totalXBlocks,
      totalYBlocks
    ) as unknown as BlockCoordinate[];
    this.initializeBlockPositionProperties(blockCoordinates);
    this.blockStartPosition.generate(blockCoordinates);

    this.blockCoordinates = blockCoordinates;
  }

  /** 初始化初始化区块属性 */
  private initializeBlockPositionProperties(
    blockCoordinates: BlockCoordinate[]
  ) {
    const origin = this.main.config.origin!;
    const { width, height } = this.blockSize!;
    blockCoordinates.forEach((item) => {
      item.endX = item.blockXIndex * width + origin.x;
      item.endY = item.blockYIndex * height + origin.y;
      item.progress = 0;
    });
  }
}

export default BlockManager;

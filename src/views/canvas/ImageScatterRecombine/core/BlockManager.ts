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

/** 区块网格起始位置生成器 */
class BlockStartPositionGenerator {
  /**
   * 当前使用的位置计算方法名称
   * 内置值：center/top/bottom/left/right，也可存储用户自定义方法名
   */
  private _positionMethod: ImageScatterConfig["blockStartPositionGenerator"] =
    "bottom";

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
    const { width, height } = this.main.imageProcessor.export.blockSizeClamped;
    return {
      canvasWidth,
      canvasHeight,
      blockWidth: width,
      blockHeight: height,
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

/** 区块网格管理器 */
class BlockManager {
  /** 原点 */
  private get origin() {
    const origin = this.main.config.origin;
    if (origin) return origin;

    const { imageWidth, imageHeight } = this.main.imageProcessor.export;
    const { canvasWidth, canvasHeight } = this.main.canvasProcessor.export;
    return {
      x: Math.round((canvasWidth - imageWidth) / 2),
      y: Math.round((canvasHeight - imageHeight) / 2),
    };
  }
  /** 排序 */
  private blockSort = new BlockSortGenerator();
  /** 起始位置 */
  private blockStartPosition: BlockStartPositionGenerator;

  /** 区块坐标列表 */
  blockCoordinates: BlockCoordinate[] = [];

  /** 主类 */
  private main: ImageScatterRecombine;
  constructor(main: ImageScatterRecombine) {
    this.main = main;
    this.blockStartPosition = new BlockStartPositionGenerator(main);
  }

  /**
   * 更新区块网格配置
   * @param config 网格配置项
   * @returns 是否发生了配置变更
   */
  update(imageChange: boolean) {
    const {
      blockSortType: sortType,
      blockStartPositionGenerator: positionMethod,
    } = this.main.config;

    const sortTypeChange = sortType && sortType !== this.blockSort.sortType;
    const positionMethodChange =
      positionMethod &&
      positionMethod !== this.blockStartPosition.positionMethod;

    this.blockSort.sortType = sortType;
    this.blockStartPosition.positionMethod = positionMethod;

    const changed = !!(imageChange || sortTypeChange || positionMethodChange);
    if (changed) this.regenerateBlockCoordinates();

    return changed;
  }

  /** 重新生成区块坐标列表 */
  private regenerateBlockCoordinates() {
    const { totalXBlocks, totalYBlocks } = this.main.imageProcessor.export;
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
    const origin = this.origin;

    const { width, height } = this.main.imageProcessor.export.blockSizeClamped;

    blockCoordinates.forEach((item) => {
      item.endX = Math.floor(item.blockXIndex * width + origin.x);
      item.endY = Math.floor(item.blockYIndex * height + origin.y);
      item.progress = 0;
    });
  }

  /** 重置区块 */
  reset() {
    this.blockCoordinates.forEach((item) => {
      item.progress = 0;
    });
  }
}

export default BlockManager;

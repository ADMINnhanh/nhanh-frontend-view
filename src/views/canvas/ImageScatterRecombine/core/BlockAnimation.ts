import type ImageScatterRecombine from ".";

/** 区块网格移动 */
class BlockMoveGenerator {
  /** 当前使用的位置计算方法名称  */
  private _moveMethod: ImageScatterConfig["animation"]["name"] = "bounce";

  /** 获取当前使用的位置计算方法名称 */
  get moveMethod() {
    return this._moveMethod;
  }
  set moveMethod(value: ImageScatterConfig["animation"]["name"] | undefined) {
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

  /** 快速开始，然后减速（缓出） */
  private easeOut: BlockMoveFunction = (block) => {
    const { progress, startX, startY, endX, endY } = block;
    // 使用二次方曲线实现缓出效果，progress越接近1，变化越慢
    const easeProgress = 1 - Math.pow(1 - progress, 2);
    return {
      x: (endX - startX) * easeProgress + startX,
      y: (endY - startY) * easeProgress + startY,
    };
  };

  /** 缓慢开始，然后加速（缓入） */
  private easeIn: BlockMoveFunction = (block) => {
    const { progress, startX, startY, endX, endY } = block;
    // 二次方曲线实现缓入效果，progress越接近1，变化越快
    const easeProgress = Math.pow(progress, 2);
    return {
      x: (endX - startX) * easeProgress + startX,
      y: (endY - startY) * easeProgress + startY,
    };
  };

  /** 弹跳效果（多次回弹） */
  private bounce: BlockMoveFunction = (block) => {
    const { startX, startY, endX, endY } = block;
    let progress = block.progress;

    // 定义弹跳的参数
    const n1 = 7.5625;
    const d1 = 2.75;
    let bounceProgress = 0;

    if (progress < 1 / d1) {
      bounceProgress = n1 * progress * progress;
    } else if (progress < 2 / d1) {
      bounceProgress = n1 * (progress -= 1.5 / d1) * progress + 0.75;
    } else if (progress < 2.5 / d1) {
      bounceProgress = n1 * (progress -= 2.25 / d1) * progress + 0.9375;
    } else {
      bounceProgress = n1 * (progress -= 2.625 / d1) * progress + 0.984375;
    }

    return {
      x: (endX - startX) * bounceProgress + startX,
      y: (endY - startY) * bounceProgress + startY,
    };
  };
}

/** 区块网格动画 */
class BlockAnimationManager {
  /** 动画周期 秒 */
  private duration = 0.5;
  /** 移动 */
  private blockMove = new BlockMoveGenerator();

  /** 暴露一些属性 */
  get export() {
    return {
      /** 动画周期 秒 */
      duration: this.duration,
      /** 移动方法名称 */
      moveMethod: this.blockMove.moveMethod,
    };
  }

  /** 主类 */
  private main: ImageScatterRecombine;
  constructor(main: ImageScatterRecombine) {
    this.main = main;
  }

  /** 更新 */
  update() {
    if (!this.main.config.animation) return;
    const { name, duration } = this.main.config.animation;
    this.blockMove.moveMethod = name;
    this.duration = duration || this.duration;
  }

  /** 计算区块当前位置 */
  calculateBlockPosition() {
    this.blockMove.move(this.main.throwManager.runningBlocks);
  }
}

export default BlockAnimationManager;

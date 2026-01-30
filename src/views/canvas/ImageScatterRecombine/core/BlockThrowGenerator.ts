import type ImageScatterRecombine from ".";

class BlockThrowGenerator {
  /** 已完成的区块 */
  finishedBlocks: BlockCoordinate[] = [];
  /** 正在运动的区块 */
  runningBlocks: BlockCoordinate[] = [];
  /** 已抛出的区块数量 */
  get throwCount() {
    return this.finishedBlocks.length + this.runningBlocks.length;
  }
  /** 区块列表 */
  private get blockCoordinates() {
    return this.main.blockManager.blockCoordinates;
  }
  /** 区块数量 */
  private get blockCount() {
    return this.blockCoordinates.length;
  }
  /** 区块是否全部移动完毕 */
  get isFinished() {
    return this.finishedBlocks.length == this.blockCount;
  }

  /** 自动抛出定时器 */
  private autoThrowTimer?: ReturnType<typeof setInterval>;
  /** 自动抛出时间间隔 秒 */
  private autoThrowInterval = 0.1;

  /** 主类 */
  private main: ImageScatterRecombine;
  constructor(main: ImageScatterRecombine) {
    this.main = main;
  }

  update() {
    const { autoThrowInterval, type } = this.main.config.throw || {};

    if (type == "manual") this.stopAutoThrow();
    if (autoThrowInterval && autoThrowInterval != this.autoThrowInterval) {
      this.autoThrowInterval = autoThrowInterval;
      if (this.autoThrowTimer) this.autoThrow();
    }
  }
  /** 更新区块进度 */
  updateBlockProgress(delta: number) {
    const { duration } = this.main.animationManager.export;
    const progressIncrement = delta / (duration * 1000);
    this.runningBlocks.forEach((block) => {
      if (typeof block.duration == "number") {
        const progressIncrement = delta / (block.duration * 1000);
        block.progress = Math.min(block.progress + progressIncrement, 1);
      } else {
        block.progress = Math.min(block.progress + progressIncrement, 1);
      }
    });
    this.check();
  }

  /** 抛出 */
  throw(count = 1) {
    /** 剩余待抛出区块数量 */
    const remainingCount = this.blockCount - this.throwCount;
    /** 最大抛出数量 */
    const maxCount = Math.min(count, remainingCount);
    for (count; count <= maxCount; count++) {
      const block = this.blockCoordinates[this.throwCount];
      this.runningBlocks.push(block);
    }
  }
  /** 自动抛出 */
  autoThrow() {
    this.stopAutoThrow();
    this.autoThrowTimer = setInterval(
      () => this.throw(),
      this.autoThrowInterval * 1000
    );
  }
  /** 停止自动抛出 */
  stopAutoThrow() {
    clearInterval(this.autoThrowTimer);
    this.autoThrowTimer = undefined;
  }
  /** 完成检测 */
  check() {
    const finished = this.runningBlocks.filter((v) => v.progress == 1);
    finished.forEach((block) => {
      block.currentX = block.endX;
      block.currentY = block.endY;
    });
    this.finishedBlocks.push(...finished);
    this.runningBlocks = this.runningBlocks.filter((v) => v.progress != 1);
  }
  /** 重置 */
  reset() {
    this.finishedBlocks = [];
    this.runningBlocks = [];
  }
}

export default BlockThrowGenerator;

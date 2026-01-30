import type ImageScatterRecombine from ".";

/** 图片处理器 */
class ImageProcessor {
  /** 画布 */
  private canvasId?: string;
  /** 图像资源地址（支持URL字符串、Blob对象、URL对象） */
  private imageSource?: string | Blob | URL;
  /** 图像元素 */
  private imageElement?: HTMLImageElement;
  /** 图像像素数据（存储解析后的图像像素信息） */
  private imageData?: ImageData;
  /** 数据块大小 */
  private _blockSize?: ImageScatterConfig["blockSize"];
  /** 数据块大小 */
  private get blockSize(): Exclude<ImageScatterConfig["blockSize"], null> {
    if (this._blockSize) return this._blockSize;

    const { width = 0, height = 0 } = this.imageData ?? {};
    return {
      width: Math.max(40, Math.round(width / 10)),
      height: Math.max(40, Math.round(height / 10)),
    };
  }
  private set blockSize(value: ImageScatterConfig["blockSize"]) {
    if (value) this._blockSize = { ...value };
    else this._blockSize = value;
  }
  /** 受限的数据块大小 */
  private get blockSizeClamped() {
    const { imageData, blockSize } = this;
    const imageWidth = imageData?.width || 0;
    const imageHeight = imageData?.height || 0;

    const width = Math.min(blockSize.width, imageWidth);
    const height = Math.min(blockSize.height, imageHeight);
    return { width, height };
  }
  /** 图像渲染大小 */
  private _renderSize?: ImageScatterConfig["renderSize"];
  /** 图像渲染大小 */
  private get renderSize() {
    return this._renderSize;
  }
  private set renderSize(value: ImageScatterConfig["renderSize"] | undefined) {
    if (value) this._renderSize = { ...value };
    else this._renderSize = value;
  }
  /** 存储所有行的区块数据 */
  private blockRows: ImageData[][] = [];
  /** x轴方向的区块总数 */
  private totalXBlocks = 0;
  /** y轴方向的区块总数 */
  private totalYBlocks = 0;

  /** 暴露一些属性 */
  get export() {
    const {
      imageData,
      blockSize,
      totalXBlocks,
      totalYBlocks,
      blockSizeClamped,
    } = this;
    const imageWidth = imageData?.width || 0;
    const imageHeight = imageData?.height || 0;

    return {
      blockSize,
      blockSizeClamped,
      totalXBlocks,
      totalYBlocks,
      imageWidth,
      imageHeight,
    };
  }

  /** 主类 */
  private main: ImageScatterRecombine;
  constructor(main: ImageScatterRecombine) {
    this.main = main;
  }

  private jsonNotEqual(v: any, v1: any) {
    return v !== undefined && JSON.stringify(v) !== JSON.stringify(v1);
  }

  /** 更新图像资源并重新加载像素数据 */
  async update(canvasChange: boolean) {
    const { id, url, blockSize, renderSize } = this.main.config;
    const idChanged = id && id !== this.canvasId;
    const urlChanged = url && url !== this.imageSource;
    const blockSizeChanged = this.jsonNotEqual(blockSize, this.blockSize);
    const renderSizeChanged = this.jsonNotEqual(renderSize, this.renderSize);

    if (renderSizeChanged) {
      this.renderSize = renderSize;
    }
    if (idChanged) {
      this.canvasId = id;
    }
    if (urlChanged) {
      this.imageSource = url;
      await this.loadImageData();
    } else if (renderSizeChanged || idChanged || canvasChange) {
      this.getImageDataFromElement();
    }
    if (blockSizeChanged) {
      this.blockSize = blockSize!;
    }

    const changed =
      idChanged || urlChanged || blockSizeChanged || renderSizeChanged;

    if (changed) this.organizeBlockPixelData();

    return !!changed;
  }

  /** 加载图像数据（处理不同类型的URL/Blob） */
  private async loadImageData() {
    const source = this.imageSource!;

    if (source instanceof URL) {
      await this.getImageDataFromUrl(source.href);
    } else if (source instanceof Blob) {
      const blobUrl = URL.createObjectURL(source);
      await this.getImageDataFromUrl(blobUrl);
      URL.revokeObjectURL(blobUrl);
    } else {
      await this.getImageDataFromUrl(source);
    }
  }

  /** 根据URL获取图像像素数据（ImageData） */
  private getImageDataFromUrl(url: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.crossOrigin = "Anonymous";

      img.onload = () => resolve(this.getImageDataFromElement());
      img.onerror = (err) => reject(new Error(`加载图片失败: ${url}`));

      this.imageElement = img;
    });
  }
  /** 根据元素获取图像像素数据（ImageData） */
  private getImageDataFromElement() {
    if (!this.imageElement) return;
    const img = this.imageElement;
    const { width, height } = this.calculateFitSize(img.width, img.height);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, width, height);
    this.imageData = ctx.getImageData(0, 0, width, height);
  }
  /**
   * 计算适配显示尺寸（等比例缩放，不超出Canvas容器边界）
   * @param originalWidth 原始内容宽度（基准宽度）
   * @param originalHeight 原始内容高度（基准高度）
   * @returns 适配后的宽高对象（保证等比例，且不超出Canvas容器尺寸）
   */
  private calculateFitSize(originalWidth: number, originalHeight: number) {
    if (this.renderSize) return this.renderSize;

    const { canvasWidth, canvasHeight } = this.main.canvasProcessor.export;

    if (canvasWidth > originalWidth && canvasHeight > originalHeight) {
      return { width: originalWidth, height: originalHeight };
    }

    const widthRatio = canvasWidth / originalWidth;
    const heightRatio = canvasHeight / originalHeight;

    if (widthRatio > heightRatio) {
      return {
        width: (canvasHeight / originalHeight) * originalWidth,
        height: canvasHeight,
      };
    } else {
      return {
        width: canvasWidth,
        height: (canvasWidth / originalWidth) * originalHeight,
      };
    }
  }

  /**
   * 获取指定索引区块的像素数据
   * @param blockXIndex 区块在X轴的索引（从0开始）
   * @param blockYIndex 区块在Y轴的索引（从0开始）
   * @returns 对应区块的像素数据数组，若参数无效返回空数组
   */
  getBlockPixelData(blockXIndex: number, blockYIndex: number) {
    // 1. 校验参数类型是否为整数
    if (!Number.isInteger(blockXIndex) || !Number.isInteger(blockYIndex)) {
      console.warn(
        `获取区块数据失败: 索引必须为整数，当前x: ${blockXIndex}, y: ${blockYIndex}`
      );
      return;
    }

    // 2. 校验索引是否在有效范围内（包含0，且不超过最大索引）
    const isXIndexValid = blockXIndex >= 0 && blockXIndex < this.totalXBlocks;
    const isYIndexValid = blockYIndex >= 0 && blockYIndex < this.totalYBlocks;

    if (!isXIndexValid || !isYIndexValid) {
      console.warn(
        `获取区块数据失败: 索引超出有效范围
      - 输入索引: x=${blockXIndex}, y=${blockYIndex}
      - 有效范围: x∈[0, ${this.totalXBlocks - 1}], y∈[0, ${
          this.totalYBlocks - 1
        }]`
      );
      return;
    }

    // 3. 安全获取区块数据（防止blockRows未初始化/索引越界）
    const targetBlockData = this.blockRows?.[blockYIndex]?.[blockXIndex] ?? [];
    return targetBlockData;
  }
  /**
   * 整理区块像素数据，将整幅图像的像素数据按指定区块大小进行分块
   * @returns 二维数组形式的区块像素数据
   */
  private organizeBlockPixelData() {
    const { imageData, blockSize } = this;
    if (!imageData) return;

    this.blockRows = [];

    this.totalXBlocks = Math.ceil(imageData.width / blockSize.width);
    this.totalYBlocks = Math.ceil(imageData.height / blockSize.height);

    for (let y = 0; y < this.totalYBlocks; y++) {
      const cols: ImageData[] = [];
      for (let x = 0; x < this.totalXBlocks; x++) {
        cols.push(this.getSingleBlockPixelData(x, y));
      }
      this.blockRows.push(cols);
    }
  }

  /**
   * 获取指定坐标区块的像素数据
   * @param x 区块在x轴的索引
   * @param y 区块在y轴的索引
   * @returns 该区块的像素数据数组
   */
  private getSingleBlockPixelData(x: number, y: number) {
    const imageData = this.imageData!;
    const blockSize = this.blockSize;

    /** x轴起始索引 */
    const xStart = x * blockSize.width;
    /** x轴结束索引 */
    const xEnd = Math.min(xStart + blockSize.width, imageData.width);
    /** y轴起始索引 */
    const yStart = y * blockSize.height;
    /** y轴结束索引 */
    const yEnd = Math.min(yStart + blockSize.height, imageData.height);

    let blockIndex = 0;
    const blockImageData = new ImageData(xEnd - xStart, yEnd - yStart);

    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        const index = (y * imageData.width + x) * 4;
        const r = imageData.data[index];
        const g = imageData.data[index + 1];
        const b = imageData.data[index + 2];
        const a = imageData.data[index + 3];

        blockImageData.data[blockIndex++] = r;
        blockImageData.data[blockIndex++] = g;
        blockImageData.data[blockIndex++] = b;
        blockImageData.data[blockIndex++] = a;
      }
    }

    return blockImageData;
  }
}

export default ImageProcessor;

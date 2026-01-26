import type { BlockData } from "..";

/** 图片处理器（专注图片加载、像素数据解析等基础操作） */
class ImageProcessor {
  /** 图像资源地址（支持URL字符串、Blob对象、URL对象） */
  private imageSource?: string | Blob | URL;
  /** 图像像素数据（存储解析后的图像像素信息） */
  private imageData?: ImageData;

  /** 更新图像资源并重新加载像素数据 */
  async update(url?: string | Blob | URL) {
    if (url && url !== this.imageSource) {
      this.imageSource = url;
      await this.loadImageData();
    }
  }

  /** 加载图像数据（处理不同类型的URL/Blob） */
  private async loadImageData() {
    const source = this.imageSource!;
    let result: ImageData;

    if (source instanceof URL) {
      result = await this.getImageDataFromUrl(source.href);
    } else if (source instanceof Blob) {
      const blobUrl = URL.createObjectURL(source);
      result = await this.getImageDataFromUrl(blobUrl);
      URL.revokeObjectURL(blobUrl);
    } else {
      result = await this.getImageDataFromUrl(source);
    }

    this.imageData = result;
  }

  /** 根据URL获取图像像素数据（ImageData） */
  private getImageDataFromUrl(url: string): Promise<ImageData> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.crossOrigin = "Anonymous";

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);
        resolve(ctx.getImageData(0, 0, img.width, img.height));
      };

      img.onerror = (err) => reject(new Error(`加载图片失败: ${url}`));
    });
  }

  /** 获取指定区块的像素数据 */
  getBlockData(x: number, y: number, blockSize: number) {
    const { imageData, isNonNegativeInteger } = this;

    const rows: BlockData = [];

    if (
      !imageData ||
      !isNonNegativeInteger(x) ||
      !isNonNegativeInteger(y) ||
      !isNonNegativeInteger(blockSize, 1)
    )
      return rows;

    /** x轴起始索引 */
    const xStart = x * blockSize;
    /** x轴结束索引 */
    const xEnd = Math.min(xStart + blockSize, imageData.width);
    /** y轴起始索引 */
    const yStart = y * blockSize;
    /** y轴结束索引 */
    const yEnd = Math.min(yStart + blockSize, imageData.height);

    for (let y = yStart; y < yEnd; y++) {
      const cols: (typeof rows)[0] = [];
      for (let x = xStart; x < xEnd; x++) {
        const index = (y * imageData.width + x) * 4;
        const r = imageData.data[index];
        const g = imageData.data[index + 1];
        const b = imageData.data[index + 2];
        const a = imageData.data[index + 3];

        cols.push([r, g, b, a]);
      }
      rows.push(cols);
    }

    return rows;
  }

  /**
   * 校验值是否为大于等于最小值的整数
   * @param v - 待校验的数值
   * @param min - 最小值（默认0）
   * @returns 校验结果（true=符合，false=不符合）
   */
  private isNonNegativeInteger(v: number, min = 0): boolean {
    return Number.isInteger(v) && v >= min;
  }
}

export default ImageProcessor;

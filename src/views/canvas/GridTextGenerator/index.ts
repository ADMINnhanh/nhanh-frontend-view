import { _File_Download } from "nhanh-pure-function";

type InitConfig = Exclude<
  ReturnType<GridTextGenerator["initCanvas"]>,
  undefined
>;

class GridTextGenerator {
  /** 画布ID */
  id?: string;
  /** 文字 */
  text = "你好";
  /** 文字偏移 */
  textOffset = { x: 0, y: 0 };
  /** 文字样式 */
  fontStyle = "280px cursive";
  /** 字体颜色阈值比率：当字体颜色像素占比低于40%时，才选择出现次数最多的颜色 */
  fontColorThresholdRatio = 0.4;
  /** 是否进行网格颜色统一化 */
  uniformization = true;
  /** 网格数量 */
  gridCount = 44;
  /** 文本占用网格计数 */
  textOccupiedGridCount = 0;

  /** 配置项 */
  config?: InitConfig;
  private initCanvas() {
    const canvas = document.getElementById(this.id!) as HTMLCanvasElement;
    const rect = canvas.parentElement!.getBoundingClientRect();

    const gridSize = Math.floor(
      Math.sqrt(Math.pow(Math.min(rect.width, rect.height), 2) / 2) /
        this.gridCount
    );
    if (gridSize < 1) return;

    const width = gridSize * this.gridCount;
    const height = gridSize * this.gridCount;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, width, height);

    return {
      canvas,
      ctx,
      gridSize,
    };
  }
  private renderGird(config: InitConfig) {
    const { ctx, gridSize } = config;
    const color = ["#F0F0F0", "#FFFFFF"];
    for (let r = 0; r < this.gridCount; r++) {
      for (let c = 0; c < this.gridCount; c++) {
        ctx.fillStyle = color[(r + c) % 2];
        ctx.fillRect(c * gridSize, r * gridSize, gridSize, gridSize);
      }
    }
  }
  private renderText(config: InitConfig) {
    const { ctx, gridSize } = config;
    ctx.font = this.fontStyle;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
    const center = gridSize * this.gridCount * 0.5;
    ctx.save();

    const { x, y } = this.textOffset;
    const offset = { x: 0, y: 0 };

    const getDiagonalOffset = (n: number) => Math.abs(n) / Math.sqrt(2);
    if (x !== 0) {
      const xOffset = getDiagonalOffset(x);
      offset.x += x > 0 ? xOffset : -xOffset;
      offset.y += x > 0 ? -xOffset : xOffset;
    }
    if (y !== 0) {
      const yOffset = getDiagonalOffset(y);
      offset.x += y > 0 ? -yOffset : yOffset;
      offset.y += y > 0 ? -yOffset : yOffset;
    }

    ctx.translate(center + offset.x, center + offset.y);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText(this.text, 0, 0);
    ctx.restore();
  }
  /** 网格颜色统一化 */
  private gridColorUniformization(config: InitConfig) {
    this.textOccupiedGridCount = 0;

    const { ctx, gridSize } = config;

    const size = gridSize * this.gridCount;

    const imageData = ctx.getImageData(0, 0, size, size);
    const newImageData = new ImageData(size, size);
    const getGirdColor = (row: number, col: number) => {
      const colors: number[] = [];

      const startRow = row * gridSize;
      const endRow = startRow + gridSize;
      const startCol = col * gridSize * 4;
      const endCol = startCol + gridSize * 4;

      for (let r = startRow; r < endRow; r++) {
        for (let c = startCol; c < endCol; c += 4) {
          const index = r * size * 4 + c;
          colors.push(
            imageData.data[index],
            imageData.data[index + 1],
            imageData.data[index + 2],
            imageData.data[index + 3]
          );
        }
      }
      return colors;
    };
    const setGirdColor = (row: number, col: number, colors: number[]) => {
      let colorIndex = 0;

      const startRow = row * gridSize;
      const endRow = startRow + gridSize;
      const startCol = col * gridSize * 4;
      const endCol = startCol + gridSize * 4;

      for (let r = startRow; r < endRow; r++) {
        for (let c = startCol; c < endCol; c += 4) {
          const index = r * size * 4 + c;

          newImageData.data[index] = colors[colorIndex++];
          newImageData.data[index + 1] = colors[colorIndex++];
          newImageData.data[index + 2] = colors[colorIndex++];
          newImageData.data[index + 3] = colors[colorIndex++];
        }
      }
    };
    const getTargetColor = (colors: number[]) => {
      const colorCount = new Map<string, number>();

      for (let index = 0; index < colors.length; index += 4) {
        const r = colors[index];
        const g = colors[index + 1];
        const b = colors[index + 2];
        const a = colors[index + 3];

        const color = `${r},${g},${b},${a}`;
        const count = colorCount.get(color) || 0;
        colorCount.set(color, count + 1);
      }

      const blackColor = `${0},${0},${0},${255}`;
      const target = {
        color: blackColor,
        count: 0,
      };

      const totalPixels = colors.length / 4;
      const blackPixelCount = colorCount.get(blackColor) || 0;
      const blackPixelRatio = blackPixelCount / totalPixels;
      if (blackPixelRatio >= this.fontColorThresholdRatio) {
        this.textOccupiedGridCount++;
      } else {
        colorCount.forEach((value, key) => {
          if (target.count < value) {
            target.color = key;
            target.count = value;
          }
        });
      }

      const [r, g, b, a] = target.color.split(",").map(Number);
      let newColors: number[] = [];
      for (let index = 0; index < colors.length / 4; index++) {
        newColors.push(r, g, b, a);
      }
      return newColors;
    };

    for (let r = 0; r < this.gridCount; r++) {
      for (let c = 0; c < this.gridCount; c++) {
        const gridColor = getGirdColor(r, c);
        const targetColor = getTargetColor(gridColor);
        setGirdColor(r, c, targetColor);
      }
    }

    ctx.putImageData(newImageData, 0, 0);
  }
  /** 生成 */
  generator() {
    if (!this.id) return;

    this.config = this.initCanvas();
    if (!this.config) return;

    this.renderGird(this.config);
    this.renderText(this.config);

    if (this.uniformization) this.gridColorUniformization(this.config);
  }
  /** 导出图片 */
  exportImage() {
    if (!this.id || !this.config) return;

    const { ctx } = this.config;

    const canvas = document.createElement("canvas");
    const width = Math.sqrt(Math.pow(ctx.canvas.width, 2) * 2);
    canvas.width = width;
    canvas.height = width;
    const _ctx = canvas.getContext("2d")!;

    const center = width * 0.5;
    _ctx.translate(center, center);
    _ctx.rotate(Math.PI / 4);
    _ctx.drawImage(ctx.canvas, -ctx.canvas.width / 2, -ctx.canvas.width / 2);

    const href = canvas.toDataURL("image/png");
    _File_Download({ href, fileName: `网格文字 ${this.text}` });
  }
}

const gridTextGenerator = new GridTextGenerator();
export default gridTextGenerator;

export const FontFamilyOptions = [
  { label: "衬线字体", value: "serif" },
  { label: "无衬线字体", value: "sans-serif" },
  { label: "等宽字体", value: "monospace" },
  { label: "手写体", value: "cursive" },
  { label: "装饰字体", value: "fantasy" },
  { label: "系统UI字体", value: "system-ui" },
  { label: "UI衬线字体", value: "ui-serif" },
  { label: "UI无衬线字体", value: "ui-sans-serif" },
  { label: "UI等宽字体", value: "ui-monospace" },
  { label: "UI圆角字体", value: "ui-rounded" },
  { label: "数学字体", value: "math" },
  { label: "仿宋字体", value: "fangsong" },
];

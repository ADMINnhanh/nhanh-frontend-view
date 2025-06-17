import Decimal from "decimal.js";
import type Canvas from "..";

/**
 * 格式化数字，给数字加上千位分隔符。
 * @param {number} number - 要格式化的数字。
 * @returns {string} - 格式化后的字符串。
 */
function _FormatNumber(number: number): string {
  // 将数字转换为字符串
  const numStr = number.toString();
  // 按小数点分割字符串
  const parts = numStr.split(".");
  // 处理整数部分
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (parts.length > 1) {
    // 如果有小数部分，拼接整数部分和小数部分
    return integerPart + "." + parts[1];
  }
  // 如果没有小数部分，直接返回处理后的整数部分
  return integerPart;
}

export default class Axis {
  /** 画布 */
  private canvas: Canvas;

  private axis_canvas = document.createElement("canvas");
  private ctx = this.axis_canvas.getContext("2d")!;
  private isReload = false;

  /** 网格开关 */
  show = {
    all: true,
    grid: {
      main: true,
      secondary: true,
    },
    axis: true,
    axisText: true,
  };

  constructor(canvas: Canvas) {
    this.canvas = canvas;
    this.initAxisCanvas();
  }

  private initAxisCanvas() {
    const { canvas, axis_canvas } = this;
    if (canvas) {
      axis_canvas.width = canvas.rect.width || 0;
      axis_canvas.height = canvas.rect.height || 0;
    }
  }

  /** 开关坐标轴 */
  toggleAxis(show?: boolean | DeepPartial<Axis["show"]>) {
    // 统一处理配置
    const newState = (() => {
      // 对象配置：未传的属性用默认值 true
      if (typeof show === "object") {
        const {
          all = true,
          grid = { main: true, secondary: true },
          axis = true,
          axisText = true,
        } = show;
        Object.assign({ main: true, secondary: true }, grid);
        return { all, grid, axis, axisText };
      }
      // 布尔配置：全部属性同步开关
      if (typeof show === "boolean") {
        return {
          all: true,
          grid: { main: show, secondary: show },
          axis: show,
          axisText: show,
        };
      }
      // 无参数：根据当前状态取反
      return !this.show.all;
    })();

    if (typeof newState === "boolean") this.show.all = newState;
    else this.show = newState as Axis["show"];

    this.isReload = true;
  }

  drawAxisAndGrid() {
    if (!this.canvas || !this.show.all) return;

    if (
      this.canvas.isRecalculate ||
      this.isReload ||
      this.canvas.isThemeUpdated
    ) {
      this.isReload = false;
      this.initAxisCanvas();
      if (this.show.grid.main || this.show.grid.secondary) this.drawGrid();
      if (this.show.axis) this.drawAxis();
      if (this.show.axisText) this.drawAxisText();
    }

    return this.axis_canvas;
  }

  private color() {
    const { theme, style } = this.canvas;
    return (style[theme] || style.light).grid;
  }

  /** 绘制网格 */
  private drawGrid() {
    const { canvas, ctx } = this;
    const { rect, center, axisConfig } = canvas;

    const { width, height } = rect;
    const color = this.color();

    const grid_size = axisConfig.size;
    const inner_grid_size = grid_size / 5;

    ctx.lineWidth = 1;

    const drawX = (grid_size: number, color: string) => {
      /** 起始位置 */
      const startX =
        center.x % grid_size > 0
          ? center.x % grid_size
          : grid_size + (center.x % grid_size);

      ctx.strokeStyle = color;
      ctx.beginPath();

      for (let index = 0; index * grid_size + startX <= width; index++) {
        ctx.moveTo(index * grid_size + startX, 0);
        ctx.lineTo(index * grid_size + startX, height);
      }

      ctx.stroke();
    };
    const drawY = (grid_size: number, color: string) => {
      /** 起始位置 */
      const startY =
        center.y % grid_size > 0
          ? center.y % grid_size
          : grid_size + (center.y % grid_size);

      ctx.strokeStyle = color;
      ctx.beginPath();

      for (let index = 0; index * grid_size + startY <= height; index++) {
        ctx.moveTo(0, index * grid_size + startY);
        ctx.lineTo(width, index * grid_size + startY);
      }

      ctx.stroke();
    };

    if (this.show.grid.secondary) {
      /** 内网格x */
      drawX(inner_grid_size, color.innerGrid);
      /** 内网格y */
      drawY(inner_grid_size, color.innerGrid);
    }
    if (this.show.grid.main) {
      /** 外网格x */
      drawX(grid_size, color.grid);
      /** 外网格y */
      drawY(grid_size, color.grid);
    }
  }

  /** 坐标轴 */
  private drawAxis() {
    const { canvas, ctx } = this;
    const { rect, center } = canvas;

    const { width, height } = rect;

    const color = this.color();

    ctx.lineWidth = 2;
    ctx.strokeStyle = color.axis;

    const drawX = () => {
      if (center.y >= 0 && center.y <= height) {
        ctx.beginPath();
        ctx.moveTo(0, center.y);
        ctx.lineTo(width, center.y);
        ctx.stroke();
      }
    };
    const drawY = () => {
      if (center.x >= 0 && center.x <= width) {
        ctx.beginPath();
        ctx.moveTo(center.x, 0);
        ctx.lineTo(center.x, height);
        ctx.stroke();
      }
    };

    drawX();
    drawY();
  }

  /**
   * 在画布上绘制文本
   *
   * 此函数根据给定的文本、位置和选项参数，在画布上绘制文本它首先配置文本的字体和颜色，
   * 然后根据是否需要次要颜色和当前主题来绘制文本的描边和填充
   *
   * @param text 要绘制的文本内容
   * @param x 文本绘制的横坐标
   * @param y 文本绘制的纵坐标
   * @param secondary 是否为次要颜色
   */
  private drawText(text?: string, x?: number, y?: number, secondary?: boolean) {
    // 获取画布的上下文对象，用于绘制
    const { canvas, ctx } = this;
    const { theme } = canvas;

    // 根据当前主题获取样式配置
    const style = this.canvas.style[theme].text;

    // 设置画布的字体样式，包括是否加粗、字体大小和字体家族
    ctx.font = `${style.bold ? "bold" : ""} ${style.size}px ${style.family}`;

    // 设置文本的描边颜色为背景色，并绘制文本的描边
    ctx.strokeStyle = style.stroke;
    ![text, x, y].includes(undefined) && ctx.strokeText(text!, x!, y!);

    // 根据是否是次要颜色，选择相应的文本填充颜色，并填充文本
    ctx.fillStyle = style[secondary ? "secondary" : "color"];
    ![text, x, y].includes(undefined) && ctx.fillText(text!, x!, y!);
  }

  /** 坐标轴 - 文字 */
  private drawAxisText() {
    const { canvas, ctx } = this;
    const { rect, center, axisConfig, style, theme } = canvas;

    const { width, height } = rect;

    /** 初始化文字样式，便于 ctx.measureText 计算 */
    this.drawText();

    /** 文字宽 */
    const textWidth = (text: string) => Math.ceil(ctx.measureText(text).width);

    const textOffset = 4;
    const textSize = style[theme].text.size;

    /** 0 */ {
      const w = textWidth("0");
      /** x 轴方向溢出？ */
      const isXAxisOverflowing =
        center.x < textOffset || center.x > width + w + textOffset;
      /** y 轴方向溢出？ */
      const isYAxisOverflowing =
        center.y < -(textOffset + textSize) ||
        center.y > height + textSize + textOffset;

      if (!isXAxisOverflowing && !isYAxisOverflowing) {
        this.drawText(
          "0",
          center.x - w - textOffset,
          center.y + textSize + textOffset
        );
      }
    }

    const count = canvas.getNowGridCount;

    const grid_size = axisConfig.size;

    /** x 轴的文字 */ {
      let y = center.y + textSize + textOffset;
      y = Math.max(Math.min(y, height - textOffset), textOffset + textSize);

      const isSecondary = center.y > height || center.y < 0;

      /** 起始位置 */
      let x =
        center.x > 0
          ? center.x % grid_size
          : center.x < 0
          ? grid_size + (center.x % grid_size)
          : 0;

      /** 起始值 */
      let v = canvas.getAxisValueByPoint((x - center.x) * axisConfig.x, 0).xV;

      while (x <= width) {
        const vString = _FormatNumber(v);
        const textW = textWidth(vString);
        v !== 0 && this.drawText(vString, x - textW / 2, y, isSecondary);
        x += grid_size;
        v = new Decimal(count).mul(axisConfig.x).add(v).toNumber();
      }
    }

    /** y 轴的文字 */ {
      const isSecondary = center.x > width || center.x < 0;

      /** 起始位置 */
      let y =
        center.y > 0
          ? center.y % grid_size
          : center.y < 0
          ? grid_size + (center.y % grid_size)
          : 0;

      /** 起始值 */
      let v = canvas.getAxisValueByPoint(0, (y - center.y) * axisConfig.y).yV;

      while (y <= height) {
        const vString = _FormatNumber(v);
        const textW = textWidth(vString);
        let x = center.x - textW - textOffset;
        x = Math.max(Math.min(x, width - textW - textOffset), textOffset);

        v != 0 && this.drawText(vString, x, y + textSize / 2, isSecondary);
        y += grid_size;
        v = new Decimal(count).mul(axisConfig.y).add(v).toNumber();
      }
    }
  }
}

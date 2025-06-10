import { _Clone, _MergeObjects } from "nhanh-pure-function";
import BaseData from "./basedata";

type ConstructorOption = ConstructorParameters<typeof BaseData>[0] & {
  theme?: KnownStyleKeys;
};

/** 样式管理器 */
export default class Style extends BaseData {
  /** 主题 */
  theme: KnownStyleKeys = "light";
  /** 主题是否更新 */
  isThemeUpdated = false;
  style: StyleType = {
    light: {
      background: "#fff",
      text: {
        color: "#222",
        secondary: "#909399",
        stroke: "#fff",
        size: 12,
        family: "monospace",
        bold: true,
      },
      grid: {
        axis: "#222",
        grid: "#666",
        innerGrid: "#e5e5e5",
      },
      point: {
        radius: 5,
        fill: "#d03050",
        width: 14,
        stroke: "#d03050" + 80,
      },
      line: {
        color: "#f0a020",
        color_hover: "#f2c97d",
        width: 4,
        dash: true,
        dashGap: [5, 10],
        dashOffset: 0,
        cap: "round",
        join: "round",
        point: {
          radius: 5,
          stroke: "#f0a020" + 80,
          width: 14,
          fill: "#f0a020",
        },
      },
      polygon: {
        fill: "#18a058" + 30,
        fill_hover: "#036933" + 60,
        stroke: {
          color: "#18a058",
          color_hover: "#036933",
          width: 1,
          dash: false,
          dashGap: [5, 10],
          dashOffset: 0,
          cap: "round",
          join: "round",
        },
        point: {
          radius: 5,
          stroke: "#036933" + 80,
          width: 14,
          fill: "#036933",
        },
      },
    },
    dark: {
      background: "#000",
      text: {
        color: "#aeaeae",
        secondary: "#8c8c8c",
        stroke: "#000",
        size: 12,
        family: "monospace",
        bold: true,
      },
      grid: {
        axis: "#aeaeae",
        grid: "#666",
        innerGrid: "#454545",
      },
      point: {
        radius: 5,
        fill: "#e88080",
        width: 14,
        stroke: "#e88080" + "70",
      },
      line: {
        color: "#f2c97d",
        color_hover: "#f0a020",
        width: 4,
        dash: false,
        dashGap: [5, 10],
        dashOffset: 0,
        cap: "round",
        join: "round",
        point: {
          radius: 5,
          stroke: "#f2c97d" + "80",
          width: 14,
          fill: "#f2c97d",
        },
      },
      polygon: {
        fill: "#63e2b7" + 30,
        fill_hover: "#7efbd1" + 60,
        stroke: {
          color: "#63e2b7",
          color_hover: "#63e2b7",
          width: 1,
          dash: false,
          dashGap: [5, 10],
          dashOffset: 0,
          cap: "round",
          join: "round",
        },
        point: {
          radius: 5,
          stroke: "#7efbd1" + 80,
          width: 14,
          fill: "#7efbd1",
        },
      },
    },
  };

  constructor(option: ConstructorOption) {
    super(option);

    const { theme } = option;
    theme && this.setTheme(theme);

    this.initStyle();
    this.clearScreen();
  }

  /** 初始化样式 */
  initStyle() {
    const { canvas, ctx, theme } = this;
    canvas.classList.add("_nhanh_canvas");

    const style = this.style[theme];
    ctx.font = `${style.text.bold ? "bold" : ""} ${style.text.size}px ${
      style.text.family
    }`;
  }
  /** 清除画布 */
  clearScreen(fillBackground = true) {
    const { ctx, theme, rect } = this;
    const { width, height } = rect!.value;

    ctx.clearRect(0, 0, width, height);

    if (fillBackground) {
      const background = this.style[theme].background;
      if (background) {
        ctx.fillStyle = this.style[theme].background;
        ctx.fillRect(0, 0, width, height);
      }
    }
  }
  /** 设置样式 */
  setStyle(style: DeepPartial<StyleType>) {
    for (const key in style) {
      if (Object.prototype.hasOwnProperty.call(style, key)) {
        const oldStyle = _Clone(this.style[key] || this.style[this.theme]);
        _MergeObjects(oldStyle, style[key]);
        this.style[key] = oldStyle as StyleItemType;
      }
    }
    this.initStyle();
  }

  /** 设置主题 */
  setTheme(theme: KnownStyleKeys) {
    if (theme in this.style) {
      this.theme = theme;
      this.isThemeUpdated = true;
    }
  }
}

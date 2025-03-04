/** 样式管理器 */
class Style {
  theme: KnownStyleKeys = "light";
  style: GridStyleType = {
    light: {
      axis: "#222",
      grid: "#666",
      innerGrid: "#e5e5e5",
    },
    dark: {
      axis: "#aeaeae",
      grid: "#666",
      innerGrid: "#272727",
    },
  };

  /** 添加样式 */
  addStyle(style: GridStyleType) {
    this.style = { ...this.style, ...style };
  }
}

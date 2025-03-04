/** 默认中心点 */
type DefaultCenter = Partial<{
  top: number | `${number}%` | "top" | "middle" | "bottom";
  bottom: number | `${number}%`;
  left: number | `${number}%` | "left" | "center" | "right";
  right: number | `${number}%`;
}>;

type KnownStyleKeys = "light" | "dark";

type StyleItemType = {
  background: string;
  text: {
    color: string;
    secondary: string;
    size: number;
    family: string;
    bold: boolean;
  };
};
/** 主题样式 */
type StyleType = Record<KnownStyleKeys, StyleItemType> &
  Record<string, StyleItemType>;

type GridItemType = {
  axis: string;
  grid: string;
  innerGrid: string;
};
/** 网格样式 */
type GridStyleType = Record<KnownStyleKeys, GridItemType> &
  Record<string, GridItemType>;

type PointItemType = {
  /** 半径 */
  radius: number;
  /** 边框颜色 */
  stroke: string;
  /** 边框大小 */
  width: number;
  /** 填充颜色 */
  fill: string;
};
/** 点位样式 */
type PointStyleType = Record<KnownStyleKeys, PointItemType> &
  Record<string, PointItemType>;

type PointListType = {
  style?: PointStyleType;
  location?: [number, number];
  value?: [number, number];
  zIndex?: number;
  show?: boolean;
}[];

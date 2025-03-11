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

type PluralSwitch<T, P extends boolean> = P extends true ? T[] : T;
/** 公共数据属性 */
type CommonDataType<STYLE, PLURAL extends boolean, OTHER = {}> = Array<
  Partial<
    {
      /** 样式 */
      style: STYLE;
      /** 层级 */
      zIndex: number;
      /** 是否显示 */
      show: boolean;
      /** 未缩放状态下的位置 */
      location: PluralSwitch<[number, number], PLURAL>;
      /** 动态位置 */
      dynamicLocation: PluralSwitch<[number, number], PLURAL>;
      /** 值 */
      value: PluralSwitch<[number, number], PLURAL>;
    } & OTHER
  >
>;

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
/** 点位列表 */
type PointListType = CommonDataType<PointItemType, false>;

type LineItemType = {
  /** 颜色 */
  color: string;
  /** 宽度 */
  width: number;
  /** 虚线 */
  dash: boolean;
  /** 虚线间隔 */
  dashGap: number[];
  /** 偏移虚线 */
  dashOffset: number;
  /** 末端的形状 */
  cap: "butt" | "round" | "square";
  /** 路径中的相连部分的形状 */
  join: "bevel" | "round" | "miter";
  /** 点位样式 */
  point: PointItemType;
};
/** 线样式 */
type LineStyleType = Record<KnownStyleKeys, LineItemType> &
  Record<string, LineItemType>;
/** 线列表 */
type LineListType = CommonDataType<
  LineItemType,
  true,
  {
    /** 无限线 */
    infinite: boolean;
  }
>;

/** zIndex -> xAxis -> yAxis -> PointListType */
type PointMap = Map<number, Map<number, Map<number, PointListType>>>;

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
type StyleType = Record<KnownStyleKeys, StyleItemType> &
  Record<string, StyleItemType>;

type GridItemType = {
  axis: string;
  grid: string;
  innerGrid: string;
};
type GridStyleType = Record<KnownStyleKeys, GridItemType> &
  Record<string, GridItemType>;

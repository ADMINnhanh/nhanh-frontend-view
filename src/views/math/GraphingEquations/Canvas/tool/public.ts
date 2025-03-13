import type Canvas from "..";

/** 参数是否合法 */
export function IsValid(arr: any) {
  return (
    Array.isArray(arr) &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number" &&
    isFinite(arr[0]) &&
    isFinite(arr[1])
  );
}

/** 参数是否合法 */
export function IsValids(arr: any) {
  return Array.isArray(arr) && arr.every(IsValid);
}

/** 计算点位位置 */
export function CalculatePointPosition(
  locationList: [number, number][],
  config: {
    center: Canvas["center"];
    percentage: number;
    axisConfig: Canvas["axisConfig"];
  }
) {
  const { center, percentage, axisConfig } = config;

  const dynamicLocation: [number, number][] = [];
  for (let i = 0; i < locationList.length; i++) {
    let [x, y] = locationList[i];
    x = center.x + x * percentage * axisConfig.x;
    y = center.y + y * percentage * axisConfig.y;
    dynamicLocation.push([x, y]);
  }
  return dynamicLocation;
}

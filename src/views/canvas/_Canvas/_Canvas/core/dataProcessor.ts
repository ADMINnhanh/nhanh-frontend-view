/** 数据处理 */
export default class DataProcessor {
  /** 提取固定值 */
  private static readonly HALF_PI = Math.PI / 2;
  private static readonly PI_OVER_180 = Math.PI / 180;
  private static readonly EARTH_RADIUS = 6378137;
  private static readonly MAX_LAT = 85.05112878;

  /** 保留精度 */
  static preservePrecision(value: string | number, accuracy: number) {
    value = Number(value);
    if (value) {
      if (Number.isInteger(value)) return value;
      return Number(value.toFixed(accuracy));
    }
    return 0;
  }

  /**
   * 将纬度转换为平面坐标
   * @param lng 经度
   * @param lat 纬度
   * @returns 平面坐标 [x, y]（米）
   */
  static LngLatToPlane(lng: number, lat: number): [number, number] {
    // 限制经度范围在 -180 到 180 度之间
    const clampedLng = Math.max(Math.min(lng, 180), -180);
    // 限制纬度范围在有效范围内
    const clampedLat = Math.max(Math.min(lat, this.MAX_LAT), -this.MAX_LAT);

    // 转换公式  返回转换后的平面坐标（米）
    const x = clampedLng * this.PI_OVER_180 * this.EARTH_RADIUS;
    // 转换公式  返回转换后的平面坐标（米）
    const y =
      Math.log(Math.tan((90 + clampedLat) * this.PI_OVER_180)) *
      this.EARTH_RADIUS;
    return [x, y];
  }

  /**
   * 将平面坐标转换为经纬度
   * @param x 平面坐标 X 值（米）
   * @param y 平面坐标 Y 值（米）
   * @returns 经纬度 [lng, lat]（度）
   */
  static PlaneToLngLat(x: number, y: number): [number, number] {
    // 计算经度
    const lng = x / this.EARTH_RADIUS / this.PI_OVER_180;

    // 计算纬度
    const lat =
      (2 * Math.atan(Math.exp(y / this.EARTH_RADIUS)) - this.HALF_PI) /
      this.PI_OVER_180;

    return [lng, lat];
  }

  /** 参数是否合法 */
  static IsValid(arr: any) {
    return (
      Array.isArray(arr) &&
      typeof arr[0] === "number" &&
      typeof arr[1] === "number" &&
      isFinite(arr[0]) &&
      isFinite(arr[1])
    );
  }

  /** 参数是否合法 */
  static IsValids(arr: any) {
    return Array.isArray(arr) && arr.every((v) => this.IsValid(v));
  }
}

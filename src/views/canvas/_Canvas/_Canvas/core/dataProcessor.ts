/** 数据处理 */
export default class DataProcessor {
  /** 提取固定值 */
  private static readonly HALF_PI = Math.PI / 2;
  private static readonly PI_OVER_180 = Math.PI / 180;
  private static readonly EARTH_RADIUS = 6378137;
  private static readonly MAX_LAT = 85.05112878;

  /**
   * 将经纬度转换为平面坐标
   * @param lng 经度
   * @param lat 纬度
   * @returns 平面坐标 [x, y]（米）
   */
  static LngLatToPlane(lng: number, lat: number): [number, number] {
    const clampedLng = Math.max(Math.min(lng, 180), -180);
    const clampedLat = Math.max(Math.min(lat, this.MAX_LAT), -this.MAX_LAT);

    const x = clampedLng * this.PI_OVER_180 * this.EARTH_RADIUS;
    const phi = clampedLat * this.PI_OVER_180;
    const y = Math.log(Math.tan(Math.PI / 4 + phi / 2)) * this.EARTH_RADIUS;
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

  /**
   * 计算点到线段的距离
   * @param point 点击位置
   * @param lineStart 线段起点
   * @param lineEnd 线段终点
   * @returns 点到线段的距离
   */
  static PointToLineDistance(
    point: [number, number],
    lineStart: [number, number],
    lineEnd: [number, number]
  ): number {
    const [x0, y0] = point;
    const [x1, y1] = lineStart;
    const [x2, y2] = lineEnd;

    const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    if (l2 === 0) return Math.sqrt((x0 - x1) ** 2 + (y0 - y1) ** 2);

    let t = ((x0 - x1) * (x2 - x1) + (y0 - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));

    return Math.sqrt(
      (x0 - (x1 + t * (x2 - x1))) ** 2 + (y0 - (y1 + t * (y2 - y1))) ** 2
    );
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

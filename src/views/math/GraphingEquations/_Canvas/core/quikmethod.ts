import { _Schedule } from "nhanh-pure-function";
import type Axis from "../OverlayGroup/axis";
import Event from "./event";

/** 快速方法 */
export default class QuickMethod extends Event {
  /** 重置画布 */
  reset() {
    if (this.lockDragAndResize) return;

    this.isAuto = true;
    const time = 300;
    const waitResetData = {
      offset: { ...this.offset },
      scale: this.scale - 1,
    };

    _Schedule((schedule) => {
      if (!this.isAuto || !this.canvas || this.lockDragAndResize) return;

      if (schedule === 1) {
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        this.updateSize();
        this.isAuto = false;
      } else if (schedule > 0) {
        schedule = 1 - schedule;
        this.offset = {
          x: waitResetData.offset.x * schedule,
          y: waitResetData.offset.y * schedule,
        };
        this.scale = 1 + waitResetData.scale * schedule;
        this.updateSize();
      }
      this.redrawOnce(true);
    }, time);
  }
  /** 缩放画布 */
  zoom(delta: number) {
    const { canvas, rect } = this;
    if (!canvas || !rect)
      return console.error("canvas is not HTMLCanvasElement");

    this.setScale("center", delta);
    this.redrawOnce();
  }
  /** 放大 */
  zoomIn() {
    this.zoom(this.delta);
  }
  /** 缩小 */
  zoomOut() {
    this.zoom(-this.delta);
  }

  /** 添加样式 */
  setStyle(style: DeepPartial<StyleType>) {
    super.setStyle(style);
    this.redrawOnce();
  }
  /** 设置主题 */
  setTheme(theme: KnownStyleKeys) {
    super.setTheme(theme);
    this.redrawOnce();
  }
  /** 设置坐标轴 */
  setAxis(config: Partial<QuickMethod["axisConfig"]>) {
    super.setAxis(config);
    this.redrawOnce();
  }
  /** 设置默认中心 */
  setDefaultCenter(center: QuickMethod["defaultCenter"]) {
    super.setDefaultCenter(center);
    this.redrawOnce();
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
      return !this.drawAxis.show.all;
    })();

    if (typeof newState === "boolean") this.drawAxis.show.all = newState;
    else this.drawAxis.show = newState as Axis["show"];

    this.redrawOnce();
  }
  /** 开关点位 */
  togglePoint(show?: boolean) {
    this.drawPoint.show = show ?? !this.drawPoint.show;
    this.redrawOnce();
    return this.drawPoint.show;
  }
  /** 开关线段 */
  toggleLine(show?: boolean) {
    this.drawLine.show = show ?? !this.drawLine.show;
    this.redrawOnce();
    return this.drawLine.show;
  }
  /** 开关多边形 */
  togglePolygon(show?: boolean) {
    this.drawPolygon.show = show ?? !this.drawPolygon.show;
    this.redrawOnce();
    return this.drawPolygon.show;
  }
  /** 切换锁定状态 */
  toggleLock(lock?: boolean) {
    this.lockDragAndResize = lock ?? !this.lockDragAndResize;
    return this.lockDragAndResize;
  }

  /**
   * 将纬度转换为平面坐标
   * @param lng 经度
   * @param lat 纬度
   * @returns 平面坐标 [x, y]（米）
   */
  LngLatToPlane(lng: number, lat: number): [number, number] {
    // 定义地球半径（米）
    const R = 6378137;
    // 定义Web Mercator有效纬度范围（±85°）
    const maxLat = 85.05112878;

    // 限制经度范围在-180到180度之间
    const clampedLng = Math.max(Math.min(lng, 180), -180);
    // 限制纬度范围在有效范围内
    const clampedLat = Math.max(Math.min(lat, maxLat), -maxLat);

    // 转换公式  返回转换后的平面坐标（米）
    const x = clampedLng * (Math.PI / 180) * R;
    // 转换公式  返回转换后的平面坐标（米）
    const y = Math.log(Math.tan(((90 + clampedLat) * Math.PI) / 360)) * R;
    return [x, y];
  }

  /**
   * 将平面坐标转换为经纬度
   * @param x 平面坐标 X 值（米）
   * @param y 平面坐标 Y 值（米）
   * @returns 经纬度 [lng, lat]（度）
   */
  PlaneToLngLat(x: number, y: number): [number, number] {
    // 定义地球半径（米）
    const R = 6378137;

    // 计算经度
    const lng = (x / R) * (180 / Math.PI);

    // 计算纬度
    const lat =
      (2 * Math.atan(Math.exp(y / R)) - Math.PI / 2) * (180 / Math.PI);

    return [lng, lat];
  }

  /** 参数是否合法 */
  IsValid(arr: any) {
    return (
      Array.isArray(arr) &&
      typeof arr[0] === "number" &&
      typeof arr[1] === "number" &&
      isFinite(arr[0]) &&
      isFinite(arr[1])
    );
  }

  /** 参数是否合法 */
  IsValids(arr: any) {
    return Array.isArray(arr) && arr.every((v) => this.IsValid(v));
  }
}

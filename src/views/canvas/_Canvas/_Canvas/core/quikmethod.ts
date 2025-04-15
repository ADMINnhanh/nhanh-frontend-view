import { _Schedule } from "nhanh-pure-function";
import Axis from "./axis";
import Event from "./event";

/** 快速方法 */
export default class QuickMethod extends Event {
  /** 获取默认覆盖物群组 */
  getDefaultOverlayGroup() {
    const layerGroup = this.layerGroups.get("默认图层群组");
    if (!layerGroup) return;
    const overlays_point = layerGroup
      .getLayer("点位图层")
      ?.getGroup("点位覆盖物群组");
    const overlays_line = layerGroup
      .getLayer("线段图层")
      ?.getGroup("线段覆盖物群组");
    const overlays_polygon = layerGroup
      .getLayer("多边形图层")
      ?.getGroup("多边形覆盖物群组");
    const overlays_text = layerGroup
      .getLayer("文字图层")
      ?.getGroup("文字覆盖物群组");
    const overlays_custom = layerGroup
      .getLayer("自定义绘制图层")
      ?.getGroup("自定义绘制覆盖物群组");
    return {
      overlays_text,
      overlays_point,
      overlays_line,
      overlays_polygon,
      overlays_custom,
    };
  }

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
    const { overlays_point } = this.getDefaultOverlayGroup() || {};

    if (overlays_point) {
      overlays_point.show.setShow(show ?? !overlays_point.show);
      this.redrawOnce();
      return overlays_point.show;
    }
    return false;
  }
  /** 开关线段 */
  toggleLine(show?: boolean) {
    const { overlays_line } = this.getDefaultOverlayGroup() || {};
    if (overlays_line) {
      overlays_line.show.setShow(show ?? !overlays_line.show);
      this.redrawOnce();
      return overlays_line.show;
    }
    return false;
  }
  /** 开关多边形 */
  togglePolygon(show?: boolean) {
    const { overlays_polygon } = this.getDefaultOverlayGroup() || {};
    if (overlays_polygon) {
      overlays_polygon.show.setShow(show ?? !overlays_polygon.show);
      this.redrawOnce();
      return overlays_polygon.show;
    }
    return false;
  }
  /** 切换锁定状态 */
  toggleLock(lock?: boolean) {
    this.lockDragAndResize = lock ?? !this.lockDragAndResize;
    return this.lockDragAndResize;
  }
}

import { _Schedule } from "nhanh-pure-function";
import type Axis from "../tool/axis";
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
  setDefaultCenter(center: Partial<QuickMethod["defaultCenter"]>) {
    super.setDefaultCenter(center);
    this.redrawOnce();
  }

  /** 开关坐标轴 */
  toggleAxis(show?: boolean | Partial<Axis["show"]>) {
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
      show = !(
        this.drawAxis.show.all ||
        this.drawAxis.show.axis ||
        this.drawAxis.show.axisText ||
        this.drawAxis.show.grid.main ||
        this.drawAxis.show.grid.secondary
      );
      return {
        all: show,
        grid: { main: show, secondary: show },
        axis: show,
        axisText: show,
      };
    })();

    this.drawAxis.show = newState;
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
}

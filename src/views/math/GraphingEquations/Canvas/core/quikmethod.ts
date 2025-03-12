import { _Schedule } from "nhanh-pure-function";
import type Grid from "../tool/grid";
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
  /** 开关网格 */
  toggleGrid(show?: boolean | Partial<Grid["show"]>) {
    // 统一处理配置
    const newState = (() => {
      // 对象配置：未传的属性用默认值 true
      if (typeof show === "object") {
        const {
          grid = { main: true, secondary: true },
          axis = true,
          axisText = true,
        } = show;
        return { grid, axis, axisText };
      }
      // 布尔配置：全部属性同步开关
      if (typeof show === "boolean") {
        return {
          grid: { main: show, secondary: show },
          axis: show,
          axisText: show,
        };
      }
      // 无参数：根据当前状态取反
      show = !(
        this.drawGrid.show.axis ||
        this.drawGrid.show.axisText ||
        this.drawGrid.show.grid.main ||
        this.drawGrid.show.grid.secondary
      );
      return {
        grid: { main: show, secondary: show },
        axis: show,
        axisText: show,
      };
    })();

    this.drawGrid.show = newState;
    this.redrawOnce();
  }
  /** 切换锁定状态 */
  toggleLock(lock?: boolean) {
    this.lockDragAndResize =
      typeof lock == "bigint" ? lock : !this.lockDragAndResize;
    this.redrawOnce();
    return this.lockDragAndResize;
  }
}

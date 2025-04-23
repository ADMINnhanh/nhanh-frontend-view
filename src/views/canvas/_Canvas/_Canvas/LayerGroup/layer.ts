import _Canvas from "..";
import OverlayGroup, { type Overlay } from "../OverlayGroup";
import Show from "../OverlayGroup/public/show";

export default class Layer {
  name: string;
  show = new Show();
  opacity = 1;
  zIndex = 4;

  protected canvas = document.createElement("canvas");
  protected ctx = this.canvas.getContext("2d")!;
  private isReload = false;

  groups = new Map<string, OverlayGroup>();

  // 定义构造函数，接收一个包含配置信息的对象
  constructor(name: string) {
    this.name = name;
  }

  /** 主画布 */
  private mainCanvas?: _Canvas;
  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    this.canvas.width = mainCanvas?.rect?.value.width || 0;
    this.canvas.height = mainCanvas?.rect?.value.height || 0;
    this.groups.forEach((group) => group.setMainCanvas(mainCanvas));
  }

  /** 通知重新加载 */
  private notifyReload?: (needForceExecute?: boolean) => void;
  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute) => {
          if (needForceExecute) {
            notifyReload();
          } else if (
            this.show.shouldRender(this.mainCanvas?.scale) &&
            this.groups.size
          ) {
            notifyReload();
          }
        }
      : undefined;

    this.groups.forEach((group) => this.setGroupNotifyReload(group));
    this.show.notifyReload = this.notifyReload;
  }
  setGroupNotifyReload(group: OverlayGroup) {
    group.setNotifyReload(
      this.notifyReload
        ? () => {
            this.notifyReload?.();
            this.isReload = true;
          }
        : undefined
    );
  }
  /** 获取覆盖物组 */
  getGroup(name: string) {
    return this.groups.get(name);
  }
  /** 添加覆盖物组 */
  addGroup(groups: OverlayGroup | OverlayGroup[]) {
    [groups].flat().forEach((group) => {
      if (group instanceof OverlayGroup) {
        this.setGroupNotifyReload(group);
        group.setMainCanvas(this.mainCanvas);
        this.groups.set(group.name, group);
      }
    });
  }
  /** 移除覆盖物组 */
  removeGroup(groups: OverlayGroup | OverlayGroup[]) {
    let isReload = false;
    [groups].flat().forEach((group) => {
      if (group instanceof OverlayGroup) {
        this.groups.delete(group.name);
        group.setNotifyReload();
        group.setMainCanvas();
        isReload = true;
      }
    });
    isReload && this.notifyReload?.();
  }
  /** 清空覆盖物 */
  clearGroup() {
    if (this.groups.size) {
      this.groups.forEach((group) => {
        group.setNotifyReload();
        group.setMainCanvas();
      });
      this.groups.clear();
      this.notifyReload?.();
    }
  }

  /** 设置图层的 zIndex 值 */
  setzIndex(zIndex: number) {
    if (zIndex != this.zIndex) {
      this.zIndex = zIndex;
      this.notifyReload?.(false);
    }
  }
  /** 设置图层的透明度 */
  setOpacity(opacity: number) {
    if (this.opacity != opacity) {
      if (opacity >= 0 && opacity <= 1) {
        this.opacity = opacity;
        this.notifyReload?.(false);
      } else {
        console.warn("Opacity value should be between 0 and 1.");
      }
    }
  }

  /** 本次绘制的覆盖物 */
  private currentDrawOverlays: [[number, number], Overlay][] = [];
  /** 获取画布 */
  getCanvas():
    | [number, HTMLCanvasElement, [[number, number], Overlay][]]
    | undefined {
    if (!this.mainCanvas) return;

    const { scale, rect, isRecalculate, isThemeUpdated } = this.mainCanvas!;
    const isShow = this.show.shouldRender(scale);
    const size = this.groups.size;

    if (isShow && size) {
      if (this.isReload || isRecalculate || isThemeUpdated) {
        this.currentDrawOverlays = [];
        this.isReload = false;

        this.canvas.width = rect?.value.width || 0;
        this.canvas.height = rect?.value.height || 0;

        const groupArr: [
          number,
          [(ctx: CanvasRenderingContext2D) => void, Overlay]
        ][] = [];
        this.groups.forEach((group) => {
          if (group.equalsMainCanvas(this.mainCanvas))
            groupArr.push(...group.getOverlaysDrawingMethod());
          else this.groups.delete(group.name);
        });

        groupArr.sort((a, b) => a[0] - b[0]);

        groupArr.forEach(([zIndex, [draw, overlay]]) => {
          draw.call(overlay, this.ctx);
          this.currentDrawOverlays.push([
            [Number(this.zIndex) || 0, zIndex],
            overlay,
          ]);
        });
      }

      return [Number(this.zIndex) || 0, this.canvas, this.currentDrawOverlays];
    }
  }
}

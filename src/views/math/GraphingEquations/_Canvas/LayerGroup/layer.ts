import _Canvas from "..";
import OverlayGroup from "../OverlayGroup";
import Show from "../public/show";

export default class Layer {
  name: string;
  show = new Show();
  private opacity = 1;
  private zIndex = 4;

  protected canvas = document.createElement("canvas");
  protected ctx = this.canvas.getContext("2d")!;
  private isReload = false;

  private groups = new Map<string, OverlayGroup>();

  // 定义构造函数，接收一个包含配置信息的对象
  constructor(name: string) {
    this.name = name;
  }

  /** 主画布 */
  private mainCanvas?: _Canvas;
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
    this.canvas.width = mainCanvas?.rect.width || 0;
    this.canvas.height = mainCanvas?.rect.height || 0;
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

    this.groups.forEach((group) =>
      group.setNotifyReload(
        notifyReload
          ? () => {
              this.notifyReload?.();
              this.isReload = true;
            }
          : undefined
      )
    );
    this.show.notifyReload = this.notifyReload;
  }

  /** 获取覆盖物组 */
  getGroup(name: string) {
    return this.groups.get(name);
  }
  /** 添加覆盖物组 */
  addGroup(groups: OverlayGroup | OverlayGroup[]) {
    [groups].flat().forEach((group) => {
      if (group instanceof OverlayGroup) {
        group.setNotifyReload(this.notifyReload);
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
  /** 获取图层的 zIndex 值 */
  getzIndex() {
    return this.zIndex;
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
  /** 获取图层的透明度 */
  getOpacity() {
    return this.opacity;
  }

  /** 获取画布 */
  getCanvas() {
    if (this.show.shouldRender(this.mainCanvas?.scale) && this.groups.size) {
      if (this.isReload) {
        this.isReload = false;
      }

      return [this.zIndex, this.canvas] as [number, HTMLCanvasElement];
    }
  }
}

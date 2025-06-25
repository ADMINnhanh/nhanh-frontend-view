import _Canvas from "..";
import OverlayGroup, { type OverlayType } from "../OverlayGroup";
import EventController from "../public/eventController";

type ConstructorOption = ConstructorParameters<typeof EventController>[0];

/**
 * 图层事件触发机制说明：
 *
 * 注意事项：
 * 图层级事件监听依赖其内部覆盖物的事件触发，仅当满足以下条件时触发：
 *    事件发生在该图层包含的覆盖物上
 *    该覆盖物已触发对应类型的事件
 *
 * 原因是：
 *    若存在位于不同 图层 的两个覆盖物，点击位置上是 zIndex 较小的图层中的覆盖物时，
 *    事件触发对象就应该是该 图层 中的 覆盖物，这时就不应该再触发其他 图层 的事件了；
 */

export default class Layer extends EventController {
  /** 层级 */
  zIndex = 4;

  protected canvas = document.createElement("canvas");
  protected ctx = this.canvas.getContext("2d")!;
  /** 是否需要重新绘制 */
  private isReload = false;

  groups = new Map<string, OverlayGroup>();

  constructor(option: ConstructorOption) {
    super(option);
    this.setNotifyReload(option.notifyReload);
  }

  setMainCanvas(mainCanvas?: _Canvas) {
    super.setMainCanvas(mainCanvas);
    this.canvas.width = mainCanvas?.rect.width || 0;
    this.canvas.height = mainCanvas?.rect.height || 0;
    this.groups.forEach((group) => {
      group.setMainCanvas(mainCanvas);
      group.parent = this;
    });
  }

  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute) => {
          if (needForceExecute) this.isRecalculate = true;
          if (needForceExecute || (this.shouldRender() && this.groups.size)) {
            notifyReload();
          }
        }
      : undefined;

    this.groups.forEach((group) => this.setGroupNotifyReload(group));
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
        group.parent = this;
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
        group.parent = undefined;
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
        group.parent = undefined;
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

  /** 本次绘制的覆盖物 */
  private currentDrawOverlays: [[number, number], OverlayType][] = [];
  /** 获取画布 */
  getCanvas():
    | [number, HTMLCanvasElement, [[number, number], OverlayType][]]
    | undefined {
    if (!this.mainCanvas) return;

    const { rect, isThemeUpdated } = this.mainCanvas!;
    const isShow = this.shouldRender();
    const size = this.groups.size;

    if (isShow && size) {
      if (this.isReload || this.isRecalculate || isThemeUpdated) {
        this.currentDrawOverlays = [];
        this.isReload = false;

        this.canvas.width = rect.width || 0;
        this.canvas.height = rect.height || 0;

        const groupArr: [
          number,
          [(ctx: CanvasRenderingContext2D) => void, OverlayType]
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

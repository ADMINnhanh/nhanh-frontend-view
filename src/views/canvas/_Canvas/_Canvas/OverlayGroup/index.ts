import _Canvas from "..";

import Text from "./text";
import Point from "./point";
import Line from "./line";
import Polygon from "./polygon";
import Custom from "./custom";
import Base from "./public/base";

type ConstructorOption = ConstructorParameters<typeof Base>[0];

export type Overlay = Text | Point | Line | Polygon | Custom<any>;

export default class OverlayGroup extends Base {
  overlays = new Set<Overlay>();

  constructor(option: ConstructorOption) {
    super(option);
  }

  setMainCanvas(mainCanvas?: _Canvas) {
    super.setMainCanvas(mainCanvas);
    this.overlays.forEach((overlay) => overlay.setMainCanvas(mainCanvas));
    if (mainCanvas && this.overlays.size) this.notifyReload?.();
  }

  setNotifyReload(notifyReload?: () => void) {
    this.notifyReload = notifyReload
      ? (needForceExecute?: boolean) => {
          if (needForceExecute) {
            notifyReload();
          } else if (
            this.show.shouldRender(this.mainCanvas?.scale) &&
            this.overlays.size
          ) {
            notifyReload();
          }
        }
      : undefined;

    this.overlays.forEach((overlay) =>
      overlay.setNotifyReload(this.notifyReload)
    );

    this.show.notifyReload = this.notifyReload;
  }

  addOverlays(overlays: Overlay[] | Overlay) {
    [overlays].flat().forEach((overlay) => {
      overlay.setNotifyReload(this.notifyReload);
      overlay.setMainCanvas(this.mainCanvas);
      overlay.parent = this;
      this.overlays.add(overlay);
    });
    this.notifyReload?.();
  }

  hasOverlay(overlay: Overlay) {
    return this.overlays.has(overlay);
  }
  removeOverlays(overlays: Overlay[] | Overlay) {
    [overlays].flat().forEach((overlay) => {
      this.overlays.delete(overlay);
      overlay.setNotifyReload();
      overlay.setMainCanvas();
      overlay.parent = undefined;
    });
    this.notifyReload?.();
  }
  clearOverlays() {
    this.notifyReload?.();
    this.overlays.forEach((overlay) => {
      overlay.setNotifyReload();
      overlay.setMainCanvas();
      overlay.parent = undefined;
    });
    this.overlays.clear();
  }

  /** 获取覆盖物的绘制方法 */
  getOverlaysDrawingMethod() {
    const groupArr: [
      number,
      [(ctx: CanvasRenderingContext2D) => void, Overlay]
    ][] = [];

    if (this.show.shouldRender(this.mainCanvas?.scale) && this.overlays.size) {
      let index = 1;

      Array.from(this.overlays.values())
        .sort((a, b) => a.zIndex - b.zIndex)
        .forEach((overlay) => {
          if (overlay.equalsMainCanvas(this.mainCanvas)) {
            const drawConfig = overlay.getDraw();
            if (drawConfig)
              groupArr.push([
                (Number(overlay.zIndex) || 0) + index++,
                drawConfig,
              ]);
          } else {
            this.overlays.delete(overlay);
          }
        });
    }

    return groupArr;
  }
}

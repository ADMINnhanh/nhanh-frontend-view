import { _GenerateUUID } from "nhanh-pure-function";
import type _Canvas from "..";
import Show from "./show";

// abstract class Base<T extends Base<T>> {
//   /** 父级 */
//   parent?: T;

//   /** 名称 */
//   name = "";

//   /** 自定义扩展数据 */
//   extData?: any;

//   /** 主画布 */
//   protected mainCanvas?: _Canvas;

//   private _isRecalculate = false;
//   /** 是否需要重新计算坐标 */
//   get isRecalculate(): boolean {
//     return (
//       (this.parent ? this.parent.isRecalculate : true) || this._isRecalculate
//     );
//   }
//   set isRecalculate(isRecalculate: boolean) {
//     this._isRecalculate = isRecalculate;
//   }

//   /** 是否是同一个主画布 */
//   equalsMainCanvas(mainCanvas?: _Canvas) {
//     return this.mainCanvas === mainCanvas;
//   }
//   /** 设置主画布 */
//   setMainCanvas(mainCanvas?: _Canvas) {
//     this.mainCanvas = mainCanvas;
//   }

//   /** 通知重新加载 */
//   protected notifyReload?: (needForceExecute?: boolean) => void;
//   /** 设置通知重新加载 */
//   abstract setNotifyReload(notifyReload?: () => void): void;
// }
// abstract class Show<T extends Show<T>> extends Base<T> {
//   private _isVisible = true;
//   /** 是否显示 */
//   get isVisible() {
//     return this._isVisible;
//   }
//   set isVisible(isVisible: boolean) {
//     if (isVisible != this.isVisible) {
//       this._isVisible = isVisible;
//       this.notifyReload?.(true);
//     }
//   }

//   private _opacity: undefined | number = undefined;
//   /** 透明度 */
//   get opacity() {
//     return this._opacity;
//   }
//   set opacity(opacity: number | undefined) {
//     if (this._opacity != opacity) {
//       if (opacity === undefined || (opacity >= 0 && opacity <= 1)) {
//         this._opacity = opacity;
//         this.notifyReload?.(false);
//       } else {
//         console.warn("Opacity value should be between 0 and 1.");
//       }
//     }
//   }

//   private _scaleRange?: [number, number];
//   /** 显示范围 缩放比例 */
//   get scaleRange() {
//     return this._scaleRange;
//   }
//   set scaleRange(scaleRange: [number, number] | undefined) {
//     if (scaleRange != this.scaleRange) {
//       this._scaleRange = scaleRange;
//       if (this.isVisible) this.notifyReload?.();
//     }
//   }

//   /** 是否需要渲染 */
//   shouldRender(opacity?: number): boolean {
//     opacity = opacity ?? this.opacity;
//     if (!this.isVisible || opacity === 0) return false;

//     const scale = this.mainCanvas?.scale;
//     if (this.scaleRange && scale) {
//       const min = Math.min(...this.scaleRange);
//       const max = Math.max(...this.scaleRange);
//       return scale >= min && scale <= max;
//     }
//     return true;
//   }
// }

interface BaseDataOptions {
  /** 父级 */
  parent?: BaseData<any>;

  /** 名称 */
  name?: string;
  /** 自定义扩展数据 */
  extData?: any;
  /** 主画布 */
  mainCanvas?: _Canvas;
  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;

  /** 透明度 */
  opacity?: number;
}

/** 基础数据 公共 */
export default abstract class BaseData<T extends BaseData<T>> {
  /** 父级 */
  parent?: T;

  /** 名称 */
  name = "";

  /** 自定义扩展数据 */
  extData?: any;

  /** 是否显示 */
  readonly show = new Show();

  /** 主画布 */
  protected mainCanvas?: _Canvas;

  private _isRecalculate = false;
  /** 是否需要重新计算坐标 */
  get isRecalculate(): boolean {
    return (
      (this.parent ? this.parent.isRecalculate : true) || this._isRecalculate
    );
  }
  set isRecalculate(isRecalculate: boolean) {
    this._isRecalculate = isRecalculate;
  }

  private _opacity: undefined | number = undefined;
  /** 透明度 */
  get opacity() {
    return this._opacity;
  }
  set opacity(opacity: number | undefined) {
    if (this._opacity != opacity) {
      if (opacity === undefined || (opacity >= 0 && opacity <= 1)) {
        this._opacity = opacity;
        this.notifyReload?.(false);
      } else {
        console.warn("Opacity value should be between 0 and 1.");
      }
    }
  }

  constructor(options: BaseDataOptions) {
    options.name = options.name || _GenerateUUID("default-name-");
    Object.assign(this, { ...options });
  }

  /** 是否是同一个主画布 */
  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }
  /** 设置主画布 */
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
  }

  /** 通知重新加载 */
  protected notifyReload?: (needForceExecute?: boolean) => void;
  /** 设置通知重新加载 */
  abstract setNotifyReload(notifyReload?: () => void): void;

  /** 是否需要渲染 */
  shouldRender(scale?: number, opacity?: number): boolean {
    scale = scale ?? this.mainCanvas?.scale;
    return (
      (this.parent ? this.parent.shouldRender(scale, opacity) : true) &&
      this.show.shouldRender(scale, opacity)
    );
  }
}

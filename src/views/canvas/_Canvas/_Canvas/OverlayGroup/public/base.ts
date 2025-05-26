import { _GenerateUUID } from "nhanh-pure-function";
import type _Canvas from "../..";
import EventController from "../../public/eventController";
import Show from "../../public/show";

type ConstructorOption = ConstructorParameters<typeof EventController>[0] & {
  /** 名称 */
  name?: string;
  /** 自定义扩展数据 */
  extData?: any;
  /** 主画布 */
  mainCanvas?: _Canvas;
  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;
};

export default abstract class Base extends EventController {
  /** 名称 */
  name = "";
  /** 自定义扩展数据 */
  extData?: any;

  /** 是否显示 */
  readonly show = new Show();

  /** 主画布 */
  protected mainCanvas?: _Canvas;

  constructor(option: ConstructorOption) {
    super(option);

    option.name = option.name || _GenerateUUID("default-name-");
    const { name, extData, mainCanvas } = option;
    Object.assign(this, { name, extData, mainCanvas });
  }

  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
  }

  /** 通知重新加载 */
  notifyReload?: (needForceExecute?: boolean) => void;
  abstract setNotifyReload(notifyReload?: () => void): void;
}

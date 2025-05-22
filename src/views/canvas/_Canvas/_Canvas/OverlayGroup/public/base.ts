import { _GenerateUUID } from "nhanh-pure-function";
import type _Canvas from "../..";
import EventController from "./event";
import Show from "./show";

type ConstructorOption = ConstructorParameters<typeof EventController>[0] & {
  name?: string;
  extData?: any;
  mainCanvas?: _Canvas;
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
    option = { ...option };
    option.name = option.name || _GenerateUUID("base-");

    const { notifyReload } = option;
    delete option.notifyReload;

    super(option);

    this.setNotifyReload(notifyReload);
  }

  equalsMainCanvas(mainCanvas?: _Canvas) {
    return this.mainCanvas === mainCanvas;
  }
  setMainCanvas(mainCanvas?: _Canvas) {
    this.mainCanvas = mainCanvas;
  }

  /** 通知重新加载 */
  protected notifyReload?: (needForceExecute?: boolean) => void;
  abstract setNotifyReload(notifyReload?: () => void): void;
}

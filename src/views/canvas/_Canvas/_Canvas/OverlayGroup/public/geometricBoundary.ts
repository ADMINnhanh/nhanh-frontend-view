import {
  _Math_GetMidpoint,
  _Math_PointToLineDistance,
} from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./overlay";
import Point from "../point";
import type { EventHandler } from "../../public/eventController";

// 定义点的类型
type PointLocation = [number, number];

type ConstructorOption<T> = ConstructorParameters<
  typeof Overlay<T, PointLocation[]>
>[0] & {
  /** 是否可显示控制点 */
  isHandlePointsVisible?: boolean;
  /** 是否可以创建新的 控制点 */
  canCreateOrDeleteHandlePoint?: boolean;
};

export default abstract class GeometricBoundary<T> extends Overlay<
  T,
  PointLocation[]
> {
  /** 控制点 */
  protected handlePoints: Point[] = [];

  /** 当前是否渲染了控制点 */
  protected isShowHandlePoint = false;
  /** 是否可显示控制点 */
  private _isHandlePointsVisible = true;
  /** 是否可显示控制点 */
  get isHandlePointsVisible() {
    return this._isHandlePointsVisible;
  }
  set isHandlePointsVisible(value: boolean) {
    if (this._isHandlePointsVisible !== value) {
      this._isHandlePointsVisible = value;
      if (this.isShowHandlePoint != value) this.notifyReload?.();
    }
  }

  /** 是否闭合 */
  protected abstract isClosed: boolean;
  /** 是否可以创建新的 控制点 */
  canCreateOrDeleteHandlePoint = true;
  /** 最少需要的 控制点 数量 */
  protected abstract minNeededHandlePoints: number;
  /** 锁定是否可创建句柄点 */
  private lockedCanCreateOrDeleteHandlePoint = false;

  constructor(option: ConstructorOption<T>) {
    super(option);

    ["isHandlePointsVisible", "canCreateOrDeleteHandlePoint"].forEach((key) => {
      if (key in option) {
        /** @ts-ignore */
        this[key] = option[key];
      }
    });

    this.addEventListener("click", this.defaultClick);
    this.addEventListener("doubleClick", this.defaultDoubleClick);
    this.addEventListener("dragg", this.defaultDragg);
  }

  /** 默认点击事件 点击后切换控制点显示状态 */
  defaultClick: EventHandler<"click"> = (event, mouseEvent) => {
    if (!this.isHandlePointsVisible) return;

    const { state, oldState } = event.data;

    if (state != oldState && !(this as any).isInfinite) this.notifyReload?.();
  };
  /** 默认点击事件 点击后 创建/删除 控制点 */
  defaultDoubleClick: EventHandler<"doubleClick"> = (event, mouseEvent) => {
    if (mouseEvent) {
      if (!this.isHandlePointsVisible) return;

      const { offsetX, offsetY } = mouseEvent;

      const { state } = event.data;

      if (this.lockedCanCreateOrDeleteHandlePoint) {
        this.resetHandlePointLock();
      } else if (state) {
        const canEditPoints =
          this.isHandlePointsVisible &&
          this.canCreateOrDeleteHandlePoint &&
          this.isDraggable;

        if (canEditPoints) {
          const hoverPointIndex = this.handlePoints.findIndex(
            (point) => point.isHover
          );

          if (hoverPointIndex === -1) {
            this.tryCreateNewHandlePoint(offsetX, offsetY);
          } else {
            this.tryDeleteHandlePoint(hoverPointIndex);
          }
        }
      }
    }
  };

  /** 尝试在指定位置创建新控制点 */
  private tryCreateNewHandlePoint(offsetX: number, offsetY: number): void {
    if (!this.isPointInStroke(offsetX, offsetY)) return;

    const dynamicPositions = this.getExtendedDynamicPositions();
    const insertIndex = findInsertIndex([offsetX, offsetY], dynamicPositions);

    if (insertIndex === -1) return;

    const [prevIndex, nextIndex] = this.getAdjacentIndices(insertIndex);
    const newPoint = this.createNewHandlePoint(prevIndex, nextIndex);

    this.insertHandlePoint(insertIndex, newPoint);
    this.lockHandlePointCreationTemporarily();
    this.notifyReload?.();
  }

  /** 尝试删除指定位置的控制点 */
  private tryDeleteHandlePoint(index: number): void {
    if (!this.isDblClick || !this.canDeleteHandlePoint) return;

    this.deleteHandlePoint(index);
    this.notifyReload?.();
  }

  /** 获取扩展后的动态位置 */
  private getExtendedDynamicPositions() {
    return this.isClosed
      ? [...this.dynamicPosition!, this.dynamicPosition![0]]
      : this.dynamicPosition!;
  }
  /** 获取相邻的索引 */
  private getAdjacentIndices(insertIndex: number): [number, number] {
    const prevIndex = insertIndex - 1;
    const nextIndex =
      this.isClosed && insertIndex === this.dynamicPosition!.length
        ? 0
        : insertIndex;
    return [prevIndex, nextIndex];
  }
  /** 创建新的控制点 */
  private createNewHandlePoint(prevIndex: number, nextIndex: number): Point {
    const midpointValue = getMidpoint(
      this.value![prevIndex],
      this.value![nextIndex]
    );
    const midpointPosition = getMidpoint(
      this.position![prevIndex],
      this.position![nextIndex]
    );
    const midpointDynamic = getMidpoint(
      this.dynamicPosition![prevIndex],
      this.dynamicPosition![nextIndex]
    );

    return new Point({
      value: midpointValue,
      position: midpointPosition,
      dynamicPosition: midpointDynamic,
      isDraggable: true,
      mainCanvas: this.mainCanvas,
      notifyReload: () => this.notifyReload?.(),
    });
  }
  /** 插入点 */
  private insertHandlePoint(index: number, point: Point): void {
    this.handlePoints.splice(index, 0, point);
    this.value!.splice(index, 0, point.value!);
    this.position!.splice(index, 0, point.position!);
    this.dynamicPosition!.splice(index, 0, point.dynamicPosition!);
  }
  /** 删除点 */
  private deleteHandlePoint(index: number): void {
    this.handlePoints.splice(index, 1);
    this.value!.splice(index, 1);
    this.position!.splice(index, 1);
    this.dynamicPosition!.splice(index, 1);
  }
  /** 锁定点创建 */
  private lockHandlePointCreationTemporarily(): void {
    this.lockedCanCreateOrDeleteHandlePoint = true;
    setTimeout(() => {
      this.lockedCanCreateOrDeleteHandlePoint = false;
    }, 300);
  }
  /** 解锁点创建 */
  private resetHandlePointLock(): void {
    this.lockedCanCreateOrDeleteHandlePoint = false;
  }
  /** 是否可以删除点 */
  private get canDeleteHandlePoint(): boolean {
    return this.handlePoints.length > this.minNeededHandlePoints;
  }

  /** 处理拖动状态变化 */
  defaultDragg: EventHandler<"dragg"> = (event, mouseEvent) => {
    if (!this.mainCanvas) return;

    /** 移动整体 */
    const moveTheWhole = () => {
      const { offsetX, offsetY } = event.data;
      const { x, y } = this.calculateOffset(offsetX, offsetY)!;

      this.value!.forEach((_, index) => {
        this.value![index][0] += x.value;
        this.value![index][1] += y.value;

        this.position![index][0] += x.position;
        this.position![index][1] += y.position;

        this.dynamicPosition![index][0] += x.dynamicPosition;
        this.dynamicPosition![index][1] += y.dynamicPosition;
      });
      this.handlePoints.forEach((point, index) => {
        point.internalUpdate({
          value: this.value![index],
          position: this.position![index],
          dynamicPosition: this.dynamicPosition![index],
        });
      });
      this.lockedCanCreateOrDeleteHandlePoint = true;
    };
    if (this.isHandlePointsVisible) {
      const hover_point_index = this.handlePoints.findIndex(
        (point) => point.isHover
      );
      if (hover_point_index != -1) {
        const point = this.handlePoints[hover_point_index];
        point.notifyDragg(event.data, mouseEvent);
        this.value![hover_point_index] = point.value!;
        this.position![hover_point_index] = point.position!;
        this.dynamicPosition![hover_point_index] = point.dynamicPosition!;
      } else moveTheWhole();
    } else moveTheWhole();

    this.notifyReload?.();
    this.updateValueScope();
  };

  /** 更新控制点 */
  updateHandlePoints() {
    let { value, position, dynamicPosition } = this;
    if (!dynamicPosition) return;

    value?.forEach((_, index) => {
      if (!this.handlePoints[index]) {
        const point = new Point({
          mainCanvas: this.mainCanvas,
          isDraggable: true,
          notifyReload: () => this.notifyReload?.(),
        });
        this.handlePoints.push(point);
      }

      this.handlePoints[index].internalUpdate(
        {
          value: value![index],
          position: position![index],
          dynamicPosition: dynamicPosition![index],
        },
        true
      );
    });
    this.handlePoints.length = value!.length;
  }
}

/**
 * 查找点击位置应插入的下标
 * @param clickPosition 点击位置
 * @param controlPoints 线段控制点数组
 * @returns 应插入的下标
 */
function findInsertIndex(
  clickPosition: PointLocation,
  controlPoints: PointLocation[],
  threshold: number = 10 // 可配置的阈值
): number {
  if (controlPoints.length === 0) return 0;
  if (controlPoints.length === 1) return 1;

  let minDistance = Infinity;
  let insertIndex = -1;

  for (let i = 0; i < controlPoints.length - 1; i++) {
    const distance = _Math_PointToLineDistance(
      clickPosition,
      controlPoints[i],
      controlPoints[i + 1]
    );

    // 如果找到足够近的点，可以提前返回
    if (distance < threshold) {
      return i + 1;
    }

    if (distance < minDistance) {
      minDistance = distance;
      insertIndex = i + 1;
    }
  }

  return insertIndex;
}

/**
 * 计算两个点的中点坐标
 * 该函数接收两对坐标（起点和终点），并计算它们的中点坐标
 * 主要用途是在图形学或游戏中确定两个位置之间的中间位置
 *
 * @param value1 - 第一个点的坐标，格式为 [x1, y1]
 * @param value2 - 第二个点的坐标，格式为 [x2, y2]
 * @returns 返回一个元组，包含中点的 x 和 y 坐标
 */
function getMidpoint(
  value1: [number, number],
  value2: [number, number]
): [number, number] {
  // 调用 _Math_GetMidpoint 函数计算中点，并将结果解构为 x 和 y
  const { x, y } = _Math_GetMidpoint(...value1, ...value2);
  // 返回中点坐标作为常量元组，确保返回值类型不会被意外修改
  return [x, y];
}

import { _Clone, _GetMidpoint } from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./overlay";
import Point from "../point";

// 定义点的类型
type PointLocation = [number, number];

/**
 * 计算点到线段的距离
 * @param point 点击位置
 * @param lineStart 线段起点
 * @param lineEnd 线段终点
 * @returns 点到线段的距离
 */
function pointToLineDistance(
  point: PointLocation,
  lineStart: PointLocation,
  lineEnd: PointLocation
): number {
  const [x0, y0] = point;
  const [x1, y1] = lineStart;
  const [x2, y2] = lineEnd;

  const numerator = Math.abs(
    (y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1
  );
  const denominator = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);

  return numerator / denominator;
}

/**
 * 查找点击位置应插入的下标
 * @param clickPosition 点击位置
 * @param controlPoints 线段控制点数组
 * @returns 应插入的下标
 */
function findInsertIndex(
  clickPosition: PointLocation,
  controlPoints: PointLocation[]
): number {
  let minDistance = Infinity;
  let insertIndex = -1;

  for (let i = 0; i < controlPoints.length - 1; i++) {
    const p1 = controlPoints[i];
    const p2 = controlPoints[i + 1];
    const distance = pointToLineDistance(clickPosition, p1, p2);

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
  // 调用 _GetMidpoint 函数计算中点，并将结果解构为 x 和 y
  const { x, y } = _GetMidpoint(...value1, ...value2);
  // 返回中点坐标作为常量元组，确保返回值类型不会被意外修改
  return [x, y];
}

export default abstract class GeometricBoundary<T> extends Overlay<
  T,
  PointLocation[]
> {
  /** 控制点 */
  protected handlePoints: Point[] = [];
  /** 是否可显示控制点 */
  isShowHandlePoint = true;

  /** 是否闭合 */
  protected abstract isClosed: boolean;
  /** 是否可以创建新的 控制点 */
  isCanCreateHandlePoint = true;
  /** 锁定是否可创建句柄点 */
  private lockedIsCanCreateHandlePoint = false;

  constructor(
    boundary: ConstructorParameters<
      typeof Overlay<T, [number, number][]>
    >[0] & {
      isShowHandlePoint?: boolean;
      isCanCreateHandlePoint?: boolean;
    }
  ) {
    super(boundary);
    this.isShowHandlePoint = boundary.isShowHandlePoint ?? true;
    this.isCanCreateHandlePoint = boundary.isCanCreateHandlePoint ?? true;
  }

  /** 处理悬停状态变化 */
  notifyHover(isHover: boolean, offsetX: number, offsetY: number) {
    super.notifyHover(isHover, offsetX, offsetY);
  }
  /** 处理点击状态变化 */
  notifyClick(isClick: boolean, offsetX: number, offsetY: number): void {
    if (this.lockedIsCanCreateHandlePoint) {
      this.lockedIsCanCreateHandlePoint = false;
    } else if (
      isClick &&
      this.isClick &&
      this.isCanCreateHandlePoint &&
      this.draggable
    ) {
      const isPointInStroke = this.isPointInStroke(offsetX, offsetY);
      if (isPointInStroke) {
        const hover_point_index = this.handlePoints.findIndex(
          (point) => point.isHover
        );
        if (hover_point_index == -1) {
          const dynamicPosition = [...this.dynamicPosition!];
          if (this.isClosed) dynamicPosition.push(this.dynamicPosition![0]);
          const index = findInsertIndex([offsetX, offsetY], dynamicPosition);

          const index1 = index - 1;
          const index2 =
            this.isClosed && index == this.dynamicPosition!.length ? 0 : index;

          /** 创建新的控制点 */ {
            const value = getMidpoint(this.value![index1], this.value![index2]);
            const position = getMidpoint(
              this.position![index1],
              this.position![index2]
            );
            const dynamicPosition = getMidpoint(
              this.dynamicPosition![index1],
              this.dynamicPosition![index2]
            );

            const point = new Point({
              value,
              position,
              dynamicPosition,
              draggable: true,
            });
            point.mainCanvas = this.mainCanvas;
            point.setNotifyReload(() => this.notifyReload?.());

            this.handlePoints.splice(index, 0, point);
            this.value!.splice(index, 0, value);
            this.position!.splice(index, 0, position);
            this.dynamicPosition!.splice(index, 0, dynamicPosition);
          }
        }
      }
    }

    super.notifyClick(isClick, offsetX, offsetY);
    this.notifyReload?.();
  }
  /** 处理拖动状态变化 */
  notifyDraggable(offsetX: number, offsetY: number): undefined {
    if (!this.draggable) return;

    /** 移动整体 */
    const moveTheWhole = () => {
      const { x, y } = super.notifyDraggable(offsetX, offsetY)!;

      this.value!.forEach((_, index) => {
        this.value![index][0] += x.value;
        this.value![index][1] += y.value;

        this.position![index][0] += x.position;
        this.position![index][1] += y.position;

        this.dynamicPosition![index][0] += x.dynamicPosition;
        this.dynamicPosition![index][1] += y.dynamicPosition;
      });
      this.handlePoints.forEach((point, index) => {
        point.value = this.value![index];
        point.position = this.position![index];
        point.dynamicPosition = this.dynamicPosition![index];
      });
      this.notifyReload?.();
      this.lockedIsCanCreateHandlePoint = true;
    };
    if (this.isShowHandlePoint) {
      const hover_point_index = this.handlePoints.findIndex(
        (point) => point.isHover
      );
      if (hover_point_index != -1) {
        const point = this.handlePoints[hover_point_index];
        point.notifyDraggable(offsetX, offsetY);
        this.value![hover_point_index] = point.value!;
        this.position![hover_point_index] = point.position!;
        this.dynamicPosition![hover_point_index] = point.dynamicPosition!;
      } else moveTheWhole();
    } else moveTheWhole();
  }

  /** 更新控制点 */
  updateHandlePoints() {
    let { value, position, dynamicPosition } = this;
    if (!dynamicPosition) return;

    value?.forEach((_, index) => {
      const point = this.handlePoints[index] || new Point({ draggable: true });
      point.value = value![index];
      point.position = position![index];
      point.dynamicPosition = dynamicPosition![index];
      point.mainCanvas = this.mainCanvas;
      point.setNotifyReload(() => this.notifyReload?.());
      if (!this.handlePoints[index]) this.handlePoints.push(point);
    });
    this.handlePoints.length = value!.length;
  }
}

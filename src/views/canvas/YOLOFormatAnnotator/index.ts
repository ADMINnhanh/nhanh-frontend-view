import { CreateOutline } from "@vicons/ionicons5";
import { NColorPicker, NIcon, NInput, NSpace } from "naive-ui";
import { _Utility_GenerateUUID, _Utility_Throttle } from "nhanh-pure-function";
import { h, ref, type Component } from "vue";

interface Point {
  x: number;
  y: number;
}

/**
 * 判断点是否在多边形内
 * @param point - 待检测的点，包含 x 和 y 坐标
 * @param polygon - 多边形的点集，数组形式，每个点包含 x 和 y 坐标
 * @returns boolean - 点是否在多边形内
 */
function isPointInPolygon(point: Point, polygon: Point[]): boolean {
  let isInside = false;

  const { x, y } = point;
  const len = polygon.length;

  for (let i = 0, j = len - 1; i < len; j = i++) {
    const xi = polygon[i].x,
      yi = polygon[i].y;
    const xj = polygon[j].x,
      yj = polygon[j].y;

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) isInside = !isInside;
  }

  return isInside;
}

type CursorDirectionType =
  | "left-top"
  | "center-top"
  | "right-top"
  | "right-center"
  | "right-bottom"
  | "center-bottom"
  | "left-bottom"
  | "left-center";

/** 画布 */
export const canvas = ref<HTMLCanvasElement>();
/** 偏移 */
const offset = {
  x: 0,
  y: 0,
};
/** 缩放 */
let scale = 1;
/** 缩放步进 */
let scaleStep = 0.1;
/** 最大缩放 */
let maxScale = 4;
/** 最小缩放 */
let minScale = scaleStep;
/** 填充色透明度 */
let fillColorTransparency = 0.4;

/** 方框类别 */
export const typeList = ref([
  {
    name: "头盔",
    color: "#18a058",
  },
  {
    name: "口罩",
    color: "#f0a020",
  },
  {
    name: "飞机",
    color: "#2080f0",
  },
]);

type BoxItem = {
  id: string;
  name: string;
  color: string;
  points: { x: number; y: number; w: number; h: number };
};
/** 方框列表 */
let boxList: BoxItem[] = [];

type CurCreatedBox =
  | {
      name: string;
      color: string;
      points: { x: number; y: number }[];
    }
  | undefined;
/** 当前正在创建的方框 */
export const curCreatedBox = ref<CurCreatedBox>();
/** 连续创建 */
export const continuousCreated = ref(false);

/** 二次编辑方框 */
let secondaryEditBox: BoxItem | undefined;
/** 二次编辑方框 控制点半径 */
let secondaryEditRadius = 7;

/** 供给外部监听进行更新数据 */
export const ChangeData = ref();
/** 转换方框数据 */
function TransformData() {
  const newBoxList = boxList.map((box) => ({
    name: box.name,
    ...box.points,
  }));
  if (secondaryEditBox) {
    newBoxList.push({
      name: secondaryEditBox.name,
      ...secondaryEditBox.points,
    });
  }
  ChangeData.value = newBoxList;
}

/** 通用参数 */
let commonParams: {
  dom: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  /** dom clientWidth */
  clientWidth: number;
  /** dom clientHeight */
  clientHeight: number;
  /** dom x */
  x: number;
  /** dom y */
  y: number;

  /** handleImg left */
  left: number;
  /** handleImg top */
  top: number;
  /** handleImg width */
  width: number;
  /** handleImg height */
  height: number;
};

/** 图片 */
const img = new Image();
/** 处理图片宽高 */
function handleImg(clientWidth: number, clientHeight: number) {
  const { naturalWidth, naturalHeight } = img;
  const aspectRatio = naturalWidth / naturalHeight;
  const clientAspectRatio = clientWidth / clientHeight;

  const isWidthLimited = clientAspectRatio <= aspectRatio;

  const width = isWidthLimited ? clientWidth : clientHeight * aspectRatio;
  const height = isWidthLimited ? clientWidth / aspectRatio : clientHeight;
  const left = isWidthLimited ? 0 : (clientWidth - width) / 2;
  const top = isWidthLimited ? (clientHeight - height) / 2 : 0;

  return {
    width: scale * width,
    height: scale * height,
    left: scale * left + offset.x,
    top: scale * top + offset.y,
  };
}
/** 绘制文本 */
function drawText(x: number, y: number, text: string, color: string) {
  const { ctx, left, top, width, height } = commonParams;

  const fontSize = 18 * scale;
  const padding = 5 * scale;
  ctx.font = fontSize + "px serif";
  let textMetrics = ctx.measureText(text);
  ctx.fillStyle = color;
  ctx.fillRect(
    left + x * width,
    top + y * height - (fontSize + 2 * padding),
    textMetrics.width + 2 * padding,
    fontSize + 2 * padding
  );
  ctx.fillStyle = "white";
  ctx.textBaseline = "bottom";
  ctx.fillText(text, left + x * width + padding, top + y * height - padding);
}
/** 绘制方框 */
function drawBox() {
  const { ctx, left, top, width, height } = commonParams;

  function drawRect(x: number, y: number, w: number, h: number, color: string) {
    ctx.fillStyle =
      color + (255 * fillColorTransparency).toString(16).split(".")[0];
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, w, h);
  }

  boxList.forEach((item) => {
    drawRect(
      left + item.points.x * width,
      top + item.points.y * height,
      item.points.w * width,
      item.points.h * height,
      item.color
    );

    drawText(item.points.x, item.points.y, item.name, item.color);
  });

  if (curCreatedBox.value && curCreatedBox.value.points.length > 1) {
    const x = Math.min(
      curCreatedBox.value.points[0].x,
      curCreatedBox.value.points[1].x
    );
    const y = Math.min(
      curCreatedBox.value.points[0].y,
      curCreatedBox.value.points[1].y
    );

    const w =
      Math.max(
        curCreatedBox.value.points[0].x,
        curCreatedBox.value.points[1].x
      ) - x;
    const h =
      Math.max(
        curCreatedBox.value.points[0].y,
        curCreatedBox.value.points[1].y
      ) - y;

    drawRect(
      left + x * width,
      top + y * height,
      w * width,
      h * height,
      curCreatedBox.value.color
    );
    drawText(x, y, curCreatedBox.value.name, curCreatedBox.value.color);
  }
}
/** 将 二次编辑方框 还原 */
function reductionSecondaryEditBox() {
  if (!secondaryEditBox) return;

  boxList.push(secondaryEditBox);
  secondaryEditBox = undefined;
}
/** 获取 二次编辑方框 的8个控制点 */
function getSecondaryEditBoxPoints() {
  if (!secondaryEditBox) return;

  const { left, top, width, height } = commonParams;
  const { x, y, w, h } = secondaryEditBox.points;

  const points: { x: number; y: number; type: CursorDirectionType }[] = [
    { x: x, y: y, type: "left-top" },
    { x: x + w / 2, y: y, type: "center-top" },
    { x: x + w, y: y, type: "right-top" },
    { x: x + w, y: y + h / 2, type: "right-center" },
    { x: x + w, y: y + h, type: "right-bottom" },
    { x: x + w / 2, y: y + h, type: "center-bottom" },
    { x: x, y: y + h, type: "left-bottom" },
    { x: x, y: y + h / 2, type: "left-center" },
  ];

  return points.map(({ x, y, type }) => ({
    x: x * width + left,
    y: y * height + top,
    type,
  }));
}
/** 鼠标是否在 二次编辑方框 某个控制点上 */
function isInSecondaryEditBoxPoint(x: number, y: number) {
  const points = getSecondaryEditBoxPoints();
  if (!points) return;

  const { dom } = commonParams;
  const { x: cx, y: cy } = dom.getBoundingClientRect();

  /** 中心点 转 矩形 */
  function getBoxByPoints(point: { x: number; y: number }) {
    const x = point.x + cx;
    const y = point.y + cy;
    return [
      { x: x - secondaryEditRadius, y: y - secondaryEditRadius },
      { x: x + secondaryEditRadius, y: y - secondaryEditRadius },
      { x: x + secondaryEditRadius, y: y + secondaryEditRadius },
      { x: x - secondaryEditRadius, y: y + secondaryEditRadius },
    ];
  }

  return points.find((point) =>
    isPointInPolygon({ x, y }, getBoxByPoints(point))
  );
}
/** 绘制二次编辑方框 */
function drawSecondaryEditBox() {
  if (!secondaryEditBox) return;

  const { ctx, left, top, width, height } = commonParams;

  const { points, color } = secondaryEditBox;

  const x = left + points.x * width;
  const y = top + points.y * height;
  const w = points.w * width;
  const h = points.h * height;

  ctx.fillStyle =
    color + (255 * fillColorTransparency).toString(16).split(".")[0];
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = "white";
  ctx.strokeRect(x, y, w, h);

  drawText(points.x, points.y, secondaryEditBox.name, secondaryEditBox.color);

  /** 控制点 */
  const controlPoints = getSecondaryEditBoxPoints();
  controlPoints?.forEach(({ x, y }) => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, secondaryEditRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
  });
}
/** 绘制背景 */
function drawBackground() {
  const { clientWidth, clientHeight, ctx } = commonParams;

  const { left, top, width, height } = handleImg(clientWidth, clientHeight);
  ctx.drawImage(img, left, top, width, height);
}
/** 绘制汇总 */
function drawFullList() {
  const dom = canvas.value as HTMLCanvasElement;
  const ctx = dom.getContext("2d");
  if (!dom || !ctx) return;

  const { clientWidth, clientHeight } = dom;

  dom.width = clientWidth;
  dom.height = clientHeight;

  const { x, y } = dom.getBoundingClientRect();
  const { left, top, width, height } = handleImg(clientWidth, clientHeight);

  ctx.clearRect(
    offset.x,
    offset.y,
    clientWidth + offset.x,
    clientHeight + offset.y
  );

  commonParams = {
    dom,
    ctx,
    clientWidth,
    clientHeight,
    x,
    y,
    left,
    top,
    width,
    height,
  };

  drawBackground();
  drawBox();
  drawSecondaryEditBox();
}

/** 是否正在进行拖拽 */
let isDrag: boolean = false;
/** 鼠标是否按下 */
let isDown: boolean = false;
/** 鼠标是否在 二次编辑方框 某个控制点上 按下 */
let isDownByEditBoxPoint: CursorDirectionType | "box" | undefined;
/** 鼠标之前的位置 */
let lastPos: { x?: number; y?: number } = {};

/** 获取鼠标相对于背景的位置 */
function getMousePosition(payload: MouseEvent) {
  if (!commonParams) return;
  const { clientX, clientY } = payload;

  const { left, top, width, height, x, y } = commonParams;

  return {
    x: (clientX - (x + left)) / width,
    y: (clientY - (y + top)) / height,
  };
}
/** 获取方框使用点位 */
function getBoxPoints(item: BoxItem) {
  const { left, top, width, height } = commonParams;

  const x = left + item.points.x * width;
  const y = top + item.points.y * height;
  const w = item.points.w * width;
  const h = item.points.h * height;

  return [
    { x, y },
    { x: x + w, y },
    { x: x + w, y: y + h },
    { x, y: y + h },
  ];
}

/** 鼠标滚轮 */
export const handleWheel = (function () {
  const isMaxZoom = _Utility_Throttle(
    () => window.$message.warning(`放大到最大值了！ ${maxScale} 倍`),
    200
  );
  const isMinZoom = _Utility_Throttle(
    () => window.$message.warning(`缩小到最小值了！ ${minScale} 倍`),
    200
  );

  return function (e: WheelEvent) {
    if (!commonParams) return;

    const { x, y } = commonParams;
    const { deltaY, clientX, clientY } = e;

    /** deltaY 为正：缩小，为负：放大 */

    function updateOffset() {
      /** 起始位置 */
      const startX = x + offset.x;
      const startY = y + offset.y;

      /** 鼠标与起始位置的距离 */
      const distanceX = clientX - startX;
      const distanceY = clientY - startY;

      /** 新增的缩放 */
      const newScale = deltaY > 0 ? -scaleStep : scaleStep;
      /** 旧的缩放 */
      const oldScale = scale - newScale;

      /** 新增的偏移 */
      const _x = (distanceX / oldScale) * newScale;
      const _y = (distanceY / oldScale) * newScale;

      /** 鼠标位于起始位置左侧/右侧 */
      if (clientX < startX) offset.x += _x;
      else if (clientX > startX) offset.x -= _x;

      /** 鼠标位于起始位置上侧/下侧 */
      if (clientY < startY) offset.y += _y;
      else if (clientY > startY) offset.y -= _y;

      drawFullList();
    }

    function updateScale() {
      if (deltaY < 0 && scale >= maxScale) isMaxZoom();
      else if (deltaY > 0 && scale <= minScale) isMinZoom();
      else {
        /** 缩放步进小数位数 */
        const floatScaleStep = scaleStep.toString().split(".")[1]?.length || 0;
        /** 新增的缩放 */
        const newScale = deltaY > 0 ? -scaleStep : scaleStep;

        scale = Number((scale + newScale).toFixed(floatScaleStep));

        updateOffset();
      }
    }

    updateScale();
  };
})();
/** 鼠标点击 */
export function handleMouseClick(payload: MouseEvent) {
  const { clientX, clientY } = payload;

  if (!commonParams || isDrag) return;

  if (curCreatedBox.value) {
    const point = getMousePosition(payload);
    if (point === undefined) return;

    if (curCreatedBox.value.points.length === 0)
      curCreatedBox.value.points[0] = point;
    else {
      const x = Math.min(curCreatedBox.value.points[0].x, point.x);
      const y = Math.min(curCreatedBox.value.points[0].y, point.y);

      const w = Math.max(curCreatedBox.value.points[0].x, point.x) - x;
      const h = Math.max(curCreatedBox.value.points[0].y, point.y) - y;

      boxList.push({
        id: _Utility_GenerateUUID(),
        name: curCreatedBox.value.name,
        color: curCreatedBox.value.color,
        points: { x, y, w, h },
      });
      TransformData();

      if (continuousCreated.value) {
        const oldCurCreatedBox = curCreatedBox.value;
        curCreatedBox.value = {
          name: oldCurCreatedBox.name,
          color: oldCurCreatedBox.color,
          points: [],
        };
      } else {
        curCreatedBox.value = undefined;
      }
    }
    drawFullList();
  } else if (!isDownByEditBoxPoint) {
    /** !isDownByEditBoxPoint 是用于避开 二次编辑方框 8个控制点 的点击事件 */
    const { x, y } = commonParams;

    /** 判断是否点击的是二次编辑的方框 */
    const isEditBox =
      secondaryEditBox &&
      isPointInPolygon(
        {
          x: clientX - x,
          y: clientY - y,
        },
        getBoxPoints(secondaryEditBox)
      );

    /** 点击的是二次编辑的方框则退出再编辑 */
    if (isEditBox) {
      reductionSecondaryEditBox();
      drawFullList();
    } else {
      const _boxList = [...boxList];
      _boxList.sort(
        (a, b) => a.points.w * a.points.h - b.points.w * b.points.h
      );

      /** 被点击的方框 */
      const targetBox = _boxList.find((item) => {
        return isPointInPolygon(
          {
            x: clientX - x,
            y: clientY - y,
          },
          getBoxPoints(item)
        );
      });

      /** 将之前的 二次编辑方框 还原 */
      reductionSecondaryEditBox();
      /** 将被点击的方框 作为 二次编辑方框 */
      if (targetBox) {
        boxList = boxList.filter((item) => item.id !== targetBox.id);
        secondaryEditBox = targetBox;
      }
      drawFullList();
    }
  }
}
/** 鼠标按下 */
export function handleMouseDown(payload: MouseEvent) {
  const { clientX, clientY } = payload;

  if (!commonParams) return;
  const { x, y, dom } = commonParams;

  /** 当前处于二次编辑状态 */
  if (secondaryEditBox) {
    /** 按下的位置是 二次编辑的方框 的8个控制点 */
    const isEditPoint = isInSecondaryEditBoxPoint(clientX, clientY);
    /** 按下的位置是 二次编辑的方框 */
    const isEditBox =
      secondaryEditBox &&
      isPointInPolygon(
        {
          x: clientX - x,
          y: clientY - y,
        },
        getBoxPoints(secondaryEditBox)
      );

    if (isEditPoint || isEditBox) {
      isDownByEditBoxPoint = isEditPoint ? isEditPoint.type : "box";
      lastPos = {
        x: clientX,
        y: clientY,
      };

      if (isEditBox && !isEditPoint) dom.style.cursor = "move";
    }
  } else if (curCreatedBox.value) {
  } else {
    /** 当前未有特殊状态，则进行整体拖拽 */
    isDown = true;
  }
}
/** 鼠标抬起 */
export function handleMouseUp() {
  lastPos = {};
  isDown = false;

  /** 拖拽 二次编辑方框 的8个控制点 时也会触发点击事件，延后置空留于点击事件进行判断 */
  requestAnimationFrame(() => {
    isDownByEditBoxPoint = undefined;
    isDrag = false;
  });

  if (!commonParams) return;
  const { dom } = commonParams;
  dom.style.cursor = "inherit";
}

/** cursor 字典 */
const cursorDirection: { [x in CursorDirectionType]: string } = {
  "left-top": "nwse-resize",
  "center-top": "ns-resize",
  "right-top": "nesw-resize",
  "right-center": "ew-resize",
  "right-bottom": "nwse-resize",
  "center-bottom": "ns-resize",
  "left-bottom": "nesw-resize",
  "left-center": "ew-resize",
};
/** 根据鼠标移动计算 二次编辑方框 的新的位置/宽高 */
function updateSecondaryEditBoxByMouse(clientX: number, clientY: number) {
  if (!isDownByEditBoxPoint) return;

  const { x, y } = lastPos;
  if (x === undefined || y === undefined || !secondaryEditBox) return;
  const { width, height, dom } = commonParams;
  const offset = {
    x: (clientX - x) / width,
    y: (clientY - y) / height,
  };
  lastPos = { x: clientX, y: clientY };

  if (isDownByEditBoxPoint == "left-top") {
    secondaryEditBox.points.x += offset.x;
    secondaryEditBox.points.y += offset.y;

    secondaryEditBox.points.w += -offset.x;
    secondaryEditBox.points.h += -offset.y;

    const isNegativeW = secondaryEditBox.points.w < 0;
    const isNegativeH = secondaryEditBox.points.h < 0;

    if (isNegativeW && isNegativeH) {
      isDownByEditBoxPoint = "right-bottom";
    } else if (isNegativeW) {
      isDownByEditBoxPoint = "right-top";
    } else if (isNegativeH) {
      isDownByEditBoxPoint = "left-bottom";
    }
  } else if (isDownByEditBoxPoint == "center-top") {
    secondaryEditBox.points.y += offset.y;

    secondaryEditBox.points.h += -offset.y;

    const isNegativeH = secondaryEditBox.points.h < 0;
    if (isNegativeH) {
      isDownByEditBoxPoint = "center-bottom";
    }
  } else if (isDownByEditBoxPoint == "right-top") {
    secondaryEditBox.points.y += offset.y;

    secondaryEditBox.points.w += offset.x;
    secondaryEditBox.points.h += -offset.y;

    const isNegativeW = secondaryEditBox.points.w < 0;
    const isNegativeH = secondaryEditBox.points.h < 0;

    if (isNegativeW && isNegativeH) {
      isDownByEditBoxPoint = "left-bottom";
    } else if (isNegativeW) {
      isDownByEditBoxPoint = "left-top";
    } else if (isNegativeH) {
      isDownByEditBoxPoint = "right-bottom";
    }
  } else if (isDownByEditBoxPoint == "right-center") {
    secondaryEditBox.points.w += offset.x;

    const isNegativeW = secondaryEditBox.points.w < 0;

    if (isNegativeW) {
      isDownByEditBoxPoint = "left-center";
    }
  } else if (isDownByEditBoxPoint == "right-bottom") {
    secondaryEditBox.points.w += offset.x;
    secondaryEditBox.points.h += offset.y;

    const isNegativeW = secondaryEditBox.points.w < 0;
    const isNegativeH = secondaryEditBox.points.h < 0;

    if (isNegativeW && isNegativeH) {
      isDownByEditBoxPoint = "left-top";
    } else if (isNegativeW) {
      isDownByEditBoxPoint = "left-bottom";
    } else if (isNegativeH) {
      isDownByEditBoxPoint = "right-top";
    }
  } else if (isDownByEditBoxPoint == "center-bottom") {
    secondaryEditBox.points.h += offset.y;

    const isNegativeH = secondaryEditBox.points.h < 0;

    if (isNegativeH) {
      isDownByEditBoxPoint = "center-top";
    }
  } else if (isDownByEditBoxPoint == "left-bottom") {
    secondaryEditBox.points.x += offset.x;

    secondaryEditBox.points.w += -offset.x;
    secondaryEditBox.points.h += offset.y;

    const isNegativeW = secondaryEditBox.points.w < 0;
    const isNegativeH = secondaryEditBox.points.h < 0;

    if (isNegativeW && isNegativeH) {
      isDownByEditBoxPoint = "right-top";
    } else if (isNegativeW) {
      isDownByEditBoxPoint = "right-bottom";
    } else if (isNegativeH) {
      isDownByEditBoxPoint = "left-top";
    }
  } else if (isDownByEditBoxPoint == "left-center") {
    secondaryEditBox.points.x += offset.x;
    secondaryEditBox.points.w += -offset.x;

    const isNegativeW = secondaryEditBox.points.w < 0;

    if (isNegativeW) {
      isDownByEditBoxPoint = "right-center";
    }
  } else if (isDownByEditBoxPoint == "box") {
    secondaryEditBox.points.x += offset.x;
    secondaryEditBox.points.y += offset.y;
  }

  if (isDownByEditBoxPoint != "box")
    dom.style.cursor = cursorDirection[isDownByEditBoxPoint];

  if (secondaryEditBox.points.w < 0) {
    secondaryEditBox.points.x += secondaryEditBox.points.w;
    secondaryEditBox.points.w = -secondaryEditBox.points.w;
  }
  if (secondaryEditBox.points.h < 0) {
    secondaryEditBox.points.y += secondaryEditBox.points.h;
    secondaryEditBox.points.h = -secondaryEditBox.points.h;
  }

  TransformData();

  drawFullList();
}
/** 鼠标移动 */
export function handleMouseMove(event: MouseEvent) {
  const { clientX, clientY } = event;

  if (!commonParams) return;

  /** 当前处于拖拽状态 */
  if (isDown) {
    if (lastPos.x !== undefined && lastPos.y !== undefined) {
      isDrag = true;
      offset.x += clientX - lastPos.x;
      offset.y += clientY - lastPos.y;

      drawFullList();
    }
    lastPos.x = clientX;
    lastPos.y = clientY;
  } else if (
    curCreatedBox.value !== undefined &&
    curCreatedBox.value.points.length > 0
  ) {
    /** 当前处于创建方框状态,并且已经点击创建了第一个点位 */
    const point = getMousePosition(event);
    if (point === undefined) return;
    curCreatedBox.value.points[1] = point;
    drawFullList();
  } else if (secondaryEditBox) {
    /** 当前处于 二次编辑方框状态 */

    /** 拖拽二次编辑方框控制点或二次编辑方框本身 */
    if (isDownByEditBoxPoint) {
      updateSecondaryEditBoxByMouse(clientX, clientY);
    } else {
      /** 鼠标移动时，判断鼠标是否在 二次编辑方框的控制点上，如果是，则改变鼠标的样式 */

      const { x, y, dom } = commonParams;

      /** 判断是否点击的是 二次编辑的方框 的8个控制点 */
      const isEditBoxPoint = isInSecondaryEditBoxPoint(clientX, clientY);
      /** 判断是否点击的是二次编辑的方框 */
      const isEditBox = isPointInPolygon(
        {
          x: clientX - x,
          y: clientY - y,
        },
        getBoxPoints(secondaryEditBox)
      );

      if (isEditBoxPoint || isEditBox) {
        dom.style.cursor = isEditBoxPoint
          ? cursorDirection[isEditBoxPoint.type]
          : "move";
      } else {
        dom.style.cursor = "inherit";
      }
    }
  }
}
/** 键盘 delete */
export function handleKeyDown(event: KeyboardEvent) {
  if (!commonParams) return;

  if (event.key === "Delete") {
    const isCurCreate = !!curCreatedBox.value;
    const isSecondaryEditBox = !!secondaryEditBox;
    curCreatedBox.value = undefined;
    secondaryEditBox = undefined;

    if (isSecondaryEditBox) TransformData();
    if (isCurCreate || isSecondaryEditBox) drawFullList();
  }
}

/** 鼠标右键 */
export function handleContextMenu(event: MouseEvent) {
  if (!commonParams) return;

  event.preventDefault();

  if (curCreatedBox.value) {
    const isL = curCreatedBox.value.points.length > 0;
    curCreatedBox.value = undefined;
    isL && drawFullList();
  } else if (secondaryEditBox) {
    reductionSecondaryEditBox();
    drawFullList();
  }
}

/** 创建新的方框 */
export function handleBeginDraw(type: number) {
  const item = typeList.value[type];
  if (!commonParams || !item) return;

  curCreatedBox.value = {
    ...item,
    points: [],
  };
  if (secondaryEditBox) reductionSecondaryEditBox();
}

type InitializationType = {
  src: string;
  boxList: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }[];
};
/** 初始化 */
export function initialization(config?: InitializationType) {
  boxList = [];
  secondaryEditBox = undefined;
  curCreatedBox.value = undefined;

  if (config) {
    const { src } = config;
    img.src = src;

    boxList = config.boxList
      .map((item) => {
        const typeItem = typeList.value.find((type) => type.name === item.name);
        if (!typeItem) return;

        const points: BoxItem["points"] = { ...item };
        /** @ts-ignore */
        delete points.name;
        return {
          id: _Utility_GenerateUUID(),
          name: item.name,
          color: typeItem.color,
          points,
        };
      })
      .filter(Boolean) as BoxItem[];

    img.onload = function () {
      scale = 1;
      offset.x = 0;
      offset.y = 0;
      drawFullList();
    };
  } else if (commonParams) {
    const { ctx, clientWidth, clientHeight } = commonParams;
    ctx.clearRect(
      offset.x,
      offset.y,
      clientWidth + offset.x,
      clientHeight + offset.y
    );
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
/** 添加方框类别 */
export function addBoxType() {
  const color = ref(getRandomColor());
  const name = ref("你好啊你好");
  window.$dialog.create({
    icon: renderIcon(CreateOutline),
    title: "添加方框类别",
    content: () =>
      h(
        NSpace,
        {
          vertical: true,
        },
        () => [
          h(NInput, {
            label: "类别名称",
            value: name.value,
            onUpdateValue: (value) => (name.value = value),
          }),
          h(NColorPicker, {
            modes: ["hex"],
            "show-alpha": false,
            label: "类别颜色",
            value: color.value,
            onUpdateValue: (value) => (color.value = value),
          }),
        ]
      ),
    positiveText: "添加",
    negativeText: "取消",
    onPositiveClick: () => {
      typeList.value.push({
        name: name.value,
        color: color.value,
      });
    },
  });
}

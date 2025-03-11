function IsValid(arr) {
  return (
    Array.isArray(arr) &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number" &&
    isFinite(arr[0]) &&
    isFinite(arr[1])
  );
}
/** 参数是否合法 */
function IsValids(arr) {
  return Array.isArray(arr) && arr.every(IsValid);
}

/** 通过坐标轴上的点 获取坐标轴上的值 */
function getAxisValueByPoint(x, y, gridConfig, count) {
  const xV = (x / gridConfig.size) * count;
  const yV = (y / gridConfig.size) * count;
  return { xV, yV };
}
/** 通过坐标轴上的值 获取坐标轴上的点 */
function getAxisPointByValue(xV, yV, gridConfig, count) {
  const x = (xV / count) * gridConfig.size;
  const y = (yV / count) * gridConfig.size;
  return { x, y };
}

/** 解析点位 */
function AnalyzeThePoint(pointList, config) {
  let { maxRadius, gridConfig, count, center, percentage } = config;

  const pointMap = new Map();

  for (let i = 0; i < pointList.length; i++) {
    const item = pointList[i];
    let { location, value, zIndex = 0, show = true, style } = item;
    if (style) maxRadius = Math.max(style.radius + style.width, maxRadius);
    const [isValue, isLocation] = [IsValid(value), IsValid(location)];
    if (!isValue && !isLocation) continue;
    if (isValue && !isLocation) {
      const loc = getAxisPointByValue(value[0], value[1], gridConfig, count);
      location = [loc.x, loc.y];
    } else if (!isValue && isLocation) {
      const val = getAxisValueByPoint(
        location[0],
        location[1],
        gridConfig,
        count
      );
      value = [val.xV, val.yV];
    }
    let [x, y] = location;
    x = center.x + x * percentage;
    y = center.y + y * percentage;
    const dynamicLocation = [x, y];

    /** 收集 */ {
      /** value[0] 大于等于 x */
      const x = Math.floor(value[0] / count) * count;
      /** value[1] 大于等于 y */
      const y = Math.floor(value[1] / count) * count;

      const xMap = pointMap.get(zIndex) || new Map();
      const yMap = xMap.get(x) || new Map();
      const list = yMap.get(y) || [];
      list.push({
        location,
        dynamicLocation,
        value,
        zIndex,
        show,
        style,
      });
      yMap.set(y, list);
      xMap.set(x, yMap);
      pointMap.set(zIndex, xMap);
    }
  }

  return pointMap;
}
/** 解析线段 */
function AnalyzeTheLine(lineList, config) {
  let { gridConfig, count, center, percentage } = config;

  const lineMap = new Map();
  for (let i = 0; i < lineList.length; i++) {
    let {
      location,
      value,
      zIndex = 0,
      show = true,
      style,
      infinite,
    } = lineList[i];

    const [isValue, isLocation] = [IsValids(value), IsValids(location)];
    if (!isValue && !isLocation) return;

    if (isValue && !isLocation) {
      location = [];
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const loc = getAxisPointByValue(item[0], item[1], gridConfig, count);
        location.push([loc.x, loc.y]);
      }
    } else if (!isValue && isLocation) {
      value = [];
      for (let i = 0; i < location.length; i++) {
        const item = location[i];
        const val = getAxisValueByPoint(item[0], item[1], gridConfig, count);
        value.push([val.xV, val.yV]);
      }
    }

    const dynamicLocation = [];
    for (let i = 0; i < location.length; i++) {
      let [x, y] = location[i];
      x = center.x + x * percentage;
      y = center.y + y * percentage;
      dynamicLocation.push([x, y]);
    }

    const list = (lineMap.get(zIndex) || []).concat({
      location,
      dynamicLocation,
      value,
      zIndex,
      show,
      style,
      infinite: infinite && location?.length == 2,
    });
    lineMap.set(zIndex, list);
  }

  return lineMap;
}

self.onmessage = function (event) {
  const data = event.data;
  const { type, config, list } = data;

  // let t = performance.now();
  let result;
  if (type == "point") result = AnalyzeThePoint(list, config);
  else if (type == "line") result = AnalyzeTheLine(list, config);
  // console.log("worker.js 耗时：", performance.now() - t + " ms");

  self.postMessage(result);
};

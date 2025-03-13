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
/** 计算点位位置 */
function CalculatePointPosition(locationList, config) {
  const { center, percentage, axisConfig } = config;

  const dynamicLocation = [];
  for (let i = 0; i < locationList.length; i++) {
    let [x, y] = locationList[i];
    x = center.x + x * percentage * axisConfig.x;
    y = center.y + y * percentage * axisConfig.y;
    dynamicLocation.push([x, y]);
  }
  return dynamicLocation;
}

/** 通过坐标轴上的点 获取坐标轴上的值 */
function getAxisValueByPoint(x, y, axisConfig) {
  const xV = (x / axisConfig.size) * axisConfig.count;
  const yV = (y / axisConfig.size) * axisConfig.count;
  return { xV, yV };
}
/** 通过坐标轴上的值 获取坐标轴上的点 */
function getAxisPointByValue(xV, yV, axisConfig) {
  const x = (xV / axisConfig.count) * axisConfig.size;
  const y = (yV / axisConfig.count) * axisConfig.size;
  return { x, y };
}

/** 解析点位 */
function AnalyzeThePoint(pointList, config) {
  let { maxRadius, axisConfig, center, percentage } = config;

  const count = axisConfig.count;
  const pointMap = new Map();

  /** 异常数据 */
  const errorList = [];

  for (let i = 0; i < pointList.length; i++) {
    const item = pointList[i];
    let { location, value, zIndex = 0, show = true, style } = item;
    if (style) maxRadius = Math.max(style.radius + style.width, maxRadius);
    const [isValue, isLocation] = [IsValid(value), IsValid(location)];
    if (!isValue && !isLocation) {
      errorList.push(item);
      continue;
    }
    if (isValue && !isLocation) {
      const loc = getAxisPointByValue(value[0], value[1], axisConfig);
      location = [loc.x, loc.y];
    } else if (!isValue && isLocation) {
      const val = getAxisValueByPoint(location[0], location[1], axisConfig);
      value = [val.xV, val.yV];
    }

    const dynamicLocation = CalculatePointPosition([location], {
      center,
      percentage,
      axisConfig,
    })[0];

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

  if (errorList.length) console.warn("点位数据异常", errorList);

  return { pointMap, maxRadius };
}
/** 解析线段 */
function AnalyzeTheLine(lineList, config) {
  let { axisConfig, center, percentage } = config;

  const lineMap = new Map();

  /** 异常数据 */
  const errorList = [];

  for (let i = 0; i < lineList.length; i++) {
    let {
      location,
      value,
      zIndex = 0,
      show = true,
      style,
      infinite,
    } = lineList[i];

    const [isValue, isLocation] = [
      IsValids(value) && value.length > 1,
      IsValids(location) && location.length > 1,
    ];
    if (!isValue && !isLocation) {
      errorList.push(lineList[i]);
      continue;
    }

    if (isValue && !isLocation) {
      location = [];
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const loc = getAxisPointByValue(item[0], item[1], axisConfig);
        location.push([loc.x, loc.y]);
      }
    } else if (!isValue && isLocation) {
      value = [];
      for (let i = 0; i < location.length; i++) {
        const item = location[i];
        const val = getAxisValueByPoint(item[0], item[1], axisConfig);
        value.push([val.xV, val.yV]);
      }
    }

    const dynamicLocation = CalculatePointPosition(location, {
      center,
      percentage,
      axisConfig,
    });

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

  if (errorList.length) console.warn("线段数据异常", errorList);

  return lineMap;
}
/** 解析面 */
function AnalyzeThePolygon(polygonList, config) {
  let { axisConfig, center, percentage } = config;
  const polygonMap = new Map();

  /** 异常数据 */
  const errorList = [];

  for (let i = 0; i < polygonList.length; i++) {
    let {
      location,
      value,
      zIndex = 0,
      show = true,
      style,
      size,
    } = polygonList[i];

    const [isValue, isLocation, isRect] = [
      IsValids(value),
      IsValids(location),
      IsValid(size),
    ];

    if (isRect) {
      if (!isValue && !isLocation) {
        errorList.push(polygonList[i]);
        continue;
      }
      if (isLocation) location.length = 1;
      if (isValue) value.length = 1;
    } else {
      if (
        (isValue && value.length < 3) ||
        (isLocation && location.length < 3)
      ) {
        errorList.push(polygonList[i]);
        continue;
      }
      size = undefined;
    }

    if (isValue && !isLocation) {
      location = [];
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const loc = getAxisPointByValue(item[0], item[1], axisConfig);
        location.push([loc.x, loc.y]);
      }
    } else if (!isValue && isLocation) {
      value = [];
      for (let i = 0; i < location.length; i++) {
        const item = location[i];
        const val = getAxisValueByPoint(item[0], item[1], axisConfig);
        value.push([val.xV, val.yV]);
      }
    }

    const dynamicLocation = CalculatePointPosition(location, {
      center,
      percentage,
      axisConfig,
    });
    const dynamicSize = [];
    if (isRect) {
      const [width, height] = size;
      dynamicSize[0] = width * percentage * axisConfig.x;
      dynamicSize[1] = height * percentage * axisConfig.y;
    }

    const list = (polygonMap.get(zIndex) || []).concat({
      location,
      dynamicLocation,
      value,
      zIndex,
      show,
      style,
      size,
      dynamicSize,
    });
    polygonMap.set(zIndex, list);
  }

  if (errorList.length) console.warn("面数据异常", errorList);

  return polygonMap;
}

self.onmessage = function (event) {
  const data = event.data;
  const { type, config, list } = data;

  // let t = performance.now();
  let result;
  if (type == "point") result = AnalyzeThePoint(list, config);
  else if (type == "line") result = AnalyzeTheLine(list, config);
  else if (type == "polygon") result = AnalyzeThePolygon(list, config);
  // console.log("worker.js 耗时：", performance.now() - t + " ms");

  self.postMessage(result);
};

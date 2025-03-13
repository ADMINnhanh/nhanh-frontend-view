const url = new URL("../worker/worker.js", import.meta.url);

type PublicConfig = {
  axisConfig: {
    count: number;
    min: number;
    max: number;
    size: number;
  };
  center: {
    x: number;
    y: number;
  };
  percentage: number;
};

type PointData = {
  type: "point";
  list: PointListType;
  config: PublicConfig & {
    maxRadius: number;
  };
};
type LineData = {
  type: "line";
  list: LineListType;
  config: PublicConfig;
};
type PolygonData = {
  type: "polygon";
  list: PolygonListType;
  config: PublicConfig;
};

type WorkerData = PointData | LineData | PolygonData;

export default function _Worker(
  data: WorkerData,
  callback: (data: any) => void
) {
  const worker = new Worker(url);
  worker.postMessage(data);
  worker.onmessage = (event) => {
    callback(event.data);
    // 任务完成后，终止 Worker
    worker.terminate();
  };
  // 监听 Worker 的错误事件
  worker.onerror = (error) => {
    console.error("Worker error:", error.message);
    // 发生错误时，终止 Worker
    worker.terminate();
  };
}

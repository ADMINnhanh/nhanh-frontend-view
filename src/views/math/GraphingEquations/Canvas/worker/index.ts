const url = new URL("../worker/worker.js", import.meta.url);

type WorkerData = {
  type: "point";
  list: PointListType;
  config: {
    maxRadius: number;
    gridConfig: {
      count: number;
      min: number;
      max: number;
      size: number;
    };
    count: number;
    center: {
      x: number;
      y: number;
    };
    percentage: number;
  };
};

export default function _Worker(
  data: WorkerData,
  callback?: (data: any) => void
) {
  const worker = new Worker(url);
  worker.postMessage(data);
  worker.onmessage = (event) => callback?.(event.data);
}

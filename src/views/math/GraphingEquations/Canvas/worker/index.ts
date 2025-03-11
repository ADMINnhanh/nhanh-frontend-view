const url = new URL("../worker/worker.js", import.meta.url);

type PublicConfig = {
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
type WorkerData = PointData | LineData;

export default function _Worker(
  data: WorkerData,
  callback?: (data: any) => void
) {
  const worker = new Worker(url);
  worker.postMessage(data);
  worker.onmessage = (event) => callback?.(event.data);
}

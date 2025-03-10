const url = new URL("../worker/worker.js", import.meta.url);

export default function _Worker(data: any, callback?: (data: any) => void) {
  const worker = new Worker(url);
  worker.postMessage(data);
  worker.onmessage = (event) => callback?.(event.data);
}

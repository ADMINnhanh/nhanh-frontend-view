import { readChunkId } from "./main";

export default function RIFFParser(buffer: ArrayBuffer) {
  const dataView = new DataView(buffer);
  const RIFF = readChunkId(dataView, 0, 4);
  const size = new DataView(buffer.slice(4, 8)).getUint32(0, true);
  const WAVE = readChunkId(dataView, 8, 4);

  return RIFF == "RIFF" && size == buffer.byteLength - 8 && WAVE == "WAVE";
}

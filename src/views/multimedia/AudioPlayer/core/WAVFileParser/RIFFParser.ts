import { readChunkId } from "./main";

export default function RIFFParser(dataView: DataView) {
  const RIFF = readChunkId(dataView, 0, 4);
  const size = dataView.getUint32(4, true);
  const WAVE = readChunkId(dataView, 8, 4);

  return RIFF == "RIFF" && size == dataView.byteLength - 8 && WAVE == "WAVE";
}

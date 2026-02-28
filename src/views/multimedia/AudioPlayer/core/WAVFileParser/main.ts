import decodeAudioToPcmS16le from "../ffmpeg";

export default async function MP3FileParser(file: File) {
  const buffer = await file.arrayBuffer();
  const fileSize = buffer.byteLength;

  const pcm = await decodeAudioToPcmS16le(file, {});
  if (!pcm) return null;

  return {
    fileSize,
    pcm,
  };
}

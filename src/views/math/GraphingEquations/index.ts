import { _GenerateUUID } from "nhanh-pure-function";
import { DrawAxisAndGrid } from "./AxisAndGrid";
import { watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";

export const baseData = {
  id: "canvas-" + _GenerateUUID(),
  ctx: {} as CanvasRenderingContext2D,
  width: 0,
  height: 0,
  offset: { x: 0, y: 0 },
  centent: { x: 0, y: 0 },
  scale: 1,
  gridSize: { min: 75, max: 200, size: 75 },
};

export function InitBaseData() {
  const canvas = document.getElementById(baseData.id) as HTMLCanvasElement;
  const { clientWidth, clientHeight } = canvas;
  canvas.width = clientWidth;
  canvas.height = clientHeight;

  Object.assign(baseData, {
    ctx: canvas.getContext("2d"),
    offset: { x: 0, y: 0 },
    centent: { x: clientWidth / 2, y: clientHeight / 2 },
    scale: 1,
    width: clientWidth,
    height: clientHeight,
    gridSize: { min: 75, max: 200, size: 75 },
  });
}

export function UpdateCanvas() {
  const { ctx, width, height } = baseData;
  ctx?.clearRect(0, 0, width, height);

  DrawAxisAndGrid();
}

export function Init() {
  InitBaseData();
  UpdateCanvas();
}

watch(() => Settings.value.theme, UpdateCanvas);

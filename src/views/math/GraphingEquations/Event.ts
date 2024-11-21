import { graphingEquations } from ".";

/** 鼠标是否在画布内 */
let mouseInCanvas = false;

/** 鼠标移入 */
export function MouseInCanvas() {
  mouseInCanvas = true;
}
/** 鼠标移出 */
export function MouseOutCanvas() {
  mouseInCanvas = false;
}
/** 鼠标滚轮滚动 */
function HandleWheel(event: WheelEvent) {
  if (!mouseInCanvas) return;

  const { deltaY } = event;

  graphingEquations.value?.updateScale(deltaY < 0);

  // let size = (Math.abs(graphingEquations.scale - 1) % (cycle * delta)) / delta;
  // size = Math.round(graphingEquations.scale < 1 ? cycle - size : size);

  // graphingEquations.gridSize.size =
  //   (size / cycle) * (graphingEquations.gridSize.max - graphingEquations.gridSize.min) +
  //   graphingEquations.gridSize.min;

  // let { x, y } = graphingEquations.canvas.getBoundingClientRect();
  // x += graphingEquations.centent.x;
  // y += graphingEquations.centent.y;

  // /** 鼠标距离中心的偏移量 */
  // const difference = {
  //   x: ((clientX - x) / oldScale) * graphingEquations.scale - (clientX - x),
  //   y: ((clientY - y) / oldScale) * graphingEquations.scale - (clientY - y),
  // };

  // graphingEquations.offset.x +=
  //   (deltaY > 0 ? Math.abs(difference.x) : -Math.abs(difference.x)) *
  //   (clientX > x ? 1 : clientX < x ? -1 : 0);
  // graphingEquations.offset.y +=
  //   (deltaY > 0 ? Math.abs(difference.y) : -Math.abs(difference.y)) *
  //   (clientY > y ? 1 : clientY < y ? -1 : 0);
}

window.addEventListener("wheel", HandleWheel);

/** 鼠标是否按下 */
let mouseIsDown = false;
/** 鼠标位置 */
export const mousePosition = { x: 0, y: 0 };
/** 鼠标按下 */
export function MouseDown(event: MouseEvent) {
  document.body.classList.add("no-select");
  graphingEquations.value!.canvas.style.cursor = "grabbing";
  mouseIsDown = true;
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
}
/** 鼠标抬起 */
function MouseUp() {
  if (!mouseIsDown) return;
  document.body.classList.remove("no-select");
  graphingEquations.value!.canvas.style.cursor = "grab";
  mouseIsDown = false;
}
/** 鼠标移动 */
function MouseMove(event: MouseEvent) {
  const { clientX, clientY } = event;

  if (mouseIsDown) {
    graphingEquations.value?.updateOffset({
      x: clientX - mousePosition.x,
      y: clientY - mousePosition.y,
    });
  }

  mousePosition.x = clientX;
  mousePosition.y = clientY;
}

window.addEventListener("mouseup", MouseUp);
window.addEventListener("mousemove", MouseMove);

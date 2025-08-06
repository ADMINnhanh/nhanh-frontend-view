<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import { onMounted, onUnmounted } from "vue";
/** @ts-ignore */
import { init } from "./shared-orbitcontrols.js";

const id = _Utility_GenerateUUID();

const mouseEventHandler = makeSendPropertiesHandler([
  "ctrlKey",
  "metaKey",
  "shiftKey",
  "button",
  "pointerType",
  "clientX",
  "clientY",
  "pointerId",
  "pageX",
  "pageY",
]);
const wheelEventHandlerImpl = makeSendPropertiesHandler(["deltaX", "deltaY"]);
const keydownEventHandler = makeSendPropertiesHandler([
  "ctrlKey",
  "metaKey",
  "shiftKey",
  "keyCode",
]);

function wheelEventHandler(event: { preventDefault: () => void }, sendFn: any) {
  event.preventDefault();
  wheelEventHandlerImpl(event as any, sendFn);
}

function preventDefaultHandler(event: { preventDefault: () => void }) {
  event.preventDefault();
}

function copyProperties(
  src: { [x: string]: any },
  properties: any,
  dst: { [x: string]: any; type?: any }
) {
  for (const name of properties) {
    dst[name] = src[name];
  }
}

function makeSendPropertiesHandler(properties: string[]) {
  return function sendProperties(
    event: { type: any },
    sendFn: (arg0: { type: any }) => void
  ) {
    const data = { type: event.type };
    copyProperties(event, properties, data);
    sendFn(data);
  };
}

function touchEventHandler(
  event: { preventDefault: () => void; type: any; touches: string | any[] },
  sendFn: (arg0: { type: any; touches: any[] }) => void
) {
  // preventDefault() fixes mousemove, mouseup and mousedown
  // firing at touch events when doing a simple touchup touchdown
  // Happens only at offscreen canvas
  event.preventDefault();
  const touches: { pageX: any; pageY: any; clientX: any; clientY: any }[] = [];
  const data = { type: event.type, touches };
  for (let i = 0; i < event.touches.length; ++i) {
    const touch = event.touches[i];
    touches.push({
      pageX: touch.pageX,
      pageY: touch.pageY,
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
  }

  sendFn(data);
}

// The four arrow keys
const orbitKeys = {
  "37": true, // left
  "38": true, // up
  "39": true, // right
  "40": true, // down
};
function filteredKeydownEventHandler(
  event: { preventDefault?: any; keyCode?: any },
  sendFn: any
) {
  const { keyCode } = event;
  if (orbitKeys[keyCode as keyof typeof orbitKeys]) {
    event.preventDefault();
    keydownEventHandler(event as any, sendFn);
  }
}

let nextProxyId = 0;
class ElementProxy {
  constructor(
    element: {
      addEventListener: (arg0: string, arg1: (event: any) => void) => void;
      getBoundingClientRect: () => any;
      clientWidth: any;
      clientHeight: any;
    },
    worker: Worker,
    eventHandlers: { [s: string]: unknown } | ArrayLike<unknown>
  ) {
    const self = this as any;
    self.id = nextProxyId++;
    self.worker = worker;
    const sendEvent = (data: {
      type: string;
      left: any;
      top: any;
      width: any;
      height: any;
    }) => {
      self.worker.postMessage({
        type: "event",
        id: self.id,
        data,
      });
    };

    // register an id
    worker.postMessage({
      type: "makeProxy",
      id: self.id,
    });
    sendSize();
    for (const [eventName, handler] of Object.entries(eventHandlers)) {
      element.addEventListener(eventName, function (event: any) {
        (handler as any)(event, sendEvent);
      });
    }

    function sendSize() {
      const rect = element.getBoundingClientRect();
      sendEvent({
        type: "size",
        left: rect.left,
        top: rect.top,
        width: element.clientWidth,
        height: element.clientHeight,
      });
    }

    // really need to use ResizeObserver
    window.addEventListener("resize", sendSize);
  }
}

let worker: Worker;
function startWorker(canvas: HTMLCanvasElement) {
  canvas.focus();
  const offscreen = canvas.transferControlToOffscreen();
  worker = new Worker(
    new URL("./offscreencanvas-worker-orbitcontrols.js", import.meta.url),
    { type: "module" }
  );

  const eventHandlers = {
    contextmenu: preventDefaultHandler,
    mousedown: mouseEventHandler,
    mousemove: mouseEventHandler,
    mouseup: mouseEventHandler,
    pointerdown: mouseEventHandler,
    pointermove: mouseEventHandler,
    pointerup: mouseEventHandler,
    touchstart: touchEventHandler,
    touchmove: touchEventHandler,
    touchend: touchEventHandler,
    wheel: wheelEventHandler,
    keydown: filteredKeydownEventHandler,
  };
  const proxy = new ElementProxy(canvas, worker, eventHandlers) as any;
  worker.postMessage(
    {
      type: "start",
      canvas: offscreen,
      canvasId: proxy.id,
    },
    [offscreen]
  );
  console.log("using OffscreenCanvas"); /* eslint-disable-line no-console */
}

let play = true;
function isPlaying() {
  return play;
}
function startMainPage(canvas: Element | null) {
  init({ canvas, inputElement: canvas }, isPlaying);
  console.log("using regular canvas"); /* eslint-disable-line no-console */
}
function main() {
  /* eslint consistent-return: 0 */

  const canvas = document.getElementById(id) as HTMLCanvasElement;
  /** @ts-ignore */
  if (canvas.transferControlToOffscreen) {
    startWorker(canvas);
  } else {
    startMainPage(canvas);
  }
}

onMounted(() => {
  main();
});
onUnmounted(() => {
  play = false;
  worker?.terminate();
});
</script>

<template>
  <canvas :id="id" />
</template>

<style lang="less" scoped></style>

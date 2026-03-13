<script setup lang="ts">
import {
  _Utility_GenerateUUID,
  _Canvas,
  type Polygon,
  type Line,
  type EventHandler,
  type OverlayType,
} from "nhanh-pure-function";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";

const id = _Utility_GenerateUUID();
let myCanvas = shallowRef<_Canvas>();
/**
 * 负责在画布上创建覆盖物（点、线、多边形、文本等）的管理类实例
 */
let overlayCreator: CanvasOverlayCreator;

/**
 * 管理单次「创建覆盖物」交互生命周期的类
 */
class CanvasOverlayCreator {
  /** 目标画布实例 */
  private canvas: _Canvas;
  /** 专门用于绘制用户正在创建的覆盖物的图层，放到最顶层以确保可见 */
  private overlayLayer = new _Canvas.Layer({
    name: "creator-layer",
    zIndex: 9999,
  });
  /** 图层中的覆盖物分组，便于统一清理 */
  private overlayGroup = new _Canvas.OverlayGroup({ name: "creator-group" });

  /** 当前正在创建或选中的覆盖物实例 */
  private overlay?: Polygon | Line;
  constructor(canvas: _Canvas) {
    this.canvas = canvas;

    /** 将覆盖物分组挂到图层中，再把图层加入画布 */
    this.overlayLayer.addGroup(this.overlayGroup);
    canvas.addLayer(this.overlayLayer);

    canvas.addEventListener("click", this.handleClick);
    canvas.addEventListener("contextmenu", this.handleContextmenu);
  }

  /**
   * 开启某种类型覆盖物的创建流程
   */
  create(type: "polygon" | "line") {
    if (type === "polygon") this.createPolygon();
    else if (type === "line") this.createLine();
  }
  createLine() {
    this.overlay = new _Canvas.Line({});
    this.overlayGroup.addOverlays(this.overlay);
  }
  createPolygon() {
    this.overlay = new _Canvas.Polygon({});
    this.overlayGroup.addOverlays(this.overlay);
  }

  finish?: (overlay?: Polygon | Line) => void;
  /**
   * 清空当前图层中的所有覆盖物
   */
  clear() {
    this.overlayGroup.clearOverlays();
    this.overlay = undefined;
  }

  /**
   * 画布左键点击事件，用于响应创建覆盖物时的点击交互
   */
  private handleClick: EventHandler<"click"> = (event, mouse) => {
    if (!this.overlay || !mouse) return;
    const point = this.canvas.getMousePositionOnAxis(mouse);
    if (point) {
      const position = [...(this.overlay.position || []), [point.x, point.y]];
      this.overlay.position = position as any;
    }
  };
  /**
   * 画布右键菜单事件，可用于取消创建或弹出上下文菜单
   */
  private handleContextmenu: EventHandler<"contextmenu"> = (event, mouse) => {
    if (!this.overlay) return;
    if (this.finish) {
      const length = this.overlay.value?.length || 0;
      if (this.overlay instanceof _Canvas.Polygon) {
        if (length > 2) this.finish(this.overlay);
      } else if (this.overlay instanceof _Canvas.Line) {
        if (length > 1) this.finish(this.overlay);
      }
    }
    this.clear();
  };
}

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
  });
  /** 用于在当前画布上管理覆盖物创建交互 */
  overlayCreator = new CanvasOverlayCreator(myCanvas.value);
  overlayCreator.finish = (overlay) => {
    console.log(overlay);
  };
  overlayCreator.createPolygon();
});
defineExpose({ myCanvas });
</script>

<template>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

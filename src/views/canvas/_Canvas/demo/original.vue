<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";

const id = _GenerateUUID();
let myCanvas = shallowRef<_Canvas>();

onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value.setTheme(Settings.value.theme);
});
defineExpose({ myCanvas });
</script>

<template>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

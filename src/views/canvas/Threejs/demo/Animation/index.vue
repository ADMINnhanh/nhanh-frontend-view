<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { markRaw, onMounted, onUnmounted, ref, watch } from "vue";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";
import { NRadio, NRadioGroup, NSpace } from "naive-ui";

const id = _Utility_GenerateUUID();
let play = true;

const percentage = ref(0);

const animations = ref<{ [key: string]: Map<string, THREE.AnimationAction> }>(
  {}
);
const activeAnimations = ref<string>();
watch(activeAnimations, (name, oldName) => {
  if (oldName) {
    for (const [url, animation] of animations.value[oldName]) {
      if (name) {
        const newAnimation = animations.value[name].get(url);
        if (newAnimation) {
          // 重置新动画状态并设置淡入
          newAnimation.reset().setEffectiveTimeScale(1).setEffectiveWeight(1);
          animation.crossFadeTo(newAnimation, 0.5, true);
        } else animation.stop();
      } else animation.stop();
    }
  }

  if (name) {
    for (const [url, animation] of animations.value[name]) {
      animation.reset().play();
    }
  }
});

function main() {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 45;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 20, 40);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("white");

  function addLight(...pos: [number, number, number]) {
    const color = 0xffffff;
    const intensity = 2.5;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...pos);
    scene.add(light);
    scene.add(light.target);
  }

  addLight(5, 5, 2);
  addLight(-5, 5, 5);

  const manager = new THREE.LoadingManager();
  manager.onLoad = init;

  manager.onProgress = (url, itemsLoaded, itemsTotal) => {
    percentage.value = Number((itemsLoaded / itemsTotal).toFixed(2)) * 100;
  };

  const models: Record<string, any> = {
    pig: { url: "/gltf/Pig.gltf" },
    cow: { url: "/gltf/Cow.gltf" },
    llama: { url: "/gltf/Llama.gltf" },
    pug: { url: "/gltf/Pug.gltf" },
    sheep: { url: "/gltf/Sheep.gltf" },
    zebra: { url: "/gltf/Zebra.gltf" },
    horse: { url: "/gltf/Horse.gltf" },
    knight: { url: "/gltf/KnightCharacter.gltf" },
  };

  {
    const gltfLoader = new GLTFLoader(manager);
    for (const model of Object.values(models)) {
      gltfLoader.load(model.url, (gltf) => {
        model.gltf = gltf;
      });
    }
  }

  function prepModelsAndAnimations() {
    Object.values(models).forEach((model) => {
      const animsByName: any = {};
      model.gltf.animations.forEach((clip: any) => {
        animsByName[clip.name] = clip;
      });
      model.animations = animsByName;
    });
  }

  const mixers: THREE.AnimationMixer[] = [];

  function init() {
    prepModelsAndAnimations();

    Object.values(models).forEach((model: any, ndx) => {
      const clonedScene = SkeletonUtils.clone(model.gltf.scene);
      const root = new THREE.Object3D();
      root.add(clonedScene);
      scene.add(root);
      root.position.x = (ndx - 3) * 3;

      const mixer = new THREE.AnimationMixer(clonedScene);

      for (const key in model.animations) {
        if (Object.prototype.hasOwnProperty.call(model.animations, key)) {
          const firstClip = model.animations[key];
          if (!animations.value[key as string])
            animations.value[key as string] = new Map();

          animations.value[key as string].set(
            model.url,
            markRaw(mixer.clipAction(firstClip))
          );
        }
      }

      mixers.push(mixer);
    });
  }

  function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }

    return needResize;
  }

  let then = 0;
  function render(now: number) {
    now *= 0.001; // convert to seconds
    const deltaTime = now - then;
    then = now;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    for (const mixer of mixers) {
      mixer.update(deltaTime);
    }

    renderer.render(scene, camera);

    play && requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

onMounted(() => {
  main();
});
onUnmounted(() => {
  play = false;
});

defineExpose({
  percentage,
});
</script>

<template>
  <canvas :id="id" />
  <NRadioGroup v-model:value="activeAnimations">
    <NSpace vertical>
      <NRadio v-for="(_, key) in animations" :key="key" :value="key">{{
        key
      }}</NRadio>
    </NSpace>
  </NRadioGroup>
</template>

<style lang="less" scoped>
.n-radio-group {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>

<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";
import { onMounted, onUnmounted } from "vue";

const id = _Utility_GenerateUUID();

// 日地距离与地球直径的比例（约11730:1）
const earthSunDistanceToDiameterRatio = 11730 / 1000;
// 太阳直径与地球直径的比例（约109:1）
const sunToEarthDiameterRatio = 109 / 1000;

function main() {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 60;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2.5;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 1.2;
  controls.maxDistance = 4;
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("black");

  {
    const loader = new THREE.TextureLoader();
    const texture = loader.load("three/world.jpg", render);
    texture.colorSpace = THREE.SRGBColorSpace;
    const geometry = new THREE.SphereGeometry(1, 64, 32);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    scene.add(new THREE.Mesh(geometry, material));
  }

  {
    const color = 0xffffff;
    const intensity = 500;
    const light = new THREE.PointLight(color, intensity);
    light.position.set(-earthSunDistanceToDiameterRatio, 0, 0);
    scene.add(light);

    const geometry = new THREE.SphereGeometry(sunToEarthDiameterRatio, 64, 32);
    const material = new THREE.MeshPhongMaterial({ emissive: "#F0AE20" });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-earthSunDistanceToDiameterRatio, 0, 0);
    scene.add(mesh);
  }

  async function loadFile(url: string | URL | Request) {
    const req = await fetch(url);
    return req.text();
  }

  function parseData(text: string) {
    const data: (number | undefined)[][] = [];
    const settings = { data } as any;
    let max: number | undefined;
    let min: number | undefined;
    // split into lines
    text.split("\n").forEach((line) => {
      // split the line by whitespace
      const parts = line.trim().split(/\s+/);
      if (parts.length === 2) {
        // only 2 parts, must be a key/value pair
        settings[parts[0]] = parseFloat(parts[1]);
      } else if (parts.length > 2) {
        // more than 2 parts, must be data
        const values = parts.map((v) => {
          const value = parseFloat(v);
          if (value === settings.NODATA_value) {
            return undefined;
          }

          max = Math.max(max === undefined ? value : max, value);
          min = Math.min(min === undefined ? value : min, value);
          return value;
        });
        data.push(values);
      }
    });
    return Object.assign(settings, { min, max });
  }

  function addBoxes(file: {
    xllcorner?: any;
    yllcorner?: any;
    min?: any;
    max?: any;
    data?: any;
  }) {
    const { min, max, data } = file;
    const range = max - min;

    // these helpers will make it easy to position the boxes
    // We can rotate the lon helper on its Y axis to the longitude
    const lonHelper = new THREE.Object3D();
    scene.add(lonHelper);
    // We rotate the latHelper on its X axis to the latitude
    const latHelper = new THREE.Object3D();
    lonHelper.add(latHelper);
    // The position helper moves the object to the edge of the sphere
    const positionHelper = new THREE.Object3D();
    positionHelper.position.z = 1;
    latHelper.add(positionHelper);
    // Used to move the center of the cube so it scales from the position Z axis
    const originHelper = new THREE.Object3D();
    originHelper.position.z = 0.5;
    positionHelper.add(originHelper);

    const color = new THREE.Color();
    const lonFudge = Math.PI * 1.5;
    const latFudge = Math.PI * -(85 / 90 / 2);

    const geometries: THREE.BufferGeometry<
      THREE.NormalBufferAttributes,
      THREE.BufferGeometryEventMap
    >[] = [];
    data.forEach((row: any[], latNdx: number) => {
      row.forEach((value, lonNdx) => {
        if (value === undefined) {
          return;
        }

        const amount = (value - min) / range;

        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

        // adjust the helpers to point to the latitude and longitude
        lonHelper.rotation.y = THREE.MathUtils.degToRad(lonNdx) + lonFudge;
        latHelper.rotation.x = THREE.MathUtils.degToRad(latNdx) + latFudge;

        // use the world matrix of the origin helper to
        // position this geometry
        positionHelper.scale.set(
          0.005,
          0.005,
          THREE.MathUtils.lerp(0.01, 0.5, amount)
        );
        originHelper.updateWorldMatrix(true, false);
        geometry.applyMatrix4(originHelper.matrixWorld);

        // 计算颜色
        const hue = THREE.MathUtils.lerp(0.7, 0.3, amount);
        const saturation = 1;
        const lightness = THREE.MathUtils.lerp(0.4, 1.0, amount);
        color.setHSL(hue, saturation, lightness);
        // 以0到255之间的值数组形式获取颜色
        const rgb = color.toArray().map((v) => v * 255);

        // 创建一个数组来存储每个顶点的颜色
        const numVerts = geometry.getAttribute("position").count;
        const itemSize = 3; // r, g, b
        const colors = new Uint8Array(itemSize * numVerts);

        // 将颜色复制到每个顶点的颜色数组中
        colors.forEach((v, ndx) => {
          colors[ndx] = rgb[ndx % 3];
        });

        const normalized = true;
        const colorAttrib = new THREE.BufferAttribute(
          colors,
          itemSize,
          normalized
        );
        geometry.setAttribute("color", colorAttrib);

        geometries.push(geometry);
      });
    });

    const mergedGeometry = BufferGeometryUtils.mergeGeometries(
      geometries,
      false
    );
    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
    });
    const mesh = new THREE.Mesh(mergedGeometry, material);
    scene.add(mesh);
  }

  loadFile(
    "three/gpw_v4_basic_demographic_characteristics_rev10_a000_014mt_2010_cntm_1_deg.asc"
  )
    .then(parseData)
    .then(addBoxes)
    .then(render);

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

  let renderRequested = false;

  function render() {
    renderRequested = false;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    controls.update();
    renderer.render(scene, camera);
  }

  render();

  function requestRenderIfNotRequested() {
    if (!renderRequested) {
      renderRequested = true;
      requestAnimationFrame(render);
    }
  }

  controls.addEventListener("change", requestRenderIfNotRequested);
  window.addEventListener("resize", requestRenderIfNotRequested);
  onUnmounted(() => {
    window.removeEventListener("resize", requestRenderIfNotRequested);
  });
}

onMounted(() => {
  main();
});
</script>

<template>
  <canvas :id="id" />
</template>

<style lang="less" scoped></style>

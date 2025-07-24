<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { onMounted, onUnmounted } from "vue";

const id = _Utility_GenerateUUID();

let play = true;
function main() {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.shadowMap.enabled = true;

  const fov = 45;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#DEFEFF");

  {
    const skyColor = 0xb1e1ff; // light blue
    const groundColor = 0xb97a20; // brownish orange
    const intensity = 2;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xffffff;
    const intensity = 2.5;
    const light = new THREE.DirectionalLight(color, intensity);
    light.castShadow = true;
    light.position.set(-5, 1.4, 0.6);
    light.target.position.set(0, 0, 0);

    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    scene.add(light);
    scene.add(light.target);

    const cam = light.shadow.camera;
    cam.near = 1;
    cam.far = 10;
    cam.left = -4;
    cam.right = 2;
    cam.top = 2;
    cam.bottom = -2;

    const cameraHelper = new THREE.CameraHelper(cam);
    scene.add(cameraHelper);
    cameraHelper.visible = false;

    const helper = new THREE.DirectionalLightHelper(light);
    scene.add(helper);
    helper.visible = false;

    function updateCamera() {
      // update the light target's matrixWorld because it's needed by the helper
      light.updateMatrixWorld();
      light.target.updateMatrixWorld();
      helper.update();
      // update the light's shadow camera's projection matrix
      light.shadow.camera.updateProjectionMatrix();
      // and now update the camera helper we're using to show the light's shadow camera
      cameraHelper.update();
    }

    updateCamera();
  }

  function frameArea(
    sizeToFitOnScreen: number,
    boxSize: number,
    boxCenter: THREE.Vector3Like,
    camera: THREE.PerspectiveCamera
  ) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = new THREE.Vector3()
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    const vector3 = direction.multiplyScalar(distance).add(boxCenter);
    vector3.y += sizeToFitOnScreen * 0.3;
    vector3.z -= sizeToFitOnScreen * 2;
    vector3.x -= sizeToFitOnScreen * 1.5;
    camera.position.copy(vector3);

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  let curve: THREE.CatmullRomCurve3;
  let curveObject: THREE.Object3D<THREE.Object3DEventMap>;
  {
    const controlPoints = [
      [1.118281, 5.115846, -3.681386],
      [3.948875, 5.115846, -3.641834],
      [3.960072, 5.115846, -0.240352],
      [3.985447, 5.115846, 4.585005],
      [-3.793631, 5.115846, 4.585006],
      [-3.826839, 5.115846, -14.7362],
      [-14.542292, 5.115846, -14.765865],
      [-14.520929, 5.115846, -3.627002],
      [-5.452815, 5.115846, -3.634418],
      [-5.467251, 5.115846, 4.549161],
      [-13.266233, 5.115846, 4.567083],
      [-13.250067, 5.115846, -13.499271],
      [4.081842, 5.115846, -13.435463],
      [4.125436, 5.115846, -5.334928],
      [-14.521364, 5.115846, -5.239871],
      [-14.510466, 5.115846, 5.486727],
      [5.745666, 5.115846, 5.510492],
      [5.787942, 5.115846, -14.728308],
      [-5.42372, 5.115846, -14.761919],
      [-5.373599, 5.115846, -3.704133],
      [1.004861, 5.115846, -3.641834],
    ];
    const p0 = new THREE.Vector3();
    const p1 = new THREE.Vector3();
    curve = new THREE.CatmullRomCurve3(
      controlPoints
        .map((p, ndx) => {
          p0.set(...p);
          p1.set(...controlPoints[(ndx + 1) % controlPoints.length]);
          return [
            new THREE.Vector3().copy(p0),
            new THREE.Vector3().lerpVectors(p0, p1, 0.1),
            new THREE.Vector3().lerpVectors(p0, p1, 0.9),
          ];
        })
        .flat(),
      true
    );
    {
      const points = curve.getPoints(250);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
      curveObject = new THREE.Line(geometry, material);
      curveObject.scale.set(0.23, 0.23, 0.23);
      curveObject.position.y = -1.43;
      curveObject.visible = false;
      material.depthTest = false;
      curveObject.renderOrder = 1;
      scene.add(curveObject);
    }
  }

  const cars: (THREE.Object3D<THREE.Object3DEventMap> | undefined)[] = [];
  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("./glb/MiniCity.glb", (gltf) => {
      const root = gltf.scene;
      scene.add(root);

      root.traverse((obj) => {
        if (obj.castShadow !== undefined) {
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      });

      const loadedCars = root.getObjectByName("Cars");
      const fixes = [
        { prefix: "Car_08", y: 0, rot: [Math.PI * 0.5, 0, Math.PI * 0.5] },
        { prefix: "CAR_03", y: 0.075, rot: [0, Math.PI, 0] },
        { prefix: "Car_04", y: 0.095, rot: [0, Math.PI, 0] },
      ];

      root.updateMatrixWorld();
      for (const car of loadedCars.children.slice()) {
        const fix = fixes.find((fix) => car.name.startsWith(fix.prefix));
        const obj = new THREE.Object3D();
        car.getWorldPosition(obj.position);
        car.position.set(0, fix.y, 0);
        car.rotation.set(...fix.rot);
        obj.add(car);
        scene.add(obj);
        cars.push(obj);
      }

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();
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

  // create 2 Vector3s we can use for path calculations
  const carPosition = new THREE.Vector3();
  const carTarget = new THREE.Vector3();
  function render(time: number) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    {
      const pathTime = time * 0.01;
      const targetOffset = 0.01;
      cars.forEach((car, ndx) => {
        // 一个介于 0 和 1 之间的数字，用于均匀间隔汽车
        const u = pathTime + ndx / cars.length;

        // 获取第一个点
        curve.getPointAt(u % 1, carPosition);
        carPosition.applyMatrix4(curveObject.matrixWorld);

        // 曲线再远点获取第二个点
        curve.getPointAt((u + targetOffset) % 1, carTarget);
        carTarget.applyMatrix4(curveObject.matrixWorld);

        // 把汽车放置在第一个点 （暂时的）
        car.position.copy(carPosition);
        // 汽车的第二个点
        car.lookAt(carTarget);

        // 放置小车在两个点中间
        car.position.lerpVectors(carPosition, carTarget, 0.5);
      });
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
</script>

<template>
  <canvas :id="id" />
</template>

<style lang="less" scoped></style>

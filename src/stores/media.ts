import { _Browser_GetFrameRate } from "nhanh-pure-function";
import { ref } from "vue";

function isMobileDevice() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;

  // 1. 用户代理检测
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUA = mobileRegex.test(userAgent);

  // 2. iPadOS 13+ 特殊检测
  const isIPad = platform === "MacIntel" && navigator.maxTouchPoints > 1;

  // 3. 屏幕尺寸检测（包含方向自适应）
  const screenWidth = Math.min(window.screen.width, window.screen.height);
  const isSmallScreen = screenWidth < 768; // 以竖屏宽度为基准

  // 4. 输入方式检测（触摸优先设备）
  const isTouchPrimary = window.matchMedia("(pointer: coarse)").matches;

  // 综合判断逻辑：
  // - 满足传统移动设备特征 或
  // - 小屏幕且为触摸优先设备
  return isMobileUA || isIPad || (isSmallScreen && isTouchPrimary);
}

const isMobile = isMobileDevice();

let initFpsFinish: ((fps: number) => void)[] | null = [];
const Media = ref({
  /** 设备类型 */
  deviceType: (isMobile ? "phone" : "desktop") as "phone" | "desktop",
  /** 是否使用移动端样式 */
  isMobileStyle: isMobile,
  /** 帧率 */
  fps: 60,

  fpsCallback(fun: (fps: number) => void) {
    if (initFpsFinish) initFpsFinish.push(fun);
    else fun(Media.value.fps);
  },
});

_Browser_GetFrameRate((fps) => {
  Media.value.fps = fps;
  initFpsFinish!.forEach((fun) => fun(fps));
  initFpsFinish = null;
}, 60);

const resize = () => {
  // 屏幕尺寸检测（包含方向自适应）
  Media.value.isMobileStyle = window.innerWidth < 768;

  document.body.classList.toggle("is-mobile", Media.value.isMobileStyle);
};
window.addEventListener("resize", resize);
resize();

export default Media;

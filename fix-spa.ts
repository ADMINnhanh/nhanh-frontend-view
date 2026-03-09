import fs from "fs";
import path from "path";

const baseUrl = "https://nha-nh.github.io";
const routes = [
  [
    "Canvas 工具/Canvas Tools",
    "/canvas/_Canvas",
    "Canvas工具导航与示例入口，汇集绘图、交互与渲染相关小工具。/Canvas tools hub with drawing, interaction and rendering demos.",
  ],
  [
    "YOLO8 格式标注器/YOLO8 Format Annotator",
    "/canvas/YOLOFormatAnnotator",
    "基于YOLOv8格式的图片标注器，支持框选、编辑、导出标注，用于数据集制作。/YOLOv8 image annotator supporting boxing, editing and export for datasets.",
  ],
  [
    "Threejs/Threejs",
    "/canvas/Threejs",
    "Three.js 3D示例与交互演示，涵盖基础渲染、相机、材质与光照。/Three.js 3D demos with rendering, camera, materials and lighting.",
  ],
  [
    "GLSL/GLSL",
    "/canvas/GLSL",
    "GLSL片段着色器在线实验，探索流体、颜色空间转换与图形效果。/GLSL fragment shader playground for fluids, color spaces and effects.",
  ],
  [
    "图片打散重组/Image Scatter and Recombine",
    "/canvas/ImageScatterRecombine",
    "将图片打散为网格块并动态重组，支持动画与抛掷效果的可视化。/Scatter an image into blocks and recombine with animations and throws.",
  ],
  [
    "网格文字生成/Grid Text Generator",
    "/canvas/GridTextGenerator",
    "将文本映射到网格生成像素化文字效果，支持导出与样式调整。/Generate pixelated text on grids with export and styling options.",
  ],
  [
    "动态图解/Dynamic Diagram",
    "/math/DynamicDiagram",
    "用动画展示几何与数学关系的动态图解，支持参数交互与说明。/Animated diagrams for geometry and math with interactive parameters.",
  ],
  [
    "取流/TakeFlow",
    "/multimedia/TakeFlow",
    "取流工具，演示媒体流获取与播放流程，便于调试与学习。/Stream capture tool demonstrating media retrieval and playback.",
  ],
  [
    "音频可视化播放器/Audio Player",
    "/multimedia/AudioPlayer",
    "可视化音频播放器：同步波形+频谱双视图；支持PCM/MP3/WAV，LFE 混合/多声道/位深/采样率/字节序..识别。/PCM/MP3/WAV Visual audio player: synced waveform + spectrum views.",
  ],
  [
    "弹跳球/Bounce",
    "/relax/Bounce",
    "弹跳球物理效果演示，简单有趣的放松小玩具。/Bouncing ball physics demo for fun.",
  ],
  [
    "无用的知识/Useless knowledge",
    "/relax/Knowledge",
    "无用的知识随机浏览，轻松有趣的碎片阅读页面。/Random tidbits of useless knowledge for casual reading.",
  ],
  [
    "小说节点搜索/Novel",
    "/relax/Novel",
    "小说节点搜索与阅读工具，快速定位章节并沉浸阅读。/Novel node search and reading with quick chapter locating.",
  ],
  [
    "Canvas 绘画/Canvas Drawing",
    "/canvas",
    "Canvas绘画工具集合：YOLO8标注、Threejs、GLSL、图片打散重组、网格文字生成等在线演示。/Canvas tools: YOLO8 annotator, Three.js, GLSL, image scatter/recombine, grid text.",
  ],
  [
    "数学/Math",
    "/math",
    "数学可视化与交互演示集合，提供定理与关系的动态图解。/Interactive math visualizations with dynamic diagrams of relations.",
  ],
  [
    "多媒体/Multimedia",
    "/multimedia",
    "多媒体工具集合：取流与音频可视化，提供解析、渲染与播放示例。/Multimedia tools: stream capture and audio visualization demos.",
  ],
  [
    "解乏小组件/Relax Widget",
    "/relax",
    "解乏小组件集合，提供轻松有趣的交互与阅读体验。/Relax widgets with playful interactions and reading.",
  ],
  [
    "前端Canvas工具集 - 可视化/绘图/音频/数学动态图解/Frontend Canvas Toolkit - Visualization/Drawing/Audio/Math Dynamic Diagram",
    "/",
    "涵盖Canvas绘画（YOLO8标注、Threejs、GLSL、图片打散重组、网格文字生成）、数学动态图解、多媒体（取流、在线PCM/MP3/WAV音频可视化播放器）、解乏小组件（弹跳球、小说搜索等）等前端实用工具集。",
  ],
  [
    "前端Canvas工具集 - 可视化/绘图/音频/数学动态图解/Frontend Canvas Toolkit - Visualization/Drawing/Audio/Math Dynamic Diagram",
    "/404",
    "涵盖Canvas绘画（YOLO8标注、Threejs、GLSL、图片打散重组、网格文字生成）、数学动态图解、多媒体（取流、在线PCM/MP3/WAV音频可视化播放器）、解乏小组件（弹跳球、小说搜索等）等前端实用工具集。",
  ],
];

export default {
  name: "fix-spa",
  closeBundle() {
    const isBuild = process.env.NODE_ENV === "production";
    if (!isBuild) return;

    const distPath = path.resolve(__dirname, "dist");
    const sourceIndexPath = path.join(distPath, "index.html");

    // 先读取原始 index.html 内容，避免重复读取
    let originalIndexContent;
    try {
      originalIndexContent = fs.readFileSync(sourceIndexPath, "utf8");
    } catch (err) {
      console.error("读取 index.html 失败:", err);
      return;
    }

    routes.forEach((item) => {
      const routeName = item[0] as string;
      const routePath = item[1] as string;
      const details = item[2] as string | undefined;

      // 拼接目标目录路径
      const targetDir = path.join(distPath, routePath);
      // 确保目录存在（递归创建）
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // 替换 title 内容
      let updatedContent = originalIndexContent.replace(
        /<title>你好啊你好<\/title>/,
        `<title>${routeName}</title>`
      );
      if (details) {
        updatedContent = updatedContent.replace(
          /<h1 class="seo-h1">你好啊你好<\/h1>/,
          `<h1 class="seo-h1">${details}</h1>`
        );
      }

      // 写入替换后的 index.html 到目标目录
      const targetIndexPath = path.join(targetDir, "index.html");
      fs.writeFileSync(targetIndexPath, updatedContent, "utf8");
    });

    // 生成 sitemap.txt（修正路由路径拼接逻辑）
    const sitemapContent = routes
      .map(([_, routePath]) => `${baseUrl}${routePath}/`)
      .join("\n");

    fs.writeFileSync(
      path.join(distPath, "sitemap.txt"),
      sitemapContent,
      "utf8"
    );

    const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(([_, routePath]) => {
      const url = `${baseUrl}${routePath}/`;
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

    // 3. 写入 sitemap.xml 文件到 dist 目录
    fs.writeFileSync(
      path.join(distPath, "sitemap.xml"),
      sitemapXmlContent,
      "utf8"
    );
    console.log("SPA 路由修复完成，已生成各路由 index.html 和 sitemap.txt");
  },
};

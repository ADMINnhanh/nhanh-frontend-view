import fs from "fs";
import path from "path";

export default {
  name: "fix-spa",
  closeBundle() {
    const isBuild = process.env.NODE_ENV === "production";
    if (!isBuild) return;

    const baseUrl = "https://nha-nh.github.io";
    const routes = [
      ["Canvas 工具/Canvas Tools", "/canvas/_Canvas"],
      [
        "YOLO8 格式标注器/YOLO8 Format Annotator",
        "/canvas/YOLOFormatAnnotator",
      ],
      ["Threejs/Threejs", "/canvas/Threejs"],
      ["GLSL/GLSL", "/canvas/GLSL"],
      [
        "图片打散重组/Image Scatter and Recombine",
        "/canvas/ImageScatterRecombine",
      ],
      ["网格文字生成/Grid Text Generator", "/canvas/GridTextGenerator"],
      ["动态图解/Dynamic Diagram", "/math/DynamicDiagram"],
      ["取流/TakeFlow", "/multimedia/TakeFlow"],
      ["音频可视化播放器/Audio Player", "/multimedia/AudioPlayer"],
      ["弹跳球/Bounce", "/relax/Bounce"],
      ["无用的知识/Useless knowledge", "/relax/Knowledge"],
      ["小说节点搜索/Novel", "/relax/Novel"],
      ["Canvas 绘画/Canvas Drawing", "/canvas"],
      ["数学/Math", "/math"],
      ["多媒体/Multimedia", "/multimedia"],
      ["解乏小组件/Relax Widget", "/relax"],
      ["你好啊你好/nhanh/nha-nh 的网站", "/"],
      ["你好啊你好/nhanh/nha-nh 的网站", "/404"],
    ];

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

    routes.forEach(([routeName, routePath]) => {
      // 处理特殊路由路径（如 /:pathMatch(.*)），替换为合法的目录名
      let normalizedPath =
        routePath === "/:pathMatch(.*)" ? "/pathMatch" : routePath;

      // 拼接目标目录路径
      const targetDir = path.join(distPath, normalizedPath);
      // 确保目录存在（递归创建）
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // 替换 title 内容
      const updatedContent = originalIndexContent.replace(
        /<title>你好啊你好<\/title>/,
        `<title>${routeName}</title>`
      );

      // 写入替换后的 index.html 到目标目录
      const targetIndexPath = path.join(targetDir, "index.html");
      fs.writeFileSync(targetIndexPath, updatedContent, "utf8");
    });

    // 生成 sitemap.txt（修正路由路径拼接逻辑）
    const sitemapContent = [
      baseUrl + "/",
      ...routes.map(([_, routePath]) => {
        // 处理特殊路径，确保 sitemap 格式正确
        const cleanPath =
          routePath === "/:pathMatch(.*)" ? "/pathMatch" : routePath;
        return `${baseUrl}${cleanPath}`;
      }),
    ].join("\n");

    fs.writeFileSync(
      path.join(distPath, "sitemap.txt"),
      sitemapContent,
      "utf8"
    );

    const sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(([_, routePath]) => {
      const url = `${baseUrl}${routePath}`;
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

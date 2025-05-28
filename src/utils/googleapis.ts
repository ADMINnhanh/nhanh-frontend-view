/** 谷歌翻译文本 */
export async function TranslateText(text: string, targetLang = "zh-CN") {
  try {
    // 构建 API 请求 URL
    const encodedText = encodeURIComponent(text);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodedText}`;

    // 发送请求
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`翻译请求失败: ${response.status}`);
    }

    // 解析响应
    const data = await response.json();
    // Google API 返回的格式为嵌套数组，提取翻译结果
    const translatedText = data[0].map((item: any[]) => item[0]).join("");

    return translatedText;
  } catch (error) {
    console.error("翻译出错:", error);

    // 显式类型守卫判断
    let errorMessage = "未知错误";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }

    return `翻译失败: ${errorMessage}`;
  }
}

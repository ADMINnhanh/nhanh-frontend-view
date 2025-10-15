/**
 * 小说数据处理模块
 * 功能：解析大文件小说，按章节存储到IndexedDB，并提供查询和管理功能
 */

import type { Table } from "dexie";
import Dexie from "dexie";
import { NButton, NInput, NInputGroup } from "naive-ui";
import { h, ref } from "vue";

/** 小说元数据接口 */
export interface Novel {
  /** 小说ID，自动生成 */
  id?: number;
  /** 小说名称 */
  name: string;
  /** 章节总数 */
  chapterCount: number;
  /** 内容总长度（字符数） */
  contentLength: number;
  /** 创建时间 */
  createdTime: string;
  /** 更新时间 */
  updatedTime: string;
}

/** 章节元数据接口 */
export interface Chapter {
  /** 章节ID，自动生成 */
  id?: number;
  /** 所属小说ID */
  novelId: number;
  /** 章节标题 */
  title: string;
  /** 章节内容长度 */
  contentLength: number;
  /** 章节顺序号 */
  order: number;
}

/** 章节内容接口 */
export interface ChapterContent {
  /** 内容ID，自动生成 */
  id?: number;
  /** 所属章节ID */
  chapterId: number;
  /** 章节内容 */
  content: string;
}

/** 数据库类 */
export class NovelDatabase extends Dexie {
  novels!: Table<Novel, number>;
  chapters!: Table<Chapter, number>;
  chapterContents!: Table<ChapterContent, number>;

  constructor() {
    super("NovelDatabase");
    this.version(1).stores({
      novels: "++id, name",
      chapters: "++id, novelId, title, order",
      chapterContents: "++id, chapterId",
    });
  }
}

/** 小说服务类 */
export class NovelService {
  private db: NovelDatabase;

  constructor() {
    this.db = new NovelDatabase();
  }

  /**
   * 解析并导入小说文件
   * @param file 小说文件
   * @param regular 章节标题正则表达式
   */
  async importNovel(file: File, regular: string): Promise<Novel | undefined> {
    const content = await this.readFileAsText(file);
    const chapters = this.parseChapters(content, regular);

    return this.db.transaction(
      "rw",
      this.db.novels,
      this.db.chapters,
      this.db.chapterContents,
      async () => {
        // 计算总内容长度
        const contentLength = chapters.reduce(
          (sum, ch) => sum + ch.content.length,
          0
        );
        const now = new Date().toISOString();

        const novelId = await this.db.novels.add({
          name: file.name.replace(/\.[^/.]+$/, ""), // 从文件名提取小说名
          chapterCount: chapters.length,
          contentLength,
          createdTime: now,
          updatedTime: now,
        });

        // 批量添加章节和内容
        for (let i = 0; i < chapters.length; i++) {
          const chapter = chapters[i];
          const chapterId = await this.db.chapters.add({
            novelId,
            title: chapter.title,
            contentLength: chapter.content.length,
            order: i + 1,
          });

          await this.db.chapterContents.add({
            chapterId,
            content: chapter.content,
          });
        }

        return this.db.novels.get(novelId)!;
      }
    );
  }

  /**
   * 删除小说及其所有章节
   * @param novelId 小说ID
   */
  async deleteNovel(novelId: number): Promise<void> {
    return this.db.transaction(
      "rw",
      this.db.novels,
      this.db.chapters,
      this.db.chapterContents,
      async () => {
        const chapters = await this.db.chapters
          .where("novelId")
          .equals(novelId)
          .toArray();
        const chapterIds = chapters.map((ch) => ch.id!);

        await this.db.chapterContents
          .where("chapterId")
          .anyOf(chapterIds)
          .delete();
        await this.db.chapters.where("novelId").equals(novelId).delete();
        await this.db.novels.delete(novelId);
      }
    );
  }

  /**
   * 更新小说名称
   * @param novelId 小说ID
   * @param newName 新名称
   */
  async updateNovelName(novelId: number, newName: string): Promise<number> {
    return this.db.novels.update(novelId, {
      name: newName,
      updatedTime: new Date().toISOString(),
    });
  }

  /**
   * 关键字查询
   * @param keyword 搜索关键字
   * @param limit 结果限制数量
   */
  async search(
    keyword: string,
    limit = 50
  ): Promise<Array<{ novel: Novel; chapter: Chapter }>> {
    if (!keyword.trim()) return [];

    // 先在章节标题中搜索
    const matchingChapters = await this.db.chapters
      .where("title")
      .startsWithIgnoreCase(keyword)
      .limit(limit)
      .toArray();

    // 如果标题中没有足够结果，搜索内容
    if (matchingChapters.length < limit) {
      const contentMatches = await this.db.chapterContents
        .filter((content) => content.content.includes(keyword))
        .limit(limit - matchingChapters.length)
        .toArray();

      // 获取这些内容对应的章节
      const contentChapterIds = contentMatches.map((c) => c.chapterId);
      const contentChapters = await this.db.chapters
        .where("id")
        .anyOf(contentChapterIds)
        .toArray();

      matchingChapters.push(...contentChapters);
    }

    // 获取匹配章节的小说信息
    const novelIds = [...new Set(matchingChapters.map((ch) => ch.novelId))];
    const novels = await this.db.novels.where("id").anyOf(novelIds).toArray();
    const novelMap = new Map(novels.map((n) => [n.id!, n]));

    // 整理结果
    return matchingChapters.map((chapter) => ({
      novel: novelMap.get(chapter.novelId)!,
      chapter,
    }));
  }

  static formatString(str: string, keyword?: string) {
    if (keyword) {
      const span = ` <span class="keyword">${keyword}</span> `;
      str = str.replace(new RegExp(keyword, "g"), span);
    }
    return str.replace(/\n/g, `<div class="gap"></div>`);
  }

  /**
   * 关键字章节查询
   * @param novelId 小说ID
   * @param keyword 搜索关键字
   * @returns 包含关键字的章节列表及匹配片段
   */
  async searchChapters(
    novelId: number,
    keyword: string
  ): Promise<
    Array<{
      chapter: Chapter;
      contentSnippet: string; // 包含关键字的内容片段
    }>
  > {
    if (!keyword.trim()) return [];

    // 获取该小说的所有章节
    const chapters = await this.db.chapters
      .where("novelId")
      .equals(novelId)
      .sortBy("order");

    const chapterIds = chapters.map((ch) => ch.id!);
    const results: Array<{ chapter: Chapter; contentSnippet: string }> = [];

    // 搜索这些章节的内容
    const matchingContents = await this.db.chapterContents
      .where("chapterId")
      .anyOf(chapterIds)
      .filter((content) => content.content.includes(keyword))
      .toArray();

    // 整理结果，提取包含关键字的片段
    for (const content of matchingContents) {
      const chapter = chapters.find((ch) => ch.id === content.chapterId);
      if (!chapter) continue;

      // 找出所有关键字的位置
      const keywordPositions: number[] = [];
      let currentIndex = content.content.indexOf(keyword);
      while (currentIndex !== -1) {
        keywordPositions.push(currentIndex);
        // 从下一个位置继续查找，避免重复匹配同一位置
        currentIndex = content.content.indexOf(
          keyword,
          currentIndex + keyword.length
        );
      }

      if (keywordPositions.length === 0) continue; // 理论上不会触发，因为已过滤

      // 第一个关键字位置和最后一个关键字结束位置
      const firstPos = keywordPositions[0];
      const lastPos =
        keywordPositions[keywordPositions.length - 1] + keyword.length;

      // 计算片段起止位置（包含前后上下文）
      const start = Math.max(0, firstPos - 100);
      const end = Math.min(content.content.length, lastPos + 100);

      // 添加省略号表示截断
      const prefix = start > 0 ? "..." : "";
      const suffix = end < content.content.length ? "..." : "";
      const snippet = `${prefix}${content.content.substring(
        start,
        end
      )}${suffix}`;

      results.push({
        chapter,
        contentSnippet: NovelService.formatString(snippet, keyword),
      });
    }

    // 按章节顺序排序
    return results.sort((a, b) => a.chapter.order - b.chapter.order);
  }

  /**
   * 获取小说
   * @param novelId 小说ID
   */
  async getNovel(novelId: number): Promise<Novel> {
    return (await this.db.novels.toArray()).find((n) => n.id === novelId)!;
  }

  /**
   * 获取小说列表
   */
  async getNovelList(): Promise<Novel[]> {
    return this.db.novels.toArray();
  }

  /**
   * 获取小说章节列表
   * @param novelId 小说ID
   */
  async getChapters(novelId: number): Promise<Chapter[]> {
    return this.db.chapters.where("novelId").equals(novelId).sortBy("order");
  }

  /**
   * 获取章节内容
   * @param chapterId 章节ID
   */
  async getChapterContent(chapterId: number): Promise<string | null> {
    const content = await this.db.chapterContents
      .where("chapterId")
      .equals(chapterId)
      .first();
    return content ? content.content : null;
  }

  /**
   * 按章节标题分割小说内容
   * @param content 完整小说文本
   * @param regular 章节标题正则表达式
   */
  private parseChapters(
    content: string,
    regular: string
  ): Array<{ title: string; content: string }> {
    // 正则表达式匹配"第X章 标题"格式
    // const chapterRegex = /第[^\n]+章[^\n]*\n/g;
    const chapterRegex = new RegExp(regular, "g");
    const chapters: Array<{ title: string; content: string }> = [];

    let match;
    let lastIndex = 0;

    while ((match = chapterRegex.exec(content)) !== null) {
      const title = match[0].trim();
      const start = match.index;
      const end = chapterRegex.lastIndex;

      // 如果不是第一章，添加前一章内容
      if (lastIndex > 0) {
        chapters[chapters.length - 1].content = content
          .substring(lastIndex, start)
          .trim();
      }

      chapters.push({
        title,
        content: "", // 内容将在下一次迭代中填充
      });

      lastIndex = end;
    }

    // 添加最后一章内容
    if (chapters.length > 0) {
      chapters[chapters.length - 1].content = content
        .substring(lastIndex)
        .trim();
    }

    return chapters;
  }

  /**
   * 读取文件内容为文本
   * @param file 文件对象
   */
  private readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file, "utf-8");
    });
  }
}

/** 初始化服务 */
export const novelService = new NovelService();

/** 导入新小说 */
export async function importNewNovel(file: File, regular: string) {
  try {
    const novel = await novelService.importNovel(file, regular);
    console.log("导入成功:", novel);
    window.$message.success("导入成功: " + file.name);
  } catch (error) {
    console.error("导入失败:", error);
    window.$message.error("导入失败: " + file.name);
  }
}

/** 搜索小说 */
export async function searchNovels(keyword: string) {
  try {
    const results = await novelService.search(keyword);
    console.log("搜索结果:", results);
  } catch (error) {
    console.error("搜索失败:", error);
    window.$message.error("搜索失败");
  }
}

/** 重命名 */
export function renameNovel(novel: Novel, callback: () => void) {
  const name = ref(novel.name);
  const modal = window.$modal.create({
    title: "重命名",
    preset: "card",
    style: { width: "400px" },
    content: () =>
      h(NInputGroup, () => [
        h(NInput, {
          clearable: true,
          value: name.value,
          onUpdateValue: (value) => (name.value = value),
        }),
        h(NButton, { type: "primary", onClick: submit }, () => "确定"),
      ]),
  });
  async function submit() {
    try {
      await novelService.updateNovelName(novel.id!, name.value);
      modal.destroy();
      callback();
      console.log("重命名成功:", name.value);
      window.$message.success("重命名成功");
    } catch (error) {
      console.error("重命名失败:", error);
      window.$message.error("重命名失败");
    }
  }
}

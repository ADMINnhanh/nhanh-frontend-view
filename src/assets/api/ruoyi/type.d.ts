/**
 * PageData«网站访问会话返回数据»
 */
interface PageData<T> {
  /**
   * 当前页的数据列表
   */
  list: T[];
  /**
   * 当前页码（从1开始）
   */
  pageIndex: number;
  /**
   * 每页数量（默认10）
   */
  pageSize: number;
  /**
   * 总记录数（用于分页计算总页数）
   */
  total: number;
}

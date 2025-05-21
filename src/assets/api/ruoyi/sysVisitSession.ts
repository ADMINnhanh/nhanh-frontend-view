import ruoyi from "@/utils/ruoyi";

const askPrefix = "/sys-visit-session";

/**
 * 访问质量统计信息
 */
interface AccessQualityStatistics {
  /**
   * 高质量访问次数
   */
  highQualityCount: number;
  /**
   * 低质量访问次数
   */
  lowQualityCount: number;
  /**
   * 中等质量访问次数
   */
  mediumQualityCount: number;
  /**
   * 总访问次数
   */
  totalVisits: number;
}
/** 访问质量统计 */
export function VisitQualityStats() {
  return ruoyi.get<AccessQualityStatistics>(`${askPrefix}/visit-quality-stats`);
}

/**
 * 每日访问趋势数据项
 */
interface DailyAccessToTrendDataItems {
  /**
   * 日期
   */
  date: string;
  /**
   * 高质量访问次数
   */
  highQualityCount: number;
  /**
   * 低质量访问次数
   */
  lowQualityCount: number;
  /**
   * 中等质量访问次数
   */
  mediumQualityCount: number;
  /**
   * 总访问次数
   */
  totalDailyVisits: number;
}
/** 每日访问趋势 */
export function DailyVisitTrend() {
  return ruoyi.get<DailyAccessToTrendDataItems[]>(
    `${askPrefix}/daily-visit-trend`
  );
}

/**
 * 页面访问统计信息
 */
interface PageAccessStatistics {
  /**
   * 高质量访问次数
   */
  highQualityCount: number;
  /**
   * 低质量访问次数
   */
  lowQualityCount: number;
  /**
   * 中等质量访问次数
   */
  mediumQualityCount: number;
  /**
   * 页面名称
   */
  pageName: string;
  /**
   * 总访问次数
   */
  totalDailyVisits: number;
}
/** 页面访问统计 */
export function PageVisitStats() {
  return ruoyi.get<PageAccessStatistics[]>(`${askPrefix}/page-visit-stats`);
}

/** 查询访问记录 */
export interface QueryParams {
  /**
   * 客户端IP地址（模糊匹配）
   */
  clientIp?: string;
  /**
   * 访问结束时间戳
   */
  endTime?: number;
  /**
   * 当前页码
   */
  pageIndex?: number;
  /**
   * 每页数量
   */
  pageSize?: number;
  /**
   * 访问开始时间戳
   */
  startTime?: number;
  /**
   * 访问质量（如：0=低质量, 1=中质量, 2=高质量）
   */
  visitQuality?: string;
  /**
   * 访问来源（如：搜索引擎、直接访问）
   */
  visitSource?: string;
  /**
   * 是否升序（true=升序，false=降序）
   */
  asc?: boolean;
  /**
   * 排序字段（如：visitStartTime, clientIp）
   */
  sortBy?: string;
}
/**
 * 网站访问会话返回数据
 */
export interface WebsiteAccessSessionReturnsData {
  /**
   * 客户端IP地址
   */
  clientIp: string;
  /**
   * 记录创建时间
   */
  createTime: string;
  /**
   * 入口页名称
   */
  entryName: string;
  /**
   * 出口页名称
   */
  exitName: string;
  /**
   * 会话ID（自增长主键）
   */
  sessionId: number;
  /**
   * 总访问时长（秒）
   */
  totalVisitTime: number;
  /**
   * 用户设备信息（User-Agent）
   */
  userAgent: string;
  /**
   * 访问结束时间
   */
  visitEndTime: string;
  /**
   * 访问质量: 0=低质量, 1=中质量, 2=高质量
   */
  visitQuality: number;
  /**
   * 访问来源
   */
  visitSource: string;
  /**
   * 访问开始时间
   */
  visitStartTime: string;
}
/** 访问记录列表 */
export function SysVisitSessionList(params: QueryParams) {
  return ruoyi.get<PageData<WebsiteAccessSessionReturnsData>>(
    `${askPrefix}/list`,
    { params }
  );
}

/**
 * 页面访问日志实体
 */
export interface PageAccessLogEntity {
  /**
   * 日志ID（自增长主键）
   */
  logId: number;
  /**
   * 访问的页面名称
   */
  pageName: string;
  /**
   * 关联会话ID
   */
  sessionId: number;
  /**
   * 页面停留时间（秒）
   */
  stayTime: number;
  /**
   * 访问质量: 0=低质量, 1=中质量, 2=高质量
   */
  visitQuality: number;
  [property: string]: any;
}
/** 获取访问会话详情 */
export function SysVisitSessionDetails(id: string | number) {
  return ruoyi.get<PageAccessLogEntity[]>(`${askPrefix}/detail/` + id);
}

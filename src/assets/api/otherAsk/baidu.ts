import md5 from "@/utils/md5";
import otherAsk from "@/utils/otherAsk";

const baiduPrefix = "https://nhanh.xin/baidu-translate";

/**
 * 翻译API请求参数
 */
interface TranslationRequest {
  /**
   * 请求翻译query
   * UTF-8编码，完成个人/企业认证后上限为6000字符
   */
  q: string;

  /**
   * 翻译源语言
   * 可设置为auto（自动检测语言）
   */
  from?: string;

  /**
   * 翻译目标语言
   * 不可设置为auto
   */
  to?: string;

  /**
   * APPID
   * 可在开发者信息查看
   */
  appid?: string;

  /**
   * 随机数
   * 可为字母或数字的字符串
   */
  salt?: string;

  /**
   * 签名
   * appid+q+salt+密钥的MD5值
   */
  sign?: string;

  /**
   * 判断是否需要使用自定义术语干预API
   * 1-是，0-否
   */
  needIntervene?: number;
}
function GetParams(data: TranslationRequest): TranslationRequest {
  data.appid = "20250528002367822";
  data.salt = Date.now().toString();
  data.sign = md5(`${data.appid}${data.q}${data.salt}qplXkmjJy14teA83OA6o`);
  return data;
}
/** 翻译文本 百度 */
export function TranslateTextBaidu(data: TranslationRequest | string) {
  const params = GetParams({
    from: "en",
    to: "zh",
    ...(typeof data === "string" ? { q: data } : data),
  });
  return (
    otherAsk
      .get(baiduPrefix + "/api/trans/vip/translate", { params })
      /** @ts-ignore */
      .then((res) => res.trans_result[0].dst)
  );
}

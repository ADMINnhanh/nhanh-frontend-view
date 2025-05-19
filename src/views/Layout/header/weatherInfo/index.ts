import SvgGather from "@/assets/icon/gather";
import { RenderIcon } from "@/utils/vue";
import {
  RainyOutline,
  SnowOutline,
  SunnyOutline,
  ThunderstormOutline,
} from "@vicons/ionicons5";

export const weatherCategories = {
  error: [
    "飓风",
    "热带风暴",
    "龙卷风",
    "狂爆风",
    "风暴",
    "烈风",
    "疾风",
    "强沙尘暴",
    "沙尘暴",
    "暴雪",
    "特大暴雨",
    "大暴雨",
    "暴雨",
    "冻雨",
    "雷阵雨并伴有冰雹",
    "强雷阵雨",
    "大风",
    "极端降雨",
  ],
  warning: [
    "强风/劲风",
    "雷阵雨",
    "阵雨夹雪",
    "强阵雨",
    "大雨",
    "大雪",
    "中雪-大雪",
    "大雪-暴雪",
    "大暴雨-特大暴雨",
    "暴雨-大暴雨",
    "大雨-暴雨",
    "中雨-大雨",
    "小雨-中雨",
    "雨雪天气",
    "雨夹雪",
    "扬沙",
    "浮尘",
    "热",
    "冷",
    "浓雾",
    "强浓雾",
    "大雾",
    "特强浓雾",
    "重度霾",
    "严重霾",
    "中度霾",
    "霾",
  ],
  info: [
    "多云",
    "阴",
    "有风",
    "清风",
    "和风",
    "微风",
    "阵雨",
    "中雨",
    "小雨",
    "毛毛雨/细雨",
    "雨",
    "小雪",
    "阵雪",
    "小雪-中雪",
    "轻雾",
    "未知",
  ],
  success: ["晴", "少云", "晴间多云", "平静", "微风"],
} as const;
export function GetWeatherType(weather: string) {
  for (const key in weatherCategories) {
    if (Object.prototype.hasOwnProperty.call(weatherCategories, key)) {
      if (weatherCategories[key as "info"].includes(weather as any))
        return key as keyof typeof weatherCategories;
    }
  }
}

const Icon = {
  晴: RenderIcon(SunnyOutline),
  雨: RenderIcon(RainyOutline),
  雪: RenderIcon(SnowOutline),
  雷阵雨: RenderIcon(ThunderstormOutline),
  风: SvgGather({ icon: "Wind" }),
  雾霾: SvgGather({ icon: "Haze" }),
  冰雹: SvgGather({ icon: "Hail" }),
  雾: SvgGather({ icon: "Fog" }),
  龙卷风: SvgGather({ icon: "Tornado" }),
  浮尘: SvgGather({ icon: "WindyDust" }),
};
export function GetWeatherTemperatureIcon(weather: string) {
  const keys = Object.keys(Icon) as (keyof typeof Icon)[];
  keys.sort((a, b) => b.length - a.length);
  const key = keys.find((key) => weather.includes(key));
  if (key) return Icon[key];
}

export function GetWeatherTemperatureType(temperature_float: string) {
  const temperature = Number(temperature_float);
  if (temperature > 40 || temperature < 0) return "error";
  if (temperature > 30 || temperature < 20) return "warning";
  return "success";
}

export function GetWeatherWindpowerType(windpower: string) {
  const level = Number(windpower);
  if (!level) return "success";
  if (level < 7) return "warning";
  return "error";
}

export function GetWeatherHumidityType(humidity: string) {
  const level = Number(humidity);
  if (level > 80 || level < 20) return "error";
  if (level > 60 || level < 30) return "warning";
  return "success";
}

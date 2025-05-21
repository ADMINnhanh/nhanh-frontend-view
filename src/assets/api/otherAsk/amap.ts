import { GetLocation } from "@/utils/map";
import otherAsk from "@/utils/otherAsk";

const amapPrefix = "https://nhanh.xin/amap";

export interface ErrorResponse {
  info: string; // 错误信息描述
  infocode: string; // 错误码
  status: "0"; // 状态码（1：成功；0：失败）
  sec_code_debug: string; // 调试用安全码
  key: string; // 密钥相关信息
  sec_code: string; // 安全码
}

export interface ReverseGeocodingParams {
  // 高德Key（必填）- 用户在高德地图官网申请的Web服务API类型Key
  key?: string;

  // 经纬度坐标（必填）- 经度在前，纬度在后，经纬度间以","分割，小数点后不超过6位
  location: string;

  // 返回附近POI类型（可选）- extensions为all时生效，支持多个POI TYPECODE以"|"分隔
  poitype?: string;

  // 搜索半径（可选）- 取值范围0~3000，默认1000米
  radius?: number;

  // 返回结果控制（可选）- base:基本地址信息，all:包含POI、道路等信息
  extensions?: "base" | "all";

  // 道路等级（可选）- extensions为all时生效，0:所有道路，1:仅主干道路
  roadlevel?: 0 | 1;

  // 数字签名（可选）- 参考数字签名获取和使用方法
  sig?: string;

  // 返回数据格式类型（可选）- JSON或XML，默认为JSON
  output?: "JSON" | "XML";

  // 回调函数（可选）- output为JSON时有效，指定回调函数名称
  callback?: string;

  // 是否优化POI返回顺序（可选）- extensions为all时生效，0:不干扰，1:居家优先，2:公司优先
  homeorcorp?: 0 | 1 | 2;
}
export interface ReverseGeocodingResponse {
  // 返回结果状态值 - 0:请求失败；1:请求成功
  status: "0" | "1";

  // 返回状态说明 - 失败时返回具体原因，成功时返回"OK"
  info: string;

  // 逆地理编码列表
  regeocode?: Regeocode;
}

// 逆地理编码对象
interface Regeocode {
  // 地址元素列表
  addressComponent: AddressComponent;

  // 格式化的地址描述
  formatted_address: string;

  // 社区信息列表
  neighborhood?: Neighborhood;

  // 楼信息列表
  building?: Building;

  // 门牌信息列表
  streetNumber?: StreetNumber;

  // 所属海域信息
  seaArea?: string;

  // 经纬度所属商圈列表
  businessAreas?: BusinessArea[];

  // 道路信息列表（extensions为all时返回）
  roads?: Road[];

  // 道路交叉口列表（extensions为all时返回）
  roadinters?: RoadIntersection[];

  // POI信息列表（extensions为all时返回）
  pois?: POI[];

  // AOI信息列表（extensions为all时返回）
  aois?: AOI[];
}

// 地址元素
interface AddressComponent {
  // 坐标点所在国家名称
  country: string;

  // 坐标点所在省名称
  province: string;

  // 坐标点所在城市名称
  city: string | string[];

  // 城市编码
  citycode: string;

  // 坐标点所在区
  district: string;

  // 行政区编码
  adcode: string;

  // 坐标点所在乡镇/街道
  township: string;

  // 乡镇街道编码
  towncode: string;
}

// 社区信息
interface Neighborhood {
  // 社区名称
  name: string;

  // POI类型
  type: string;
}

// 楼信息
interface Building {
  // 建筑名称
  name: string;

  // 类型
  type: string;
}

// 门牌信息
interface StreetNumber {
  // 街道名称
  street: string;

  // 门牌号
  number: string;

  // 坐标点
  location: string;

  // 方向
  direction: string;

  // 门牌地址到请求坐标的距离(米)
  distance: string;
}

// 商圈信息
interface BusinessArea {
  // 商圈中心点经纬度
  location: string;

  // 商圈名称
  name: string;

  // 商圈所在区域的adcode
  id: string;
}

// 道路信息
interface Road {
  // 道路id
  id: string;

  // 道路名称
  name: string;

  // 道路到请求坐标的距离(米)
  distance: string;

  // 方位
  direction: string;

  // 坐标点
  location: string;
}

// 道路交叉口
interface RoadIntersection {
  // 交叉路口到请求坐标的距离(米)
  distance: string;

  // 方位
  direction: string;

  // 路口经纬度
  location: string;

  // 第一条道路id
  first_id: string;

  // 第一条道路名称
  first_name: string;

  // 第二条道路id
  second_id: string;

  // 第二条道路名称
  second_name: string;
}

// POI信息
interface POI {
  // POI的id
  id: string;

  // POI点名称
  name: string;

  // POI类型
  type: string;

  // 电话
  tel: string;

  // 该POI的中心点到请求坐标的距离(米)
  distance: string;

  // 方向
  direction: string;

  // POI地址信息
  address: string;

  // 坐标点
  location: string;

  // POI所在商圈名称
  businessarea: string;
}

// AOI信息
interface AOI {
  // 所属AOI的id
  id: string;

  // 所属AOI名称
  name: string;

  // 所属AOI所在区域编码
  adcode: string;

  // 所属AOI中心点坐标
  location: string;

  // 所属AOI点面积(平方米)
  area: string;

  // 输入经纬度是否在AOI面之中(0:在AOI内，其余为距离)
  distance: string;

  // 所属AOI类型
  type: string;
}

/**
 * 根据经纬度获取地址信息
 * @param lng 经度，可以是数字或字符串
 * @param lat 纬度，可以是数字或字符串
 * @returns 返回一个Promise，解析为ApiResponse接口定义的响应数据
 */
export function GetCoordinateInfoByLatLng(params: ReverseGeocodingParams) {
  return otherAsk
    .get(amapPrefix + "/v3/geocode/regeo", { params })
    .then((res) => {
      const data = res as unknown as ReverseGeocodingResponse | ErrorResponse;
      if (data.status == "1") return data;
      return Promise.reject(data);
    });
}

export function GetCoordinateInfoByLocation(): Promise<ReverseGeocodingResponse> {
  return new Promise((resolve, reject) => {
    GetLocation()
      .then((res) => {
        GetCoordinateInfoByLatLng({ location: res.lng + "," + res.lat }).then(
          resolve,
          reject
        );
      })
      .catch(reject);
  });
}

export interface WeatherParams {
  // 请求服务权限标识（必填）- 用户在高德地图官网申请的web服务API类型KEY
  key?: string;

  // 城市编码（必填）- 输入城市的adcode，参考城市编码表
  city: string;

  // 气象类型（可选）- base:返回实况天气，all:返回预报天气
  extensions?: "base" | "all";

  // 返回格式（可选）- 默认为JSON
  output?: "JSON" | "XML";
}
export interface WeatherResponse {
  // 返回状态 - 1：成功；0：失败
  status: "1";

  // 返回结果总数目
  count: string;

  // 返回的状态信息
  info: string;

  // 返回状态说明,10000代表正确
  infocode: string;

  // 实况天气数据信息
  lives?: LiveWeather[];

  // 预报天气信息数据
  forecast?: ForecastWeather;
}

// 实况天气数据结构
interface LiveWeather {
  // 省份名
  province: string;

  // 城市名
  city: string;

  // 区域编码
  adcode: string;

  // 天气现象（汉字描述）
  weather: string;

  // 实时气温，单位：摄氏度
  temperature: string;
  temperature_float: string;

  // 风向描述
  winddirection: string;

  // 风力级别，单位：级
  windpower: string;

  // 空气湿度
  humidity: string;
  humidity_float: string;

  // 数据发布的时间
  reporttime: string;
}

// 预报天气数据结构
interface ForecastWeather {
  // 城市名称
  city: string;

  // 城市编码
  adcode: string;

  // 省份名称
  province: string;

  // 预报发布时间
  reporttime: string;

  // 预报数据 list 结构，元素 cast,按顺序为当天、第二天、第三天的预报数据
  casts: ForecastDay[];
}

// 每日预报数据结构
interface ForecastDay {
  // 日期
  date: string;

  // 星期几
  week: string;

  // 白天天气现象
  dayweather: string;

  // 晚上天气现象
  nightweather: string;

  // 白天温度
  daytemp: string;

  // 晚上温度
  nighttemp: string;

  // 白天风向
  daywind: string;

  // 晚上风向
  nightwind: string;

  // 白天风力
  daypower: string;

  // 晚上风力
  nightpower: string;
}
export function GetWeatherByCityCode(data: WeatherParams) {
  const params: WeatherParams = {
    extensions: "base",
    ...data,
  };
  return otherAsk
    .get(amapPrefix + "/v3/weather/weatherInfo", { params })
    .then((res) => {
      const data = res as unknown as WeatherResponse | ErrorResponse;
      if (data.status == "1") return data;
      return Promise.reject(data);
    });
}

export function GetWeatherByLocation(): Promise<WeatherResponse> {
  return new Promise((resolve, reject) => {
    GetCoordinateInfoByLocation()
      .then((res) => {
        const adcode = res.regeocode?.addressComponent.adcode;

        if (adcode)
          GetWeatherByCityCode({ city: adcode }).then(resolve, reject);
        else reject(res);
      })
      .catch(reject);
  });
}

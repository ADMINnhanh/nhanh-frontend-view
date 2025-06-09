import { _LngLatToPlane, _ReadFile } from "nhanh-pure-function";
import _Canvas from "../../_Canvas";
import { markRaw, ref, shallowRef } from "vue";
import type OverlayGroup from "../../_Canvas/OverlayGroup";
import type { EventHandler } from "../../_Canvas/public/eventController";
import type Point from "../../_Canvas/OverlayGroup/point";
import provinceInfoMap from "./data/provinceInfoMap";
import attractions from "./data/attractions";
import HeatMap from "heatmap-ts";
import type { Overlay } from "../../_Canvas/OverlayGroup";

// #region 中国地图数据
type FeatureCollection = {
  features: {
    geometry:
      | {
          coordinates: [number, number][][][];
          type: "MultiPolygon";
        }
      | {
          coordinates: [number, number][][];
          type: "Polygon";
        };
    properties: {
      adcode: number;
      name: string;
      center: [number, number];
      centroid: [number, number];
      childrenNum: number;
      level: string;
      parent: {
        adcode: number;
      };
      subFeatureIndex: number;
      acroutes: [number];
    };
    type: string;
  }[];
  type: string;
};

type ChinaDataType = {
  properties: FeatureCollection["features"][number]["properties"];
  geometry: [number, number][][];
}[];

function ChinaData() {
  const china = new URL("./data/index.json", import.meta.url);
  return _ReadFile(china.href).then((content) => {
    const data = JSON.parse(content) as FeatureCollection;
    const chinaData: ChinaDataType = [];

    data.features.forEach((item) => {
      const { properties, geometry } = item;
      const chinaDataItem: ChinaDataType[number] = { properties, geometry: [] };
      chinaData.push(chinaDataItem);

      properties.center =
        properties.center && _LngLatToPlane(...properties.center);
      properties.centroid =
        properties.centroid && _LngLatToPlane(...properties.centroid);

      if (geometry.type == "MultiPolygon")
        geometry.coordinates.forEach((v) => {
          v.forEach((item) => {
            chinaDataItem.geometry.push(
              item.map((location) => _LngLatToPlane(...location))
            );
          });
        });
      else
        geometry.coordinates.forEach((v) =>
          chinaDataItem.geometry.push(
            v.map((location) => _LngLatToPlane(...location))
          )
        );
    });

    return chinaData;
  });
}

export const myCanvas = shallowRef<_Canvas>();
export const layer = new _Canvas.Layer({
  name: "中国地图",
  scaleRange: [0.2, 100],
});
const overlayGroups: OverlayGroup[] = [];
export const provincialAdministrativeRegions: Overlay[] = [];
ChinaData().then((chinaData) => {
  chinaData.forEach((item) => {
    const name = item.properties.name;

    const info = provinceInfoMap.find((v) => v.name == name);
    const overlayGroup = new _Canvas.OverlayGroup({ name, extData: info });

    const openInfoWindow = () => {
      const point = Array.from(overlayGroup.overlays).find(
        (v) => v instanceof _Canvas.Point
      );
      if (point) {
        GetProvinceInfoMap(overlayGroup.extData, point as unknown as Point);
      } else {
        provinceInfo.value = undefined;
      }
    };
    const commonClickEvent: EventHandler<"click"> = (event) => {
      if (event.data.state) {
        window.$message.success(`这里是 ${item.properties.name}`);
      } else {
        provinceInfo.value = undefined;
      }
    };
    const commonDblClickEvent: EventHandler<"doubleClick"> = (event) => {
      if (event.data.state) {
        myCanvas.value?.setFitView(overlayGroup);

        openInfoWindow();
      } else {
        provinceInfo.value = undefined;
      }
    };

    item.geometry.forEach((polygonData) => {
      const polygon = new _Canvas.Polygon({
        name: name + "边界",
        isShowHandlePoint: false,
        value: polygonData,
      });
      overlayGroup.addOverlays(polygon);
    });

    const center = item.properties.center;
    if (center) {
      const clickEvent: EventHandler<"click"> = (event) => {
        if (event.data.state) openInfoWindow();
      };
      /** 省会城市 */
      const capitalCity_point = new _Canvas.Point({
        name: "省会城市 " + name,
        value: center,
        scaleRange: [0.9, 100],
      });
      const capitalCity_text = new _Canvas.Text({
        name: "省会城市 " + name,
        text: item.properties.name,
        value: center,
        extraOffset: { x: 0, y: 20 },
        scaleRange: [1.1, 100],
      });

      capitalCity_point.addEventListener("click", clickEvent);
      capitalCity_text.addEventListener("click", clickEvent);

      provincialAdministrativeRegions.push(capitalCity_point, capitalCity_text);
      overlayGroup.addOverlays([capitalCity_point, capitalCity_text]);
    }

    overlayGroup.addEventListener("click", commonClickEvent);
    overlayGroup.addEventListener("doubleClick", commonDblClickEvent);

    const overlays = Array.from(overlayGroup.overlays.values());
    overlayGroup.overlays.forEach((overlay) => {
      overlay.registerControllers("hover", overlays);
    });

    overlayGroups.push(overlayGroup);
  });
  layer.addGroup(overlayGroups);
});
// #endregion

// #region 中国各省介绍
type Province = (typeof provinceInfoMap)[number];
export type ProvinceInfo = Province & {
  point: Point;
  x?: number;
  y?: number;
};
export const provinceInfo = ref<ProvinceInfo>();
function GetProvinceInfoMap(info: Province, point: Point) {
  if (info) {
    if (point.shouldRender()) {
      provinceInfo.value = {
        ...info,
        point: markRaw(point),
        x: point.dynamicPosition?.[0],
        y: point.dynamicPosition?.[1],
      };
    }
  } else console.error(`未找到${name}信息`);
}
// #endregion

// #region 景区
export const attractionLayer = new _Canvas.Layer({
  name: "景区",
  isVisible: false,
});
attractions.forEach((attraction) => {
  const name = attraction.name;
  const group = new _Canvas.OverlayGroup({ name });

  const value = _LngLatToPlane(...attraction.coordinates);
  const point = new _Canvas.Point({
    value,
    extData: attraction,
    scaleRange: [1, 100],
  });
  const text = new _Canvas.Text({
    text: name,
    value,
    extraOffset: { x: 0, y: 20 },
    scaleRange: [1.4, 100],
  });

  group.addEventListener("click", (event) => {
    if (event.data.state) {
      GetAttractionsInfoMap(attraction, point);
    } else GetAttractionsInfoMap();
  });

  group.addOverlays([point, text]);
  attractionLayer.addGroup(group);
});
// #endregion

// #region 景点介绍
type Attraction = (typeof attractions)[number];
export type AttractionsInfo = Attraction & {
  point: Point;
  x?: number;
  y?: number;
};
export const attractionInfo = ref<AttractionsInfo>();
function GetAttractionsInfoMap(info: Attraction, point: Point): void;
function GetAttractionsInfoMap(): void;
function GetAttractionsInfoMap(info?: Attraction, point?: Point) {
  if (info && point) {
    if (point.shouldRender()) {
      attractionInfo.value = {
        ...info,
        point: markRaw(point),
        x: point.dynamicPosition?.[0],
        y: point.dynamicPosition?.[1],
      };
    }
  } else {
    attractionInfo.value = undefined;
    console.error(`未找到${name}信息`);
  }
}
// #endregion

// requestAnimationFrame(() => {
//   const heatMap = new HeatMap({
//     container: document.getElementById("heatMap")!,
//   });

//   heatMap.setData({
//     max: 100,
//     min: 1,
//     data: [
//       {
//         x: 100,
//         y: 100,
//         value: 100,
//         radius: 20,
//       },
//       {
//         x: 100,
//         y: 120,
//         value: 50,
//         radius: 30,
//       },
//     ],
//   });

//   setTimeout(() => {
//     heatMap.setData({
//       max: 100,
//       min: 1,
//       data: [
//         {
//           x: 200,
//           y: 200,
//           value: 100,
//           radius: 20,
//         },
//         {
//           x: 200,
//           y: 220,
//           value: 50,
//           radius: 30,
//         },
//       ],
//     });
//   }, 3000);
// });

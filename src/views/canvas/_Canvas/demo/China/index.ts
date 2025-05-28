import { _LngLatToPlane, _ReadFile } from "nhanh-pure-function";
import _Canvas from "../../_Canvas";
import { markRaw, ref, shallowRef } from "vue";
import type OverlayGroup from "../../_Canvas/OverlayGroup";
import type { EventHandler } from "../../_Canvas/public/eventController";
import provinceInfoMap from "./data/provinceInfoMap";
import type Point from "../../_Canvas/OverlayGroup/point";

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
export const layer = new _Canvas.Layer({ name: "中国地图" });
layer.show.scaleRange = [0.2, 100];
const overlayGroups: OverlayGroup[] = [];

ChinaData().then((chinaData) => {
  chinaData.forEach((item) => {
    const name = item.properties.name;
    const overlayGroup = new _Canvas.OverlayGroup({ name });

    const openInfoWindow = () => {
      const point = Array.from(overlayGroup.overlays).find(
        (v) => v instanceof _Canvas.Point
      );
      if (point) {
        GetProvinceInfoMap(name, point as unknown as Point);
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
      });
      capitalCity_point.show.scaleRange = [0.9, 100];
      const capitalCity_text = new _Canvas.Text({
        name: "省会城市 " + name,
        text: item.properties.name,
        value: center,
        extraOffset: { x: 0, y: 20 },
      });
      capitalCity_text.show.scaleRange = [1.1, 100];

      capitalCity_point.addEventListener("click", clickEvent);
      capitalCity_text.addEventListener("click", clickEvent);

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
export type ProvinceInfo = (typeof provinceInfoMap)[number] & {
  point: Point;
  x?: number;
  y?: number;
};
export const provinceInfo = ref<ProvinceInfo>();
function GetProvinceInfoMap(name: string, point: Point) {
  const info = provinceInfoMap.find((v) => v.name == name);
  if (info) {
    provinceInfo.value = {
      ...info,
      point: markRaw(point),
      x: point.dynamicPosition?.[0],
      y: point.dynamicPosition?.[1],
    };
  } else console.error(`未找到${name}信息`);
}
// #endregion

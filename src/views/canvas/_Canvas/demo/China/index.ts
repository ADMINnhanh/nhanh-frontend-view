import { _LngLatToPlane, _ReadFile } from "nhanh-pure-function";
import _Canvas from "../../_Canvas";
import { shallowRef } from "vue";
import type OverlayGroup from "../../_Canvas/OverlayGroup";
import type { EventHandler } from "../../_Canvas/public/eventController";
import provinceInfoMap from "./provinceInfoMap";

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
  const china = new URL("./index.json", import.meta.url);
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

    const commonClickEvent: EventHandler<"click"> = (event) => {
      if (event.data.state)
        window.$message.success(`这里是 ${item.properties.name}`);
    };
    const commonDblClickEvent: EventHandler<"doubleClick"> = (event) => {
      if (event.data.state) {
        myCanvas.value?.setFitView(overlayGroup);
        GetProvinceInfoMap(name);
      } else {
        provinceInfo.value = undefined;
      }
    };

    item.geometry.forEach((polygonData) => {
      const polygon = new _Canvas.Polygon({
        isShowHandlePoint: false,
        value: polygonData,
      });
      overlayGroup.addOverlays(polygon);
    });

    const center = item.properties.center;
    if (center) {
      /** 省会城市 */
      const capitalCity_point = new _Canvas.Point({ value: center });
      capitalCity_point.show.scaleRange = [0.9, 100];
      const capitalCity_text = new _Canvas.Text({
        text: item.properties.name,
        value: center,
        extraOffset: { x: 0, y: 20 },
      });
      capitalCity_text.show.scaleRange = [1.1, 100];

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
export type ProvinceInfo = (typeof provinceInfoMap)[number];
export const provinceInfo = shallowRef<ProvinceInfo>();
function GetProvinceInfoMap(name: string) {
  provinceInfo.value = provinceInfoMap.find((v) => v.name == name);
}

// #endregion

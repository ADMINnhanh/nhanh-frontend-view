import { _ReadFile } from "nhanh-pure-function";
import DataProcessor from "../../_Canvas/core/dataProcessor";
import _Canvas from "../../_Canvas";
import type OverlayGroup from "../../_Canvas/OverlayGroup";

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

export default function ChinaData() {
  const china = new URL("./index.json", import.meta.url);
  return _ReadFile(china.href).then((content) => {
    const data = JSON.parse(content) as FeatureCollection;
    const chinaData: ChinaDataType = [];

    data.features.forEach((item) => {
      const { properties, geometry } = item;
      const chinaDataItem: ChinaDataType[number] = { properties, geometry: [] };
      chinaData.push(chinaDataItem);

      properties.center =
        properties.center && DataProcessor.LngLatToPlane(...properties.center);
      properties.centroid =
        properties.centroid &&
        DataProcessor.LngLatToPlane(...properties.centroid);

      if (geometry.type == "MultiPolygon")
        geometry.coordinates.forEach((v) => {
          v.forEach((item) => {
            chinaDataItem.geometry.push(
              item.map((location) => DataProcessor.LngLatToPlane(...location))
            );
          });
        });
      else
        geometry.coordinates.forEach((v) =>
          chinaDataItem.geometry.push(
            v.map((location) => DataProcessor.LngLatToPlane(...location))
          )
        );
    });

    return chinaData;
  });
}

// const layer = new _Canvas.Layer("中国地图");
// const overlayGroups: OverlayGroup[] = [];

// ChinaData().then((chinaData) => {
//   chinaData.forEach((item) => {
//     const overlayGroup = new _Canvas.OverlayGroup(item.properties.name);

//     const commonClickEvent = () => {
//       window.$message.success(`这里是 ${item.properties.name}`);
//     };
//     const commonDblClickEvent = () => {
//       myCanvas.value?.setFitView(overlayGroup);
//     };

//     item.geometry.forEach((polygonData) => {
//       const polygon = new _Canvas.Polygon({
//         isShowHandlePoint: false,
//         value: polygonData,
//       });
//       overlayGroup.addOverlays(polygon);
//     });

//     // const center = item.properties.center;
//     // if (center) {
//     //   /** 省会城市 */
//     //   const capitalCity_point = new _Canvas.Point({ value: center });
//     //   capitalCity_point.show.setScales([0.9, 1000]);
//     //   const capitalCity_text = new _Canvas.Text({
//     //     text: item.properties.name,
//     //     value: center,
//     //     extraOffset: { x: 0, y: 20 },
//     //   });
//     //   capitalCity_text.show.setScales([1.1, 1000]);

//     //   overlayGroup.addOverlays([capitalCity_point, capitalCity_text]);
//     // }

//     const overlays = Array.from(overlayGroup.overlays.values());
//     overlayGroup.overlays.forEach((overlay) => {
//       overlay.sharedHoverOverlays = overlays;
//       overlay.addEventListener("click", commonClickEvent);
//       overlay.addEventListener("dblclick", commonDblClickEvent);
//     });

//     overlayGroups.push(overlayGroup);
//   });
//   layer.addGroup(overlayGroups);
// });

/** 地球周长 40075016.686 米 */
const earthCircumference = 40075016.686;

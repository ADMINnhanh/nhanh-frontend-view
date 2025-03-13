import { _ReadFile } from "nhanh-pure-function";
import type Canvas from "../Canvas";

type FeatureCollection = {
  features: {
    geometry: {
      coordinates: [number, number][][][];
      type: string;
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

function GetDimensions(coordinates: any): number {
  if (!Array.isArray(coordinates)) {
    return 0;
  }
  if (coordinates.length === 0) {
    return 1;
  }
  return 1 + GetDimensions(coordinates[0]);
}

function LatLngToPlane(lng: number, lat: number) {
  const R = 6378137; // 地球半径（米）
  const maxLat = 85.05112878; // Web Mercator有效纬度范围（±85°）

  // 限制经纬度范围
  const clampedLat = Math.max(Math.min(lat, maxLat), -maxLat);
  const clampedLng = Math.max(Math.min(lng, 180), -180);

  // 转换公式
  const x = (clampedLng * (Math.PI / 180) * R) / 10000;
  const y =
    (Math.log(Math.tan(((90 + clampedLat) * Math.PI) / 360)) * R) / 10000;

  return [x, y]; // 平面坐标（米）
}

export default function DrawChina(canvas: Canvas) {
  const china = new URL("./index.json", import.meta.url);
  _ReadFile(china.href).then((content) => {
    console.log(JSON.parse(content));
    const data = JSON.parse(content) as FeatureCollection;
    const features = data.features;
    features.forEach((item) => {
      const { properties, geometry } = item;
      const polygons: { value: [number, number][] }[] = [];

      const dimensions = GetDimensions(geometry.coordinates);

      geometry.coordinates.flat(dimensions - 3).forEach((v) => {
        const value = v as [number, number][];
        console.log(value.map((point) => LatLngToPlane(point[0], point[1])));

        polygons.push({
          value: value.map((point) => LatLngToPlane(point[0], point[1])) as any,
        });
      });

      canvas.drawPolygon.addPolygons(polygons);
    });
  });
}

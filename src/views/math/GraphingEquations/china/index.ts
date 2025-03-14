import { _ReadFile } from "nhanh-pure-function";
import type _Canvas from "../_Canvas";

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

export default function DrawChina(canvas: _Canvas) {
  const china = new URL("./index.json", import.meta.url);
  _ReadFile(china.href).then((content) => {
    // console.log(JSON.parse(content));
    const data = JSON.parse(content) as FeatureCollection;
    const features = data.features;
    features.forEach((item) => {
      const { properties, geometry } = item;
      const polygons: { value: [number, number][] }[] = [];

      const dimensions = GetDimensions(geometry.coordinates);

      geometry.coordinates.flat(dimensions - 3).forEach((v) => {
        const value = v as [number, number][];
        polygons.push({
          value: value.map((point) => {
            const [x, y] = canvas.LngLatToPlane(point[0], point[1]);
            return [x / 10000 - 800, y / 10000];
          }) as any,
        });
      });

      if (Array.isArray(properties.center)) {
        const [x, y] = canvas.LngLatToPlane(
          properties.center[0],
          properties.center[1]
        );
        canvas.drawPoint.addPoints({ value: [x / 10000 - 800, y / 10000] });
      }
      canvas.drawPolygon.addPolygons(polygons);
    });
  });
}

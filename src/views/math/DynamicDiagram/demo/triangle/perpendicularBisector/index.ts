import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import {
  ABC,
  MyMath,
  type Point,
  type PointA,
} from "@/views/math/DynamicDiagram/tool";
import { ref } from "vue";

export const id = _Utility_GenerateUUID();

const m = new _Canvas.Polygon({
  value: [
    [0, -1.464],
    [-2, 2],
    [2, 2],
  ],
  isDraggable: true,
  canCreateOrDeleteHandlePoint: false,
  style: {
    fill: "transparent",
    fill_hover: "transparent",
  },
});
const config = (color: string, dash?: boolean) => ({
  isInteractive: false,
  style: {
    stroke: { color, width: 2, dash },
  },
});
const abl = new _Canvas.Line(config("#8a2be2"));
const ablp = new _Canvas.Line(config("#8a2be2", true));
const ablra = new _Canvas.Line(config("#8a2be2"));

const bcl = new _Canvas.Line(config("#ff69b4"));
const bclp = new _Canvas.Line(config("#ff69b4", true));
const bclra = new _Canvas.Line(config("#ff69b4"));

const cal = new _Canvas.Line(config("#3bc0cd"));
const calp = new _Canvas.Line(config("#3bc0cd", true));
const calra = new _Canvas.Line(config("#3bc0cd"));

const y = new _Canvas.Arc({
  startAngle: 0,
  endAngle: 360,
  isInteractive: false,
});
const yd = new _Canvas.Point({});
export const showCircumcircle = ref(true);

export const overlays = [
  m,
  abl,
  bcl,
  cal,
  ablp,
  bclp,
  calp,
  ablra,
  bclra,
  calra,
  y,
  yd,
];

const abc = new ABC(m);

export function Update() {
  const dom = document.getElementById(id)!;
  const rect = dom.getBoundingClientRect();

  const mainCanvas = abl.mainCanvas!;

  const minP = mainCanvas.getMousePositionOnAxis({
    clientX: rect.left,
    clientY: rect.top,
  })!;
  const maxP = mainCanvas.getMousePositionOnAxis({
    clientX: rect.right,
    clientY: rect.bottom,
  })!;
  const min = mainCanvas.getAxisValueByPoint(minP.x, minP.y);
  const max = mainCanvas.getAxisValueByPoint(maxP.x, maxP.y);

  const perpBisector = (a: Point, b: Point): PointA[] | undefined => {
    const point = MyMath.perpBisectorByScope(
      a,
      b,
      { min: min.xV, max: max.xV },
      { min: min.yV, max: max.yV }
    );
    if (point) {
      const { x, y } = point;
      return [
        [x.min, y.min],
        [x.max, y.max],
      ];
    }
  };

  ablp.value = perpBisector(abc.a, abc.b);
  bclp.value = perpBisector(abc.b, abc.c);
  calp.value = perpBisector(abc.c, abc.a);

  abl.value = MyMath.transform([abc.a, abc.b]);
  bcl.value = MyMath.transform([abc.b, abc.c]);
  cal.value = MyMath.transform([abc.c, abc.a]);

  ablra.value = MyMath.transform(
    MyMath.getPerpendicularBisectorRightAngleSymbol(abc.a, abc.b, abc.c) || []
  );
  bclra.value = MyMath.transform(
    MyMath.getPerpendicularBisectorRightAngleSymbol(abc.b, abc.c, abc.a) || []
  );
  calra.value = MyMath.transform(
    MyMath.getPerpendicularBisectorRightAngleSymbol(abc.c, abc.a, abc.b) || []
  );

  if (y.isVisible !== showCircumcircle.value) {
    y.isVisible = showCircumcircle.value;
    yd.isVisible = showCircumcircle.value;
  }
  const _y = MyMath.circumcircle(abc.a, abc.b, abc.c);
  if (_y) {
    y.value = [_y.x, _y.y];
    y.radiusValue = _y.r;
    yd.value = [_y.x, _y.y];
  }
}
m.addEventListener("dragg", Update);

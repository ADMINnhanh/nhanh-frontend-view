import { _AreAllArraysValid, _Clone } from "nhanh-pure-function";
import _Canvas from "..";
import Overlay from "./public/overlay";
import { type OverlayType } from "./index";
import GeometricBoundary from "./public/geometricBoundary";

type ConstructorOption = ConstructorParameters<
  typeof GeometricBoundary<ArcStyleType>
>[0] & {};

// export default class Arc extends GeometricBoundary<LineStyleType> {}

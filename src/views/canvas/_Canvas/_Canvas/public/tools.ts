import Decimal from "decimal.js";

export class _Number {
  static add(a: number, b: number) {
    return new Decimal(a).add(b).toNumber();
  }
  static sub(a: number, b: number) {
    return new Decimal(a).sub(b).toNumber();
  }
  static mul(a: number, b: number) {
    return new Decimal(a).mul(b).toNumber();
  }
  static div(a: number, b: number) {
    return new Decimal(a).div(b).toNumber();
  }
}

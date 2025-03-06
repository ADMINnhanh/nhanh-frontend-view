/** 参数是否合法 */
export function IsValid(arr: any) {
  return (
    Array.isArray(arr) &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number" &&
    isFinite(arr[0]) &&
    isFinite(arr[1])
  );
}

/** 参数是否合法 */
export function IsValids(arr: any) {
  return Array.isArray(arr) && arr.every(IsValid);
}

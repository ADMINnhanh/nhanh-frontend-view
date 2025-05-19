// 获取经纬度
export function GetLocation(): Promise<{ lat: number; lng: number }> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lng: longitude }); // 纬度, 经度
        },
        (error) => reject(error)
      );
    } else {
      reject(new Error("浏览器不支持地理位置服务"));
    }
  });
}

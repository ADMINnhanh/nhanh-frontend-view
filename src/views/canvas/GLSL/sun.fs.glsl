#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  float y = st.y;
  
  // 定义颜色
  vec3 skyTop = vec3(0.1, 0.2, 0.8); // 深蓝
  vec3 skyBottom = vec3(0.5, 0.7, 1.0); // 浅蓝
  vec3 groundTop = vec3(0.7, 0.4, 0.22); // 浅棕
  vec3 groundBottom = vec3(0.25, 0.03, 0.03); // 深棕
  
  vec3 color;
  
  if (y > 0.4) {
    // 天空渐变：从地平线向上颜色变深
    float skyBlend = (y - 0.4) / 0.6; // 映射到 0~1
    color = mix(skyBottom, skyTop, skyBlend);
  }else {
    // 地面渐变：从地平线向下颜色变深
    float groundBlend = y /0.4; // 映射到 0~1
    color = mix(groundBottom, groundTop, groundBlend);
  }
  
  // 彩虹
  
  // 太阳轨迹半径
  float sunRadius = 0.3;
  // 角度
  float sunAngle = u_time * 0.7;
  // 太阳位置
  vec2 sunPoint = vec2(0.5 + sin(sunAngle) * sunRadius,
  0.5 + cos(sunAngle) * sunRadius);
  // 手动计算圆形，避免distance函数
  float aspect = u_resolution.x / u_resolution.y;
  vec2 delta = (st - sunPoint) * vec2(aspect, 1.0);
  float dist_squared = dot(delta, delta); // dx² + dy²
  // 计算与太阳的距离
  float dist = sqrt(dist_squared);
  
  // 绘制太阳 (只在天空区域绘制)
  if (dist < 0.05&&y > 0.4) {
    // 太阳在天空中时，天空更亮
    skyTop = vec3(1.0, 0.89, 0.52);
    skyBottom = vec3(0.69, 0.24, 0.05);
    
    // 太阳
    vec3 sun = mix(skyBottom, skyTop, (sunPoint.y - 0.4) / 0.6);
    color = sun;
  }
  
  gl_FragColor = vec4(color, 1.0);
}
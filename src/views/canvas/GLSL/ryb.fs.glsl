#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// 更精确的RYB转换（使用立方插值）
vec3 cubicRYB(float angleDeg) {
  float normalizedAngle = mod(angleDeg, 360.0);
  if (normalizedAngle < 0.0)normalizedAngle += 360.0;
  
  // RYB色轮的关键颜色点
  vec3 red = vec3(1.0, 0.0, 0.0);
  vec3 yellow = vec3(1.0, 1.0, 0.0);
  vec3 blue = vec3(0.163, 0.373, 0.6);
  vec3 violet = vec3(0.5, 0.0, 0.5);
  vec3 green = vec3(0.0, 0.66, 0.2);
  vec3 orange = vec3(1.0, 0.5, 0.0);
  vec3 purple = vec3(0.5, 0.0, 1.0);
  
  // 八个主要分段
  float segment = normalizedAngle / 45.0; // 360/8 = 45度每段
  
  if (segment < 1.0) {
    // 红->橙
    return mix(red, orange, fract(segment));
  } else if (segment < 2.0) {
    // 橙->黄
    return mix(orange, yellow, fract(segment));
  } else if (segment < 3.0) {
    // 黄->黄绿
    return mix(yellow, vec3(0.7, 1.0, 0.0), fract(segment));
  } else if (segment < 4.0) {
    // 黄绿->绿
    return mix(vec3(0.7, 1.0, 0.0), green, fract(segment));
  } else if (segment < 5.0) {
    // 绿->蓝
    return mix(green, blue, fract(segment));
  } else if (segment < 6.0) {
    // 蓝->紫
    return mix(blue, purple, fract(segment));
  } else if (segment < 7.0) {
    // 紫->紫红
    return mix(purple, violet, fract(segment));
  } else {
    // 紫红->红
    return mix(violet, red, fract(segment));
  }
}

void main() {
  vec2 st = gl_FragCoord.xy;
  vec2 center = u_resolution * 0.5;
  
  float dist = distance(st, center);
  float radius = min(u_resolution.x, u_resolution.y) * 0.4;
  
  // 平滑边缘（3像素的过渡）
  float smoothness = 3.0;
  float circle = smoothstep(radius, radius - smoothness, dist);
  
  // 计算方向向量（从中心指向当前像素）
  vec2 dir = st - center;
  // 计算角度（弧度制）
  float angle = atan(dir.y, dir.x);
  // 弧度转角度，并调整0度从右侧开始
  float angleDeg = angle * (180.0 / PI) + u_time * 30.0;
  
  // 使用RYB色彩空间
  vec3 rybColor = cubicRYB(angleDeg); // 调整相位使红色在右侧
  
  // 应用圆形遮罩
  vec3 color = rybColor * circle;
  
  gl_FragColor = vec4(color, 1.0);
}
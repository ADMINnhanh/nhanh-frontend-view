#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// 画圆环的函数
float ring(vec2 st, vec2 center, float outerRadius, float innerRadius, float smoothness) {
  float dist = distance(st, center);
  
  // 外圆边缘
  float outer = smoothstep(outerRadius, outerRadius - smoothness, dist);
  // 内圆边缘（减去内部）
  float inner = smoothstep(innerRadius - smoothness, innerRadius, dist);
  
  return outer * inner;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  
  vec3 color = vec3(0.0);
  
  vec2 pos = vec2(0.5) - st;
  float r = length(pos) * 2.0;
  float a = atan(pos.y, pos.x) + u_time ;
  float f = smoothstep(-0.90, 1.0, cos(a * 6.0)) * 0.5 + 0.1;
  color = vec3(1.0 - smoothstep(f, f + 0.02, r));
  
  float radius = min(u_resolution.x, u_resolution.y) * 0.4;
  vec2 center = u_resolution.xy * 0.5;
  float ringMask = ring(gl_FragCoord.xy, center, radius , radius - 4.0, 3.0);
  color = mix(color, vec3(1.0), ringMask);
  
  gl_FragColor = vec4(color, 1.0);
}
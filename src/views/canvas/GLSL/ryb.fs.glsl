#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy;
  vec2 center = u_resolution * 0.5;
  
  float dist = distance(st, center);
  float radius = min(u_resolution.x, u_resolution.y) * 0.4;
  
  // 平滑边缘（2像素的过渡）
  float smoothness = 3.0;
  float circle = smoothstep(radius, radius - smoothness, dist);
  
  vec3 color = vec3(0.6157, 0.9216, 0.9216) * circle;
  gl_FragColor = vec4(color, 1.0);
}

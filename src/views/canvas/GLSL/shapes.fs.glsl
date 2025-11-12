#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float rectangle(vec2 bl, vec2 tr) {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec2 inRect = step(bl, st) * step(st, tr);
  return inRect.x * inRect.y;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(1.0);
  
  vec2 aspectRatio = vec2(0.3 , 0.2);
  
  color *= rectangle(aspectRatio , 1.0 - aspectRatio);
  
  gl_FragColor = vec4(color, 1.0);
}
uniform float uTime;
varying float vAlpha;

void main() {
  vec2 coord = gl_PointCoord - 0.5;
  float strength = 1.0 - smoothstep(0.0, 0.5, length(coord));
  gl_FragColor = vec4(vec3(0.55, 0.42, 1.0), strength * vAlpha);
}

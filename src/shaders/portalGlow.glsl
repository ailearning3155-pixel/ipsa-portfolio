uniform float uTime;
varying vec2 vUv;

void main() {
  float ring = smoothstep(0.46, 0.48, length(vUv - 0.5)) - smoothstep(0.48, 0.50, length(vUv - 0.5));
  vec3 color = mix(vec3(0.2, 0.1, 0.5), vec3(0.6, 0.3, 1.0), sin(uTime) * 0.5 + 0.5);
  gl_FragColor = vec4(color * ring * 4.0, ring);
}

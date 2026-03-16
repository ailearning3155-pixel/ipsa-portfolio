uniform float uTime;
uniform vec2 uCenter;
varying vec2 vUv;

void main() {
  float dist = distance(vUv, uCenter);
  float ripple = sin(35.0 * dist - uTime * 5.0) * exp(-8.0 * dist);
  vec3 displaced = position + normal * ripple * 0.08;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}

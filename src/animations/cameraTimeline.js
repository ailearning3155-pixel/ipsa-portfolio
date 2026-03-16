import gsap from 'gsap';

export function moveCamera(camera, values) {
  return gsap.to(camera.position, { ...values, duration: 1.6, ease: 'power3.inOut' });
}

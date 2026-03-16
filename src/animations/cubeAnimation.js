import gsap from 'gsap';

export function pulseCube(target) {
  return gsap.to(target, { scale: 1.05, duration: 1.2, yoyo: true, repeat: -1 });
}

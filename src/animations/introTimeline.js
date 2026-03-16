import gsap from 'gsap';

export function createIntroTimeline() {
  return gsap.timeline({ defaults: { ease: 'power2.inOut' } });
}

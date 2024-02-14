/* global gsap */
export const shake = gsap.to('#nameField', {
  duration: 0.1,
  x: -10,
  repeat: 5,
  yoyo: true,
  paused: true,
});

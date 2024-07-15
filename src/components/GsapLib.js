import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export * from 'gsap';
export * from 'gsap/ScrollTrigger';
export * from 'gsap/ScrollSmoother';

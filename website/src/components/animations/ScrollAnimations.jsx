import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Fade in elements on scroll
    const fadeElements = gsap.utils.toArray('.fade-in');
    fadeElements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      });
    });

    // Scale elements on scroll
    const scaleElements = gsap.utils.toArray('.scale-in');
    scaleElements.forEach((element) => {
      gsap.from(element, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

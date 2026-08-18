import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } });
      heroTl.from('.hero-content > div:first-child', { y: -60, opacity: 0, scale: 0.8, duration: 0.6 }, 0.3);
      heroTl.from('.hero-content h1 span:first-child', { x: -120, opacity: 0, duration: 0.7 }, 0.6);
      heroTl.from('.hero-content h1 span:last-child', { x: 120, opacity: 0, rotation: -5, duration: 0.7 }, 0.85);
      heroTl.from('.hero-content > p', { y: 60, opacity: 0, duration: 0.6 }, 1.2);

      gsap.utils.toArray<HTMLElement>('.shape').forEach((shape, i) => {
        heroTl.from(shape, { scale: 0, opacity: 0, rotation: -90, duration: 0.5, ease: 'back.out(2)' }, 0.4 + i * 0.2);
      });

      // Floating shapes
      gsap.utils.toArray<HTMLElement>('.shape').forEach((shape, i) => {
        const speed = Number(shape.dataset.speed);
        gsap.to(shape, { y: '+=20', x: '+=10', rotation: '+=8', duration: 2 + i * 0.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to(shape, {
          y: -300 * speed, rotation: 180 * speed, ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        });
      });

      // Hero content fade on scroll
      gsap.to('.hero-content', {
        y: -150, opacity: 0, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      // Marquee
      gsap.to('.marquee-container', {
        x: '-50%', ease: 'none',
        scrollTrigger: { trigger: '.marquee-container', start: 'top bottom', end: 'bottom top', scrub: 1 },
      });

      // Problem cards
      gsap.utils.toArray<HTMLElement>('.problem-card').forEach((card) => {
        const speed = Number(card.dataset.speed);
        gsap.from(card, {
          y: 200 * speed, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%', end: 'top 50%', scrub: 1 },
        });
      });

      // Expertise cards — apparition séquentielle une par une
      const expertiseCards = gsap.utils.toArray<HTMLElement>('.expertise-card');
      expertiseCards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.15,
          }
        );
      });

      // Process steps — apparition séquentielle une par une
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.fromTo(step,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 85%', toggleActions: 'play none none none' },
            delay: i * 0.15,
          }
        );
      });

      // Flottaison continue — expertise cards
      gsap.utils.toArray<HTMLElement>('.expertise-card').forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? '-=12' : '+=12',
          duration: 2.5 + i * 0.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });

      // Flottaison continue — process steps
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, i) => {
        gsap.to(step, {
          y: i % 2 === 0 ? '-=10' : '+=10',
          duration: 2 + i * 0.35,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });

      // Projects parallax
      gsap.utils.toArray<HTMLElement>('.project-item').forEach((project) => {
        const speed = Number(project.dataset.speed);
        gsap.fromTo(project,
          { y: 150 * speed },
          { y: -50 * speed, ease: 'none', scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      });

      // FAQ
      gsap.utils.toArray<HTMLElement>('.faq-item').forEach((item) => {
        const speed = Number(item.dataset.speed);
        gsap.from(item, {
          x: -100 * speed, opacity: 0, ease: 'power2.out',
          scrollTrigger: { trigger: item, start: 'top 90%', end: 'top 65%', scrub: 1 },
        });
      });

      // Contact CTA
      gsap.utils.toArray<HTMLElement>('#contact .parallax-element').forEach((el) => {
        const speed = Number(el.dataset.speed) || 1;
        gsap.from(el, {
          y: 200 * speed, ease: 'none',
          scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom bottom', scrub: 1 },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

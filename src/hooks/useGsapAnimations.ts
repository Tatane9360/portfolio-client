import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { FOCUS } from '../components/Dot';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Lenis cadencé par le ticker GSAP : un seul rAF, ScrollTrigger lit la position lissée.
    // Le titre (≈ 0,5em sous le haut de section) arrive là où le cercle s'amarre.
    const lenis = new Lenis({ anchors: { offset: -Math.round(innerHeight * FOCUS - 60) } });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.from('#top h1', { yPercent: 30, opacity: 0, duration: 1.2, ease: 'power4.out' });

      // État caché posé avant le premier paint (layout effect) : aucun flash « déjà là puis réapparaît ».
      // Masque plutôt que translation : les boîtes ne bougent pas, le cercle mesure ses ancres au bon endroit.
      gsap.set('.reveal', { clipPath: 'inset(100% 0 0 0)', autoAlpha: 0 });
      ScrollTrigger.batch('.reveal', {
        start: 'top 90%',
        once: true,
        onEnter: (els) => gsap.to(els, {
          clipPath: 'inset(0% 0 0 0)', autoAlpha: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08, clearProps: 'clipPath',
        }),
      });

      // Les photos se dévoilent de bas en haut, puis dérivent légèrement au scroll.
      gsap.utils.toArray<HTMLElement>('.reveal-img').forEach((box) => {
        gsap.from(box, { clipPath: 'inset(100% 0 0 0)', duration: 1.2, ease: 'power4.inOut', scrollTrigger: { trigger: box, start: 'top 85%' } });
        gsap.fromTo(box.querySelector('img'), { yPercent: -6, scale: 1.12 }, {
          yPercent: 6, ease: 'none', scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { FOCUS } from '../components/Dot';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations() {
  useLayoutEffect(() => {
    // Mouvement réduit : seulement des fondus simples, pas de Lenis, pas de masque ni de flou.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const ctx = gsap.context(() => {
        gsap.set('.reveal, .reveal-img', { autoAlpha: 0 });
        ScrollTrigger.batch('.reveal, .reveal-img', {
          start: 'top 90%',
          once: true,
          onEnter: (els) => gsap.to(els, { autoAlpha: 1, duration: 0.6, ease: 'none' }),
        });
      });
      return () => ctx.revert();
    }

    // Lenis cadencé par le ticker GSAP : un seul rAF, ScrollTrigger lit la position lissée.
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    // Liens d'ancre : on dépose la page là où le cercle s'amarre dans la section (même calcul que Dot),
    // sur l'ancre [data-dot-land] si elle existe, sinon la première visible. Ex. « Discutons » : le cercle remplit « écrire ».
    const onAnchor = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const section = link?.hash ? document.querySelector<HTMLElement>(link.hash) : null;
      if (!section) return;
      e.preventDefault();
      const anchor = section.querySelector<HTMLElement>('[data-dot-land]') ?? [...section.querySelectorAll<HTMLElement>('[data-dot]')].find((a) => a.offsetWidth);
      const r = (anchor ?? section).getBoundingClientRect();
      lenis.scrollTo(anchor ? scrollY + r.top + r.height / 2 - innerHeight * FOCUS : scrollY + r.top - 60);
    };
    document.addEventListener('click', onAnchor);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Masques et flous : les boîtes ne bougent jamais, le cercle mesure ses ancres au bon endroit.
    // États cachés posés avant le premier paint (layout effect) : aucun flash.
    const done = (cls: string, prop: string) => function (this: gsap.core.Tween) {
      this.targets<HTMLElement>().forEach((el) => { el.classList.remove(cls); el.style.removeProperty(prop); });
    };
    const ctx = gsap.context(() => {
      // Titres : un coup de pinceau qui avance de gauche à droite.
      const titles = gsap.utils.toArray<HTMLElement>('#top h1, .title.reveal');
      titles.forEach((t) => t.classList.add('stroking'));
      gsap.set(titles, { '--stroke': -0.4 });
      gsap.to('#top h1', { '--stroke': 1.3, duration: 0.9, delay: 0.15, ease: 'power3.out', onComplete: done('stroking', '--stroke') });
      ScrollTrigger.batch('.title.reveal', {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { '--stroke': 1.3, duration: 0.9, ease: 'power3.out', stagger: 0.1, onComplete: done('stroking', '--stroke') }),
      });

      // Sections et photos : l'encre se diffuse depuis deux taches, le flou se resserre.
      const inks = gsap.utils.toArray<HTMLElement>('.reveal:not(.title), .reveal-img');
      inks.forEach((el) => el.classList.add('inking'));
      gsap.set(inks, { '--ink': 0, autoAlpha: 0 });
      ScrollTrigger.batch(inks, {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, {
          '--ink': 1, autoAlpha: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08, onComplete: done('inking', '--ink'),
        }),
      });

      // Frise du process : le trait de pinceau suit la lecture, de la première à la dernière étape.
      gsap.utils.toArray<HTMLElement>('.process').forEach((list) => {
        gsap.fromTo(list, { '--p': 0 }, { '--p': 1, ease: 'none', scrollTrigger: { trigger: list, start: 'top 60%', end: 'bottom 60%', scrub: true } });
      });

      // Les photos dérivent légèrement au scroll.
      gsap.utils.toArray<HTMLElement>('.reveal-img').forEach((box) => {
        gsap.fromTo(box.querySelector('img'), { yPercent: -6, scale: 1.12 }, {
          yPercent: 6, ease: 'none', scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    });

    return () => {
      ctx.revert();
      document.querySelectorAll('.stroking, .inking').forEach((el) => el.classList.remove('stroking', 'inking'));
      gsap.ticker.remove(raf);
      document.removeEventListener('click', onAnchor);
      lenis.destroy();
    };
  }, []);
}

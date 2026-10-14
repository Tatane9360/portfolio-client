import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { dockScroll } from '../components/Dot';

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations() {
  useLayoutEffect(() => {
    // Reduced motion: plain fades only, no Lenis or masks.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const ctx = gsap.context(() => {
        gsap.set('.reveal, .reveal-img', { autoAlpha: 0 });
        ScrollTrigger.batch('.reveal, .reveal-img', {
          start: 'top 90%',
          once: true,
          onEnter: (els) => gsap.to(els, { autoAlpha: 1, duration: 0.6, ease: 'power2.out' }),
        });
      });
      return () => ctx.revert();
    }

    // Lenis driven by the GSAP ticker: one rAF, ScrollTrigger reads the smoothed position.
    // lerp 0.2 (default 0.1): smooth but follows the wheel closely, no heavy inertia.
    const lenis = new Lenis({ lerp: 0.2 });
    lenis.on('scroll', ScrollTrigger.update);

    // Anchor links land where the circle docks in the section (same math as Dot),
    // on [data-dot-land] if present, otherwise the first visible anchor.
    const onAnchor = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const section = link?.hash ? document.querySelector<HTMLElement>(link.hash) : null;
      // Only sections get the circle-docking scroll; other targets (skip link) jump natively.
      if (!section?.matches('section')) return;
      e.preventDefault();
      const anchor = section.querySelector<HTMLElement>('[data-dot-land]') ?? [...section.querySelectorAll<HTMLElement>('[data-dot]')].find((a) => a.offsetWidth);
      const r = (anchor ?? section).getBoundingClientRect();
      lenis.scrollTo(anchor ? dockScroll(anchor) : scrollY + r.top - 60);
      section.tabIndex = -1;
      section.style.outline = 'none';
      section.focus({ preventScroll: true });
      history.pushState(null, '', link!.hash);
    };
    document.addEventListener('click', onAnchor);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Masks and blur only: boxes never move, so Dot measures anchors correctly.
    // Hidden states are set before first paint (layout effect): no flash.
    const done = (cls: string, prop: string) => function (this: gsap.core.Tween) {
      this.targets<HTMLElement>().forEach((el) => { el.classList.remove(cls); el.style.removeProperty(prop); });
    };
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray<HTMLElement>('#top h1, .title.reveal');
      titles.forEach((t) => t.classList.add('stroking'));
      gsap.set(titles, { '--stroke': -0.4 });
      gsap.to('#top h1', { '--stroke': 1.3, duration: 0.9, delay: 0.15, ease: 'power3.out', onComplete: done('stroking', '--stroke') });
      ScrollTrigger.batch('.title.reveal', {
        start: 'top 95%',
        once: true,
        onEnter: (els) => gsap.to(els, { '--stroke': 1.3, duration: 0.9, ease: 'power3.out', stagger: 0.06, onComplete: done('stroking', '--stroke') }),
      });

      const inks = gsap.utils.toArray<HTMLElement>('.reveal:not(.title), .reveal-img');
      inks.forEach((el) => el.classList.add('inking'));
      gsap.set(inks, { '--ink': 0, autoAlpha: 0 });
      ScrollTrigger.batch(inks, {
        start: 'top 95%',
        once: true,
        onEnter: (els) => gsap.to(els, {
          '--ink': 1, autoAlpha: 1, duration: 0.6, ease: 'expo.out', stagger: 0.05, onComplete: done('inking', '--ink'),
        }),
      });

      gsap.utils.toArray<HTMLElement>('.process').forEach((list) => {
        gsap.fromTo(list, { '--p': 0 }, { '--p': 1, ease: 'none', scrollTrigger: { trigger: list, start: 'top 60%', end: 'bottom 60%', scrub: true } });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-img:not(#top .reveal-img, [data-flat])').forEach((box) => {
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

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { dockScroll } from '../dock';

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
      if (e.defaultPrevented) return; // another handler already took the click
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
    const offs: (() => void)[] = [];
    const ctx = gsap.context(() => {
      // Noren: the panels drop from their rod, then sway with scroll speed and under a passing mouse.
      const pans = gsap.utils.toArray<HTMLElement>('.noren-pan');
      // Unfurled from the sleeve down; the clip is cleared after so the sway is not cut.
      gsap.from(pans, { clipPath: 'inset(0% 0% 95% 0%)', duration: 1.1, delay: 0.1, ease: 'power3.out', stagger: 0.07, clearProps: 'clipPath' });
      const sway = pans.map((p) => gsap.quickTo(p, 'rotation', { duration: 1.6, ease: 'elastic.out(1, 0.3)' }));
      const rest = () => sway.forEach((to) => to(0));
      ScrollTrigger.create({
        trigger: '#top',
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = gsap.utils.clamp(-3.5, 3.5, self.getVelocity() / 700);
          sway.forEach((to, i) => to(v * (0.7 + i * 0.12)));
        },
      });
      ScrollTrigger.addEventListener('scrollEnd', rest);
      offs.push(() => ScrollTrigger.removeEventListener('scrollEnd', rest));
      pans.forEach((p, i) => {
        let t = 0;
        const brush = (e: PointerEvent) => {
          if (e.pointerType !== 'mouse') return;
          sway[i](gsap.utils.clamp(-5, 5, e.movementX * 0.35));
          clearTimeout(t);
          t = window.setTimeout(() => sway[i](0), 90);
        };
        p.addEventListener('pointermove', brush);
        offs.push(() => { p.removeEventListener('pointermove', brush); clearTimeout(t); });
      });

      // Seals are pressed: a fast hit past full size, then they settle.
      gsap.set('.stamp', { autoAlpha: 0, scale: 1.7 });
      ScrollTrigger.batch('.stamp', {
        start: 'top 92%',
        once: true,
        onEnter: (els) => gsap.timeline({ delay: els.some((el) => el.closest('#top')) ? 1 : 0.15 })
          .to(els, { autoAlpha: 1, scale: 0.94, duration: 0.2, ease: 'power3.in', stagger: 0.08 })
          .to(els, { scale: 1, duration: 0.3, ease: 'power2.out', stagger: 0.08 }),
      });

      const titles = gsap.utils.toArray<HTMLElement>('.title.reveal');
      titles.forEach((t) => t.classList.add('stroking'));
      gsap.set(titles, { '--stroke': -0.4 });
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

      // One way: once sewn, a stitch stays sewn when scrolling back up.
      gsap.utils.toArray<HTMLElement>('.process').forEach((list) => {
        let p = 0;
        const sew = (self: ScrollTrigger) => {
          if (self.progress <= p) return;
          p = self.progress;
          list.style.setProperty('--p', String(p));
        };
        list.style.setProperty('--p', '0');
        ScrollTrigger.create({ trigger: list, start: 'top 60%', end: 'bottom 60%', onUpdate: sew, onRefresh: sew });
        offs.push(() => list.style.removeProperty('--p'));
      });

      gsap.utils.toArray<HTMLElement>('.reveal-img:not(#top .reveal-img, [data-flat])').forEach((box) => {
        gsap.fromTo(box.querySelector('img'), { yPercent: -6, scale: 1.12 }, {
          yPercent: 6, ease: 'none', scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    });

    return () => {
      offs.forEach((off) => off());
      ctx.revert();
      document.querySelectorAll('.stroking, .inking').forEach((el) => el.classList.remove('stroking', 'inking'));
      gsap.ticker.remove(raf);
      document.removeEventListener('click', onAnchor);
      lenis.destroy();
    };
  }, []);
}

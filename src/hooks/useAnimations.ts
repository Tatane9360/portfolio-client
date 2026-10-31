import { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { dockScroll } from '../dock';

const all = (selector: string) => [...document.querySelectorAll<HTMLElement>(selector)];
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/**
 * Sets `cls` (the hidden start state, index.css) on each element now, then `vu` once it enters the viewport:
 * its top crosses `line`% of the screen height. Elements entering together are staggered by `stagger` ms
 * after `delay(entering)` ms. Both classes are dropped when the motion ends, so no mask stays behind.
 */
function reveal(els: HTMLElement[], cls: string, line: number, stagger: number, delay: (entering: HTMLElement[]) => number = () => 0) {
  const finish = (el: HTMLElement) => {
    el.classList.remove(cls, 'vu');
    el.style.removeProperty('--delai');
  };
  const done = (e: Event) => {
    const el = e.currentTarget as HTMLElement;
    if (e.target === el && el.classList.contains('vu')) finish(el);
  };
  const frames = new Set<number>();
  const io = new IntersectionObserver((entries) => {
    const entering = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
    const start = delay(entering);
    entering.forEach((el, i) => {
      io.unobserve(el);
      el.style.setProperty('--delai', `${start + i * stagger}ms`);
    });
    // One frame later, so the start state has been styled and the motion runs (first paint included);
    // anything that still doesn't animate is finished at once.
    const r1 = requestAnimationFrame(() => {
      entering.forEach((el) => el.classList.add('vu'));
      const r2 = requestAnimationFrame(() => entering.forEach((el) => { if (!el.getAnimations().length) finish(el); }));
      frames.add(r2);
    });
    frames.add(r1);
  }, { rootMargin: `0px 0px -${100 - line}% 0px` });
  els.forEach((el) => {
    el.classList.add(cls);
    el.addEventListener('transitionend', done);
    el.addEventListener('animationend', done);
    io.observe(el);
  });
  return () => {
    io.disconnect();
    frames.forEach(cancelAnimationFrame);
    els.forEach((el) => {
      el.removeEventListener('transitionend', done);
      el.removeEventListener('animationend', done);
      el.classList.remove(cls, 'vu');
      el.style.removeProperty('--delai');
    });
  };
}

/** Spring on `rotate`, about the former elastic.out(1, 0.3) over 1.6s; retargeting keeps its velocity. */
const STIFFNESS = 170;
const DAMPING = 8;
function spring(el: HTMLElement) {
  let x = 0, v = 0, target = 0, last = 0, raf = 0;
  const step = (now: number) => {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    v += (STIFFNESS * (target - x) - DAMPING * v) * dt;
    x += v * dt;
    const settled = Math.abs(target - x) < 0.01 && Math.abs(v) < 0.01;
    if (settled) x = target;
    el.style.rotate = `${x}deg`;
    raf = settled ? 0 : requestAnimationFrame(step);
  };
  return {
    to(t: number) {
      target = t;
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(step);
    },
    stop() {
      cancelAnimationFrame(raf);
      el.style.removeProperty('rotate');
    },
  };
}

/** Noren: the panels sway with scroll speed while the hero is on screen, and under a passing mouse. */
function sway() {
  const pans = all('.noren-pan');
  const hero = document.getElementById('top');
  const springs = pans.map(spring);
  let lastY = scrollY, lastT = performance.now(), rest = 0;
  const onScroll = () => {
    const now = performance.now();
    const speed = ((scrollY - lastY) / Math.max(now - lastT, 1)) * 1000; // px/s
    lastY = scrollY;
    lastT = now;
    if (hero && scrollY < hero.offsetTop + hero.offsetHeight) {
      const v = clamp(speed / 700, -3.5, 3.5);
      springs.forEach((s, i) => s.to(v * (0.7 + i * 0.12)));
    }
    clearTimeout(rest);
    rest = window.setTimeout(() => springs.forEach((s) => s.to(0)), 200);
  };
  addEventListener('scroll', onScroll, { passive: true });
  const offs = pans.map((p, i) => {
    let t = 0;
    const brush = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      springs[i].to(clamp(e.movementX * 0.35, -5, 5));
      clearTimeout(t);
      t = window.setTimeout(() => springs[i].to(0), 90);
    };
    p.addEventListener('pointermove', brush);
    return () => { p.removeEventListener('pointermove', brush); clearTimeout(t); };
  });
  return () => {
    removeEventListener('scroll', onScroll);
    clearTimeout(rest);
    offs.forEach((off) => off());
    springs.forEach((s) => s.stop());
  };
}

/** One way: once sewn, a stitch stays sewn when scrolling back up. Sewn from top 60% to bottom 60%. */
function sew() {
  const lists = all('.process');
  const sewn = lists.map(() => 0);
  const measure = () => {
    lists.forEach((list, i) => {
      if (sewn[i] >= 1) return; // fully sewn: no more layout reads for this list
      const r = list.getBoundingClientRect();
      const p = clamp((innerHeight * 0.6 - r.top) / r.height, 0, 1);
      if (p <= sewn[i]) return;
      sewn[i] = p;
      list.style.setProperty('--p', String(p));
    });
    if (sewn.every((p) => p >= 1)) stop();
  };
  // One read per frame, however many scroll events fire.
  let raf = 0;
  const update = () => { raf ||= requestAnimationFrame(() => { raf = 0; measure(); }); };
  const stop = () => {
    removeEventListener('scroll', update);
    removeEventListener('resize', update);
  };
  lists.forEach((list) => list.style.setProperty('--p', '0'));
  update(); // first read deferred to a frame: no forced layout in the effect
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  return () => {
    cancelAnimationFrame(raf);
    stop();
    lists.forEach((list) => list.style.removeProperty('--p'));
  };
}

export default function useAnimations() {
  useLayoutEffect(() => {
    // Reduced motion: plain fades only, no smooth scroll, masks or movement.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return reveal(all('.reveal, .reveal-img'), 'fondu', 90, 0);

    // lerp 0.2 (default 0.1): smooth but follows the wheel closely, no heavy inertia.
    // Created one frame later: its constructor reads the layout, which the start classes below just invalidated.
    let lenis: Lenis | undefined;
    const lenisFrame = requestAnimationFrame(() => { lenis = new Lenis({ lerp: 0.2, autoRaf: true }); });

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
      const y = anchor ? dockScroll(anchor) : scrollY + r.top - 60;
      if (lenis) lenis.scrollTo(y);
      else scrollTo(0, y);
      section.tabIndex = -1;
      section.style.outline = 'none';
      section.focus({ preventScroll: true });
      history.pushState(null, '', link!.hash);
    };
    document.addEventListener('click', onAnchor);

    // Masks and opacity only: boxes never move, so Dot measures anchors correctly.
    // Start classes are set before first paint (layout effect): no flash.
    const offs = [
      sway(),
      // The hero seal waits for the noren to unfurl.
      reveal(all('.stamp'), 'pressing', 92, 80, (els) => (els.some((el) => el.closest('#top')) ? 1000 : 150)),
      reveal(all('.title.reveal'), 'stroking', 95, 60),
      reveal(all('.reveal:not(.title), .reveal-img'), 'inking', 95, 50),
      sew(),
    ];

    return () => {
      offs.forEach((off) => off());
      document.removeEventListener('click', onAnchor);
      cancelAnimationFrame(lenisFrame);
      lenis?.destroy();
    };
  }, []);
}

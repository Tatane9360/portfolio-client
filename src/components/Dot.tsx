import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Point = { x: number; y: number; s: number; t: number; host: HTMLElement; dock: number };

/**
 * A single circle (the logo's ensō) travels through every [data-dot] anchor in document order.
 * An anchor is reached when it crosses FOCUS of the viewport height; its width sets the circle size.
 * While approaching, the anchor's parent gets `--dock` (0 → 1) so CSS can push or fade the text.
 */
/** Viewport fraction where an anchor is reached; anchor links scroll to the same line. */
export const FOCUS = 0.4;
/** Share of each leg where the circle stays docked on its anchor. */
const DWELL = 0.18;
/** Minimum scroll (px) between two anchors. */
const MIN_GAP = 160;
export default function Dot() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = dot.current!;
    let points: Point[] = [];
    let moveX: gsap.QuickToFunc, moveY: gsap.QuickToFunc, sizeX: gsap.QuickToFunc, sizeY: gsap.QuickToFunc;
    const travel = gsap.parseEase('power2.inOut');
    const near = gsap.parseEase('power2.out');

    const measure = () => {
      const max = ScrollTrigger.maxScroll(window);
      // Hidden anchors (mobile/desktop variants) have no box.
      points = [...document.querySelectorAll<HTMLElement>('[data-dot]')].filter((a) => a.offsetWidth).map((a) => {
        const r = a.getBoundingClientRect();
        const y = r.top + scrollY + r.height / 2;
        return { x: r.left + r.width / 2, y, s: r.width / 100, t: gsap.utils.clamp(0, max, y - innerHeight * FOCUS), host: a.parentElement!, dock: -1 };
      });
      // Anchors on the same line need a minimum scroll gap, otherwise the circle jumps.
      points.forEach((pt, i) => { if (i) pt.t = Math.min(max, Math.max(pt.t, points[i - 1].t + MIN_GAP)); });
    };

    const setDock = (pt: Point, v: number) => {
      const d = Math.round(v * 100) / 100;
      if (d === pt.dock) return;
      pt.dock = d;
      pt.host.style.setProperty('--dock', String(d));
    };

    const update = (scroll: number) => {
      if (!points.length) return;
      let i = points.findIndex((p) => p.t > scroll) - 1;
      if (i === -2) i = points.length - 2;
      if (i < 0) i = 0;
      const a = points[i];
      const b = points[i + 1] ?? a;
      const raw = gsap.utils.clamp(0, 1, (scroll - a.t) / (b.t - a.t || 1));
      const p = gsap.utils.clamp(0, 1, (raw - DWELL) / (1 - 2 * DWELL));
      const e = travel(p);
      // Linear y keeps the circle on screen; eased x and size curve the path.
      moveX(a.x + (b.x - a.x) * e);
      moveY(a.y + (b.y - a.y) * p);
      sizeX(a.s + (b.s - a.s) * e);
      sizeY(a.s + (b.s - a.s) * e);
      points.forEach((pt) => setDock(pt, pt === a ? near(1 - Math.min(1, p * 2.5)) : pt === b ? near(Math.max(0, p * 2.5 - 1.5)) : 0));
    };

    // gsap.context reverts everything on cleanup (Strict Mode replays effects in dev).
    const ctx = gsap.context(() => {
      measure();
      gsap.set(el, { x: points[0]?.x, y: points[0]?.y, scale: (points[0]?.s ?? 1) * 0.9, autoAlpha: 0 });
      gsap.to(el, { autoAlpha: 1, duration: 0.4, ease: 'power3.out' });
      // Scroll is already smoothed by Lenis: a short duration avoids double easing.
      moveX = gsap.quickTo(el, 'x', { duration: 0.25, ease: 'power3.out' });
      moveY = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power3.out' });
      // quickTo doesn't support the `scale` alias: one tween per axis.
      sizeX = gsap.quickTo(el, 'scaleX', { duration: 0.8, ease: 'power3.out' });
      sizeY = gsap.quickTo(el, 'scaleY', { duration: 0.8, ease: 'power3.out' });
      const st = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onRefresh: (self) => { measure(); update(self.scroll()); },
        onUpdate: (self) => update(self.scroll()),
      });
      update(st.scroll());
    });
    return () => {
      ctx.revert();
      points.forEach((pt) => pt.host.style.removeProperty('--dock'));
    };
  }, []);

  return (
    <div ref={dot} aria-hidden="true" className="dot pointer-events-none absolute left-0 top-0 z-30 size-[100px] -ml-[50px] -mt-[50px]">
      <img src="/enso.svg" alt="" draggable={false} className="absolute inset-0 size-full select-none" />
    </div>
  );
}

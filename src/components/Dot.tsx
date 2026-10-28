import { useEffect, useRef } from 'react';
import { dockScroll } from '../dock';

type Point = { x: number; y: number; s: number; t: number; host: HTMLElement | null; dock: number; land: boolean };

/**
 * A single circle (the logo's ensō) travels through every [data-dot] anchor in document order.
 * An anchor is reached at dockScroll(); its width sets the circle size.
 * While approaching a [data-dock] anchor, its parent gets `--dock` (0 → 1) so CSS can push or fade the text.
 */
/** Share of each leg where the circle stays docked on its anchor. */
const DWELL = 0.18;
/** Minimum scroll (px) between two anchors. */
const MIN_GAP = 160;
/** Share of each leg's middle (around 0.5) where the circle is fully hidden while travelling. */
const FADE = 0.85;
/** Time constants (s) of the follow: scroll is already smoothed by Lenis, a short lag avoids double easing. */
const LAG_MOVE = 0.055;
const LAG_SIZE = 0.18;
const LAG_FADE = 0.055;

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const travel = (p: number) => (p < 0.5 ? 4 * p ** 3 : 1 - (2 - 2 * p) ** 3 / 2); // cubic in-out
const near = (p: number) => 1 - (1 - p) ** 3; // cubic out

export default function Dot() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = dot.current!;
    const img = el.firstElementChild as HTMLElement;
    let points: Point[] = [];
    // Drawn values follow their targets each frame.
    const cur = { x: 0, y: 0, s: 1, o: 0 };
    const to = { ...cur };
    let raf = 0, last = 0;

    const measure = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      // Hidden anchors (mobile/desktop variants) have no box.
      points = [...document.querySelectorAll<HTMLElement>('[data-dot]')].filter((a) => a.offsetWidth).map((a) => {
        const r = a.getBoundingClientRect();
        const y = r.top + scrollY + r.height / 2;
        return { x: r.left + r.width / 2, y, s: r.width / 100, t: clamp(dockScroll(a), 0, max), host: a.hasAttribute('data-dock') ? a.parentElement : null, dock: -1, land: a.hasAttribute('data-dot-land') };
      });
      // Anchors on the same line need a minimum scroll gap, otherwise the circle jumps.
      // The landing anchor keeps its position: anchors just before it are pulled earlier instead.
      for (let i = points.findIndex((p) => p.land); i > 0 && points[i - 1].t > points[i].t - MIN_GAP; i--) {
        points[i - 1].t = Math.max(0, points[i].t - MIN_GAP);
      }
      points.forEach((pt, i) => { if (i) pt.t = Math.min(max, Math.max(pt.t, points[i - 1].t + MIN_GAP)); });
    };

    const setDock = (pt: Point, v: number) => {
      const d = Math.round(v * 100) / 100;
      if (!pt.host || d === pt.dock) return;
      pt.dock = d;
      pt.host.style.setProperty('--dock', String(d));
    };

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const follow = (k: keyof typeof cur, lag: number) => { cur[k] += (to[k] - cur[k]) * (1 - Math.exp(-dt / lag)); };
      follow('x', LAG_MOVE);
      follow('y', LAG_MOVE);
      follow('s', LAG_SIZE);
      follow('o', LAG_FADE);
      const settled = Math.abs(to.x - cur.x) < 0.1 && Math.abs(to.y - cur.y) < 0.1 && Math.abs(to.s - cur.s) < 0.001 && Math.abs(to.o - cur.o) < 0.005;
      if (settled) Object.assign(cur, to);
      el.style.transform = `translate(${cur.x}px, ${cur.y}px) scale(${cur.s})`;
      img.style.opacity = String(cur.o);
      raf = settled ? 0 : requestAnimationFrame(draw);
    };
    const kick = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(draw);
    };

    const update = () => {
      if (!points.length) return;
      const scroll = scrollY;
      let i = points.findIndex((p) => p.t > scroll) - 1;
      if (i === -2) i = points.length - 2;
      if (i < 0) i = 0;
      const a = points[i];
      const b = points[i + 1] ?? a;
      const raw = clamp((scroll - a.t) / (b.t - a.t || 1), 0, 1);
      const p = clamp((raw - DWELL) / (1 - 2 * DWELL), 0, 1);
      const e = travel(p);
      // Linear y keeps the circle on screen; eased x and size curve the path.
      to.x = a.x + (b.x - a.x) * e;
      to.y = a.y + (b.y - a.y) * p;
      to.s = a.s + (b.s - a.s) * e;
      // Visible only near an anchor: mid-leg the circle would cross the text between sections.
      to.o = clamp((Math.abs(p * 2 - 1) - FADE) / (1 - FADE), 0, 1);
      points.forEach((pt) => setDock(pt, pt === a ? near(1 - Math.min(1, p * 2.5)) : pt === b ? near(Math.max(0, p * 2.5 - 1.5)) : 0));
      kick();
    };

    measure();
    update();
    // Placed on its first anchor, slightly small, then fades in (index.css) while growing to size.
    Object.assign(cur, to, { s: to.s * 0.9 });
    el.style.transform = `translate(${cur.x}px, ${cur.y}px) scale(${cur.s})`;
    el.style.opacity = '1';

    // Anchors move when the layout does: images and fonts loading, resizes.
    const refresh = () => { measure(); update(); };
    const ro = new ResizeObserver(refresh);
    ro.observe(document.body);
    addEventListener('resize', refresh);
    addEventListener('scroll', update, { passive: true });
    let live = true;
    document.fonts.ready.then(() => { if (live) refresh(); });

    return () => {
      live = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      removeEventListener('resize', refresh);
      removeEventListener('scroll', update);
      points.forEach((pt) => pt.host?.style.removeProperty('--dock'));
      el.style.removeProperty('transform');
      el.style.opacity = '0';
      img.style.removeProperty('opacity');
    };
  }, []);

  return (
    <div ref={dot} aria-hidden="true" style={{ opacity: 0 }} className="dot pointer-events-none absolute left-0 top-0 z-30 size-[100px] -ml-[50px] -mt-[50px]">
      <img src="/enso.svg" alt="" draggable={false} className="absolute inset-0 size-full select-none" />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Point = { x: number; y: number; s: number; t: number; host: HTMLElement; dock: number };

// Un seul cercle pour tout le site : il relie les ancres [data-dot] dans l'ordre du document.
// Chaque ancre est « atteinte » quand elle passe à FOCUS de la hauteur d'écran ; sa largeur fixe la taille du cercle.
// À l'approche, le parent de l'ancre reçoit --dock (0 → 1) : le CSS y pousse ou efface le texte.
export const FOCUS = 0.4; // les liens d'ancre déposent aussi les titres à ce niveau
const DWELL = 0.18;
const MIN_GAP = 160; // px de scroll // part de chaque trajet où le cercle reste amarré à son ancre
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
      // Ancres masquées (variantes mobile/desktop) ignorées : elles n'ont pas de boîte.
      points = [...document.querySelectorAll<HTMLElement>('[data-dot]')].filter((a) => a.offsetWidth).map((a) => {
        const r = a.getBoundingClientRect();
        const y = r.top + scrollY + r.height / 2;
        return { x: r.left + r.width / 2, y, s: r.width / 100, t: gsap.utils.clamp(0, max, y - innerHeight * FOCUS), host: a.parentElement!, dock: -1 };
      });
      // Ancres sur une même ligne (ex. « 1. 2. 3. ») : un minimum de scroll entre elles, sinon le cercle saute.
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
      if (i === -2) i = points.length - 2; // au-delà de la dernière ancre
      if (i < 0) i = 0;
      const a = points[i];
      const b = points[i + 1] ?? a;
      const raw = gsap.utils.clamp(0, 1, (scroll - a.t) / (b.t - a.t || 1));
      // Pause amarrée aux deux bouts du trajet, puis traversée.
      const p = gsap.utils.clamp(0, 1, (raw - DWELL) / (1 - 2 * DWELL));
      const e = travel(p);
      // y linéaire : le cercle reste dans l'écran ; x et taille « easés » : la trajectoire se courbe.
      moveX(a.x + (b.x - a.x) * e);
      moveY(a.y + (b.y - a.y) * p);
      sizeX(a.s + (b.s - a.s) * e);
      sizeY(a.s + (b.s - a.s) * e);
      // Le texte s'écarte juste avant l'arrivée et se referme au départ.
      points.forEach((pt) => setDock(pt, pt === a ? near(1 - Math.min(1, p * 2.5)) : pt === b ? near(Math.max(0, p * 2.5 - 1.5)) : 0));
    };

    // Contexte GSAP : tout est annulé au nettoyage (Strict Mode rejoue l'effet en dev).
    const ctx = gsap.context(() => {
      measure();
      gsap.set(el, { x: points[0]?.x, y: points[0]?.y, scale: 0 });
      // Le scroll est déjà lissé (Lenis, inertie tactile) : un suivi court évite le double amorti.
      moveX = gsap.quickTo(el, 'x', { duration: 0.25, ease: 'power3.out' });
      moveY = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power3.out' });
      // quickTo ne gère pas l'alias « scale » : un tween par axe, réutilisé à chaque frame.
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
      <div className="absolute inset-0 rounded-full bg-red" />
      <div className="dot-ring absolute -inset-[14%] rounded-full border border-ink/40 border-dashed" />
    </div>
  );
}

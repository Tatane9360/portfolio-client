import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const WORDS = ['CONCEVOIR', 'CODER', 'LANCER', 'CROÎTRE'];

export default function Loader() {
  const [done, setDone] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      window.dispatchEvent(new Event('loader:done'));
      return;
    }
    document.body.style.overflow = 'hidden';
    const progress = { value: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          setDone(true);
        },
      });

      tl.to(progress, {
        value: 100,
        duration: WORDS.length * 0.55,
        ease: 'power1.inOut',
        onUpdate: () => {
          const v = Math.round(progress.value);
          if (count.current) count.current.textContent = String(v).padStart(3, '0');
          if (bar.current) bar.current.style.transform = `scaleX(${v / 100})`;
        },
      });

      // mots qui défilent horizontalement, synchro avec la barre
      WORDS.forEach((_, i) => {
        if (i === 0) return;
        tl.to(
          track.current,
          { xPercent: -100 * i, duration: 0.4, ease: 'power3.inOut' },
          (i / WORDS.length) * (WORDS.length * 0.55)
        );
      });

      tl.to(root.current, {
        yPercent: -100,
        duration: 0.7,
        ease: 'power4.inOut',
        // le héros se compose derrière le rideau pendant qu'il se lève
        onStart: () => window.dispatchEvent(new Event('loader:done')),
      }, '+=0.15');
    }, root);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black px-6 py-6 text-[#f4f4f0] md:px-10 md:py-8"
      aria-live="polite"
      aria-label="Chargement"
    >
      <span className="text-xs font-bold tracking-[0.3em] md:text-sm">PORTFOLIO</span>

      <div className="overflow-hidden">
        <div ref={track} className="flex w-full py-2">
          {WORDS.map((w) => (
            <span
              key={w}
              className="w-full shrink-0 text-center text-5xl font-black leading-[1.15] tracking-tighter text-brutalYellow md:text-8xl"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-end">
        <span
          ref={count}
          className="text-6xl font-black leading-none tracking-tighter md:text-8xl"
        >
          000
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-brutalPink" />
      </div>
    </div>
  );
}

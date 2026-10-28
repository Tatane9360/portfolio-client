import { useEffect, useRef, useState } from 'react';
import { liens } from '../liens';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const [actif, setActif] = useState('');

  // Current section: the one crossing the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActif(`#${e.target.id}`); });
    }, { rootMargin: '-50% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggle.current?.focus();
    };
    // The page behind the open menu must not take focus.
    const rest = document.querySelectorAll<HTMLElement>('main, footer');
    rest.forEach((el) => { el.inert = true; });
    document.documentElement.style.overflow = 'hidden';
    addEventListener('keydown', close);
    return () => {
      rest.forEach((el) => { el.inert = false; });
      document.documentElement.style.overflow = '';
      removeEventListener('keydown', close);
    };
  }, [open]);

  // Always visible: its height is --nav (index.css), which full-screen sections subtract.
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-(--nav) items-center justify-between gap-4 px-4 bg-paper text-ink md:px-10">
      <a href="#top" aria-label="Esumi, accueil" className="flex min-h-11 items-center"><Logo className="text-2xl md:text-[1.75rem]" /></a>
      <ul className="hidden gap-6 md:flex lg:gap-9">
        {liens.map((l) => (
          <li key={l.href}>
            <a href={l.href} aria-current={actif === l.href ? 'location' : undefined} className="ink-link text-[0.9375rem] font-medium">{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        {/* Square-cut like a shop's stamp box, signed with the seal: the one rectangle among the round controls. */}
        <a href="#contact" onClick={() => setOpen(false)} className="ink-btn inline-flex min-h-11 items-center gap-3 whitespace-nowrap border border-current px-4 text-[0.9375rem] font-semibold md:px-5">
          <span className="lg:hidden">Écrire</span><span className="hidden lg:inline">Décrire mon projet</span>
          <span aria-hidden="true" className="sceau hidden w-6 -rotate-6 sm:block" />
        </a>
        <button
          ref={toggle}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="relative grid size-11 place-items-center rounded-full bg-ink transition-[scale,background-color] hover:bg-ink/85 active:scale-95 md:hidden"
        >
          <span className={`absolute h-0.5 w-4 bg-paper transition-transform duration-200 ease-ink ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
          <span className={`absolute h-0.5 w-4 bg-paper transition-transform duration-200 ease-ink ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
        </button>
      </div>

      <div
        id="menu-mobile"
        inert={!open}
        className={`absolute inset-x-0 top-full flex h-[calc(100dvh-100%)] flex-col justify-end overscroll-contain seigaiha px-4 pb-10 transition-[clip-path] ease-ink motion-reduce:duration-0 md:hidden ${open ? 'duration-[400ms] ' : 'duration-[250ms] '}${open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)]'}`}
      >
        <ul>
          {liens.map((l, i) => (
            <li key={l.href} className="overflow-hidden">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 50}ms` : '0ms' }}
                className={`title block py-1 text-[17vw] transition-transform ease-ink motion-reduce:duration-0 ${open ? 'duration-[400ms] ' : 'duration-[250ms] '}${open ? 'translate-y-0' : 'translate-y-full'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

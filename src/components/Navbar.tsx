import { useEffect, useState } from 'react';

export const liens = [
  { href: '#approche', label: 'Approche' },
  { href: '#projets', label: 'Projets' },
  { href: '#methode', label: 'Méthode' },
  { href: '#faq', label: 'Questions' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = scrollY;
    const onScroll = () => {
      const y = scrollY;
      if (Math.abs(y - last) < 8) return;
      setHidden(y > last && y > 120);
      last = y;
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.documentElement.style.overflow = 'hidden';
    addEventListener('keydown', close);
    return () => {
      document.documentElement.style.overflow = '';
      removeEventListener('keydown', close);
    };
  }, [open]);

  return (
    <nav onFocus={() => setHidden(false)} className={`fixed inset-x-0 top-0 z-50 flex transition-transform ease-ink motion-reduce:duration-0 ${hidden && !open ? '-translate-y-full duration-300' : 'duration-200'} items-center justify-between gap-4 px-4 py-4 bg-ink text-paper md:px-10`}>
      <a href="#top" aria-label="Accueil"><img src="/logo-esumi.png" alt="Esumi" width="149" height="48" className="h-10 w-auto invert md:h-12" /></a>
      <ul className="hidden gap-8 md:flex">
        {liens.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="label ink-link">{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <a href="#contact" onClick={() => setOpen(false)} className="label ink-btn ink-btn-light border border-current rounded-full px-5 py-2">
          <span className="md:hidden">Mon projet</span><span className="hidden md:inline">Parler de mon projet</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="relative grid size-10 place-items-center rounded-full bg-paper transition-transform active:scale-95 md:hidden"
        >
          <span className={`absolute h-0.5 w-4 bg-ink transition-transform duration-200 ease-ink ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
          <span className={`absolute h-0.5 w-4 bg-ink transition-transform duration-200 ease-ink ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
        </button>
      </div>

      <div
        id="menu-mobile"
        inert={!open}
        className={`absolute inset-x-0 top-full flex h-[calc(100dvh-100%)] flex-col justify-end bg-ink px-4 pb-10 text-paper transition-[clip-path] ease-ink motion-reduce:duration-0 md:hidden ${open ? 'duration-[400ms] ' : 'duration-[250ms] '}${open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)]'}`}
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

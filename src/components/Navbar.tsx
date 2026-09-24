import { useEffect, useState } from 'react';

const liens = [
  { href: '#approche', label: 'Approche' },
  { href: '#projets', label: 'Projets' },
  { href: '#methode', label: 'Méthode' },
  { href: '#faq', label: 'FAQ' },
];

// Courbe du rideau : départ et arrivée lents, traversée rapide.
const ease = 'ease-[cubic-bezier(0.76,0,0.24,1)]';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Menu ouvert : la page ne défile plus derrière, Échap referme.
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
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-4 py-4 bg-paper text-ink md:px-10">
      <a href="#top" aria-label="Accueil"><img src="/logo.png" alt="ES" className="h-8 w-auto" /></a>
      <ul className="hidden gap-8 md:flex">
        {liens.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="label hover:underline underline-offset-4">{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <a href="#contact" onClick={() => setOpen(false)} className="label border border-current rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors">
          Discutons
        </a>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="relative grid size-10 place-items-center rounded-full bg-red transition-transform active:scale-95 md:hidden"
        >
          {/* Deux traits qui se croisent en X à l'ouverture. */}
          <span className={`absolute h-0.5 w-4 bg-paper transition-transform duration-500 ${ease} ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
          <span className={`absolute h-0.5 w-4 bg-paper transition-transform duration-500 ${ease} ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
        </button>
      </div>

      {/* Rideau : descend depuis la barre, les liens remontent en cascade. */}
      <div
        id="menu-mobile"
        inert={!open}
        className={`absolute inset-x-0 top-full flex h-[calc(100dvh-100%)] flex-col justify-end bg-ink px-4 pb-10 text-paper transition-[clip-path] duration-700 motion-reduce:duration-0 md:hidden ${ease} ${open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)]'}`}
      >
        <ul>
          {liens.map((l, i) => (
            <li key={l.href} className="overflow-hidden">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${250 + i * 70}ms` : '0ms' }}
                className={`title block py-1 text-[17vw] transition-transform duration-700 motion-reduce:duration-0 ${ease} ${open ? 'translate-y-0' : 'translate-y-full'}`}
              >
                {l.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import { useEffect, useState } from 'react';

const liens = [
  { href: '#expertise', label: 'Approche' },
  { href: '#projets', label: 'Projets' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between gap-3 p-4 pointer-events-none">
        <a
          href="#top"
          className="pointer-events-auto shrink-0 brutalist-border bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="text-xl font-black uppercase tracking-tighter md:text-2xl">DEV.STUDIO</span>
        </a>

        {/* Desktop : le chemin de lecture reste visible en permanence. */}
        <ul className="pointer-events-auto hidden items-center gap-8 brutalist-border bg-white px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:flex">
          {liens.map((lien) => (
            <li key={lien.href}>
              <a
                href={lien.href}
                className="text-sm font-bold uppercase tracking-wide underline decoration-transparent decoration-4 underline-offset-4 transition-colors hover:decoration-[#FF007F]"
              >
                {lien.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="pointer-events-auto hidden shrink-0 brutalist-border bg-[#FFE800] px-6 py-3 font-bold uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none md:inline-block"
        >
          Discutons
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="pointer-events-auto flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[5px] brutalist-border bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hidden"
        >
          <span aria-hidden="true" className="h-[3px] w-6 bg-black" />
          <span aria-hidden="true" className="h-[3px] w-6 bg-black" />
          <span aria-hidden="true" className="h-[3px] w-6 bg-black" />
        </button>
      </nav>

      {/* Zone du pouce : sur une page de 10 écrans, l'action principale reste sous la main. */}
      <a
        href="#contact"
        className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-black bg-[#FFE800] py-4 text-center text-lg font-bold uppercase tracking-wide active:bg-[#FF007F] active:text-white md:hidden"
      >
        Discutons de votre projet
      </a>

      {/* Menu plein écran : toujours monté pour animer l'entrée ET la sortie, inerte quand fermé. */}
      <div
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-black text-white transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-black uppercase tracking-tighter text-[#FFE800]">DEV.STUDIO</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="relative flex h-12 w-12 items-center justify-center border-4 border-white"
          >
            <span aria-hidden="true" className="absolute h-[3px] w-6 rotate-45 bg-white" />
            <span aria-hidden="true" className="absolute h-[3px] w-6 -rotate-45 bg-white" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
          {liens.map((lien) => (
            <li key={lien.href}>
              <a
                href={lien.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-5xl font-black uppercase tracking-tighter text-white active:text-[#FFE800]"
              >
                {lien.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="m-6 brutalist-border border-white bg-[#FFE800] py-5 text-center text-xl font-bold uppercase text-black"
        >
          Discutons
        </a>
      </div>
    </>
  );
}

import { legal } from '../legal';
import { liens } from './Navbar';

export default function Footer() {
  return (
    <footer className="ink-mist-top relative z-40 w-full bg-ink px-4 py-16 text-paper md:px-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <p className="title max-w-[14ch] text-5xl md:text-6xl">Un projet en tête ?</p>
          <a href="#contact" className="label ink-btn ink-btn-light rounded-full border border-current px-6 py-3">Parler de mon projet</a>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <img src="/logo-esumi-light.png" alt="Esumi" width="186" height="60" className="h-14 w-auto self-start" loading="lazy" />

          <nav aria-label="Pied de page">
            <ul className="flex flex-col gap-3">
              {liens.map((l) => (
                <li key={l.href}><a href={l.href} className="label ink-link">{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            {legal.email && (
              <a href={`mailto:${legal.email}`} className="ink-under self-start">
                {legal.email}
              </a>
            )}
            {legal.telephone && (
              <a href={`tel:${legal.telephone.replace(/\s/g, '')}`} className="ink-under self-start">
                {legal.telephone}
              </a>
            )}
          </div>
        </div>


        <div className="flex flex-col gap-3 text-sm text-paper/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Esumi. Tous droits réservés.</p>
          <a href="/mentions-legales.html" className="ink-link self-start transition-colors hover:text-paper">
            Mentions légales et confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}

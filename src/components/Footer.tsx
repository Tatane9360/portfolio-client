import { legal, whatsapp } from '../legal';
import { liens } from '../liens';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="ourle seigaiha relative z-40 w-full px-4 py-16 md:px-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <Logo className="self-start text-[2rem]" />

          <nav aria-label="Pied de page">
            <ul className="flex flex-col gap-7 md:gap-3">
              {liens.map((l) => (
                <li key={l.href}><a href={l.href} className="label ink-link tap">{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-7 md:gap-3">
            {legal.email && (
              <a href={`mailto:${legal.email}`} className="ink-under tap self-start">
                {legal.email}
              </a>
            )}
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="ink-under tap self-start">
                WhatsApp<span className="sr-only"> (nouvel onglet)</span>
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-indigo-pale md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Esumi. Tous droits réservés.</p>
          <a href="/mentions-legales.html" className="ink-link tap self-start transition-colors hover:text-paper">
            Mentions légales et confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}

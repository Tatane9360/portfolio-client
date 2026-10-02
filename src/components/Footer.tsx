import { legal } from '../legal';

export default function Footer() {
  return (
    <footer className="ink-mist-top relative z-40 w-full bg-ink px-4 py-16 text-paper md:px-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <img src="/logo-esumi-light.png" alt="Esumi" width="186" height="60" className="h-14 w-auto self-start" loading="lazy" />

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

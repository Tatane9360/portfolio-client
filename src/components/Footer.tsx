import { legal } from '../legal';

export default function Footer() {
  return (
    <footer className="relative z-40 w-full bg-ink px-4 py-16 text-paper md:px-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <img src="/logo-light.png" alt="ES" className="h-12 w-auto self-start" />

          <div className="flex flex-col gap-3">
            {legal.email && (
              <a href={`mailto:${legal.email}`} className="underline decoration-red underline-offset-4">
                {legal.email}
              </a>
            )}
            {legal.telephone && (
              <a href={`tel:${legal.telephone.replace(/\s/g, '')}`} className="underline decoration-red underline-offset-4">
                {legal.telephone}
              </a>
            )}
            <a href="#contact" className="underline decoration-red underline-offset-4">
              Discutons
            </a>
          </div>
        </div>


        <div className="flex flex-col gap-3 text-sm text-paper/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} ES. Tous droits réservés.</p>
          <a href="/mentions-legales.html" className="underline underline-offset-4 hover:text-paper">
            Mentions légales et confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}

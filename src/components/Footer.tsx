// À REMPLIR — mentions légales obligatoires pour un site commercial en France.
// Tant qu'une valeur vaut null, la ligne n'est pas rendue : rien de faux ne part en prod.
const legal = {
  raisonSociale: null as string | null, // ex. "Jean Dupont, entrepreneur individuel"
  siret: null as string | null,
  adresse: null as string | null,
  email: null as string | null, // remplace aussi hello@devportfolio.com dans Contact.tsx
  telephone: null as string | null,
  hebergeur: null as string | null, // ex. "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723"
  directeurPublication: null as string | null,
};

const lignes = [
  ['Éditeur', legal.raisonSociale],
  ['SIRET', legal.siret],
  ['Adresse', legal.adresse],
  ['Directeur de publication', legal.directeurPublication],
  ['Hébergeur', legal.hebergeur],
].filter(([, value]) => value) as [string, string][];

export default function Footer() {
  return (
    <footer className="relative z-40 w-full bg-ink px-4 py-16 text-paper md:px-10">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <span className="font-display text-3xl font-extrabold tracking-tight text-red">dev.studio</span>

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
              Démarrer un projet
            </a>
          </div>
        </div>

        {lignes.length > 0 && (
          <dl className="grid grid-cols-1 gap-x-12 gap-y-3 text-sm sm:grid-cols-2">
            {lignes.map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <dt className="text-paper/60">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        <p className="text-sm text-paper/60">
          © {new Date().getFullYear()} dev.studio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

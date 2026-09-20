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
    <footer className="relative z-40 w-full border-t-4 border-black bg-black px-4 pt-16 pb-28 text-white md:px-20 md:pb-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <span className="text-3xl font-black uppercase tracking-tighter text-[#FFE800]">DEV.STUDIO</span>

          <div className="flex flex-col gap-3 font-bold">
            {legal.email && (
              <a href={`mailto:${legal.email}`} className="underline decoration-[#FFE800] decoration-4 underline-offset-4">
                {legal.email}
              </a>
            )}
            {legal.telephone && (
              <a href={`tel:${legal.telephone.replace(/\s/g, '')}`} className="underline decoration-[#FFE800] decoration-4 underline-offset-4">
                {legal.telephone}
              </a>
            )}
            <a href="#contact" className="underline decoration-[#FFE800] decoration-4 underline-offset-4">
              Démarrer un projet
            </a>
          </div>
        </div>

        {lignes.length > 0 && (
          <dl className="grid grid-cols-1 gap-x-12 gap-y-3 text-sm font-bold sm:grid-cols-2">
            {lignes.map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <dt className="text-white/60">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        <p className="text-sm font-bold text-white/60">
          © {new Date().getFullYear()} DEV.STUDIO. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

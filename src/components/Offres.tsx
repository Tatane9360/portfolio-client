import Fleche from './Fleche';

/** Starting prices in euros (null shows « Sur devis »). The disc is dyed per row; the follow-up is drawn as an ensō. */
const offres = [
  {
    nom: 'Site vitrine',
    pour: 'Pour être trouvé sur Google, rassurer et recevoir des appels et des messages.',
    prix: 1200 as number | null,
    disque: 'bg-paper text-ink',
    delai: 'En ligne en 2 à 4 semaines en moyenne.',
    points: ['les pages clés de votre activité', 'rapide et lisible sur mobile', 'déclaré à Google, relié à votre fiche', 'vous appeler ou vous écrire en un geste'],
  },
  {
    nom: 'Boutique en ligne',
    pour: 'Pour vendre vos produits en ligne, en plus de votre vitrine.',
    prix: 2500 as number | null,
    disque: 'bg-indigo-pale text-ink',
    delai: null,
    points: ['tout le site vitrine', 'le paiement en ligne', 'le suivi des commandes', 'vos produits gérés par vous, simplement'],
  },
  {
    nom: 'Application web',
    pour: 'Pour ne plus répéter la même tâche chaque semaine : réservations, devis, suivi de chantier.',
    prix: 5000 as number | null,
    disque: 'bg-shu text-paper',
    delai: 'En ligne en 1 à 3 mois en moyenne.',
    points: ['pensée autour de votre façon de travailler', 'sur téléphone et ordinateur', 'reliée à vos outils si besoin', 'livrée par étapes, testée avec vous'],
  },
  {
    nom: 'Suivi mensuel',
    pour: 'En option, sans engagement de durée : votre site reste à jour sans que vous y pensiez.',
    prix: 49 as number | null,
    mois: true,
    disque: 'text-paper',
    delai: null,
    points: ['mises à jour et sauvegardes', 'petites modifications : textes, photos, horaires', 'un point chaque mois sur les visites et les demandes', 'réponse sous 24 h ouvrées'],
  },
];

const euros = (n: number) => `${n.toLocaleString('fr-FR')} €`;

/** Price board on indigo cloth: one stitched row per offer, its price on a dyed disc, like a shop's tariff sheet. */
export default function Offres() {
  return (
    <section id="offres" aria-labelledby="offres-titre" className="ourle seigaiha px-4 py-24 md:px-10 md:py-28">
      <h2 id="offres-titre" className="title reserve reveal text-[21vw] md:text-[min(8vw,13svh)]">Offres</h2>
      <p className="reveal mt-6 max-w-[34ch] text-xl leading-snug md:text-2xl">
        Un prix de départ pour chaque formule, puis un devis détaillé, fixé avant le début du projet.
      </p>

      <ol className="mt-12 md:mt-16">
        {offres.map((o) => (
          <li key={o.nom} className="reveal stitch-t grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-5 py-8 md:items-center md:gap-x-10 md:py-10">
            <div>
              <h3 className="title reserve text-[clamp(2rem,9vw,4.5rem)] md:text-[clamp(2.25rem,5vw,9svh)]">{o.nom}</h3>
              <p className="mt-3 max-w-[48ch] leading-relaxed md:text-lg">{o.pour}</p>
              <ul className="mt-4 grid gap-x-8 gap-y-1.5 text-indigo-pale sm:grid-cols-2 lg:max-w-[52rem]">
                {o.points.map((pt) => (
                  <li key={pt} className="flex gap-3"><span aria-hidden="true" className="mt-[0.75em] h-0.5 w-3 shrink-0 bg-current" />{pt}</li>
                ))}
              </ul>
              {o.delai && <p className="mt-4 text-sm text-indigo-pale">{o.delai}</p>}
            </div>

            <p className={`relative grid size-26 shrink-0 place-content-center rounded-full text-center md:size-40 lg:size-44 ${o.disque}`}>
              {o.mois && <span aria-hidden="true" className="logo-enso absolute -inset-4 text-paper md:-inset-3" />}
              <span className="label text-[0.625rem] md:text-xs">{o.prix === null ? 'Prix' : o.mois ? 'Dès' : 'À partir de'}</span>
              <span className="title mt-1 text-[1.6rem] tabular-nums whitespace-nowrap md:text-[2.75rem] lg:text-5xl">{o.prix === null ? 'Sur devis' : euros(o.prix)}</span>
              {o.mois && <span className="label mt-1 text-[0.625rem] md:text-xs">/ mois</span>}
            </p>
          </li>
        ))}
      </ol>

      <div className="stitch-t grid gap-10 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-x-4">
        <div className="reveal lg:col-span-5">
          <p className="max-w-[48ch] leading-relaxed md:text-lg">
            Dans chaque formule : des maquettes validées par vous, le site et tous les accès à votre nom, une prise en main à la livraison.
            Seuls le nom de domaine et l’hébergement se paient ensuite chaque année, à votre nom.
          </p>
          <a href="#contact" className="label ink-btn mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-shu px-7 py-3 text-paper">
            Décrire mon projet <Fleche />
          </a>
        </div>

        {/* The guarantee on a sheet of paper laid over the cloth, signed with the seal. */}
        <div className="reveal relative bg-sheet p-8 text-ink md:p-10 lg:col-span-6 lg:col-start-7">
          <span aria-hidden="true" className="sceau stamp absolute top-6 right-6 w-12 rotate-6 md:w-14" />
          <p className="label text-ink-soft">Garantie</p>
          <h3 className="title mt-4 max-w-[18ch] text-[clamp(2rem,9vw,3rem)] lg:text-[clamp(1.75rem,2.6vw,3rem)]">Les maquettes vous déplaisent{' '}: vous ne payez rien</h3>
          <p className="mt-6 max-w-[44ch] leading-relaxed text-ink-soft md:text-lg">
            Les maquettes passent avant la première ligne de code. Si, après nos retouches, elles ne vous ressemblent toujours pas, vous arrêtez le projet, sans rien payer.
          </p>
        </div>
      </div>
    </section>
  );
}

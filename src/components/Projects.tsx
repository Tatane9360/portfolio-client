import Fleche from './Fleche';

const projets = [
  {
    nom: 'Nino Hericher',
    href: 'https://ninohericher.com/',
    image: '/images/nino-hericher-site.webp',
    alt: 'Page d’accueil du site de Nino Hericher : titre « Sound designer & mixeur » en très grandes capitales sur fond sombre, et un bouton pour écouter le récap',
    type: 'Site portfolio sur mesure',
    contexte: 'Un sound designer et mixeur pour le jeu vidéo et le cinéma, à Montpellier.',
    intro: 'Sur le site :',
    points: ['un récap vidéo de ses projets,', 'sept projets, chacun détaillé,', 'une version française et anglaise.'],
  },
  {
    nom: 'Domifée',
    href: 'https://domifee.fr/',
    image: '/images/domifee-site.webp',
    alt: 'Page d’accueil du site Domifée : titre « Le quotidien d’un proche, ou le vôtre. On s’en occupe. », deux boutons de contact et une photo d’une aide à domicile avec un monsieur âgé',
    type: 'Site vitrine sur mesure',
    contexte: 'Une agence d’aide à domicile à Aubervilliers, en Seine-Saint-Denis.',
    intro: 'Le site devait :',
    points: ['rassurer les familles,', 'présenter clairement les services,', 'faciliter la prise de contact.'],
  },
];

export default function Projects() {
  return (
    <section id="projets" className="relative px-4 py-32 md:px-10">
      <h2 aria-label="Projets" className="title reveal text-[22vw] md:text-[min(9vw,13svh)]">
        Pr
        <span className="relative inline-block px-[calc(var(--dock,0)*0.08em)]">
          <span className="opacity-[calc(1-var(--dock,0))]">o</span>
          <span data-dot data-dock className="absolute left-1/2 top-[0.42em] block size-[0.6em] -translate-1/2" />
        </span>
        jets
      </h2>

      {/* Stacked panels: every panel sticks at the same line under the navbar and the next one covers it.
          Desktop only, and only when the screen is tall enough for a full panel: on mobile or a low window
          a sticky panel taller than the screen would hide its own text.
          Témoignages retirés : à remettre avec les vraies paroles des clients (et leur accord). */}
      <div className="mt-16 md:mt-20">
        {projets.map((p, i) => (
          <article
            key={p.nom}
            className="feuille relative isolate bg-sheet text-paper ring-1 ring-ink/10 [&+&]:mt-10 md:[&+&]:mt-[30svh] md:shadow-[0_-24px_48px_-32px_rgb(20_29_51/0.4)] [@media(min-height:40rem)]:md:sticky [@media(min-height:40rem)]:md:top-[calc(var(--nav)+1rem)] [@media(min-height:40rem)]:md:h-[calc(100svh-var(--nav)-3rem)]"
          >
            {/* The label: a strip of the shop's noren sewn along one edge (layout in index.css). Read top to bottom. */}
            <span aria-hidden="true" className="toile" />

            <header className="[grid-area:tete]">
              <h3 className="title reserve reveal break-words text-[14vw] md:text-[clamp(2.25rem,min(4vw,9svh),4.5rem)]">{p.nom}</h3>
              <p className="label mt-3 text-indigo-pale md:mt-4">{p.type}</p>
            </header>

            {/* Desktop: a size container, the screenshot takes the largest box that fits (bar is h-9 = 2.25rem). */}
            <div className="mt-8 min-w-0 [grid-area:capture] md:mt-0 md:flex md:items-center md:justify-center md:[container-type:size]">
              <div className="md:w-[min(100cqw,calc((100cqh-2.25rem)*1384/865))]">
                <p className="flex h-9 items-center bg-ink px-4 text-sm text-paper/70">{new URL(p.href).hostname}</p>
                {/* Duplicate of the text link: hidden from keyboard and screen readers. */}
                <a href={p.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" data-flat className="reveal-img block overflow-hidden">
                  <img className="block h-auto w-full" loading="lazy" src={p.image} width="1384" height="865" alt={p.alt} />
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col [grid-area:texte] md:mt-0 md:self-end">
              <p className="reveal text-lg leading-snug md:text-xl [@media(max-height:50rem)]:md:text-lg">{p.contexte}</p>
              <div className="reveal stitch-t mt-6 pt-6 [@media(max-height:50rem)]:md:mt-4 [@media(max-height:50rem)]:md:pt-4">
                <p className="text-indigo-pale">{p.intro}</p>
                <ul className="mt-3 space-y-2 lg:text-lg [@media(max-height:50rem)]:md:space-y-1 [@media(max-height:50rem)]:md:text-base">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3"><span aria-hidden="true" className="mt-[0.75em] h-0.5 w-3 shrink-0 bg-paper/45" />{pt}</li>
                  ))}
                </ul>
              </div>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="label ink-btn sur-indigo mt-8 inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-current px-6 py-3 [@media(max-height:50rem)]:md:mt-5">
                Voir le site <Fleche diag /><span className="sr-only"> de {p.nom} (nouvel onglet)</span>
              </a>
            </div>

            {/* Tally seal (wariin): pressed across the seam, it binds the label to the work it signs. */}
            <span aria-hidden="true" className={`sceau stamp ${i % 2 ? '-rotate-3' : 'rotate-3'}`} />
          </article>
        ))}
        {/* Sticky travel is bounded by this box's content: the spacer gives the last panel room to land and hold. */}
        <div aria-hidden="true" className="hidden [@media(min-height:40rem)]:md:block md:h-[30svh]" />
      </div>
    </section>
  );
}

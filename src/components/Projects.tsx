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
      <h2 aria-label="Projets" className="title reveal text-[18vw] md:text-[min(7vw,10.5svh)]">
        Pr
        <span className="relative inline-block">
          <span className="opacity-[calc(1-var(--dock,0))]">o</span>
          <span data-dot className="absolute left-1/2 top-[0.53em] block size-[0.5em] -translate-1/2" />
        </span>
        jets
      </h2>

      {/* Editorial spreads: large name, giant folio number beside the image, small text columns, footer mentions.
          Every other spread is mirrored. Témoignages retirés : à remettre avec les vraies paroles des clients (et leur accord). */}
      <div className="mt-16 space-y-8 md:mt-20 md:space-y-10">
        {projets.map((p, i) => (
          <article key={p.nom} className="group bg-paper-deep px-4 pt-8 pb-6 md:px-10 md:pt-12 md:pb-8">
            <div className="grid grid-cols-12 gap-x-4 gap-y-10">
              <div className={`col-span-12 flex flex-col md:col-span-5 ${i % 2 ? 'md:order-last' : ''}`}>
                <h3 className="title reveal text-[20vw] md:text-[min(8vw,14svh)]">{p.nom}</h3>
                <div className="reveal mt-8 grid gap-x-6 gap-y-4 text-pretty leading-relaxed sm:grid-cols-2 md:mt-auto md:pt-10">
                  <p>{p.contexte}</p>
                  <div>
                    <p className="text-ink-soft">{p.intro}</p>
                    <ul className="mt-1">
                      {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`col-span-12 flex items-start gap-3 md:col-span-7 md:gap-6 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
                <div data-flat className="reveal-img min-w-0 flex-1">
                  {/* Ink like the rest of the page; the real colours come back on hover (mouse only, touch keeps colour). */}
                  <img className="block h-auto w-full pointer-fine:grayscale pointer-fine:transition-[filter] pointer-fine:duration-500 pointer-fine:group-hover:grayscale-0" loading="lazy" src={p.image} width="1384" height="865" alt={p.alt} />
                </div>
                <p aria-hidden="true" className="title reveal shrink-0 text-[16vw] md:text-[min(9vw,15svh)]">{i + 1}.</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 md:mt-14">
              <p className="text-sm text-ink-soft">{p.type}</p>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="label ink-under tap">
                Voir le site <span aria-hidden="true">↗</span><span className="sr-only"> de {p.nom} (nouvel onglet)</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <aside className="mt-32 grid grid-cols-12 gap-x-4 brush-t pt-10">
        <div className="col-span-12 flex flex-col md:col-span-5">
          <h3 aria-label="Pour qui ?" className="title reveal text-5xl md:text-6xl xl:text-7xl">P
            <span className="relative inline-block">
              <span className="opacity-[calc(1-var(--dock,0))]">o</span>
              <span data-dot className="absolute left-1/2 top-[0.53em] block size-[0.5em] -translate-1/2" />
            </span>
            ur qui{'\u00a0'}?
          </h3>
          <div className="mt-6">
            <p className="reveal max-w-[42ch] leading-relaxed md:text-lg">
              Artisans, commerçants, indépendants : un site vitrine, une boutique en ligne ou une application, avec un seul interlocuteur du début à la fin.
            </p>
            <a href="#contact" className="label ink-btn mt-8 inline-flex min-h-11 items-center rounded-full border border-current px-6 py-3">Parler de mon projet</a>
          </div>
        </div>
        <div className="reveal-img col-span-12 mt-10 aspect-[4/3] overflow-hidden md:col-span-7 md:col-start-6 md:mt-0 md:aspect-[16/10]">
          <img className="photo" loading="lazy" src="/images/projet-menuisier.webp" width="960" height="720" alt="Un menuisier souriant dans son atelier" />
        </div>
      </aside>
    </section>
  );
}

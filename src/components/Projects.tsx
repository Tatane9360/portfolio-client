import Fleche from './Fleche';

const projets = [
  {
    nom: 'Domifée',
    href: 'https://domifee.fr/',
    image: '/images/domifee-accueil.webp',
    type: 'Site vitrine sur mesure',
    contexte: 'Une agence d’aide à domicile à Aubervilliers, en Seine-Saint-Denis.',
    intro: 'Le site devait :',
    points: ['rassurer les familles,', 'présenter clairement les services,', 'faciliter la prise de contact.'],
  },
  {
    nom: 'Nino Hericher',
    href: 'https://ninohericher.com/',
    image: '/images/nino-hericher-site.webp',
    type: 'Site portfolio sur mesure',
    contexte: 'Un sound designer et mixeur pour le jeu vidéo et le cinéma, à Montpellier.',
    intro: 'Sur le site :',
    points: ['un récap vidéo de ses projets,', 'sept projets, chacun détaillé,', 'une version française et anglaise.'],
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

      {/* Shop signs (kanban): each site hangs from a bamboo rod, turned toward its caption.
          Témoignages retirés : à remettre avec les vraies paroles des clients (et leur accord). */}
      <div className="mt-20 space-y-28 md:mt-28 md:space-y-40">
        {projets.map((p, i) => (
          <article key={p.nom} className="enseigne grid grid-cols-1 items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10">
            <div className={`scene relative px-3 pt-4 pb-10 sm:px-8 lg:col-span-8 lg:px-12 lg:row-start-1 ${i % 2 ? 'lg:col-start-5' : 'lg:col-start-1'}`}>
              <span aria-hidden="true" className="ombre" />
              <div className="balancier">
                {/* Duplicate of the text link: hidden from keyboard and screen readers, so the picture is decorative (alt=""). */}
                <a href={p.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="pancarte">
                  <span className="tringle absolute -inset-x-[4%] top-0 h-3 rounded-full" />
                  <span className="cordes" />
                  <span className="face">
                    <span className="flex h-8 items-center bg-ink px-3 text-xs text-paper/70 md:h-9 md:px-4 md:text-sm">{new URL(p.href).hostname}</span>
                    <span className="ecran">
                      <img className="block h-auto w-full" loading="lazy" decoding="async" src={p.image} srcSet={`${p.image.replace('.webp', '-640.webp')} 640w, ${p.image.replace('.webp', '-960.webp')} 960w, ${p.image} 1384w`} sizes="(min-width: 64rem) 60vw, 100vw" width="1384" height="865" alt="" />
                    </span>
                  </span>
                  <span className={`sceau stamp ${i % 2 ? '-rotate-6' : 'rotate-6'}`} />
                </a>
              </div>
            </div>

            <div className={`max-w-xl px-1 lg:row-start-1 lg:px-0 ${i % 2 ? 'lg:col-span-4 lg:col-start-1' : 'lg:col-span-4 lg:col-start-9'}`}>
              <h3 className="title reveal break-words text-[14vw] sm:text-6xl lg:text-[clamp(2.75rem,4.4vw,4.75rem)]">{p.nom}</h3>
              <p className="label reveal mt-4 text-indigo">{p.type}</p>
              <p className="reveal mt-6 text-lg leading-snug md:text-xl">{p.contexte}</p>
              <div className="reveal stitch-t mt-6 pt-6">
                <p className="text-ink-soft">{p.intro}</p>
                <ul className="mt-3 space-y-2 lg:text-lg">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3"><span aria-hidden="true" className="mt-[0.75em] h-0.5 w-3 shrink-0 bg-ink/45" />{pt}</li>
                  ))}
                </ul>
              </div>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="label ink-btn mt-8 inline-flex min-h-11 items-center gap-3 rounded-full border border-current px-6 py-3">
                Voir le site <Fleche diag /><span className="sr-only"> de {p.nom} (nouvel onglet)</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

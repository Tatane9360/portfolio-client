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

      {/* Stacked panels: each panel sticks under the navbar and the next one slides over it.
          Desktop only: on mobile a sticky panel taller than the screen would hide its own text.
          Témoignages retirés : à remettre avec les vraies paroles des clients (et leur accord). */}
      <div className="mt-16 space-y-10 md:mt-20 md:space-y-[30svh]">
        {projets.map((p, i) => (
          <article
            key={p.nom}
            style={{ '--i': i } as React.CSSProperties}
            className="group flex flex-col bg-paper-deep p-4 md:sticky md:top-[calc(var(--nav)+1rem+var(--i)*1.25rem)] md:h-[calc(100svh-var(--nav)-3rem)] md:p-8 md:shadow-[0_-24px_48px_-32px_rgb(34_33_30/0.45)] lg:p-10"
          >
            {/* Read order: who, what, then the proof. */}
            <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
              <h3 className="title reveal text-[12vw] md:text-[min(6vw,10svh)]">{p.nom}</h3>
              <p className="label text-ink-soft md:pb-[0.4em]">{p.type}</p>
            </header>

            {/* Row is a size container: the screenshot takes the width its height allows (bar is h-9 = 2.25rem),
                capped to leave 15rem + gap for the text, which takes whatever is left. */}
            <div className="mt-6 flex min-h-0 flex-1 flex-col gap-8 md:mt-8 md:flex-row md:gap-10 md:[container-type:size]">
              <div className="md:w-[min(calc(100cqw-17.5rem),calc((100cqh-2.25rem)*1384/865))] md:shrink-0">
                <p className="flex h-9 items-center bg-ink px-4 text-sm text-paper/70">{new URL(p.href).hostname}</p>
                {/* Duplicate of the text link: hidden from keyboard and screen readers. */}
                <a href={p.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" data-flat className="reveal-img block overflow-hidden">
                  <img className="block h-auto w-full" loading="lazy" src={p.image} width="1384" height="865" alt={p.alt} />
                </a>
              </div>

              <div className="flex min-w-0 flex-1 flex-col md:max-w-[28rem]">
                <p aria-hidden="true" className="title mb-4 text-5xl tabular-nums text-ink/25 md:mb-6 md:text-8xl [@media(max-height:50rem)]:md:text-7xl">{String(i + 1).padStart(2, '0')}</p>
                {/* Number at the top, text anchored to the bottom of the screenshot: the column fills the panel height. */}
                <div className="flex flex-col md:mt-auto">
                  <p className="reveal text-xl leading-snug md:text-2xl [@media(max-height:50rem)]:md:text-xl">{p.contexte}</p>
                  <div className="reveal brush-t mt-6 pt-6 md:mt-8 md:pt-8 [@media(max-height:50rem)]:md:mt-5 [@media(max-height:50rem)]:md:pt-5">
                    <p className="text-ink-soft">{p.intro}</p>
                    <ul className="mt-3 space-y-2 md:text-lg [@media(max-height:50rem)]:md:space-y-1 [@media(max-height:50rem)]:md:text-base">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3"><span aria-hidden="true" className="mt-[0.8em] h-px w-4 shrink-0 bg-gold" />{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="label ink-btn mt-8 inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-current px-6 py-3 md:mt-10 [@media(max-height:50rem)]:md:mt-6">
                    Voir le site <span aria-hidden="true">↗</span><span className="sr-only"> de {p.nom} (nouvel onglet)</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

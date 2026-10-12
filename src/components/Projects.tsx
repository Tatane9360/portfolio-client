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

      <article className="mt-20 grid grid-cols-12 gap-x-4 gap-y-8">
        <div className="relative col-span-12 md:col-span-8">
          <div data-flat className="reveal-img aspect-[16/10] overflow-hidden border border-ink/15">
            <img className="size-full object-cover object-top" loading="lazy" src="/images/domifee-site.webp" width="1384" height="865" alt="Page d'accueil du site Domifée : titre « Le quotidien d'un proche, ou le vôtre. On s'en occupe. », deux boutons de contact et une photo d'une aide à domicile avec un monsieur âgé" />
          </div>
        </div>
        <div className="col-span-12 flex flex-col md:col-span-4 md:pl-6 xl:pl-12">
          <h3 className="title reveal text-6xl md:text-7xl">Domifée</h3>
          <div className="reveal mt-6 max-w-[42ch] space-y-4 leading-relaxed md:text-lg">
            <p className="label text-ink-soft">Site vitrine sur mesure</p>
            <p>
              Un site pour une agence d'aide à domicile à Aubervilliers : rassurer les familles, présenter clairement les services et faciliter la prise de contact.
            </p>
          </div>
          {/* Témoignage retiré : à remettre avec les vraies paroles de Domifée (et leur accord). */}
          <div className="mt-auto pt-8">
            <a href="https://domifee.fr/" target="_blank" rel="noopener noreferrer" className="label ink-under tap">
              Voir le site ↗
            </a>
          </div>
        </div>
      </article>

      <aside className="mt-40 grid grid-cols-12 gap-x-4 brush-t pt-10">
        <div className="col-span-12 flex flex-col justify-end md:col-span-5">
          <h3 aria-label="Et si c'était vous ?" className="title reveal text-5xl md:text-6xl xl:text-7xl">Et si c'était v
            <span className="relative inline-block">
              <span className="opacity-[calc(1-var(--dock,0))]">o</span>
              <span data-dot className="absolute left-1/2 top-[0.53em] block size-[0.5em] -translate-1/2" />
            </span>
            us{'\u00a0'}?
          </h3>
          <div className="mt-6">
            <p className="reveal max-w-[42ch] leading-relaxed md:text-lg">
              Votre projet pourrait être le prochain : site vitrine, boutique en ligne ou application.
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

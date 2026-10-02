export default function Projects() {
  return (
    <section id="projets" className="relative px-4 py-32 md:px-10">
      <h2 aria-label="projets" className="title reveal text-[18vw] md:text-[10vw]">
        pr
        <span className="relative inline-block">
          <span className="opacity-[calc(1-var(--dock,0))]">o</span>
          <span data-dot className="absolute left-1/2 top-[0.53em] block size-[0.5em] -translate-1/2" />
        </span>
        jets
      </h2>

      <article className="mt-20 grid grid-cols-12 gap-x-4 gap-y-8">
        <div className="relative col-span-12 md:col-span-7">
          <div className="reveal-img aspect-[16/10] overflow-hidden">
            <img className="photo" loading="lazy" src="/images/domifee.webp" width="1400" height="933" alt="Une aide à domicile et une dame âgée qui rient ensemble dans un salon" />
          </div>
        </div>
        <div className="col-span-12 flex flex-col md:col-span-5">
          <h3 className="title reveal text-6xl md:text-7xl">domifée</h3>
          <div className="reveal mt-6 max-w-[42ch] space-y-4 leading-relaxed">
            <p className="label text-ink-soft">Site vitrine sur mesure</p>
            <p>
              Un site pour une agence d'aide à domicile à Aubervilliers : rassurer les familles, présenter clairement les services et faciliter la prise de contact.
            </p>
          </div>
          <div className="mt-auto pt-8">
            <a href="https://domifee.fr/" target="_blank" rel="noopener noreferrer" className="label ink-under">
              Voir le site ↗
            </a>
          </div>
        </div>
      </article>

      {/* Pas un projet : l'invitation à devenir le suivant. Volontairement non numérotée. */}
      <aside className="mt-40 grid grid-cols-12 gap-x-4 brush-t pt-10">
        <div className="col-span-12 md:col-span-6 md:col-start-3">
          <h3 aria-label="et si c'était vous ?" className="title reveal text-5xl md:text-7xl">et si c'était v
            <span className="relative inline-block">
              <span className="opacity-[calc(1-var(--dock,0))]">o</span>
              <span data-dot className="absolute left-1/2 top-[0.53em] block size-[0.5em] -translate-1/2" />
            </span>
            us ?
          </h3>
          <p className="reveal mt-6 max-w-[42ch] leading-relaxed">
            Votre projet pourrait être le prochain : site vitrine, boutique en ligne ou application.
          </p>
          <a href="#contact" className="label ink-under mt-6 inline-block">Discutons →</a>
        </div>
        <div className="reveal-img col-span-12 mt-10 aspect-[4/3] overflow-hidden md:col-span-4 md:mt-0">
          <img className="photo" loading="lazy" src="/images/projet-menuisier.webp" width="960" height="720" alt="Un menuisier souriant dans son atelier" />
        </div>
      </aside>
    </section>
  );
}

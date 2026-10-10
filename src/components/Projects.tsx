export default function Projects() {
  return (
    <section id="projets" className="relative px-4 py-32 md:px-10">
      <h2 aria-label="Projets" className="title reveal text-[18vw] md:text-[min(10vw,15svh)]">
        Pr
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
          <h3 className="title reveal text-6xl md:text-7xl">Domifée</h3>
          <div className="reveal mt-6 max-w-[42ch] space-y-4 leading-relaxed">
            <p className="label text-ink-soft">Site vitrine sur mesure</p>
            <p>
              Un site pour une agence d'aide à domicile à Aubervilliers : rassurer les familles, présenter clairement les services et faciliter la prise de contact.
            </p>
          </div>
          {/* TEMPORARY: placeholder quote, replace with Domifée's real words (and consent) before going live. */}
          <figure className="reveal mt-8 max-w-[42ch] brush-t pt-6">
            <blockquote className="font-display text-xl leading-snug font-light md:text-2xl">
              « On voulait un site qui rassure les familles. On a été écoutés du début à la fin, et on a toujours une réponse rapide. »
            </blockquote>
            <figcaption className="label mt-4 text-ink-soft">Domifée, aide à domicile</figcaption>
          </figure>
          <div className="mt-auto pt-8">
            <a href="https://domifee.fr/" target="_blank" rel="noopener noreferrer" className="label ink-under">
              Voir le site ↗
            </a>
          </div>
        </div>
      </article>

      <aside className="mt-40 grid grid-cols-12 gap-x-4 brush-t pt-10">
        <div className="col-span-12 md:col-span-6 md:col-start-3">
          <h3 aria-label="Et si c'était vous ?" className="title reveal text-5xl md:text-7xl">Et si c'était v
            <span className="relative inline-block">
              <span className="opacity-[calc(1-var(--dock,0))]">o</span>
              <span data-dot className="absolute left-1/2 top-[0.53em] block size-[0.5em] -translate-1/2" />
            </span>
            us ?
          </h3>
          <p className="reveal mt-6 max-w-[42ch] leading-relaxed">
            Votre projet pourrait être le prochain : site vitrine, boutique en ligne ou application.
          </p>
          <a href="#contact" className="label ink-under mt-6 inline-block">Parler de mon projet →</a>
        </div>
        <div className="reveal-img col-span-12 mt-10 aspect-[4/3] overflow-hidden md:col-span-4 md:mt-0">
          <img className="photo" loading="lazy" src="/images/projet-menuisier.webp" width="960" height="720" alt="Un menuisier souriant dans son atelier" />
        </div>
      </aside>
    </section>
  );
}

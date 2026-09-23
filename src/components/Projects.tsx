export default function Projects() {
  return (
    <section id="projets" className="relative px-4 py-32 md:px-10">
      <h2 className="title reveal text-[18vw] md:text-[10vw]">
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
            <img className="photo" loading="lazy" src="https://images.unsplash.com/photo-1765896387387-0538bc9f997e?w=1400&q=80&auto=format" alt="Aide-soignante souriante aux côtés d'une personne âgée" />
          </div>
        </div>
        <div className="col-span-12 flex flex-col md:col-span-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="title reveal text-6xl md:text-7xl">domifée</h3>
            <span className="title text-6xl md:text-8xl">1<span data-dot className="ml-[0.04em] inline-block size-[0.17em] rounded-full bg-red motion-safe:opacity-[calc(1-var(--dock,0))]" /></span>
          </div>
          <div className="reveal mt-6 max-w-[42ch] space-y-4 leading-relaxed">
            <p className="label text-ink/60">Site vitrine · Next.js · Aide à domicile</p>
            <p>
              Un site pour une agence d'aide à domicile à Aubervilliers : rassurer les familles, présenter clairement les services et faciliter la prise de contact.
            </p>
          </div>
          <div className="mt-auto flex items-end gap-4 pt-8">
            <div className="reveal-img aspect-square w-32 overflow-hidden md:w-40">
              <img className="photo" loading="lazy" src="https://images.unsplash.com/photo-1627752885954-e6956866dcbf?w=500&q=80&auto=format" alt="" />
            </div>
            <a href="https://domifee.fr/" target="_blank" rel="noopener noreferrer" className="label border-b border-ink pb-1 hover:text-red hover:border-red">
              Voir le site ↗
            </a>
          </div>
        </div>
      </article>

      <article className="mt-40 grid grid-cols-12 gap-x-4 border-t border-ink/20 pt-10">
        <span className="title col-span-3 text-6xl md:col-span-2 md:text-8xl">2<span data-dot className="ml-[0.04em] inline-block size-[0.17em] rounded-full bg-red motion-safe:opacity-[calc(1-var(--dock,0))]" /></span>
        <div className="col-span-9 md:col-span-6">
          <h3 className="title reveal text-5xl md:text-7xl">et si c'était vous ?</h3>
          <p className="reveal mt-6 max-w-[42ch] leading-relaxed">
            Votre projet pourrait être le prochain : site vitrine, application, e-commerce.
          </p>
          <a href="#contact" className="label mt-6 inline-block border-b border-ink pb-1 hover:text-red hover:border-red">Discutons →</a>
        </div>
      </article>
    </section>
  );
}

const principes = [
  { title: "J'écoute", desc: "Avant d'écrire du code, je prends le temps de comprendre votre activité, vos clients et ce que vous attendez du site.", indent: '' },
  { title: 'Je construis', desc: 'Chaque page a un but : un appel, un devis, une vente. Le design est pensé pour y mener vos visiteurs.', indent: 'md:ml-[16%] 2xl:ml-[28%]' },
  { title: 'Je reste', desc: 'Après la mise en ligne, je reste joignable pour les corrections, les ajouts et les évolutions.', indent: 'md:ml-[32%] 2xl:ml-[56%]' },
];

export default function Approach() {
  return (
    <section id="approche" className="relative grid grid-cols-12 gap-x-4 gap-y-12 px-4 py-32 md:px-10">
      <h2 className="title reveal relative col-span-12 text-[15vw] md:col-span-5 md:text-[min(7vw,10.5svh)]">
        <span data-dot className="absolute left-0 top-[0.5em] block size-[0.55em] -translate-y-1/2" />
        <span className="inline-block translate-x-[calc(var(--dock,0)*0.7em)]">L'approche</span>
      </h2>

      <div className="relative col-span-8 md:col-span-7 md:col-start-6 md:row-span-2 md:row-start-1">
        <div className="reveal-img aspect-[4/5] overflow-hidden md:aspect-[16/10]">
          <img className="photo md:object-top" loading="lazy" src="/images/approche-boulanger.webp" width="880" height="1100" alt="Une boulangerie au travail, vue depuis la vitrine" />
        </div>
      </div>

      <div className="reveal col-span-12 max-w-[56ch] space-y-5 text-lg leading-relaxed md:col-span-4 md:row-start-2">
        <p className="font-display text-2xl leading-snug font-light">
          Un site fait à la va-vite qui ne vous ressemble pas, ou un prestataire qui ne répond plus en cours de projet : c'est souvent là que l'on se rencontre.
        </p>
        <p>
          Il vous faut quelqu'un qui comprend ce que vous voulez faire et qui le transforme en un site fiable, qui vous amène des clients.
        </p>
      </div>

      <ol className="col-span-12 mt-16 space-y-20 md:mt-8 md:space-y-20">
        {principes.map((p) => (
          <li key={p.title} className={`reveal grid gap-4 md:h-[min(5.5vw,8.5svh)] md:grid-cols-[auto_minmax(0,38ch)] md:items-start md:justify-start md:gap-12 ${p.indent}`}>
            <h3 className="title whitespace-nowrap text-[11vw] md:text-[min(5.5vw,8.5svh)]">
              {p.title}<span data-dot className="ml-[0.04em] inline-block size-[0.14em] rounded-full bg-ink motion-safe:opacity-[calc(1-var(--dock,0))]" />
            </h3>
            <p className="leading-relaxed text-ink-soft md:pt-1 md:text-lg md:text-ink">{p.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const principes = [
  { title: "J'écoute d'abord", desc: "Avant d'écrire du code, je prends le temps de comprendre votre activité, vos clients et ce que vous attendez du site." },
  { title: 'Je construis pour convertir', desc: "Chaque page a un objectif : un appel, un devis, une vente. Le design est pensé pour y mener vos visiteurs." },
  { title: 'Je reste après la livraison', desc: "Après la mise en ligne, je reste disponible pour les corrections, les ajouts et les évolutions." },
];

export default function Approach() {
  return (
    <section id="approche" className="relative grid grid-cols-12 gap-x-4 gap-y-12 px-4 py-32 md:px-10">
      <h2 className="title reveal relative col-span-12 text-[15vw] md:col-span-7 md:text-[10vw]">
        <span data-dot className="absolute left-0 top-[0.5em] block size-[0.55em] -translate-y-1/2" />
        <span className="inline-block translate-x-[calc(var(--dock,0)*0.7em)]">l'approche</span>
      </h2>

      <div className="relative col-span-8 md:col-span-4 md:col-start-9 md:row-span-2">
        <div className="reveal-img aspect-[4/5] overflow-hidden">
          <img className="photo" loading="lazy" src="/images/approche-bureau.webp" alt="Bureau avec ordinateur portable, lampe et carnets" />
        </div>
      </div>

      <div className="reveal col-span-12 max-w-[56ch] space-y-5 text-lg leading-relaxed md:col-span-6">
        <p className="font-display text-2xl leading-snug font-medium">
          Votre site ne vous ressemble pas. Le builder fait amateur. Le dernier dev a disparu au milieu du projet.
        </p>
        <p>
          Il vous faut quelqu'un qui comprend ce que vous voulez faire et qui le transforme en un site fiable, qui vous amène des clients.
        </p>
      </div>

      <ol className="col-span-12 grid gap-10 border-t border-ink/20 pt-10 md:col-span-8 md:grid-cols-3">
        {principes.map((p, i) => (
          <li key={p.title} className="reveal">
            <span className="title text-5xl">{i + 1}<span data-dot className="ml-[0.04em] inline-block size-[0.17em] rounded-full bg-red motion-safe:opacity-[calc(1-var(--dock,0))]" /></span>
            <h3 className="mt-4 font-display text-xl font-extrabold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

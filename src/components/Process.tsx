const steps = [
  { title: 'Appel découverte', desc: '30 min. Gratuit. On parle de votre projet, vos objectifs, vos contraintes. Zéro engagement.' },
  { title: 'Proposition claire', desc: 'Un devis détaillé et un planning, pour savoir ce qui sera fait et quand.' },
  { title: 'On construit ensemble', desc: 'Des points réguliers et des démos au fil du projet : vous suivez l’avancement de près.' },
  { title: 'Lancement & suivi', desc: 'Mise en ligne, prise en main de l’outil, puis suivi quand vous en avez besoin.' },
];

// Le cercle saute d'étape en étape : une ancre par étape.
export default function Process() {
  return (
    <section id="methode" className="grid grid-cols-12 gap-x-4 px-4 py-32 md:px-10">
      <div className="col-span-12 md:col-span-4">
        <h2 className="title reveal text-[18vw] md:sticky md:top-24 md:text-[7vw]">méthode</h2>
      </div>
      <div className="col-span-12 md:col-span-7 md:col-start-6">
        <div className="reveal-img mb-16 aspect-[16/9] overflow-hidden">
          <img className="photo" loading="lazy" src="/images/methode-echange.webp" alt="Échange autour d'une table" />
        </div>
        <ol>
          {steps.map((s) => (
            <li key={s.title} className="reveal grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ink/20 py-10 md:grid-cols-[6rem_1fr]">
              <span data-dot className="mt-1 block size-6 rounded-full border border-ink/30 md:size-10" />
              <div>
                <h3 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-ink/75">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

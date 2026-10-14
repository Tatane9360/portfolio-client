const steps = [
  {
    title: 'Écoute',
    desc: 'Un appel de 20 minutes, gratuit et sans engagement, pour comprendre votre activité, vos clients et ce que le site doit vous apporter.',
    get: 'un devis détaillé et un planning',
  },
  {
    title: 'Maquettes',
    desc: 'Je dessine les pages clés et on les ajuste ensemble jusqu’à ce qu’elles vous ressemblent, avant la première ligne de code.',
    get: 'des maquettes validées par vous',
  },
  {
    title: 'Développement',
    desc: 'Je construis un site rapide et lisible sur mobile, en 2 à 4 semaines en moyenne pour un site vitrine. Vous suivez l’avancement sur une version de test, mise à jour au fil des semaines.',
    get: 'une version de test en ligne',
  },
  {
    title: 'Mise en ligne',
    desc: 'Publication, nom de domaine, déclaration à Google, puis une prise en main pour que vous soyez autonome au quotidien.',
    get: 'votre site en ligne, et les clés',
  },
  {
    title: 'Suivi',
    desc: 'Après la livraison, vous gardez le même interlocuteur pour les corrections, les mises à jour et les nouvelles pages quand votre activité évolue.',
    get: 'un interlocuteur qui connaît votre projet',
  },
];

/** Timeline: the brush line is drawn by `--p`, set in useGsapAnimations. One [data-dot] anchor per step. */
export default function Process() {
  return (
    <section id="methode" className="grid grid-cols-12 gap-x-4 px-4 py-32 md:px-10">
      <div className="col-span-12 md:col-span-4">
        <div className="md:sticky md:top-24">
          <h2 className="title reveal text-[18vw] md:text-[min(7vw,10.5svh)]">Méthode</h2>
          <p className="reveal mt-6 max-w-[26ch] text-xl leading-snug font-normal md:text-2xl">
            Cinq étapes, un seul interlocuteur du premier appel au suivi.
          </p>
        </div>
      </div>
      <div className="col-span-12 mt-16 md:col-span-7 md:col-start-6 md:mt-0">
        <div className="reveal-img mb-20 aspect-[16/9] overflow-hidden">
          <img className="photo" loading="lazy" src="/images/methode-maquettes.webp" width="1600" height="900" alt="Maquettes de pages web dessinées à la main sur papier" />
        </div>
        <ol className="process relative">
          <span aria-hidden="true" className="process-line" />
          {steps.map((s) => (
            <li key={s.title} className="reveal relative grid grid-cols-[3.5rem_1fr] gap-4 pb-16 last:pb-0 md:grid-cols-[6rem_1fr]">
              <span className="flex justify-center">
                <span data-dot className="mt-1 block size-6 rounded-full border border-ink/30 bg-paper md:size-10" />
              </span>
              <div className="2xl:grid 2xl:grid-cols-[minmax(0,48ch)_minmax(0,1fr)] 2xl:gap-x-12">
                <h3 className="font-display text-3xl font-light md:text-4xl 2xl:col-span-2">{s.title}</h3>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-soft md:text-lg">{s.desc}</p>
                <p className="mt-4 2xl:mt-3 2xl:text-lg">
                  <span className="text-ink-soft 2xl:block">Vous repartez avec </span>{s.get}.
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="reveal mt-16 pl-[4.5rem] md:pl-28">
          <a href="#contact" className="label ink-btn ink-btn-light self-start inline-flex min-h-11 items-center rounded-full border border-ink bg-ink px-6 py-3 text-paper">Parler de mon projet</a>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: 'Écoute',
    desc: 'Vous me racontez votre projet par message, sur WhatsApp ou par email. Je vous réponds sous 24 h ouvrées avec mes questions sur votre activité, vos clients et ce que le site doit vous apporter. On s’appelle seulement si vous le souhaitez.',
    get: 'un devis détaillé et un planning',
  },
  {
    title: 'Maquettes',
    desc: 'Je dessine les pages clés et on les ajuste ensemble jusqu’à ce qu’elles vous ressemblent, avant la première ligne de code. Si elles ne vous conviennent toujours pas, vous arrêtez là, sans rien payer.',
    get: 'des maquettes validées par vous',
  },
  {
    title: 'Développement',
    desc: 'Je construis un site rapide et lisible sur mobile, en 2 à 4 semaines en moyenne pour un site vitrine. Vous suivez l’avancement sur une version de test, mise à jour au fil des semaines.',
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

/** Ledger of the method, one line per step like a detailed quote: step, what happens, what you leave with.
    The stitched line is sewn by `--p` (useAnimations) and threads one [data-dot] anchor per step. */
export default function Process() {
  return (
    <section id="methode" aria-labelledby="methode-titre" className="px-4 py-32 md:px-10">
      <header className="grid grid-cols-12 gap-x-4 lg:items-end">
        <div className="col-span-12 lg:col-span-7">
          <h2 id="methode-titre" className="title reveal text-[21vw] md:text-[min(8vw,13svh)]">Méthode</h2>
          <p className="reveal mt-6 max-w-[26ch] text-xl leading-snug md:text-2xl">
            Cinq étapes, un seul interlocuteur du premier message au suivi.
          </p>
        </div>
        <div className="reveal-img col-span-12 mt-12 aspect-[16/9] overflow-hidden md:col-span-8 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <img className="photo" loading="lazy" src="/images/methode-maquettes.webp" width="1600" height="900" alt="Maquettes de pages web dessinées à la main sur papier" />
        </div>
      </header>

      {/* The thread sits beside the list, not in it: an <ol> may only hold <li>. */}
      <div className="process relative mt-16 md:mt-20">
        <span aria-hidden="true" className="process-line" />
        <ol>
        {steps.map((s, i) => (
          <li key={s.title} className="reveal relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[6rem_minmax(0,1fr)]">
            <span className="flex justify-center pt-8 md:pt-10">
              <span data-dot className="block size-6 rounded-full border border-ink/30 bg-paper md:size-10" />
            </span>
            {/* Ruled line of the ledger: the stitch runs under the text columns, never across the thread. */}
            <div className={`py-8 md:py-10 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,3fr)] lg:gap-x-10 ${i ? 'stitch-t' : ''}`}>
              <h3 className="title break-words text-[clamp(2rem,9vw,3rem)] md:text-[clamp(2.25rem,4vw,7svh)] lg:text-[clamp(1.75rem,2.6vw,3rem)]">{s.title}</h3>
              <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-soft md:text-lg lg:mt-0">{s.desc}</p>
              <p className="mt-5 md:text-lg lg:mt-0">
                <span className="label block text-ink-soft">Vous repartez avec</span>
                <span className="mt-1 block font-medium">{s.get}.</span>
              </p>
            </div>
          </li>
        ))}
        </ol>
      </div>

      <div className="reveal mt-12 pl-[4.5rem] md:pl-28">
        <a href="#contact" className="label ink-btn inline-flex min-h-11 items-center rounded-full bg-shu px-6 py-3 text-paper">Décrire mon projet</a>
      </div>
    </section>
  );
}

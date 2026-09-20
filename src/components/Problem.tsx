export default function Problem() {
  return (
    <section className="relative w-full py-32 px-4 md:px-20 z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center parallax-element" data-speed="1.1">
          <span className="text-outline">Le vrai</span>{' '}
          <span className="bg-[#FF007F] text-white px-3 brutalist-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[-1deg]">problème</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="problem-card brutalist-border bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element" data-speed="1.2">
            <div className="text-5xl mb-4">😤</div>
            <h3 className="text-2xl font-black uppercase mb-4">Ce que vous vivez peut-être</h3>
            <ul className="space-y-4 text-lg font-medium leading-relaxed max-w-[52ch]">
              <li className="flex gap-3 items-start"><span aria-hidden="true" className="mt-2 h-3 w-3 shrink-0 bg-[#FF007F] border-2 border-black" />Votre site actuel ne vous ressemble pas. Les gens arrivent et repartent.</li>
              <li className="flex gap-3 items-start"><span aria-hidden="true" className="mt-2 h-3 w-3 shrink-0 bg-[#FF007F] border-2 border-black" />Vous avez testé un builder. C'est "ok" mais ça fait amateur.</li>
              <li className="flex gap-3 items-start"><span aria-hidden="true" className="mt-2 h-3 w-3 shrink-0 bg-[#FF007F] border-2 border-black" />Vous avez une idée d'app mais vous ne savez pas par où commencer.</li>
              <li className="flex gap-3 items-start"><span aria-hidden="true" className="mt-2 h-3 w-3 shrink-0 bg-[#FF007F] border-2 border-black" />Le dernier dev a disparu au milieu du projet.</li>
            </ul>
          </div>

          <div className="problem-card brutalist-border bg-[#FFE800] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element md:mt-16" data-speed="0.8">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl font-black uppercase mb-4">Ce qui change tout</h3>
            <p className="text-lg font-medium leading-relaxed max-w-[52ch] mb-4">
              Le problème n'est jamais le code. C'est l'absence de quelqu'un qui comprend votre vision et la traduit en un produit qui travaille pour vous.
            </p>
            <p className="text-lg font-medium leading-relaxed max-w-[52ch]">
              Un site ou une app, ce n'est pas une dépense. C'est votre meilleur commercial, celui qui bosse 24h/24, ne prend jamais de vacances, et ne demande pas de commission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

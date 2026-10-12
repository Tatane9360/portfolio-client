const faqs = [
  { q: 'Combien ça coûte ?', a: "Un site vitrine démarre à partir de 800 €. Ensuite, chaque projet est chiffré selon ce dont vous avez vraiment besoin, sans option inutile ; une application est toujours sur devis. Après l'appel découverte, vous recevez un devis détaillé ligne par ligne : le prix est fixé avant le début du projet. Seuls le nom de domaine et l'hébergement se paient ensuite chaque année, en général une cinquantaine d'euros pour un site vitrine, indiqués dans le devis." },
  { q: 'En combien de temps mon site sera-t-il en ligne ?', a: 'En moyenne, 2 à 4 semaines pour un site et 1 à 3 mois pour une application. Le planning est fixé dans le devis, et vous suivez l’avancement sur une version de test.' },
  { q: "Je n'y connais rien en tech, que dois-je préparer ?", a: "Rien de technique. Venez avec votre activité, vos clients et ce que vous attendez du site : je m'occupe de la technique et je vous explique mes choix sans jargon. Logo, textes et photos aident s'ils existent ; sinon, on voit ensemble comment les obtenir." },
  { q: 'Le site m’appartiendra-t-il ?', a: "Oui. Le nom de domaine et l'hébergement sont à votre nom, et je vous remets tous les accès à la mise en ligne. Vous restez libre de changer de prestataire quand vous le voulez." },
  { q: 'Mon site sera-t-il visible sur Google ?', a: "Je le déclare à Google à la mise en ligne et je le construis rapide sur mobile, un critère que Google regarde. Personne ne peut honnêtement promettre la première place, mais votre site part sur de bonnes bases." },
  { q: 'Et après la mise en ligne ?', a: "Je vous fais une prise en main pour que vous soyez autonome au quotidien. Pour une correction, une nouvelle page ou une fonctionnalité, je réponds sous 24 h ouvrées." },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper-deep grid min-h-svh content-center grid-cols-12 gap-x-4 gap-y-10 px-4 py-32 md:px-10">
      <div className="col-span-12 md:col-span-5">
        <h2 className="title reveal text-[15vw] md:text-[min(7vw,10.5svh)]">
          <span className="relative inline-block">
            <span className="inline-block translate-x-[calc(var(--dock,0)*-0.12em)]">Questions</span>
            <span data-dot className="absolute left-full top-[0.5em] ml-[0.06em] block size-[0.42em] -translate-y-1/2" />
          </span>
        </h2>
      </div>
      <div className="brush-b col-span-12 md:col-span-7">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item group reveal brush-t">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-xl font-normal md:text-2xl">{f.q.replace(' ?', '\u00a0?')}</h3>
              <span aria-hidden="true" className="text-2xl font-light text-ink-soft transition-transform duration-300 ease-ink group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-[60ch] pb-6 leading-relaxed text-ink-soft md:text-lg">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

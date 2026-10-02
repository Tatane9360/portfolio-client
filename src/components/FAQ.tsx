// Trois temps, comme la méthode : on cherche sa question là où on en est.
const groupes = [
  {
    titre: 'Avant de se lancer',
    faqs: [
      { q: 'Quels types de projets réalisez-vous ?', a: "Des sites vitrines, des boutiques en ligne et des applications, pour les indépendants et les petites entreprises. Si votre projet sort de ce cadre, je vous le dis honnêtement dès l'appel découverte." },
      { q: 'Combien ça coûte ?', a: "Ça dépend du projet, donc pas de grille toute faite. On en parle pendant l'appel découverte, puis je vous envoie un devis détaillé ligne par ligne." },
      { q: 'Y a-t-il des frais après la livraison ?', a: "Le nom de domaine et l'hébergement se paient chaque année, comptez en général une cinquantaine d'euros pour un site vitrine. Ces frais sont indiqués dans le devis, pour qu'il n'y ait pas de surprise." },
    ],
  },
  {
    titre: 'Pendant le projet',
    faqs: [
      { q: 'Que dois-je préparer pour démarrer ?', a: "Rien de technique. Venez avec votre activité, vos clients et ce que vous attendez du site. Logo, textes et photos aident s'ils existent ; sinon, on voit ensemble comment les obtenir." },
      { q: 'En combien de temps mon site sera-t-il en ligne ?', a: 'En moyenne, 2 à 4 semaines pour un site et 1 à 3 mois pour une application. Le planning est fixé dans le devis, et vous suivez l’avancement sur une version de test.' },
      { q: "Je n'y connais rien en tech, c'est grave ?", a: "Pas du tout. Vous connaissez votre métier, je m'occupe de la technique et je vous explique mes choix sans jargon." },
    ],
  },
  {
    titre: 'Après la mise en ligne',
    faqs: [
      { q: 'Le site m’appartiendra-t-il ?', a: "Oui. Le nom de domaine et l'hébergement sont à votre nom, et je vous remets tous les accès à la mise en ligne. Vous restez libre de changer de prestataire quand vous le voulez." },
      { q: 'Pourrai-je modifier mon site moi-même ?', a: "Oui pour le quotidien. À la mise en ligne, je vous fais une prise en main pour que vous soyez autonome. Pour une nouvelle page ou une fonctionnalité, je suis là." },
      { q: 'Mon site sera-t-il visible sur Google ?', a: "Je le déclare à Google à la mise en ligne et je le construis rapide sur mobile, un critère que Google regarde. Personne ne peut honnêtement promettre la première place, mais votre site part sur de bonnes bases." },
      { q: 'Serez-vous joignable si j’ai besoin de vous ?', a: "Oui. Je réponds sous 24 h ouvrées, que ce soit pour une correction, une mise à jour ou une nouvelle page. Le code est prévu pour grandir sans tout reconstruire." },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="grid min-h-svh content-center grid-cols-12 gap-x-4 gap-y-10 px-4 py-32 md:px-10">
      <div className="col-span-12 md:col-span-5">
        <h2 className="title reveal text-[15vw] md:text-[7vw]">
          <span className="relative inline-block">
            <span className="inline-block translate-x-[calc(var(--dock,0)*-0.12em)]">questions</span>
            <span data-dot className="absolute left-full top-[0.5em] ml-[0.06em] block size-[0.42em] -translate-y-1/2" />
          </span>
        </h2>
      </div>
      <div className="col-span-12 space-y-14 md:col-span-7">
        {groupes.map((g) => (
          <div key={g.titre}>
            <h3 className="label reveal pb-4 text-ink-soft">{g.titre}</h3>
            <div className="brush-b">
              {g.faqs.map((f) => (
                <details key={f.q} className="faq-item group reveal brush-t">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                    <h4 className="font-display text-xl font-normal md:text-2xl">{f.q}</h4>
                    <span aria-hidden="true" className="text-2xl font-light text-ink-soft transition-transform duration-500 ease-ink group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-[60ch] pb-6 leading-relaxed text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

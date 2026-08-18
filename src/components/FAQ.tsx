const faqs = [
  {
    q: 'Combien ça coûte ?',
    a: "Chaque projet est unique, donc je ne fais pas de grille tarifaire générique. Ce que je peux vous dire : on en parle pendant l'appel découverte, et vous repartez avec un devis détaillé, ligne par ligne, sans surprise. Vous saurez exactement ce que vous payez et pourquoi.",
    speed: '1.1',
  },
  {
    q: 'Et les délais ?',
    a: "Je donne des dates réalistes, pas des promesses en l'air. En moyenne : 2-4 semaines pour un site, 1-3 mois pour une app. Et vous avez de la visibilité à chaque étape.",
    speed: '0.9',
  },
  {
    q: "Je n'y connais rien en tech, c'est grave ?",
    a: "C'est même mieux. Vous connaissez votre métier, moi le mien. Je traduis votre vision en produit sans vous noyer de jargon. On parle résultats, pas frameworks.",
    speed: '1.2',
  },
  {
    q: 'Et si je veux faire évoluer le projet après ?',
    a: "C'est prévu dès le départ. Je construis du code propre et évolutif. Quand votre business grandit, votre produit suit sans tout reconstruire.",
    speed: '1',
  },
];

export default function FAQ() {
  return (
    <section className="relative w-full py-32 px-4 md:px-20 bg-[#6E00FF] text-white border-y-4 border-black z-30 overflow-hidden">
      <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-center text-[#FFE800]">
        Questions fréquentes
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="faq-item brutalist-border bg-white text-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element"
            data-speed={item.speed}
          >
            <h3 className="text-xl font-black uppercase mb-2">{item.q}</h3>
            <p className="font-bold text-lg">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

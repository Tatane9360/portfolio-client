const faqs = [
  { q: 'Combien ça coûte ?', a: "Chaque projet est unique, donc pas de grille générique. On en parle pendant l'appel découverte, et vous repartez avec un devis détaillé, ligne par ligne, sans surprise." },
  { q: 'Et les délais ?', a: 'Des dates réalistes, pas des promesses en l’air. En moyenne : 2 à 4 semaines pour un site, 1 à 3 mois pour une app. Avec de la visibilité à chaque étape.' },
  { q: "Je n'y connais rien en tech, c'est grave ?", a: "C'est même mieux. Vous connaissez votre métier, moi le mien. Je traduis votre vision en produit sans jargon. On parle résultats, pas frameworks." },
  { q: 'Et si je veux faire évoluer le projet après ?', a: "C'est prévu dès le départ. Code propre et évolutif : quand votre business grandit, votre produit suit sans tout reconstruire." },
];

export default function FAQ() {
  return (
    <section id="faq" className="grid grid-cols-12 gap-x-4 gap-y-10 px-4 py-32 md:px-10">
      <div className="col-span-12 md:col-span-5">
        <h2 className="title reveal text-[15vw] md:text-[7vw]">
          <span className="relative inline-block">
            <span className="inline-block translate-x-[calc(var(--dock,0)*-0.12em)]">questions</span>
            <span data-dot className="absolute left-full top-[0.5em] ml-[0.06em] block size-[0.42em] -translate-y-1/2" />
          </span>
        </h2>
      </div>
      <div className="col-span-12 md:col-span-7">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item group reveal border-t border-ink/20 last:border-b">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">{f.q}</h3>
              <span aria-hidden="true" className="text-2xl text-red transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-[60ch] pb-6 leading-relaxed text-ink/75">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

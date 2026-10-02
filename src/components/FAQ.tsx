const faqs = [
  { q: 'Combien ça coûte ?', a: "Ça dépend du projet, donc pas de grille toute faite. On en parle pendant l'appel découverte, puis je vous envoie un devis détaillé ligne par ligne." },
  { q: 'Et les délais ?', a: 'En moyenne, 2 à 4 semaines pour un site et 1 à 3 mois pour une application. Je vous montre l’avancement à chaque étape.' },
  { q: "Je n'y connais rien en tech, c'est grave ?", a: "Pas du tout. Vous connaissez votre métier, je m'occupe de la technique et je vous explique mes choix sans jargon." },
  { q: 'Et si je veux faire évoluer le projet après ?', a: "Oui. Le code est prévu pour évoluer : on peut ajouter des pages ou des fonctionnalités sans tout reconstruire." },
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
      <div className="brush-b col-span-12 md:col-span-7">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item group reveal brush-t">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-xl font-normal md:text-2xl">{f.q}</h3>
              <span aria-hidden="true" className="text-2xl font-light text-ink-soft transition-transform duration-500 ease-ink group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-[60ch] pb-6 leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

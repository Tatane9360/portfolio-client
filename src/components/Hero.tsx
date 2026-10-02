export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col md:grid md:grid-cols-12 gap-x-4 px-4 pt-24 pb-10 md:px-10">
      <div aria-hidden="true" className="ink-wash pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55vh] opacity-[0.14]" />
      <div className="col-span-12 flex justify-between label md:col-span-8">
        <span>Développeur web & app<br />freelance</span>
        <span className="hidden text-right md:block">Sites vitrines, apps<br />e-commerce, SaaS</span>
      </div>

      <div className="relative mt-10 w-2/3 self-end md:w-auto md:row-span-2 md:row-start-1 md:col-span-3 md:col-start-10 md:mt-10">
        <span data-dot className="absolute -top-6 -left-6 block size-16 md:-top-10 md:-left-10 md:size-24" />
        <div className="reveal-img aspect-[3/4] overflow-hidden">
          <img className="photo" src="/images/hero-clavier.webp" alt="Une main sur un clavier mécanique, posé sur un bureau en bois" />
        </div>
      </div>

      <h1 className="title mt-8 whitespace-nowrap text-[20vw] md:col-span-12 md:row-start-3 md:mt-4 md:text-[20.5vw] md:leading-[0.8]">
        <span className="sr-only">Développeur web freelance : sites et applications </span>sur mesure
      </h1>

      <div className="reveal mt-8 md:row-start-2 md:col-span-6 md:mt-0 md:self-end">
        <p className="max-w-[34ch] font-display text-2xl leading-snug font-light md:text-3xl">
          Des sites et des applications pour les indépendants et les petites entreprises. J'écoute, je construis, et je reste après la livraison.
        </p>
        <a href="#contact" className="label ink-btn mt-8 inline-block rounded-full border border-current px-6 py-3">Discutons</a>
      </div>
    </section>
  );
}

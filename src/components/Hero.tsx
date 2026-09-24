export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col md:grid md:grid-cols-12 gap-x-4 px-4 pt-24 pb-10 md:px-10">
      <div className="col-span-12 flex justify-between label md:col-span-8">
        <span>Développeur web & app<br />freelance</span>
        <span className="hidden text-right md:block">Sites vitrines, apps<br />e-commerce, SaaS</span>
      </div>

      <div className="relative mt-10 w-2/3 self-end md:w-auto md:row-span-2 md:row-start-1 md:col-span-3 md:col-start-10 md:mt-10">
        <span data-dot className="absolute -top-6 -left-6 block size-16 md:-top-10 md:-left-10 md:size-24" />
        <div className="reveal-img aspect-[3/4] overflow-hidden">
          <img className="photo" src="/images/hero-bureau.webp" alt="Poste de travail avec un ordinateur portable" />
        </div>
      </div>

      <h1 className="title mt-8 text-[23vw] md:col-span-12 md:row-start-3 md:mt-4 md:text-[26vw] md:leading-[0.8]">
        <span className="sr-only">Développeur web freelance : </span>portfolio
      </h1>

      <p className="reveal mt-8 md:row-start-2 max-w-[34ch] md:col-span-6 font-display text-2xl leading-tight font-medium md:mt-0 md:self-end md:text-3xl">
        Je conçois et développe des sites et des applications sur mesure pour les indépendants et les petites entreprises.
      </p>
    </section>
  );
}

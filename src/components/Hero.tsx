export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col md:grid md:grid-cols-12 gap-x-4 px-4 pt-24 pb-10 md:px-10">
      <div className="col-span-12 flex justify-between label md:col-span-8">
        <span>Développeur web & app<br />freelance</span>
        <span className="text-right">Sites vitrines · Apps<br />E-commerce · SaaS</span>
      </div>

      <div className="relative mt-10 w-2/3 self-end md:w-auto md:row-start-2 md:col-span-4 md:col-start-5 md:mt-0">
        <span data-dot className="absolute -top-6 -left-6 block size-16 md:-top-10 md:-left-10 md:size-24" />
        <div className="reveal-img aspect-[3/4] overflow-hidden">
          <img className="photo" src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=900&q=80&auto=format" alt="Poste de travail avec un ordinateur portable" />
        </div>
      </div>

      <h1 className="title mt-8 text-[23vw] md:mt-0 md:row-span-2 md:row-start-2 md:self-center md:justify-self-end md:[writing-mode:vertical-rl] md:col-span-3 md:col-start-10 md:text-[13vw]">
        <span className="sr-only">Développeur web freelance : </span>portfolio
      </h1>

      <p className="reveal mt-8 md:row-start-3 max-w-[34ch] font-display text-2xl leading-tight font-medium md:col-span-4 md:mt-0 md:self-end md:text-3xl">
        Je ne livre pas du code. Je construis ce dont vous avez vraiment besoin.
      </p>
    </section>
  );
}

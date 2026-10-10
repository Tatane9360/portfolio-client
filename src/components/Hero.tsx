export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col md:grid md:grid-cols-12 gap-x-4 px-4 pt-24 pb-10 md:px-10">
      <div aria-hidden="true" className="ink-wash pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55vh] opacity-[0.14]" />
      <div className="col-span-12 flex justify-between label md:col-span-6 md:row-start-1">
        <span>Développeur web<br />freelance</span>
        <span className="hidden text-right md:block">Sites vitrines, boutiques<br />en ligne, applications</span>
      </div>

      <div className="mt-6 md:row-span-2 md:row-start-1 md:col-span-5 md:col-start-8 md:mt-10 md:self-start md:justify-self-end md:w-[min(100%,calc(46svh*4/3))]">
        <div className="relative aspect-[4/3]">
          <div className="reveal-img size-full">
            <img className="size-full" src="/images/hero-doodle.webp" width="1400" height="1050" alt="Illustration : un développeur à son ordinateur, entouré d’une maquette de site, de code et de la version mobile" />
          </div>
          <span data-dot className="absolute left-[48.8%] top-[75.7%] block aspect-square w-[11%] -translate-1/2" />
        </div>
      </div>

      <h1 className="title mt-8 whitespace-nowrap text-[20vw] md:col-span-12 md:row-start-3 md:mt-4 md:text-[min(20.5vw,26svh)] md:leading-[0.8]">
        <span className="sr-only">Développeur web freelance : sites et applications </span>Sur mesure
      </h1>

      <div className="reveal mt-8 md:row-start-2 md:col-span-6 md:mt-0 md:self-end">
        <p className="max-w-[34ch] font-display text-2xl leading-snug font-light md:text-3xl">
          Un site qui vous amène des clients, sans que vous ayez à toucher à la technique.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="#contact" className="label ink-btn inline-block rounded-full border border-current px-6 py-3">Parler de mon projet</a>
          <span className="text-sm text-ink-soft">Appel de 30 min, gratuit et sans engagement</span>
        </div>
      </div>
    </section>
  );
}

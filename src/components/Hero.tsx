export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col gap-x-4 px-4 pt-24 pb-10 md:px-10 lg:grid lg:grid-cols-12 lg:content-center">
      <div aria-hidden="true" className="ink-wash pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55vh] opacity-[0.14]" />
      <p className="label col-span-12 lg:col-span-7 lg:row-start-1">Développeur web freelance</p>

      <div aria-hidden="true" className="mt-6 ml-auto w-[38vw] lg:row-span-3 lg:row-start-1 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-center lg:justify-self-center lg:w-[min(86%,52svh)]">
        <span data-dot className="block aspect-square w-full" />
      </div>

      <h1 className="title mt-8 lg:col-span-7 lg:row-start-2 lg:mt-6">
        <span className="sr-only">Développeur web freelance : </span>
        <span className="block text-[7.6vw] lg:text-[min(4vw,7.5svh)]">Sites et applications</span>
        <span className="-ml-[0.03em] block whitespace-nowrap text-[20vw] lg:text-[min(11.5vw,22svh)]">sur mesure</span>
      </h1>

      <div className="reveal mt-8 lg:row-start-3 lg:col-span-7 lg:mt-10">
        <p className="max-w-[34ch] font-display text-[5.6vw] leading-snug font-light text-balance sm:text-2xl lg:text-3xl">
          Le site qui vous amène des clients, l'application que vous avez en tête. La technique, je m'en occupe.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href="#contact" className="label ink-btn ink-btn-light inline-flex min-h-11 items-center rounded-full border border-ink bg-ink px-6 py-3 text-paper">Parler de mon projet</a>
          <span className="text-sm text-ink-soft">Appel de 20 min, gratuit et sans engagement</span>
        </div>
      </div>
    </section>
  );
}

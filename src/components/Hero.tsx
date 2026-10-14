export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center gap-x-4 px-6 pt-[calc(var(--nav)+1rem)] pb-10 md:px-10 lg:grid lg:grid-cols-12 lg:content-center lg:px-10">
      {/* Mist climbing the right edge, behind the ensō. */}
      <div aria-hidden="true" className="ink-brume pointer-events-none absolute inset-0 top-[var(--nav)] -z-10 opacity-[0.35]" />

      {/* Mobile: large ensō bleeding off the right edge (body clips overflow-x). */}
      <div aria-hidden="true" className="-mr-[16vw] w-[80vw] self-end sm:mr-0 sm:w-[44vw] lg:row-span-3 lg:row-start-1 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-center lg:justify-self-center lg:w-[min(86%,52svh)]">
        <span data-dot className="block aspect-square w-full" />
      </div>

      <p className="label mt-3 col-span-12 lg:col-span-7 lg:row-start-1 lg:mt-0">Développeur web freelance</p>

      <h1 className="title mt-5 lg:col-span-7 lg:row-start-2 lg:mt-6">
        <span className="sr-only">Développeur web freelance : </span>
        <span className="block text-[8.4vw] lg:text-[min(4vw,7.5svh)]">Sites et applications</span>
        <span className="-ml-[0.03em] block whitespace-nowrap text-[19vw] lg:text-[min(11.5vw,22svh)]">sur mesure</span>
      </h1>

      <div className="reveal mt-7 lg:row-start-3 lg:col-span-7 lg:mt-10">
        <span aria-hidden="true" className="mb-7 block h-px w-14 bg-gold lg:hidden" />
        <p className="max-w-[34ch] font-display text-[5.4vw] leading-snug font-normal text-balance sm:text-2xl lg:text-3xl">
          Le site qui vous amène des clients, l’application que vous avez en tête. La technique, je m’en occupe.
        </p>
        <a href="#contact" className="label ink-btn ink-btn-light mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-ink bg-ink px-7 py-3 text-paper">
          Parler de mon projet <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

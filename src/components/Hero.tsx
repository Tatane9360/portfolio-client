export default function Hero() {
  return (
    <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="shape absolute top-1/4 left-10 md:left-32 w-24 h-24 bg-[#FF007F] brutalist-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-full parallax-element z-10"
        data-speed="1.5"
      />
      <div
        className="shape absolute bottom-1/4 right-10 md:right-32 w-32 h-32 bg-[#00E5FF] brutalist-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element z-10"
        data-speed="0.5"
      />
      <div
        className="shape absolute top-1/3 right-1/4 w-16 h-16 bg-[#FFE800] brutalist-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-45 parallax-element z-10"
        data-speed="2.2"
      />

      <div className="hero-content relative z-20 text-center flex flex-col items-center parallax-element px-4" data-speed="1">
        <div className="brutalist-border bg-white px-4 py-1 mb-8 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] relative z-30">
          <span className="font-bold uppercase text-sm md:text-base">Développeur Web & App Freelance</span>
        </div>
        <h1 className="text-3xl md:text-[5rem] leading-tight md:leading-none font-black uppercase tracking-tighter mb-4 text-center">
          <span className="sr-only">Développeur web freelance, sites, applications et e-commerce</span>
          <span className="block text-outline relative z-0" aria-hidden="true">Je ne livre pas du code</span>
          <span className="block bg-[#FFE800] px-4 py-2 brutalist-border mt-6 md:mt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[1deg] text-2xl md:text-[3.5rem] relative z-10">
            Je construis ce dont vous avez vraiment besoin
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-bold mt-8 max-w-2xl bg-white brutalist-border p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Vous avez une vision. Un projet qui vous tient éveillé la nuit. Il ne lui manque pas un dev, il lui manque quelqu'un qui la comprend.
        </p>
      </div>
    </section>
  );
}

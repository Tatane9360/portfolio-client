export default function Hero() {
  return (
    <section id="top" className="hero relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 py-28 md:px-16">
      {/* Décors : sous le contenu (z-0). En mobile ils débordent des bords,
          donc jamais dans la colonne de texte. En desktop ils reprennent leur place. */}
      <div
        className="shape absolute z-0 -left-7 top-[43%] h-16 w-16 rounded-full bg-[#FF007F] brutalist-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element md:left-16 md:top-[12%] md:h-24 md:w-24"
        data-speed="1.5"
      />
      <div
        className="shape absolute z-0 -right-5 top-[38%] h-12 w-12 bg-[#00E5FF] brutalist-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element md:top-auto md:bottom-1/4 md:right-32 md:h-32 md:w-32"
        data-speed="0.5"
      />
      <div
        className="shape absolute z-0 -left-5 top-[11%] h-12 w-12 rotate-45 bg-[#FFE800] brutalist-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element md:left-auto md:right-[10%] md:top-[14%] md:h-16 md:w-16"
        data-speed="2.2"
      />
      {/* Contrepoids en bas à gauche, mobile seulement : sans lui le bas de l'écran penche à droite. */}
      <div
        className="shape absolute z-0 -right-6 top-[83%] h-14 w-14 rotate-12 bg-[#6E00FF] brutalist-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] parallax-element md:hidden"
        data-speed="1.8"
      />

      <div className="hero-content relative z-20 text-center flex flex-col items-center parallax-element" data-speed="1">
        <div className="brutalist-border bg-white px-4 py-1 mb-8 md:mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
          <span className="font-bold uppercase text-sm md:text-base">Développeur Web & App Freelance</span>
        </div>
        <h1 className="text-3xl md:text-[5rem] leading-tight md:leading-none font-black uppercase tracking-tighter mb-4 text-center">
          <span className="sr-only">Je ne livre pas du code, je construis ce dont vous avez vraiment besoin. Développeur web freelance, sites, applications et e-commerce.</span>
          <span className="block text-outline" aria-hidden="true">Je ne livre pas du code</span>
          <span
            className="block bg-[#FFE800] px-4 py-4 md:py-6 brutalist-border mt-6 md:mt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[1deg] text-2xl md:text-[3.5rem] max-w-[16ch] md:max-w-[20ch] mx-auto"
            aria-hidden="true"
          >
            Je construis ce dont vous avez vraiment besoin
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-medium leading-relaxed mt-8 max-w-[52ch] bg-white brutalist-border p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Vous avez une vision. Un projet qui vous tient éveillé la nuit. Il ne lui manque pas un dev, il lui manque quelqu'un qui la comprend.
        </p>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen scroll-mt-24 w-full bg-[#FFE800] flex items-center justify-center border-t-4 border-black z-40 py-28 px-4">
      {/* Le cercle est clippé par son propre calque, la section reste scrollable. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] max-w-[130vw] max-h-[130vw] bg-[#FF007F] rounded-full brutalist-border parallax-element opacity-20" data-speed="0.5" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-3xl px-4">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 parallax-element" data-speed="1.2">
          <span className="text-outline">Votre projet</span>{' '}<br />
          <span className="bg-white brutalist-border px-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[-1deg]">commence ici</span>
        </h2>
        <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-[52ch] mb-10 parallax-element" data-speed="1">
          Un appel de 30 min, gratuit, sans engagement. On parle de votre idée et je vous dis honnêtement si je suis la bonne personne pour la réaliser.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center parallax-element" data-speed="1.5">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold bg-black text-white brutalist-border px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 uppercase"
          >
            Réserver un appel
          </a>
          <a
            href="mailto:hello@devportfolio.com"
            className="text-xl md:text-2xl font-bold bg-white brutalist-border px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200"
          >
            hello@devportfolio.com
          </a>
        </div>
      </div>
    </section>
  );
}

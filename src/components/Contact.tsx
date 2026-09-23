// Fin du parcours : le cercle grossit et devient le fond du bouton d'action.
export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-svh flex-col items-center justify-center gap-10 overflow-hidden px-4 py-32 text-center">
      <h2 className="title reveal whitespace-nowrap text-[18vw] md:text-[11vw]">
        parlons-en<span data-dot className="ml-[0.03em] inline-block size-[0.16em] rounded-full bg-red motion-safe:opacity-[calc(1-var(--dock,0))]" />
      </h2>
      <div className="relative grid place-items-center">
        <span data-dot className="block size-56 rounded-full border border-red md:size-72" />
        <a href="mailto:hello@devportfolio.com" className="absolute inset-0 z-40 grid place-items-center rounded-full font-display text-2xl font-extrabold text-[color-mix(in_oklab,var(--color-paper)_calc(var(--dock,0)*100%),var(--color-red))] md:text-3xl">
          écrire ↗
        </a>
      </div>
      <p className="reveal max-w-[44ch] leading-relaxed">
        Un appel de 30 min, gratuit, sans engagement. On parle de votre idée et je vous dis honnêtement si je suis la bonne personne pour la réaliser.
      </p>
      <a href="mailto:hello@devportfolio.com" className="label border-b border-ink pb-1 hover:text-red hover:border-red">hello@devportfolio.com</a>
    </section>
  );
}

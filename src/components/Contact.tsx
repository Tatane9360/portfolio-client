import { legal } from '../legal';

// Fin du parcours : l'ensō grossit et vient entourer le bouton d'action.
export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-svh flex-col items-center justify-center gap-10 overflow-hidden px-4 py-32 text-center">
      <h2 className="title reveal whitespace-nowrap text-[18vw] md:text-[11vw]">
        parlons-en<span data-dot className="ml-[0.03em] inline-block size-[0.16em] rounded-full bg-ink motion-safe:opacity-[calc(1-var(--dock,0))]" />
      </h2>
      <div className="relative grid place-items-center">
        <span data-dot data-dot-land className="block size-56 rounded-full border border-ink/20 md:size-72 motion-safe:opacity-[calc(1-var(--dock,0))]" />
        <a href={`mailto:${legal.email}`} className="absolute inset-0 z-40 grid place-items-center rounded-full font-display text-2xl font-normal md:text-3xl">
          écrire ↗
        </a>
      </div>
      <p className="reveal max-w-[44ch] leading-relaxed">
        Un appel de 30 min, gratuit, sans engagement. On parle de votre idée et je vous dis honnêtement si je suis la bonne personne pour la réaliser.
      </p>
      <a href={`mailto:${legal.email}`} className="label ink-under">{legal.email}</a>
    </section>
  );
}

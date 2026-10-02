import { useState } from 'react';
import { legal } from '../legal';

// E-mail prérempli : le visiteur n'arrive pas devant une page blanche.
const mailto = `mailto:${legal.email}?subject=${encodeURIComponent('Mon projet de site')}&body=${encodeURIComponent('Mon activité :\nCe que j’attends du site :\nÉchéance souhaitée :\n')}`;

// Fin du parcours : l'ensō grossit et vient entourer le bouton d'action.
export default function Contact() {
  const [copied, setCopied] = useState(false);
  // Repli quand aucune messagerie ne s'ouvre au clic (webmail, poste partagé).
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(legal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* presse-papiers refusé : l'adresse reste lisible juste à côté */ }
  };

  return (
    <section id="contact" className="relative flex min-h-svh flex-col items-center justify-center gap-10 overflow-hidden px-4 py-32 text-center">
      <h2 className="title reveal whitespace-nowrap text-[18vw] md:text-[11vw]">
        parlons-en<span data-dot className="ml-[0.03em] inline-block size-[0.16em] rounded-full bg-ink motion-safe:opacity-[calc(1-var(--dock,0))]" />
      </h2>
      <div className="relative grid place-items-center">
        <span data-dot data-dot-land className="block size-56 rounded-full border border-ink/20 md:size-72 motion-safe:opacity-[calc(1-var(--dock,0))]" />
        <a href={mailto} className="absolute inset-0 z-40 grid place-items-center rounded-full font-display text-2xl font-normal md:text-3xl">
          écrire ↗
        </a>
      </div>
      <p className="reveal max-w-[44ch] leading-relaxed">
        Dites-moi en quelques lignes ce que vous faites et ce que vous attendez du site. Je vous réponds sous 24 h ouvrées pour caler un appel de 30 min, gratuit et sans engagement.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <a href={mailto} className="label ink-under">{legal.email}</a>
        <button type="button" onClick={copy} className="label ink-link cursor-pointer py-2 text-ink-soft">
          <span aria-live="polite">{copied ? 'adresse copiée' : "copier l'adresse"}</span>
        </button>
      </div>
    </section>
  );
}

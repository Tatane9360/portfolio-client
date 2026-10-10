import { useState } from 'react';
import { legal } from '../legal';

const mailto = `mailto:${legal.email}?subject=${encodeURIComponent('Mon projet de site')}&body=${encodeURIComponent('Mon activité :\nCe que j’attends du site :\nÉchéance souhaitée :\n')}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(legal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* clipboard denied: the address stays visible */ }
  };

  return (
    <section id="contact" className="relative flex min-h-svh flex-col items-center justify-center gap-10 overflow-hidden px-4 py-32 text-center">
      <h2 className="title reveal whitespace-nowrap text-[18vw] md:text-[min(11vw,16.5svh)]">
        Parlons-en<span data-dot className="ml-[0.03em] inline-block size-[0.16em] rounded-full bg-ink motion-safe:opacity-[calc(1-var(--dock,0))]" />
      </h2>
      <div className="relative grid place-items-center">
        <span data-dot data-dot-land className="block size-56 rounded-full border border-ink/20 md:size-72 motion-safe:opacity-[calc(1-var(--dock,0))]" />
        <a href={mailto} className="absolute inset-0 z-40 grid place-items-center rounded-full transition-transform duration-[160ms] ease-out active:scale-[0.97] font-display text-2xl font-normal md:text-3xl">
          Écrire ↗
        </a>
      </div>
      <p className="reveal max-w-[44ch] leading-relaxed">
        Dites-moi en quelques lignes ce que vous faites et ce que vous attendez du site. Je vous réponds sous 24 h ouvrées pour caler un appel de 30 min, gratuit et sans engagement.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {legal.telephone && (
          <a href={`https://wa.me/33${legal.telephone.replace(/\s/g, '').slice(1)}`} target="_blank" rel="noopener noreferrer" className="label ink-under">
            WhatsApp {legal.telephone}
          </a>
        )}
        <a href={mailto} className="label ink-under">{legal.email}</a>
        <button type="button" onClick={copy} className="label ink-link cursor-pointer py-2 text-ink-soft transition-transform duration-[160ms] ease-out active:scale-[0.97]">
          <span aria-live="polite"><span key={String(copied)} className="fade-in">{copied ? 'adresse copiée' : "copier l'adresse"}</span></span>
        </button>
      </div>
    </section>
  );
}

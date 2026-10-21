import { useEffect, useRef, useState } from 'react';
import { legal, whatsapp } from '../legal';
import { cal, calAttrs, loadCal } from '../cal';

const mailto = `mailto:${legal.email}?subject=${encodeURIComponent('Mon projet de site')}&body=${encodeURIComponent('Mon activité :\nCe que j’attends du site :\nÉchéance souhaitée :\n')}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!cal) console.warn('VITE_CAL_URL est vide dans .env : le bouton « Réserver un appel » ouvre un email à la place.');
    if (!cal || !section.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      loadCal();
    }, { rootMargin: '800px' });
    io.observe(section.current);
    return () => io.disconnect();
  }, []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(legal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* clipboard denied: the address stays visible */ }
  };

  return (
    <section ref={section} id="contact" className="relative flex min-h-[calc(100svh-var(--nav))] flex-col items-center justify-center gap-10 overflow-hidden px-4 py-16 text-center md:gap-[min(2.5rem,4svh)] md:py-[min(5rem,6svh)]">
      {/* The hero mist, framing both sides: the page opens and closes on the same image. Mobile keeps one side to free the text. */}
      <div aria-hidden="true" className="ink-brume pointer-events-none absolute inset-0 -z-10 -scale-x-100 opacity-[0.25]" />
      <div aria-hidden="true" className="ink-brume pointer-events-none absolute inset-0 -z-10 hidden opacity-[0.25] lg:block" />
      <h2 className="title reveal whitespace-nowrap text-[16vw] md:text-[min(11vw,16.5svh)]">
        Parlons-en<span data-dot className="ml-[0.03em] inline-block size-[0.16em] rounded-full bg-ink motion-safe:opacity-[calc(1-var(--dock,0))]" />
      </h2>
      <p className="reveal max-w-[44ch] leading-relaxed md:text-lg">
        {cal
          ? <>Choisissez un créneau pour un appel de 20{' '}min, gratuit et sans engagement. Vous préférez écrire{' '}? Je vous réponds sous 24{' '}h ouvrées.</>
          : <>Décrivez votre projet en quelques lignes, je vous réponds sous 24{' '}h ouvrées pour fixer un appel gratuit et sans engagement.</>}
      </p>
      <div className="relative grid place-items-center">
        <span data-dot data-dot-land className="block size-56 rounded-full border border-ink/40 md:size-[min(18rem,32svh)] motion-safe:opacity-[calc(1-var(--dock,0))]" />
        <a
          href={legal.cal ?? mailto}
          target={cal ? '_blank' : undefined}
          rel={cal ? 'noopener noreferrer' : undefined}
          {...calAttrs}
          className="absolute inset-0 z-40 grid place-items-center rounded-full transition-[scale,background-color] duration-[160ms] ease-out hover:bg-ink/5 active:scale-[0.97] font-display text-2xl leading-tight font-medium md:text-3xl"
        >
          {cal
            ? <span>Réserver<br />un appel<span className="cal-onglet sr-only"> (nouvel onglet)</span></span>
            : <span>Écrire<br />un message</span>}
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-7 md:gap-y-3">
        {legal.telephone && (
          <a href={`tel:${legal.telephone.replace(/\s/g, '')}`} className="label ink-under tap">
            Appeler {legal.telephone}
          </a>
        )}
        {whatsapp && (
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="label ink-under tap">
            WhatsApp
          </a>
        )}
        <a href={mailto} className="ink-under tap">{legal.email}</a>
        <button type="button" onClick={copy} className="label ink-link tap cursor-pointer text-ink-soft transition-transform duration-[160ms] ease-out active:scale-[0.97]">
          <span aria-live="polite"><span key={String(copied)} className="fade-in">{copied ? 'adresse copiée' : "copier l’adresse"}</span></span>
        </button>
      </div>
    </section>
  );
}

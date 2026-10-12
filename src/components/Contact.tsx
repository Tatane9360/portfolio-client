import { useEffect, useRef, useState } from 'react';
import { legal, whatsapp } from '../legal';

const mailto = `mailto:${legal.email}?subject=${encodeURIComponent('Mon projet de site')}&body=${encodeURIComponent('Mon activité :\nCe que j’attends du site :\nÉchéance souhaitée :\n')}`;

const cal = legal.cal ? new URL(legal.cal) : null;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const section = useRef<HTMLElement>(null);

  // Cal.com's script is third-party: only loaded once the visitor gets close to the contact section.
  useEffect(() => {
    if (!cal) console.warn('VITE_CAL_URL est vide dans .env : le bouton « Réserver un appel » ne mène nulle part.');
    if (!cal || !section.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const script = document.createElement('script');
      script.src = '/cal-embed.js';
      script.dataset.origin = cal.origin;
      document.head.appendChild(script);
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
    <section ref={section} id="contact" className="relative flex min-h-svh flex-col items-center justify-center gap-10 overflow-hidden px-4 py-32 text-center">
      <h2 className="title reveal whitespace-nowrap text-[18vw] md:text-[min(11vw,16.5svh)]">
        Parlons-en<span data-dot className="ml-[0.03em] inline-block size-[0.16em] rounded-full bg-ink motion-safe:opacity-[calc(1-var(--dock,0))]" />
      </h2>
      <p className="reveal max-w-[44ch] leading-relaxed md:text-lg">
        Choisissez un créneau pour un appel de 20 min, gratuit et sans engagement. Vous préférez écrire ? Je vous réponds sous 24 h ouvrées.
      </p>
      <div className="relative grid place-items-center">
        <span data-dot data-dot-land className="block size-56 rounded-full border border-ink/20 md:size-72 motion-safe:opacity-[calc(1-var(--dock,0))]" />
        <a
          href={legal.cal ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
          data-cal-link={cal?.pathname.slice(1)}
          data-cal-config='{"layout":"month_view","theme":"light"}'
          // Once the embed is ready it opens the booking popup itself; before that, the link opens cal.com.
          onClick={(e) => { if (document.documentElement.dataset.cal === 'ready') e.preventDefault(); }}
          className="absolute inset-0 z-40 grid place-items-center rounded-full transition-transform duration-[160ms] ease-out active:scale-[0.97] font-display text-2xl leading-tight font-normal md:text-3xl"
        >
          <span>Réserver<br />un appel</span>
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
        <a href={mailto} className="label ink-under tap">{legal.email}</a>
        <button type="button" onClick={copy} className="label ink-link tap cursor-pointer text-ink-soft transition-transform duration-[160ms] ease-out active:scale-[0.97]">
          <span aria-live="polite"><span key={String(copied)} className="fade-in">{copied ? 'adresse copiée' : "copier l'adresse"}</span></span>
        </button>
      </div>
    </section>
  );
}

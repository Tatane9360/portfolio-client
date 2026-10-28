import { useState, type FormEvent } from 'react';
import { legal, whatsapp } from '../legal';

const champ = 'mt-2 block w-full border-b border-ink/30 bg-transparent py-3 text-lg placeholder:text-ink-soft/70 transition-colors duration-200 hover:border-ink/60 focus:border-ink focus:shadow-[0_1px_0_var(--color-ink)] focus:outline-none';

/** The visitor's answers, laid out as the first message they send. */
function message(f: FormData) {
  const v = (k: string) => String(f.get(k) ?? '').trim();
  return [
    'Bonjour, je vous écris pour un projet de site.',
    `Mon activité : ${v('activite')}`,
    `Ce que j’attends du site : ${v('besoin')}`,
    v('site') && `Mon site actuel : ${v('site')}`,
    v('echeance') && `Échéance souhaitée : ${v('echeance')}`,
  ].filter(Boolean).join('\n');
}

/** The form sends nothing itself: it opens WhatsApp or the mail app with the message already written. */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const envoyer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texte = encodeURIComponent(message(new FormData(e.currentTarget)));
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute('value');
    if (via === 'whatsapp' && whatsapp) window.open(`${whatsapp}?text=${texte}`, '_blank', 'noopener');
    else location.href = `mailto:${legal.email}?subject=${encodeURIComponent('Mon projet de site')}&body=${texte}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(legal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* clipboard denied: the address stays visible */ }
  };

  return (
    <section id="contact" className="relative grid min-h-[calc(100svh-var(--nav))] grid-cols-12 content-center gap-x-4 gap-y-12 overflow-hidden px-4 py-16 md:px-10 md:py-[min(5rem,6svh)]">
      {/* The hero mist, framing both sides: the page opens and closes on the same image. Mobile keeps one side to free the text. */}
      <div aria-hidden="true" className="ink-brume pointer-events-none absolute inset-0 -z-10 -scale-x-100 opacity-[0.25]" />
      <div aria-hidden="true" className="ink-brume pointer-events-none absolute inset-0 -z-10 hidden opacity-[0.25] lg:block" />

      <div className="col-span-12 lg:col-span-5">
        <h2 className="title reveal whitespace-nowrap text-[16vw] md:text-[min(11vw,16.5svh)] lg:text-[min(7vw,16.5svh)]">
          Parlons-en<span data-dot className="ml-[0.03em] inline-block size-[0.16em] rounded-full bg-ink motion-safe:opacity-[calc(1-var(--dock,0))]" />
        </h2>
        <p className="reveal mt-8 max-w-[38ch] leading-relaxed md:text-lg">
          Racontez-moi votre projet en quelques lignes. Je vous réponds sous 24{' '}h ouvrées, par écrit, et on s’appelle seulement si vous le souhaitez.
        </p>
        {/* Desktop: the circle lands here, signed with the seal. Mobile goes straight to the form. */}
        <div className="relative mt-12 hidden w-fit lg:block">
          <span aria-hidden="true" className="sceau stamp absolute -right-2 bottom-2 z-40 w-14 rotate-6" />
          <span data-dot data-dot-land className="block size-[min(16rem,28svh)] rounded-full border border-ink/40 motion-safe:opacity-[calc(1-var(--dock,0))]" />
        </div>
      </div>

      <form onSubmit={envoyer} className="reveal col-span-12 space-y-8 lg:col-span-6 lg:col-start-7">
        <label className="group block">
          <span className="label text-ink-soft transition-colors duration-200 group-focus-within:text-ink">Votre activité et votre ville</span>
          <input name="activite" required autoComplete="organization" placeholder="Boulangerie à Nantes" className={champ} />
        </label>
        <label className="group block">
          <span className="label text-ink-soft transition-colors duration-200 group-focus-within:text-ink">Ce que le site doit vous apporter</span>
          <textarea name="besoin" required rows={3} placeholder="Plus d’appels, des commandes en ligne, remplacer un vieux site…" className={`${champ} resize-y`} />
        </label>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-6">
          <label className="group block">
            <span className="label text-ink-soft transition-colors duration-200 group-focus-within:text-ink">Votre site actuel <span className="normal-case tracking-normal">(facultatif)</span></span>
            <input name="site" autoComplete="url" placeholder="www.…" className={champ} />
          </label>
          <label className="group block">
            <span className="label text-ink-soft transition-colors duration-200 group-focus-within:text-ink">Pour quand <span className="normal-case tracking-normal">(facultatif)</span></span>
            <input name="echeance" placeholder="Avant l’été, pas pressé…" className={champ} />
          </label>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {whatsapp && (
            <button type="submit" value="whatsapp" className="label ink-btn inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full bg-shu px-7 py-3 text-paper">
              Envoyer sur WhatsApp
            </button>
          )}
          <button type="submit" value="email" className={`label ink-btn inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full px-7 py-3 ${whatsapp ? 'border border-current' : 'bg-shu text-paper'}`}>
            Envoyer par email
          </button>
        </div>
        <p className="text-ink-soft">Le message s’ouvre déjà rédigé{whatsapp ? ' dans WhatsApp ou' : ' dans'} votre messagerie : il ne reste qu’à l’envoyer.</p>

        <div className="stitch-t flex flex-wrap items-center gap-x-6 gap-y-7 pt-6 md:gap-y-3">
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="label ink-under tap">
              WhatsApp direct
            </a>
          )}
          <a href={`mailto:${legal.email}`} className="ink-under tap">{legal.email}</a>
          <button type="button" onClick={copy} className="label ink-link tap cursor-pointer text-ink-soft transition-transform duration-[160ms] ease-out active:scale-[0.97]">
            <span aria-live="polite"><span key={String(copied)} className="fade-in">{copied ? 'adresse copiée' : "copier l’adresse"}</span></span>
          </button>
        </div>
      </form>
    </section>
  );
}

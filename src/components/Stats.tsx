// ponytail: the Shopfully report is gated, so we cite the EcommerceMag article that covers it.
const stats = [
  {
    value: '76',
    text: "des Français interrogés cherchent des informations en ligne avant d’acheter, en magasin comme sur internet.",
    source: 'Shopfully, The State of Shopping 2025, mars 2025 (9 482 utilisateurs de ses applis dans 8 pays européens, dont la France)',
    href: 'https://www.ecommercemag.fr/Thematique/etudes-1273/Breves/shopping-francais-rationnels-connectes-481578.htm',
  },
  {
    value: '48',
    text: 'des TPE-PME françaises qui ont un site citent les nouveaux clients comme le premier bénéfice de leur site.',
    source: 'Baromètre France Num, septembre 2025 (11 021 entreprises)',
    href: 'https://www.francenum.gouv.fr/files/2025-09/Barom%C3%A8tre%20France%20Num%202025%20-%20Rapport.pdf',
  },
  {
    value: '52',
    text: 'des sites, sur mobile, sont jugés trop lents ou inconfortables par Google.',
    source: 'HTTP Archive, Web Almanac 2025, données Chrome de juillet 2025',
    href: 'https://almanac.httparchive.org/en/2025/performance',
  },
];

/** One row per figure: number left, statement and source right, read top to bottom like a table. */
export default function Stats() {
  return (
    <section id="chiffres" aria-labelledby="chiffres-titre" className="bg-paper-deep px-4 py-32 md:px-10">
      <h2 id="chiffres-titre" className="title reveal text-[13vw] md:text-[min(7vw,10.5svh)]">Pourquoi un site{' '}?</h2>
      <div className="mt-16 md:mt-20">
        {stats.map((s) => (
          <figure key={s.source} className="brush-t grid grid-cols-12 gap-x-4 gap-y-4 py-10 md:items-end md:py-14">
            <p className="title reveal col-span-12 whitespace-nowrap tabular-nums text-[24vw] md:col-span-5 md:text-[min(12vw,17svh)] lg:col-span-4 lg:text-[min(10vw,17svh)]">
              {s.value}<span className="text-[0.4em]">&nbsp;%</span>
            </p>
            <figcaption className="reveal col-span-12 max-w-[44ch] md:col-span-7 md:pb-[0.4em] lg:col-span-6 lg:col-start-6">
              <p className="text-xl leading-snug text-pretty xl:text-2xl">{s.text}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Source :{' '}
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="ink-link">{s.source}</a>
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

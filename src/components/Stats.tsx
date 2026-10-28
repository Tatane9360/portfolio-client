const stats = [
  {
    value: '77',
    text: "des Français de 12 ans et plus ont acheté en ligne au cours de l’année : vos clients sont déjà sur internet.",
    source: 'CREDOC pour l’Arcep, Baromètre du numérique 2025, mars 2025 (4 066 personnes, données 2024)',
    href: 'https://arcep.fr/uploads/tx_gspublication/barometre-du-numerique_edition_2025_PRESENTATION_mars2025.pdf',
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

/** Full-width rows on indigo cloth: pale numeral filled with dye on scroll at the left, statement and source on the right. */
export default function Stats() {
  return (
    <section id="chiffres" aria-labelledby="chiffres-titre" className="ourle seigaiha px-4 py-24 md:px-10 md:py-28">
      <h2 id="chiffres-titre" className="title reveal text-[15vw] md:text-[min(8vw,13svh)]">Pourquoi un site{' '}?</h2>
      <div className="mt-10 md:mt-14">
        {stats.map((s) => (
          <figure key={s.source} className="grid gap-4 py-8 md:grid-cols-12 md:items-center md:gap-x-4 md:py-10">
            <p className="title whitespace-nowrap tabular-nums text-[34vw] md:col-span-5 md:text-[min(24vw,34svh)] lg:col-span-4">
              <span className="sr-only">{s.value} %</span>
              <span aria-hidden="true" className="relative inline-block">
                <span className="text-paper/45">{s.value}</span>
                <span className="ink-fill absolute inset-0">{s.value}</span>
              </span>
              <span aria-hidden="true" className="text-[0.24em] text-indigo-pale">&nbsp;%</span>
            </p>
            <figcaption className="reveal max-w-[46rem] md:col-span-7 lg:col-span-8">
              <p className="text-xl leading-snug text-pretty md:text-2xl xl:text-3xl">{s.text}</p>
              <p className="mt-4 text-sm leading-relaxed text-indigo-pale">
                Source :{' '}
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline decoration-paper/30 underline-offset-4 transition-[text-decoration-color] duration-200 hover:decoration-paper">{s.source}</a>
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

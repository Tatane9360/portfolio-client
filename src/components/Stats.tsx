// Trois études récentes (2025-2026), dans l'ordre du parcours d'un client : il vérifie votre site,
// le site amène des clients, mais la moitié des sites mobiles sont trop lents. Chaque chiffre renvoie à sa source.
const stats = [
  {
    value: '54',
    text: "des consommateurs vont voir le site d'une entreprise après avoir lu de bons avis à son sujet.",
    source: 'BrightLocal, Local Consumer Review Survey, février 2026 (1 002 consommateurs, États-Unis)',
    href: 'https://www.brightlocal.com/research/local-consumer-review-survey/',
    place: 'md:col-span-7',
  },
  {
    value: '48',
    text: 'des TPE-PME françaises qui ont un site citent les nouveaux clients comme son premier bénéfice.',
    source: 'Baromètre France Num, septembre 2025 (11 021 entreprises)',
    href: 'https://www.francenum.gouv.fr/files/2025-09/Barom%C3%A8tre%20France%20Num%202025%20-%20Rapport.pdf',
    place: 'md:col-span-6 md:col-start-7',
  },
  {
    value: '52',
    text: 'des sites, sur mobile, échouent aux Core Web Vitals : les critères de vitesse et de confort de Google.',
    source: 'HTTP Archive, Web Almanac 2025, données Chrome de juillet 2025',
    href: 'https://almanac.httparchive.org/en/2025/performance',
    place: 'md:col-span-7 md:col-start-2',
  },
];

export default function Stats() {
  return (
    <section id="chiffres" aria-labelledby="chiffres-titre" className="grid grid-cols-12 gap-x-4 gap-y-24 px-4 py-32 md:gap-y-32 md:px-10">
      <h2 id="chiffres-titre" className="sr-only">Ce que votre site dit de vous, en chiffres</h2>
      {stats.map((s, i) => (
        <figure key={s.source} className={`col-span-12 ${s.place}`}>
          <p className="title reveal whitespace-nowrap text-[26vw] md:text-[13vw]">{s.value}<span className="text-[0.4em]">&nbsp;%</span></p>
          <figcaption className="reveal mt-6 max-w-[34ch] md:mt-8">
            <p className="text-xl leading-snug font-light md:text-2xl">
              {s.text}<sup className="ml-0.5 text-ink-soft">{i + 1}</sup>
            </p>
            <p className="mt-4 text-xs text-ink-soft">
              <span aria-hidden="true">{i + 1}. </span>Source :{' '}
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="ink-link">{s.source}</a>
            </p>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}

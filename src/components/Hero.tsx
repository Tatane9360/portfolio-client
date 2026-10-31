import Fleche from './Fleche';

/** Panels of the noren. Each shows its slice of the same title; the first one carries the real h1. */
const LES = 4;

export default function Hero() {
  const titre = (
    <>
      <span className="block whitespace-nowrap text-[11.7cqw]">Sites et applications</span>
      <span className="-ml-[0.04em] mt-[0.06em] block whitespace-nowrap text-[22.6cqw]">sur mesure</span>
    </>
  );

  return (
    <section id="top" className="relative grid min-h-svh grid-cols-12 content-start gap-x-4 overflow-clip px-4 pt-(--nav) pb-10 md:px-10 lg:grid-rows-[auto_1fr] lg:pb-12">
      {/* Indigo wash climbing the right edge, behind the ensō. */}
      <div aria-hidden="true" className="ink-brume brume-derive pointer-events-none absolute inset-0 top-(--nav) -z-10 opacity-[0.34]" />

      {/* Hangs from its rod right under the navbar; drops in (index.css) and sways (useAnimations).
          Desktop: its width is capped by the screen height (the cloth is about 0.54 × its width + 28px tall),
          so the audience line, the sentence and the button still fit in the first screen under it. */}
      <div className="noren relative col-span-12 -mx-4 md:mx-0 lg:col-span-7 lg:max-w-[max(18rem,calc((100svh-27.5rem)*1.85))]">
        {/* The rod runs through the sleeves: it shows at the ends and in the slits. */}
        <span aria-hidden="true" className="tringle absolute -inset-x-6 top-[0.25rem] h-3.5 rounded-full" />
        <div className="noren-pans relative">
          {Array.from({ length: LES }, (_, i) => (
            <div key={i} className="noren-pan" style={{ '--i': i } as React.CSSProperties}>
              <div className="noren-cloth px-[5cqw] pt-[17cqw] pb-[calc(28px+max(1.75rem,6cqw))]">
                {i === 0
                  ? <h1 className="title"><span className="sr-only">Développeur web freelance&nbsp;: </span>{titre}</h1>
                  : <p aria-hidden="true" className="title">{titre}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: the ensō bleeds off the right edge (the section clips overflow). The seal signs it. */}
      <div aria-hidden="true" className="relative col-span-12 -mr-[12vw] mt-3 w-[56vw] justify-self-end sm:mr-0 sm:w-[40vw] lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:w-[min(84%,52svh)] lg:self-center lg:justify-self-center">
        <span className="lavis absolute -inset-[16%] -z-10 opacity-25" />
        <span data-dot className="block aspect-square w-full" />
        <span className="sceau stamp absolute bottom-[3%] left-[2%] w-[17%] -rotate-6" />
      </div>

      <div className="reveal col-span-12 mt-1 sm:mt-6 lg:col-span-6 lg:row-start-2 lg:mt-10 lg:self-center">
        <p className="label">Pour artisans, commerçants et indépendants</p>
        <p className="mt-4 max-w-[34ch] text-[clamp(1.125rem,5vw,1.5rem)] leading-snug text-balance sm:text-2xl lg:mt-5 lg:text-[1.75rem]">
          Le site qui vous amène des clients, l’application que vous avez en tête. La technique, je m’en occupe.
        </p>
        <a href="#contact" className="label ink-btn mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-shu px-7 py-3 text-paper lg:mt-9">
          Décrire mon projet <Fleche />
        </a>
      </div>
    </section>
  );
}

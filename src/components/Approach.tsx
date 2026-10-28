export default function Approach() {
  return (
    <section id="approche" className="relative grid grid-cols-12 gap-x-4 gap-y-12 px-4 py-32 md:px-10">
      <h2 className="title reveal relative col-span-12 text-[17vw] md:col-span-5 md:text-[min(8vw,13svh)]">
        <span data-dot data-dock className="absolute left-0 top-[0.42em] block size-[0.62em] -translate-y-1/2" />
        <span className="inline-block translate-x-[calc(var(--dock,0)*0.7em)]">L’approche</span>
      </h2>

      <div className="relative col-span-8 md:col-span-7 md:col-start-6 md:row-span-2 md:row-start-1">
        <div className="reveal-img aspect-[4/5] overflow-hidden md:aspect-[16/10]">
          <img className="photo md:object-top" loading="lazy" src="/images/approche-boulanger.webp" width="880" height="1100" alt="Une boulangerie au travail, vue depuis la vitrine" />
        </div>
      </div>

      <div className="reveal col-span-12 max-w-[56ch] space-y-5 text-lg leading-relaxed md:col-span-4 md:row-start-2">
        <p className="font-display text-2xl leading-snug font-normal">
          Un site fait à la va-vite qui ne vous ressemble pas, ou un prestataire qui ne répond plus en cours de projet : c’est souvent là que l’on se rencontre.
        </p>
        <p>
          Il vous faut quelqu’un qui comprend ce que vous voulez faire et qui le transforme en un site fiable, qui vous amène des clients.
        </p>
      </div>
    </section>
  );
}

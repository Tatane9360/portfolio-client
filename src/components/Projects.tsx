const projects = [
  {
    title: 'Domifée',
    desc: 'Site vitrine aide à domicile, Next.js',
    img: '/domifee-screenshot.jpg',
    alt: 'Page d\'accueil du site Domifée, aide à domicile à Aubervilliers',
    url: 'https://domifee.fr/',
    shadow: 'shadow-[12px_12px_0px_0px_#FFE800]',
    btnHover: 'hover:bg-[#FF007F]',
    align: '',
    speed: '1.1',
  },
  {
    title: 'Et si c\'était vous ?',
    desc: 'Votre projet pourrait être ici, sites vitrines, apps, e-commerce.',
    img: undefined,
    alt: '',
    url: '#contact',
    shadow: 'shadow-[12px_12px_0px_0px_#00E5FF]',
    btnHover: 'hover:bg-[#00E5FF]',
    align: 'md:self-end',
    speed: '0.9',
  },
];

export default function Projects() {
  return (
    <section id="projets" className="relative w-full scroll-mt-24 py-20 px-4 md:px-20 z-20">
      <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-20 text-center parallax-element" data-speed="1">
        <span className="text-outline">Projets</span>{' '}
        <span className="bg-[#FF007F] text-white px-3 brutalist-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[1deg]">livrés</span>
      </h2>

      <div className="flex flex-col gap-32 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`project-item relative w-full md:w-3/4 bg-white brutalist-border p-4 ${p.shadow} text-black parallax-element ${p.align}`}
            data-speed={p.speed}
          >
            <div className="aspect-video bg-gray-200 brutalist-border w-full flex items-center justify-center overflow-hidden">
              {p.img ? (
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              ) : (
                <span className="text-6xl font-black text-gray-400">?</span>
              )}
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <h3 className="text-3xl font-black uppercase">{p.title}</h3>
                <p className="font-medium text-gray-700">{p.desc}</p>
              </div>
              <a
                href={p.url}
                target={p.url.startsWith('#') ? undefined : '_blank'}
                rel={p.url.startsWith('#') ? undefined : 'noopener noreferrer'}
                className={`bg-black text-white px-6 py-2 font-bold uppercase brutalist-border ${p.btnHover} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150`}
              >
                {p.url.startsWith('#') ? 'Discutons' : 'Voir'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

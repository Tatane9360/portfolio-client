const cards = [
  {
    num: '01',
    title: "J'écoute d'abord",
    desc: "Avant d'écrire une seule ligne de code, je comprends votre business, vos clients, vos objectifs. Le code vient après la stratégie, jamais avant.",
    bg: 'bg-[#00E5FF]',
    titleColor: 'text-black',
    descColor: 'text-black',
  },
  {
    num: '02',
    title: 'Je construis pour convertir',
    desc: "Un beau site, c'est bien. Un site qui transforme vos visiteurs en clients, c'est autre chose. Chaque choix de design est pensé pour votre croissance.",
    bg: 'bg-[#FF007F]',
    titleColor: 'text-black',
    descColor: 'text-black',
  },
  {
    num: '03',
    title: 'Je reste après la livraison',
    desc: "Pas de livraison puis silence radio. Je vous accompagne, j'itère, j'optimise. Votre produit évolue avec votre business.",
    bg: 'bg-[#FFE800]',
    titleColor: 'text-black',
    descColor: 'text-black',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative w-full scroll-mt-24 py-32 px-4 md:px-20 z-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-center">
          <span className="text-outline">Ce que je fais</span>{' '}
          <span className="bg-[#00E5FF] px-3 brutalist-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block rotate-[1deg]">différemment</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.num}
              className={`expertise-card brutalist-border ${card.bg} p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6`}
            >
              <span className="text-7xl font-black leading-none text-outline">{card.num}</span>
              <h3 className={`text-2xl font-black uppercase leading-tight ${card.titleColor}`}>{card.title}</h3>
              <p className={`font-medium text-lg leading-relaxed ${card.descColor}`}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

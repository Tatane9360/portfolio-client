const steps = [
  { num: '01', color: 'bg-[#FFE800]', textColor: 'text-black', title: 'Appel découverte', desc: '30 min. Gratuit. On parle de votre projet, vos objectifs, vos contraintes. Zéro engagement.' },
  { num: '02', color: 'bg-[#FF007F]', textColor: 'text-white', title: 'Proposition claire', desc: 'Devis détaillé, planning réaliste, pas de surprises. Vous savez exactement où vous allez.' },
  { num: '03', color: 'bg-[#00E5FF]', textColor: 'text-black', title: 'On construit ensemble', desc: 'Points réguliers, démos en live. Vous voyez votre projet prendre forme, pas de tunnel de 3 mois sans nouvelles.' },
  { num: '04', color: 'bg-white', textColor: 'text-black', title: 'Lancement & suivi', desc: 'Mise en ligne, formation, et je reste dispo. Votre produit est entre de bonnes mains.' },
];

export default function Process() {
  return (
    <section className="relative w-full py-32 px-4 md:px-20 bg-black text-white border-y-4 border-black z-30 overflow-hidden">
      <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-center text-[#FFE800]">
        Comment ça se passe
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
        {steps.map((step) => (
          <div
            key={step.num}
            className={`process-step brutalist-border ${step.color} ${step.textColor} p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 opacity-0`}
          >
            <span className="text-7xl font-black leading-none text-outline">{step.num}</span>
            <h3 className="text-xl font-black uppercase leading-tight">{step.title}</h3>
            <p className="font-bold text-base leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


/** Questions in the order they come up: before deciding, then once the site is live. */
const groupes = [
  {
    titre: 'Avant de commencer',
    faqs: [
      { q: 'Site vitrine, boutique ou application : de quoi ai-je besoin ?', a: "Tout dépend de ce que font vos clients. S’ils doivent vous trouver puis vous appeler ou vous écrire, un site vitrine suffit. S’ils achètent en ligne, il faut une boutique avec paiement et suivi des commandes. Si vous ou eux répétez la même tâche chaque semaine (réservations, devis, suivi de chantier), une application web vous fera gagner du temps. On tranche ensemble dès votre premier message." },
      { q: 'Combien coûte un site, et qu’est-ce qui fait varier le prix ?', a: "Le prix dépend du nombre de pages, des textes et photos à créer, et de ce que le site doit faire en plus : prise de rendez-vous, paiement, connexion à vos outils. Chaque formule a un prix de départ, indiqué dans les offres. Après notre premier échange, vous recevez un devis détaillé ligne par ligne, et le prix est fixé avant le début du projet. Seuls le nom de domaine et l’hébergement se paient ensuite chaque année, en général une cinquantaine d’euros pour un site vitrine." },
      { q: 'Et si les maquettes ne me plaisent pas ?', a: "On les retouche ensemble. Si, après ces retouches, elles ne vous ressemblent toujours pas, vous arrêtez le projet et vous ne payez rien. C’est pour cela que les maquettes passent avant la première ligne de code." },
      { q: 'J’ai déjà un site qui ne m’amène personne : faut-il tout refaire ?', a: "Pas forcément. Trois questions d’abord : vous trouve-t-on sur Google en tapant votre métier et votre ville ? Comprend-on ce que vous proposez en quelques secondes sur un téléphone ? Peut-on vous appeler ou vous écrire en un geste ? Parfois, quelques corrections suffisent. Dans ce cas, je vous le dis plutôt que de vous vendre un site neuf." },
      { q: 'En combien de temps mon site sera-t-il en ligne ?', a: "En moyenne, 2 à 4 semaines pour un site et 1 à 3 mois pour une application. Ce qui allonge le plus les délais, ce sont les textes et les photos qui tardent : on les prévoit dès le départ. Le planning est fixé dans le devis, et vous suivez l’avancement sur une version de test." },
      { q: 'Que dois-je mettre dans mon premier message ?', a: "Rien de technique. Dites-moi ce que le site doit vous apporter (plus d’appels, des réservations, des ventes), ce qui existe déjà (ancien site, logo, photos, fiche Google), ce qui est indispensable pour vous, et si possible un budget approximatif et une date souhaitée. Le formulaire de contact vous guide, le reste, on le voit ensemble, sans jargon." },
    ],
  },
  {
    titre: 'Une fois le site en ligne',
    faqs: [
      { q: 'Et si un jour je veux changer de prestataire ?', a: "Vous partez quand vous voulez, avec tout. Le nom de domaine et l’hébergement sont à votre nom, et je vous remets tous les accès à la mise en ligne. Vous ne dépendez jamais de moi pour récupérer votre site." },
      { q: 'Mon site sera-t-il visible sur Google ?', a: "Je le déclare à Google à la mise en ligne et je le construis rapide sur mobile, un critère que Google regarde. Pour un commerce de quartier, votre fiche Google compte autant que le site : je vous montre comment les relier. Personne ne peut honnêtement promettre la première place, mais votre site part sur de bonnes bases." },
      { q: 'Le suivi mensuel est-il obligatoire ?', a: "Non. Il est en option et sans engagement de durée. Sans lui, je reste joignable : les corrections et les nouvelles pages sont alors chiffrées à la demande." },
      { q: 'Et après la mise en ligne ?', a: "Je vous fais une prise en main pour que vous soyez autonome au quotidien. Pour une correction, une nouvelle page ou une fonctionnalité, je réponds sous 24 h ouvrées." },
    ],
  },
];

// Espace insécable avant ? et : pour éviter une ponctuation orpheline en début de ligne.
const nbsp = (s: string) => s.replace(/ ([?:])/g, '\u00a0$1');

export default function FAQ() {
  return (
    <section id="faq" className="stitch-t grid grid-cols-12 gap-x-4 gap-y-12 px-4 py-16 md:px-10 md:py-[min(8rem,10svh)]">
      {/* Title above the questions until 64rem: beside them, it would run into the list on tablets. */}
      <div className="col-span-12 lg:col-span-4">
        <h2 className="title reveal text-[17vw] md:text-[min(8vw,13svh)] lg:text-[min(7vw,13svh)]">
          <span className="relative inline-block">
            <span className="inline-block translate-x-[calc(var(--dock,0)*-0.12em)]">Questions</span>
            <span data-dot data-dock className="absolute left-full top-[0.42em] ml-[0.06em] block size-[0.5em] -translate-y-1/2" />
          </span>
        </h2>
        <p className="reveal mt-8 max-w-[22ch] text-xl leading-snug md:mt-10 md:text-2xl">
          Une autre question{'\u00a0'}? Posez-la dans votre message, je réponds sous 24{' '}h ouvrées.
        </p>
        <a href="#contact" className="label ink-under tap mt-6 text-ink-soft">Décrire mon projet</a>
      </div>

      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        {groupes.map((g) => (
          <div key={g.titre} className="[&+&]:mt-16 md:[&+&]:mt-20">
            <h3 className="label reveal pb-5 text-ink-soft">{g.titre}</h3>
            {g.faqs.map((f) => (
              <details key={f.q} className="faq-item group reveal stitch-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 md:py-7 [&::-webkit-details-marker]:hidden">
                  <span className="text-xl font-medium leading-snug text-balance md:text-[clamp(1.375rem,2vw,1.875rem)]">{nbsp(f.q)}</span>
                  {/* Dyed like the buttons: on hover, on keyboard focus, and while open (index.css). */}
                  <span aria-hidden="true" className="ink-btn grid size-11 shrink-0 place-items-center rounded-full border border-current">
                    <span className="relative grid size-4 place-items-center transition-transform duration-300 ease-ink group-open:rotate-45 motion-reduce:transition-none">
                      <span className="absolute h-0.5 w-full bg-current" /><span className="absolute h-full w-0.5 bg-current" />
                    </span>
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-8 leading-relaxed text-ink-soft md:pr-16 md:text-lg">{nbsp(f.a)}</p>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

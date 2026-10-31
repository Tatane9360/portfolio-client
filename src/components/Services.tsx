import { useState } from 'react';
import Fleche from './Fleche';

/** Four chapters, each named after what the client lives (« On ne me trouve pas »), then what it takes to fix it. */
const chapitres = [
  {
    titre: 'Être trouvé',
    voix: 'On ne me trouve pas.',
    services: [
      {
        nom: 'Fiche Google Business Profile',
        souci: 'Horaires faux, peu de photos, avis sans réponse : la fiche est la première chose que l’on voit de vous.',
        fait: 'Je la complète, la corrige et la relie à votre site. On vous trouve, on vous appelle ou on vient en un geste.',
      },
      {
        nom: 'Référencement naturel (SEO)',
        souci: 'Quand on tape votre métier et votre ville, ce sont vos concurrents qui s’affichent.',
        fait: 'Je structure vos pages, vos titres et vos informations pour que Google comprenne ce que vous faites et où. Sans promesse de première place : un travail honnête, que l’on peut vérifier.',
      },
      {
        nom: 'Mesure des visites',
        souci: 'Vous ne savez pas combien de personnes passent sur votre site, ni d’où elles viennent.',
        fait: 'Je mets en place une mesure simple, respectueuse de la vie privée, et je vous montre ce qui amène des demandes.',
      },
    ],
  },
  {
    titre: 'Convaincre',
    voix: 'Mon site ne donne pas envie d’appeler.',
    services: [
      {
        nom: 'Création de site et boutique en ligne',
        souci: 'Pas de site, ou un site qui ne vous ressemble pas.',
        fait: 'Des maquettes validées par vous, puis un site sur mesure, lisible sur mobile. Avec paiement et suivi des commandes si vous vendez en ligne.',
      },
      {
        nom: 'Refonte',
        souci: 'Votre site est daté, ou son prestataire ne répond plus.',
        fait: 'Je regarde d’abord ce qui mérite d’être gardé. Parfois quelques corrections suffisent : je vous le dis plutôt que de vous vendre un site neuf.',
      },
      {
        nom: 'Performance web',
        souci: 'Sur téléphone, la page met du temps à s’afficher et le visiteur repart avant d’avoir lu.',
        fait: 'Je mesure, puis j’allège images et code. Un site rapide rassure, et Google en tient compte.',
      },
    ],
  },
  {
    titre: 'Gagner du temps',
    voix: 'Je perds mes soirées en tâches répétitives.',
    services: [
      {
        nom: 'Application web sur mesure',
        souci: 'Réservations, devis, suivi de chantier : vous refaites la même tâche dans un tableur ou sur papier.',
        fait: 'Je conçois l’outil autour de votre façon de travailler, sur téléphone et ordinateur, livré par étapes et testé avec vous.',
      },
      {
        nom: 'Automatisation',
        souci: 'Vous recopiez à la main les demandes reçues, les relances, les informations d’un outil à l’autre.',
        fait: 'Je relie vos outils (formulaire, agenda, messagerie, tableur) pour que l’information circule sans vous.',
      },
      {
        nom: 'Intelligence artificielle',
        souci: 'On vous en parle partout, sans que vous sachiez ce qui vous serait vraiment utile.',
        fait: 'Je l’intègre là où elle fait gagner du temps, par exemple pour trier des messages ou préparer des réponses types, et c’est vous qui validez ce qui part.',
      },
    ],
  },
  {
    titre: 'Durer',
    voix: 'J’ai peur que ça vieillisse ou que ça casse.',
    services: [
      {
        nom: 'Maintenance et suivi',
        souci: 'Les mises à jour s’accumulent et personne ne vérifie que tout fonctionne.',
        fait: 'Mises à jour, sauvegardes, petites modifications, réponse sous 24 h ouvrées. En option, sans engagement de durée.',
      },
      {
        nom: 'Sécurité',
        souci: 'Un site laissé sans soin finit par être piraté, ou signalé comme dangereux.',
        fait: 'Accès protégés, connexion sécurisée (HTTPS), correctifs de sécurité et sauvegardes.',
      },
      {
        nom: 'Cookies, mentions légales, accessibilité',
        souci: 'Vous n’êtes pas sûr que votre site soit en règle.',
        fait: 'Je règle la partie technique (bandeau cookies, mentions, contrastes, navigation au clavier). Pour l’avis juridique, c’est votre juriste.',
      },
    ],
  },
];

// Static class names so Tailwind can see them: one row per chapter, the open sheet spans them all.
const rangs = ['lg:row-start-1', 'lg:row-start-2', 'lg:row-start-3', 'lg:row-start-4'];

/** Services on indigo cloth: an index of four chapters; the open one lays its sheet of services on the cloth.
    From 64rem the sheet sits beside the index, below it each sheet opens under its chapter (same markup, grid-placed). */
export default function Services() {
  const [actif, setActif] = useState(0);

  return (
    <section id="services" aria-labelledby="services-titre" className="ourle seigaiha px-4 py-24 md:px-10 md:py-28">
      <h2 id="services-titre" className="title reserve reveal text-[17vw] md:text-[min(8vw,13svh)]">Services</h2>
      <p className="reveal mt-6 max-w-[38ch] text-xl leading-snug md:text-2xl">
        Un site qui vous amène des clients, et tout ce qui l’entoure. Je regarde d’abord votre activité, puis je ne vous propose que ce qui vous sert.
      </p>

      <ol role="list" className="mt-12 grid md:mt-16 lg:grid-cols-12 lg:grid-rows-[repeat(4,auto)_1fr] lg:gap-x-4">
        {chapitres.map((c, i) => {
          const ouvert = i === actif;
          return (
            <li key={c.titre} role="listitem" className="contents">
              <h3 className={`reveal stitch-t lg:col-span-5 ${rangs[i]}`}>
                <button
                  type="button"
                  id={`chapitre-${i}`}
                  aria-expanded={ouvert}
                  aria-controls={`feuille-${i}`}
                  onClick={() => setActif(ouvert ? -1 : i)}
                  className="group flex w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper items-center gap-4 py-6 text-left md:gap-6 md:py-8"
                >
                  <span aria-hidden="true" className="label w-7 shrink-0 self-start pt-2 text-indigo-pale tabular-nums md:w-9">0{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`title block text-[clamp(2.25rem,10vw,4.5rem)] transition-colors duration-200 ease-out lg:text-[clamp(2.25rem,4.4vw,8svh)] ${ouvert ? 'text-paper' : 'text-indigo-pale group-hover:text-paper'}`}>{c.titre}</span>
                    <span className="mt-3 block max-w-[34ch] leading-snug text-indigo-pale md:text-lg">{c.voix}</span>
                  </span>
                  <span aria-hidden="true" className={`grid size-11 shrink-0 place-items-center rounded-full border border-current transition-[background-color,color] duration-200 ease-out ${ouvert ? 'bg-paper text-indigo' : 'text-paper group-hover:bg-paper/15'}`}>
                    <span className={`relative grid size-4 place-items-center transition-transform duration-300 ease-ink motion-reduce:transition-none ${ouvert ? 'rotate-45' : ''}`}>
                      <span className="absolute h-0.5 w-full bg-current" /><span className="absolute h-full w-0.5 bg-current" />
                    </span>
                  </span>
                </button>
              </h3>

              <div
                id={`feuille-${i}`}
                hidden={!ouvert}
                className="feuille-posee mb-8 bg-sheet p-6 text-ink md:p-10 lg:col-span-6 lg:col-start-7 lg:row-span-5 lg:row-start-1 lg:mb-0"
              >
                <ul>
                  {c.services.map((s) => (
                    <li key={s.nom} className="stitch-t py-6 first:pt-0 first:before:hidden last:pb-0 md:py-7 md:first:pt-0 md:last:pb-0">
                      <h4 className="text-xl leading-snug font-semibold text-balance md:text-2xl">{s.nom}</h4>
                      <p className="mt-2 max-w-[52ch] leading-relaxed text-ink-soft">{s.souci}</p>
                      <p className="mt-2 max-w-[52ch] leading-relaxed md:text-lg">{s.fait}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Advice comes first in practice, but it is not a chapter: it is how any project starts. */}
      <div className="reveal stitch-t grid gap-6 py-10 md:py-14 lg:mt-12 lg:grid-cols-12 lg:gap-x-4">
        <div className="lg:col-span-5">
          <p className="label text-indigo-pale">Pour commencer</p>
          <h3 className="title mt-4 text-[clamp(2rem,9vw,4rem)] lg:text-[clamp(2.25rem,4.4vw,8svh)]">Conseil et audit</h3>
        </div>
        <p className="max-w-[52ch] leading-relaxed md:text-lg lg:col-span-6 lg:col-start-7">
          Vous ne savez pas par où commencer&nbsp;? Je regarde votre site, votre fiche Google et vos outils, puis je vous dis ce qui vous rapporterait le plus, dans quel ordre, et ce qui peut attendre. Il m’arrive de conclure qu’il ne faut rien changer.
        </p>
      </div>

      <div className="stitch-t grid gap-10 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-x-4">
        <div className="reveal lg:col-span-5">
          <p className="max-w-[48ch] leading-relaxed md:text-lg">
            Pas de grille de prix&nbsp;: chaque activité est différente, chaque devis l’est aussi. Après votre premier message, je vous réponds avec mes questions,
            puis vous recevez un devis détaillé ligne par ligne, au prix fixé avant le début du projet. Le site et tous les accès sont à votre nom.
          </p>
          <a href="#contact" className="label ink-btn mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-shu px-7 py-3 text-paper">
            Décrire mon projet <Fleche />
          </a>
        </div>

        {/* The guarantee on a sheet of paper laid over the cloth, signed with the seal. */}
        <div className="reveal relative bg-sheet p-8 text-ink md:p-10 lg:col-span-6 lg:col-start-7">
          <span aria-hidden="true" className="sceau stamp absolute top-6 right-6 w-12 rotate-6 md:w-14" />
          <p className="label text-ink-soft">Garantie</p>
          <h3 className="title mt-4 max-w-[18ch] text-[clamp(2rem,9vw,3rem)] lg:text-[clamp(1.75rem,2.6vw,3rem)]">Les maquettes vous déplaisent&nbsp;: vous ne payez rien</h3>
          <p className="mt-6 max-w-[44ch] leading-relaxed text-ink-soft md:text-lg">
            Les maquettes passent avant la première ligne de code. Si, après nos retouches, elles ne vous ressemblent toujours pas, vous arrêtez le projet, sans rien payer.
          </p>
        </div>
      </div>
    </section>
  );
}

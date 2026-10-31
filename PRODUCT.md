# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Artisans, commerçants et indépendants en France, peu à l'aise avec la technique. Souvent après un site fait à la va-vite qui ne leur ressemble pas, ou un prestataire qui ne répond plus. Ils cherchent quelqu'un de fiable pour un site qui leur amène des clients. (Déduit des textes du site, validés comme à conserver.)

## Product Purpose

Esumi est un studio freelance de développement web : sites vitrines, applications web et e-commerce sur mesure. Le site sert à convaincre puis à faire écrire un premier message qui raconte le projet (formulaire qui prépare le message, envoyé par WhatsApp ou par email). Pas d'appel imposé : on s'appelle seulement si le client le souhaite (décidé le 2026-10-28).

## Positioning

Un seul interlocuteur de l'écoute au suivi ; devis détaillé et prix fixé avant le début ; site et accès au nom du client ; explications sans jargon ; 2 à 4 semaines en moyenne pour un site vitrine.

## Capabilities and Constraints

- React 19, Vite, Tailwind v4, GSAP + ScrollTrigger, Lenis. Polices auto-hébergées (pas de Google Fonts en ligne).
- Formulaire de contact sans serveur : il ouvre WhatsApp (si VITE_TELEPHONE est rempli) ou la messagerie avec le message rédigé.
- Mouvement réduit respecté partout ; lien d'évitement, focus visibles.
- Services (src/components/Services.tsx, remplace les Offres depuis le 2026-10-31) : aucun prix affiché, devis détaillé après le premier message. Quatre chapitres (Être trouvé, Convaincre, Gagner du temps, Durer) + Conseil et audit + garantie maquettes. Mesure des visites et conformité (cookies, accessibilité) ajoutés par proposition : à confirmer comme compétences réellement proposées.

## Brand Commitments

- Nom Esumi, logo ensō + mot « esumi » : à conserver. Depuis le 2026-10-28, à la demande du client, le mot est composé en Bricolage Grotesque 700 (composant src/components/Logo.tsx) et l'ensō est extrait du logo d'origine (public/logo-enso.svg, coloré par masque). Les fichiers d'origine public/logo-esumi.svg et public/logo-esumi-light.svg restent dans le dépôt mais ne sont plus affichés.
- L'ensō unique qui voyage de section en section au scroll (src/components/Dot.tsx, ancres [data-dot]) : à conserver.
- Les textes actuels du site : à conserver (confirmé le 2026-10-28).
- La marque prime sur la personne : ni prénom, ni photo, ni bloc « qui suis-je ».

## Evidence on Hand

- Deux projets réels avec captures : Nino Hericher (public/images/nino-hericher-site.webp), Domifée (public/images/domifee-accueil.webp).
- Trois chiffres sourcés (Arcep 2025, France Num 2025, Web Almanac 2025) dans src/components/Stats.tsx.
- Photos d'illustration : public/images/approche-boulanger.webp, public/images/methode-maquettes.webp.
- Aucun témoignage pour l'instant : ne pas en inventer. Aucun client, chiffre d'affaires ou résultat chiffré à inventer.

## Product Principles

1. Rassurer avant d'impressionner : le visiteur doit comprendre l'offre et l'action en quelques secondes.
2. Une seule action principale : décrire son projet par message.
3. La preuve plutôt que la promesse : projets réels et chiffres sourcés.
4. La marque Esumi porte la confiance, pas la personne.

## Accessibility & Inclusion

WCAG 2.2 AA visé : contrastes, clavier, lecteurs d'écran, mouvement réduit.

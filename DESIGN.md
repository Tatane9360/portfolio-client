---
name: Esumi
description: Studio de développement web sur mesure pour artisans, commerçants et indépendants.
colors:
  paper: "#f3f2ee"
  sheet: "#fbfaf8"
  ink: "#141d33"
  ink-soft: "#4a5268"
  indigo: "#1f3360"
  indigo-pale: "#a9bcd8"
  shu: "#c03f24"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "min(8vw, 13svh)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 96, 'wdth' 75"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.1
    fontVariation: "'wdth' 87.5"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.375
  body:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  pill: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter-desktop: "40px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.shu}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
    height: "48px"
  button-primary-hover:
    textColor: "{colors.paper}"
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  project-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    padding: "40px"
  url-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    height: "36px"
    padding: "0 16px"
---

# Design System: Esumi

## Overview

**Creative North Star: "Le noren d'atelier"**

Le site est une échoppe d'artisan dans laquelle on entre : un rideau de coton teint à l'indigo, tendu sur une tringle de bambou, porte le nom de la boutique ; derrière, du coton écru, des feuilles de travail posées en pile, une méthode cousue point par point, et des sceaux vermillon qui signent ce qui est livré. Tout est matière : tissu, couture, teinture, papier, encre. Rien n'est un aplat d'interface générique.

La densité est faible et la typographie massive : de grandes capitales condensées comme des enseignes peintes, un texte courant aéré, de larges champs indigo assumés de bord à bord (bande des chiffres, menu mobile, pied de page) plutôt que des bandeaux teintés. Le mouvement suit trois verbes : le tissu se balance, les feuilles se posent, les sceaux s'impriment. Le rejet confirmé : le portfolio minimal papier crème à typographie fine, qui était l'ancien site et le défaut de la catégorie.

**Key Characteristics:**
- Champs indigo pleins, motif seigaiha en réserve, ourlés d'une couture.
- Toute ligne est une couture sashiko en pointillés réguliers (10px de point, 7px de vide).
- Titres en Bricolage Grotesque 800, condensée à 75 %, en capitales, interlignage serré.
- Vermillon rare : action principale et sceaux.
- Rasters fabriqués (cyanotypes, coton, ourlet, tringle, lavis, brume), jamais un filtre au runtime.

## Colors

Un coton écru froid, une encre indigo-noir, un indigo kon en grands champs et une seule note chaude, le vermillon.

### Primary
- **Indigo kon** (indigo) : la teinture du rideau. Champs pleins de la bande des chiffres, du menu mobile et du pied de page (avec le motif seigaiha), lés du noren, lavis derrière l'ensō, brume d'encre du hero et du contact (en masque, opacité 0.25 à 0.34). Papier sur indigo : 11:1.

### Secondary
- **Vermillon shu** (shu) : le sceau 墨 et l'action principale « Décrire mon projet » (bouton plein). Papier sur shu : 4.7:1, réservé au texte de label en gras.

### Neutral
- **Coton écru** (paper) : fond de page, barre de navigation, texte sur champs indigo et sur boutons pleins.
- **Feuille blanche** (sheet) : fond des feuilles projets, un cran plus clair que le coton pour se détacher par la valeur.
- **Encre indigo-noir** (ink) : texte, contours des boutons secondaires, tache d'encre au survol des boutons, barre d'adresse des captures.
- **Encre délavée** (ink-soft) : texte secondaire, réponses de FAQ, descriptions d'étapes, métadonnées (7:1 sur coton).
- **Indigo pâle** (indigo-pale) : texte secondaire sur champ indigo (sources des chiffres, signe %, copyright ; 6.4:1 sur indigo).

### Named Rules
**La règle des carreaux de vitrail.** Le vermillon est une note rare : une action principale par écran, un sceau par bloc signé. Jamais en fond de section, jamais en texte courant.

**La règle du champ assumé.** L'indigo se pose en champ plein de bord à bord, jamais en bande teintée à faible opacité. Seuls la brume et le lavis (des encres, en masque) ont droit à la transparence.

## Typography

**Display Font:** Bricolage Grotesque (variable, graisses 200–800, largeur 75–100 %, auto-hébergée), repli sans-serif
**Body Font:** Bricolage Grotesque, même fichier

**Character:** Une seule famille, deux voix : l'enseigne peinte (800, condensée à 75 %, capitales, coupe optique 96 à toutes les tailles) et la voix parlée, droite et lisible, en largeur normale.

### Hierarchy
- **Display** (800, largeur 75 %, capitales, `min(8vw, 13svh)` sur desktop et 15–22vw sur mobile, interlignage 0.86, -0.01em) : titres de section, nom de projet (`min(6vw, 10svh)`), chiffres de la bande indigo (jusqu'à `min(24vw, 34svh)`), titre du noren calé sur la largeur du rideau en `cqw`. Équilibré (`text-wrap: balance`).
- **Headline** (700, largeur 87.5 %, 1.875rem → 2.25rem) : réservé ; les étapes de la méthode sont en display (`clamp(1.75rem, 2.6vw, 3rem)` dans le registre dès 64rem).
- **Title** (500, 1.25rem → 1.5rem, interlignage serré) : questions de la FAQ, phrase d'accroche des sections (400, jusqu'à 1.75rem dans le hero).
- **Body** (400, 1rem → 1.125rem, interlignage 1.625) : paragraphes, plafonnés entre 44ch et 60ch.
- **Label** (600, 0.8125rem → 0.875rem dès 64rem, +0.12em, capitales) : liens de navigation, boutons, type de projet, contacts.

### Named Rules
**La règle de l'enseigne.** La display est toujours en capitales, 800, condensée à 75 % ; jamais en casse mixte, jamais en graisse fine. Une seule famille dans tout le site.

## Layout

Grille de 12 colonnes, gouttière de 16px, marges latérales de 16px sur mobile et 40px dès 48rem. Les sections respirent par de grands vides verticaux (128px pour les sections de contenu, 96–112px pour la bande indigo), et les titres sont dimensionnés en `vw` plafonnés par `svh` pour tenir dans l'écran sur les desktops bas.

La barre de navigation est fixe et toujours visible ; sa hauteur `--nav` (4.75rem, puis 5rem dès 48rem) est soustraite par les sections plein écran et sert de `scroll-margin-top`. Compositions asymétriques : titre sur 4–5 colonnes, contenu sur 7 colonnes décalées (colonne 6). Sur desktop, les feuilles projets sont collantes sous la barre et se posent toutes sur la même ligne (`--nav` + 1rem), la suivante recouvrant la précédente ; un espaceur de 30svh sous la pile laisse la dernière se poser avant de repartir (le padding du parent ne compte pas dans la course d'un élément collant) ; la pile n'est collante qu'au-delà de 40rem de hauteur d'écran ; sur mobile elles se suivent simplement.

Points de rupture effectivement utilisés : 40rem, 48rem (passage desktop), 64rem (hero sur deux colonnes, labels agrandis), 96rem. Le texte des feuilles se resserre sous 50rem de hauteur.

## Elevation & Depth

Hybride, et toujours physique. Le système est plat par défaut ; une ombre n'existe que là où un objet réel pend ou se pose : le tissu du noren sous sa tringle, la tringle elle-même, la feuille posée sur la pile. Les ombres sont teintées d'encre (rgb 20 29 51), diffuses, avec un étalement négatif pour rester sous l'objet. Le reste de la profondeur vient de la matière : un grain de bruit fractal à 5 % sur toute la page, la brume d'encre qui descend plus lentement que la page, l'ourlet et le fourreau du rideau assombris par dégradé.

### Shadow Vocabulary
- **Tissu suspendu** (`box-shadow: 0 18px 30px -18px rgb(20 29 51 / 0.55)`) : chaque lé du noren.
- **Tringle** (`box-shadow: 0 3px 6px -2px rgb(20 29 51 / 0.5)`) : la tringle de bambou.
- **Feuille posée** (`box-shadow: 0 -24px 48px -32px rgb(20 29 51 / 0.4)`) : feuille projet collante sur desktop, ombre portée vers le haut sur la feuille précédente.

### Named Rules
**La règle de l'objet réel.** Pas d'ombre sans objet suspendu ou posé. Une carte d'interface n'a pas d'ombre ; une feuille sur une pile en a une.

## Shapes

Deux formes seulement. Le rectangle franc (rayon 0) pour tout ce qui est tissu, papier ou image : lés, feuilles, captures, photos, champs. La pilule et le cercle (9999px) pour ce qui se touche : boutons, bouton de menu, ensō de réservation, pastilles des étapes. Une seule exception : le bouton tampon de la barre, rectangle franc signé du sceau. Les bordures sont des coutures en pointillés (2px, `--stitch`, opacité 0.4) ou un filet d'encre à 10 % autour des feuilles ; les contours pleins sont réservés aux boutons secondaires (1px, `currentColor`). Les sceaux et la brume sont des masques : la couleur vient toujours d'un token, jamais de l'image.

## Components

### Buttons
Boutons d'encre : une pilule qui se teint au survol, la tache d'encre se répandant depuis le centre.
- **Shape:** pilule (9999px), hauteur minimale 44–48px.
- **Primary:** fond vermillon, texte coton en label, 12px 28px, flèche cousue (trait 1.75) à droite. Réservé à « Décrire mon projet ».
- **Outline:** bordure 1px `currentColor`, transparent, texte en label ; utilisé pour « Voir le site ».
- **Tampon (barre de navigation) :** rectangle franc, bordure 1px, texte 600 en casse normale, sceau 墨 à droite.
- **Hover / Focus:** la tache (masque `blot.png`, encre) passe de l'échelle 0.2 à 1 en 450ms `--ease-ink` et le texte vire au coton ; au focus clavier, même teinte plus un contour 2px décalé de 4px. `:active` réduit à 0.97. Survol seulement sur pointeur fin.

### Cards / Containers
- **Feuille projet :** rectangle franc, fond sheet, filet d'encre à 10 %. Une étiquette de coton indigo (le même tissu que le noren : texture `noren.webp`, ourlet teint en réserve `noren-ourlet.webp` en bas) est cousue de bord à bord sur un côté, large de `clamp(18rem, 28vw, 26rem)` ; elle alterne gauche/droite d'une feuille à l'autre. Elle se lit de haut en bas : nom en lettrage réservé (`.reserve`, comme le titre du rideau), type en label indigo pâle, puis, calés en bas, contexte, liste (tirets de coton à 45 %) et bouton « Voir le site » inversé (`.sur-indigo` : la teinte coton se répand et le texte vire à l'indigo). Coutures d'ourlet en haut et au-dessus de l'ourlet teint, couture de fixation le long du bord cousu. La capture, sous une barre d'adresse encre de 36px, occupe le papier : la plus grande boîte qui tient (conteneur de taille). Le sceau est un sceau de jonction (wariin) pressé à cheval sur la couture, en bas, tourné de ±3°. Sur mobile, l'étiquette couvre toute la feuille et la capture se pose sur le coton ; le sceau va en bas à droite. Sur desktop, la feuille se pose en tournant de ±2° vers 0 à son entrée (animation liée au scroll).

### Navigation
- **Barre :** fixe, fond coton, logo à gauche, liens au centre (dès 48rem) en casse normale, 500, 0.9375rem, sans capitales espacées. À droite, le bouton tampon : rectangle franc à contour 1px, texte 600 en casse normale, signé du sceau 墨 (masqué sous 40rem pour tenir avec le bouton menu) ; il se teint à l'encre au survol comme les autres boutons, le sceau restant vermillon. Lien actif et focus : soulignement en couture qui se coud de gauche à droite (`clip-path`, 450ms `--ease-ink`).
- **Logo :** l'ensō d'origine (masque `logo-enso.svg`, couleur du texte) suivi du mot « esumi » en Bricolage Grotesque 700, largeur 87.5 %, -0.02em, en minuscules ; l'ensō fait 1.65em. Même composant dans la barre, le pied de page et les mentions légales.
- **Mobile :** bouton rond encre de 44px (deux traits qui se croisent), menu plein écran en champ seigaiha qui se déroule du haut ; liens en display à 17vw qui montent en cascade (50ms d'écart).

### Liens
- **Liens texte :** soulignement en couture à 35 % au repos, cousu en entier au survol ; zone tactile portée à 44px sans déplacer le texte.

### FAQ
- Deux groupes titrés en label (« Avant de commencer », « Une fois le site en ligne »). Accordéons natifs (`details`) séparés par des coutures, questions en titre 500 jusqu'à 1.875rem. Le bouton rond (44px, contour 1px) est un bouton d'encre piloté par toute la ligne : il se teint au survol, au focus clavier et reste teint tant que la réponse est ouverte ; la croix pivote de 45° en 300ms ; le contenu s'ouvre en hauteur et en opacité. Sous le titre, une relance « Une autre question ? » mène à la réservation (lien cousu, pas de second bouton plein).

### Noren (signature)
Un seul tissu découpé en 4 lés (gap 5px) sous une tringle de bambou ; chaque lé affiche sa tranche du même contenu, si bien que le titre court à travers les fentes. Coton indigo, fourreau assombri et cousu en haut, ourlet teint en réserve en bas, lettrage en réserve (le coton blanc laisse voir sa trame). Au chargement, les lés tombent de la tringle en cascade (1.1s, 70ms d'écart) ; ensuite ils se balancent selon la vitesse du scroll et le passage du pointeur (élastique, 1.6s).

### Couture de la méthode
Une ligne verticale en pointillés d'encre (2px, 45 %) cousue au fil du scroll, qui relie des pastilles rondes (ancres de l'ensō) ; elle ne dévie jamais. Chaque étape est une ligne de registre, comme un devis détaillé ligne par ligne : dès 64rem, nom en display (3/11), description (5/11) et « Vous repartez avec » en label suivi du livrable en 500 (3/11) ; en dessous, les trois s'empilent. Les lignes sont réglées par des coutures `--stitch` qui passent sous les colonnes de texte, jamais à travers le fil. La photo des maquettes se tient à droite du titre de la section.

### Sceau
Le caractère 墨 en vermillon, masque pressé de travers (-6° à +6°) sur ce qui est signé : l'ensō du hero, chaque projet (à cheval sur la couture de l'étiquette), l'ensō du contact et la garantie des offres. Il s'imprime en un léger écrasement (0.94 puis 1).

### Chiffres teints
Chiffres display à contour pâle (coton à 45 %) que la teinture remplit de bas en haut à leur entrée dans l'écran ; pleins d'emblée sans animation liée au scroll.

## Do's and Don'ts

### Do:
- **Do** tracer chaque ligne (séparateur, soulignement, frise, ourlet) avec la couture `--stitch` : 2px, 10px de point, 7px de vide.
- **Do** poser l'indigo en champ plein de bord à bord, avec le motif seigaiha et un ourlet cousu à 0.75rem des bords.
- **Do** cuire les traitements d'image dans les rasters (`scripts/atelier.py`) : photos en cyanotype, textures de coton ; aucun filtre CSS au runtime.
- **Do** colorer sceaux, brume, lavis et taches par masque, avec la couleur d'un token.
- **Do** donner un repli statique à tout mouvement : mouvement réduit respecté, animations liées au scroll seulement sous `@supports (animation-timeline: view())`.
- **Do** utiliser `--ease-ink` (`cubic-bezier(0.16, 1, 0.3, 1)`) pour l'arrivée d'un état, `ease-out` court (160–200ms) pour son retour.

### Don't:
- **Don't** revenir au portfolio minimal papier crème à typographie fine.
- **Don't** utiliser le vermillon en fond de section, en texte courant, ou pour une action secondaire.
- **Don't** ajouter une deuxième famille de caractères ni composer la display en casse mixte ou en graisse fine.
- **Don't** mettre une ombre sur un élément qui n'est ni suspendu ni posé.
- **Don't** arrondir les tissus, feuilles, images ou champs.

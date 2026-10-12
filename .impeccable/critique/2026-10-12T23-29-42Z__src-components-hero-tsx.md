---
target: ma hero section
total_score: 18
max_score: 24
na_heuristics: 3,5,7,9
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\tatan\\Desktop\\projet\\portfolio-client\\src\\components\\Hero.tsx"
target_fingerprint: "sha256:0c4420f0104492e649901eb764d632949042dd7d7a02ff114c95e9e0a1daf900"
target_path: "C:\\Users\\tatan\\Desktop\\projet\\portfolio-client\\src\\components\\Hero.tsx"
timestamp: 2026-10-12T23-29-42Z
slug: src-components-hero-tsx
---
Method: dual-agent (A : revue design · B : détecteur et navigateur)

## Score (hero seul)

| # | Heuristique | Score | Problème clé |
|---|---|---|---|
| 1 | Visibilité de l'état | 3 | Contour de focus du bouton invisible. |
| 2 | Correspondance avec le monde réel | 3 | « Sur mesure » seul reste abstrait. |
| 3 | Contrôle et liberté | n/a | |
| 4 | Cohérence et standards | 3 | Bouton nav sur 2 lignes à 768 px. |
| 5 | Prévention des erreurs | n/a | |
| 6 | Reconnaissance plutôt que rappel | 3 | |
| 7 | Flexibilité | n/a | |
| 8 | Esthétique et minimalisme | 3 | Le plus gros élément ne dit pas ce qui est vendu. |
| 9 | Récupération d'erreur | n/a | |
| 10 | Aide | 3 | Réassurance bien placée. |
| **Total** | | **18/24** | **Bon (75 %)** |

## Verdict de spécificité

Authored. Forme très affirmée, message moins : « Sur mesure » (224 px) et l'ensō (430-465 px) ne portent aucune information d'offre. Détecteur : CLI 0 constat ; injecté : cream-palette (parti pris), low-contrast sur .ink-btn (faux positif, ::before opacity 0 au repos). Contrastes réels 12,58:1 et 5,27:1. Pas de débordement aux 6 tailles.

## Mesures

| Fenêtre | Hero / fenêtre | Bas du bouton | Accroche |
|---|---|---|---|
| 1900x830 | 830/830 | visible (+47) | 30 px, 3 lignes |
| 1366x768 | 768/768 | visible (+45) | 3 lignes |
| 1280x640 | 725/640 | hors fenêtre (-45) | 3 lignes |
| 768x1024 | 1024/1024 | visible | 5 lignes, 163 px de vide nav→label |
| 390x844 | 844/844 | visible, 147 px vides dessous | 24 px, 3 lignes |
| 360x640 | 749/640 | hors fenêtre (-37) | 4 lignes |

## Problèmes prioritaires

- [P1] Bouton sous la ligne de flottaison à 1280x640, 360x640, 390x664 (Hero.tsx:3,7,11,16 : pt-24, ensō 52vw, H1 min(14vw,27svh), accroche 30 px). Correctif : réduire H1/accroche sous ~760 px de haut, ensō mobile ~36-40vw. Commande : /impeccable adapt
- [P1] Les éléments les plus visibles ne disent pas ce qui est vendu : H1 224 px vs label 13 px (11,52 px mobile) ; H1 utile en sr-only (Hero.tsx:12). Correctif : label plus gros et rapproché, ou titre porteur. Commande : /impeccable typeset
- [P2] Outline de focus invisible sur .ink-btn : color passe à paper, outline currentColor = 1,0:1 (index.css). Tache d'encre incomplète sur la dernière lettre. Correctif : outline-color ink, tache plus large. Commande : /impeccable harden
- [P2] Tablette 768 : accroche 5 lignes, 163 px de vide, bouton nav 2 lignes. Correctif : empilement mobile jusqu'à lg. Commande : /impeccable adapt
- [P3] Bouton hero sous-pondéré vs celui de la nav. Correctif : fond encre plein. Commande : /impeccable bolder

## Observations mineures

- md:leading-[0.82] sans effet (.title hors couche l'emporte) : ~25 px à gagner.
- 445 px de vide entre texte et ensō à 1900 px.
- Lavis du bas (opacité 0,14) à peine perceptible.
- Label mobile coupé par <br> forcé : 17 px à gagner.

## Questions

1. Si on cache l'accroche, que vend cet écran ?
2. L'ensō doit-il être à sa taille maximale dans le hero ?

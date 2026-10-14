---
target: hero section mobile
total_score: 20
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\tatan\\Desktop\\projet\\portfolio-client\\src\\components\\Hero.tsx"
target_fingerprint: "sha256:964d00b3e3bfa0c3d2ea7b383d8874dd9cf03c45e4d4299228e292eb3fe86d68"
target_path: "C:\\Users\\tatan\\Desktop\\projet\\portfolio-client\\src\\components\\Hero.tsx"
timestamp: 2026-10-14T17-37-03Z
slug: src-components-hero-tsx
---
# Critique hero mobile (Hero.tsx)

Score 20/28 (n/a : 7, 9, 10). H1 3 · H2 3 · H3 3 · H4 2 · H5 3 · H6 3 · H8 3.
Détecteur CLI : 0 finding. Overlay : 5 findings, aucun dans la hero (all-caps-body x3 dans Projets, low-contrast faux positif sur ::before opacity 0, cream-palette = DA assumée).

## Priority issues
- [P1] CTA sous le pli sur petits écrans réels : 375x548 (Safari iPhone SE) CTA 110px sous le pli ; 375x667 hero 698px, 9px sous le CTA. Fix : ensō w-[min(52vw,24svh)], marges mt-8 -> mt-6.
- [P1] L'ensō (195-224px noir plein) s'intercale entre le label et le H1 : il vole le premier regard et casse le groupe label + titre (250px d'écart). Fix : label collé au H1, ensō déplacé (au-dessus du label, à droite, ou derrière « sur mesure »).
- [P2] Échelle typo à 3 marches trop proches : 28,5px/300 vs 21px/400, le sous-titre pèse autant que la ligne 1 du H1. Fix : sous-titre clamp ~17-18px, ink-soft ; ligne 1 ~8.4vw.
- [P2] Deux CTA vers #contact dans le même écran, libellés et styles différents (« Mon projet » contour en haut à droite / « Parler de mon projet » plein). Fix : cacher le CTA navbar tant que #top est visible, ou unifier.
- [P3] Vide réparti par justify-center (86-109px sous la nav, 105-129px sous le CTA), aucune amorce de suite. Fix : justify-end + safe-area, réassurance sous le CTA (contenu à valider par l'utilisateur).

## Minor
- Tailles en vw sans clamp() : le zoom texte 200 % ne grossit pas le titre (WCAG 1.4.4).
- max-w-[34ch] inutile en mobile ; .ink-wash à 0,14 quasi invisible.
- Menu mobile : nav sans nom accessible.

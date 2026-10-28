# Ressources de la refonte « noren d'atelier ». Usage : python scripts/atelier.py (Windows : police Yu Gothic Bold).
# Les cyanotypes partent des photos d'origine : les restaurer avant de relancer (git show main:public/images/<nom>.webp).
# Dépendances : numpy, scipy, pillow. Graine fixe : relancer donne les mêmes fichiers.
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageOps
from scipy.ndimage import gaussian_filter
rng = np.random.default_rng(11)

def smooth(e0, e1, v):
    t = np.clip((v - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)

def noise(shape, s):
    n = gaussian_filter(rng.standard_normal(shape), s, mode='wrap'); return (n - n.min()) / np.ptp(n)

# 1. Sceau 墨 (« encre ») en creux, comme le cachet rouge qui signe une peinture à l'encre.
# Masque alpha seul : la couleur vient du CSS. Bords mangés et manques d'encre d'un tampon réel.
S = 640
img = Image.new('L', (S, S), 0); d = ImageDraw.Draw(img)
d.rounded_rectangle((28, 28, S - 28, S - 28), radius=44, fill=255)
font = ImageFont.truetype('C:/Windows/Fonts/YuGothB.ttc', 452)
x0, y0, x1, y1 = d.textbbox((0, 0), '墨', font=font)
d.text(((S - (x1 - x0)) / 2 - x0, (S - (y1 - y0)) / 2 - y0), '墨', font=font, fill=0)
a = gaussian_filter(np.asarray(img) / 255, 2.4)
a = smooth(0.5, 0.56, a + 0.22 * (noise((S, S), 3) - 0.5) + 0.12 * (noise((S, S), 14) - 0.5))  # bords irréguliers
a *= smooth(0.28, 0.4, noise((S, S), 1.6) * 0.5 + noise((S, S), 22) * 0.5)                      # encre mal transférée
out = np.zeros((S, S, 4), np.uint8); out[..., :3] = (192, 63, 36); out[..., 3] = (a * 255).astype(np.uint8)
Image.fromarray(out).resize((320, 320), Image.LANCZOS).save('public/textures/sceau.webp', quality=85, method=6)

# 2. Photos en cyanotype : niveaux de gris passés sur le dégradé de l'indigo (bleu de Prusse → coton).
stops = np.array([0, 0.5, 1])
ramp = np.array([[15, 29, 61], [59, 91, 143], [240, 241, 238]])
for name in ('approche-boulanger', 'methode-maquettes'):
    path = f'public/images/{name}.webp'
    g = np.asarray(ImageOps.autocontrast(Image.open(path).convert('L'), cutoff=1)) / 255
    rgb = np.stack([np.interp(g ** 0.9, stops, ramp[:, c]) for c in range(3)], -1)
    Image.fromarray(rgb.astype(np.uint8)).save(path, quality=80)

def save_rgb(rgb, path, **kw):
    Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8)).save(path, **kw)

INDIGO = np.array([31, 51, 96]); COTON = np.array([243, 242, 238])

# 3. Coton teint à l'indigo, raccordable : fils de chaîne et de trame, teinture inégale, coulures verticales.
def coton(h, w):
    y, x = np.arange(h), np.arange(w)
    fils = 0.5 * gaussian_filter(rng.standard_normal(w), 0.7, mode='wrap')[None, :] + 0.5 * gaussian_filter(rng.standard_normal(h), 0.7, mode='wrap')[:, None]
    armure = np.sin(2 * np.pi * x / 4)[None, :] * np.sin(2 * np.pi * y / 4)[:, None]  # dessus-dessous de la toile, pas de 4 px
    taches = 0.6 * noise((h, w), min(40, w / 6)) + 0.4 * noise((h, w), min(110, w / 3))
    coulures = noise((h, w), (min(70, h / 2), 2.5))
    lum = 1 + 0.12 * fils / np.abs(fils).max() + 0.07 * armure + 0.42 * (taches - 0.5) + 0.22 * (coulures - 0.5)
    return INDIGO[None, None, :] * lum[..., None]
save_rgb(coton(512, 512), 'public/textures/noren.webp', quality=92, method=6)

# 4. Ourlet en réserve : seigaiha épargné à la teinture (blanc bavé), sur le même coton. Tuile 112×56 = 56×28 px CSS.
OW, OH, R = 112, 56, 56
yy, xx = np.mgrid[0:OH, 0:OW] + 0.5
d = np.full((OH, OW), np.inf)
for cx, cy in ((56, -28), (0, 0), (112, 0), (56, 28), (0, 56), (112, 56), (56, 84)):  # rangées du haut vers le bas : la dernière couvre
    dist = np.hypot(xx - cx, yy - cy); d = np.where(dist < R, dist, d)
anneaux = sum(np.exp(-((d - R * f) / 2.2) ** 2) for f in (25 / 28, 19 / 28, 13 / 28, 7 / 28))
reserve = gaussian_filter(np.clip(anneaux, 0, 1), 0.9, mode='wrap') * (0.75 + 0.25 * noise((OH, OW), 3))
fond = coton(OH, OW) * 0.9
save_rgb(fond + (COTON * 0.92 - fond) * reserve[..., None] * 0.8, 'public/textures/noren-ourlet.webp', quality=88)

# 5. Tringle en bambou fumé (susudake) : cylindre éclairé d'en haut, nœuds réguliers, fibres.
BW, BH = 1800, 28
v = np.linspace(-1, 1, BH)[:, None]
relief = 0.45 + 0.55 * np.clip(1 - (v + 0.35) ** 2, 0, 1) ** 1.5
fibres = 1 + 0.08 * (noise((BH, BW), (0.6, 40)) - 0.5)
noeuds = 1 - 0.35 * sum(np.exp(-((np.arange(BW) - n) / 5) ** 2) for n in range(150, BW, 330))[None, :]
save_rgb(np.array([58, 42, 28])[None, None, :] * (relief * fibres * noeuds)[..., None] * 1.25, 'public/textures/tringle.webp', quality=86)

# 6. Lavis d'encre diluée : flaque aux bords irréguliers, plus sombre sur sa ligne de séchage, pigment granuleux.
L = 900
yy, xx = np.mgrid[0:L, 0:L] / (L - 1) * 2 - 1
r = np.hypot(xx, yy)
bord = 0.74 + 0.32 * (0.5 * noise((L, L), 18) + 0.5 * noise((L, L), 60) - 0.5)
dedans = smooth(bord, bord - 0.22, r)
lavis = dedans * (0.42 + 0.4 * noise((L, L), 70)) + 0.4 * np.exp(-((r - bord + 0.03) / 0.03) ** 2) * smooth(bord + 0.05, bord - 0.05, r)
lavis *= 0.85 + 0.3 * noise((L, L), 1.2)
out = np.zeros((L, L, 4), np.uint8); out[..., :3] = INDIGO; out[..., 3] = (np.clip(lavis, 0, 1) * 255).astype(np.uint8)
Image.fromarray(out).resize((600, 600), Image.LANCZOS).save('public/textures/lavis.webp', quality=65, alpha_quality=65, method=6)

# 7. Réserve : le blanc des lettres du noren, épargné à la teinture. Même trame de coton, léger voile d'indigo qui a bavé.
lum = coton(512, 512)[..., 0] / INDIGO[0]
voile = noise((512, 512), 30)[..., None] * 0.12
reserve = COTON * (0.95 + 0.15 * (lum[..., None] - 1))
save_rgb(reserve + (INDIGO - reserve) * voile, 'public/textures/noren-reserve.webp', quality=90, method=6)

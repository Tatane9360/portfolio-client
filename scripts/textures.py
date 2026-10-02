# Régénère les textures d'encre de public/textures (pinceau sec, tache, brume). Usage : python scripts/textures.py
# Dépendances : numpy, scipy, pillow. Graine fixe : relancer donne les mêmes fichiers.
# Textures d'encre procédurales : pinceau sec, tache qui bave, brume de lavis.
import numpy as np
from PIL import Image
from scipy.ndimage import gaussian_filter
rng = np.random.default_rng(7)
OUT = 'public/textures/'

def save(alpha, name, **kw):
    a = (np.clip(alpha, 0, 1) * 255).astype(np.uint8)
    im = np.zeros(a.shape + (4,), np.uint8); im[..., :3] = (34, 33, 30); im[..., 3] = a
    Image.fromarray(im).save(OUT + name, **kw)

def fbm(h, w, scales, weights):
    n = sum(wt * gaussian_filter(rng.standard_normal((h, w)), s, mode='wrap') / gaussian_filter(rng.standard_normal((h, w)), s, mode='wrap').std() for s, wt in zip(scales, weights))
    return (n - n.min()) / (n.max() - n.min())

def noise1d(n, period):
    k = rng.random(n // period + 2)
    return np.interp(np.arange(n) / period, np.arange(len(k)), k)

# 1. Coup de pinceau sec : bruit étiré dans le sens du trait (les poils), seuil qui monte quand l'encre s'épuise (kasure).
def smooth(e0, e1, v):
    t = np.clip((v - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)
W, H = 1600, 80
x = np.linspace(0, 1, W)[None, :]
y = np.linspace(-1, 1, H)[:, None]
hairs = gaussian_filter(rng.standard_normal((H, W)), (0.7, 70), mode='wrap'); hairs = (hairs - hairs.min()) / np.ptp(hairs)
clumps = gaussian_filter(rng.standard_normal((H, W)), (3, 160), mode='wrap'); clumps = (clumps - clumps.min()) / np.ptp(clumps)
fibres = 0.65 * hairs + 0.35 * clumps
head = np.clip(x / 0.035, 0, 1)
width = 0.86 * np.sqrt(1 - (1 - head) ** 2) * (1 - 0.4 * x)  # attaque ronde (le pinceau se pose) puis amincissement
wobble = 0.06 * np.sin(x * 6) + 0.03 * np.sin(x * 17 + 2)
edge_noise = gaussian_filter(rng.standard_normal((H, W)), (1, 25), mode='wrap') * 0.9
inside = smooth(0, 0.1, width - np.abs(y - wobble) + 0.06 * edge_noise)
dry = 0.18 + 0.5 * x ** 1.3 + 0.25 * np.abs(y - wobble) / np.maximum(width, 1e-3)  # bords et fin plus secs
ink = smooth(dry - 0.07, dry + 0.07, fibres) * inside
tone = 0.7 + 0.3 * gaussian_filter(rng.standard_normal((H, W)), (6, 120), mode='wrap') / 0.05
ink *= np.clip(tone, 0.7, 1) * (1 - 0.25 * x)
ink *= smooth(1.0, 0.86, x + 0.1 * clumps)                           # sortie effilochée
ink = gaussian_filter(ink, 0.4); ink = (ink / ink.max()) ** 0.75
save(ink, 'brush.png', optimize=True)

# 2. Tache d'encre : bord irrégulier qui bave, petites fusées autour. Sert de masque de diffusion.
S = 512
yy, xx = np.mgrid[0:S, 0:S] / (S - 1) * 2 - 1
r = np.hypot(xx, yy)
n = fbm(S, S, (6, 18, 45), (0.25, 0.45, 0.6))
edge = 0.62 + 0.3 * (n - 0.5)
core = np.clip((edge - r) / 0.04, 0, 1)
bleed = np.clip((edge + 0.16 * fbm(S, S, (3, 9), (0.4, 0.6)) - r) / 0.1, 0, 1) * 0.4
save(gaussian_filter(np.maximum(core, bleed), 1), 'blot.png', optimize=True)

# 3. Brume de lavis : nuages d'encre diluée, opaques en bas, qui se dissolvent vers le haut.
MW, MH = 1600, 420
m = fbm(MH, MW, (8, 30, 80), (0.2, 0.45, 0.7))
grad = np.linspace(0, 1, MH)[:, None] ** 1.6
mist = np.clip(grad * 1.05 + (m - 0.5) * 0.85 - 0.12, 0, 1) ** 1.5 * 0.8
ramp = np.clip((np.arange(MH) - MH * 0.88) / (MH * 0.12), 0, 1)[:, None]
mist = mist * (1 - ramp) + ramp
save(gaussian_filter(mist, 1.5), 'mist.webp', quality=82)

# Version verticale du pinceau, pour la frise du process.
Image.open(OUT + 'brush.png').rotate(-90, expand=True).save(OUT + 'brush-v.png', optimize=True)

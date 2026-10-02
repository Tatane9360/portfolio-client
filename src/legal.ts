// À REMPLIR : informations légales obligatoires pour un site professionnel en France (loi LCEN).
// Utilisées par le footer (email, téléphone) et la page mentions-legales.html.
// Tant qu'une valeur vaut null, la page affiche « À compléter » : impossible de l'oublier.
export const legal = {
  raisonSociale: null as string | null, // ex. "Jean Dupont, entrepreneur individuel"
  siret: null as string | null,
  adresse: null as string | null,
  email: import.meta.env.VITE_EMAIL as string, // défini dans .env, avec le domaine
  telephone: null as string | null,
  hebergeur: null as string | null, // ex. "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis"
  directeurPublication: null as string | null,
};

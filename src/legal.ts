/** Legal info required in France (LCEN). A null value renders as « À compléter » on the legal page. */
export const legal = {
  raisonSociale: null as string | null,
  siret: null as string | null,
  adresse: null as string | null,
  email: import.meta.env.VITE_EMAIL as string, // from .env
  telephone: null as string | null,
  hebergeur: null as string | null,
  directeurPublication: null as string | null,
};

/** Legal info required in France (LCEN). A null value renders as « À compléter » on the legal page. */
export const legal = {
  raisonSociale: null as string | null,
  siret: null as string | null,
  adresse: null as string | null,
  email: import.meta.env.VITE_EMAIL as string, // from .env
  telephone: ((import.meta.env.VITE_TELEPHONE as string) || null) as string | null, // from .env
  cal: ((import.meta.env.VITE_CAL_URL as string) || null) as string | null, // from .env
  hebergeur: null as string | null,
  directeurPublication: null as string | null,
};

/** WhatsApp chat link, built from the French number in legal.telephone. */
export const whatsapp = legal.telephone ? `https://wa.me/33${legal.telephone.replace(/\s/g, '').slice(1)}` : null;

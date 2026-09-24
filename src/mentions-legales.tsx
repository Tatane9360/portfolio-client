import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { legal } from './legal';

const aCompleter = (v: string | null) => v ?? <span className="text-red">À compléter</span>;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-ink/20 py-10">
      <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-4 max-w-[65ch] space-y-4 leading-relaxed text-ink/80">{children}</div>
    </section>
  );
}

function MentionsLegales() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-4 md:px-10">
        <a href="/" aria-label="Accueil"><img src="/logo.png" alt="ES" className="h-8 w-auto" /></a>
        <a href="/" className="label border-b border-ink pb-1 hover:text-red hover:border-red">Retour au site</a>
      </nav>

      <main className="px-4 pt-16 pb-24 md:px-10">
        <h1 className="title text-[13vw] md:text-[7vw]">mentions légales</h1>

        <div className="mt-16">
          <Section title="Éditeur du site">
            <dl className="grid gap-3 sm:grid-cols-[14rem_1fr]">
              <dt className="text-ink/60">Nom ou raison sociale</dt><dd>{aCompleter(legal.raisonSociale)}</dd>
              <dt className="text-ink/60">SIRET</dt><dd>{aCompleter(legal.siret)}</dd>
              <dt className="text-ink/60">Adresse</dt><dd>{aCompleter(legal.adresse)}</dd>
              <dt className="text-ink/60">Email</dt><dd>{aCompleter(legal.email)}</dd>
              {legal.telephone && <><dt className="text-ink/60">Téléphone</dt><dd>{legal.telephone}</dd></>}
              <dt className="text-ink/60">Directeur de la publication</dt><dd>{aCompleter(legal.directeurPublication)}</dd>
            </dl>
          </Section>

          <Section title="Hébergement">
            <p>{aCompleter(legal.hebergeur)}</p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              Les textes, le logo et la mise en page de ce site sont la propriété de l'éditeur. Toute reproduction sans autorisation est interdite.
              Les photographies proviennent d'Unsplash et sont utilisées selon la licence Unsplash.
            </p>
          </Section>

          <Section title="Confidentialité">
            <p>
              Ce site ne comporte ni formulaire, ni cookie, ni outil de mesure d'audience. Aucune donnée n'est collectée pendant votre visite.
              La police de caractères et les images sont hébergées sur ce site : aucun service tiers n'est contacté pendant la navigation.
            </p>
            <p>
              Si vous m'écrivez par email, j'utilise votre nom, votre adresse et le contenu de votre message uniquement pour vous répondre et,
              le cas échéant, préparer un devis. Ces échanges ne sont ni vendus ni transmis à des tiers.
              Ils sont conservés 3 ans après notre dernier échange, sauf s'ils sont liés à un contrat, auquel cas ils suivent les durées légales de conservation.
            </p>
            <p>
              Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données en écrivant à {aCompleter(legal.email)}.
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (cnil.fr).
            </p>
          </Section>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>,
);

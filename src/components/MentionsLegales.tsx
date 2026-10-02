import type { ReactNode } from 'react';
import { legal } from '../legal';

const aCompleter = (v: string | null) => v ?? <span className="bg-ink px-1 text-paper">À compléter</span>;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="brush-t py-10">
      <h2 className="font-display text-2xl font-light md:text-3xl">{title}</h2>
      <div className="mt-4 max-w-[65ch] space-y-4 leading-relaxed text-ink">{children}</div>
    </section>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-4 md:px-10">
        <a href="/" aria-label="Accueil"><img src="/logo-esumi.png" alt="Esumi" width="149" height="48" className="h-10 w-auto md:h-12" /></a>
        <a href="/" className="label ink-under">Retour au site</a>
      </nav>

      <main className="px-4 pt-16 pb-24 md:px-10">
        <h1 className="title text-[13vw] md:text-[7vw]">mentions légales</h1>

        <div className="mt-16">
          <Section title="Éditeur du site">
            <dl className="grid gap-3 sm:grid-cols-[14rem_1fr]">
              <dt className="text-ink-soft">Nom ou raison sociale</dt><dd>{aCompleter(legal.raisonSociale)}</dd>
              <dt className="text-ink-soft">SIRET</dt><dd>{aCompleter(legal.siret)}</dd>
              <dt className="text-ink-soft">Adresse</dt><dd>{aCompleter(legal.adresse)}</dd>
              <dt className="text-ink-soft">Email</dt><dd>{aCompleter(legal.email)}</dd>
              {legal.telephone && <><dt className="text-ink-soft">Téléphone</dt><dd>{legal.telephone}</dd></>}
              <dt className="text-ink-soft">Directeur de la publication</dt><dd>{aCompleter(legal.directeurPublication)}</dd>
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

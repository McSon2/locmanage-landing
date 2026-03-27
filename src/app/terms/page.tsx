import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — LocManage",
  description:
    "Conditions d'utilisation de l'application LocManage pour la gestion locative sur iPhone.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-28 pb-20 dark:bg-[#1A1108]">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Conditions d&apos;utilisation
            </h1>
            <p className="mt-3 text-sm text-ink-secondary dark:text-[#B8A890]">
              Derniere mise a jour : 12 janvier 2025
            </p>
          </header>

          <div className="space-y-10 text-[0.95rem] leading-relaxed text-ink-secondary dark:text-[#B8A890]">
            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Acceptation des conditions
              </h2>
              <p>
                En telechargeant, installant ou utilisant l&apos;application
                LocManage, vous acceptez d&apos;etre lie par les presentes
                conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces
                conditions, veuillez ne pas utiliser l&apos;application.
              </p>
              <div className="mt-4 rounded-xl border-l-3 border-rich-gold bg-rich-gold/5 px-5 py-4 text-sm">
                <p>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Important :
                  </strong>{" "}
                  LocManage est un outil d&apos;aide a la gestion locative. Il
                  ne remplace pas les conseils d&apos;un professionnel juridique
                  ou comptable.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Description du service
              </h2>
              <p className="mb-3">
                LocManage est une application mobile concue pour aider les
                proprietaires individuels a gerer leurs biens locatifs.
                L&apos;application permet notamment de :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Gerer les informations relatives a vos proprietes
                </li>
                <li>
                  Enregistrer et suivre les informations de vos locataires
                </li>
                <li>Creer et gerer des contrats de bail</li>
                <li>
                  Effectuer des etats des lieux avec signature electronique
                </li>
                <li>Suivre les paiements de loyer</li>
                <li>Generer des documents PDF</li>
                <li>Envoyer des rappels de loyer par email</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Compte utilisateur
              </h2>
              <h3 className="mb-2 text-base font-semibold text-ink dark:text-[#F5EDE0]">
                Creation de compte
              </h3>
              <p className="mb-4">
                L&apos;utilisation de LocManage necessite la creation d&apos;un
                compte via Sign in with Apple. Vous etes responsable de la
                securite de votre compte Apple.
              </p>
              <h3 className="mb-2 text-base font-semibold text-ink dark:text-[#F5EDE0]">
                Responsabilites de l&apos;utilisateur
              </h3>
              <p className="mb-3">
                En utilisant LocManage, vous vous engagez a :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Fournir des informations exactes et a jour</li>
                <li>
                  Respecter les lois et reglementations applicables
                </li>
                <li>
                  Ne pas utiliser l&apos;application a des fins illegales
                </li>
                <li>
                  Ne pas tenter de compromettre la securite de
                  l&apos;application
                </li>
                <li>
                  Obtenir le consentement des locataires avant
                  d&apos;enregistrer leurs donnees personnelles
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Abonnement Premium
              </h2>
              <h3 className="mb-2 text-base font-semibold text-ink dark:text-[#F5EDE0]">
                Fonctionnalites gratuites
              </h3>
              <p className="mb-4">
                La version gratuite de LocManage permet de gerer une propriete
                avec toutes les fonctionnalites de base.
              </p>
              <h3 className="mb-2 text-base font-semibold text-ink dark:text-[#F5EDE0]">
                Fonctionnalites Premium
              </h3>
              <p className="mb-4">
                L&apos;abonnement Premium permet de gerer un nombre illimite de
                proprietes. Les abonnements sont geres par Apple via l&apos;App
                Store.
              </p>
              <h3 className="mb-2 text-base font-semibold text-ink dark:text-[#F5EDE0]">
                Facturation et renouvellement
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Le paiement est preleve sur votre compte Apple lors de la
                  confirmation de l&apos;achat
                </li>
                <li>
                  L&apos;abonnement se renouvelle automatiquement sauf si vous
                  le desactivez au moins 24 heures avant la fin de la periode en
                  cours
                </li>
                <li>
                  Vous pouvez gerer ou annuler votre abonnement dans les
                  reglages de votre compte Apple
                </li>
                <li>
                  Aucun remboursement n&apos;est accorde pour les periodes
                  partielles non utilisees
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Signatures electroniques
              </h2>
              <p>
                LocManage propose une fonctionnalite de signature electronique
                pour les etats des lieux. Ces signatures sont concues pour etre
                conformes au reglement europeen eIDAS et a l&apos;article 1367
                du Code civil francais.
              </p>
              <div className="mt-4 rounded-xl border-l-3 border-rich-gold bg-rich-gold/5 px-5 py-4 text-sm">
                <p>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Note :
                  </strong>{" "}
                  La valeur juridique d&apos;une signature electronique peut
                  dependre de nombreux facteurs. En cas de litige important,
                  consultez un professionnel du droit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Propriete intellectuelle
              </h2>
              <p>
                L&apos;application LocManage, son design, son code source et son
                contenu sont proteges par les lois sur la propriete
                intellectuelle. Vous disposez d&apos;une licence limitee, non
                exclusive et non transferable pour utiliser l&apos;application
                conformement a ces conditions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Limitation de responsabilite
              </h2>
              <p className="mb-3">
                LocManage est fourni &quot;en l&apos;etat&quot;. Nous ne
                garantissons pas que l&apos;application sera exempte
                d&apos;erreurs ou disponible en permanence. Dans les limites
                autorisees par la loi :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Nous declinons toute responsabilite pour les pertes de donnees
                </li>
                <li>
                  Nous ne sommes pas responsables des decisions prises sur la
                  base des informations de l&apos;application
                </li>
                <li>
                  Notre responsabilite est limitee au montant paye pour
                  l&apos;abonnement
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Donnees et sauvegarde
              </h2>
              <p className="mb-3">
                Vos donnees sont stockees localement sur votre appareil et
                synchronisees via iCloud si vous avez active cette
                fonctionnalite. Nous vous recommandons de :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Activer la synchronisation iCloud pour beneficier de
                  sauvegardes automatiques
                </li>
                <li>
                  Exporter regulierement vos documents importants en PDF
                </li>
                <li>
                  Verifier que vos sauvegardes iCloud sont a jour
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Modifications des conditions
              </h2>
              <p>
                Nous nous reservons le droit de modifier ces conditions
                d&apos;utilisation. Les modifications importantes vous seront
                notifiees via l&apos;application. La poursuite de
                l&apos;utilisation de l&apos;application apres modification
                constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Resiliation
              </h2>
              <p>
                Vous pouvez cesser d&apos;utiliser LocManage a tout moment. Nous
                nous reservons le droit de suspendre ou de resilier votre acces
                en cas de violation de ces conditions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Droit applicable
              </h2>
              <p>
                Ces conditions sont regies par le droit francais. Tout litige
                sera soumis a la competence exclusive des tribunaux francais.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Contact
              </h2>
              <p>
                Pour toute question concernant ces conditions
                d&apos;utilisation, contactez-nous a :{" "}
                <a
                  href="mailto:maxime.saltet@gmail.com"
                  className="font-medium text-rich-gold hover:underline"
                >
                  maxime.saltet@gmail.com
                </a>
              </p>
            </section>

            <nav className="flex justify-center gap-8 border-t border-border pt-8">
              <Link
                href="/privacy"
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Politique de confidentialite
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Support
              </Link>
            </nav>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

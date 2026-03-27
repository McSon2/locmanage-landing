import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialite — LocManage",
  description:
    "Politique de confidentialite de l'application LocManage. Decouvrez comment nous protegeons vos donnees personnelles.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-28 pb-20 dark:bg-[#1A1108]">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Politique de confidentialite
            </h1>
            <p className="mt-3 text-sm text-ink-secondary dark:text-[#B8A890]">
              Derniere mise a jour : 12 janvier 2025
            </p>
          </header>

          <div className="space-y-10 text-[0.95rem] leading-relaxed text-ink-secondary dark:text-[#B8A890]">
            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Introduction
              </h2>
              <p>
                Bienvenue sur LocManage. Nous prenons tres au serieux la
                protection de vos donnees personnelles. Cette politique de
                confidentialite decrit comment nous collectons, utilisons et
                protegeons vos informations lorsque vous utilisez notre
                application de gestion locative.
              </p>
              <div className="mt-4 rounded-xl border-l-3 border-rich-gold bg-rich-gold/5 px-5 py-4 text-sm">
                <p>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    En resume :
                  </strong>{" "}
                  Vos donnees vous appartiennent. Nous ne les vendons jamais et
                  les utilisons uniquement pour vous fournir notre service de
                  gestion locative.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Donnees collectees
              </h2>
              <h3 className="mb-2 text-base font-semibold text-ink dark:text-[#F5EDE0]">
                Donnees que vous nous fournissez
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Informations de compte :
                  </strong>{" "}
                  Lors de votre inscription via Sign in with Apple, nous
                  recevons votre identifiant Apple et, si vous le souhaitez,
                  votre adresse email.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Donnees de proprietes :
                  </strong>{" "}
                  Adresses, descriptions, photos et documents relatifs a vos
                  biens immobiliers.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Donnees de locataires :
                  </strong>{" "}
                  Noms, coordonnees et documents des personnes que vous
                  enregistrez comme locataires.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Donnees de baux :
                  </strong>{" "}
                  Dates, montants des loyers, etats des lieux et signatures
                  electroniques.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Photo de profil :
                  </strong>{" "}
                  Si vous choisissez d&apos;en ajouter une.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-base font-semibold text-ink dark:text-[#F5EDE0]">
                Donnees collectees automatiquement
              </h3>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Donnees de synchronisation :
                  </strong>{" "}
                  Pour permettre la synchronisation iCloud de vos donnees entre
                  vos appareils Apple.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Donnees d&apos;achat :
                  </strong>{" "}
                  Informations relatives a vos abonnements premium (gerees par
                  Apple et RevenueCat).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Utilisation des donnees
              </h2>
              <p className="mb-3">
                Nous utilisons vos donnees exclusivement pour :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Vous permettre de gerer vos proprietes locatives et vos
                  locataires
                </li>
                <li>
                  Synchroniser vos donnees entre vos appareils via iCloud
                </li>
                <li>
                  Generer des documents PDF (etats des lieux, baux)
                </li>
                <li>
                  Envoyer des rappels de loyer a vos locataires (si vous activez
                  cette fonctionnalite)
                </li>
                <li>Gerer votre abonnement premium</li>
                <li>Ameliorer notre application</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Stockage et securite
              </h2>
              <p className="mb-3">
                Vos donnees sont stockees de maniere securisee :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Localement :
                  </strong>{" "}
                  Sur votre appareil, dans une base de donnees Core Data
                  chiffree par iOS.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    iCloud :
                  </strong>{" "}
                  Vos donnees sont synchronisees via iCloud, beneficiant du
                  chiffrement de bout en bout d&apos;Apple.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Supabase :
                  </strong>{" "}
                  Certaines donnees (profil, configuration email) sont stockees
                  sur nos serveurs Supabase securises, avec chiffrement en
                  transit et au repos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Partage des donnees
              </h2>
              <p className="mb-3 font-semibold text-ink dark:text-[#F5EDE0]">
                Nous ne vendons jamais vos donnees personnelles.
              </p>
              <p className="mb-3">
                Vos donnees peuvent etre partagees uniquement avec :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Apple :
                  </strong>{" "}
                  Pour l&apos;authentification (Sign in with Apple) et la
                  synchronisation iCloud.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    RevenueCat :
                  </strong>{" "}
                  Pour la gestion des abonnements (aucune donnee personnelle
                  partagee, uniquement un identifiant anonymise).
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Vos locataires :
                  </strong>{" "}
                  Lorsque vous leur envoyez des documents ou des rappels de
                  loyer.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Vos droits
              </h2>
              <p className="mb-3">
                Conformement au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Acces :
                  </strong>{" "}
                  Vous pouvez acceder a toutes vos donnees directement dans
                  l&apos;application.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Rectification :
                  </strong>{" "}
                  Vous pouvez modifier vos donnees a tout moment dans
                  l&apos;application.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Suppression :
                  </strong>{" "}
                  Vous pouvez supprimer vos donnees ou votre compte depuis les
                  parametres de l&apos;application.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Portabilite :
                  </strong>{" "}
                  Vous pouvez exporter vos donnees en PDF depuis
                  l&apos;application.
                </li>
                <li>
                  <strong className="text-ink dark:text-[#F5EDE0]">
                    Opposition :
                  </strong>{" "}
                  Vous pouvez desactiver la synchronisation iCloud dans les
                  reglages de votre appareil.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Cookies et traceurs
              </h2>
              <p>
                Notre application mobile n&apos;utilise pas de cookies. Notre
                site web de signature utilise uniquement le stockage local
                (localStorage) pour memoriser vos preferences de theme
                (clair/sombre).
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Conservation des donnees
              </h2>
              <p className="mb-3">
                Vos donnees sont conservees tant que votre compte est actif. Si
                vous supprimez votre compte :
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Vos donnees locales sont supprimees immediatement
                </li>
                <li>
                  Vos donnees sur nos serveurs sont supprimees sous 30 jours
                </li>
                <li>
                  Les donnees iCloud sont gerees selon les politiques
                  d&apos;Apple
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Modifications
              </h2>
              <p>
                Nous pouvons mettre a jour cette politique de confidentialite. En
                cas de modifications importantes, nous vous en informerons via
                l&apos;application. La date de derniere mise a jour est indiquee
                en haut de ce document.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Contact
              </h2>
              <p>
                Pour toute question concernant cette politique de
                confidentialite ou vos donnees personnelles, contactez-nous a :{" "}
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
                href="/terms"
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Conditions d&apos;utilisation
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

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";
import { Check, Receipt, FileText, BarChart3, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Declaration 2044 automatique — revenus fonciers — LocManage",
  description:
    "Generez automatiquement votre declaration de revenus fonciers 2044. Suivi des charges par categorie, bilan par propriete, export PDF et CSV. Simplifiez votre fiscalite immobiliere.",
  alternates: { canonical: `${SITE_URL}/declaration-2044` },
  openGraph: {
    title: "Declaration 2044 automatique — LocManage",
    description:
      "Generez votre declaration de revenus fonciers automatiquement depuis votre iPhone.",
    url: `${SITE_URL}/declaration-2044`,
  },
};

const features = [
  {
    icon: Receipt,
    title: "Suivi des charges",
    description:
      "Enregistrez toutes vos depenses immobilieres par categorie : travaux, assurance, taxe fonciere, interets d'emprunt. Ajoutez des justificatifs photo.",
  },
  {
    icon: FileText,
    title: "Export fiscal 2044",
    description:
      "Generez votre bilan des revenus fonciers au format PDF ou CSV. Les montants sont calcules et classes selon les lignes de la declaration 2044.",
  },
  {
    icon: BarChart3,
    title: "Bilan par propriete",
    description:
      "Visualisez les revenus, charges deductibles et resultat net pour chaque bien. Identifiez les proprietes les plus rentables.",
  },
  {
    icon: Share2,
    title: "Partage simplifie",
    description:
      "Envoyez vos bilans fiscaux a votre comptable directement depuis l'application. Export PDF ou CSV en un clic.",
  },
];

const chargesDeductibles = [
  "Travaux d'entretien et de reparation",
  "Primes d'assurance",
  "Taxe fonciere",
  "Interets d'emprunt",
  "Frais de gestion",
  "Charges de copropriete",
  "Frais de procedure",
  "Indemnites d'eviction",
];

export default function Declaration2044Page() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-[#1A1108]">
        <section className="pt-28 pb-16 lg:pb-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center rounded-full bg-rich-gold/15 px-3 py-1 text-xs font-semibold text-rich-gold">
              Nouveau
            </span>
            <h1 className="mt-5 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink dark:text-[#F5EDE0]">
              Declaration 2044 automatique
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              Suivez vos charges tout au long de l&apos;annee et generez votre
              declaration de revenus fonciers en un clic. Plus besoin de
              tableurs ni de calculs manuels.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-11 items-center rounded-full bg-rich-gold px-7 text-sm font-medium text-white transition-all hover:bg-rich-gold-light active:scale-[0.98]"
            >
              Telecharger gratuitement
            </a>
          </div>
        </section>

        <section className="border-t border-border py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Gestion fiscale complete
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-white p-6 dark:bg-[#221A10]"
                >
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-rich-gold/10">
                    <f.icon className="size-5 text-rich-gold" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink dark:text-[#F5EDE0]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Charges deductibles suivies
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-base text-ink-secondary dark:text-[#B8A890]">
              LocManage categorise automatiquement vos depenses selon les
              postes de la declaration 2044.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {chargesDeductibles.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-sm text-ink/85 dark:text-[#D0C4B0]"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-rich-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink dark:text-[#F5EDE0]">
              Simplifiez votre fiscalite
            </h2>
            <p className="mt-3 text-base text-ink-secondary dark:text-[#B8A890]">
              Gestion fiscale complete avec l&apos;abonnement Premium.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-rich-gold px-7 text-sm font-medium text-white transition-all hover:bg-rich-gold-light active:scale-[0.98]"
            >
              Telecharger sur l&apos;App Store
            </a>
          </div>
        </section>

        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-ink-secondary/60 dark:text-[#B8A890]/60">
              Autres fonctionnalites
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                { href: "/signature-electronique", label: "Signature electronique" },
                { href: "/etat-des-lieux", label: "Etats des lieux" },
                { href: "/gestion-baux", label: "Gestion des baux" },
                { href: "/gestion-loyers", label: "Gestion des loyers" },
                { href: "/espace-locataire", label: "Espace locataire" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border px-4 py-2 text-sm text-ink-secondary transition-colors hover:border-rich-gold hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

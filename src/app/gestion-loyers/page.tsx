import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";
import { Check, BarChart3, Bell, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Suivi des loyers et quittances automatiques — LocManage",
  description:
    "Suivez vos loyers avec un tableau de bord mensuel. Identifiez les retards de paiement, envoyez des rappels par email et generez des quittances PDF automatiquement.",
  alternates: { canonical: `${SITE_URL}/gestion-loyers` },
  openGraph: {
    title: "Suivi des loyers et quittances — LocManage",
    description:
      "Tableau de bord financier, alertes de retard et quittances PDF automatiques.",
    url: `${SITE_URL}/gestion-loyers`,
  },
};

const features = [
  {
    icon: BarChart3,
    title: "Tableau de bord financier",
    description:
      "Visualisez tous vos loyers en un coup d'oeil avec une vue mensuelle. Identifiez instantanement les paiements recus, en attente ou en retard.",
  },
  {
    icon: Bell,
    title: "Alertes et rappels",
    description:
      "Detectez automatiquement les retards de paiement. Envoyez des rappels par email a vos locataires en un clic depuis l'application.",
  },
  {
    icon: FileText,
    title: "Quittances automatiques",
    description:
      "Generez des quittances de loyer au format PDF en un clic. Partagez-les par email ou via l'espace locataire dedie.",
  },
];

const benefits = [
  "Apercu financier mensuel global",
  "Suivi par propriete et par locataire",
  "Detection automatique des retards",
  "Rappels par email en un clic",
  "Generation de quittances PDF",
  "Historique complet des paiements",
  "Calcul automatique des charges",
  "Export des donnees financieres",
];

export default function GestionLoyersPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-[#1A1108]">
        <section className="pt-28 pb-16 lg:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
              <div className="max-w-xl">
                <span className="inline-flex items-center rounded-full bg-rich-gold/15 px-3 py-1 text-xs font-semibold text-rich-gold">
                  Fonctionnalite
                </span>
                <h1 className="mt-5 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink dark:text-[#F5EDE0]">
                  Suivi des loyers et quittances automatiques
                </h1>
                <p className="mt-5 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                  Gardez le controle sur vos revenus locatifs avec un tableau
                  de bord financier clair. Identifiez les retards, envoyez des
                  rappels et generez vos quittances en quelques secondes.
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
              <div className="w-[240px] sm:w-[260px] lg:w-[300px]">
                <Image
                  src="/screenshots/03_loyers.webp"
                  alt="Suivi des loyers et paiements en retard avec alertes automatiques"
                  width={985}
                  height={2023}
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(26,18,9,0.18)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Vos loyers sous controle
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-rich-gold/10">
                    <f.icon className="size-6 text-rich-gold" />
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
              Un suivi financier complet
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-ink/85 dark:text-[#D0C4B0]"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-rich-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink dark:text-[#F5EDE0]">
              Ne manquez plus aucun loyer
            </h2>
            <p className="mt-3 text-base text-ink-secondary dark:text-[#B8A890]">
              Gratuit pour 1 propriete. Quittances et rappels inclus.
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
                { href: "/declaration-2044", label: "Declaration 2044" },
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

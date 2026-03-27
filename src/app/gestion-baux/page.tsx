import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";
import { Check, ShieldCheck, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestion des baux locatifs sur iPhone — LocManage",
  description:
    "Creez et gerez vos contrats de bail depuis votre iPhone. Verification automatique de la conformite legale francaise 2024. Identifiant fiscal, annexes obligatoires, export PDF.",
  alternates: { canonical: `${SITE_URL}/gestion-baux` },
  openGraph: {
    title: "Gestion des baux locatifs — LocManage",
    description:
      "Creez vos baux conformes a la loi francaise 2024 depuis votre iPhone.",
    url: `${SITE_URL}/gestion-baux`,
  },
};

const features = [
  {
    icon: ShieldCheck,
    title: "Conformite automatique",
    description:
      "LocManage verifie automatiquement que votre bail respecte la legislation francaise 2024 : identifiant fiscal du logement, annexes obligatoires, clauses requises.",
  },
  {
    icon: FileText,
    title: "Export PDF professionnel",
    description:
      "Generez un contrat de bail complet au format PDF, pret a etre signe. Incluez toutes les annexes obligatoires en un clic.",
  },
  {
    icon: Mail,
    title: "Actions rapides",
    description:
      "Envoyez le bail par email, lancez la signature electronique ou ajoutez des annexes. Tout est accessible en quelques gestes.",
  },
];

const details = [
  "Dates de debut et de fin du bail",
  "Montant du loyer et des charges",
  "Depot de garantie",
  "Identifiant fiscal du logement",
  "Annexes obligatoires integrees",
  "Verification de conformite legale 2024",
  "Signature electronique integree",
  "Export et partage PDF",
];

export default function GestionBauxPage() {
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
                  Gestion des baux locatifs conforme a la loi 2024
                </h1>
                <p className="mt-5 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                  Creez et gerez vos contrats de bail avec toutes les
                  informations requises. LocManage verifie automatiquement la
                  conformite legale et genere un PDF professionnel pret a signer.
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
                  src="/screenshots/04_baux.webp"
                  alt="Generation de contrat de bail conforme a la legislation francaise 2024"
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
              Des baux conformes en quelques minutes
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
              Toutes les informations de votre bail
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {details.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-sm text-ink/85 dark:text-[#D0C4B0]"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-rich-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink dark:text-[#F5EDE0]">
              Creez votre premier bail
            </h2>
            <p className="mt-3 text-base text-ink-secondary dark:text-[#B8A890]">
              Gratuit pour 1 propriete. Conformite legale incluse.
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
                { href: "/gestion-loyers", label: "Gestion des loyers" },
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

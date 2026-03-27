import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";
import { Check, Pen, Send, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Signature electronique de bail et documents locatifs — LocManage",
  description:
    "Signez vos baux, etats des lieux et documents locatifs electroniquement depuis votre iPhone. Signature sur appareil ou a distance. Conforme eIDAS et Code civil francais.",
  alternates: { canonical: `${SITE_URL}/signature-electronique` },
  openGraph: {
    title: "Signature electronique de bail — LocManage",
    description:
      "Signez vos documents locatifs electroniquement depuis votre iPhone. Conforme eIDAS.",
    url: `${SITE_URL}/signature-electronique`,
  },
};

const steps = [
  {
    icon: Pen,
    title: "Signez sur l'appareil",
    description:
      "Signez directement sur l'ecran de votre iPhone avec votre doigt ou un stylet. La signature est capturee avec precision et integree au document.",
  },
  {
    icon: Send,
    title: "Envoyez un lien a distance",
    description:
      "Pour les locataires absents, generez un lien de signature securise. Le locataire signe depuis son propre appareil, ou qu'il soit.",
  },
  {
    icon: Eye,
    title: "Suivez en temps reel",
    description:
      "Visualisez l'etat de chaque signature : en attente, signee, ou expiree. Recevez une notification des que le document est signe.",
  },
];

const benefits = [
  "Conforme au reglement europeen eIDAS",
  "Conforme a l'article 1367 du Code civil francais",
  "Signature horodatee et liee au document",
  "Export PDF avec signatures integrees",
  "Aucune impression necessaire",
  "Fonctionne hors ligne sur l'appareil",
];

export default function SignatureElectroniquePage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-[#1A1108]">
        {/* Hero */}
        <section className="pt-28 pb-16 lg:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
              <div className="max-w-xl">
                <span className="inline-flex items-center rounded-full bg-rich-gold/15 px-3 py-1 text-xs font-semibold text-rich-gold">
                  Fonctionnalite
                </span>
                <h1 className="mt-5 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink dark:text-[#F5EDE0]">
                  Signature electronique de vos documents locatifs
                </h1>
                <p className="mt-5 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                  Signez vos baux, etats des lieux et quittances directement
                  depuis votre iPhone. Envoyez un lien de signature a distance
                  a vos locataires. Plus besoin d&apos;imprimer.
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
                  src="/screenshots/05_signature.webp"
                  alt="Signature electronique de documents locatifs sur iPhone"
                  width={985}
                  height={2023}
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(26,18,9,0.18)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comment ca marche */}
        <section className="border-t border-border py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Comment ca marche
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.title} className="text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-rich-gold/10">
                    <step.icon className="size-6 text-rich-gold" />
                  </div>
                  <div className="mt-2 text-xs font-semibold text-rich-gold">
                    Etape {i + 1}
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-ink dark:text-[#F5EDE0]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conformite */}
        <section className="border-t border-border py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Conforme et securise
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-base text-ink-secondary dark:text-[#B8A890]">
              La signature electronique de LocManage respecte les normes
              europeennes et francaises en vigueur.
            </p>
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

        {/* CTA */}
        <section className="border-t border-border py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink dark:text-[#F5EDE0]">
              Simplifiez vos signatures
            </h2>
            <p className="mt-3 text-base text-ink-secondary dark:text-[#B8A890]">
              Gratuit pour 1 propriete. Toutes les fonctionnalites incluses.
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

        {/* Liens vers autres fonctionnalites */}
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-ink-secondary/60 dark:text-[#B8A890]/60">
              Autres fonctionnalites
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                { href: "/etat-des-lieux", label: "Etats des lieux" },
                { href: "/gestion-baux", label: "Gestion des baux" },
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

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";
import { Check, Gift, FileText, MessageCircle, KeyRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Espace locataire gratuit — application pour locataires — LocManage",
  description:
    "Offrez a vos locataires un espace dedie et gratuit. Acces aux documents, bail, quittances, etats des lieux et messagerie avec le proprietaire. Invitation par code unique.",
  alternates: { canonical: `${SITE_URL}/espace-locataire` },
  openGraph: {
    title: "Espace locataire gratuit — LocManage",
    description:
      "Un espace dedie et gratuit pour vos locataires. Documents, messagerie et plus.",
    url: `${SITE_URL}/espace-locataire`,
  },
};

const features = [
  {
    icon: Gift,
    title: "100% gratuit",
    description:
      "Les locataires accedent a leur espace sans aucun frais. Ils telechargent l'application et saisissent le code d'invitation fourni par le proprietaire.",
  },
  {
    icon: KeyRound,
    title: "Invitation par code unique",
    description:
      "Le proprietaire genere un code au format XXX-XXX-XXX depuis la fiche du locataire. Simple, securise et instantane.",
  },
  {
    icon: FileText,
    title: "Documents partages",
    description:
      "Le locataire consulte son bail, ses quittances de loyer et ses etats des lieux a tout moment. Tout est accessible et securise.",
  },
  {
    icon: MessageCircle,
    title: "Messagerie integree",
    description:
      "Le locataire echange directement avec son proprietaire depuis l'application. Signalement de problemes, demandes et suivi en temps reel.",
  },
];

const locataireAccess = [
  "Consultation du bail en cours",
  "Telechargement des quittances de loyer",
  "Acces aux etats des lieux",
  "Messagerie avec le proprietaire",
  "Signature electronique de documents",
  "Notifications en temps reel",
  "Synchronisation iCloud securisee",
  "Connexion via Sign in with Apple",
];

export default function EspaceLocatairePage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-[#1A1108]">
        <section className="pt-28 pb-16 lg:pb-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center rounded-full bg-rich-gold/15 px-3 py-1 text-xs font-semibold text-rich-gold">
              Gratuit
            </span>
            <h1 className="mt-5 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink dark:text-[#F5EDE0]">
              Un espace dedie pour vos locataires
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              Invitez vos locataires avec un code unique. Ils accedent
              gratuitement a leur espace personnel : documents, quittances,
              messagerie et plus encore.
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
              Connectez proprietaires et locataires
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
              Ce que vos locataires peuvent faire
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {locataireAccess.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink/85 dark:text-[#D0C4B0]"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-rich-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comment inviter */}
        <section className="border-t border-border py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-center font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Comment inviter un locataire
            </h2>
            <div className="mt-10 space-y-6">
              {[
                {
                  step: "1",
                  text: "Ouvrez la fiche du locataire dans LocManage",
                },
                {
                  step: "2",
                  text: "Generez un code d'invitation unique (format XXX-XXX-XXX)",
                },
                {
                  step: "3",
                  text: "Partagez le code avec votre locataire",
                },
                {
                  step: "4",
                  text: "Le locataire telecharge LocManage gratuitement et saisit le code",
                },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rich-gold text-sm font-bold text-white">
                    {s.step}
                  </div>
                  <p className="pt-1 text-[0.95rem] text-ink-secondary dark:text-[#B8A890]">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink dark:text-[#F5EDE0]">
              Offrez le meilleur a vos locataires
            </h2>
            <p className="mt-3 text-base text-ink-secondary dark:text-[#B8A890]">
              L&apos;espace locataire est 100% gratuit, pour toujours.
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
                { href: "/declaration-2044", label: "Declaration 2044" },
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

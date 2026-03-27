import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";
import { Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — LocManage",
  description:
    "Centre d'aide et support pour l'application LocManage. Contactez-nous pour toute question sur la gestion locative.",
  alternates: { canonical: `${SITE_URL}/support` },
};

const faqItems = [
  {
    question: "Comment fonctionne la synchronisation iCloud ?",
    answer:
      "Vos donnees sont automatiquement synchronisees entre tous vos appareils Apple connectes au meme compte iCloud. Assurez-vous que iCloud est active pour LocManage dans Reglages > [Votre nom] > iCloud.",
  },
  {
    question: "Comment annuler mon abonnement Premium ?",
    answer:
      "Accedez aux Reglages de votre iPhone > [Votre nom] > Abonnements > LocManage > Annuler l'abonnement. Votre acces Premium restera actif jusqu'a la fin de la periode payee.",
  },
  {
    question: "Les signatures electroniques sont-elles legales ?",
    answer:
      "Oui, les signatures electroniques de LocManage sont concues pour etre conformes au reglement europeen eIDAS et a l'article 1367 du Code civil francais. Chaque signature est horodatee et liee au document.",
  },
  {
    question: "Comment exporter mes documents en PDF ?",
    answer:
      "Dans l'etat des lieux ou le detail d'un bail, appuyez sur le bouton de partage pour generer un PDF que vous pouvez enregistrer, envoyer par email ou imprimer.",
  },
  {
    question: "Mes donnees sont-elles securisees ?",
    answer:
      "Oui. Vos donnees sont stockees localement sur votre appareil avec le chiffrement iOS, et la synchronisation iCloud utilise le chiffrement de bout en bout d'Apple.",
  },
  {
    question: "Comment supprimer mon compte ?",
    answer:
      "Dans l'application, accedez a Reglages > Compte > Supprimer mon compte. Cette action supprimera toutes vos donnees de nos serveurs. Les donnees locales et iCloud seront egalement supprimees.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-28 pb-20 dark:bg-[#1A1108]">
        <div className="mx-auto max-w-3xl px-6">
          <header className="mb-12 text-center">
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Support
            </h1>
            <p className="mt-3 text-base text-ink-secondary dark:text-[#B8A890]">
              Nous sommes la pour vous aider a tirer le meilleur parti de votre
              gestion locative.
            </p>
          </header>

          <div className="space-y-8">
            {/* Contact */}
            <section className="rounded-2xl border border-border bg-white p-8 dark:bg-[#221A10]">
              <h2 className="mb-6 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Contactez-nous
              </h2>
              <p className="mb-6 text-[0.95rem] text-ink-secondary dark:text-[#B8A890]">
                Une question, un probleme technique ou une suggestion ?
                N&apos;hesitez pas a nous ecrire.
              </p>

              <a
                href="mailto:maxime.saltet@gmail.com?subject=Support%20LocManage"
                className="group flex items-start gap-4 rounded-xl border border-border p-5 transition-all hover:border-rich-gold hover:shadow-[0_8px_32px_rgba(26,18,9,0.06)] dark:hover:border-rich-gold/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rich-gold/10">
                  <Mail className="size-5 text-rich-gold" />
                </div>
                <div>
                  <div className="font-semibold text-ink dark:text-[#F5EDE0]">
                    Email
                  </div>
                  <div className="text-sm text-ink-secondary dark:text-[#B8A890]">
                    Pour toute question ou demande
                  </div>
                  <div className="mt-1 text-sm font-medium text-rich-gold">
                    maxime.saltet@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://x.com/McSons1"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 flex items-start gap-4 rounded-xl border border-border p-5 transition-all hover:border-rich-gold hover:shadow-[0_8px_32px_rgba(26,18,9,0.06)] dark:hover:border-rich-gold/50"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rich-gold/10">
                  <MessageCircle className="size-5 text-rich-gold" />
                </div>
                <div>
                  <div className="font-semibold text-ink dark:text-[#F5EDE0]">
                    X (Twitter)
                  </div>
                  <div className="text-sm text-ink-secondary dark:text-[#B8A890]">
                    Suivez les actualites
                  </div>
                  <div className="mt-1 text-sm font-medium text-rich-gold">
                    @McSons1
                  </div>
                </div>
              </a>

              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                <Clock className="size-4" />
                Reponse generalement sous 24-48 heures
              </div>
            </section>

            {/* FAQ */}
            <section className="rounded-2xl border border-border bg-white p-8 dark:bg-[#221A10]">
              <h2 className="mb-6 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Questions frequentes
              </h2>
              <div className="divide-y divide-border">
                {faqItems.map((item) => (
                  <div key={item.question} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="mb-2 text-[0.95rem] font-semibold text-ink dark:text-[#F5EDE0]">
                      {item.question}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Download */}
            <section className="rounded-2xl border border-border bg-white p-8 text-center dark:bg-[#221A10]">
              <h2 className="mb-3 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                Telecharger LocManage
              </h2>
              <p className="mb-6 text-sm text-ink-secondary dark:text-[#B8A890]">
                Disponible gratuitement sur l&apos;App Store pour iPhone.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full bg-rich-gold px-7 text-sm font-medium text-white transition-all hover:bg-rich-gold-light active:scale-[0.98]"
              >
                Telecharger sur l&apos;App Store
              </a>
            </section>

            <nav className="flex justify-center gap-8 border-t border-border pt-8">
              <Link
                href="/privacy"
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Politique de confidentialite
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Conditions d&apos;utilisation
              </Link>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

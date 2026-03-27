"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Gift, FileText, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "100% gratuit",
    description:
      "Les locataires accèdent à leur espace sans frais. Téléchargez l'app et entrez votre code d'invitation.",
  },
  {
    icon: FileText,
    title: "Documents partagés",
    description:
      "Consultez bail, quittances et états des lieux à tout moment. Tout est accessible et sécurisé.",
  },
  {
    icon: MessageCircle,
    title: "Messagerie intégrée",
    description:
      "Échangez directement avec votre propriétaire. Signalez un problème en temps réel.",
  },
];

export function TenantSpace() {
  return (
    <section
      id="espace-locataire"
      className="bg-cream py-24 dark:bg-[#141008] lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-rich-gold/30 bg-rich-gold/10 px-3 py-1 text-xs font-medium text-rich-gold">
              Espace locataire
            </span>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Un espace dédié pour vos locataires
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              Invitez vos locataires avec un code unique au format
              XXX-XXX-XXX. Ils accèdent à leur espace personnel gratuitement.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-cream p-8 dark:bg-[#221A10]">
                <benefit.icon className="size-6 text-rich-gold" />
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink dark:text-[#F5EDE0]">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

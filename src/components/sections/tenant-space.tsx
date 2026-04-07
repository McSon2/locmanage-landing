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
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-md border border-stripe-purple/20 bg-stripe-purple/[0.06] px-3 py-1 text-[12px] font-medium text-stripe-purple">
              Espace locataire
            </span>
            <h2 className="mt-6 text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[-0.02em] text-navy">
              Un espace dédié pour vos locataires
            </h2>
            <p className="mt-4 text-[16px] font-light leading-relaxed text-slate">
              Invitez vos locataires avec un code unique au format
              XXX-XXX-XXX. Ils accèdent à leur espace personnel gratuitement.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div className="shadow-stripe-sm h-full rounded-xl border border-border-soft bg-white p-8 transition-shadow hover:shadow-stripe">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-stripe-purple/[0.08]">
                  <benefit.icon className="size-5 text-stripe-purple" />
                </div>
                <h3 className="mt-5 text-[18px] font-medium tracking-[-0.01em] text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-[14px] font-light leading-relaxed text-slate">
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

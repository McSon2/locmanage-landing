"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { APP_STORE_URL } from "@/lib/constants";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    description: "Pour débuter la gestion de votre bien.",
    features: [
      "1 propriété",
      "Toutes les fonctionnalités",
      "Espace locataire inclus",
      "Synchronisation iCloud",
      "Signature électronique",
      "Export PDF",
    ],
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "4,99 €",
    period: "/mois",
    description: "Pour les propriétaires multi-biens.",
    features: [
      "Propriétés illimitées",
      "Toutes les fonctionnalités",
      "Espace locataire inclus",
      "Synchronisation iCloud",
      "Signature électronique",
      "Export PDF et CSV",
      "Gestion fiscale complète",
    ],
    cta: "Passer à Premium",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="bg-cream py-24 dark:bg-[#141008] lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Simple et transparent
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              Commencez gratuitement. Passez à Premium quand vous en avez
              besoin.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "border-2 border-rich-gold bg-cream dark:bg-[#221A10]"
                    : "border border-border bg-cream dark:bg-[#221A10]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rich-gold px-4 py-1 text-xs font-semibold text-white">
                    Populaire
                  </span>
                )}

                <h3 className="font-serif text-2xl font-bold text-ink dark:text-[#F5EDE0]">
                  {plan.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-rich-gold">
                    {plan.price}
                  </span>
                  {"period" in plan && plan.period && (
                    <span className="text-sm text-ink-secondary dark:text-[#B8A890]">
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-ink-secondary dark:text-[#B8A890]">
                  {plan.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-4 flex-shrink-0 text-rich-gold"
                      />
                      <span className="text-sm text-ink/85 dark:text-[#D0C4B0]">

                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-medium transition-all active:scale-[0.98] ${
                    plan.highlighted
                      ? "bg-rich-gold text-white hover:bg-rich-gold-light"
                      : "bg-ink text-cream hover:bg-ink/85 dark:bg-[#F5EDE0] dark:text-ink dark:hover:bg-warm-beige"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="tarifs" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[-0.02em] text-navy">
              Simple et transparent
            </h2>
            <p className="mt-4 text-[16px] font-light leading-relaxed text-slate">
              Commencez gratuitement. Passez à Premium quand vous en avez
              besoin.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-xl p-8 ${
                  plan.highlighted
                    ? "shadow-stripe border-2 border-stripe-purple bg-white"
                    : "shadow-stripe-sm border border-border-soft bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-stripe-purple px-4 py-1 text-[11px] font-semibold text-white">
                    Populaire
                  </span>
                )}

                <h3 className="text-[22px] font-light tracking-[-0.02em] text-navy">
                  {plan.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-[32px] font-light tracking-[-0.03em] text-navy">
                    {plan.price}
                  </span>
                  {"period" in plan && plan.period && (
                    <span className="text-[14px] text-slate">
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-[14px] font-light text-slate">
                  {plan.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-4 flex-shrink-0 text-stripe-green"
                      />
                      <span className="text-[14px] text-navy/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-md text-[14px] font-medium transition-all active:scale-[0.98] ${
                    plan.highlighted
                      ? "bg-stripe-purple text-white hover:bg-stripe-purple-hover"
                      : "border border-border-soft text-navy hover:bg-surface"
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

"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { FISCAL_FEATURES } from "@/lib/constants";
import { Receipt, FileText, BarChart3, Share2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  receipt: Receipt,
  "file-text": FileText,
  "bar-chart": BarChart3,
  share: Share2,
};

export function Fiscal() {
  return (
    <section className="bg-white py-24 dark:bg-[#1A1108] lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-rich-gold/15 px-3 py-1 text-xs font-semibold text-rich-gold">
              Nouveau
            </span>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Gestion fiscale simplifiée
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              Suivez vos charges, générez votre déclaration 2044 et
              optimisez la rentabilité de chaque bien.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FISCAL_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Receipt;
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08} className="h-full">
                <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-[0_8px_32px_rgba(26,18,9,0.06)] dark:bg-[#221A10]">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-rich-gold/10">
                    <Icon className="size-5 text-rich-gold" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink dark:text-[#F5EDE0]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

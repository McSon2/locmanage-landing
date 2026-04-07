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
    <section id="fiscal" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-md bg-stripe-green/10 px-3 py-1 text-[12px] font-medium text-stripe-green">
              Nouveau
            </span>
            <h2 className="mt-6 text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[-0.02em] text-navy">
              Gestion fiscale simplifiée
            </h2>
            <p className="mt-4 text-[16px] font-light leading-relaxed text-slate">
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
                <div className="shadow-stripe-sm group h-full rounded-xl border border-border-soft bg-white p-6 transition-shadow hover:shadow-stripe">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-navy/[0.06]">
                    <Icon className="size-5 text-navy" />
                  </div>
                  <h3 className="mt-4 text-[16px] font-medium tracking-[-0.01em] text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-relaxed text-slate">
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

"use client";

import Image from "next/image";
import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Check } from "lucide-react";

export function Features() {
  return (
    <section id="fonctionnalites" className="bg-white py-24 dark:bg-[#1A1108] lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
              Tout ce dont vous avez besoin
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              Une suite complète d&apos;outils pour simplifier votre gestion
              locative au quotidien.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 space-y-24 lg:mt-28 lg:space-y-32">
          {FEATURES.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Screenshot */}
                <ScrollReveal
                  direction={isReversed ? "right" : "left"}
                  className="flex-shrink-0"
                >
                  <Image
                    src={feature.screenshot}
                    alt={`LocManage — ${feature.title}`}
                    width={660}
                    height={1434}
                    className="w-[260px] h-auto lg:w-[320px] drop-shadow-[0_16px_48px_rgba(26,18,9,0.2)] dark:drop-shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                  />
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal
                  direction={isReversed ? "left" : "right"}
                  delay={0.1}
                  className="max-w-md"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-rich-gold/10 text-xs font-semibold text-rich-gold dark:bg-rich-gold/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-ink dark:text-[#F5EDE0]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-ink/85 dark:text-[#D0C4B0]"
                      >
                        <Check className="mt-0.5 size-4 flex-shrink-0 text-rich-gold" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

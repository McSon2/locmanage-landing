"use client";

import { useState } from "react";
import Image from "next/image";
import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Features() {
  const [active, setActive] = useState(0);
  const feature = FEATURES[active];
  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(FEATURES.length - 1, a + 1));

  return (
    <section
      id="fonctionnalites"
      className="bg-white py-20 dark:bg-[#1A1108] lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2 className="text-center font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
            Une suite complète d&apos;outils pour simplifier votre gestion
            locative au quotidien.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14">
            {/* Screenshot — all stacked, only active visible */}
            <div className="relative flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[300px]">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.25, ease }}
                  className={i === 0 ? "relative" : "absolute inset-0"}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={f.screenshot}
                    alt={f.alt || `LocManage — ${f.title}`}
                    width={985}
                    height={2023}
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(26,18,9,0.18)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
              ))}
            </div>

            {/* Details + navigation */}
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15, ease }}
                >
                  <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-ink dark:text-[#F5EDE0]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                    {feature.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {feature.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + bi * 0.05,
                          duration: 0.12,
                          ease,
                        }}
                        className="flex items-start gap-2.5 text-sm text-ink/85 dark:text-[#D0C4B0]"
                      >
                        <Check className="mt-0.5 size-4 flex-shrink-0 text-rich-gold" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={prev}
                  disabled={active === 0}
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-ink/[0.03] disabled:opacity-30 disabled:pointer-events-none dark:border-[#3D3025] dark:hover:bg-[#F5EDE0]/5"
                  aria-label="Fonctionnalité précédente"
                >
                  <ArrowLeft className="size-4 text-ink dark:text-[#F5EDE0]" />
                </button>
                <button
                  onClick={next}
                  disabled={active === FEATURES.length - 1}
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-ink/[0.03] disabled:opacity-30 disabled:pointer-events-none dark:border-[#3D3025] dark:hover:bg-[#F5EDE0]/5"
                  aria-label="Fonctionnalité suivante"
                >
                  <ArrowRight className="size-4 text-ink dark:text-[#F5EDE0]" />
                </button>
                <span className="ml-1 text-sm tabular-nums text-ink-secondary dark:text-[#B8A890]">
                  {active + 1} / {FEATURES.length}
                </span>
                {/* Progress bar */}
                <div className="ml-auto h-0.5 w-24 overflow-hidden rounded-full bg-ink/10 dark:bg-[#F5EDE0]/10">
                  <motion.div
                    className="h-full rounded-full bg-rich-gold"
                    initial={false}
                    animate={{
                      width: `${((active + 1) / FEATURES.length) * 100}%`,
                    }}
                    transition={{ duration: 0.2, ease }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

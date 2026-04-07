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
      className="bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <h2 className="text-center text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[-0.02em] text-navy">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-[16px] font-light leading-relaxed text-slate">
            Une suite complète d&apos;outils pour simplifier votre gestion
            locative au quotidien.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Screenshot */}
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
                    className="shadow-stripe w-full h-auto rounded-[2rem]"
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
                  <h3 className="text-[clamp(1.5rem,3vw,1.75rem)] font-light leading-tight tracking-[-0.02em] text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-relaxed text-slate">
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
                        className="flex items-start gap-2.5 text-[14px] text-navy/80"
                      >
                        <Check className="mt-0.5 size-4 flex-shrink-0 text-stripe-green" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={prev}
                  disabled={active === 0}
                  className="flex size-10 items-center justify-center rounded-full border border-border-soft transition-all hover:shadow-stripe-sm disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Fonctionnalité précédente"
                >
                  <ArrowLeft className="size-4 text-navy" />
                </button>
                <button
                  onClick={next}
                  disabled={active === FEATURES.length - 1}
                  className="flex size-10 items-center justify-center rounded-full border border-border-soft transition-all hover:shadow-stripe-sm disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Fonctionnalité suivante"
                >
                  <ArrowRight className="size-4 text-navy" />
                </button>
                <span className="ml-1 text-[13px] tabular-nums text-slate">
                  {active + 1} / {FEATURES.length}
                </span>
                {/* Progress bar */}
                <div className="ml-auto h-0.5 w-24 overflow-hidden rounded-full bg-navy/10">
                  <motion.div
                    className="h-full rounded-full bg-stripe-purple"
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

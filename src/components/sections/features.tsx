"use client";

import { useState } from "react";
import Image from "next/image";
import { FEATURES } from "@/lib/constants";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contentVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const imageVariants = {
  enter: { opacity: 0, scale: 0.96 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

export function Features() {
  const [active, setActive] = useState(0);
  const feature = FEATURES[active];

  return (
    <section
      id="fonctionnalites"
      className="bg-white py-24 dark:bg-[#1A1108] lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="text-center font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-ink-secondary dark:text-[#B8A890]">
            Une suite complète d&apos;outils pour simplifier votre gestion
            locative au quotidien.
          </p>
        </ScrollReveal>

        {/* Mobile: horizontal scrollable tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 lg:hidden">
            <div
              className="flex gap-2 overflow-x-auto pb-3"
              style={{ scrollbarWidth: "none" }}
            >
              {FEATURES.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    i === active
                      ? "bg-rich-gold text-white"
                      : "bg-ink/5 text-ink-secondary hover:bg-ink/10 dark:bg-[#F5EDE0]/8 dark:text-[#B8A890] dark:hover:bg-[#F5EDE0]/12"
                  }`}
                >
                  {f.title}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-[240px_1fr_1fr] lg:gap-12">
            {/* Desktop: vertical feature nav */}
            <nav className="hidden space-y-1 lg:block" aria-label="Fonctionnalités">
              {FEATURES.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className={`group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all ${
                    i === active
                      ? "bg-rich-gold/8 text-ink dark:bg-rich-gold/12 dark:text-[#F5EDE0]"
                      : "text-ink-secondary hover:bg-ink/[0.03] hover:text-ink dark:text-[#B8A890] dark:hover:bg-[#F5EDE0]/5 dark:hover:text-[#F5EDE0]"
                  }`}
                >
                  <span
                    className={`flex size-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-semibold transition-colors ${
                      i === active
                        ? "bg-rich-gold text-white"
                        : "bg-ink/5 text-ink-secondary dark:bg-[#F5EDE0]/8 dark:text-[#B8A890]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="font-medium leading-snug">{f.title}</span>
                </button>
              ))}
            </nav>

            {/* Screenshot */}
            <div className="flex items-start justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                >
                  <Image
                    src={feature.screenshot}
                    alt={`LocManage — ${feature.title}`}
                    width={660}
                    height={1434}
                    className="w-[260px] h-auto lg:w-[320px] drop-shadow-[0_20px_50px_rgba(26,18,9,0.18)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Feature details */}
            <div className="flex flex-col justify-center lg:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                >
                  <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-ink dark:text-[#F5EDE0]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-secondary dark:text-[#B8A890]">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15 + bi * 0.06,
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

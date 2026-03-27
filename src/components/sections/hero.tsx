"use client";

import Image from "next/image";
import { APP_STORE_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Shield, Cloud, Fingerprint } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-b from-cream via-cream to-warm-beige dark:from-[#141008] dark:via-[#141008] dark:to-[#221A10]">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:pt-40 lg:pb-28">
        {/* Text column */}
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <ScrollReveal>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-ink dark:text-[#F5EDE0]">
              Gérez vos biens locatifs avec{" "}
              <span className="text-rich-gold">
                élégance
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              L&apos;application iOS tout-en-un pour propriétaires et
              locataires. Baux, loyers, signatures électroniques, états des
              lieux — tout au même endroit.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-7 text-sm font-medium text-cream transition-all hover:bg-ink/85 active:scale-[0.98] dark:bg-rich-gold dark:text-ink dark:hover:bg-rich-gold-light"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Télécharger gratuitement
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
              {[
                { icon: Shield, label: "Conforme loi 2024" },
                { icon: Cloud, label: "Sync iCloud" },
                { icon: Fingerprint, label: "Sign in with Apple" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs font-medium text-ink-secondary dark:text-[#B8A890]"
                >
                  <Icon className="size-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Screenshot */}
        <ScrollReveal
          delay={0.2}
          className="mt-12 flex-shrink-0 lg:mt-0"
        >
          <div className="animate-float relative">
            <Image
              src="/screenshots/01_patrimoine.webp"
              alt="LocManage — Gestion de patrimoine immobilier sur iPhone"
              width={660}
              height={1434}
              preload
              className="w-[280px] h-auto lg:w-[360px] drop-shadow-[0_24px_64px_rgba(26,18,9,0.25)] dark:drop-shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-scroll-hint flex flex-col items-center gap-1 text-ink/25 dark:text-[#F5EDE0]/20">
          <svg
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

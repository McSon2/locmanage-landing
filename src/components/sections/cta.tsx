"use client";

import Image from "next/image";
import { APP_STORE_URL } from "@/lib/constants";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Cta() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <Image
            src="/images/app-icon-dark.png"
            alt="LocManage"
            width={72}
            height={72}
            className="mx-auto rounded-2xl"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">
            Modernisez votre gestion locative
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Rejoignez les propriétaires qui ont choisi la simplicité.
            Gratuit pour démarrer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2.5 rounded-full bg-rich-gold px-8 text-sm font-medium text-white transition-all hover:bg-rich-gold-light active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Télécharger sur l&apos;App Store
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

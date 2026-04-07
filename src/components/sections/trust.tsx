"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Shield, Cloud, Fingerprint, Lock } from "lucide-react";

const signals = [
  {
    icon: Shield,
    title: "Conforme loi 2024",
    description: "Identifiant fiscal, annexes obligatoires, conformité automatique.",
  },
  {
    icon: Cloud,
    title: "Synchronisation iCloud",
    description: "Vos données restent sur votre compte Apple, synchronisées en toute sécurité.",
  },
  {
    icon: Fingerprint,
    title: "Sign in with Apple",
    description: "Connexion sécurisée et privée. Aucun mot de passe à retenir.",
  },
  {
    icon: Lock,
    title: "Données chiffrées",
    description: "Aucune donnée partagée avec des tiers. Stockage sécurisé et privé.",
  },
];

export function Trust() {
  return (
    <section id="confiance" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <h2 className="mb-14 text-center text-[clamp(1.75rem,3.5vw,2.25rem)] font-light tracking-[-0.02em] text-white">
            Sécurité et conformité
          </h2>
        </ScrollReveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, i) => (
            <ScrollReveal key={signal.title} delay={i * 0.08}>
              <div className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white/10">
                  <signal.icon className="size-5 text-stripe-cyan" />
                </div>
                <h3 className="mt-4 text-[14px] font-medium text-white">
                  {signal.title}
                </h3>
                <p className="mt-1.5 text-[13px] font-light leading-relaxed text-white/60">
                  {signal.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

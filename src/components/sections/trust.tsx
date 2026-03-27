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
    <section className="border-t border-border bg-white py-20 dark:bg-[#1A1108]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, i) => (
            <ScrollReveal key={signal.title} delay={i * 0.08}>
              <div className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-rich-gold/10">
                  <signal.icon className="size-5 text-rich-gold" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink dark:text-[#F5EDE0]">
                  {signal.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary dark:text-[#B8A890]">
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

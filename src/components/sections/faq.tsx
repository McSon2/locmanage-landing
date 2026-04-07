"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[-0.02em] text-navy">
              Questions fréquentes
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion className="mt-14">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border-soft py-1"
              >
                <AccordionTrigger className="py-5 text-left text-[16px] font-normal text-navy hover:no-underline [&>svg]:text-stripe-purple">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate">
                  <p className="pb-4 text-[15px] font-light leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}

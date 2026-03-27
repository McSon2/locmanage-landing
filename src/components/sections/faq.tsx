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
    <section id="faq" className="bg-white py-24 dark:bg-[#1A1108] lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink dark:text-[#F5EDE0]">
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
                className="border-b border-border py-1"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-ink hover:no-underline dark:text-[#F5EDE0] [&>svg]:text-rich-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-ink-secondary dark:text-[#B8A890]">
                  <p className="pb-4 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}

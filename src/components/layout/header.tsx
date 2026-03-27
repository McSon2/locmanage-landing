"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, APP_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-cream/80 dark:bg-[#141008]/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/app-icon.png"
            alt="LocManage"
            width={36}
            height={36}
            className="rounded-lg dark:hidden"
          />
          <Image
            src="/images/app-icon-dark.png"
            alt="LocManage"
            width={36}
            height={36}
            className="rounded-lg hidden dark:block"
          />
          <span className="font-serif text-xl font-semibold tracking-tight text-ink dark:text-[#F5EDE0]">
            LocManage
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full bg-rich-gold px-5 text-sm font-medium text-white transition-all hover:bg-rich-gold-light active:scale-[0.98]"
          >
            Télécharger
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={cn(
              "h-px w-5 bg-ink transition-all duration-300 dark:bg-[#F5EDE0]",
              mobileOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-ink transition-all duration-300 dark:bg-[#F5EDE0]",
              mobileOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-full overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-border bg-cream/95 px-6 py-6 backdrop-blur-xl dark:bg-[#141008]/95">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-ink dark:text-[#F5EDE0]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-rich-gold px-6 text-sm font-medium text-white"
            >
              Télécharger gratuitement
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import { APP_STORE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream dark:bg-[#141008]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/app-icon.png"
                alt="LocManage"
                width={32}
                height={32}
                className="rounded-lg dark:hidden"
              />
              <Image
                src="/images/app-icon-dark.png"
                alt="LocManage"
                width={32}
                height={32}
                className="rounded-lg hidden dark:block"
              />
              <span className="font-serif text-lg font-semibold text-ink dark:text-[#F5EDE0]">
                LocManage
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-secondary dark:text-[#B8A890]">
              L&apos;application qui connecte propriétaires et locataires pour une
              gestion locative simple et moderne.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-ink-secondary/60 dark:text-[#B8A890]/60">
              Légal
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={EXTERNAL_LINKS.terms}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Conditions d&apos;utilisation
              </a>
              <a
                href={EXTERNAL_LINKS.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Politique de confidentialité
              </a>
              <a
                href={EXTERNAL_LINKS.support}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Support
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-ink-secondary/60 dark:text-[#B8A890]/60">
              Application
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-secondary transition-colors hover:text-ink dark:text-[#B8A890] dark:hover:text-[#F5EDE0]"
              >
                Télécharger sur l&apos;App Store
              </a>
              <span className="text-sm text-ink-secondary dark:text-[#B8A890]">
                Disponible sur iPhone
              </span>
              <span className="text-sm text-ink-secondary dark:text-[#B8A890]">
                iOS 26.0 ou ultérieur
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-ink-secondary/60 dark:text-[#B8A890]/60">
            &copy; {new Date().getFullYear()} LocManage. Tous droits réservés.
          </p>
          <p className="text-xs text-ink-secondary/60 dark:text-[#B8A890]/60">
            Conçu avec soin en France
          </p>
        </div>
      </div>
    </footer>
  );
}

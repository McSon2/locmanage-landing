import Image from "next/image";
import { APP_STORE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/app-icon-dark.png"
                alt="LocManage"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-serif text-lg font-semibold text-white">
                LocManage
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              L&apos;application qui connecte propriétaires et locataires pour une
              gestion locative simple et moderne.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40">
              Légal
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={EXTERNAL_LINKS.terms}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Conditions d&apos;utilisation
              </a>
              <a
                href={EXTERNAL_LINKS.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Politique de confidentialité
              </a>
              <a
                href={EXTERNAL_LINKS.support}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Support
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40">
              Application
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Télécharger sur l&apos;App Store
              </a>
              <span className="text-sm text-white/50">
                Disponible sur iPhone
              </span>
              <span className="text-sm text-white/50">
                iOS 26.0 ou ultérieur
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} LocManage. Tous droits réservés.
          </p>
          <p className="text-xs text-white/35">
            Conçu avec soin en France
          </p>
        </div>
      </div>
    </footer>
  );
}

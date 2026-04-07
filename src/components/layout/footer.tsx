import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, LEGAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-surface">
      <div className="mx-auto max-w-[1080px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/app-icon.png"
                alt="LocManage"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-[16px] font-medium text-navy">
                LocManage
              </span>
            </div>
            <p className="max-w-xs text-[14px] font-light leading-relaxed text-slate">
              L&apos;application qui connecte propriétaires et locataires pour une
              gestion locative simple et moderne.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold tracking-widest uppercase text-slate/60">
              Légal
            </h3>
            <div className="flex flex-col gap-2.5">
              <Link
                href={LEGAL_LINKS.terms}
                className="text-[14px] text-slate transition-colors hover:text-navy"
              >
                Conditions d&apos;utilisation
              </Link>
              <Link
                href={LEGAL_LINKS.privacy}
                className="text-[14px] text-slate transition-colors hover:text-navy"
              >
                Politique de confidentialité
              </Link>
              <Link
                href={LEGAL_LINKS.support}
                className="text-[14px] text-slate transition-colors hover:text-navy"
              >
                Support
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] font-semibold tracking-widest uppercase text-slate/60">
              Application
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-slate transition-colors hover:text-navy"
              >
                Télécharger sur l&apos;App Store
              </a>
              <span className="text-[14px] text-slate">
                Disponible sur iPhone
              </span>
              <span className="text-[14px] text-slate">
                iOS 26.0 ou ultérieur
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-8 md:flex-row">
          <p className="text-[12px] text-slate/50">
            &copy; {new Date().getFullYear()} LocManage. Tous droits réservés.
          </p>
          <p className="text-[12px] text-slate/50">
            Conçu avec soin en France
          </p>
        </div>
      </div>
    </footer>
  );
}

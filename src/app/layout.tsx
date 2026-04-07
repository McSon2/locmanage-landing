import type { Metadata } from "next";
import { inter, sourceCodePro } from "@/lib/fonts";
import { SITE_URL, FAQ_ITEMS } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocManage — Gestion locative simplifiée pour iPhone",
  description:
    "Gérez vos biens locatifs, locataires, baux et loyers depuis votre iPhone. Signature électronique, états des lieux, export PDF. Conforme à la législation française 2024.",
  keywords: [
    "gestion locative",
    "application immobilier",
    "gestion biens locatifs",
    "loyer",
    "bail",
    "état des lieux",
    "signature électronique",
    "quittance de loyer",
    "gestion locative iPhone",
    "propriétaire bailleur",
    "déclaration 2044",
  ],
  authors: [{ name: "LocManage" }],
  creator: "LocManage",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "LocManage — Gestion locative simplifiée pour iPhone",
    description:
      "L'application iOS qui connecte propriétaires et locataires. Baux, loyers, signatures, états des lieux. Conforme loi 2024.",
    url: SITE_URL,
    siteName: "LocManage",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "LocManage — Gestion locative sur iPhone",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LocManage — Gestion locative simplifiée",
    description:
      "Gérez vos biens locatifs depuis votre iPhone avec élégance.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LocManage",
  url: SITE_URL,
  logo: `${SITE_URL}/images/app-icon.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "maxime.saltet@gmail.com",
    contactType: "customer support",
    availableLanguage: "French",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LocManage",
  url: SITE_URL,
  description:
    "Application de gestion locative pour propriétaires et locataires sur iPhone.",
  inLanguage: "fr",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LocManage",
  operatingSystem: "iOS",
  applicationCategory: "BusinessApplication",
  description:
    "Application de gestion locative pour propriétaires et locataires sur iPhone.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  author: {
    "@type": "Organization",
    name: "LocManage",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${sourceCodePro.variable} antialiased`}
    >
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

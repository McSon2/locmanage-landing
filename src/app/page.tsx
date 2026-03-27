import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { TenantSpace } from "@/components/sections/tenant-space";
import { Fiscal } from "@/components/sections/fiscal";
import { Pricing } from "@/components/sections/pricing";
import { Trust } from "@/components/sections/trust";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <TenantSpace />
        <Fiscal />
        <Pricing />
        <Trust />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

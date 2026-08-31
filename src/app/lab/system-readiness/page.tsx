import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SystemReadinessMapper } from "@/components/lab/SystemReadinessMapper";

export const metadata: Metadata = {
  title: "System Readiness Map — Panda Lab",
  description: "A lightweight interactive exercise for mapping product, system, data, security, and delivery readiness before choosing technology."
};

export default function SystemReadinessPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="PANDA LAB / 001"
        title="System Readiness Map"
        copy="A five-minute engineering exercise for identifying where uncertainty actually lives before a team reaches for frameworks, cloud services, or AI." 
        action={{ label: "Start the Map", href: "#mapper" }}
        secondary={{ label: "Back to Panda Lab", href: "/lab" }}
      />
      <section className="section shell" id="mapper">
        <SystemReadinessMapper />
      </section>
      <Footer />
    </main>
  );
}

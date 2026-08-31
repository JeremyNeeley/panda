import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";

export const metadata: Metadata = {
  title: "U App — Experimental Mobile Engineering",
  description: "A supporting Panda Digital Systems case study in native Flutter, custom rendering, interactive geometry, and security architecture."
};

export default function UAppPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="CASE STUDY / EXPERIMENTAL MOBILE"
        title="U App — Interactive Mathematical System"
        copy="A supporting experimental case study in translating a complex visual and mathematical experience into native Flutter software with custom rendering and privacy-aware security architecture."
        action={{ label: "Discuss a Product", href: "/start-project" }}
        secondary={{ label: "Back to Work", href: "/work" }}
      />
      <section className="section shell case-overview">
        <div className="case-summary">
          <p className="eyebrow">ENGINEERING CHALLENGE</p>
          <h2>Preserve the behavior underneath the interface.</h2>
          <p>The work was not treated as a screenshot recreation. The native implementation had to preserve interaction timing, geometry behavior, multidimensional computation, rendering, and the separation between visible representation and protected identity state.</p>
        </div>
        <aside className="case-facts">
          <div><span>PLATFORM</span><strong>Native Flutter</strong></div>
          <div><span>RENDERING</span><strong>CustomPainter</strong></div>
          <div><span>GEOMETRY</span><strong>8D → 3D system</strong></div>
          <div><span>SECURITY</span><strong>Local protected state</strong></div>
        </aside>
      </section>
      <section className="section section-contrast">
        <div className="shell uapp-system">
          <p className="eyebrow">SYSTEM LAYERS</p>
          <h2>Experience, geometry, and security remain separate concerns.</h2>
          <div className="uapp-layer-grid">
            <article><span>01</span><h3>Experience</h3><p>Onboarding, animation timing, navigation, touch interaction, and application state.</p></article>
            <article><span>02</span><h3>Geometry</h3><p>Mathematical roots, multidimensional vectors, transformation, projection, and visual formation.</p></article>
            <article><span>03</span><h3>Identity & Security</h3><p>Protected local state, key derivation, encrypted envelopes, integrity checks, and device-backed authentication concepts.</p></article>
          </div>
        </div>
      </section>
      <section className="section shell case-sections">
        <article><p className="eyebrow">NATIVE IMPLEMENTATION</p><h2>Not a WebView wrapper.</h2><p>The visual and behavioral contract was translated into native Flutter components and custom Dart logic so the application could own its rendering and interaction model directly.</p></article>
        <article><p className="eyebrow">CUSTOM RENDERING</p><h2>The visual system responds to application state.</h2><p>Perspective, depth, motion, and touch behavior are generated as part of the experience rather than used as a prerecorded background effect.</p></article>
        <article><p className="eyebrow">APPLIED MATHEMATICS</p><h2>Complex mathematics stays an implementation detail until it helps explain the product.</h2><p>The project uses an E8-derived geometric structure and multidimensional projection, but the portfolio keeps that detail in context instead of making it the identity of Panda Digital Systems.</p></article>
        <article><p className="eyebrow">SECURITY REVIEW</p><h2>Build it. Then question it.</h2><p>The Android artifact was also reviewed from a release-readiness and security perspective, reinforcing the broader Panda principle that implementation should be inspected for how it can fail—not only for whether it runs.</p></article>
      </section>
      <SectionCTA title="Have an unusual product or interaction problem?" copy="We enjoy technical work that needs product thinking, custom engineering, and careful boundaries to meet in one system." />
      <Footer />
    </main>
  );
}

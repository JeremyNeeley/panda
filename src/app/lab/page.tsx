import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";

export const metadata: Metadata = {
  title: "Panda Lab",
  description: "Experimental systems, prototypes, technical explorations, and developer tools from Panda Digital Systems."
};

const experiments = [
  ["LAB / 001", "System Readiness Map", "ACTIVE", "Map product, system, data, security, and delivery readiness before choosing a stack or committing to a large build.", "SYSTEMS · PRODUCT · SECURITY", "/lab/system-readiness"],
  ["LAB / 002", "AI Knowledge Systems", "RESEARCH", "Explore retrieval, evaluation, tool use, permissions, and the architecture behind useful AI knowledge workflows.", "AI · RAG · EVALUATION", null],
  ["LAB / 003", "Security Inspector", "QUEUED", "Turn common application-security checks into an understandable engineering view instead of a wall of scanner output.", "SECURITY · APIs · TOOLING", null],
  ["LAB / 004", "Interactive Systems", "RESEARCH", "Experiments in visualization, interaction, motion, geometry, and interfaces that make complex systems easier to understand.", "INTERACTION · VISUALIZATION · MOBILE", null]
] as const;

export default function LabPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="PANDA LAB / EXPERIMENTAL SYSTEMS"
        title="Curiosity with an engineering discipline."
        copy="Panda Lab is where we test ideas before they become client deliverables: AI, security, automation, developer tools, visualization, data, interfaces, and emerging technology."
        action={{ label: "Explore Work", href: "/work" }}
      />
      <section className="section shell">
        <div className="lab-manifesto">
          <p className="eyebrow">HOW THE LAB WORKS</p>
          <h2>Prototype the risky part first.</h2>
          <p>Experiments are useful when they answer a question: Can this interaction work? Is the model reliable enough? Where does the security boundary belong? Can the workflow survive real data? The goal is learning—not demo theater.</p>
        </div>
        <div className="experiment-grid">
          {experiments.map(([code, title, status, copy, tags, href], index) => (
            <article className="experiment-card" key={code}>
              <div className="experiment-top"><span>{code}</span><span className={`experiment-status status-${status.toLowerCase()}`}>{status}</span></div>
              <div className={`experiment-visual experiment-${index + 1}`} aria-hidden="true"><i /><i /><i /></div>
              <p className="mono-label">{tags}</p>
              <h2>{title}</h2>
              <p>{copy}</p>
              {href ? <Link href={href} className="text-link">Launch experiment <span>→</span></Link> : <span className="text-link muted-link">Research queue / no public demo yet</span>}
            </article>
          ))}
        </div>
      </section>
      <SectionCTA title="Have an idea that needs proving?" copy="We can isolate the risky assumption, prototype it, and decide what deserves production engineering." />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";
import { engineeringTopics } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Panda Engineering",
  description: "Technical ideas and field notes across software, AI, cybersecurity, cloud, product, data, and engineering decisions."
};

export default function EngineeringPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="PANDA ENGINEERING / NOTES FROM THE FIELD"
        title="Think broadly. Go deep when the problem demands it."
        copy="Panda Engineering covers software architecture, AI systems, security, cloud, product engineering, data, automation, performance, delivery, and emerging technology."
        action={{ label: "Start a Project", href: "/start-project" }}
      />
      <section className="section shell">
        <div className="engineering-intro">
          <p className="eyebrow">EDITORIAL PRINCIPLE</p>
          <h2>No trend summaries for the sake of posting.</h2>
          <p>We want the writing to come from engineering decisions, experiments, failures, tradeoffs, and systems that had to work outside a demo environment.</p>
        </div>
        <div className="engineering-grid">
          {engineeringTopics.map(([category, title, copy], index) => (
            <article className="engineering-card" key={title}>
              <div className="engineering-card-top"><span>NOTE / {String(index + 1).padStart(2, "0")}</span><span>COMING SOON</span></div>
              <p className="mono-label">{category}</p>
              <h2>{title}</h2>
              <p>{copy}</p>
              <span className="text-link muted-link">Field note in development</span>
            </article>
          ))}
        </div>
      </section>
      <SectionCTA title="Need the engineering, not just the article?" copy="Bring us the actual system, workflow, security boundary, or product problem." />
      <Footer />
    </main>
  );
}

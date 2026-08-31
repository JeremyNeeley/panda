import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";
import { workItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected software, AI, cloud, security, and experimental engineering work from Panda Digital Systems."
};

export default function WorkPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="WORK / SELECTED ENGINEERING"
        title="Different problems. Different systems."
        copy="Our work spans intelligent systems, product engineering, cloud delivery, security, and experimental technology. We organize the portfolio around the problem being solved—not one framework or one app."
        action={{ label: "Start a Project", href: "/start-project" }}
      />
      <section className="section shell">
        <div className="portfolio-list">
          {workItems.map((item, index) => (
            <article className="portfolio-item" key={item.slug}>
              <div className="portfolio-index">0{index + 1}</div>
              <div className="portfolio-body">
                <div className="portfolio-kicker">
                  <span className="mono-label">{item.eyebrow}</span>
                  <span>{item.kind === "flagship" ? "CASE STUDY" : "ENGINEERING EXPERIENCE"}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <strong>{item.outcome}</strong>
                <div className="tag-row portfolio-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {item.href ? (
                  <Link className="text-link" href={item.href}>Explore case study <span>→</span></Link>
                ) : (
                  <Link className="text-link" href="/start-project">Discuss similar work <span>→</span></Link>
                )}
              </div>
              <div className={`portfolio-visual visual-${index + 1}`} aria-hidden="true">
                <span /><span /><span /><span />
              </div>
            </article>
          ))}
        </div>
      </section>
      <SectionCTA />
      <Footer />
    </main>
  );
}

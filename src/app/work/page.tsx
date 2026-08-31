import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";
import { WorkVisual, type WorkVisualVariant } from "@/components/portfolio/WorkVisual";
import { workItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected software, AI, cloud, security, and experimental engineering work from Panda Digital Systems."
};

const visualBySlug: Record<string, WorkVisualVariant> = {
  "enterprise-ai-support-agent": "ai",
  "product-engineering": "product",
  "cloud-delivery-systems": "cloud",
  "u-app": "experimental"
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
        <div className="work-disclosure">
          <span className="mono-label">PORTFOLIO NOTE</span>
          <p>Some professional experience is presented in anonymized form. The portfolio focuses on engineering responsibilities, system patterns, and outcomes without exposing confidential client or employer information.</p>
        </div>
        <div className="portfolio-list">
          {workItems.map((item, index) => (
            <article className="portfolio-item" key={item.slug}>
              <div className="portfolio-index">0{index + 1}</div>
              <div className="portfolio-body">
                <div className="portfolio-kicker">
                  <span className="mono-label">{item.eyebrow}</span>
                  <span>{item.kind === "flagship" ? "CASE STUDY" : "PROFESSIONAL EXPERIENCE"}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <strong>{item.outcome}</strong>
                <div className="tag-row portfolio-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {item.href ? (
                  <Link className="text-link" href={item.href}>{item.kind === "flagship" ? "Explore case study" : "Explore experience"} <span>→</span></Link>
                ) : (
                  <Link className="text-link" href="/start-project">Discuss similar work <span>→</span></Link>
                )}
              </div>
              <WorkVisual variant={visualBySlug[item.slug] ?? "product"} />
            </article>
          ))}
        </div>

        <div className="problem-finder">
          <div className="problem-finder-head">
            <div>
              <p className="eyebrow">FIND YOUR CLOSEST PROBLEM</p>
              <h2>Start with what is difficult right now.</h2>
            </div>
            <p>You do not need to know the correct architecture or service category before contacting us. Choose the situation that feels closest to yours and use the relevant case study as a starting point.</p>
          </div>
          <div className="problem-finder-grid">
            {[
              ["01 / AI OPERATIONS", "We have an AI prototype, but it is not ready for real workflows.", "Retrieval, tools, permissions, evaluation, and escalation need to become one operating system.", "/work/enterprise-ai-support-agent"],
              ["02 / PRODUCT SYSTEMS", "Our SaaS or internal platform is getting harder to change safely.", "Tenant boundaries, roles, APIs, data models, and product delivery need clearer architecture.", "/work/multi-tenant-product-engineering"],
              ["03 / CLOUD & DELIVERY", "Shipping changes is slow, fragile, or operationally expensive.", "CI/CD, infrastructure, containers, databases, and async services need a more dependable path to production.", "/work/cloud-delivery-systems"],
              ["04 / CUSTOM PRODUCT", "The product needs engineering that does not fit a standard template.", "Custom rendering, mobile behavior, mathematical systems, or unusual security boundaries need purpose-built implementation.", "/work/u-app"]
            ].map(([label, title, copy, href]) => (
              <article className="problem-finder-card" key={label}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link className="text-link" href={href}>See relevant proof <span>→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionCTA />
      <Footer />
    </main>
  );
}

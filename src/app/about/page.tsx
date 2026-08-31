import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";

export const metadata: Metadata = {
  title: "About",
  description: "Panda Digital Systems is an engineering studio focused on software, AI, product development, cybersecurity, and cloud systems."
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="ABOUT / PANDA DIGITAL SYSTEMS"
        title="Serious engineering without unnecessary ceremony."
        copy="Panda Digital Systems is being built as a modern engineering studio: broad enough to solve complete digital-system problems, focused enough to stay accountable for the work."
        action={{ label: "Start a Project", href: "/start-project" }}
        secondary={{ label: "See Our Work", href: "/work" }}
      />
      <section className="section shell about-story">
        <div className="about-lead">
          <p className="eyebrow">WHY PANDA</p>
          <h2>A memorable name. A disciplined way of working.</h2>
        </div>
        <div className="about-copy">
          <p>We believe a strong technology partner should understand more than the ticket in front of them. Product decisions affect architecture. Architecture affects security. Security affects user experience. Data affects AI. Deployment affects whether any of it reaches customers reliably.</p>
          <p>That is why Panda Digital Systems spans software engineering, AI and automation, product development, cybersecurity, and cloud systems. The goal is not to collect service labels. The goal is to understand enough of the whole system to make better decisions.</p>
        </div>
      </section>
      <section className="section shell engineering-identity">
        <div>
          <p className="eyebrow">PUBLIC ENGINEERING IDENTITY</p>
          <h2>Accountability should be visible.</h2>
          <p>Panda Digital Systems is built around source-controlled delivery, explicit technical reasoning, and work that can be discussed at the system level. The public GitHub profile is part of that identity—not a decorative social link.</p>
        </div>
        <a className="github-panel" href="https://github.com/JeremyNeeley" target="_blank" rel="noreferrer">
          <span className="github-panel-label">GITHUB / VERIFIED PROFILE</span>
          <strong>@JeremyNeeley</strong>
          <span>github.com/JeremyNeeley ↗</span>
        </a>
      </section>

      <section className="section section-contrast">
        <div className="shell value-grid">
          {[
            ["01", "Problem before technology", "Start with what needs to change in the business or product. Choose tools after the objective is clear."],
            ["02", "Security as architecture", "Boundaries, permissions, secrets, data, and failure modes belong in the design conversation."],
            ["03", "AI with operational reality", "A useful AI system needs data quality, evaluation, permissions, workflow integration, and human fallback—not only prompts."],
            ["04", "Direct communication", "Clients should understand what is being built, what changed, what is blocked, and why decisions are being made."],
            ["05", "Build for change", "Avoid both disposable prototypes and premature enterprise complexity. Create room for the system to evolve."],
            ["06", "Show the engineering", "Case studies, experiments, and technical writing should demonstrate how we think—not hide behind marketing language."]
          ].map(([code, title, copy]) => (
            <article key={code}><span>{code}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <SectionCTA />
      <Footer />
    </main>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";

type ServiceProof = {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
};

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  copy: string;
  inquiryHref: string;
  starting: string;
  bestFor: string[];
  outcomes: string[];
  capabilities: Array<{ title: string; copy: string }>;
  approach: Array<{ code: string; title: string; copy: string }>;
  proof: ServiceProof[];
  children?: ReactNode;
};

export function ServiceDetailPage({
  eyebrow,
  title,
  copy,
  inquiryHref,
  starting,
  bestFor,
  outcomes,
  capabilities,
  approach,
  proof,
  children
}: ServiceDetailPageProps) {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow={eyebrow}
        title={title}
        copy={copy}
        action={{ label: "Discuss Your Project", href: inquiryHref }}
        secondary={{ label: "All Services", href: "/services" }}
      />

      <section className="section shell service-snapshot">
        <div className="service-snapshot-intro">
          <p className="eyebrow">ENGAGEMENT SNAPSHOT</p>
          <h2>Start with the business constraint. Shape the engineering around it.</h2>
          <p>Projects can be focused or end-to-end. The goal is to define the smallest responsible engagement that creates meaningful progress without locking the system into unnecessary complexity.</p>
        </div>
        <div className="service-snapshot-grid">
          <article>
            <span>BEST FOR</span>
            <ul>{bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <span>TYPICAL OUTCOMES</span>
            <ul>{outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="service-investment-card">
            <span>FOCUSED ENGAGEMENTS</span>
            <strong>Starting at {starting}</strong>
            <p>USD reference point. International teams can use the local equivalent; larger systems are scoped through a clear proposal.</p>
            <Link href={inquiryHref} className="text-link">Describe the project <span>→</span></Link>
          </article>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <div className="section-heading split-heading service-capability-heading">
            <p className="eyebrow">WHAT WE CAN BUILD</p>
            <div>
              <h2>Capabilities organized around outcomes.</h2>
              <p>Technology choices come after the operating requirements, security boundaries, integration constraints, and delivery expectations are understood.</p>
            </div>
          </div>
          <div className="service-capability-grid">
            {capabilities.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {children}

      <section className="section shell service-approach-section">
        <div className="section-heading split-heading">
          <p className="eyebrow">HOW WE APPROACH IT</p>
          <div>
            <h2>Enough structure to make difficult work manageable.</h2>
            <p>Each engagement is adapted to the system, but these operating principles keep architecture, implementation, validation, and handoff connected.</p>
          </div>
        </div>
        <div className="service-approach-grid">
          {approach.map((item) => (
            <article key={item.code}>
              <span>{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell service-proof-section">
          <div className="service-proof-heading">
            <p className="eyebrow">RELATED PROOF</p>
            <h2>See the thinking behind the capability.</h2>
          </div>
          <div className="service-proof-grid">
            {proof.map((item) => (
              <Link href={item.href} className="service-proof-card" key={item.title}>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <strong>Open proof ↗</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Have a project that fits this capability?"
        copy="Tell us what exists today, what needs to change, where the risk is, and what success would look like. We can work from there."
        href={inquiryHref}
      />
      <Footer />
    </main>
  );
}

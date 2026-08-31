import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";
import { services } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Services",
  description: "Software engineering, AI automation, product development, cybersecurity, and cloud systems from Panda Digital Systems."
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="SERVICES / ENGINEERING CAPABILITIES"
        title="Build the right system. Not the loudest stack."
        copy="Panda Digital Systems works across software, AI, product, security, and infrastructure. Engagements can begin with a focused problem or span the full system."
        action={{ label: "Start a Project", href: "/start-project" }}
        secondary={{ label: "View Work", href: "/work" }}
      />
      <section className="section shell">
        <div className="service-detail-list">
          {services.map((service) => (
            <article className="service-detail" id={service.slug} key={service.slug}>
              <div className="service-number">{service.code}</div>
              <div className="service-main">
                <p className="eyebrow">{service.title}</p>
                <h2>{service.headline}</h2>
                <p>{service.copy}</p>
              </div>
              <div className="service-side">
                <div className="service-list">{service.items.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="service-price"><small>FOCUSED ENGAGEMENTS</small><strong>Starting at {service.starting}</strong></div>
                <Link href="/start-project" className="text-link">Discuss this capability <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="pricing-note">
          <p className="eyebrow">PRICING PHILOSOPHY</p>
          <h2>Starting points, not cookie-cutter packages.</h2>
          <p>Simple problems should stay simple. Larger systems are scoped around requirements, risk, integration depth, and delivery expectations. We prefer a clear proposal over hiding complexity inside an hourly-rate guessing game.</p>
        </div>
      </section>
      <SectionCTA title="Not sure which service fits?" copy="That is normal. Start with the business problem and we can help determine the engineering path." />
      <Footer />
    </main>
  );
}

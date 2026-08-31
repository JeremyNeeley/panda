import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";

export const metadata: Metadata = {
  title: "Multi-Tenant Product Engineering",
  description:
    "An anonymized Panda Digital Systems experience study covering multi-tenant SaaS architecture, role-based access control, APIs, PostgreSQL, and AWS delivery."
};

export default function MultiTenantProductEngineeringPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="ENGINEERING EXPERIENCE / SOFTWARE & SaaS"
        title="Multi-Tenant Product Engineering"
        copy="An anonymized view of professional product engineering across modern frontends, role-aware SaaS architecture, scalable APIs, PostgreSQL data models, and AWS cloud delivery."
        action={{ label: "Discuss a Software System", href: "/start-project?type=build&service=Backend%20development&service=Full%20project%20delivery" }}
        secondary={{ label: "Back to Work", href: "/work" }}
      />

      <section className="section shell case-overview">
        <div className="case-summary">
          <p className="eyebrow">THE ENGINEERING PROBLEM</p>
          <h2>A SaaS product is more than a collection of screens.</h2>
          <p>
            Multi-tenant software has to keep users, roles, data, APIs, and operational boundaries coherent as the product grows. The work behind these systems included React and Next.js interfaces, Node.js and Python services, PostgreSQL data models, role-based access control, scalable API design, and AWS deployment patterns.
          </p>
        </div>
        <aside className="case-facts">
          <div><span>FOCUS</span><strong>Multi-tenant SaaS</strong></div>
          <div><span>BOUNDARIES</span><strong>Roles · tenants · data</strong></div>
          <div><span>STACK</span><strong>React · Node.js · Python</strong></div>
          <div><span>PLATFORM</span><strong>PostgreSQL · AWS</strong></div>
        </aside>
      </section>

      <section className="section section-contrast">
        <div className="shell architecture-flow">
          <p className="eyebrow">SYSTEM VIEW</p>
          <h2>Product behavior has to stay aligned across every layer.</h2>
          <div className="flow-row">
            {[
              ["01", "Experience", "Role-aware product journeys"],
              ["02", "Identity", "Authentication and RBAC"],
              ["03", "Services", "APIs and business logic"],
              ["04", "Data", "Tenant-aware PostgreSQL models"],
              ["05", "Operate", "AWS delivery and production support"]
            ].map(([code, title, copy]) => (
              <article key={code}><span>{code}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell case-sections">
        <article>
          <p className="eyebrow">TENANCY</p>
          <h2>Isolation is an architecture concern, not a UI filter.</h2>
          <p>Tenant boundaries influence authorization, queries, background work, data modeling, caching, and operational tooling. The goal is to make the safe path the normal path so every feature does not have to rediscover the same isolation rules.</p>
        </article>
        <article>
          <p className="eyebrow">APIs & DATA</p>
          <h2>Business rules belong behind stable interfaces.</h2>
          <p>REST APIs, backend services, and PostgreSQL schemas were designed around business workflows rather than frontend convenience alone. That creates cleaner ownership boundaries and gives web, integrations, and future clients a consistent contract.</p>
        </article>
        <article>
          <p className="eyebrow">PRODUCT DELIVERY</p>
          <h2>Architecture has to support change, not freeze it.</h2>
          <p>Real products evolve through new roles, workflows, integrations, reporting requirements, and operational constraints. The engineering approach favors clear module boundaries and pragmatic abstractions that make common changes less expensive.</p>
        </article>
        <article>
          <p className="eyebrow">PRODUCTION</p>
          <h2>The product includes the path to production.</h2>
          <p>Cloud deployment, automated delivery, error handling, observability, and database performance are part of customer experience. A feature is not complete if the team cannot release, diagnose, and operate it with confidence.</p>
        </article>
      </section>

      <section className="section section-contrast">
        <div className="shell evidence-strip">
          <div><span>ARCHITECTURE</span><strong>Multi-tenant SaaS</strong><p>Role-aware systems with scalable APIs and tenant boundaries.</p></div>
          <div><span>BACKEND</span><strong>Node.js + Python</strong><p>Service and integration layers designed around real workflows.</p></div>
          <div><span>DATA</span><strong>PostgreSQL</strong><p>Structured models, query design, and performance-minded persistence.</p></div>
          <div><span>DELIVERY</span><strong>AWS</strong><p>Cloud deployment patterns built for availability and evolution.</p></div>
        </div>
      </section>

      <SectionCTA
        title="Building a SaaS or internal platform?"
        copy="We can help shape the product architecture, tenant boundaries, APIs, data model, delivery path, and the engineering decisions that keep future change manageable."
        href="/start-project?type=build&service=Backend%20development&service=Full%20project%20delivery"
      />
      <Footer />
    </main>
  );
}

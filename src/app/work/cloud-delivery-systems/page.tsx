import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";
import { CaseStudyDecision } from "@/components/portfolio/CaseStudyDecision";
import { CaseStudyNav } from "@/components/portfolio/CaseStudyNav";

export const metadata: Metadata = {
  title: "Cloud & Delivery Systems",
  description:
    "An anonymized Panda Digital Systems experience study covering AWS, CI/CD, Docker, Kubernetes, Terraform, event-driven services, and database performance."
};

export default function CloudDeliverySystemsPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="ENGINEERING EXPERIENCE / CLOUD & DELIVERY"
        title="Cloud & Delivery Systems"
        copy="An anonymized view of delivery engineering across AWS infrastructure, containers, CI/CD, infrastructure as code, asynchronous services, and database performance."
        action={{ label: "Discuss Your Delivery System", href: "/start-project?type=cloud&service=Cloud%20%2F%20DevOps" }}
        secondary={{ label: "Back to Work", href: "/work" }}
      />

      <section className="section shell case-overview">
        <div className="case-summary">
          <p className="eyebrow">THE ENGINEERING PROBLEM</p>
          <h2>Production reliability starts before deployment day.</h2>
          <p>
            Delivery friction compounds quickly when releases depend on manual steps, environments drift, services communicate unreliably, or database performance is treated as an afterthought. The work behind these systems combined CI/CD, Docker, Kubernetes, Terraform, AWS services, event-driven messaging, and database optimization to make production change more repeatable.
          </p>
        </div>
        <aside className="case-facts">
          <div><span>CLOUD</span><strong>AWS</strong></div>
          <div><span>DELIVERY</span><strong>CI/CD · GitHub Actions</strong></div>
          <div><span>PLATFORM</span><strong>Docker · Kubernetes · Terraform</strong></div>
          <div><span>MESSAGING</span><strong>Kafka · RabbitMQ</strong></div>
        </aside>
      </section>

      <section className="section section-contrast">
        <div className="shell architecture-flow">
          <p className="eyebrow">DELIVERY VIEW</p>
          <h2>Make the path to production boring—in the best way.</h2>
          <div className="flow-row">
            {[
              ["01", "Change", "Reviewable source changes"],
              ["02", "Validate", "Tests and quality gates"],
              ["03", "Package", "Containers and artifacts"],
              ["04", "Deploy", "Automated infrastructure delivery"],
              ["05", "Observe", "Logs, metrics, and diagnosis"]
            ].map(([code, title, copy]) => (
              <article key={code}><span>{code}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell metric-band" aria-label="Selected engineering outcomes">
        <div><span>DELIVERY</span><strong>40%</strong><p>reduction in deployment time through automated CI/CD with Docker, Kubernetes, Terraform, and GitHub Actions.</p></div>
        <div><span>DATABASE</span><strong>25%</strong><p>reduction in query latency through SQL, stored-procedure, and PostgreSQL indexing optimization.</p></div>
        <div><span>EVENTS</span><strong>ASYNC</strong><p>service communication using Kafka and RabbitMQ for workflows that should not block on synchronous coupling.</p></div>
      </section>

      <section className="section shell case-sections">
        <article>
          <p className="eyebrow">AUTOMATION</p>
          <h2>Every manual release step is a future incident opportunity.</h2>
          <p>Automated delivery makes the release path reproducible. Tests, builds, infrastructure changes, and deployment steps become reviewable system behavior rather than tribal knowledge carried by one developer.</p>
        </article>
        <article>
          <p className="eyebrow">INFRASTRUCTURE</p>
          <h2>Infrastructure should be versioned like application code.</h2>
          <p>Terraform and container-based workflows create clearer environmental consistency, reviewable infrastructure changes, and a better foundation for rollback and repeatable deployment.</p>
        </article>
        <article>
          <p className="eyebrow">DISTRIBUTED WORK</p>
          <h2>Not every service interaction belongs on the request path.</h2>
          <p>Kafka and RabbitMQ support asynchronous workflows where decoupling, retries, buffering, or independent processing matter more than immediate synchronous response.</p>
        </article>
        <article>
          <p className="eyebrow">PERFORMANCE</p>
          <h2>Scale problems often begin in ordinary queries.</h2>
          <p>Database performance work included complex SQL, stored-procedure tuning, and PostgreSQL index strategy. Improving the data path can remove latency without adding another service, cache, or distributed-system dependency.</p>
        </article>
      </section>

      <CaseStudyDecision
        proof={[
          { label: "DELIVERY", value: "40% faster", detail: "Documented reduction in deployment time through automated CI/CD, containers, infrastructure as code, and GitHub Actions." },
          { label: "DATABASE", value: "25% lower latency", detail: "Documented query-latency improvement through SQL, stored-procedure, and PostgreSQL indexing work." },
          { label: "SYSTEMS", value: "Async-ready", detail: "Kafka and RabbitMQ patterns support workflows that should not depend on synchronous service coupling." }
        ]}
        delivered={[
          "Automated CI/CD pipelines with repeatable quality and deployment gates",
          "Containerized delivery using Docker and Kubernetes",
          "Infrastructure as code with Terraform and cloud-native AWS patterns",
          "Event-driven workflows using Kafka and RabbitMQ where asynchronous boundaries fit",
          "Database and query optimization before adding unnecessary distributed complexity"
        ]}
        fit={[
          "Releases are manual, fragile, or depend on one person knowing the sequence",
          "Environment drift or infrastructure changes make deployment unpredictable",
          "Database latency is becoming a product or operational problem",
          "Your system needs clearer asynchronous boundaries, observability, or rollback discipline"
        ]}
        inquiryHref="/start-project?type=cloud&service=Cloud%20%2F%20DevOps"
        inquiryLabel="Improve delivery systems"
      />
      <CaseStudyNav
        previous={{ label: "Multi-Tenant Product Engineering", href: "/work/multi-tenant-product-engineering" }}
        next={{ label: "U App — Interactive Mathematical System", href: "/work/u-app" }}
      />
      <SectionCTA
        title="Need faster, safer production delivery?"
        copy="We can help simplify the release path, improve infrastructure repeatability, reduce operational friction, and strengthen the systems behind your application."
        href="/start-project?type=cloud&service=Cloud%20%2F%20DevOps"
      />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/portfolio/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Software Engineering Services",
  description: "Custom web applications, SaaS platforms, APIs, internal systems, and backend engineering from Panda Digital Systems."
};

export default function SoftwareEngineeringServicePage() {
  return <ServiceDetailPage
    eyebrow="SERVICE / SOFTWARE ENGINEERING"
    title="Software that fits the business behind it."
    copy="Custom applications, SaaS platforms, internal systems, APIs, integrations, and backend services engineered around real workflows, permissions, data, and production constraints."
    inquiryHref="/start-project?type=build&service=Backend%20development&service=Full%20project%20delivery"
    starting="$2,500"
    bestFor={["New web or SaaS products", "Internal operational platforms", "API and integration work", "Systems that need modernization"]}
    outcomes={["A maintainable product foundation", "Clear API and data boundaries", "Safer role and tenant behavior", "A production-ready delivery path"]}
    capabilities={[
      { title: "Web Applications", copy: "Responsive product interfaces connected to durable backend behavior rather than one-off page logic." },
      { title: "SaaS Platforms", copy: "Multi-tenant products with explicit roles, data boundaries, workflows, and operational ownership." },
      { title: "Backend Systems", copy: "Node.js, Python, APIs, background work, data access, and business logic shaped around stable interfaces." },
      { title: "APIs & Integrations", copy: "REST and service integrations with validation, error handling, authorization, observability, and realistic failure behavior." },
      { title: "Internal Tools", copy: "Operational software that replaces spreadsheets, manual coordination, disconnected workflows, or fragile admin processes." },
      { title: "Modernization", copy: "Targeted refactoring and system improvement where the goal is safer change—not a rewrite for its own sake." }
    ]}
    approach={[
      { code: "01", title: "Model the workflow", copy: "Understand users, roles, data, edge cases, and where the current process actually creates friction." },
      { code: "02", title: "Define boundaries", copy: "Separate interface concerns, business rules, data ownership, authorization, and integrations before complexity spreads." },
      { code: "03", title: "Ship vertical slices", copy: "Deliver usable increments that exercise the full system rather than completing isolated layers in a vacuum." },
      { code: "04", title: "Operate what ships", copy: "Build deployment, diagnostics, security, and maintainability into the definition of done." }
    ]}
    proof={[
      { eyebrow: "WORK / SAAS", title: "Multi-Tenant Product Engineering", copy: "Role-aware SaaS architecture, APIs, PostgreSQL, backend services, and AWS delivery.", href: "/work/multi-tenant-product-engineering" },
      { eyebrow: "ENGINEERING / SYSTEMS", title: "When Microservices Make Your Product Worse", copy: "A practical look at choosing architecture based on actual system and team constraints.", href: "/engineering/microservices-complexity" }
    ]}
  />;
}

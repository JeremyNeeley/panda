import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/portfolio/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Product Development Services",
  description: "MVP engineering, product architecture, mobile and web product development, prototyping, and launch support from Panda Digital Systems."
};

export default function ProductDevelopmentServicePage() {
  return <ServiceDetailPage
    eyebrow="SERVICE / PRODUCT DEVELOPMENT"
    title="Move from idea to a product people can actually use."
    copy="Product architecture, MVP engineering, web and mobile development, prototyping, and launch support for teams that need to turn an idea or early system into something coherent and production-ready."
    inquiryHref="/start-project?type=build&service=Full%20project%20delivery"
    starting="$5,000"
    bestFor={["Founders validating a product", "Teams replacing a prototype", "New mobile or web products", "Products that need technical simplification"]}
    outcomes={["Clear product scope", "Working end-to-end MVP", "Architecture that can evolve", "A launch and learning path"]}
    capabilities={[
      { title: "Product Architecture", copy: "Define the product surface, system boundaries, data model, integrations, and delivery risks before build effort multiplies." },
      { title: "MVP Engineering", copy: "Build the smallest system that can prove the important assumptions without creating disposable architecture everywhere." },
      { title: "Web Products", copy: "Modern browser-based products designed around usability, backend behavior, performance, and production constraints." },
      { title: "Mobile Products", copy: "Native or cross-platform mobile engineering when device interaction, local state, security, or mobile UX matters." },
      { title: "Rapid Prototyping", copy: "Use focused experiments to answer risky technical or product questions before turning them into expensive commitments." },
      { title: "Launch Support", copy: "Release readiness, observability, deployment, security review, feedback loops, and the first phase of post-launch iteration." }
    ]}
    approach={[
      { code: "01", title: "Reduce the unknowns", copy: "Identify the assumptions that can invalidate the product, then test the highest-risk ones first." },
      { code: "02", title: "Protect the core", copy: "Invest engineering depth in the parts that create durable product value; keep everything else intentionally simple." },
      { code: "03", title: "Build end to end", copy: "Prefer complete user journeys over large disconnected batches of frontend, backend, or infrastructure work." },
      { code: "04", title: "Launch to learn", copy: "Treat production as the start of evidence gathering, not the ceremonial end of development." }
    ]}
    proof={[
      { eyebrow: "WORK / PRODUCT", title: "Multi-Tenant Product Engineering", copy: "Product architecture across roles, APIs, data, frontend, cloud, and production delivery.", href: "/work/multi-tenant-product-engineering" },
      { eyebrow: "WORK / EXPERIMENTAL", title: "U App — Interactive Mathematical System", copy: "A native product translation combining custom interaction, rendering, geometry, and security boundaries.", href: "/work/u-app" }
    ]}
  />;
}

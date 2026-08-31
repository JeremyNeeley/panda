import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "When Microservices Make Your Product Worse",
  description: "Panda Engineering field notes on service boundaries, operational complexity, and when a modular monolith is the better architecture."
};

export default function Page() {
  return <ArticlePage
    category="SYSTEMS / ARCHITECTURE"
    title="When Microservices Make Your Product Worse"
    dek="Distribution can solve organizational and scaling problems. It can also turn ordinary product development into network, data-consistency, deployment, and observability work."
    readTime="8 MIN READ"
    sections={[
      {
        heading: "Services do not remove coupling. They move it.",
        paragraphs: [
          "Splitting code into separate deployments can create cleaner ownership, but the business workflow still crosses boundaries. What used to be a function call may become an API contract, queue, retry policy, timeout, schema version, and distributed trace.",
          "That trade can be excellent when the boundary is real. It is expensive when the boundary exists mainly because microservices sounded like the mature architecture."
        ]
      },
      {
        heading: "Operational cost appears before scale benefits.",
        paragraphs: [
          "Each independently deployed service needs packaging, configuration, secrets, logs, monitoring, deployment, rollback, ownership, and incident response. The organization pays those costs immediately.",
          "The scaling benefit may arrive much later—or never. Architecture should compare the operating model you have today with the operating model the design requires."
        ]
      },
      {
        heading: "Data boundaries are harder than code boundaries.",
        paragraphs: [
          "A service can own its code while still depending on another service's data. Once databases are separated, joins become requests, consistency becomes explicit, and cross-service workflows need failure handling.",
          "If the business requires strongly consistent transactions across several supposed services, the decomposition may be fighting the domain rather than reflecting it."
        ]
      },
      {
        heading: "A modular monolith is not an architectural failure.",
        paragraphs: [
          "A well-structured single deployment can still have strong module boundaries, clear interfaces, isolated domain logic, background jobs, and independent internal ownership.",
          "It also preserves cheap local calls, straightforward transactions, simpler development environments, and fewer production failure modes while the product and organization are still learning."
        ]
      },
      {
        heading: "Split when the boundary earns independence.",
        paragraphs: [
          "Good candidates for extraction have a clear responsibility, independent scaling or reliability needs, a stable interface, and an owner capable of operating the service.",
          "The question is not whether microservices are modern. The question is whether independent deployment creates more value than the distribution cost it introduces."
        ]
      }
    ]}
    takeaway="Choose service boundaries because the domain, scale, or organization needs independence—not because the architecture diagram looks more advanced."
  />;
}

import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/portfolio/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Cloud & Systems Services",
  description: "Cloud architecture, DevOps, CI/CD, infrastructure, database, and distributed-system engineering from Panda Digital Systems."
};

export default function CloudSystemsServicePage() {
  return <ServiceDetailPage
    eyebrow="SERVICE / CLOUD & SYSTEMS"
    title="Make production change predictable."
    copy="Cloud architecture, deployment automation, infrastructure, data systems, distributed services, and operational improvements for software that needs to release, scale, integrate, and recover with confidence."
    inquiryHref="/start-project?type=cloud&service=Cloud%20%2F%20DevOps"
    starting="$2,500"
    bestFor={["Manual or fragile releases", "Growing cloud infrastructure", "Performance and database bottlenecks", "Systems adding asynchronous workflows"]}
    outcomes={["Repeatable deployment", "Infrastructure as code", "Better operational visibility", "Lower delivery friction"]}
    capabilities={[
      { title: "Cloud Architecture", copy: "AWS and cloud-native system design shaped around availability, workload behavior, operational ownership, and cost." },
      { title: "CI/CD", copy: "Automated validation and deployment paths that make production change reproducible rather than dependent on memory." },
      { title: "Containers", copy: "Docker and Kubernetes patterns where packaging, isolation, orchestration, or workload scaling justify the complexity." },
      { title: "Infrastructure as Code", copy: "Terraform and repeatable environment configuration that can be reviewed, versioned, reproduced, and recovered." },
      { title: "Data & Performance", copy: "PostgreSQL, query behavior, indexing, stored procedures, and data-path analysis before scaling around avoidable bottlenecks." },
      { title: "Distributed Systems", copy: "Kafka, RabbitMQ, background processing, and service boundaries used when asynchronous or distributed behavior has a real reason to exist." }
    ]}
    approach={[
      { code: "01", title: "Observe the current path", copy: "Map how code becomes production, where failures occur, how environments differ, and how incidents are diagnosed today." },
      { code: "02", title: "Automate repeatable work", copy: "Turn manual build, test, configuration, and release steps into visible, reviewable system behavior." },
      { code: "03", title: "Simplify before scaling", copy: "Fix data paths, coupling, configuration, and deployment friction before adding infrastructure that hides the root problem." },
      { code: "04", title: "Design recovery", copy: "Treat logs, rollback, failure isolation, monitoring, and operational ownership as part of the architecture." }
    ]}
    proof={[
      { eyebrow: "WORK / CLOUD", title: "Cloud & Delivery Systems", copy: "CI/CD, containers, Terraform, AWS, asynchronous services, and documented deployment/database improvements.", href: "/work/cloud-delivery-systems" },
      { eyebrow: "ENGINEERING / SYSTEMS", title: "When Microservices Make Your Product Worse", copy: "A field note on when distribution helps and when it becomes avoidable operational cost.", href: "/engineering/microservices-complexity" }
    ]}
  />;
}

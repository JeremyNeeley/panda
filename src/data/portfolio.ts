export type WorkItem = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  outcome: string;
  tags: string[];
  kind: "flagship" | "experience";
  href?: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "enterprise-ai-support-agent",
    eyebrow: "AI / INTELLIGENT SYSTEMS",
    title: "Enterprise AI Support Agent",
    summary:
      "A production-oriented support architecture that combines contextual retrieval, structured troubleshooting, tool interaction, and escalation workflows.",
    outcome:
      "Designed to move beyond a basic chatbot and participate in real support operations.",
    tags: ["AI", "RAG", "APIs", "Automation", "Support"],
    kind: "flagship",
    href: "/work/enterprise-ai-support-agent"
  },
  {
    slug: "product-engineering",
    eyebrow: "SOFTWARE / PRODUCT",
    title: "Multi-Tenant Product Engineering",
    summary:
      "Full-stack product work spanning modern frontends, role-aware SaaS architecture, APIs, databases, and cloud deployment patterns.",
    outcome:
      "A broad body of professional engineering work focused on scalable customer-facing and internal systems.",
    tags: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS"],
    kind: "experience",
    href: "/work/multi-tenant-product-engineering"
  },
  {
    slug: "cloud-delivery-systems",
    eyebrow: "CLOUD / DELIVERY",
    title: "Cloud & Delivery Systems",
    summary:
      "Infrastructure, CI/CD, containerization, event-driven services, and deployment automation for systems that need repeatable delivery and operational resilience.",
    outcome:
      "Engineering focused on reducing deployment friction and improving the reliability of production change.",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS", "Kafka"],
    kind: "experience",
    href: "/work/cloud-delivery-systems"
  },
  {
    slug: "u-app",
    eyebrow: "EXPERIMENTAL / MOBILE",
    title: "U App — Interactive Mathematical System",
    summary:
      "A native Flutter implementation combining complex onboarding, custom rendering, applied multidimensional geometry, and privacy-aware security architecture.",
    outcome:
      "A focused example of translating an unusual visual and mathematical concept into native mobile software.",
    tags: ["Flutter", "Dart", "Custom Graphics", "Security", "Applied Mathematics"],
    kind: "flagship",
    href: "/work/u-app"
  }
];

export const services = [
  {
    code: "01",
    slug: "software-engineering",
    title: "Software Engineering",
    headline: "Build software around the way the business actually works.",
    copy: "Web applications, SaaS products, internal platforms, APIs, integrations, and backend systems engineered around real requirements.",
    items: ["Web applications", "SaaS platforms", "Internal systems", "APIs & integrations", "Backend engineering", "Modernization"],
    starting: "$2,500"
  },
  {
    code: "02",
    slug: "ai-automation",
    title: "AI & Automation",
    headline: "Put intelligent systems to work where they create value.",
    copy: "AI assistants, agents, retrieval systems, document intelligence, and workflow automation connected to real operational processes.",
    items: ["AI assistants", "Agents", "RAG", "Document intelligence", "Workflow automation", "AI integrations"],
    starting: "$2,500"
  },
  {
    code: "03",
    slug: "product-development",
    title: "Product Development",
    headline: "Move from idea to something people can actually use.",
    copy: "Product architecture, MVP engineering, mobile and web products, launch support, and modernization for teams building something new.",
    items: ["Product architecture", "MVPs", "Rapid prototyping", "Mobile products", "Web products", "Launch support"],
    starting: "$5,000"
  },
  {
    code: "04",
    slug: "cybersecurity",
    title: "Cybersecurity",
    headline: "Security should be part of engineering, not a late-stage checkbox.",
    copy: "Engineering-focused application security, API and authentication review, hardening, release readiness, and secure architecture support.",
    items: ["Application security", "API security", "Authentication", "Security reviews", "Hardening", "Secure development"],
    starting: "$1,000"
  },
  {
    code: "05",
    slug: "cloud-systems",
    title: "Cloud & Systems",
    headline: "Engineer the foundation behind reliable software.",
    copy: "Cloud architecture, DevOps, deployment automation, data systems, distributed services, and operational improvements.",
    items: ["Cloud architecture", "DevOps", "CI/CD", "Infrastructure", "Databases", "Distributed systems"],
    starting: "$2,500"
  }
];

export const engineeringTopics = [
  ["AI / ARCHITECTURE", "Why AI Agents Fail Outside the Demo", "Where prototypes break when they meet permissions, messy data, users, cost, and real operations."],
  ["SECURITY / ENGINEERING", "Authentication Is Not Authorization", "A practical distinction that becomes critical as applications gain users, roles, integrations, and AI tools."],
  ["SYSTEMS / ARCHITECTURE", "When Microservices Make Your Product Worse", "Distribution can improve scale, but it can also turn ordinary product work into operational overhead."],
  ["PRODUCT / ENGINEERING", "Build the Smallest System That Can Grow", "How to avoid both prototype debt and architecture astronautics when a product is still proving itself."],
  ["AI / OPERATIONS", "The Hidden Work Behind Reliable RAG", "Retrieval quality depends on ingestion, metadata, permissions, evaluation, and maintenance—not just a vector database."],
  ["CLOUD / DELIVERY", "Deployment Is Part of the Product", "Why delivery pipelines, observability, rollback, and environment discipline affect customer experience."],
  ["SECURITY / PRODUCT", "Secure by Design Without Slowing Everything Down", "Security works best when boundaries and ownership are decided as the system is designed."],
  ["ENGINEERING / DECISIONS", "Complexity Has a Carrying Cost", "Every framework, service, queue, database, and abstraction becomes something the team must understand and operate."]
] as const;

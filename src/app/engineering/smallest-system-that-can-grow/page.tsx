import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "Build the Smallest System That Can Grow",
  description: "Panda Engineering notes on choosing enough architecture for growth without burying an early product under speculative complexity."
};

export default function Page() {
  return <ArticlePage
    category="PRODUCT / ENGINEERING"
    title="Build the Smallest System That Can Grow"
    dek="Early products need enough structure to survive success, but not so much architecture that they spend their first year preparing for traffic they do not have."
    readTime="7 MIN READ"
    sections={[
      { heading: "Small does not mean disposable.", paragraphs: ["A small system can still have clear boundaries, tests, migrations, observability, and security. The goal is not to build a prototype and hope it becomes production. The goal is to avoid solving hypothetical scale before the product has proven which parts deserve to scale.", "Useful simplicity preserves the ability to change direction. Disposable shortcuts usually make change more expensive."] },
      { heading: "Design around the constraints you actually have.", paragraphs: ["Team size, expected traffic, integration depth, compliance needs, data sensitivity, and speed of learning should influence architecture more than trend cycles.", "A three-person product team and a regulated enterprise platform should not begin with the same operating model."], points: ["Prefer one deployable system when independent deployment is not yet valuable", "Keep module boundaries explicit even inside a monolith", "Choose boring infrastructure for undifferentiated work", "Create an escape path for the parts most likely to scale independently"] },
      { heading: "Put flexibility in boundaries, not abstractions everywhere.", paragraphs: ["The ability to replace a payment provider, search implementation, or AI model comes from clear contracts and ownership. It does not require an interface around every function or a service around every table.", "Good boundaries are visible in data ownership, APIs, permissions, and side effects. That is where future change becomes cheaper."] },
      { heading: "Scale the pain you can measure.", paragraphs: ["Performance bottlenecks, deployment contention, ownership conflicts, and workload isolation eventually justify new architecture. Wait until the pressure is observable enough to design the right solution.", "Scaling because a system is popular in architecture diagrams is expensive. Scaling because a specific bottleneck has a clear cost is engineering."] }
    ]}
    takeaway="Build for the next credible stage of the product, while keeping the boundaries clean enough that the stage after that remains possible."
  />;
}

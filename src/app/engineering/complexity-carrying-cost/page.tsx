import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "Complexity Has a Carrying Cost",
  description: "Panda Engineering notes on the ongoing operational cost of frameworks, services, queues, databases, abstractions, and architectural choices."
};

export default function Page() {
  return <ArticlePage
    category="ENGINEERING / DECISIONS"
    title="Complexity Has a Carrying Cost"
    dek="Architecture is not only what a system can do. It is also everything the team must understand, operate, upgrade, secure, debug, and explain for as long as the system exists."
    readTime="6 MIN READ"
    sections={[
      { heading: "Every dependency creates a future obligation.", paragraphs: ["A service, queue, framework, database, build tool, or abstraction may be cheap to add in a pull request. The real cost arrives later through upgrades, incidents, onboarding, monitoring, local development, security patches, and integration behavior.", "That does not make dependencies bad. It means their value should exceed their lifetime cost."] },
      { heading: "Complexity can move without disappearing.", paragraphs: ["Breaking a module into a service removes some in-process coupling and adds networking, deployment, observability, failure handling, version compatibility, and operational ownership.", "Introducing a cache reduces some latency and adds invalidation, consistency, memory limits, and another failure mode. Every solution changes the shape of the problem."], points: ["Ask what complexity is removed", "List what new operational concerns appear", "Identify who will own those concerns", "Decide how failure will be diagnosed", "Revisit the choice when constraints change"] },
      { heading: "Abstraction should pay rent.", paragraphs: ["An abstraction is valuable when it makes common change easier, prevents a class of mistakes, or gives a boundary clear ownership. Abstraction for theoretical flexibility often forces every developer to understand two systems instead of one.", "Wait for repeated pressure before generalizing. Two similar cases are evidence; one imagined future case is speculation."] },
      { heading: "Simplification is real engineering work.", paragraphs: ["Removing a service, consolidating duplicated logic, deleting a configuration layer, or making one database authoritative can produce more long-term value than adding a new capability.", "The best architecture review sometimes ends with fewer moving parts than it started with."] }
    ]}
    takeaway="Treat complexity like a recurring operating expense. Add it when the value is clear, and keep looking for opportunities to retire it."
  />;
}

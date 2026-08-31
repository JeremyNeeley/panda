import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "Secure by Design Without Slowing Everything Down",
  description: "Panda Engineering notes on practical security boundaries, default-safe architecture, and integrating security into product engineering."
};

export default function Page() {
  return <ArticlePage
    category="SECURITY / PRODUCT"
    title="Secure by Design Without Slowing Everything Down"
    dek="Security becomes expensive when every feature has to rediscover the same trust boundaries. Good architecture makes the safe path the normal path."
    readTime="7 MIN READ"
    sections={[
      { heading: "Security questions are architecture questions.", paragraphs: ["Who can perform this action, which service may read this data, where secrets live, and what happens if this integration is compromised are not late-stage checklist items. They are system-design decisions.", "Answer them early and the implementation becomes simpler because developers are working inside known boundaries."] },
      { heading: "Centralize rules that should not vary.", paragraphs: ["Authorization, tenant isolation, input validation, secrets access, and audit behavior become dangerous when every feature implements them independently.", "Reusable enforcement points reduce both engineering repetition and the number of ways a new feature can accidentally bypass policy."], points: ["Default-deny access rules", "Server-side authorization", "Tenant-aware data access", "Typed and validated inputs", "Central secrets management", "Auditable privileged operations"] },
      { heading: "Threat modeling can be lightweight and useful.", paragraphs: ["You do not need a week-long ceremony for every button. Ask what assets matter, who crosses the boundary, what the attacker gains, and what assumptions the design depends on.", "A short architecture conversation before implementation often prevents more risk than a large scan after the design is fixed."] },
      { heading: "Security should produce engineering actions.", paragraphs: ["A finding is useful when the team knows what to change, why it matters, and how to verify the fix. Generic vulnerability language without system context creates backlog noise.", "Prioritize controls that remove whole classes of mistakes rather than patching one endpoint at a time."] }
    ]}
    takeaway="Security moves faster when it is expressed as clear system boundaries and reusable engineering controls."
  />;
}

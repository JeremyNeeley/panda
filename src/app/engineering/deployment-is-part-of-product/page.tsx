import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "Deployment Is Part of the Product",
  description: "Panda Engineering notes on CI/CD, observability, rollback, environments, and why delivery quality affects the customer experience."
};

export default function Page() {
  return <ArticlePage
    category="CLOUD / DELIVERY"
    title="Deployment Is Part of the Product"
    dek="Customers never see your pipeline, but they experience everything it makes possible: safer releases, faster fixes, fewer regressions, and shorter recovery when something goes wrong."
    readTime="6 MIN READ"
    sections={[
      { heading: "A feature is not finished when it works locally.", paragraphs: ["Production adds configuration, secrets, networking, data migrations, external services, traffic, monitoring, and failure conditions that local development does not reproduce automatically.", "Definition of done should include how the change is built, deployed, observed, and reversed."] },
      { heading: "Repeatability is a reliability feature.", paragraphs: ["Manual releases are not inherently bad, but undocumented or person-dependent releases create hidden variability. Automation turns the release path into something reviewable and reproducible.", "The same build, validation, and environment rules should produce the same kind of artifact every time."], points: ["Automated tests and quality gates", "Versioned configuration", "Repeatable builds", "Controlled migrations", "Documented rollback paths"] },
      { heading: "Observability closes the delivery loop.", paragraphs: ["A deployment system that tells you only whether the command completed cannot tell you whether customers are healthy. Logs, metrics, traces, and business signals are how the team learns whether the release actually worked.", "The faster a team can distinguish a code defect from infrastructure, data, dependency, or configuration failure, the faster it can recover."] },
      { heading: "Rollback is architecture, not a button.", paragraphs: ["Code may be reversible while database changes, external side effects, or message formats are not. Safe rollback requires compatibility thinking before deployment.", "Sometimes forward-fixing is safer than reverting. The important part is knowing which path exists before production is already broken."] }
    ]}
    takeaway="The path from commit to healthy production is part of the system you are delivering. Engineer it accordingly."
  />;
}

import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/portfolio/ServiceDetailPage";

export const metadata: Metadata = {
  title: "AI & Automation Services",
  description: "AI agents, RAG, document intelligence, workflow automation, and production AI systems from Panda Digital Systems."
};

export default function AiAutomationServicePage() {
  return <ServiceDetailPage
    eyebrow="SERVICE / AI & AUTOMATION"
    title="AI connected to real work."
    copy="Assistants, agents, retrieval systems, document intelligence, and workflow automation designed around real data, permissions, tools, evaluation, and human operations."
    inquiryHref="/start-project?type=automate&service=AI%20%26%20automation"
    starting="$2,500"
    bestFor={["Support and knowledge workflows", "Document-heavy operations", "Repetitive research or triage", "AI prototypes that need production discipline"]}
    outcomes={["Useful retrieval and grounding", "Bounded tool or API use", "Clear human escalation", "Repeatable evaluation and monitoring"]}
    capabilities={[
      { title: "AI Assistants", copy: "Context-aware assistants connected to the information and systems people already use." },
      { title: "Agent Workflows", copy: "Structured multi-step AI behavior with explicit tools, stop conditions, failure paths, and human handoff." },
      { title: "RAG Systems", copy: "Ingestion, retrieval, metadata, permissions, grounding, and evaluation—not just a vector database." },
      { title: "Document Intelligence", copy: "Extraction, summarization, classification, routing, and review workflows around unstructured business information." },
      { title: "Workflow Automation", copy: "Connect existing systems and remove repetitive coordination where deterministic automation or AI genuinely helps." },
      { title: "AI Evaluation", copy: "Test sets, operational metrics, failure analysis, grounding checks, and behavior reviews before confident language becomes hidden risk." }
    ]}
    approach={[
      { code: "01", title: "Find the decision point", copy: "Identify where information, judgment, repetition, or handoff is actually slowing the workflow." },
      { code: "02", title: "Separate AI from rules", copy: "Use deterministic software for deterministic behavior and models where ambiguity or language understanding adds value." },
      { code: "03", title: "Bound actions", copy: "Define what tools the system can call, what inputs are valid, and where human approval or escalation is required." },
      { code: "04", title: "Evaluate continuously", copy: "Measure retrieval, grounding, workflow correctness, latency, cost, and real user outcomes—not demo fluency." }
    ]}
    proof={[
      { eyebrow: "WORK / AI", title: "Enterprise AI Support Agent", copy: "Retrieval, troubleshooting, tools, APIs, escalation, and evaluation treated as one operating system.", href: "/work/enterprise-ai-support-agent" },
      { eyebrow: "ENGINEERING / AI", title: "Why AI Agents Fail Outside the Demo", copy: "A field note on the operational layers that separate prototypes from dependable systems.", href: "/engineering/ai-agents-production" }
    ]}
  />;
}

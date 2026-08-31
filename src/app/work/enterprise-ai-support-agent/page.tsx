import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteriorHero } from "@/components/portfolio/InteriorHero";
import { SectionCTA } from "@/components/portfolio/SectionCTA";
import { CaseStudyDecision } from "@/components/portfolio/CaseStudyDecision";
import { CaseStudyNav } from "@/components/portfolio/CaseStudyNav";

export const metadata: Metadata = {
  title: "Enterprise AI Support Agent",
  description: "A Panda Digital Systems case study in retrieval, troubleshooting workflows, tool interaction, API integration, and human escalation."
};

export default function EnterpriseAiSupportAgentPage() {
  return (
    <main>
      <Header />
      <InteriorHero
        eyebrow="CASE STUDY / AI & INTELLIGENT SYSTEMS"
        title="Enterprise AI Support Agent"
        copy="A production-oriented support architecture designed to investigate problems, retrieve context, interact with tools, and escalate responsibly—not simply produce chat responses."
        action={{ label: "Discuss an AI System", href: "/start-project?type=automate&service=AI%20%26%20automation" }}
        secondary={{ label: "Back to Work", href: "/work" }}
      />
      <section className="section shell case-overview">
        <div className="case-summary">
          <p className="eyebrow">THE CHALLENGE</p>
          <h2>Support automation has to survive real operations.</h2>
          <p>A useful enterprise support agent needs more than a model and a prompt. It must retrieve the right knowledge, preserve context, respect boundaries, use tools safely, communicate uncertainty, and know when the workflow belongs with a person.</p>
        </div>
        <aside className="case-facts">
          <div><span>FOCUS</span><strong>Support operations</strong></div>
          <div><span>SYSTEM</span><strong>Retrieval + tools + escalation</strong></div>
          <div><span>DISCIPLINES</span><strong>AI · APIs · Automation</strong></div>
          <div><span>APPROACH</span><strong>Production-oriented</strong></div>
        </aside>
      </section>
      <section className="section section-contrast">
        <div className="shell architecture-flow">
          <p className="eyebrow">SYSTEM VIEW</p>
          <h2>Conversation is only the visible layer.</h2>
          <div className="flow-row">
            {[
              ["01", "Request", "User context and issue"],
              ["02", "Retrieve", "Relevant knowledge and history"],
              ["03", "Reason", "Structured troubleshooting path"],
              ["04", "Act", "Approved tools and APIs"],
              ["05", "Escalate", "Human handoff when needed"]
            ].map(([code, title, copy]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section shell case-sections">
        <article><p className="eyebrow">KNOWLEDGE</p><h2>Retrieve what matters, not everything that matches.</h2><p>Support knowledge can be fragmented across documentation, runbooks, product information, tickets, and operational context. Retrieval should be shaped around relevance, recency, permissions, and the question being investigated.</p></article>
        <article><p className="eyebrow">TOOLS</p><h2>Tool use needs boundaries.</h2><p>API and tool integration turns an assistant into an operational system. That also means every action needs explicit capabilities, validated inputs, clear failure handling, and an authorization model that does not assume the model itself is a security boundary.</p></article>
        <article><p className="eyebrow">ESCALATION</p><h2>Knowing when not to automate is part of the design.</h2><p>Some requests are ambiguous, high-impact, under-documented, or simply better handled by a person. Good escalation preserves context so a human does not have to restart the investigation from zero.</p></article>
        <article><p className="eyebrow">EVALUATION</p><h2>A demo answer is not a reliability metric.</h2><p>Production AI needs repeatable evaluation across retrieval quality, factual grounding, workflow correctness, tool behavior, failure modes, and user outcomes. The system should expose where it is uncertain instead of hiding uncertainty behind confident language.</p></article>
      </section>
      <CaseStudyDecision
        proof={[
          { label: "SYSTEM", value: "5 layers", detail: "Request, retrieval, reasoning, approved action, and escalation are treated as separate operating concerns." },
          { label: "OPERATIONS", value: "Human-aware", detail: "Escalation is designed into the workflow rather than bolted on after the model fails." },
          { label: "RISK", value: "Bounded tools", detail: "Tool access is modeled as explicit capabilities with validated inputs and failure handling." }
        ]}
        delivered={[
          "Retrieval and grounding architecture shaped around relevance, recency, and permissions",
          "Structured troubleshooting flow instead of unconstrained answer generation",
          "Tool and API boundaries for approved operational actions",
          "Human escalation that preserves investigation context",
          "Evaluation criteria for grounding, workflow correctness, tool behavior, and failure modes"
        ]}
        fit={[
          "Your support team works across fragmented documentation or operational systems",
          "An AI assistant needs to call tools, APIs, or internal services safely",
          "You need a reliable handoff between automation and human specialists",
          "A demo chatbot exists, but production behavior, evaluation, or governance is still unclear"
        ]}
        inquiryHref="/start-project?type=automate&service=AI%20%26%20automation"
        inquiryLabel="Plan an AI system"
      />
      <CaseStudyNav next={{ label: "Multi-Tenant Product Engineering", href: "/work/multi-tenant-product-engineering" }} />
      <SectionCTA title="Building AI for a real workflow?" copy="We can help design the retrieval, integration, evaluation, security, and operational layers around the model." href="/start-project?type=automate&service=AI%20%26%20automation" />
      <Footer />
    </main>
  );
}

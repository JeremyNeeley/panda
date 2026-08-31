import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "Why AI Agents Fail Outside the Demo",
  description: "Panda Engineering field notes on the architecture and operational layers that separate an AI agent demo from a reliable system."
};

export default function Page() {
  return <ArticlePage
    category="AI / ARCHITECTURE"
    title="Why AI Agents Fail Outside the Demo"
    dek="The model is often the easiest part. Production agents fail at boundaries: permissions, state, tool behavior, retrieval, uncertainty, observability, and ownership."
    readTime="8 MIN READ"
    sections={[
      {
        heading: "A convincing demo hides the operational system.",
        paragraphs: [
          "A demo usually has clean context, a cooperative user, a small set of tools, and a developer nearby. Production has stale data, ambiguous requests, partial permissions, broken integrations, retries, timeouts, and users who do not phrase problems the way the prompt expects.",
          "The difference is not simply better prompting. It is the difference between a model call and an engineered workflow."
        ]
      },
      {
        heading: "Tool use turns language into authority.",
        paragraphs: [
          "Once an agent can create tickets, send messages, update records, query customer data, or trigger infrastructure, its output is no longer just text. The tool boundary becomes a security and reliability boundary.",
          "The model should request capabilities. The application should decide whether those capabilities are allowed, validate the arguments, execute the action, and record what happened."
        ],
        points: ["Explicit tool schemas", "Server-side authorization", "Input validation", "Idempotency where actions can repeat", "Auditable action results"]
      },
      {
        heading: "Retrieval quality is a systems problem.",
        paragraphs: [
          "RAG can fail even when embeddings are excellent. Documents may be outdated, duplicated, poorly chunked, missing metadata, or visible to the wrong user. Retrieval also has to answer a difficult question: which source is authoritative when two sources disagree?",
          "Good retrieval architecture includes ingestion discipline, metadata, permissions, freshness, evaluation, and a path for correcting knowledge—not only a vector index."
        ]
      },
      {
        heading: "State must be designed, not accumulated.",
        paragraphs: [
          "Agents often need conversation state, task state, user context, tool results, and business state. Treating all of that as one growing transcript makes systems expensive, hard to debug, and vulnerable to irrelevant or hostile context.",
          "Separate durable business state from conversational context. Summarize selectively. Store structured facts when the system needs structured facts."
        ]
      },
      {
        heading: "A reliable agent knows how to stop.",
        paragraphs: [
          "The best production behavior is sometimes escalation, clarification, or refusal to act. A system that always tries to complete the task can be less useful than one that exposes uncertainty early.",
          "Design explicit stop conditions: insufficient evidence, missing permission, conflicting sources, irreversible actions, policy boundaries, and repeated tool failure."
        ]
      }
    ]}
    takeaway="Treat the agent as a distributed application with a language model inside it—not as a language model with a few APIs attached."
  />;
}

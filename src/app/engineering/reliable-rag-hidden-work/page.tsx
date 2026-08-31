import type { Metadata } from "next";
import { ArticlePage } from "@/components/portfolio/ArticlePage";

export const metadata: Metadata = {
  title: "The Hidden Work Behind Reliable RAG",
  description: "Panda Engineering notes on ingestion, metadata, permissions, evaluation, freshness, and operations behind reliable retrieval-augmented generation."
};

export default function Page() {
  return <ArticlePage
    category="AI / OPERATIONS"
    title="The Hidden Work Behind Reliable RAG"
    dek="Retrieval quality is decided long before the model sees a prompt. Ingestion, authority, metadata, permissions, freshness, and evaluation determine whether the right evidence is even available."
    readTime="8 MIN READ"
    sections={[
      { heading: "A vector database is not a knowledge system.", paragraphs: ["Embeddings can find semantically similar text, but similarity is only one part of relevance. A useful system also needs to know which source is current, which version is authoritative, who may see it, and whether the content applies to this user or workflow.", "Without those controls, retrieval can be technically impressive and operationally wrong."] },
      { heading: "Ingestion quality becomes answer quality.", paragraphs: ["Documents arrive with duplicated headers, broken tables, stale attachments, inconsistent titles, hidden version history, and formatting that destroys structure when converted to text.", "Reliable ingestion preserves enough structure to support meaningful chunks and enough metadata to explain where every retrieved passage came from."], points: ["Stable document identifiers", "Source and ownership metadata", "Version and freshness timestamps", "Permission metadata", "Chunk relationships and section context"] },
      { heading: "Permissions must survive retrieval.", paragraphs: ["If a user cannot open a document directly, an AI system should not reveal its content simply because an embedding search found it. Authorization belongs in the retrieval path, not as a prompt instruction.", "The safest architecture filters or scopes candidates before sensitive text reaches the model."] },
      { heading: "Evaluation needs retrieval-level evidence.", paragraphs: ["An answer can sound correct even when retrieval selected the wrong source. Evaluate the pipeline in pieces: did the relevant evidence exist, was it retrieved, was the authoritative source ranked, and did the answer remain grounded in it?", "This makes failures diagnosable instead of reducing every problem to model quality."] },
      { heading: "Knowledge systems require maintenance.", paragraphs: ["Content changes, teams reorganize, permissions shift, products launch, and old procedures stop being true. A RAG system without freshness and deletion workflows slowly becomes a confident archive of yesterday."] }
    ]}
    takeaway="Reliable RAG is an information-operations system first and an LLM feature second."
  />;
}

import type { Metadata } from "next";
import Link from "next/link";
import { PandaMark } from "@/components/PandaMark";
import { ProjectForm } from "@/components/forms/ProjectForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell Panda Digital Systems what you are trying to build, automate, improve, secure, or modernize—from anywhere in the world."
};

export default function StartProjectPage() {
  return <main className="project-page">
    <header className="project-header shell">
      <Link href="/"><PandaMark /></Link>
      <Link href="/" className="close-project" aria-label="Return to homepage">×</Link>
    </header>
    <div className="project-shell shell"><ProjectForm /></div>
  </main>;
}

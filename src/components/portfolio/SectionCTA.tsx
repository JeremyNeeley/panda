import Link from "next/link";

export function SectionCTA({ title = "Have something difficult to build?", copy = "Tell us what you are trying to accomplish. We will help work through the technical path.", href = "/start-project" }: { title?: string; copy?: string; href?: string }) {
  return (
    <section className="section page-cta">
      <div className="shell page-cta-inner">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <Link href={href} className="button button-large">Start a Project <span>→</span></Link>
      </div>
    </section>
  );
}

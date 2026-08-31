import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Section = { heading: string; paragraphs: string[]; points?: string[] };

type Props = {
  category: string;
  title: string;
  dek: string;
  readTime: string;
  sections: Section[];
  takeaway: string;
};

export function ArticlePage({ category, title, dek, readTime, sections, takeaway }: Props) {
  return (
    <main>
      <Header />
      <article className="article-page">
        <header className="article-hero shell">
          <div className="article-meta"><span>{category}</span><span>{readTime}</span></div>
          <h1>{title}</h1>
          <p>{dek}</p>
        </header>
        <div className="article-layout shell">
          <aside className="article-rail">
            <span className="mono-label">PANDA ENGINEERING</span>
            <p>Field notes from building, reviewing, and reasoning about real systems.</p>
            <Link href="/engineering" className="text-link">All engineering notes <span>→</span></Link>
          </aside>
          <div className="article-body">
            {sections.map((section, index) => (
              <section key={section.heading}>
                <span className="article-section-index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
            <section className="article-takeaway">
              <p className="eyebrow">THE TAKEAWAY</p>
              <h2>{takeaway}</h2>
            </section>
          </div>
        </div>
      </article>
      <section className="section page-cta">
        <div className="shell page-cta-inner">
          <p className="eyebrow">NEED HELP WITH THE ACTUAL SYSTEM?</p>
          <h2>Bring us the engineering problem.</h2>
          <p>We can help turn the architecture, AI, security, or delivery question into a concrete technical plan and working implementation.</p>
          <Link href="/start-project" className="button button-large">Start a Project <span>→</span></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

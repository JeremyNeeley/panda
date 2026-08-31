import Link from "next/link";

type ProofItem = {
  label: string;
  value: string;
  detail: string;
};

type CaseStudyDecisionProps = {
  delivered: string[];
  fit: string[];
  proof: ProofItem[];
  inquiryHref: string;
  inquiryLabel?: string;
};

export function CaseStudyDecision({
  delivered,
  fit,
  proof,
  inquiryHref,
  inquiryLabel = "Build something like this"
}: CaseStudyDecisionProps) {
  return (
    <section className="section case-decision-section">
      <div className="shell">
        <div className="case-proof-grid" aria-label="Case study proof">
          {proof.map((item) => (
            <article key={`${item.label}-${item.value}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="case-decision-grid">
          <article>
            <p className="eyebrow">WHAT THIS WORK DELIVERS</p>
            <h2>Engineering that reaches the operating system, not just the interface.</h2>
            <ul className="case-check-list">
              {delivered.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article>
            <p className="eyebrow">A GOOD FIT WHEN</p>
            <h2>Your project has real constraints behind the visible product.</h2>
            <ul className="case-check-list">
              {fit.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link className="button button-primary case-decision-action" href={inquiryHref}>{inquiryLabel} <span>→</span></Link>
          </article>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

type CaseStudyNavProps = {
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
};

export function CaseStudyNav({ previous, next }: CaseStudyNavProps) {
  return (
    <nav className="case-study-nav shell" aria-label="Case study navigation">
      {previous ? (
        <Link href={previous.href} className="case-nav-link case-nav-prev">
          <span>← PREVIOUS</span>
          <strong>{previous.label}</strong>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={next.href} className="case-nav-link case-nav-next">
          <span>NEXT →</span>
          <strong>{next.label}</strong>
        </Link>
      ) : <div />}
    </nav>
  );
}

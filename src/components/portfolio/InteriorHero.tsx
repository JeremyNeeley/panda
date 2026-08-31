import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  copy: string;
  action?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function InteriorHero({ eyebrow, title, copy, action, secondary }: Props) {
  return (
    <section className="interior-hero">
      <div className="interior-grid-bg" aria-hidden="true" />
      <div className="shell interior-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {(action || secondary) && (
          <div className="hero-actions">
            {action && <Link className="button" href={action.href}>{action.label} <span>→</span></Link>}
            {secondary && <Link className="button button-secondary" href={secondary.href}>{secondary.label}</Link>}
          </div>
        )}
      </div>
    </section>
  );
}

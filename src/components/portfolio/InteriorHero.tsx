import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  copy: string;
  action?: { label: string; href: string };
  secondary?: { label: string; href: string };
  founder?: { name: string; nickname?: string; tagline?: string };
};

export function InteriorHero({ eyebrow, title, copy, action, secondary, founder }: Props) {
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
        {founder && (
          <div className="founder-signature" aria-label={`Founded and led by ${founder.name}${founder.nickname ? `, ${founder.nickname}` : ""}`}>
            <span className="founder-kicker">FOUNDED &amp; LED BY</span>
            <strong className="founder-name">{founder.name}</strong>
            {founder.nickname && <em className="founder-nickname">“{founder.nickname}”</em>}
            {founder.tagline && <span className="founder-tagline">{founder.tagline}</span>}
          </div>
        )}
      </div>
    </section>
  );
}

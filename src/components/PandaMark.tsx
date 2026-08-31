export function PandaMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-lockup" aria-label="Panda Digital Systems">
      <span className="panda-mark" aria-hidden="true">
        <span className="ear ear-left" />
        <span className="ear ear-right" />
        <span className="face">
          <span className="eye eye-left" />
          <span className="eye eye-right" />
        </span>
      </span>
      <span className="brand-copy">
        <strong>{compact ? "PDS" : "PANDA DIGITAL"}</strong>
        {!compact && <small>SYSTEMS</small>}
      </span>
    </span>
  );
}

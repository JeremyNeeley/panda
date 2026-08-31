export type WorkVisualVariant = "ai" | "product" | "cloud" | "experimental";

export function WorkVisual({ variant }: { variant: WorkVisualVariant }) {
  if (variant === "ai") {
    return (
      <div className="proof-visual proof-visual-ai" aria-hidden="true">
        <div className="proof-toolbar"><span>SUPPORT_AGENT</span><span>LIVE SYSTEM</span></div>
        <div className="ai-flow">
          <div className="ai-column">
            <span className="visual-label">REQUEST</span>
            <div className="message-line wide" /><div className="message-line" /><div className="message-line short" />
          </div>
          <div className="flow-connector">→</div>
          <div className="ai-column ai-core">
            <span className="visual-label">RETRIEVE + REASON</span>
            <div className="ai-orbit"><i /><i /><b /></div>
          </div>
          <div className="flow-connector">→</div>
          <div className="ai-column">
            <span className="visual-label">ACT / ESCALATE</span>
            <div className="tool-chip">API TOOL</div><div className="tool-chip muted">HUMAN</div>
          </div>
        </div>
        <div className="proof-status-row"><span>KNOWLEDGE: SCOPED</span><span>TOOLS: BOUNDED</span><span>ESCALATION: READY</span></div>
      </div>
    );
  }

  if (variant === "product") {
    return (
      <div className="proof-visual proof-visual-product" aria-hidden="true">
        <div className="product-window">
          <div className="window-rail"><i /><i /><i /><i /></div>
          <div className="window-main">
            <div className="mini-nav"><span /><span /><span /></div>
            <div className="metric-row"><b /><b /><b /></div>
            <div className="tenant-grid"><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
        <div className="product-footer"><span>ROLE-AWARE</span><span>MULTI-TENANT</span><span>API-DRIVEN</span></div>
      </div>
    );
  }

  if (variant === "cloud") {
    return (
      <div className="proof-visual proof-visual-cloud" aria-hidden="true">
        <div className="pipeline-labels"><span>COMMIT</span><span>TEST</span><span>BUILD</span><span>DEPLOY</span></div>
        <div className="pipeline-track"><i /><i /><i /><i /></div>
        <div className="cloud-nodes">
          <div><span>API</span></div><div><span>WORKER</span></div><div><span>DATA</span></div>
        </div>
        <div className="cloud-observe"><span>HEALTH</span><b /><b /><b /><b /><b /></div>
      </div>
    );
  }

  return (
    <div className="proof-visual proof-visual-experimental" aria-hidden="true">
      <div className="experimental-grid" />
      <div className="math-orbit orbit-one" /><div className="math-orbit orbit-two" /><div className="math-orbit orbit-three" />
      <div className="math-core" />
      <span className="dimension-label dimension-a">8D STATE</span>
      <span className="dimension-label dimension-b">3D PROJECTION</span>
    </div>
  );
}

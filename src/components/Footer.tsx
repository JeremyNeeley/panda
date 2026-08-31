import Link from "next/link";
import { PandaMark } from "./PandaMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <PandaMark />
          <p className="footer-tagline">Build. Automate. Secure.</p>
        </div>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/lab">Panda Lab</Link>
          <Link href="/engineering">Panda Engineering</Link>
          <Link href="/about">About</Link>
          <Link href="/start-project">Start a Project</Link>
          <a href="https://github.com/JeremyNeeley" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <div className="footer-meta">
          <span>PandaDigital.dev</span>
          <span>© {new Date().getFullYear()} Panda Digital Systems</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { PandaMark } from "./PandaMark";

const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Lab", "/lab"],
  ["Engineering", "/engineering"],
  ["About", "/about"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="brand-link" onClick={() => setOpen(false)}>
          <PandaMark />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/start-project" className="button button-small header-cta">
          Start a Project <span aria-hidden="true">→</span>
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/start-project" className="button" onClick={() => setOpen(false)}>
            Start a Project <span aria-hidden="true">→</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

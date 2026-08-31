import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SystemField } from "@/components/SystemField";

const problems = [
  ["BUILD", "I need to build something.", "New products, applications, internal platforms, SaaS, mobile experiences, and specialized software."],
  ["AUTOMATE", "I need to automate something.", "Manual workflows, support operations, documents, repetitive decisions, and disconnected systems."],
  ["MODERNIZE", "I need to improve something.", "Slow, fragile, outdated, difficult-to-maintain systems that are holding the business back."],
  ["SECURE", "I need to protect something.", "Applications, APIs, authentication, deployments, data flows, and production architecture."]
];

const capabilities = [
  { code: "01", title: "Software Engineering", copy: "Custom applications and digital systems engineered around real business requirements.", tags: ["Web & SaaS", "Backends", "APIs", "Internal Tools"] },
  { code: "02", title: "AI & Automation", copy: "Intelligent tools and workflows that reduce repetitive work and make information useful.", tags: ["AI Agents", "RAG", "Documents", "Automation"] },
  { code: "03", title: "Product Development", copy: "From early product thinking to working MVPs, mobile products, and production systems.", tags: ["MVP", "Mobile", "Product", "Modernization"] },
  { code: "04", title: "Cybersecurity", copy: "Security engineering that challenges assumptions before those assumptions become incidents.", tags: ["AppSec", "API Security", "Auth", "Hardening"] },
  { code: "05", title: "Cloud & Systems", copy: "Reliable foundations for software that needs to deploy, integrate, scale, and evolve.", tags: ["Cloud", "DevOps", "Data", "Distributed Systems"] }
];

const work = [
  ["AI / INTELLIGENT SYSTEMS", "Systems that retrieve, reason, route, automate, and support real operational workflows.", "AI · AUTOMATION · KNOWLEDGE · APIs"],
  ["SOFTWARE / PRODUCT", "Digital products engineered across interface, application logic, data, and infrastructure.", "WEB · MOBILE · SaaS · BACKEND"],
  ["SECURITY / SYSTEMS", "Application analysis, architecture review, secure development, and production hardening.", "APPSEC · AUTH · CLOUD · HARDENING"]
];

const articles = [
  ["AI / ARCHITECTURE", "Why AI Agents Fail Outside the Demo", "Where prototypes break when they meet permissions, messy data, users, and real business operations."],
  ["SECURITY / ENGINEERING", "Authentication Is Not Authorization", "Why proving who someone is does not answer what they should be allowed to do."],
  ["SYSTEMS / ARCHITECTURE", "When Microservices Make Your Product Worse", "A practical look at when distribution creates more operational complexity than value."]
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <SystemField />
        <div className="hero-glow" />
        <div className="shell hero-inner">
          <p className="eyebrow">PANDA DIGITAL SYSTEMS / ENGINEERING</p>
          <h1><span>Build.</span><span>Automate.</span><span>Secure.</span></h1>
          <p className="hero-lede">Digital systems engineered for what comes next.</p>
          <p className="hero-copy">We design software, intelligent automation, secure products, and technical infrastructure for ambitious teams.</p>
          <div className="hero-actions">
            <Link href="/start-project" className="button">Start a Project <span>→</span></Link>
            <Link href="#work" className="button button-secondary">Explore Our Work</Link>
          </div>
          <div className="hero-categories" aria-label="Capabilities">
            {['SOFTWARE', 'AI', 'PRODUCT', 'SECURITY', 'CLOUD'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Engineering disciplines">
        <div className="signal-track">
          {['WEB & SaaS', 'AI SYSTEMS', 'MOBILE', 'APIs', 'CLOUD', 'AUTOMATION', 'SECURITY', 'DATA', 'WEB & SaaS', 'AI SYSTEMS', 'MOBILE', 'APIs'].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </section>

      <section className="section shell" id="about">
        <div className="section-heading split-heading">
          <p className="eyebrow">START WITH THE PROBLEM</p>
          <div>
            <h2>What are you trying to solve?</h2>
            <p>Clients do not need to arrive with a framework, cloud provider, or architecture diagram. Start with the outcome.</p>
          </div>
        </div>
        <div className="problem-grid">
          {problems.map(([label, title, copy]) => (
            <article className="problem-card" key={label}>
              <span className="mono-label">{label}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Link href="/start-project" className="text-link">Tell us about it <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contrast" id="services">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">CAPABILITIES / 05</p>
            <h2>Engineering across the whole digital system.</h2>
            <p>Focused capabilities that can stand alone or work together as one delivery team.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.code}>
                <div className="card-topline"><span>{capability.code}</span><span className="status-dot" /></div>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
                <div className="tag-row">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <Link href="/start-project" className="text-link">Explore capability <span>→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading split-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <div>
            <h2>Different problems require different engineering.</h2>
            <p>Our portfolio is organized around the kinds of systems we solve—not around one technology or one project.</p>
          </div>
        </div>
        <div className="work-stack">
          {work.map(([title, copy, tags], index) => (
            <article className="work-card" key={title}>
              <span className="work-index">0{index + 1}</span>
              <div>
                <p className="mono-label">{title}</p>
                <h3>{copy}</h3>
                <span className="work-tags">{tags}</span>
              </div>
              <span className="work-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section lab-section" id="lab">
        <div className="shell lab-grid">
          <div className="lab-intro">
            <p className="eyebrow">PANDA LAB / EXPERIMENTAL SYSTEMS</p>
            <h2>We experiment before clients ask for it.</h2>
            <p>Panda Lab is where technical curiosity becomes working prototypes—AI, automation, security, developer tools, data, interfaces, and emerging technology.</p>
            <Link href="/start-project" className="button button-secondary">Build with us <span>→</span></Link>
          </div>
          <div className="lab-console" aria-label="Panda Lab experiment preview">
            <div className="console-bar"><span>LAB / 001</span><span>STATUS: ACTIVE</span></div>
            <div className="console-visual">
              <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="core-node" />
            </div>
            <div className="console-copy">
              <span className="mono-label">SYSTEM EXPLORATION</span>
              <h3>Small experiments. Serious learning.</h3>
              <p>Prototype the risky idea early, understand its boundaries, then decide what deserves production engineering.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="engineering">
        <div className="section-heading split-heading">
          <p className="eyebrow">PANDA ENGINEERING / NOTES FROM THE FIELD</p>
          <div><h2>Ideas from building real systems.</h2><p>Broad technical thinking across software, AI, security, infrastructure, product, data, and emerging technology.</p></div>
        </div>
        <div className="article-grid">
          {articles.map(([category, title, copy]) => (
            <article className="article-card" key={title}>
              <span className="mono-label">{category}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="text-link muted-link">Article coming soon</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section principles section-contrast">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">HOW WE THINK</p><h2>Good engineering starts before the code.</h2></div>
          <div className="principle-grid">
            {[
              ["Solve the problem first.", "The newest technology is not automatically the right technology."],
              ["Build the whole system.", "Interface, backend, data, infrastructure, and security influence one another."],
              ["Design for change.", "Good architecture gives the business room to evolve without turning every change into a rewrite."],
              ["Question assumptions.", "Review decisions, failure modes, and security boundaries before problems become expensive."]
            ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner">
          <p className="eyebrow">START A PROJECT</p>
          <h2>Have something difficult to build?</h2>
          <h3>Good.</h3>
          <p>Tell us what you are trying to accomplish. We will start with the problem and work forward from there.</p>
          <Link href="/start-project" className="button button-large">Start Your Project <span>→</span></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

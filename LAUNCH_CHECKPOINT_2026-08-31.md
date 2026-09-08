# Panda Digital Systems — Launch Checkpoint

**Saved:** 2026-08-31 (user local date)
**Project folder:** Panda technologies System
**Brand:** Panda Digital Systems
**Target domain:** PandaDigital.dev

## Current state

The portfolio source is complete enough for the final public-launch pass and is saved with full Git history.

### Portfolio coverage

- Worldwide/remote-first homepage
- Work / case studies
  - Enterprise AI Support Agent
  - Multi-Tenant Product Engineering
  - Cloud & Delivery Systems
  - U App / experimental mobile engineering
- Five dedicated service pages
  - Software Engineering
  - AI & Automation
  - Product Development
  - Cybersecurity
  - Cloud & Systems
- Panda Lab with System Readiness Map
- Panda Engineering with eight published field notes
- About, Privacy, Start a Project, sitemap, robots, manifest and social metadata
- Context-aware international project intake with country/region and time-zone support
- Lead API, Turnstile verification path, rate limiting, Supabase persistence path and optional Resend notification path

## Latest Git commits

- `61331a7 feat: publish complete Panda Engineering library`
- `68c8261 feat: add dedicated client-ready service pages`
- `7284910 feat: turn case studies into client decision tools`
- `7889c89 feat: make portfolio worldwide client-ready`
- `93d8670 feat: deepen portfolio proof and contextual intake`
- `f2e1db2 feat: complete PandaDigital v1 release candidate`

## Validation status

Latest portfolio pass reported:

- 26 public page routes
- 52 TypeScript / TSX files
- zero TypeScript syntax diagnostics in the offline parser/transpile check
- zero missing local imports
- zero broken internal links in the release audit

Full `npm install`, Next.js build, lint and typecheck were not completed in the build environment because npm registry access was unavailable there. CI remains the production verification path after dependencies are available.

## Domain / public-launch status

As of 2026-08-31, `pandadigital.dev` was still available for purchase at **$9.99 USD for one year** through Vercel.

The domain is **not registered yet**, which is why opening `pandadigital.dev` currently returns `ERR_NAME_NOT_RESOLVED`.

Several temporary Vercel production deployments were created during testing, but anonymous public access was not independently verified because the connected Vercel deployment/project APIs exposed inconsistent project visibility and Deployment Protection behavior. Do not treat those long Vercel URLs as the final public launch.

## Final launch runbook after domain purchase

1. Register `pandadigital.dev`.
2. Attach `pandadigital.dev` to the production Panda Digital Systems project.
3. Add `www.pandadigital.dev` and redirect `www` to the apex domain.
4. Ensure Vercel Authentication / Deployment Protection is disabled for Production.
5. Confirm DNS records are active and the domain resolves publicly.
6. Confirm HTTPS certificate is issued and valid.
7. Deploy the latest source from this checkpoint.
8. Run production build/typecheck/lint and release audit in an environment with npm registry access.
9. Configure required production environment variables for Supabase and Turnstile; configure Resend if email notifications are desired.
10. Test homepage, services, case studies, Panda Lab, Panda Engineering, and Start a Project from an incognito / logged-out browser.
11. Submit a real test lead and verify persistence, anti-spam verification and notification behavior.
12. Verify `robots.txt`, sitemap, metadata, social card and canonical URLs use `https://pandadigital.dev`.
13. Provide the final public URL: `https://pandadigital.dev`.

## Resume instruction

When the domain has been purchased, resume from this checkpoint and finish the public launch. Do not rebuild the portfolio from scratch.

## 2026-09-08 visual identity update

- Added a production founder signature to the Work hero at the requested lower-right position.
- Founder identity: **Jeremy Neeley** with nickname **“Panda”**.
- Styling uses a restrained metallic champagne-gold gradient, subtle gold glow, framing rules, and the line **ENGINEERING A BRIGHTER TOMORROW**.
- The signature collapses into normal responsive flow on tablet/mobile to avoid overlapping the hero copy or CTA.

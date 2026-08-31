# Panda Digital Systems — PandaDigital.dev

Portfolio and client-acquisition site for **Panda Digital Systems**.

> **Build. Automate. Secure.**

The v1 is intentionally broad: software engineering, AI and automation, product development, cybersecurity, and cloud/systems engineering. Individual projects are evidence under the brand rather than the identity of the company.

## v1 routes

- `/` — homepage and positioning
- `/work` — selected work and engineering experience
- `/services` — commercial capabilities and starting engagement levels
- `/lab` — Panda Lab
- `/lab/system-readiness` — working interactive System Readiness Map
- `/engineering` — Panda Engineering field notes
- `/about` — company principles and public engineering identity
- `/privacy` — v1 inquiry-data privacy description
- `/start-project` — secure multi-step project intake

## Stack

- Next.js 16.3.3
- React 19.2.7
- TypeScript 5.8
- Zod validation
- CSS design tokens and responsive components
- Supabase REST path for server-only lead persistence
- Cloudflare Turnstile integration
- Resend transactional-email integration

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The first successful install should generate `package-lock.json`. Commit it, then prefer `npm ci` in CI/deployment environments.

## Release checks

The dependency-free audit works before package installation:

```bash
npm run audit:release
```

Once dependencies are installed:

```bash
npm run check
```

`npm run check` runs the release audit, TypeScript typecheck, ESLint, and the production Next.js build.

## Lead-intake security posture

The public v1 intentionally has no public registration, password, or client account surface. The project-intake route includes:

- server-side schema validation
- same-origin enforcement
- request-size checks
- honeypot handling
- defense-in-depth local throttling
- Cloudflare Turnstile verification in production
- server-only Supabase service-role writes
- no public read policy on the leads table
- optional transactional email through Resend

Production intentionally refuses lead storage when required server-side persistence is not configured.

## Production configuration

1. Run `supabase/schema.sql` in the production Supabase project.
2. Set `SUPABASE_URL` and server-only `SUPABASE_SERVICE_ROLE_KEY`.
3. Create a Cloudflare Turnstile widget and set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.
4. Add an edge/WAF rate limit for `/api/leads`.
5. Optionally configure `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `LEAD_NOTIFICATION_EMAIL`.
6. Review `/privacy` against final providers, jurisdiction, and business contact details.
7. Run the GitHub CI pipeline and require a green production build before deployment.

Never expose `SUPABASE_SERVICE_ROLE_KEY`, `TURNSTILE_SECRET_KEY`, or `RESEND_API_KEY` to client-side code.

## GitHub

Public engineering identity: `https://github.com/JeremyNeeley`

Target repository: `JeremyNeeley/panda`.

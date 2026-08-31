# Panda Digital Systems — PandaDigital.dev

Portfolio and client-acquisition site for **Panda Digital Systems**.

> Build. Automate. Secure.

## Stack

- Next.js 16.3.3
- React 19.2.7
- TypeScript
- Zod validation
- CSS design tokens and responsive components

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Security posture

The public v1 intentionally has no user registration or authentication. The project intake endpoint validates payloads server-side, includes a honeypot, rejects oversized submissions, and is structured for Turnstile/rate-limiting/database integrations before production use.

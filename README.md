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

## Production lead intake configuration

Production intentionally refuses to accept project submissions until the anti-bot and storage layers are configured.

1. Run `supabase/schema.sql` in the project database.
2. Set `SUPABASE_URL` and the server-only `SUPABASE_SERVICE_ROLE_KEY`.
3. Create a Cloudflare Turnstile widget and set both `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.
4. Optionally set Resend credentials for applicant confirmation and internal lead notifications.
5. Add a durable edge/WAF rate-limit rule for `/api/leads`; the in-process limiter in this repository is defense-in-depth for a single runtime, not a substitute for distributed rate limiting.

Never expose `SUPABASE_SERVICE_ROLE_KEY`, `TURNSTILE_SECRET_KEY`, or `RESEND_API_KEY` to client-side code.

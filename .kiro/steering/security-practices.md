# ELOOX Security Practices

## Principles

1. **Least privilege** – every component has access only to what it needs.
2. **Defence in depth** – multiple independent layers of security.
3. **Fail secure** – on error, deny access; never default to open.
4. **Never trust input** – validate and sanitise everything from the client.

## Authentication (admin application)

- Admin login uses a username + password checked against a bcrypt hash stored in a Worker secret.
- On successful login, issue a signed JWT (HS256) with a 24-hour expiry.
- JWT secret is a 256-bit random value stored in `ADMIN_JWT_SECRET` Worker secret.
- Refresh tokens are not implemented in V1 — force re-login after expiry.
- All admin API routes must verify the JWT on every request.
- Never store the JWT in `localStorage` — use `httpOnly` cookies or in-memory state with a short session.
- Lock account after 10 consecutive failed login attempts within 15 minutes (implement in Worker).

## Public form protection

- All public forms (booking, contact) must include a Cloudflare Turnstile token.
- Turnstile token must be verified server-side before any data is written to D1.
- Rate-limit form submission endpoints: max 5 requests per IP per 10 minutes.
- Implement rate limiting using the Worker with a D1-backed counter or Cloudflare's built-in rate limiting (free tier).

## Input validation and sanitisation

- All API inputs validated with Zod schemas before any business logic.
- Never pass raw user input to SQL — use D1's parameterised query API exclusively.
- Strip HTML from all text inputs to prevent stored XSS.
- Validate email addresses against RFC 5321 format with Zod `z.string().email()`.
- File uploads are not permitted in V1.

## CORS

- Set `Access-Control-Allow-Origin` to the production domain only.
- In development, allow `http://localhost:5173`.
- Never set `Access-Control-Allow-Origin: *` on authenticated endpoints.

## HTTP security headers

All responses from the Worker must include:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{nonce}' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.resend.com https://www.googleapis.com;
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Secrets management

- All secrets stored in Cloudflare Worker secrets — never in source code, `wrangler.toml`, or committed files.
- `.dev.vars` is gitignored and contains only local development secrets.
- Rotate all secrets if any are accidentally committed.
- Secrets list: `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `ADMIN_JWT_SECRET`, `ADMIN_PASSWORD_HASH`, `GOOGLE_CALENDAR_CLIENT_SECRET`, `GOOGLE_CALENDAR_REFRESH_TOKEN`.

## Cloudflare Turnstile

- Verify every token server-side via `https://challenges.cloudflare.com/turnstile/v1/siteverify`.
- Reject submissions where `success: false` with HTTP 422.
- Do not cache or reuse Turnstile tokens.

## Email security

- Resend API key is a Worker secret — never exposed to the client.
- All outbound emails use a verified domain (configure DKIM, SPF, DMARC on the sending domain).
- Do not include user-submitted content verbatim in email subjects to prevent header injection.

## Admin application

- Admin application is served at `/admin` and requires authentication for all routes.
- No admin routes or data are accessible without a valid JWT.
- Admin session is terminated on browser close (session cookie, not persistent).

## Dependency security

- Pin all dependencies to exact versions in `package.json`.
- Run `npm audit` as part of CI.
- Review `npm audit` output before every release; block release on high/critical vulnerabilities.

## Data retention

- Consultation requests and leads retained indefinitely in V1 (no PII deletion workflow yet).
- Do not store sensitive personal data beyond what is operationally required.
- In a future version, implement a GDPR-compliant data deletion workflow.

## Incident response

- If a secret is exposed: rotate immediately via `wrangler secret put`, invalidate all sessions, review logs.
- If D1 data is accessed unauthorised: review Worker access logs in Cloudflare dashboard, rotate secrets.

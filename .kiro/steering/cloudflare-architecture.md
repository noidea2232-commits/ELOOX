# ELOOX Cloudflare Architecture

## Platform overview

All infrastructure runs on Cloudflare. No Supabase, Firebase, Vercel, Render, or other paid third-party infrastructure may be introduced.

## Services in use

| Service | Purpose | Free tier limit |
|---|---|---|
| Cloudflare Workers | API backend and SSR | 100,000 req/day |
| Cloudflare Workers Static Assets | Serving the React SPA | Unlimited requests |
| Cloudflare D1 | SQLite database | 5 GB storage, 5M rows read/day, 100k writes/day |
| Cloudflare Turnstile | Bot protection on forms | Unlimited (free) |
| Cloudflare Pages (optional fallback) | Static hosting if needed | Unlimited |

## Build and deployment

- Use the **Cloudflare Vite plugin** (`@cloudflare/vite-plugin`) to integrate Workers into the Vite build.
- Single Vite project produces both the React SPA (static assets) and the Worker (API).
- Deploy with `wrangler deploy` — target `main` branch only.
- Preview deployments from feature branches use `wrangler deploy --env preview`.

## wrangler.toml conventions

```toml
name = "eloox"
main = "worker/index.ts"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[site]
bucket = "./dist/client"

[[d1_databases]]
binding = "DB"
database_name = "eloox-prod"
database_id = "<prod-db-id>"

[[d1_databases]]
binding = "DB"
database_name = "eloox-dev"
database_id = "<dev-db-id>"
environment = "preview"
```

## D1 database conventions

- Run migrations with `wrangler d1 migrations apply`.
- Migration files live in `worker/db/migrations/` with numeric prefixes: `0001_initial.sql`.
- Never alter production schema directly — always use migrations.
- Use `wrangler d1 execute --local` during development.
- Keep queries simple — D1 is SQLite; avoid complex joins and window functions where possible.
- Index foreign keys and columns used in `WHERE` clauses.

## Cloudflare Turnstile integration

- Render the Turnstile widget on all public forms (booking, contact).
- Server-side verification: POST the `cf-turnstile-response` token to `https://challenges.cloudflare.com/turnstile/v1/siteverify`.
- Reject any form submission that fails Turnstile verification with HTTP 422.
- Turnstile site key: stored in public environment variable `VITE_TURNSTILE_SITE_KEY`.
- Turnstile secret key: stored in Cloudflare Worker secret `TURNSTILE_SECRET_KEY`.

## Worker request routing

The Worker acts as the API layer. Static assets are served by Cloudflare's asset pipeline.

```
/* static assets → Workers Static Assets (served from /dist/client)
/api/* → Worker handlers
```

Use `itty-router` or a minimal hand-rolled router in the Worker — no Express, no Hono (unless adopted team-wide).

## Environment bindings

Bindings available in `Env` interface:
```typescript
interface Env {
  DB: D1Database;
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  GOOGLE_CALENDAR_CLIENT_ID: string;
  GOOGLE_CALENDAR_CLIENT_SECRET: string;
  GOOGLE_CALENDAR_REFRESH_TOKEN: string;
  ADMIN_JWT_SECRET: string;
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD_HASH: string;
}
```

All secrets are set via `wrangler secret put <NAME>` — never hardcoded.

## Free tier risk management

| Risk | Mitigation |
|---|---|
| D1 write limit (100k/day) | Cache read-heavy queries; batch writes |
| Worker request limit (100k/day) | Edge-cache static responses with `Cache-Control` |
| D1 storage (5 GB) | Paginate list endpoints; archive old records |
| No real-time capabilities | Use polling or long-poll for admin dashboard updates |

## Local development

```bash
# Start local dev server with Workers runtime
npx wrangler dev --local

# Or using Vite + Workers plugin
npm run dev
```

Local D1 state persists in `.wrangler/state/` (gitignored).

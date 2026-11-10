# ELOOX – System Architecture

**Version:** 1.0  
**Status:** Draft for review  
**Date:** 2026-11-10

---

## 1. Architecture overview

ELOOX is a **monorepo** delivering two applications — a public marketing website and a private admin SPA — from a single Vite + Cloudflare Workers project. There is no separate backend server. The Cloudflare Worker functions as both API gateway and application logic layer.

```
┌───────────────────────────────────────────────────────┐
│                   Cloudflare Edge                      │
│                                                       │
│  ┌─────────────────────────┐  ┌─────────────────────┐ │
│  │  Static Assets          │  │  Cloudflare Worker  │ │
│  │  (React SPA)            │  │  (API + SSR meta)   │ │
│  │                         │  │                     │ │
│  │  /                      │  │  /api/*             │ │
│  │  /about                 │  │                     │ │
│  │  /services/*            │  │  ┌───────────────┐  │ │
│  │  /admin/*               │  │  │  Cloudflare   │  │ │
│  │  ...                    │  │  │  D1 (SQLite)  │  │ │
│  └─────────────────────────┘  │  └───────────────┘  │ │
│                               │                     │ │
│                               │  External APIs:     │ │
│                               │  - Resend           │ │
│                               │  - Google Calendar  │ │
│                               │  - Turnstile verify │ │
│                               └─────────────────────┘ │
└───────────────────────────────────────────────────────┘
```

## 2. Application layers

### 2.1 Presentation layer (React SPA)

- Built with Vite, React 18, TypeScript, Tailwind CSS.
- Single-page application; routing handled client-side by React Router v6.
- Code-split by route for performance.
- Two logical sub-applications:
  - **Public website** – routes `/`, `/about`, `/services`, `/services/:slug`, `/industries`, `/solutions`, `/products`, `/work`, `/growth`, `/insights`, `/insights/:slug`, `/book`, `/contact`.
  - **Admin application** – routes `/admin/*` (protected by route guard).

### 2.2 API layer (Cloudflare Worker)

- TypeScript Worker with a lightweight router.
- Handles all `/api/*` requests.
- Responsibilities:
  - Input validation (Zod).
  - Authentication (JWT verification).
  - Business logic (booking workflow, CRM operations).
  - Database operations (D1).
  - External API calls (Resend, Google Calendar).
  - Turnstile token verification.
  - Rate limiting.
  - Security headers.

### 2.3 Data layer (Cloudflare D1)

- SQLite-compatible database.
- Access via D1 binding — no connection string, no exposed credentials.
- Schema managed by versioned migration files.
- Read by Worker only — never directly by the client.

## 3. Request flow

### Public form submission (e.g. booking)

```
Client → POST /api/booking
  → Worker: verify Turnstile token
  → Worker: validate input (Zod)
  → Worker: check duplicate (D1 query)
  → Worker: insert record (D1)
  → Worker: send admin notification (Resend)
  → Response: 201 { success: true }
```

### Admin booking approval

```
Admin client → PATCH /api/admin/bookings/:id/approve
  → Worker: verify JWT
  → Worker: validate transition
  → Worker: create Google Calendar event
  → Worker: send confirmation email to client (Resend)
  → Worker: update booking status (D1)
  → Response: 200 { success: true, event: { ... } }
```

### Admin login

```
Admin client → POST /api/admin/auth/login
  → Worker: verify password against bcrypt hash
  → Worker: issue signed JWT (24h)
  → Response: 200 { token: "..." }
```

## 4. External integrations

### 4.1 Resend

- Purpose: transactional email (admin notifications, client confirmations).
- Integration: Resend Node.js SDK called from Worker.
- Two email types:
  1. Admin notification – new consultation/contact submission.
  2. Client confirmation – booking approved.
- API key stored in Worker secret `RESEND_API_KEY`.

### 4.2 Google Calendar API

- Purpose: creating calendar events when admin approves a booking.
- Auth flow: OAuth 2.0 with offline access (refresh token stored as Worker secret).
- Flow: Worker uses refresh token to obtain access token, calls `events.insert` API.
- Calendar ID: configured admin's primary calendar.
- No real-time webhook callbacks in V1.

### 4.3 Cloudflare Turnstile

- Purpose: bot protection on all public forms.
- Flow: client renders widget, obtains token, includes in form POST, Worker verifies server-side.
- Site key: `VITE_TURNSTILE_SITE_KEY` (public, in Vite env).
- Secret key: `TURNSTILE_SECRET_KEY` (Worker secret).

## 5. Authentication architecture

### Admin authentication

```
Login → bcrypt verify → JWT sign (HS256, 24h, ADMIN_JWT_SECRET)
       → Client stores token in memory (or httpOnly cookie)
       → Every admin API request: Authorization: Bearer <token>
       → Worker middleware: verify JWT → inject claims → route handler
```

### Public API

- No authentication required.
- Protected by Turnstile on form endpoints.
- Rate limiting on write endpoints.

## 6. Deployment architecture

```
GitHub (main branch)
    ↓
GitHub Actions CI
    ↓ (npm run build)
wrangler deploy
    ↓
Cloudflare Workers + Static Assets (global edge)
    ↓
D1 (Cloudflare managed, replicated)
```

Preview environments deploy from feature branches to a Cloudflare `preview` environment with a separate D1 database.

## 7. Monorepo structure

```
/
├── src/                    # React application source
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── styles/
├── worker/                 # Cloudflare Worker source
│   ├── index.ts            # Worker entry point and router
│   ├── api/                # Route handler modules
│   ├── db/                 # D1 migrations and query helpers
│   └── middleware/         # Auth, rate limit, CORS, headers
├── public/                 # Static assets (favicon, robots.txt, sitemap)
├── docs/                   # Specifications (this directory)
├── .kiro/steering/         # Kiro steering files
├── vite.config.ts
├── wrangler.toml
├── tsconfig.json
└── package.json
```

## 8. Key technology decisions

| Decision | Choice | Rationale |
|---|---|---|
| Hosting | Cloudflare only | Zero infrastructure cost, global CDN, D1 included |
| Database | D1 (SQLite) | Free tier, Worker binding (no exposed connection string), sufficient for V1 |
| Auth | JWT (HS256) | Stateless, no session store needed, works in Workers |
| Email | Resend | Simple REST API, free tier (3,000 emails/month) |
| Forms | React Hook Form + Zod | Type-safe validation shared between client and Worker |
| Animation | Framer Motion | Best-in-class React animation, motion preference support |
| Styling | Tailwind CSS | Utility-first, eliminates unused CSS, consistent design tokens |

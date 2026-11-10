# ELOOX – Project Requirements

**Version:** 1.0  
**Status:** Draft for review  
**Date:** 2026-11-10

---

## 1. Project overview

ELOOX requires a public-facing marketing website and a private admin application, delivered as a single Vite + React + TypeScript project deployed on Cloudflare infrastructure.

### 1.1 Business objectives

1. Establish ELOOX as a credible international technology and growth company.
2. Generate qualified consultation requests (the primary conversion action).
3. Present services, industries, and solutions clearly to decision-makers.
4. Enable the ELOOX team to manage leads, bookings, projects, and content through a private admin application.

### 1.2 Non-goals (V1)

- Self-serve client portals.
- Automated payment or billing.
- Real-time chat or support widgets.
- Multi-language localisation.
- GDPR data deletion workflows (tracked for V2).

---

## 2. Functional requirements

### 2.1 Public website

#### FR-PW-01 — Navigation
- Sticky top navigation with logo, main nav links, and a primary CTA button ("Book a Meeting").
- Mobile: hamburger icon triggers a full-screen slide-in drawer.
- Active page highlighted in navigation.

#### FR-PW-02 — Home page
- Hero section with headline, tagline, and dual CTAs.
- Services overview (cards linking to service detail pages).
- Industries served.
- Division spotlight (Services vs Products).
- Social proof section (logos only — no fabricated testimonials).
- CTA section linking to Book a Meeting.

#### FR-PW-03 — About page
- Company mission, vision, and the ELOOX brand expansion story.
- Two divisions explained (Services, Products).
- Team section: placeholder structure only in V1 — do not fabricate profiles.

#### FR-PW-04 — Services page
- Overview grid of all five service categories.
- Each card links to an individual service detail page.

#### FR-PW-05 — Service detail pages (5 pages)
- One page per service category:
  1. Business Systems & ERP
  2. CRM & Sales Intelligence
  3. AI & Automation
  4. Software & Digital Products
  5. Revenue Operations
- Each page: hero, what it includes, how it works, industries it serves, CTA.

#### FR-PW-06 — Industries page
- Grid of four target industries: Education, SMBs, Startups, Corporate.
- Each card: description, relevant services, CTA.

#### FR-PW-07 — Solutions page
- Outcome-based positioning (problems ELOOX solves).
- Links to relevant services.

#### FR-PW-08 — Products page
- Showcase ELOOX's proprietary SaaS products.
- V1: placeholder cards with "Coming soon" state; no fabricated product data.

#### FR-PW-09 — Work / Portfolio page
- Grid of portfolio items managed via admin CMS.
- Filter by industry or service type.
- V1: empty state with professional messaging if no items exist.

#### FR-PW-10 — Growth / Revenue Operations page
- Deep-dive page for Revenue Operations service.
- Covers: performance marketing, lead generation, B2B outreach, cold email, sales development, appointment setting, CRM implementation, conversion optimisation.

#### FR-PW-11 — Insights / Blog page
- List of published blog articles managed via admin CMS.
- Pagination (10 articles per page).
- Individual article detail pages with slug-based URLs.

#### FR-PW-12 — Book a Meeting page
- Multi-step form:
  1. Contact info (name, company, email, phone).
  2. Service interest (checkboxes from service list).
  3. Brief description of requirements.
  4. Preferred date/time (date picker, two preferences).
  5. Cloudflare Turnstile verification.
- On submit: store request in D1, send notification email to admin, show success message.
- Never automatically create a calendar event — admin must approve first.
- No duplicate submissions from the same email within 24 hours.

#### FR-PW-13 — Contact page
- General enquiry form: name, email, company, message.
- Cloudflare Turnstile verification.
- Office/contact details section.
- On submit: store in D1, notify admin via email.

### 2.2 Admin application

All admin routes require JWT authentication.

#### FR-AD-01 — Login
- Username + password form.
- Returns JWT stored in a session (httpOnly cookie where possible).
- Rate-limited (10 failed attempts → 15-minute lockout).

#### FR-AD-02 — Overview dashboard
- Summary cards: new consultation requests (last 7 days), open leads, active projects, published articles.
- Recent activity feed.

#### FR-AD-03 — Consultation requests
- Table: name, company, email, service interests, submission date, status (new / reviewed / approved / declined).
- Detail view: full form submission.
- Actions: approve (triggers Google Calendar event + confirmation email to client), decline, add internal notes.

#### FR-AD-04 — Lead CRM
- Contact records: name, company, email, phone, source, status, last contact date, notes.
- Create, edit, delete contacts.
- Status pipeline: Lead → Qualified → Proposal → Client → Archived.
- Search and filter.

#### FR-AD-05 — Project management
- Project records: name, client, status, start date, end date, description, linked contact.
- Status: Planning / Active / On Hold / Completed / Cancelled.
- Create, edit, delete projects.

#### FR-AD-06 — Product portfolio management
- Manage ELOOX's own product listings (name, description, status, URL, logo).
- Published / draft toggle.

#### FR-AD-07 — Portfolio CMS
- Manage public portfolio (Work) items.
- Fields: title, client (optional/anonymised), industry, services, description, outcome, images (URL), published date, status.
- Published / draft toggle.

#### FR-AD-08 — Insights CMS
- Manage blog articles.
- Fields: title, slug (auto-generated, editable), excerpt, body (rich text — Markdown in V1), cover image URL, author, published date, status.
- Published / draft toggle.
- Slug must be unique; validate on save.

#### FR-AD-09 — Email logs
- Read-only table of all outbound emails sent via Resend.
- Fields: recipient, subject, type (admin notification / client confirmation), status (sent / failed), timestamp.

#### FR-AD-10 — Settings
- Update admin email address.
- Update admin password (requires current password confirmation).
- Google Calendar connection status and re-authorisation link.

---

## 3. Non-functional requirements

### 3.1 Performance
- Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO) on all public pages.
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1.
- Initial JS bundle < 150 KB gzipped (code-split by route).

### 3.2 Availability
- Target 99.9% uptime, inheriting Cloudflare's global network.
- No single point of failure outside Cloudflare infrastructure.

### 3.3 Scalability
- Architecture must stay within Cloudflare Free tier limits at expected traffic volumes (< 50,000 visitors/month).
- D1 query patterns must stay well within 5M row reads/day.

### 3.4 Security
- Full requirements in `.kiro/steering/security-practices.md`.

### 3.5 SEO
- Server-side rendered meta tags (or dynamic meta via React Helmet).
- `sitemap.xml` generated and accessible.
- `robots.txt` present.
- Open Graph and Twitter Card meta on all public pages.
- Semantic HTML on all pages.

### 3.6 Accessibility
- WCAG 2.1 AA compliance target.
- Full requirements in `.kiro/steering/design-system.md`.

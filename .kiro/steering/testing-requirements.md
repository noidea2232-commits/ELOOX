# ELOOX Testing Requirements

## Testing philosophy

Test behaviour, not implementation. Focus on:
1. User-facing flows that break silently.
2. API contracts between client and Worker.
3. Database query correctness.
4. Security-critical paths (auth, Turnstile verification, rate limiting).

## Test stack

| Layer | Tool |
|---|---|
| Unit tests | Vitest |
| Component tests | Vitest + React Testing Library |
| Worker/API tests | Vitest + Miniflare (Cloudflare Workers runtime) |
| E2E tests (phase 3+) | Playwright |
| Accessibility audits | axe-core via `@axe-core/playwright` |

## Running tests

```bash
npm run test          # Vitest in watch mode (development)
npm run test:run      # Vitest single run (CI)
npm run test:e2e      # Playwright (requires running dev server)
npm run test:coverage # Coverage report
```

## Coverage targets

| Area | Minimum coverage |
|---|---|
| Worker API handlers | 80% |
| Utility functions | 90% |
| Form validation schemas | 100% |
| React components | 60% (critical paths: forms, navigation) |

## Unit test conventions

- Test files co-located with source: `ComponentName.test.tsx`, `util.test.ts`.
- Worker tests in `worker/__tests__/`.
- Use `describe` / `it` structure.
- Each test has a single assertion focus.
- Mock external services (Resend, Google Calendar) — never make real network calls in tests.

## Critical paths to test

### Public website
- Contact form: validation, Turnstile mock, success/error states.
- Booking form: all fields, Turnstile mock, duplicate submission prevention.
- Navigation: all links resolve, mobile drawer opens/closes.

### Admin application
- Login: valid credentials succeed, invalid fail, lockout after 10 attempts.
- JWT verification middleware: missing token → 401, expired token → 401, valid token → pass.
- Consultation requests list: returns paginated data, respects filters.
- Approving a booking: creates Google Calendar event, sends confirmation email, updates D1 record.

### Database
- Parameterised queries do not allow SQL injection.
- Migrations apply cleanly on a fresh D1 database.

## Accessibility testing

- Run `axe-core` on every public page in the Playwright suite.
- Zero critical or serious violations permitted in CI.
- Serious violations must be tracked and resolved before release.

## CI integration

All tests run in GitHub Actions on every pull request. Merge to `main` is blocked if:
- Any test fails.
- Coverage drops below the defined thresholds.
- `npm audit` reports a high or critical vulnerability.
- ESLint or TypeScript type-check fails.

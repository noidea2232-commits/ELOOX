# ELOOX Coding Conventions

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Forms | React Hook Form + Zod |
| HTTP client | Native `fetch` |
| Runtime | Cloudflare Workers |
| Database | Cloudflare D1 (SQLite) |
| Email | Resend SDK |
| Calendar | Google Calendar REST API |
| CAPTCHA | Cloudflare Turnstile |

## Project structure

```
/
├── src/
│   ├── components/
│   │   ├── ui/            # Primitive UI components (Button, Input, Card…)
│   │   ├── layout/        # Header, Footer, Navigation, Section, Container
│   │   └── sections/      # Page-level section components
│   ├── pages/
│   │   ├── public/        # Public-facing website pages
│   │   └── admin/         # Admin application pages
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions, API clients, constants
│   ├── types/             # TypeScript type definitions and interfaces
│   └── styles/            # Global CSS, Tailwind config extensions
├── worker/
│   ├── api/               # API route handlers (Cloudflare Workers)
│   ├── db/                # D1 schema migrations and query helpers
│   └── middleware/        # Auth, CORS, rate-limiting middleware
├── public/                # Static assets
├── docs/                  # Project documentation and specifications
└── .kiro/                 # Kiro steering and configuration
```

## TypeScript rules

- `strict: true` in `tsconfig.json` — no exceptions.
- Explicit return types on all exported functions.
- No `any` — use `unknown` and narrow with type guards.
- Prefer `interface` for object shapes that may be extended; `type` for unions and computed types.
- All API request/response shapes must have a corresponding TypeScript interface.
- Use `z.infer<typeof Schema>` to derive types from Zod schemas — do not duplicate.

## React conventions

- Functional components only — no class components.
- One component per file.
- File names: `PascalCase.tsx` for components, `camelCase.ts` for utilities.
- Props interfaces named `ComponentNameProps`.
- Extract reusable logic into custom hooks in `src/hooks/`.
- Avoid prop drilling beyond two levels — use context or co-location.
- Never use `useEffect` to synchronise state — derive values or use event handlers.

## Naming conventions

| Item | Convention | Example |
|---|---|---|
| Components | PascalCase | `ServiceCard.tsx` |
| Hooks | camelCase with `use` prefix | `useConsultationForm.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_FILE_SIZE` |
| CSS classes | kebab-case (Tailwind only) | `text-ink-secondary` |
| DB tables | snake_case | `consultation_requests` |
| API endpoints | kebab-case | `/api/consultation-requests` |
| Environment variables | SCREAMING_SNAKE_CASE | `RESEND_API_KEY` |

## API and worker conventions

- All API routes live under `/api/` prefix.
- Use RESTful conventions: GET, POST, PUT, PATCH, DELETE.
- Every endpoint returns `{ success: boolean, data?: unknown, error?: string }`.
- HTTP status codes must be semantically correct (200, 201, 400, 401, 403, 404, 422, 500).
- Validate all inputs with Zod before touching the database.
- Never expose raw SQL errors to the client.
- Use parameterised D1 queries — never string interpolation in SQL.

## Error handling

- Use a typed `Result<T, E>` pattern for functions that can fail.
- API handlers must catch all thrown errors and return structured JSON responses.
- Client-side: display user-friendly messages; log technical details to console in development only.

## Environment variables

- All secrets stored in Cloudflare Worker secrets (never in source).
- Local development: `.dev.vars` file (gitignored).
- Never commit `.dev.vars`, `.env`, or any file containing secrets.

## Code quality

- ESLint with `@typescript-eslint` and `eslint-plugin-react-hooks`.
- Prettier for formatting (config in `prettier.config.js`).
- Run `npm run lint` and `npm run typecheck` before every commit.
- No commented-out code in committed files.
- TODO comments must include a ticket or issue reference: `// TODO(#42): …`.

## Git conventions

- Branch naming: `feat/short-description`, `fix/short-description`, `chore/short-description`.
- Commit messages: Conventional Commits format (`feat:`, `fix:`, `chore:`, `docs:`).
- Never commit directly to `main`.
- Pull requests require passing CI checks before merge.

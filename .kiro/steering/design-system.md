# ELOOX Design System

## Foundations

### Spacing scale (8-point grid)
```
--space-1:   4px
--space-2:   8px
--space-3:  12px
--space-4:  16px
--space-5:  24px
--space-6:  32px
--space-7:  48px
--space-8:  64px
--space-9:  96px
--space-10: 128px
```

### Border radius
```
--radius-sm:  4px   (inputs, small chips)
--radius-md:  8px   (cards, buttons)
--radius-lg: 16px   (modals, large cards)
--radius-xl: 24px   (hero sections, feature blocks)
--radius-full: 9999px (pills, avatars)
```

### Shadows
```
--shadow-sm:  0 1px 3px rgba(0,0,0,0.08)
--shadow-md:  0 4px 16px rgba(0,0,0,0.10)
--shadow-lg:  0 12px 40px rgba(0,0,0,0.12)
--shadow-xl:  0 24px 64px rgba(0,0,0,0.14)
```

### Typography scale
| Token | Size | Line-height | Weight | Font |
|---|---|---|---|---|
| `--text-display` | 72–96px | 1.05 | 700 | Space Grotesk / Sora |
| `--text-h1` | 56px | 1.1 | 700 | Space Grotesk / Sora |
| `--text-h2` | 40px | 1.15 | 700 | Space Grotesk / Sora |
| `--text-h3` | 28px | 1.2 | 600 | Space Grotesk / Sora |
| `--text-h4` | 22px | 1.3 | 600 | Space Grotesk / Sora |
| `--text-body-lg` | 18px | 1.6 | 400 | Inter |
| `--text-body` | 16px | 1.6 | 400 | Inter |
| `--text-sm` | 14px | 1.5 | 400 | Inter |
| `--text-xs` | 12px | 1.4 | 400 | Inter |

## Component library conventions

All components live in `src/components/`. Shared primitives live in `src/components/ui/`.

### Button variants
- `primary` – solid accent background, white text.
- `secondary` – outline, accent border and text.
- `ghost` – no border, accent text, hover background.
- `dark` – solid black background (for use on white sections).
- `white` – solid white background (for use on dark sections).

Sizes: `sm` | `md` (default) | `lg`

### Card variants
- `default` – white background, border, subtle shadow.
- `surface` – `--color-surface` background, no border.
- `dark` – `--color-bold-bg` background, white text.
- `accent` – accent-coloured left border stripe.

### Form inputs
- Height: 48px (md), 40px (sm).
- Border: 1px solid `--color-border`.
- Focus ring: 2px solid `--color-accent`.
- Error state: 1px solid `#EF4444`, error message below in `--text-sm`.
- All inputs must have associated `<label>` elements.

### Navigation
- Desktop: horizontal top nav, sticky on scroll.
- Mobile: full-screen slide-in drawer.
- Active state: accent underline or accent dot.

### Section anatomy
Every page section should follow this structure:
```
<section class="section">
  <div class="container">
    <!-- content -->
  </div>
</section>
```
Container max-width: 1280px, horizontal padding: 24px (mobile), 48px (desktop).

## Animation conventions

Use Framer Motion for all animations.

- **Entrance:** `fadeInUp` – `y: 24 → 0`, `opacity: 0 → 1`, duration `0.5s`, ease `easeOut`.
- **Stagger children:** `staggerChildren: 0.08s`.
- **Hover lifts:** `y: -4`, `shadow-lg`, duration `0.2s`.
- **Page transitions:** fade only, `0.3s`.
- **Respect `prefers-reduced-motion`:** wrap all motion in `useReducedMotion` check.

## Accessibility requirements

- Minimum contrast ratio: 4.5:1 (body text), 3:1 (large text and UI components).
- All interactive elements must be keyboard-navigable.
- All images must have meaningful `alt` text or `alt=""` for decorative images.
- Focus styles must be visible and not removed with `outline: none` without a custom replacement.
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- ARIA attributes only where native HTML semantics are insufficient.

## Responsive breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

Use Tailwind CSS utility classes as the primary styling approach. Custom CSS only where Tailwind is insufficient.

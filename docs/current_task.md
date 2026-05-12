# Current Task

**Roadmap position:** Phase 1 — Foundation
**Reference:** `docs/roadmap.md` → Phase 1

---

## Objective

Initialize the Next.js project and establish the design system and layout foundation that all sections will build on. No section content yet — only the structural base.

---

## Tasks

**1.1 — Project init**
- Ensure Next.js application is initialized (manual) with TypeScript, Tailwind, App Router, no `src/` dir
- Confirm ESLint is present (included by create-next-app by default)
- Add Prettier integration and `lint` / `format` scripts to `package.json` (completes 0.2)
- Verify dev server runs cleanly

**1.2 — Design system**
- Semantic color tokens in `tailwind.config.ts` — no arbitrary colors, no accent
  - `color.surface` → white (`#ffffff`)
  - `color.surface-muted` → light grey (`#f5f5f5`)
  - `color.border` → light grey (`#e5e5e5`)
  - `color.text` → near-black (`#111111`)
  - `color.text-muted` → medium grey (`#6b6b6b`)
- Typography scale: font family, size steps, line heights, font weights
- Spacing scale: consistent step values used across all sections
- Global base styles in `app/globals.css` (reset, body defaults, box-sizing)
- Single theme only — no dark mode variant

**1.3 — Layout primitives**
- `components/layout/Container.tsx` — max-width wrapper with horizontal padding, centered
- `components/layout/Section.tsx` — consistent vertical spacing between page sections

**1.4 — Root layout + Header**
- `app/layout.tsx` — root layout composing Header and page slot
- `components/layout/Header.tsx` — name left, LinkedIn icon + Resume download button right
- `public/resume.pdf` placeholder placed in public directory
- Header ships responsive

**1.5 — Page skeleton**
- `app/page.tsx` assembles four labeled placeholder sections in order: Hero, About, Projects, Contact
- Each placeholder: correct element, no visuals, a height, and a label
- No logic, no real content — structure only

**1.6 — Playwright baseline**
- Install `@playwright/test`, configure `playwright.config.ts`
- Add test script to `package.json`
- Capture full-page baseline screenshots at 375px, 768px, 1280px
- Commit baselines to repository

---

## Definition of Done

- Dev server runs cleanly with no errors
- Semantic color tokens, typography scale, and spacing scale defined in `tailwind.config.ts`
- `Container` and `Section` primitives exist and render correctly
- Header is visible and responsive at all three breakpoints
- Page skeleton shows four labeled regions in correct order
- Playwright baseline screenshots captured and committed
- No section content, no MDX, no API routes written

---

## Do Not Start Yet

- Hero section implementation (replaces Hero skeleton — Phase 2)
- MDX pipeline and seed content (Phase 2)
- About, Projects, Contact section implementations (Phase 2–3)
- Resend integration and contact API route (Phase 3)
- SEO, performance audit, deployment (Phase 4)

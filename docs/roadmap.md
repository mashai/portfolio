# Portfolio Website — Project Roadmap

## Cross-cutting concerns

These two constraints apply to every phase and every component:

- **Responsiveness is structural, not polish.** Every component is designed desktop-first and ships fully responsive when first implemented. There is no dedicated "responsive pass" — a component is not complete until it works at 375px, 768px, and 1280px+.
- **Screenshot tests are ongoing verification.** Playwright is installed early and baselines are captured at the skeleton stage. After each section replaces its skeleton, baselines are updated. Screenshots confirm layout stability as the site grows, not as a final QA gate.

---

## Phase 0 — Environment alignment

**0.1 — Folder structure**
- Confirm folder structure matches intended architecture: `app/`, `components/`, `content/projects/`, `lib/`, `types/`, `public/`, `docs/`

**0.2 — Tooling alignment** *(file-based config only — no package.json yet)*
- Prettier config file present (single quotes, trailing commas, 2-space indent)
- `.editorconfig` present for cross-editor consistency

---


## Phase 1 — Foundation

**1.1 — Project init**
- Ensure Next.js application is initialized (manual) with TypeScript, Tailwind, App Router, no `src/` dir
- No extra dependencies yet — install per phase as features are built
- Confirm ESLint is present (included by create-next-app by default)
- Add Prettier integration and `lint` / `format` scripts to `package.json` (completes 0.2)
- Verify dev server runs cleanly

**1.2 — Design system**
- Define semantic color tokens in `tailwind.config.ts` — no arbitrary colors, no accent
  - `color.surface` → white (`#ffffff`)
  - `color.surface-muted` → light grey (`#f5f5f5`)
  - `color.border` → light grey (`#e5e5e5`)
  - `color.text` → near-black (`#111111`)
  - `color.text-muted` → medium grey (`#6b6b6b`)
- Define typography scale: font family, size steps, line heights, font weights
- Define spacing scale: consistent step values used across all sections
- Set global base styles in `app/globals.css` (reset, body defaults, box-sizing)
- Single theme only — no dark mode variant

**1.3 — Layout primitives**
- `components/layout/Container.tsx` — max-width wrapper with horizontal padding, centered
- `components/layout/Section.tsx` — consistent vertical spacing between page sections
- These primitives underpin every section — establish them before any UI is built

**1.4 — Root layout + Header**
- `app/layout.tsx` — root layout composing Header and page slot
- `components/layout/Header.tsx` — name left, LinkedIn icon + Resume download button right
- Resume PDF placeholder placed in `public/resume.pdf`
- Header ships responsive (stacks or adjusts at mobile)

**1.5 — Page skeleton**
- `app/page.tsx` assembles four placeholder sections in order: Hero, About, Projects, Contact
- Each placeholder is minimal markup only — correct element, no visuals, a height, and a label
- Purpose: validate page flow, confirm spacing system, verify responsive stacking, stabilize layout regions before any logic or content is introduced
- Later phases replace these placeholders; no new layout regions are introduced after this step

**1.6 — Playwright baseline**
- Install and configure `@playwright/test` (`playwright.config.ts`, test script in `package.json`)
- Capture full-page baseline screenshots of the skeleton at 375px, 768px, 1280px
- Baselines committed to the repository
- These screenshots are the reference point — updated each time a section replaces its skeleton

---

## Phase 2 — Sections

> Each section below replaces its Phase 1 skeleton. Each ships responsive. Update Playwright baselines after each section is complete.

> **Asset dependencies — required before this phase begins:**
> - Hero background video file → place in `public/` before starting 2.1
> - Profile avatar image → place in `public/` before starting 2.4

**2.1 — Hero section** *(replaces Hero skeleton)*
- `components/sections/Hero.tsx` — full-bleed blurred background video, dark overlay, name heading, subtitle text
- Video file loaded via `<video>` element (autoplay, muted, loop, no controls)
- Blur applied via CSS (`filter: blur(...)` on the video element, clipped by the container)
- Text layered above via absolute positioning

**2.2 — MDX pipeline** *(prerequisite for all content sections)*
- `lib/mdx.ts` — server-side utilities to read files from `content/projects/`, parse frontmatter, return typed project list
- Define `types/project.ts` — `{ title, description, tags, thumbnail, date, slug }`
- These are static portfolio entries (completed work samples), not blog posts — no publish workflow, no pagination, no RSS

**2.3 — Seed content** *(required before building content components)*
- Write 4–6 real MDX project files in `content/projects/` with complete frontmatter and short description body
- Components in 2.4–2.7 are built and verified against this real data — no mock data

**2.4 — About section** *(replaces About skeleton)*
- `components/sections/About.tsx` — circular avatar image (left) + bio paragraphs (right), stacks on mobile
- `components/ui/TagPill.tsx` — reusable neutral pill (no color accent), clickable, navigates to `/projects/[tag]`
- Horizontally scrollable tag row below bio

**2.5 — Project card + grid** *(replaces Projects skeleton)*
- `components/ui/ProjectCard.tsx` — thumbnail image, tag pills, title, short description
- `components/sections/ProjectsGrid.tsx` — 4-column grid at desktop, 2-column at tablet, 1-column at mobile
- Card surface uses `color.surface-muted`, no colored borders or accents

**2.5b — Project detail page**
- `app/projects/[slug]/page.tsx` — `generateStaticParams` enumerates all slugs, renders thumbnail, title, description, and tag pills from frontmatter
- `lib/mdx.ts` gets a `getProjectBySlug(slug)` helper
- Cards in `ProjectCard` become links to `/projects/[slug]`
- No new dependencies — frontmatter only, no MDX body rendering

**2.6 — Home page composition**
- `app/page.tsx` reads all project entries at build time (static) and passes typed data to `About` and `ProjectsGrid`
- Skeleton placeholders fully replaced; no mock data remains

**2.7 — Tag filtered page**
- `app/projects/[tag]/page.tsx` — `generateStaticParams` enumerates all unique tags, renders filtered `ProjectsGrid`
- Tag pills in About and on cards link here

---

## Phase 3 — Interaction

> Install at start of phase: `resend`
>
> **External dependency — required before this phase begins:**
> - Resend account created and API key available → needed to test 3.2 end-to-end
>
> Update Playwright baselines after the Contact section replaces its skeleton.

**3.1 — Contact form component** *(replaces Contact skeleton)*
- `components/sections/Contact.tsx` — left column: CTA text; right column: form, stacks on mobile
- Fields: Name, Company Name (side by side at desktop, stacked on mobile), Company Website, Email (required)
- "Get in touch" button — dark fill, no accent color
- Client-side validation: required fields, email format
- Loading, success, and error states (local component state only — no external state library)

**3.2 — Contact API route**
- `app/api/contact/route.ts` — receives POST body, sends a single email via Resend, returns success/failure
- `lib/resend.ts` — Resend client instantiation
- No database, no persistence, no logging of submissions — email delivery only
- `RESEND_API_KEY` in `.env.local`, documented in `.env.example`

---

## Phase 4 — Quality & Deployment

**4.1 — SEO**
- `metadata` export in `app/layout.tsx` — title, description, OG image
- Per-page metadata for tag-filtered pages (`/projects/[tag]`)

**4.2 — Performance**
- Lighthouse audit — target 90+ on Performance, Accessibility, Best Practices
- Confirm all images use `next/image`
- Check bundle size — no unused dependencies

**4.3 — Deployment**
- Push repository to GitHub
- Connect to Vercel, configure build settings
- Set `RESEND_API_KEY` in Vercel environment variables
- Verify contact form delivers email end-to-end in production

---

## Task order

Each item is a discrete unit tackled in sequence:

`0.1 → 0.2 → 1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 1.6 → 2.1 → 2.2 → 2.3 → 2.4 → 2.5 → 2.6 → 2.7 → 3.1 → 3.2 → 4.1 → 4.2 → 4.3`

> Note: asset dependencies (hero video, avatar image) must be in `public/` before Phase 2 begins. Resend account must exist before Phase 3 begins.

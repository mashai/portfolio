# Current Task

**Roadmap position:** Phase 2 — Sections
**Reference:** `docs/roadmap.md` → Phase 2, task 2.4

---

## Objective

Implement the About section, replacing the About skeleton. No other sections are touched.

---

## Asset dependency — required before starting

- Profile avatar image → place in `public/` before starting

---

## Tasks

**2.4 — About section** *(replaces About skeleton in `app/page.tsx`)*
- `components/sections/About.tsx` — circular avatar (left) + bio paragraphs (right), stacks on mobile
- `components/ui/TagPill.tsx` — neutral pill, no color accent, clickable, links to `/projects/[tag]`
- Horizontally scrollable tag row below bio
- Ships fully responsive at 375px, 768px, 1280px, 1920px
- Update Playwright baselines after completion

---

## Definition of Done

- About section replaces the About skeleton in `app/page.tsx`
- Avatar renders as a circle, sourced from `public/`
- Bio text renders in the right column
- Tag pills render in a horizontally scrollable row below the bio
- Each tag pill links to `/projects/[tag]`
- Fully responsive at all three breakpoints
- Playwright baselines updated
- No other skeleton placeholders modified

---

## Do Not Start Yet

- Projects, Contact sections (2.5–3.1)
- Everything in Phase 3 and 4

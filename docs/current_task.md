# Current Task

**Roadmap position:** Phase 2 — Sections
**Reference:** `docs/roadmap.md` → Phase 2, task 2.1

---

## Objective

Implement the Hero section, replacing the Hero skeleton placeholder. No other sections are touched.

---

## Asset dependency — required before starting

- Hero background video → place in `public/` before starting

---

## Tasks

**2.1 — Hero section** *(replaces Hero skeleton in `app/page.tsx`)*
- `components/sections/Hero.tsx` — full-bleed blurred background video, dark overlay, name heading, subtitle text
- Video via `<video>` (autoplay, muted, loop, no controls); blur via CSS `filter: blur(...)` clipped by container
- Text layered above via absolute positioning
- Ships fully responsive at 375px, 768px, 1280px
- Update Playwright baselines after completion

---

## Definition of Done

- Hero section replaces the Hero skeleton in `app/page.tsx`
- Background video plays (autoplay, muted, loop), blurred and clipped
- Dark overlay sits above the video
- Name heading and subtitle text render above the overlay
- Fully responsive at all three breakpoints
- Playwright baselines updated
- No other skeleton placeholders modified

---

## Do Not Start Yet

- MDX pipeline (2.2)
- Seed content (2.3)
- About, Projects, Contact sections (2.4–3.1)
- Everything in Phase 3 and 4

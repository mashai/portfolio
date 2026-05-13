# Current Task

**Roadmap position:** Phase 3 — Interaction
**Reference:** `docs/roadmap.md` → Phase 3, task 3.1

---

## Objective

Implement the Contact form component, replacing the Contact skeleton. No API wiring yet.

---

## Tasks

**3.1 — Contact form component** *(replaces Contact skeleton in `app/page.tsx`)*
- `components/sections/Contact.tsx` — left column: CTA text; right column: form, stacks on mobile
- Fields: Name (required), Company Name, Company Website, Email (required) — Name and Company Name side by side at desktop, stacked on mobile
- "Get in touch" button — dark fill, no accent color
- Client-side validation: Name and Email required, email format check
- Loading, success, and error states (local component state only)
- Ships fully responsive at 375px, 768px, 1280px, 1920px
- Update Playwright baselines after completion

---

## Definition of Done

- Contact skeleton replaced with real component
- Name and Email are required fields with validation
- Company Name and Company Website are optional
- Email format validation works
- Loading, success, and error states visible
- Fully responsive at all four breakpoints
- Playwright baselines updated
- No API wiring — form submits to nowhere

---

## Do Not Start Yet

- Contact API route (3.2) — requires Resend account + API key
- Everything in Phase 4

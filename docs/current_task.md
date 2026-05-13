# Current Task

**Roadmap position:** Phase 3 — Interaction
**Reference:** `docs/roadmap.md` → Phase 3, task 3.2

---

## Objective

Wire the Contact form to send email via Resend.

---

## Tasks

**3.2 — Contact API route**
- `lib/resend.ts` — instantiate Resend client from `RESEND_API_KEY`
- `app/api/contact/route.ts` — POST handler: reads form body, sends email via Resend to `CONTACT_EMAIL_TO`, returns success/failure JSON
- `.env.local` — add `RESEND_API_KEY` and `CONTACT_EMAIL_TO` (not committed)
- `.env.example` — document both variables with placeholder values
- Update `Contact.tsx` `handleSubmit` to POST to `/api/contact` and handle the response

---

## Definition of Done

- Submitting the form sends a real email to the configured address
- `RESEND_API_KEY` and `CONTACT_EMAIL_TO` are env vars, not hardcoded
- `.env.example` documents both vars
- `.env.local` is in `.gitignore`
- Loading, success, and error states reflect actual API response
- No database, no persistence

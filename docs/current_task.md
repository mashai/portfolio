# Current Task

**Roadmap position:** Phase 4 — Quality & Deployment
**Reference:** `docs/roadmap.md` → Phase 4, task 4.3 (run ahead of 4.1 and 4.2)

---

## Objective

Get the site live on a Northflank URL so content can be added and tested against a real deployment.

---

## Tasks

**4.3 — Deployment**
- Already in repo: `output: 'standalone'` in `next.config.ts`, multi-stage `Dockerfile`, `.dockerignore`, `.env.example`
- Push repository to GitHub
- Create a Northflank combined service from the GitHub repo — Build type: Dockerfile, public HTTP port 3000, health check on `/`
- Set `RESEND_API_KEY` and `CONTACT_EMAIL_TO` as Northflank runtime variables (not build arguments)

---

## Definition of Done

- Site loads on the Northflank URL
- Pushing to `main` triggers a rebuild and redeploy
- Submitting the Contact form on the deployed site delivers an email
- No secrets in the repository or baked into the Docker image

---

## Not in scope

- Custom domain
- SEO metadata (4.1) and performance audit (4.2)

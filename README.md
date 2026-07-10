# Mohammed Tawheed — Cybersecurity Portfolio

A single-page, dark-themed portfolio built with Next.js 16 (App Router) and Tailwind CSS 4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Customizing content

All copy (bio, experience, projects, skills, socials) lives in one place:
[`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file to update content
without touching any component.

Before deploying:

- Replace the placeholder GitHub/LinkedIn/Twitter URLs in `src/data/portfolio.ts` with your real profiles.
- Add a real `resume.pdf` file to the `public/` folder (the "Download Resume" buttons link to `/resume.pdf`).

## Project structure

- `src/app/layout.tsx` — root layout, fonts, SEO metadata
- `src/app/page.tsx` — assembles all sections
- `src/components/` — one component per section (Hero, About, Experience, Certifications, Projects, Skills, Contact) plus a shared Navbar/Footer
- `src/data/portfolio.ts` — all content data
- `src/app/globals.css` — dark theme color tokens (Tailwind v4 `@theme`)

## Deploying to Vercel (free tier)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Every push to `main` redeploys automatically.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

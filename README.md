# Mohammed Tawheed — Cybersecurity Portfolio

Live at **[mohammedtawheed.dev](https://mohammedtawheed.dev)**.

A dark-themed portfolio built with Next.js 16 (App Router) and Tailwind CSS 4 — Hero
through Contact on the homepage, a `/projects` page merging curated write-ups with
live GitHub repos, a data-driven `/blog`, a GitHub contributions heatmap, a "Recent
Posts from X" carousel, and a light/dark theme toggle.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Customizing content

All copy (bio, experience, projects, skills, socials, site URL) lives in one place:
[`src/data/portfolio.ts`](src/data/portfolio.ts). Blog posts live in
[`src/data/blog.ts`](src/data/blog.ts). Edit either file to update content without
touching any component.

## Blog automation

`.github/workflows/blog-post-generator.yml` runs Mon/Wed/Fri at 9am UTC (and can be
triggered manually via `gh workflow run "Auto-Generate Blog Post"`), calling Claude
via [`scripts/generate-blog-seo.js`](scripts/generate-blog-seo.js) to draft a new
post and open a PR for review — it never pushes straight to `main`. Requires an
`ANTHROPIC_API_KEY` repo secret.

## Project structure

- `src/app/layout.tsx` — root layout, fonts, SEO metadata (`metadataBase`, OG tags)
- `src/app/page.tsx` — assembles the homepage sections
- `src/app/projects/`, `src/app/blog/` — standalone pages
- `src/app/sitemap.ts`, `src/app/robots.ts` — SEO
- `src/components/` — one component per section
- `src/data/portfolio.ts`, `src/data/blog.ts` — all content data
- `src/lib/` — server-side data fetching (GitHub repos, contributions, tweets log, date formatting)
- `src/app/globals.css` — dark/light theme tokens (Tailwind v4 `@theme`)

## Deployment

Hosted on Vercel, connected to `github.com/Tawheed30/portfolio` — every push to
`main` auto-deploys. Custom domain `mohammedtawheed.dev` is configured in the
Vercel project's Domains settings.

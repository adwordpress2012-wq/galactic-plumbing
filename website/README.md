# Galactic Plumbing Website

Next.js one-page framework for [galacticplumbing.com.au](https://galacticplumbing.com.au).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Vercel deployment via repo root `vercel.json` (`rootDirectory: website`)

## Development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint

## Branding assets

Drop real assets into `branding/` at repo root, then copy into `website/public/images/`:

- Luke / plumber hero photo → replace `hero-luke-placeholder.svg`
- Logo / van shots → replace `logo-mark.svg` or add alongside hero

## Phase 1 scope

UI framework only. Micah SCW bubble is a front-end shell — backend booking and DOS Calendar wiring come in phase 2.

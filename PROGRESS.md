# Progress

> This file is the memory of the project. Claude reads it at the start of every
> session and updates it at the end. Keep it honest and keep it short — if it
> stops being true it stops being useful.

**Last updated:** 2026-09-09 — session 3

---

## What I'm building

A tool that takes a small business's existing website, works out what the
business does, and automatically builds them a much better website. I run it
myself by talking to Claude — no login, no forms, no admin screens.

Full spec: `guide/build-brief.md`

## Where I'm up to

**Stages 1–3 done.** My photography site is live, real, and mine, and the
content is now separated from the design.

- **Live:** https://website-machine-eight.vercel.app
- **Code:** https://github.com/BodhiScott124/website-machine
- **Vercel:** dashboard at vercel.com (auto-deploys on every push to `main`)

**Next: Stage 4** — a small script that asks Claude (via the Anthropic API) to
write an "about" paragraph for a made-up business and prints it. **Needs an
Anthropic API key first** — stop and walk Bodhi through
`guide/setup-and-accounts.md` §4 before starting.

**Also pending (Bodhi's move):** buy `bodhiscottphotography.com` through Vercel
(~$10–12/yr, needs Dad's card). Once bought: connect it in Vercel, then change
`siteUrl` in `src/app/_data/knowledge.json` to the new domain.

## How the site is built

- **Next.js + TypeScript + Tailwind**, deployed on Vercel. Fully static.
- **`src/app/_data/knowledge.json`** — the single source of truth for the site:
  name, contact, all the words, and the photo list. Every page reads from it
  via `src/app/_data/knowledge.ts` (types + helpers). Change a detail there and
  the whole site follows.
- **Pages:** Home (`/`, shows the `featured` photos), Work (`/work`, a card per
  country), Work/<country> (`/work/italy` etc, that country's full gallery —
  one static page per country), About, Contact. Shared `SiteHeader` (client,
  highlights current page) + `SiteFooter` in the root layout.
- **`_components/PhotoGrid.tsx`** (client) — the gallery: masonry layout so
  portrait and landscape photos both show at their real shape, and clicking a
  photo opens a full-size lightbox (prev / next / Esc). Reads photo dimensions
  from `src/app/_data/photo-sizes.json`.
- **Photos:** 33, originals in `public/photos/<Country>/` (gitignored — some are
  huge; a 717MB `.tif` in United States that Bodhi can delete). Web + thumb
  copies are made by `scripts/resize-photos.ps1`, which also trims white
  borders and writes `photos-manifest.json` + `photo-sizes.json`.
- **Share preview:** `public/og.jpg` (1200×630, from `knowledge.ogPhoto`) +
  `public/og/<country>.jpg` per country (from each `cover`). Built by
  `scripts/make-og-images.ps1`. Metadata in `layout.tsx` (global) and each
  country page's `generateMetadata`.
- **Favicon:** a little white camera on near-black — `src/app/icon.png` +
  `favicon.ico`, drawn by `scripts/make-favicon.ps1`.
- **Vercel Analytics:** `<Analytics />` from `@vercel/analytics/next` in the
  root layout. **Needs Bodhi to click "Enable" in the Vercel project's
  Analytics tab** or no data is collected.
- **Blur-up loading:** `photo-sizes.json` entries are `[w, h, blurDataURL]`
  (tiny base64 JPEG from the resize script). Images fade in from that blur via
  `placeholder="blur"`.
- **SEO:** `src/app/robots.ts` + `src/app/sitemap.ts` (both use
  `knowledge.siteUrl`). Custom 404 at `src/app/not-found.tsx`.
- **Instagram:** `knowledge.instagram` → link in the footer and on Contact.

## To add or change photos

1. Drop files into `public/photos/<Country>/`
2. `powershell -ExecutionPolicy Bypass -File scripts/resize-photos.ps1`
3. Add a line to the `photos` list in `src/app/_data/knowledge.json`
   (`file` = the generated name; see `scripts/photos-manifest.json`).
   `featured` puts it on Home — keep those landscape so they fill the boxes.
   `cover` sets a country card's photo.

## Environment notes

- **Git + Node + GitHub CLI** were installed via `winget` (the Claude app
  didn't expose a usable Node, contrary to the setup guide).
- **Git push auth is saved** in Windows Credential Manager (`credential.helper
  = manager`). The GitHub sign-in popup doesn't work in the Claude desktop app,
  so it was set up with a one-time device code (github.com/login/device,
  client id `178c6fc778ccc68e1d6a`). If push ever stops working, redo that.

## Stages

- [x] **1. My photography site** — live
- [x] **2. Make it properly mine** — real photos, words, pages, share preview
      (portraits held back — no permission to show them yet)
- [x] **3. Separate design from details** — `knowledge.json` drives the site
- [ ] **4. First AI** — Claude writes copy for a made-up business (needs API key)
- [ ] **5. The knowledge file, properly** — messy text in → clean knowledge.json
- [ ] **6. Read a real website** — scrape a business's details off their old site
- [ ] **7. Join it all up** — website address in, finished site out
- [ ] **8. A second template** — and have it pick the right one automatically
- [ ] **9. Colours and photos** — real brand colours, Pexels images
- [ ] **10. Put a demo online** — a real prospect's site, on my own domain
- [ ] **11. Full circle** — run my own photography site through the machine

## Decisions

- **Next.js + Tailwind on Vercel** — per the brief; matches Lucas's reference
  build and the later stages, avoids a rebuild.
- **Installed Node/Git/gh via winget** — weren't present. *Question for Lucas.*
- **Deployed via Vercel dashboard import** (not the CLI — its login is awkward
  in this app). Import also sets up auto-deploy.
- **Multi-page** (not one long scroll) with a country-card Work page — Bodhi
  found scrolling past every country annoying.
- **Gallery is masonry + lightbox** — so vertical photos aren't cropped square.

## Things to add later

- Hero eyebrow ("LANDSCAPE & NIGHT-SKY PHOTOGRAPHY · HAWAII") still wraps to
  two lines on the narrowest phones — minor.
- Could add Vercel Web Analytics (free on Hobby) so Bodhi can see visits.

## Questions for Lucas

- Setup guide says Node.js isn't needed, but it wasn't available and the build
  tools require it — installed via winget. Right call?
- The GitHub sign-in popup doesn't work in the Claude desktop app; had to use
  device-code auth and it took several tries. Smoother way, or cover it in the
  guide?

## Session log

- **Session 1 (2026-09-08):** Met Bodhi (16, photographer). Installed Git/Node/
  gh, scaffolded Next.js, built the Stage 1 one-page site, pushed to GitHub,
  deployed to Vercel. Site live. GitHub auth took ~6 device-code tries.
- **Session 2 (2026-09-09):** Stage 2. Real photos + About text; split into
  Home / Work / About / Contact. Bodhi added ~33 photos in country subfolders →
  Work became a card per country, each its own gallery page. Added masonry +
  lightbox. Added share preview (og.jpg + metadata). Dropped print mentions,
  shrank the portrait claim.
- **Session 3 (2026-09-09):** Stage 3. Pulled every detail (name, contact,
  words, photo list) out of the page code into `src/app/_data/knowledge.json`;
  pages now read from it via `knowledge.ts`. Verified: editing the file changes
  the site, and nothing changed visually. Deleted the old `_data/photos.ts`.
  Then fixed the mobile header (site name was wrapping onto two lines and
  colliding with the nav — now stacks name over nav below the `sm` breakpoint).
  Then a batch of free polish: favicon (camera), blur-up image loading,
  robots.txt + sitemap, per-country share images, custom 404 page, Instagram
  link (@bodhi_scott_photography) in the footer and on Contact, and Vercel
  Analytics (needs enabling in the Vercel dashboard).

# Progress

> This file is the memory of the project. Claude reads it at the start of every
> session and updates it at the end. Keep it honest and keep it short — if it
> stops being true it stops being useful.

**Last updated:** 2026-09-09 — session 2 (part 2)

---

## What I'm building

A tool that takes a small business's existing website, works out what the
business does, and automatically builds them a much better website.

I run it myself by talking to Claude. It has no login, no forms and no admin
screens, because I'm the only person who will ever use it.

Full spec: `guide/build-brief.md`

## Where I'm up to

**Stage 1 is DONE.** My photography site is live on the internet:

**https://website-machine-eight.vercel.app**

It's a real public address — opens on a phone, can be sent to people. The words
and portfolio images are placeholders for now; real ones come in Stage 2.

## Key addresses

- **Live site:** https://website-machine-eight.vercel.app
- **Code on GitHub:** https://github.com/BodhiScott124/website-machine
- **Vercel project:** dashboard at vercel.com (imported from the GitHub repo)
- Local dev preview: `.claude/launch.json` runs `next dev` on port 3000

## What's working right now

- Git and Node.js are installed on the PC (they were missing at the start).
- The project is a Next.js website with Tailwind for styling.
- One page for **Bodhi Scott Photography**: top bar, hero ("Landscapes and
  portraits by Bodhi Scott"), placeholder portfolio grid, short About, Contact
  section with the real email (bscotthawaii@gmail.com).
- `npm run build` passes; the site is fully static.
- Code is on GitHub (commits pushed). Vercel auto-deploys the site whenever a
  new commit lands on the `main` branch on GitHub.
- **Git push auth works and is saved.** Getting there was painful: the GitHub
  sign-in popup doesn't work in the Claude desktop app, so auth was done with a
  one-time device code (github.com/login/device), client ID
  `178c6fc778ccc68e1d6a`, scopes `repo`. Git Credential Manager (`credential.
  helper = manager`) captured the token into Windows Credential Manager during
  the first successful push, so it now persists — `git fetch`/`git push` run
  with no prompt. If it ever stops working, re-do the device-code flow.

## Stage 2 — nearly done

Done:
- **Photos are organised by country.** Originals live in
  `public/photos/<Country>/` (Australia, Italy, Switzerland, United States) —
  all gitignored (some are huge; there's a 717MB `.tif` in United States that
  Bodhi can delete). `scripts/resize-photos.ps1` walks those folders, trims any
  thin white border, writes web + thumb copies (flat, named
  `<country>-<original>`), and a `scripts/photos-manifest.json`.
- **Gallery = 20 photos, curated by Claude** from the ~33 Bodhi supplied, spread
  Italy 6 / Australia 5 / Switzerland 4 / USA 5. The list + captions live in
  `src/app/_data/photos.ts`. All 33 processed images are committed, so swapping
  one in is just an edit to that file.
- Real About text: born Australia, lives Hawaii, started photography 2023.
- **Real pages:** Home (`/`), Work (`/work` — a section per country), About
  (`/about`), Contact (`/contact`). Shared `SiteHeader` (client, highlights the
  current page) + `SiteFooter` in the root layout. `_components/PhotoGrid.tsx`
  is the shared grid.

Still open for Stage 2:
- **Photo captions** — descriptive, written by Claude, no place names. Bodhi
  confirmed the first 7 were fine; the newer 13 haven't been checked.
- **Which 20** — Claude's pick. Bodhi may want to swap some (every processed
  photo is available; just change `_data/photos.ts`).
- **Portrait photos** (optional) — none on the site yet.

## To add or change photos later

1. Drop image files into `public/photos/<Country>/`
2. Run `powershell -ExecutionPolicy Bypass -File scripts/resize-photos.ps1`
3. Add/edit the entry in `src/app/_data/photos.ts` (`file` = the generated
   name; see `scripts/photos-manifest.json`). `featured: true` puts it on Home.

## Open questions for Bodhi

- Confirm the 7 gallery captions, and whether any should name the location.
- Does he want any portrait photos on the site?

Resolved: he's Australian, lives in Hawaii. Started photography in 2023.

## Stages

- [x] **1. My photography site** — LIVE at website-machine-eight.vercel.app
- [~] **2. Make it properly mine** — photos in, words in, pages split. Just
      caption confirmation + optional portraits left.
- [ ] **3. Turn it into a template** — same design, holds any business's details
- [ ] **4. First AI** — get Claude to write website copy for a made-up business
- [ ] **5. The knowledge file** — one file per business, everything true about it
- [ ] **6. Read a real website** — pull a business's details off their old site
- [ ] **7. Join it all up** — website address in, finished site out
- [ ] **8. A second template** — and have it pick the right one automatically
- [ ] **9. Colours and photos** — match real brand colours, find good images
- [ ] **10. Put a demo online** — a real prospect's site, on my own domain
- [ ] **11. Full circle** — point the machine at my own photography site

## Decisions I've made

*(Claude: record decisions here as we make them, with the reason.)*

- **Followed the brief's stack: Next.js + TypeScript + Tailwind on Vercel.**
  Considered a plain single HTML file (simpler for one page), but later stages
  and Lucas's reference build use Next.js, so starting there avoids a rebuild.
- **Installed Node.js even though `setup-and-accounts.md` says it isn't needed.**
  The Claude app didn't expose a usable Node/npm on this PC. Installed via
  `winget` (Git and GitHub CLI too). *Question for Lucas below.*
- **One page with sections** (Work / About / Contact as anchors), matching
  "Stage 1 = one page".
- **Deployed by importing the GitHub repo in the Vercel dashboard** (vercel.com
  /new → Import → Deploy), rather than the Vercel CLI — the CLI needs a login
  step that's awkward in this app. Dashboard import also wires up auto-deploy.

## Things I want to add later

- Nothing yet.

## Questions for Lucas

- The setup guide says Node.js isn't needed, but it wasn't available and the
  build tools require it — installed via winget. Right call?
- The GitHub sign-in popup doesn't work in the Claude desktop app, so we had to
  use device-code auth and it took several tries. Is there a smoother way you
  used, or should the guide cover this?

## Session log

- **Session 1 (2026-09-08):** Met Bodhi (16, photographer — landscapes for fun,
  portraits for work; business is "Bodhi Scott Photography"). Fixed a nested
  folder, installed Git + Node + GitHub CLI, scaffolded Next.js, built the
  Stage 1 one-page site with placeholder content, pushed to GitHub, and
  deployed to Vercel. **Site is live** at website-machine-eight.vercel.app.
  GitHub auth via device code took ~6 tries (wrong OAuth scopes each time) but
  is now saved and working.
- **Session 2 (2026-09-09):** Stage 2. Real photos + hero + gallery; real About
  text (Australia → Hawaii, 2023); split into Home / Work / About / Contact.
  Then Bodhi added ~33 photos sorted into country subfolders — Claude curated to
  20, rebuilt the Work page as a section per country, added white-border
  trimming to the resize script. All live. Left: caption check on the newer
  photos; portraits optional.

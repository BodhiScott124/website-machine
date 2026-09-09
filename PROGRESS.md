# Progress

> This file is the memory of the project. Claude reads it at the start of every
> session and updates it at the end. Keep it honest and keep it short — if it
> stops being true it stops being useful.

**Last updated:** 2026-09-08 — end of session 1

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

## What's next

**Stage 2 — make the site properly his:** real photos, his own words, and split
the one page into Home / About / Contact pages. Done when he'd be happy for a
paying photography client to see it.

## Open questions for Bodhi

- What area does he shoot in / travel to? (Left off the site rather than
  guessing. Email handle "bscotthawaii" hints at Hawaii but not confirmed.)

## Stages

- [x] **1. My photography site** — LIVE at website-machine-eight.vercel.app
- [ ] **2. Make it properly mine** — my real photos, my words, my name
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

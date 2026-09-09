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

**Stage 1 — in progress.** The photography site is built and running on my own
computer. It is not on the internet yet.

To get it live I need two free accounts: **GitHub** and **Vercel**. That's the
next thing (see "What's next").

## What's working right now

- Git and Node.js are installed on the PC (they were missing at the start).
- The project is a Next.js website with Tailwind for styling.
- One page exists for **Bodhi Scott Photography**: a top bar, a hero
  ("Landscapes and portraits by Bodhi Scott"), a placeholder portfolio grid,
  a short About, and a Contact section.
- All the wording and the portfolio images are placeholders for now — real
  words and photos come in Stage 2.
- The site builds cleanly (`npm run build` passes) and is fully static, so it
  will deploy to Vercel without trouble.
- Work is committed to git locally (2 commits).

## What's next

1. **Bodhi: create a free GitHub account.** Follow `guide/setup-and-accounts.md`
   section 2. Then tell Claude the username so it can connect the project and
   back it up online.
2. **Bodhi: create a free Vercel account** ("Continue with GitHub") — same guide,
   section 3.
3. Claude deploys the site to Vercel and gives Bodhi a public link he can open
   on his phone. **That finishes Stage 1.**
4. Then Stage 2: real photos, Bodhi's own words, split into Home / About /
   Contact pages.

## Open questions for Bodhi (needed soon)

- What area does he shoot in / travel to? (Left off the site for now rather
  than guessing. Email handle is "bscotthawaii" — possibly Hawaii, but not
  confirmed, so not on the site.)

Resolved: contact email is bscotthawaii@gmail.com — now on the Contact section.

## Stages

Rough order. No deadlines — I get to each one when I get to it.

- [~] **1. My photography site** — built locally; not yet live
- [ ] **2. Make it properly mine** — my real photos, my words, my name
- [ ] **3. Turn it into a template** — the same design, but able to hold any business's details
- [ ] **4. First AI** — get Claude to write website copy for a made-up business
- [ ] **5. The knowledge file** — one file per business holding everything true about it
- [ ] **6. Read a real website** — pull a real business's details off their existing site
- [ ] **7. Join it all up** — website address in, finished site out
- [ ] **8. A second template** — and have it pick the right one automatically
- [ ] **9. Colours and photos** — match the business's real brand colours, find good images
- [ ] **10. Put a demo online** — a real prospect's site, on my own domain
- [ ] **11. Full circle** — point the machine at my own photography site

## Decisions I've made

*(Claude: record decisions here as we make them, with the reason.)*

- **Followed the brief's stack: Next.js + TypeScript + Tailwind, aimed at
  Vercel.** Considered a plain single HTML file (simpler for one page), but the
  later stages and Lucas's reference build all use Next.js, so starting there
  avoids a rebuild.
- **Installed Node.js even though `setup-and-accounts.md` says it isn't needed.**
  On this PC the Claude app did not expose a usable Node/npm, and the website
  tools need it. Installed via `winget` (Git too). *Question for Lucas: is this
  expected, or should the guide mention it?*
- **Kept the whole site to one page with sections** (Work / About / Contact as
  anchors), matching "Stage 1 = one page".

## Things I want to add later

- Nothing yet.

## Questions for Lucas

- The setup guide says Node.js is not needed, but it wasn't available and the
  build tools require it. Installed it via winget. Is that the right call?

## Session log

- **Session 1 (2026-09-08):** Met Bodhi. Named nothing new — business is "Bodhi
  Scott Photography", shoots landscapes for fun and portraits for work. Fixed a
  nested-folder issue, installed Git + Node, scaffolded Next.js, built the
  one-page Stage 1 site with placeholder content, verified it builds and runs.
  Added his real contact email to the site. Stopped before GitHub/Vercel signup
  — that's Bodhi's next move to get it live.

# Build brief

**This document is for Claude.** He doesn't need to read it — he just needs to
point you at it.

---

## What we're building

A tool that turns a small business's existing website into a much better one,
automatically.

Point it at a website address. It reads the site, works out what the business
actually does, writes new content, and produces a finished multi-page website
ready to show the owner.

The purpose is **sales**. He shows the finished site to the business and asks if
they want it. So the bar is not "technically impressive" — it's *"obviously
better than the one they've got"*, produced in a couple of minutes.

## Who operates it

**Only him.** There are no other users. Ever.

This is the most important architectural fact in this document, and it should
delete a lot of work.

### Do not build

- ❌ No web forms for entering a URL — he tells you the URL
- ❌ No progress screens — he's watching you work
- ❌ No preview/approve interface — he opens the site and looks at it
- ❌ No content editor or CMS — he asks you to change things
- ❌ No login, no password, no accounts, no sessions
- ❌ **No database.** Everything is ordinary files on his PC, backed up to GitHub.
- ❌ No API routes, no admin panel, no dashboard

If you ever catch yourself building an interface so "the user" can do something —
stop. He is the user, and he has you.

### Do build

Command-line scripts that you run on his behalf, and the generated websites
themselves.

## How it's organised

```
website-machine/
  clients/
    barwon-pool-shop/
      knowledge.json      the facts about this business — the source of truth
      notes.md            contact details, status, price, what they've said
      site/               the generated website
  tools/
    scrape.ts             read a website, pull out the raw material
    build-knowledge.ts    turn raw material into knowledge.json (uses AI)
    write-content.ts      turn knowledge.json into website copy (uses AI)
    make-site.ts          turn knowledge + content into an actual website
  templates/
    photography/
    tradie/
    ...
```

He should be able to open any of these files and roughly understand it. Prefer
obvious over clever.

## The one idea that matters

**`knowledge.json` is the source of truth.**

Everything about a business gets extracted into one structured file first. The
website is then built *from that file* — never directly from the scraped page.

Roughly:

```json
{
  "businessName": "",
  "industry": "",
  "phone": "", "email": "", "address": "",
  "services": [{ "name": "", "description": "" }],
  "about": "",
  "openingHours": {},
  "brandColours": { "primary": "", "secondary": "" },
  "socialLinks": {},
  "images": []
}
```

Why this matters, and it's worth explaining to him when you get there: it means
every later step has one clean, checkable thing to work from. When a site comes
out wrong, you look at the knowledge file and can immediately see whether the
problem was *reading* the business or *building* the site. Without it you're
guessing.

It also means he can fix a business's details by editing one file.

## Rules for generated content

This is what separates a site worth $1,000 from obvious AI slop.

- **Reuse the facts, rewrite the words.** Never copy sentences off the old site.
- **Never invent facts.** No made-up awards, years in business, or testimonials.
  If something isn't known, leave it out or write around it.
- **No AI voice.** Banned: "elevate", "unlock", "seamless", "cutting-edge",
  "passionate about delivering", "in today's fast-paced world". If it reads like
  a press release, rewrite it.
- **Local and concrete.** Real suburb names, real services, real specifics.
- **Short.** Small business owners and their customers don't read paragraphs.
- **Never stop because something's missing.** Generate the best site you can with
  what you have, and tell him what was missing so he can ask the owner.

## Rules for the design

- Clean, modern, mobile-first. **Most of these sites will be looked at on a
  phone** — including by the owner when he sends them the link. If it's wrong on
  a phone, it's wrong.
- Sans-serif.
- Use the business's real brand colours when they can be found; fall back to
  sensible template defaults.
- Every site is multiple pages: **Home, About, Services, Contact.**
- Fast. No heavy frameworks, no animation for its own sake.

## Technical choices

- **Next.js + TypeScript + Tailwind CSS**, deployed on **Vercel**.
- **Claude** for the AI steps, via the Anthropic API.
- **Files on disk** for storage. No database.
- Keep the AI calls in one place so the model can be swapped later without
  rewriting everything.

⚠️ **Check the installed version's own documentation before writing framework
code.** Next.js in particular changes fast, and its current APIs and file
conventions may differ from what you remember. Read the docs that ship in
`node_modules/next/dist/docs/` rather than relying on recall. Getting this wrong
produces confusing errors that he has no way to diagnose.

## The stages

In order. Finish one, check it works, commit it, then move on. **Never start the
next stage while the current one is broken.**

There are no deadlines. He gets to each one when he gets to it.

---

### Stage 1 — His photography site

A single-page website for his own photography business, live on the internet.

Ask him what the business is called (he may not have named it — help him). Ask
what kind of photography he shoots. Keep it to one page.

**Done when:** he can open a public web address on his phone and see it.

*This is the hook. Get here fast — ideally the first session. Everything else is
easier once he's seen something of his own go live.*

---

### Stage 2 — Make it properly his

Real photos, his own words, Home / About / Contact. Something he'd genuinely send
to someone who asked about a shoot.

**Done when:** he'd be happy for a paying photography client to see it.

---

### Stage 3 — Separate the design from the details

Pull his details — name, contact, services, about text — out of the page and into
a `knowledge.json` file. The page reads from the file.

Nothing changes visually. That's the point, and it's worth saying so: the site
looks identical but now the design and the details are separate things.

**Done when:** he changes his phone number in `knowledge.json`, and the website
updates.

*This is where he learns the central idea of the whole project, using his own
business as the example.*

---

### Stage 4 — First AI

He'll need an Anthropic API key here — **stop and walk him through
`guide/setup-and-accounts.md` before you need it, not when you hit the wall.**

Write a small script that asks Claude to write an "about" paragraph for a
made-up business, and prints it.

**Done when:** he asks you to run it and sees AI-written text appear that nobody
typed.

*Small moment, big one. This is the first time his tool does something by itself.*

---

### Stage 5 — The knowledge file, properly

A script that takes messy text about a business and returns a clean, structured
`knowledge.json`. Validate the shape so bad data can't get through silently.

One folder per client under `clients/`.

**Done when:** he pastes in a few scruffy paragraphs about a local business and
gets back a tidy, correct knowledge file.

---

### Stage 6 — Read a real website

Fetch a real business's website and pull out the raw material: page text,
business name, phone, email, address, social links, images, logo.

Feed it into Stage 5.

**Done when:** he gives you the address of a real local business and gets back a
filled-in knowledge file that's mostly right.

*Expect gaps. Opening hours especially are often invisible to a simple fetch
because they're loaded by JavaScript. That's fine — he can fill them in by hand.
Tell him what's missing rather than inventing it.*

---

### Stage 7 — Join it all up

One instruction from him — *"build a site for [address]"* — runs the whole chain:
scrape → knowledge → content → finished website in `clients/<name>/site/`.

**Done when:** he names a business and gets a complete multi-page website he can
look at, without doing anything else.

*This is the machine working. Make a bit of a moment of it.*

---

### Stage 8 — A second template

Add a second design for a different kind of business — a tradie is a good
contrast to photography. Have the AI pick which template fits, based on what the
business does.

**Done when:** a plumber and a photographer come out looking genuinely different
and appropriate.

---

### Stage 9 — Colours and photos

Pull the business's real brand colours off their existing site and use them.
Add proper photography via the Pexels API (free — see the setup guide).

**Done when:** a generated site uses the business's actual colours, not generic
ones. This is a big part of "obviously better".

---

### Stage 10 — Put a demo online

Deploy a real prospect's site to its own address on his domain —
`theirname.hisdomain.com`.

**Important:** each client site is its **own Vercel project** from the very first
demo, not a page inside a shared app. This is what makes selling it later a
five-minute job instead of a rebuild. See `guide/selling-and-handover.md` — read
that before this stage.

**Done when:** he can text a real business a link to their new website.

---

### Stage 11 — Full circle

Run his own photography website — the one he built by hand in Stage 1 — through
the machine he's built.

**Done when:** he's looking at two versions of his own site: the one he made on
day one, and the one his tool made.

---

## After that

Only if he wants to. Ideas: more templates, legal pages (privacy/terms —
Australian), automatic SEO tags, reviews, opening hours, a photography-specific
template with a proper gallery, swapping Claude for a different AI model to see
that it still works.

By this point he should be having his own ideas. Those are better than these.

## The reference build

Lucas has built a version of this: **https://github.com/sherudogaro/website-rebuilder**

Use it as a worked example **after** he's attempted something, not as a source to
copy from. His version is deliberately simpler — Lucas built his for other people
to operate, which is where all the extra machinery comes from.

If their approaches differ and his works, that's a good outcome. Tell him so.

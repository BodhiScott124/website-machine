# Accounts and setup

Everything you'll need, what it costs, and when to get it.

**You don't need all of these now.** You need the first three to get started. The
rest turn up later, when there's an obvious reason for them. Don't sign up for
things you don't need yet.

---

## The short version for your dad

Show him this bit.

| When | What | Cost |
|---|---|---|
| To start | Claude Pro subscription | **$20/month** |
| To start | GitHub, Vercel | Free |
| Once the tool starts using AI | Anthropic API credit | **~$20, one-off to begin** |
| Later, optional | A domain name | ~$15/year |
| **Only if a client actually pays** | Vercel Pro | $20/month |

**Starting cost: $20/month.** Cancellable any month. Nothing here is a contract.

There's a fuller note for him in the email Lucas sent.

---

## 1. Claude Code — do this first

This is the thing that does the building. Everything else can wait.

### What it costs

**Claude Pro — $20/month** ($17/month if paid annually). Claude Code is included
in Pro. It is **not** in the free plan, so this one is genuinely required before
anything can happen.

Don't get Max yet. It's $100/month and it only earns its money if you're hitting
limits constantly, which you won't be at the start. See "if you hit a limit"
below.

### Whose account it is

**Your dad should create the account and put his card on it**, and you use it.
Anthropic expects account holders to be adults, and it's his card anyway — so
it's simplest and cleanest if the account is his from the start. Sit down and do
it together; it takes about five minutes.

### Step 1 — The subscription

Your dad goes to **claude.com**, creates an account, and subscribes to **Pro**.

### Step 2 — Install Claude

1. Go to **https://claude.com/download** — it works out you're on Windows
   automatically and gives you the right file.
2. Run the file you downloaded.
3. Windows may say **"Do you want to allow this app to make changes to your
   device?"** Click **Yes**. This appears whenever you install anything and is
   completely normal.
4. Open **Claude** from your Start menu.
5. Sign in with the account from Step 1.
6. Click the **Code** tab at the top.

**You'll know it worked when:** you see the Code tab and it doesn't ask you to
upgrade. If it asks you to upgrade, the subscription hasn't gone through yet —
check with your dad.

### Step 3 — Install Git (Windows only, and you do need it)

On Windows, Claude Code needs a separate free program called **Git** to work on
files on your computer. It comes built into Macs, but not into Windows, so you
have to add it. It's free and takes two minutes.

Git is the thing that saves a snapshot of your work every time something
changes. Without it, Claude can't properly work on your project.

1. Go to **https://git-scm.com/downloads/win**
2. Click the download for **64-bit Git for Windows Setup** (that's the normal one
   — almost every PC is 64-bit).
3. Run the file you downloaded.
4. **Windows may show a blue "Windows protected your PC" box.** This looks scary
   and isn't a problem — it appears for lots of legitimate downloads. Click
   **More info**, then **Run anyway**.
5. Click **Yes** to the "allow this app to make changes" box.
6. **The installer asks you a LOT of questions across about ten screens.** Ignore
   all of them and click **Next** on every single one, then **Install**. The
   default answers are all correct. None of it matters for what you're doing.
7. When it finishes, untick anything about release notes and click **Finish**.
8. **Close Claude completely and reopen it** so it notices Git is now there.

**You'll know it worked when:** you can open a folder in Claude Code's Code tab
and it doesn't complain about Git.

If it does complain, restart your PC — that fixes it almost every time.

### Things to know

- **You do not need to install anything else after this.** No Node.js, no
  terminal, no command line. People will tell you otherwise; they're talking
  about a different version of Claude Code.
- **Windows will ask permission when things install.** Clicking Yes is expected.
- **Blue "Windows protected your PC" warnings** turn up on almost anything you
  download that isn't from the Microsoft Store. More info → Run anyway.

### If you hit a usage limit

At some point Claude may tell you you've used your limit and to come back later.
**This is normal and nothing is broken.** It happens on Pro if you've been going
hard.

If it happens once in a while, wait it out. If it starts happening every single
session and it's genuinely blocking you, that's the moment to ask your dad about
upgrading to Max — not before. By then it'll be obvious it's worth it.

---

## 2. GitHub — free

### What it actually is

GitHub is where your work gets saved online.

It's not like saving a document. It saves a **snapshot every time something
changes**, forever. So you can always go back to how things were an hour ago, or
last Tuesday, or before you broke something. That's why you can experiment freely
— nothing you do is permanent.

It's also your backup. If your PC died tomorrow, everything you've built would
still be there.

You never need to learn how it works. Claude does all of it. You just need an
account.

### Step 1 — Create the account

1. Go to **github.com**
2. Click **Sign up** (top right)
3. Enter an **email address** — use one you'll still have in five years, not a
   school one
4. Create a **password**
5. Choose a **username**

**About the username — take thirty seconds on this one.** It gets attached to
everything you ever build, it's semi-public, and changing it later is a pain.
Your name or something close to it is a safe bet. Imagine a client seeing it.
`jake-morrison` is good. `xX_sn1per_Xx` will haunt you.

If your first choice is taken, GitHub will suggest alternatives. Adding your
first initial or a number is fine.

6. It'll ask you to solve a puzzle to prove you're human. Do that.
7. Click **Create account**

### Step 2 — Verify your email

1. GitHub sends you a code. Go to your email and find it.
2. Type the code into the box on GitHub.
3. **If it doesn't arrive within a minute, check your junk folder.** It's almost
   always in there.

### Step 3 — Set up two-factor authentication

GitHub will ask you to turn on **2FA** (two-factor authentication). It's the
thing where you need a code from your phone as well as a password.

**You have to do this** — GitHub requires it and won't let you skip it forever.
Do it now rather than being interrupted by it later.

The easiest option:

1. Choose the **authenticator app** option (not SMS — it's more reliable).
2. On your phone, install a free authenticator app if you don't have one —
   **Google Authenticator** or **Microsoft Authenticator** both work fine, or the
   password manager you already use.
3. GitHub shows you a **QR code**. Open the authenticator app, choose "add
   account" or the **+** button, and point your phone's camera at it.
4. The app now shows a 6-digit code that changes every 30 seconds. Type the
   current one into GitHub.
5. **GitHub gives you recovery codes. Save them somewhere.** Screenshot them,
   email them to yourself, write them down — anywhere you'll find them again.
   These are how you get back in if you lose your phone. People skip this step
   and then get locked out of their own work.

**You'll know it all worked when:** you can go to github.com and see your own
profile page with your username on it.

### Step 4 — Tell Lucas your username

Message him what you picked. He'll send you an invite to look at his version of
this project — useful later when you want to see how he did something.

**The invite arrives as an email from GitHub.** Open it and click **Accept
invitation**, or it won't work. If you don't see it, check junk.

### Step 5 — Connect it to your project

You don't do this by hand. Once you've got Claude Code open on this folder, type:

```
I've just created a GitHub account. My username is [put yours here].
Can you connect this project to GitHub and save my work there?
Walk me through anything I need to click.
```

Claude handles the rest. It may pop open a browser window asking you to approve
something — that's expected, click approve.

**You'll know it worked when:** Claude tells you it's connected, and you can see
your project listed at github.com under your account.

From then on it saves your work automatically and you never think about it again.

---

## 3. Vercel — free to start

Vercel is what puts your websites on the internet at a real address. This is how
your photography site goes from being on your computer to being something you can
text to a friend.

**Do GitHub first.** This step needs it.

### Steps

1. Go to **vercel.com** and click **Sign Up**.
2. It offers a few ways to sign up. **Choose "Continue with GitHub."**

   Don't create a separate email-and-password account. Signing in with GitHub
   links the two together, which is what lets your websites update themselves
   automatically later. It's also one less password.

3. A GitHub window appears asking to authorise Vercel. Click **Authorize**.
   You may need to enter your GitHub password or a 2FA code again — normal.
4. Vercel asks what you want to call your workspace. Your name is fine.
5. It asks you to pick a plan. Choose **Hobby** — it's free. If it tries to steer
   you toward Pro, look for the free option; it's there.
6. It may ask to install Vercel on your GitHub account and which repositories it
   can see. **"All repositories"** is simplest.

**You'll know it worked when:** you land on a mostly empty dashboard that says
something like "no projects yet."

That's correct. You haven't built anything yet.

### Deploying

You won't do this by hand either. When you're ready to put a site online, tell
Claude:

```
Put this site on the internet with Vercel, and give me the link.
```

It'll walk you through anything you need to click the first time.

### The important bit — read this before you charge anyone

**Vercel's free Hobby plan is for personal, non-commercial projects only.** Your
photography site is fine. Building demos while you learn is fine.

**The moment someone pays you for a website, you need Vercel Pro ($20/month).**
Not "should" — need. Vercel can shut down commercial projects on the free plan
without warning, and having a paying client's website disappear is not a
conversation you want to have.

The good news: by the time you need it, you'll have been paid several hundred
dollars. Tell your dad when you get there.

---

## 4. Anthropic API credit — later, ~$20

**Don't do this yet.** Claude will tell you when you've reached it — somewhere
around Stage 4, when your tool starts using AI to write website copy.

### Why this is separate from the Claude subscription

This confuses everybody, so:

- **The $20/month Claude Pro subscription** = Claude helping *you* build. That's
  the app you're typing into.
- **Anthropic API credit** = your *finished tool* using Claude by itself, to
  write website content, without anybody typing anything.

Same company, two different accounts, two different bills. Your dad should know
this in advance so the second charge isn't a surprise.

### Steps (when you get there)

1. Your dad goes to **console.anthropic.com** and creates an account. This is a
   *different* signup from claude.com, even with the same email.
2. Add a payment method and buy about **$20 of credit** to start. That goes a
   long way.
3. **Set a spend limit before doing anything else** — open the workspace, go to
   the **Limits** tab, and set a monthly cap. Something like $30.
4. Create an API key. Claude will tell you exactly where to put it.

### Set the spend limit. Seriously.

An API key is a thing that spends money automatically. If something goes wrong in
a loop, it can spend a lot of it quickly. The cap takes one minute and means the
worst possible outcome is a small bill and an annoying afternoon.

**Also: never put an API key in a message, a screenshot, or anywhere public.** If
you ever think one has leaked, tell Lucas immediately and delete it in the
console — it takes ten seconds and it's completely fine to do. (Ask Lucas about
the time he leaked his own. He'll admit it.)

---

## 5. Pexels — later, free

Free professional photos for the websites you build. You'll need it around Stage
9, when sites start needing images.

1. Go to **pexels.com**, create a free account.
2. Go to **pexels.com/api**, request an API key.
3. Instant, free, no card.

---

## 6. A domain name — later, ~$15/year

At some point you'll want to send prospects a link that looks like *you* rather
than a random address ending in `.vercel.app`.

**You only ever need one domain.** Every client demo lives on it as its own
subdomain:

```
barwon.yourname.com
joesplumbing.yourname.com
surfsidedental.yourname.com
```

One domain, unlimited demos. Buy it when you're about to show a real prospect,
not before. `guide/selling-and-handover.md` explains how this works and why it
matters later.

---

## What you do NOT need

People and tutorials will suggest these. You don't need any of them:

- **A database** (Supabase, Postgres, anything). Your version keeps everything in
  ordinary files. Simpler, free, and it can't quietly disappear on you — which is
  a thing that genuinely happens and cost Lucas an afternoon.
- **A code editor** (VS Code, Cursor). Claude Code has one built in.
- **The terminal or command line.** Claude runs the commands.
- **Node.js installed separately.** Comes with the Claude app.
- **To learn JavaScript, React, or Next.js.** You'll pick up bits by watching.
  You don't need to study anything.

---

## If a step doesn't work

Don't push through and hope. Tell Claude exactly what you're seeing:

```
I'm on step 3 of the Vercel setup and instead of what the guide says,
I'm seeing this: [describe it]. What do I do?
```

If that doesn't sort it in a few minutes, message Lucas with a photo of your
screen. Setup is genuinely the fiddliest part of the whole project and it gets
much easier after this.

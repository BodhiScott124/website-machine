# When you're stuck

You will be. Constantly. That isn't a sign you're doing it wrong — it's most of
what building anything is.

The difference between people who finish and people who don't isn't that one
group gets stuck less. It's that one group has a routine for it.

Here's yours.

---

## First, always try this

```
This isn't working. Here's exactly what I did: [what you did].
Here's what I expected: [what you expected].
Here's what actually happened: [what happened].
```

Copy any error message in full, even if it looks like nonsense. **Especially** if
it looks like nonsense — that's usually the useful part.

This fixes most things on the first go.

---

## Nothing here can be permanently broken

Worth knowing up front, because it removes most of the fear:

**Your work is saved in git.** Every time Claude commits, it's a snapshot you can
go back to. If something gets badly mangled, you're never more than one sentence
from a working version:

```
Something's gone wrong. Can we go back to the last version that worked?
```

You cannot destroy this project by pressing the wrong thing. Experiment freely.

---

## Specific situations

### "You've reached your usage limit"

Normal. Nothing's broken. You've used your share of Claude for now.

Wait it out and come back later. If it's happening every session and genuinely
blocking you, that's when to talk to your dad about a bigger plan — see
`guide/setup-and-accounts.md`. Not before.

### The same thing keeps failing

```
Stop. We've tried this a few times and it's not working. Let's go back to
the last thing that definitely worked and try a different approach.
```

Say this the moment you notice the third attempt. AI will cheerfully try
variations of a broken idea forever — it doesn't get frustrated, so you have to
be the one who notices.

### You've completely lost track of what's going on

```
Read PROGRESS.md and give me a plain English summary of where we are,
what's working, and what we were about to do.
```

No shame in this at all. It's exactly what that file exists for.

### Your website won't load

Ask this:

```
My site isn't loading. Is the problem on my computer or is it the version
that's on the internet? How do I tell?
```

They're different problems with different fixes, and knowing which one you have
is most of the answer.

### You don't understand a word of what's happening

```
Explain what you just did like I've never written code. Why did we need it?
```

Use it constantly. Nobody is keeping score, and you'll be surprised how much
sticks after a few weeks.

### It's building something you didn't ask for

```
That's more than I asked for. Let's do just [the small thing] and nothing
else for now.
```

### You broke something and you don't know what

```
Something's not working and I'm not sure what I changed. Can you check what's
different from the last working version and tell me what happened?
```

---

## When to message Lucas

**Rule of thumb: half an hour of properly stuck.**

Not half an hour of trying things and making progress — half an hour of going
nowhere. Also message him straight away if:

- You're about to spend money and aren't sure you should
- Something's confusing about an account, a key, or a bill
- You think you might have leaked an API key *(tell him immediately — it's
  fixable in about ten seconds, and it's a completely normal mistake. He's done
  it.)*
- A real client is involved and something's gone wrong
- You're losing interest and can't work out why

That last one is the important one. **The way this fails is not a technical
problem — it's quietly stopping and not saying anything.** If it's gone boring or
frustrating, tell him. That's fixable too.

### What to send him

1. **A photo of your screen.** Genuinely the fastest thing.
2. **What you were trying to do.**
3. **What you expected, and what happened instead.**

Don't write an essay. Three lines and a photo.

**Never send a screenshot with an API key visible.** If you're not sure whether
something is a key, ask before sending.

---

## Two things that are true

**Everything feels impossible right before it works.** That feeling is not
information about whether you can do it. It's just what the last twenty minutes
of a problem feels like, every time, for everyone.

**You're allowed to stop for a bit.** Put it down for a few days. `PROGRESS.md`
will still know exactly where you were. The project doesn't go stale and neither
do you.

The only real way to lose is to stop and not mention it.

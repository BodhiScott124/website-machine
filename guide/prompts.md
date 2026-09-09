# What to say

Copy and paste these. That's what they're for.

You'll stop needing most of them after a couple of weeks, because you'll start
saying it in your own words without thinking. That's the point.

---

## Every session

### Starting up

```
Read PROGRESS.md and tell me where we're up to and what's next.
```

**Always start with this.** Claude begins each session knowing nothing about what
you did yesterday. This is what fixes that. Ten seconds, and it means you're not
explaining yourself from scratch every time.

### Stopping

```
Update PROGRESS.md with what we did, what's working now, and what's next.
Then save my work.
```

**Never finish a session without this.** If you only ever remember two prompts
from this whole file, make it this one and the one above.

Stopping mid-thing is completely fine — just say so:

```
I need to stop, and we're halfway through this. Update PROGRESS.md with
exactly where we got to and what the next step is, so tomorrow makes sense.
Then save my work.
```

---

## Getting things done

### Starting the next stage

```
Read PROGRESS.md and guide/build-brief.md. We're up to stage [N].
Explain what we're building in this stage and what it'll look like when
it works, then let's start.
```

Asking what it'll look like when it works, *before* starting, is the single
biggest upgrade you can make to how you use AI. You'll know whether it actually
worked instead of guessing.

### Checking something really works

```
How do I check this actually works? Give me something I can see myself.
```

Not "does it work" — *show me*. A link to open, a page to look at, something on
screen. Claude saying it works is not the same as it working.

### Changing something

```
On [the page / the thing], I want [what you want] instead of [what's there].
```

Be specific about *where*. "Make it better" gets you something random. "The text
under my name on the home page is too small on my phone" gets you the fix.

---

## When things go wrong

### Something's broken

```
This isn't working. Here's exactly what I did: [what you did].
Here's what I expected: [what you expected].
Here's what actually happened: [what happened — copy the error, or describe
what you see on screen].
```

**This is the most valuable prompt here**, and the skill it teaches works on
everyone, not just AI. "It's broken" can't be answered. Those three lines nearly
always can.

If there's an error message, copy the whole thing, even if it looks like
gibberish. Especially if it looks like gibberish.

### You don't understand what just happened

```
Explain what you just did like I've never written code. Why did we need it?
```

Use this constantly and never feel bad about it. Understanding roughly what's
happening is what turns this from magic into a skill you own.

There's no such thing as asking too often.

### It's gone round in circles

```
Stop. We've tried this a few times and it's not working. Let's go back to
the last thing that definitely worked and try a different approach.
```

Use this the moment you notice the same thing failing three times. AI will
happily keep trying variations of a broken idea forever — it doesn't get bored or
frustrated the way you do.

**Knowing when to call it and back up is a genuine skill.** People who ship
things have it. People with folders full of dead projects don't.

### It's drifted off what you agreed

```
Re-read PROGRESS.md and guide/build-brief.md. I think we've drifted —
we're supposed to be working on [thing]. Can we get back to it?
```

Long sessions wander. This pulls it back.

### It's building something you didn't ask for

```
That's more than I asked for. Let's do just [the small thing] and nothing
else for now.
```

Simple things that work beat clever things that half work. Every time.

---

## When you want to think

### Should I do this?

```
I'm thinking about [idea]. What would that involve, and is it a good idea
right now or should it wait?
```

Good for the ideas that turn up mid-build. Usually the answer is "later" — get it
written into `PROGRESS.md` under "things I want to add later" and carry on.

### How did Lucas do it?

```
Look at how Lucas's version handles this:
https://github.com/sherudogaro/website-rebuilder
How does his approach compare to what we've built? Is his better?
```

Use this *after* you've built something, not before. Comparing your version to
someone else's teaches you a lot. Copying theirs before you've tried teaches you
nothing.

### What have I actually got?

```
Give me a plain English summary of what this project can do right now,
as if you were explaining it to my dad.
```

Good for when it feels like nothing's happening. Usually more works than you
think.

---

## The four things that make a prompt good

**1. Say what "done" looks like.** "Build me a contact page" is vague. "Build me
a contact page with my email and Instagram, that looks right on a phone" can
actually be checked.

**2. One thing at a time.** Three requests in one message gets you three
half-done things.

**3. Say where.** "The heading on the About page", not "the text".

**4. When it's broken, describe what you *see*.** Not your theory about why.
Just what's on the screen. Your theory is usually wrong, and it sends everyone
looking in the wrong place — including you.

---

## And the thing that isn't a prompt

**Tell it when it's wrong.**

If Claude says something's finished and it obviously isn't — say so. If it
explains something and you don't follow — say so. If it's doing something that
feels wrong — say so.

It's not going to be offended, and it can't tell that something's wrong unless
you mention it. Most people are far too polite to AI and get worse results
because of it.

```
That's not right. [What's actually happening.]
```

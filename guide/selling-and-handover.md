# Selling one, and handing it over

Read this **before** Stage 10, not when someone says yes.

The whole point is that when a business owner says *"yes, I'll take it"*, you say
*"great, it'll be live tomorrow"* — instead of disappearing for a weekend to work
out how.

---

## The decision that makes everything else easy

**Every client site is its own Vercel project, from the very first demo.**

Not a page inside one big app. Its own project, with its own address.

```
Demo you send them:      barwon.yourname.com
After they buy:          barwonpoolshop.com.au
```

**Same project. You just add their domain to it.** Nothing gets rebuilt, nothing
moves, no links break. Going live is about five minutes of clicking.

If instead you'd built demos as pages inside one app — `yourname.com/barwon` —
then every link, image and menu on that site assumes it lives at `/barwon`, and
moving it to its own domain means fixing all of it. For every client. Forever.

It costs nothing to get this right on day one and it's genuinely annoying to fix
later. Get it right on day one.

You still only need **one domain of your own**. Every demo is a subdomain of it,
and you can have as many as you like for free.

---

## How a sale actually goes

1. You find a business with a bad website.
2. You run it through the machine. Two minutes.
3. You look at it and fix anything obviously wrong. Ten minutes.
4. You put it online at `theirname.yourname.com`.
5. You send them the link: *"I rebuilt your website. Have a look. If you want it,
   it's $X."*
6. They say yes.
7. **You need to already know what happens next.** That's the rest of this
   document.

The link doing the selling is the whole trick. You're not asking them to imagine
anything — it already exists, with their real details in it, and it's better than
what they have.

---

## Two ways it can go

### Path A — you host it (push for this one)

They pay you to build it, then a smaller amount monthly to keep it running and
make changes.

- Their domain points at your Vercel project
- You keep control, updates are easy, and you get paid every month
- **Much better business.** One good client paying monthly beats three one-off
  jobs.

### Path B — they buy it outright

One payment, it's theirs, you're done.

- Vercel lets you transfer a project to someone else's account
- Because each site was already its own project, this is a genuine handover
  rather than a rebuild
- Fine to offer — just charge more, because there's no monthly after it

**Offer A first, keep B in your pocket.** Some people want to own things and
that's fine.

---

## Going live — the checklist

Almost every business you approach **already owns a domain**. That's the whole
point — they have an old website. So going live usually means pointing their
existing domain at your site, not buying anything.

That also means: **their current website is a live business asset and you must not
break it.**

1. **Show them on a subdomain first.** Set up `new.theirdomain.com` and let them
   sit with it for a few days. Their real site stays untouched.
2. **Get an explicit yes to switch.** In writing — a text is fine.
3. **Do the switch on a Tuesday morning.** Not Friday afternoon. If something
   goes odd you want a working week ahead of you, not a weekend of silence.
4. **Change the DNS** to point their domain at your Vercel project. Claude can
   walk you through it, and it's usually two settings at whoever they bought the
   domain from.
5. **Wait and check.** It can take a few hours. Check on your phone, on wifi and
   off it.
6. **Tell them it's done**, and to let you know if anything looks wrong.
7. **Leave the old site alone for a couple of weeks.** Don't let anyone delete
   anything until the new one has clearly settled.

---

## Handing over — the checklist

If they're buying it outright:

1. They create a free Vercel account.
2. You transfer the project to them.
3. You send them the `clients/theirname/` folder — the knowledge file and the
   site. It's theirs, they paid for it.
4. Tell them plainly what they now own and what they're responsible for.
5. **Offer to keep looking after it for a monthly fee anyway.** Plenty of people
   say yes once they realise they'd otherwise have to do it themselves.

---

## Four things that will bite you

**1. Never buy a domain in your own name for a client.**
When a domain is newly registered it's **locked for 60 days** and cannot be
transferred to anyone. So if you buy it for them, you literally cannot hand it
over for two months, even if you both want to. It also looks like you're holding
their business hostage.

Either have *them* buy it, or sit with them while they buy it on their own
account. It takes five minutes and saves an argument.

**2. Never break their existing website.**
Subdomain first, always. A small business owner whose website vanishes for an
afternoon will not pay you, will not recommend you, and will tell people.

**3. The free Vercel plan is not for commercial use.**
The moment someone pays you, you need **Vercel Pro — $20/month**. Vercel can shut
down commercial projects on the free plan without warning. Don't find that out
with a client's website.

By then a client is paying you far more than $20. Just tell your dad and sort it
out.

**4. Keep notes on every client from the first demo.**
`clients/theirname/notes.md`:

```markdown
# Barwon Pool Shop
Contact: Dave — 0400 000 000 — dave@...
Their domain: barwonpoolshop.com.au (they own it, bought at GoDaddy)
Status: demo sent 3 March
Price quoted: $900 build + $40/month
Notes: wants the pool photos changed. Mentioned a mate who runs a cafe.
```

Boring, and it's the difference between a business and a pile of half-remembered
conversations. In six months you'll have twenty of these and no memory of any of
them.

---

## What to charge

Not advice, just orientation: small business websites commonly run somewhere from
several hundred to a few thousand dollars, plus monthly hosting if you're keeping
it running.

Some things worth knowing at 16:

- **Don't charge $50 because you're young and it was quick.** They're not buying
  your hours, they're buying a website that gets them customers. What it cost you
  to make is irrelevant to what it's worth to them.
- **The first one can be cheap.** Being able to say "here's one I did for a
  business down the road" is worth more than the money on your first sale.
- **Monthly beats one-off.** Ten clients paying $40/month is $4,800 a year that
  arrives whether or not you find anyone new.
- **Ask Lucas before you quote.** He's done this. That's what he's there for.

// This is the whole website — one page, four sections: a top bar, a hero,
// a short "about", and a way to get in touch. Everything you see on the site
// is written here.

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Placeholder tiles for the portfolio. Swap these for real photos in Stage 2.
// Each tile gets a tone so the grid looks intentional until the photos land.
const work = [
  { caption: "Coastline at first light", tone: "bg-sky-100" },
  { caption: "Ridgeline, late afternoon", tone: "bg-amber-100" },
  { caption: "Portrait — natural light", tone: "bg-stone-200" },
  { caption: "Still water", tone: "bg-slate-200" },
  { caption: "Portrait — on location", tone: "bg-rose-100" },
  { caption: "Valley after rain", tone: "bg-emerald-100" },
];

export default function Home() {
  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Bodhi Scott Photography
          </a>
          <nav className="flex gap-6 text-sm text-black/60">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-black/50">
            Photographer
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Landscapes and portraits by Bodhi Scott.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-black/70">
            Landscape work shot for the love of it, and portrait sessions for
            people who want a photo that actually looks like them.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Book a shoot
          </a>
        </section>

        {/* Work */}
        <section
          id="work"
          className="scroll-mt-20 border-t border-black/10 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
            <p className="mt-2 text-black/60">
              A portfolio is on the way — real photos go here next.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {work.map((item) => (
                <div key={item.caption}>
                  <div
                    className={`aspect-square w-full rounded-lg ${item.tone}`}
                  />
                  <p className="mt-2 text-sm text-black/55">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-20 border-t border-black/10"
        >
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <div className="mt-6 max-w-2xl space-y-4 text-black/75">
              <p>
                I&apos;m Bodhi Scott. I started with landscapes — long walks,
                early starts, waiting for the light to do something worth
                keeping.
              </p>
              <p>
                That turned into portrait work: the same patience, pointed at
                people. Sessions are relaxed and unhurried, and you come away
                with photos you&apos;re glad exist.
              </p>
              <p className="text-black/50">
                (This is placeholder text for now — we&apos;ll replace it with
                your own words in Stage 2.)
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-black/10 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-4 max-w-xl text-black/75">
              For bookings and enquiries, send me an email and tell me a bit
              about what you have in mind.
            </p>
            <a
              href="mailto:hello@example.com"
              className="mt-6 inline-block text-lg font-medium underline underline-offset-4 hover:opacity-70"
            >
              hello@example.com
            </a>
            <p className="mt-2 text-sm text-black/45">
              (Placeholder address — give Claude your real email to put here.)
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-black/45">
          © {new Date().getFullYear()} Bodhi Scott Photography
        </div>
      </footer>
    </>
  );
}

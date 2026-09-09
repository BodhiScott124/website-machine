// The whole website — one page: a full-screen photo up top, then the gallery,
// a short "about", and a way to get in touch. All the words and the photo list
// live in this file.

import Image from "next/image";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// The gallery. Each photo has a small version (thumb) shown in the grid.
// To add or remove a photo: put the file in public/photos, run the resize
// step, then add a line here.
const photos = [
  { file: "cypress-sunrise", caption: "Sunrise through the cypresses" },
  { file: "hills-dawn", caption: "Mist in the valley at dawn" },
  { file: "milky-way", caption: "The Milky Way core" },
  { file: "sea-sunset", caption: "Last light over the water" },
  { file: "ridge-blue-hour", caption: "Blue hour, crescent moon" },
  { file: "dusk-storm-light", caption: "Storm colour at dusk" },
  { file: "moon", caption: "Waxing gibbous moon" },
];

export default function Home() {
  return (
    <>
      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-white">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Bodhi Scott Photography
          </a>
          <nav className="flex gap-6 text-sm text-white/80">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero — full-screen photo with the name over it */}
        <section className="relative flex h-[85vh] min-h-[520px] items-end">
          <Image
            src="/photos/web/hills-dawn.jpg"
            alt="Mist lying in the valleys at first light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Landscape &amp; night-sky photography · Hawaii
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Bodhi Scott
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Landscapes and the night sky, shot for the love of it. Portrait
              sessions on request.
            </p>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {photos.map((photo) => (
                <figure key={photo.file}>
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-stone-100">
                    <Image
                      src={`/photos/thumb/${photo.file}.jpg`}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-black/55">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 border-t border-black/10">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <div className="mt-6 max-w-2xl space-y-4 text-black/75">
              <p>
                I&apos;m Bodhi Scott. I grew up in Australia and now live in
                Hawaii — which turned out to be a good place to point a camera.
              </p>
              <p>
                I picked up photography in 2023 and it stuck fast. Most of what I
                shoot is landscapes and the night sky: chasing clear skies, early
                light, and the quiet you only get before sunrise.
              </p>
              <p>
                I also take on portrait work by commission. If you&apos;re after
                a session, get in touch and tell me what you have in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 border-t border-black/10 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-4 max-w-xl text-black/75">
              For prints, bookings and enquiries, send me an email.
            </p>
            <a
              href="mailto:bscotthawaii@gmail.com"
              className="mt-6 inline-block text-lg font-medium underline underline-offset-4 hover:opacity-70"
            >
              bscotthawaii@gmail.com
            </a>
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

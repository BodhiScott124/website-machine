// Home page. Short by design: a big photo, a few favourites, and links through
// to the rest of the site.

import Image from "next/image";
import Link from "next/link";
import PhotoGrid from "./_components/PhotoGrid";
import { photos } from "./_data/photos";

const featured = photos.slice(0, 4);

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[460px] items-end">
        <Image
          src="/photos/web/hills-dawn.jpg"
          alt="Mist lying in the valleys at first light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-14 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Landscape &amp; night-sky photography · Hawaii
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Bodhi Scott
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Landscapes and the night sky, shot for the love of it.
          </p>
        </div>
      </section>

      {/* A few favourites */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              A few favourites
            </h2>
            <Link
              href="/work"
              className="text-sm text-black/55 underline underline-offset-4 hover:text-black"
            >
              See all work
            </Link>
          </div>
          <div className="mt-10">
            <PhotoGrid items={featured} />
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-6 max-w-2xl text-black/75">
            I grew up in Australia and now live in Hawaii. I picked up
            photography in 2023 and it stuck fast — mostly landscapes and the
            night sky, with portrait work by commission.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm text-black/55 underline underline-offset-4 hover:text-black"
          >
            More about me
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-4 max-w-xl text-black/75">
            For prints, bookings and enquiries:
          </p>
          <a
            href="mailto:bscotthawaii@gmail.com"
            className="mt-4 inline-block text-lg font-medium underline underline-offset-4 hover:opacity-70"
          >
            bscotthawaii@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}

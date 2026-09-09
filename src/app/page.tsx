// Home page. Short by design: a big photo, a few favourites, and links through
// to the rest of the site. All the words come from _data/knowledge.json.

import Image from "next/image";
import Link from "next/link";
import PhotoGrid from "./_components/PhotoGrid";
import { knowledge, featuredPhotos, photos } from "./_data/knowledge";

const heroCaption =
  photos.find((p) => p.file === knowledge.heroPhoto)?.caption ?? "";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[460px] items-end">
        <Image
          src={`/photos/web/${knowledge.heroPhoto}.jpg`}
          alt={heroCaption}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-14 text-white">
          <p className="text-xs uppercase tracking-[0.15em] text-white/70 sm:text-sm sm:tracking-[0.2em]">
            {knowledge.specialty} · {knowledge.location}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {knowledge.name}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            {knowledge.tagline}
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
            <PhotoGrid items={featuredPhotos} />
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-6 max-w-2xl text-black/75">{knowledge.about[0]}</p>
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
            Questions, or want to work together?
          </p>
          <a
            href={`mailto:${knowledge.email}`}
            className="mt-4 inline-block text-lg font-medium underline underline-offset-4 hover:opacity-70"
          >
            {knowledge.email}
          </a>
        </div>
      </section>
    </main>
  );
}

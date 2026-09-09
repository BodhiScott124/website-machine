import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Bodhi Scott Photography",
  description:
    "Bodhi Scott — landscape and night-sky photographer, Australian, based in Hawaii.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>

        <div className="mt-10 grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:items-start">
          <div className="space-y-4 text-black/75">
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
              I also take on portrait work by commission. If you&apos;re after a
              session, get in touch and tell me what you have in mind.
            </p>
            <p>
              <Link
                href="/contact"
                className="text-sm underline underline-offset-4 hover:opacity-70"
              >
                Get in touch
              </Link>
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-stone-100">
            <Image
              src="/photos/thumb/hills-dawn.jpg"
              alt="Mist lying in the valleys at first light"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

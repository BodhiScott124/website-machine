import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { knowledge, photoBlur } from "../_data/knowledge";

export const metadata: Metadata = {
  title: `About — ${knowledge.businessName}`,
  description: `${knowledge.name} — ${knowledge.specialty.toLowerCase()}, based in ${knowledge.location}.`,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>

        <div className="mt-10 grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:items-start">
          <div className="space-y-4 text-black/75">
            {knowledge.about.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            {knowledge.portraitNote && (
              <p className="text-black/55">{knowledge.portraitNote}</p>
            )}
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
              src={`/photos/thumb/${knowledge.heroPhoto}.jpg`}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              placeholder={photoBlur(knowledge.heroPhoto) ? "blur" : "empty"}
              blurDataURL={photoBlur(knowledge.heroPhoto)}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

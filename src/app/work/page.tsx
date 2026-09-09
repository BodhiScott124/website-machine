import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  countries,
  coverPhoto,
  knowledge,
  photosByCountry,
} from "../_data/knowledge";

export const metadata: Metadata = {
  title: `Work — ${knowledge.businessName}`,
  description: `${knowledge.specialty} by ${knowledge.name}, by country: ${countries
    .map((c) => c.name)
    .join(", ")}.`,
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Selected work</h1>
        <p className="mt-3 max-w-xl text-black/60">
          Landscapes and the night sky, from wherever I&apos;ve been pointing a
          camera. Pick a place.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {countries.map((country) => {
            const cover = coverPhoto(country.name);
            const count = photosByCountry(country.name).length;
            return (
              <Link
                key={country.slug}
                href={`/work/${country.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-stone-100">
                  <Image
                    src={`/photos/thumb/${cover.file}.jpg`}
                    alt={`${country.name} — ${cover.caption}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <p className="text-lg font-semibold tracking-tight">
                      {country.name}
                    </p>
                    <p className="text-sm text-white/75">
                      {count} photo{count === 1 ? "" : "s"}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

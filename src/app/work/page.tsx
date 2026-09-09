import type { Metadata } from "next";
import PhotoGrid from "../_components/PhotoGrid";
import { countryOrder, photosByCountry } from "../_data/photos";

export const metadata: Metadata = {
  title: "Work — Bodhi Scott Photography",
  description:
    "Landscape and night-sky photographs by Bodhi Scott, grouped by country.",
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Selected work</h1>
        <p className="mt-3 max-w-xl text-black/60">
          Landscapes and the night sky, from wherever I&apos;ve been pointing a
          camera. Prints of any of these are available — get in touch.
        </p>

        <div className="mt-14 space-y-16">
          {countryOrder.map((country) => (
            <section key={country} className="scroll-mt-20" id={country.toLowerCase().replace(/\s+/g, "-")}>
              <h2 className="text-xl font-semibold tracking-tight text-black/80">
                {country}
              </h2>
              <div className="mt-6">
                <PhotoGrid items={photosByCountry(country)} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

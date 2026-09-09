import type { Metadata } from "next";
import PhotoGrid from "../_components/PhotoGrid";
import { photos } from "../_data/photos";

export const metadata: Metadata = {
  title: "Work — Bodhi Scott Photography",
  description: "Selected landscape and night-sky photographs by Bodhi Scott.",
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight">Selected work</h1>
        <p className="mt-3 max-w-xl text-black/60">
          Landscapes and the night sky. Prints of any of these are available —
          get in touch.
        </p>
        <div className="mt-12">
          <PhotoGrid items={photos} />
        </div>
      </div>
    </main>
  );
}

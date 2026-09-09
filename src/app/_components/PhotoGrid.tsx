"use client";

// A gallery of photos. Each photo keeps its real shape (so tall photos show
// tall, wide photos show wide), and clicking one opens it full-size.

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Photo } from "../_data/photos";
import photoSizesJson from "../_data/photo-sizes.json";

const photoSizes: Record<string, number[]> = photoSizesJson;

function dims(file: string): [number, number] {
  const s = photoSizes[file];
  return s && s.length === 2 ? [s[0], s[1]] : [3, 2];
}

export default function PhotoGrid({ items }: { items: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, show]);

  const open = openIndex === null ? null : items[openIndex];

  return (
    <>
      <div className="gap-6 sm:columns-2 [&>*]:mb-6">
        {items.map((photo, i) => {
          const [w, h] = dims(photo.file);
          return (
            <figure key={photo.file} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group block w-full overflow-hidden rounded-lg bg-stone-100"
                aria-label={`View "${photo.caption}" larger`}
              >
                <Image
                  src={`/photos/thumb/${photo.file}.jpg`}
                  alt={photo.caption}
                  width={w}
                  height={h}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-auto w-full transition duration-300 group-hover:opacity-90"
                />
              </button>
              <figcaption className="mt-2 text-sm text-black/55">
                {photo.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 hover:text-white"
            aria-label="Close"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/70 hover:text-white sm:left-6"
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/70 hover:text-white sm:right-6"
            aria-label="Next photo"
          >
            &#8250;
          </button>

          <div
            className="relative h-[82vh] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/photos/web/${open.file}.jpg`}
              alt={open.caption}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-3 text-sm text-white/70">{open.caption}</p>
        </div>
      )}
    </>
  );
}

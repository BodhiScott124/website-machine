import Image from "next/image";
import type { Photo } from "../_data/photos";

// A responsive grid of photos with captions underneath.

export default function PhotoGrid({ items }: { items: Photo[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((photo) => (
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
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-black/45">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-black/70">
          That page doesn&apos;t exist — it may have moved, or the link was
          mistyped.
        </p>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link
            href="/"
            className="underline underline-offset-4 hover:opacity-70"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="underline underline-offset-4 hover:opacity-70"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:opacity-70"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhotoGrid from "../../_components/PhotoGrid";
import {
  countries,
  countryBySlug,
  knowledge,
  photosByCountry,
} from "../../_data/knowledge";

// Build a static page for each country at build time.
export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[country]">): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryBySlug(slug);
  if (!country) return {};
  return {
    title: `${country.name} — ${knowledge.businessName}`,
    description: `Photographs from ${country.name} by ${knowledge.name}.`,
  };
}

export default async function CountryPage({
  params,
}: PageProps<"/work/[country]">) {
  const { country: slug } = await params;
  const country = countryBySlug(slug);
  if (!country) notFound();

  const items = photosByCountry(country.name);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Link
          href="/work"
          className="text-sm text-black/55 underline underline-offset-4 hover:text-black"
        >
          ← All work
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          {country.name}
        </h1>
        <p className="mt-3 text-black/60">
          {items.length} photo{items.length === 1 ? "" : "s"}.
        </p>
        <div className="mt-12">
          <PhotoGrid items={items} />
        </div>
      </div>
    </main>
  );
}

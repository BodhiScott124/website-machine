// Everything true about the business lives in knowledge.json — name, contact,
// the words on the site, and the photo list. The pages read from here, so
// changing a detail is a one-line edit to knowledge.json and the site follows.
//
// To add or change photos: put the file in public/photos/<Country>/, run
// scripts/resize-photos.ps1, then add a line to the "photos" list in
// knowledge.json. `cover` = the photo on that country's card; `featured` = also
// shown on the Home page.

import data from "./knowledge.json";
import photoSizes from "./photo-sizes.json";

export type Photo = {
  file: string;
  caption: string;
  country: string;
  cover?: boolean;
  featured?: boolean;
};

export type Country = { name: string; slug: string };

export type Knowledge = {
  businessName: string;
  name: string;
  specialty: string;
  location: string;
  tagline: string;
  email: string;
  instagram: string;
  about: string[];
  portraitNote: string;
  printsNote: string;
  siteUrl: string;
  heroPhoto: string;
  ogPhoto: string;
  aboutPhoto: string;
  countries: Country[];
  photos: Photo[];
};

export const knowledge = data as Knowledge;

export const photos = knowledge.photos;
export const countries = knowledge.countries;
export const featuredPhotos = photos.filter((p) => p.featured);

export function photosByCountry(countryName: string) {
  return photos.filter((p) => p.country === countryName);
}

export function countryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function coverPhoto(countryName: string) {
  const inCountry = photosByCountry(countryName);
  return inCountry.find((p) => p.cover) ?? inCountry[0];
}

// [width, height, blurDataURL] written by scripts/resize-photos.ps1
const sizes = photoSizes as unknown as Record<
  string,
  [number, number, string?]
>;

export function photoBlur(file: string): string | undefined {
  return sizes[file]?.[2];
}

export function photoDims(file: string): [number, number] {
  const s = sizes[file];
  return s ? [s[0], s[1]] : [3, 2];
}


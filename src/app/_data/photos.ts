// Every photo on the site.
//
// The Work page (/work) shows one card per country. Each card links to that
// country's own page (/work/italy, /work/australia, ...) which shows all of
// that country's photos. The Home page shows the ones marked `featured`.
//
// To add or change photos:
//   1. put the file in public/photos/<Country>/
//   2. run  scripts/resize-photos.ps1   (creates web/ + thumb/ copies)
//   3. add or edit a line below — `file` is the generated name
//      ("<country>-<original filename>", lower-case, dashes for spaces).
//      scripts/photos-manifest.json lists every generated name.
//
//   `cover: true`    -> this is the photo on the country's card on /work
//   `featured: true` -> this photo also appears on the Home page

export type Photo = {
  file: string;
  caption: string;
  country: string;
  cover?: boolean;
  featured?: boolean;
};

// Country sections/cards appear in this order. `slug` is the URL bit.
export const countries = [
  { name: "Italy", slug: "italy" },
  { name: "Australia", slug: "australia" },
  { name: "Switzerland", slug: "switzerland" },
  { name: "United States", slug: "united-states" },
];

export const photos: Photo[] = [
  // ---- Italy ----
  { file: "italy-6ii7186", country: "Italy", caption: "Mist in the valley at dawn" },
  { file: "italy-6ii7051", country: "Italy", caption: "Sunrise through the cypresses", cover: true, featured: true },
  { file: "italy-6ii6916", country: "Italy", caption: "Roadside chapel at sunset", featured: true },
  { file: "italy-6ii6981", country: "Italy", caption: "Blue hour, crescent moon" },
  { file: "italy-6ii1193", country: "Italy", caption: "Bell tower on the hillside" },
  { file: "italy-6ii1197", country: "Italy", caption: "Castle above the valley" },
  { file: "italy-6ii7245", country: "Italy", caption: "A quiet corner of the village" },
  { file: "italy-6ii7707", country: "Italy", caption: "Bell tower between the rooftops" },
  { file: "italy-italian-architecture", country: "Italy", caption: "Bell tower and cypress" },
  { file: "italy-dscf1549", country: "Italy", caption: "Castel Sant'Angelo through the trees" },
  { file: "italy-dscf1607", country: "Italy", caption: "911 in the park" },
  { file: "italy-dscf1664", country: "Italy", caption: "Rooftops below the mountain" },
  { file: "italy-dscf1669", country: "Italy", caption: "Mountains through the colonnade" },

  // ---- Australia ----
  { file: "australia-img-6118", country: "Australia", caption: "Windmill and lone gum at dusk", cover: true },
  { file: "australia-img-5874", country: "Australia", caption: "The Milky Way over an old shed", featured: true },
  { file: "australia-milky-way", country: "Australia", caption: "The Milky Way core" },
  { file: "australia-dscf0703", country: "Australia", caption: "Last light over the water" },
  { file: "australia-dscf0770", country: "Australia", caption: "Storm colour at dusk", featured: true },
  { file: "australia-img-5660", country: "Australia", caption: "City skyline across the bay" },
  { file: "australia-img-6231", country: "Australia", caption: "Waves on the rocks" },
  { file: "australia-img-6248", country: "Australia", caption: "Surf against the headland" },
  { file: "australia-dscf0637", country: "Australia", caption: "Pier over the bay" },

  // ---- Switzerland ----
  { file: "switzerland-6ii1470", country: "Switzerland", caption: "The lake from above", cover: true, featured: true },
  { file: "switzerland-img-9352", country: "Switzerland", caption: "Low cloud in the valley" },
  { file: "switzerland-img-9650", country: "Switzerland", caption: "Waterfalls into a still pool" },
  { file: "switzerland-img-9651", country: "Switzerland", caption: "Spring over the mossy rocks" },
  { file: "switzerland-img-9340", country: "Switzerland", caption: "Falls in the forest" },

  // ---- United States ----
  { file: "united-states-6ii7567", country: "United States", caption: "Dusk on the mountain road", cover: true, featured: true },
  { file: "united-states-dscf0434", country: "United States", caption: "Footbridge in the wildflowers" },
  { file: "united-states-moon", country: "United States", caption: "Waxing gibbous moon" },
  { file: "united-states-north-america-nebula", country: "United States", caption: "The North America Nebula" },
  { file: "united-states-eagle-and-omega-nebulae", country: "United States", caption: "The Eagle and Omega nebulae" },
  { file: "united-states-orion", country: "United States", caption: "Orion and Barnard's Loop" },
];

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

// The gallery. The Work page shows all of these, grouped by country; the Home
// page shows the few marked `featured`.
//
// To add or change photos:
//   1. put the file in public/photos/<Country>/
//   2. run  scripts/resize-photos.ps1   (creates web/ + thumb/ copies)
//   3. add or edit a line below — `file` is the generated name, which is
//      "<country>-<original filename>", lower-case, dashes for spaces.
//      scripts/photos-manifest.json lists every generated name.

export type Photo = {
  file: string;
  caption: string;
  country: string;
  featured?: boolean;
};

// Country sections appear on the Work page in this order.
export const countryOrder = [
  "Italy",
  "Australia",
  "Switzerland",
  "United States",
];

export const photos: Photo[] = [
  // Italy
  { file: "italy-6ii7186", country: "Italy", caption: "Mist in the valley at dawn" },
  { file: "italy-6ii7051", country: "Italy", caption: "Sunrise through the cypresses", featured: true },
  { file: "italy-6ii6916", country: "Italy", caption: "Roadside chapel at sunset", featured: true },
  { file: "italy-6ii6981", country: "Italy", caption: "Blue hour, crescent moon" },
  { file: "italy-dscf1549", country: "Italy", caption: "Castel Sant'Angelo through the trees" },
  { file: "italy-dscf1669", country: "Italy", caption: "Mountains through the colonnade" },

  // Australia
  { file: "australia-img-6118", country: "Australia", caption: "Windmill and lone gum at dusk" },
  { file: "australia-img-5874", country: "Australia", caption: "The Milky Way over an old shed", featured: true },
  { file: "australia-dscf0703", country: "Australia", caption: "Last light over the water" },
  { file: "australia-dscf0770", country: "Australia", caption: "Storm colour at dusk", featured: true },
  { file: "australia-img-5660", country: "Australia", caption: "City skyline across the bay" },

  // Switzerland
  { file: "switzerland-img-9352", country: "Switzerland", caption: "Low cloud in the valley" },
  { file: "switzerland-6ii1470", country: "Switzerland", caption: "The lake from above", featured: true },
  { file: "switzerland-img-9650", country: "Switzerland", caption: "Waterfalls into a still pool" },
  { file: "switzerland-img-9340", country: "Switzerland", caption: "Falls in the forest" },

  // United States
  { file: "united-states-6ii7567", country: "United States", caption: "Dusk on the mountain road", featured: true },
  { file: "united-states-dscf0434", country: "United States", caption: "Footbridge in the wildflowers" },
  { file: "united-states-moon", country: "United States", caption: "Waxing gibbous moon" },
  { file: "united-states-north-america-nebula", country: "United States", caption: "The North America Nebula" },
  { file: "united-states-eagle-and-omega-nebulae", country: "United States", caption: "The Eagle and Omega nebulae" },
];

export const featuredPhotos = photos.filter((p) => p.featured);

export function photosByCountry(country: string) {
  return photos.filter((p) => p.country === country);
}

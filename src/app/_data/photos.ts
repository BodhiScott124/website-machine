// The gallery photo list — used by the Home page (a few of them) and the
// Work page (all of them).
//
// To add or change a photo:
//   1. put the file in public/photos
//   2. run  scripts/resize-photos.ps1
//   3. add or edit a line below (file = the name without .jpg)

export type Photo = {
  file: string;
  caption: string;
};

export const photos: Photo[] = [
  { file: "cypress-sunrise", caption: "Sunrise through the cypresses" },
  { file: "hills-dawn", caption: "Mist in the valley at dawn" },
  { file: "milky-way", caption: "The Milky Way core" },
  { file: "sea-sunset", caption: "Last light over the water" },
  { file: "ridge-blue-hour", caption: "Blue hour, crescent moon" },
  { file: "dusk-storm-light", caption: "Storm colour at dusk" },
  { file: "moon", caption: "Waxing gibbous moon" },
];

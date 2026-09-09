import type { MetadataRoute } from "next";
import { countries, knowledge } from "./_data/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = knowledge.siteUrl;
  const pages = [
    "/",
    "/work",
    "/about",
    "/contact",
    ...countries.map((c) => `/work/${c.slug}`),
  ];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}

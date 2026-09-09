import type { MetadataRoute } from "next";
import { knowledge } from "./_data/knowledge";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${knowledge.siteUrl}/sitemap.xml`,
  };
}

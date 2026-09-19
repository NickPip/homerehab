import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      // Derived from build time: the page is fully static, so a deploy is the only way its
      // content changes.
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

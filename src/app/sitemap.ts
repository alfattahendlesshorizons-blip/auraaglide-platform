import type { MetadataRoute } from "next";

import { getSitemapRoutes } from "@/core/routing";
import { siteSeoConfig } from "@/core/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date();

  return getSitemapRoutes().map((route) => ({
    url: new URL(route.pathname, siteSeoConfig.siteUrl).toString(),
    lastModified: generatedAt,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

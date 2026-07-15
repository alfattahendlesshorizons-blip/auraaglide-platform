import type { MetadataRoute } from "next";

import { siteSeoConfig } from "@/core/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/auth/"],
      },
    ],
    sitemap: `${siteSeoConfig.siteUrl}/sitemap.xml`,
    host: siteSeoConfig.siteUrl,
  };
}

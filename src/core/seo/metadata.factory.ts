import type { Metadata } from "next";

import type { SeoContract } from "@/core/content";
import { getRouteSeoFallback } from "@/core/routing";

import { siteSeoConfig } from "./site-seo.config";

function absoluteUrl(pathnameOrUrl: string) {
  if (/^https?:\/\//i.test(pathnameOrUrl)) return pathnameOrUrl;
  return new URL(pathnameOrUrl, siteSeoConfig.siteUrl).toString();
}

export interface CreatePageMetadataInput {
  pathname: string;
  seo?: SeoContract;
  title?: string;
  description?: string;
}

export function createPageMetadata({
  pathname,
  seo,
  title,
  description,
}: CreatePageMetadataInput): Metadata {
  const fallback = getRouteSeoFallback(pathname);
  const resolvedTitle = seo?.title ?? title ?? fallback?.title ?? siteSeoConfig.defaultTitle;
  const resolvedDescription =
    seo?.description ??
    description ??
    fallback?.description ??
    siteSeoConfig.defaultDescription;
  const canonicalPath = seo?.canonicalPath ?? fallback?.canonicalPath ?? pathname;
  const indexable = seo?.robots.index ?? fallback?.indexable ?? false;
  const follow = seo?.robots.follow ?? true;
  const socialImage = siteSeoConfig.socialImagePath;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
    },
    robots: {
      index: indexable,
      follow,
      googleBot: {
        index: indexable,
        follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteSeoConfig.siteName,
      locale: siteSeoConfig.locale,
      title: seo?.openGraph?.title ?? resolvedTitle,
      description: seo?.openGraph?.description ?? resolvedDescription,
      url: absoluteUrl(canonicalPath),
      images: [
        {
          url: absoluteUrl(socialImage),
          alt: siteSeoConfig.siteName,
        },
      ],
    },
    twitter: {
      card: seo?.twitter?.card ?? "summary_large_image",
      title: seo?.twitter?.title ?? seo?.openGraph?.title ?? resolvedTitle,
      description:
        seo?.twitter?.description ?? seo?.openGraph?.description ?? resolvedDescription,
      images: [absoluteUrl(socialImage)],
    },
  };
}

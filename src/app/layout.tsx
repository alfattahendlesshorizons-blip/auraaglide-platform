import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { siteSeoConfig } from "@/core/seo";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSeoConfig.siteUrl),
  title: {
    default: siteSeoConfig.defaultTitle,
    template: siteSeoConfig.titleTemplate,
  },
  description: siteSeoConfig.defaultDescription,
  applicationName: siteSeoConfig.siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteSeoConfig.siteName,
    locale: siteSeoConfig.locale,
    title: siteSeoConfig.defaultTitle,
    description: siteSeoConfig.defaultDescription,
    url: "/",
    images: [
      {
        url: siteSeoConfig.socialImagePath,
        alt: siteSeoConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeoConfig.defaultTitle,
    description: siteSeoConfig.defaultDescription,
    images: [siteSeoConfig.socialImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${manrope.variable}`}>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

import { contactConfig } from "@/config/contact.config";

import type { SiteFooterContent } from "./site-footer.types";

export const siteFooterContent: SiteFooterContent = {
  cta: {
    eyebrow: "READY WHEN YOU ARE",
    heading:
      "Not sure which registration, filing or business step applies to you?",
    description:
      "Tell us where your business stands today. We will help you identify what needs attention now, what can wait and what should come next.",
    quote:
      "The right next step begins with understanding the business behind the requirement.",
    contextLabel: "START WITH YOUR SITUATION",
    contextDescription:
      "Share the requirement you already knowâ€”or the business situation you are trying to understand.",
    primaryAction: {
      label: "Get a Business Assessment",
      href: "/approach/assessment",
    },
    secondaryAction: {
      label: "Explore Services",
      href: "/services",
    },
  },
  brand: {
    statement:
      "Connected support for business registration, GST, tax, compliance, brand protection and growth.",
    logoSrc: "/images/brand/auraaglide-logo-horizontal.png",
    logoAlt: "AuraaGlide Solutions",
  },
  contactActions: [
    {
      id: "call",
      label: "Call",
      supportingText: contactConfig.phone.display,
      href: contactConfig.phone.href,
      external: false,
      enabled: true,
      motion: "signal",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      supportingText: "Discuss your requirement",
      href: contactConfig.whatsapp.href,
      external: true,
      enabled: true,
      motion: "breathe",
    },
    {
      id: "instagram",
      label: "Instagram",
      supportingText: "Follow business updates",
      href: contactConfig.social.instagram,
      external: true,
      enabled: Boolean(contactConfig.social.instagram),
      motion: "lens",
    },
    {
      id: "facebook",
      label: "Facebook",
      supportingText: "View business updates",
      href: contactConfig.social.facebook,
      external: true,
      enabled: Boolean(contactConfig.social.facebook),
      motion: "highlight",
    },
  ],
  navigationGroups: [
    {
      label: "Services",
      links: [
        {
          label: "Start Your Business",
          href: "/services/business-setup",
        },
        {
          label: "GST, Tax & Compliance",
          href: "/services/tax-compliance",
        },
        {
          label: "Protect Your Business",
          href: "/services/legal-protection",
        },
        {
          label: "Licences & Registrations",
          href: "/services/licences-certifications",
        },
        {
          label: "Global Business Setup",
          href: "/services/global-business",
        },
      ],
    },
    {
      label: "Industries",
      links: [
        {
          label: "Startups",
          href: "/industries/startups",
        },
        {
          label: "Manufacturing",
          href: "/industries/manufacturing",
        },
        {
          label: "Healthcare",
          href: "/industries/healthcare",
        },
        {
          label: "E-commerce & Retail",
          href: "/industries/ecommerce-retail",
        },
        {
          label: "Agriculture & FPO",
          href: "/industries/agriculture-fpo",
        },
      ],
    },
    {
      label: "Resources",
      links: [
        {
          label: "Business Guides",
          href: "/resources/guides",
        },
        {
          label: "Compliance Updates",
          href: "/resources/updates",
        },
        {
          label: "Knowledge Hub",
          href: "/resources/knowledge-hub",
        },
        {
          label: "FAQs",
          href: "/faq",
        },
      ],
    },
    {
      label: "Company",
      links: [
        {
          label: "About",
          href: "/about",
        },
        {
          label: "How We Work",
          href: "/approach/discovery",
        },
        {
          label: "Business Assessment",
          href: "/approach/assessment",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },
  ],
  legalLinks: [
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "Terms",
      href: "/terms",
    },
    {
      label: "Disclaimer",
      href: "/disclaimer",
    },
    {
      label: "Sitemap",
      href: "/sitemap.xml",
    },
  ],
};

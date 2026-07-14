import { contactConfig } from "@/config/contact.config";

import type { SiteFooterContent } from "./site-footer.types";

export const siteFooterContent: SiteFooterContent = {
  cta: {
    eyebrow: "READY WHEN YOU ARE",
    heading: "Ready to build the next stage of your business?",
    description:
      "Whether you are starting something new or strengthening what already exists, the next step begins with understanding your business—not guessing.",
    primaryAction: { label: "Plan Your Next Step", href: "/contact" },
    secondaryAction: { label: "Explore Services", href: "/services" },
  },
  brand: {
    statement:
      "One connected business system for the decisions that shape what comes next.",
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
      supportingText: "Start a conversation",
      href: contactConfig.whatsapp.href,
      external: true,
      enabled: true,
      motion: "breathe",
    },
    {
      id: "instagram",
      label: "Instagram",
      supportingText: "Follow updates",
      href: contactConfig.social.instagram,
      external: true,
      enabled: Boolean(contactConfig.social.instagram),
      motion: "lens",
    },
    {
      id: "facebook",
      label: "Facebook",
      supportingText: "Business updates",
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
        { label: "Business Setup", href: "/services/business-setup" },
        { label: "Tax & Compliance", href: "/services/tax-compliance" },
        { label: "Legal Protection", href: "/services/legal-protection" },
        {
          label: "Licences & Certifications",
          href: "/services/licences-certifications",
        },
      ],
    },
    {
      label: "Industries",
      links: [
        { label: "Startups", href: "/industries/startups" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "E-commerce & Retail", href: "/industries/ecommerce-retail" },
      ],
    },
    {
      label: "Resources",
      links: [
        { label: "Business Guides", href: "/resources/guides" },
        { label: "Compliance Updates", href: "/resources/updates" },
        { label: "Knowledge Hub", href: "/resources/knowledge-hub" },
        { label: "FAQs", href: "/faq" },
      ],
    },
    {
      label: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Advisory Approach", href: "/approach/discovery" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

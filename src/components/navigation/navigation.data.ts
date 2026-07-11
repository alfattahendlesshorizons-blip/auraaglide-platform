import type { NavigationContent } from "./navigation.types";

export const navigationContent: NavigationContent = {
  logo: {
    image: "/images/brand/auraaglide-logo.png",
    alt: "AuraaGlide Solutions",
    href: "/",
  },

  groups: [
    {
      label: "Services",
      href: "/services",
      items: [
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
      href: "/industries",
      items: [
        { label: "Startups", href: "/industries/startups" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "E-commerce", href: "/industries/ecommerce" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      items: [
        { label: "Business Guides", href: "/resources/guides" },
        { label: "Compliance Updates", href: "/resources/updates" },
        { label: "FAQs", href: "/faq" },
      ],
    },
  ],

  directLinks: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  cta: {
    label: "Book Consultation",
    href: "/contact",
  },
};

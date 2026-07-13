import type { NavigationContent } from "./navigation.types";

export const navigationContent: NavigationContent = {
  logo: {
    src: "/images/brand/auraaglide-logo.webp",
    alt: "AuraaGlide Solutions",
    href: "/",
  },

  groups: [
    {
      label: "Services",
      href: "/services",
      eyebrow: "Business Support",
      description:
        "Connected services designed to help businesses start, operate and grow with clarity.",
      items: [
        {
          label: "Business Setup",
          href: "/services/business-setup",
          description: "Company registration and startup structuring.",
          icon: "setup",
        },
        {
          label: "Tax & Compliance",
          href: "/services/tax-compliance",
          description: "GST, ITR, ROC and ongoing compliance.",
          icon: "tax",
        },
        {
          label: "Legal Protection",
          href: "/services/legal-protection",
          description: "Contracts, trademarks and legal safeguards.",
          icon: "legal",
        },
        {
          label: "Licences & Certifications",
          href: "/services/licences-certifications",
          description: "FSSAI, IEC, ISO, MSME and industry approvals.",
          icon: "certificate",
        },
      ],
      quickLinks: [
        {
          label: "GST Registration",
          href: "/services/gst-registration",
        },
        {
          label: "Private Limited Company",
          href: "/services/private-limited-company",
        },
        {
          label: "Trademark Registration",
          href: "/services/trademark-registration",
        },
      ],
    },

    {
      label: "Industries",
      href: "/industries",
      eyebrow: "Industry Expertise",
      description:
        "Advisory shaped around the operational realities of different sectors.",
      items: [
        {
          label: "Startups",
          href: "/industries/startups",
          description: "Launch, structure and scale new ventures.",
          icon: "startup",
        },
        {
          label: "Manufacturing",
          href: "/industries/manufacturing",
          description: "Licensing, compliance and operational support.",
          icon: "industry",
        },
        {
          label: "Healthcare",
          href: "/industries/healthcare",
          description: "Regulatory and business support for healthcare.",
          icon: "industry",
        },
        {
          label: "E-commerce & Retail",
          href: "/industries/ecommerce-retail",
          description: "Tax, legal and growth support for modern commerce.",
          icon: "industry",
        },
      ],
      quickLinks: [
        {
          label: "Agriculture & FPO",
          href: "/industries/agriculture-fpo",
        },
        {
          label: "SMEs",
          href: "/industries/smes",
        },
        {
          label: "Explore Industries",
          href: "/industries",
        },
      ],
    },

    {
      label: "Resources",
      href: "/resources",
      eyebrow: "Knowledge Centre",
      description:
        "Guides, updates and practical resources for better business decisions.",
      items: [
        {
          label: "Business Guides",
          href: "/resources/guides",
          description: "Practical guides for founders and businesses.",
          icon: "guide",
        },
        {
          label: "Compliance Updates",
          href: "/resources/updates",
          description: "Important regulatory and filing updates.",
          icon: "update",
        },
        {
          label: "Knowledge Hub",
          href: "/resources/knowledge-hub",
          description: "Articles, explainers and business insights.",
          icon: "knowledge",
        },
        {
          label: "FAQs",
          href: "/faq",
          description: "Clear answers to common business questions.",
          icon: "faq",
        },
      ],
      quickLinks: [
        {
          label: "Latest Updates",
          href: "/resources/updates",
        },
        {
          label: "Download Guides",
          href: "/resources/guides",
        },
        {
          label: "View All Resources",
          href: "/resources",
        },
      ],
    },
  ],

  directLinks: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  cta: {
    label: "Book Consultation",
    href: "/contact",
  },
};

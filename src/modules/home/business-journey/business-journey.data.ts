import type { BusinessJourneyContent } from "./business-journey.types";

export const businessJourneyContent: BusinessJourneyContent = {
  eyebrow: "Your Business Journey",

  heading: [
    {
      text: "Wherever you are,",
      tone: "light",
    },
    {
      text: "there is a clear",
      tone: "steel",
    },
    {
      text: "next step.",
      tone: "gold",
    },
  ],

  quote: {
    text:
      "From shaping an idea to running compliance, building growth systems and expanding with confidence—every stage moves through one connected business ecosystem.",
    signature: "One connected business system",
  },

  stages: [
    {
      id: "idea",
      label: "Idea",
      shortLabel: "Idea",
      eyebrow: "Shape the foundation",
      title: "Turn a promising idea into a viable business direction.",
      description:
        "Clarify the opportunity, understand the market and choose the right structure before investing heavily.",
      visualKey: "idea",
      services: [
        {
          label: "Business Planning",
          href: "/services/business-planning",
        },
        {
          label: "Market Research",
          href: "/services/market-research",
        },
        {
          label: "Entity Selection",
          href: "/services/business-setup",
        },
        {
          label: "Trademark Search",
          href: "/services/trademark-registration",
        },
      ],
      cta: {
        label: "Explore the idea stage",
        href: "/services/business-planning",
      },
      enabled: true,
      order: 1,
    },

    {
      id: "launch",
      label: "Launch",
      shortLabel: "Launch",
      eyebrow: "Build the legal base",
      title:
        "Launch with the registrations and approvals your business needs.",
      description:
        "Create the right entity, complete essential registrations and establish a compliant operating foundation.",
      visualKey: "launch",
      services: [
        {
          label: "Company Registration",
          href: "/services/business-setup",
        },
        {
          label: "GST Registration",
          href: "/services/gst-registration",
        },
        {
          label: "MSME Registration",
          href: "/services/msme-registration",
        },
        {
          label: "Licences & Certifications",
          href: "/services/licences-certifications",
        },
      ],
      cta: {
        label: "Explore launch solutions",
        href: "/services/business-setup",
      },
      enabled: true,
      order: 2,
    },

    {
      id: "running",
      label: "Running Business",
      shortLabel: "Running",
      eyebrow: "Operate with confidence",
      title:
        "Stay compliant, claim available benefits and keep operations structured.",
      description:
        "Manage recurring obligations, financial reporting, government opportunities and day-to-day advisory through one connected support system.",
      visualKey: "running",
      services: [
        {
          label: "GST & Tax",
          href: "/services/tax-compliance",
        },
        {
          label: "ROC Compliance",
          href: "/services/roc-compliance",
        },
        {
          label: "Accounting",
          href: "/services/accounting",
        },
        {
          label: "Government Schemes",
          href: "/services/government-schemes",
        },
        {
          label: "MSME Benefits",
          href: "/services/msme-benefits",
        },
        {
          label: "Legal Support",
          href: "/services/legal-protection",
        },
      ],
      cta: {
        label: "Explore running-business support",
        href: "/services/tax-compliance",
      },
      enabled: true,
      order: 3,
      featured: true,
    },

    {
      id: "growth",
      label: "Growth",
      shortLabel: "Growth",
      eyebrow: "Build stronger systems",
      title:
        "Create the systems, visibility and processes required to grow.",
      description:
        "Strengthen your digital presence, customer management, automation and operating processes before scaling further.",
      visualKey: "growth",
      services: [
        {
          label: "Website & Digital Presence",
          href: "/services/digital-growth",
        },
        {
          label: "SEO & Content",
          href: "/services/seo",
        },
        {
          label: "CRM Foundation",
          href: "/services/crm",
        },
        {
          label: "Automation",
          href: "/services/automation",
        },
      ],
      cta: {
        label: "Explore growth solutions",
        href: "/services/digital-growth",
      },
      enabled: true,
      order: 4,
    },

    {
      id: "expansion",
      label: "Expansion",
      shortLabel: "Expand",
      eyebrow: "Scale with structure",
      title:
        "Prepare the business for larger markets, funding and expansion.",
      description:
        "Strengthen legal, operational and financial readiness before entering new markets or raising capital.",
      visualKey: "expansion",
      services: [
        {
          label: "Funding Readiness",
          href: "/services/funding-readiness",
        },
        {
          label: "Import Export",
          href: "/services/import-export",
        },
        {
          label: "Business Restructuring",
          href: "/services/business-restructuring",
        },
        {
          label: "Investor Readiness",
          href: "/services/investor-readiness",
        },
      ],
      cta: {
        label: "Explore expansion support",
        href: "/services/expansion",
      },
      enabled: true,
      order: 5,
    },
  ],
};

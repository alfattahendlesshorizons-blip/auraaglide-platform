import type { BusinessJourneyContent } from "./business-journey.types";

export const businessJourneyContent: BusinessJourneyContent = {
  eyebrow: "Your Business Journey",

  heading: [
    {
      text: "Every stage changes",
      tone: "light",
    },
    {
      text: "what matters",
      tone: "steel",
    },
    {
      text: "next.",
      tone: "gold",
    },
  ],

  quote: {
    text:
      "Every stage brings different business decisions. Knowing where your business stands makes the next one easier to understand.",
    signature: "The right direction begins with the right context",
  },

  stages: [
    {
      id: "idea",
      label: "Idea",
      shortLabel: "Idea",
      eyebrow: "Understand the opportunity",
      title:
        "You have an idea, but the structure, market and next steps are still taking shape.",
      description:
        "Clarify the business opportunity, understand the market and compare structures before making commitments that may be difficult to change later.",
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
      eyebrow: "Build the legal foundation",
      title:
        "You are ready to start, register and build the business correctly.",
      description:
        "Choose the right entity, complete essential registrations and put the legal and operational basics in place before daily activity begins.",
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
          label: "Licences & Registrations",
          href: "/services/licences-certifications",
        },
      ],
      cta: {
        label: "Explore launch support",
        href: "/services/business-setup",
      },
      enabled: true,
      order: 2,
    },

    {
      id: "running",
      label: "Running Business",
      shortLabel: "Running",
      eyebrow: "Manage daily responsibilities",
      title:
        "Your business is active, and GST, tax, filings, records and operations now need regular attention.",
      description:
        "Keep recurring compliance, accounting, documentation and operational responsibilities visible so deadlines do not become avoidable disruptions.",
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
          label: "Accounting & Bookkeeping",
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
          label: "Legal Documentation",
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
      eyebrow: "Strengthen the systems behind growth",
      title:
        "Your business is growing, and its systems now need to keep up.",
      description:
        "Improve customer management, reporting, digital presence and operating processes before increasing demand creates pressure or confusion.",
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
          label: "Business Automation",
          href: "/services/automation",
        },
      ],
      cta: {
        label: "Explore growth support",
        href: "/services/digital-growth",
      },
      enabled: true,
      order: 4,
    },

    {
      id: "expansion",
      label: "Expansion",
      shortLabel: "Expand",
      eyebrow: "Prepare for greater complexity",
      title:
        "You are preparing for new markets, exports, investment or a larger organisation.",
      description:
        "Review legal, financial and operational readiness before entering new markets, raising capital, expanding the team or establishing a business outside India.",
      visualKey: "expansion",
      services: [
        {
          label: "Funding Readiness",
          href: "/services/funding-readiness",
        },
        {
          label: "Import Export Code",
          href: "/services/import-export-code",
        },
        {
          label: "International Company Setup",
          href: "/services/global-business",
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

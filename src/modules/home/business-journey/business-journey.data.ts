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
      "Whether you are shaping an idea, preparing to launch, managing a growing operation or planning expansion, knowing where you are today helps reveal what deserves attention next.",
    signature: "Every stage deserves the right direction",
  },

  stages: [
    {
      id: "idea",
      label: "Idea",
      shortLabel: "Idea",
      eyebrow: "Shape the foundation",
      title: "Turn an early opportunity into a clearer business direction.",
      description:
        "Clarify the opportunity, test its direction and choose a foundation that supports what may come next.",
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
        "Build the right structure before daily operations begin.",
      description:
        "Choose the right entity, complete essential registrations and begin with a clear operating foundation.",
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
        "Bring greater control to compliance, finance and operations.",
      description:
        "Manage recurring responsibilities, financial visibility and daily operations through one connected support system.",
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
        "Strengthen systems before demand creates pressure.",
      description:
        "Improve visibility, customer management, automation and operating processes before scaling further.",
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
        "Prepare the business for wider markets, teams and complexity.",
      description:
        "Strengthen legal, operational and financial readiness before entering new markets, raising capital or expanding the team.",
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


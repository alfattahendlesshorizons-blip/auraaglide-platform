import type {
  BusinessPrioritiesContent,
} from "./business-priorities.types";

export const businessPrioritiesFallbackContent: BusinessPrioritiesContent = {
  sectionId: "business-priorities",

  eyebrow: "What Matters Most",

  heading: {
    light: "The decisions",
    steel: "that shape",
    gold: "a business.",
  },

  introduction:
    "Every business stays busy. Only a few decisions truly shape what comes next. The right priorities create clarity before complexity begins.",

  items: [
    {
      id: "build",
      label: "Build",

      heading:
        "Build before you expand.",

      description:
        "Most businesses do not struggle because they grow slowly. They struggle because growth begins on a weak structure. The right business model, entity and registrations make future compliance, funding and operational decisions easier to manage.",

      iconKey: "build",

      imageAlt:
        "Business founders reviewing plans and establishing a structured foundation",

      relatedSupport: [
        {
          label: "Business Planning",
          href: "/services/business-planning",
        },
        {
          label: "Entity Selection",
          href: "/services/business-setup",
        },
        {
          label: "Company Registration",
          href: "/services/company-registration",
        },
      ],

      cta: {
        label: "Explore foundation support",
        href: "/services/business-setup",
      },

      seoTags: [
        "business planning",
        "company registration",
        "entity selection",
        "business foundation",
      ],

      visible: true,
      order: 1,
    },

    {
      id: "comply",
      label: "Comply",

      heading:
        "Make compliance a business habit.",

      description:
        "Compliance works best when it becomes part of normal business operations—not a reaction to deadlines or notices. Clear responsibilities, recurring reviews and visible obligations help keep opportunities open and prevent avoidable interruptions.",

      iconKey: "comply",

      imageAlt:
        "Business team reviewing tax records, compliance documents and recurring obligations",

      relatedSupport: [
        {
          label: "GST & Tax Compliance",
          href: "/services/tax-compliance",
        },
        {
          label: "ROC Compliance",
          href: "/services/roc-compliance",
        },
        {
          label: "Licences & Certifications",
          href: "/services/licences-certifications",
        },
      ],

      cta: {
        label: "Explore compliance support",
        href: "/services/tax-compliance",
      },

      seoTags: [
        "business compliance",
        "GST compliance",
        "ROC compliance",
        "regulatory obligations",
      ],

      visible: true,
      order: 2,
    },

    {
      id: "protect",
      label: "Protect",

      heading:
        "Protect before you promote.",

      description:
        "Visibility creates value only when the business has protected what customers recognise and partners rely on. Brand ownership, clear agreements and legal safeguards should develop before avoidable disputes become expensive distractions.",

      iconKey: "protect",

      imageAlt:
        "Business owners reviewing trademark, contracts and legal protection documents",

      relatedSupport: [
        {
          label: "Trademark Protection",
          href: "/services/trademark-registration",
        },
        {
          label: "Legal Agreements",
          href: "/services/legal-protection",
        },
        {
          label: "Compliance Review",
          href: "/services/compliance-management",
        },
      ],

      cta: {
        label: "Explore protection support",
        href: "/services/legal-protection",
      },

      seoTags: [
        "trademark protection",
        "business agreements",
        "legal protection",
        "intellectual property",
      ],

      visible: true,
      order: 3,
    },

    {
      id: "measure",
      label: "Measure",

      heading:
        "Make decisions from the right numbers.",

      description:
        "Businesses rarely lack information. The harder problem is knowing which numbers deserve attention. Accurate accounts, useful reporting and visible cash movement turn financial records into decisions that owners can act on.",

      iconKey: "measure",

      imageAlt:
        "Business finance team examining financial reports and operational performance",

      relatedSupport: [
        {
          label: "Accounting",
          href: "/services/accounting",
        },
        {
          label: "Tax Planning",
          href: "/services/tax-compliance",
        },
        {
          label: "Financial Reporting",
          href: "/services/financial-reporting",
        },
      ],

      cta: {
        label: "Explore financial clarity",
        href: "/services/accounting",
      },

      seoTags: [
        "business accounting",
        "financial reporting",
        "tax planning",
        "business finance",
      ],

      visible: true,
      order: 4,
    },

    {
      id: "grow",
      label: "Grow",

      heading:
        "Build systems before adding speed.",

      description:
        "Sustainable growth begins when important work becomes repeatable. Strong digital foundations, customer systems and practical automation help a business increase capacity without multiplying confusion.",

      iconKey: "grow",

      imageAlt:
        "Growing business team working with connected digital systems and expansion planning",

      relatedSupport: [
        {
          label: "Digital Presence",
          href: "/services/digital-growth",
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
        label: "Explore growth systems",
        href: "/services/digital-growth",
      },

      seoTags: [
        "business growth systems",
        "CRM",
        "business automation",
        "digital growth",
      ],

      visible: true,
      order: 5,
    },
  ],
};

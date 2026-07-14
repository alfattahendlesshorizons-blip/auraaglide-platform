import type { BusinessRealityContent } from "./business-reality.types";

export const businessRealityFallbackContent: BusinessRealityContent = {
  sectionId: "businesses-like-yours",
  eyebrow: "Built for Your Business",
  headingLead: "Every industry",
  headingMiddle: "works differently.",
  headingAccent: "So should every roadmap.",
  quoteCaption: "Context before recommendation",
  description:
    "Regulations, customer expectations, operating models, documentation and growth patterns influence what the right next step looks like.",
  items: [
    {
      id: "startups",
      slug: "startups",
      label: "Startups",
      quote: "\"Great ideas deserve stronger foundations.\"",
      description:
        "Startup roadmaps must balance speed with ownership clarity, protection, compliance and the ability to grow responsibly.",
      highlights: [
        {
          label: "Business Formation",
          href: "/services/business-formation",
        },
        {
          label: "Legal Protection",
          href: "/services/legal-advisory",
        },
        {
          label: "Growth Readiness",
          href: "/services/business-growth",
        },
      ],
      tags: [
        "startup advisory",
        "company registration",
        "business structure",
        "founder compliance",
      ],
      iconKey: "startup",
      imageAlt:
        "Startup founders reviewing business structure and growth planning",
      href: "/industries/startups",
      routeStatus: "planned",
      visible: true,
      order: 1,
      seo: {
        title: "Startup Business Advisory and Compliance Support",
        description:
          "Business formation, legal protection, compliance and growth-readiness support for startups.",
        keywords: [
          "startup business advisory",
          "startup registration",
          "startup legal compliance",
          "business formation support",
        ],
        entityName: "Startup Business Advisory",
        schemaType: "ProfessionalService",
      },
    },
    {
      id: "manufacturing",
      slug: "manufacturing",
      label: "Manufacturing",
      quote:
        "\"Precision on the floor begins with structure behind the business.\"",
      description:
        "Manufacturing businesses need operational discipline behind production, from taxation and labour compliance to contracts and incentive planning.",
      highlights: [
        {
          label: "Tax & GST",
          href: "/services/tax-gst",
        },
        {
          label: "Labour Compliance",
          href: "/services/labour-compliance",
        },
        {
          label: "Government Incentives",
          href: "/services/government-schemes",
        },
      ],
      tags: [
        "manufacturing compliance",
        "factory taxation",
        "labour compliance",
        "business incentives",
      ],
      iconKey: "manufacturing",
      imageAlt:
        "Manufacturing operations team reviewing compliance and business documentation",
      href: "/industries/manufacturing",
      routeStatus: "planned",
      visible: true,
      order: 2,
      seo: {
        title: "Manufacturing Compliance and Business Advisory",
        description:
          "Tax, GST, labour compliance, contracts and government incentive support for manufacturing businesses.",
        keywords: [
          "manufacturing compliance",
          "factory GST advisory",
          "labour compliance support",
          "manufacturing government schemes",
        ],
        entityName: "Manufacturing Business Advisory",
        schemaType: "ProfessionalService",
      },
    },
    {
      id: "healthcare",
      slug: "healthcare",
      label: "Healthcare",
      quote:
        "\"Trust grows when every system remains clear, compliant and dependable.\"",
      description:
        "Healthcare businesses depend on registrations, regulatory responsibility, documentation and operational continuity working together.",
      highlights: [
        {
          label: "Registrations",
          href: "/services/registrations",
        },
        {
          label: "Regulatory Support",
          href: "/services/regulatory-support",
        },
        {
          label: "Operational Compliance",
          href: "/services/compliance-management",
        },
      ],
      tags: [
        "healthcare compliance",
        "healthcare registration",
        "regulatory advisory",
        "medical business support",
      ],
      iconKey: "healthcare",
      imageAlt:
        "Healthcare administration team managing registrations and regulatory documentation",
      href: "/industries/healthcare",
      routeStatus: "planned",
      visible: true,
      order: 3,
      seo: {
        title: "Healthcare Registration and Compliance Advisory",
        description:
          "Registration, regulatory and operational compliance support for healthcare businesses.",
        keywords: [
          "healthcare compliance",
          "healthcare registration",
          "medical business advisory",
          "healthcare regulatory support",
        ],
        entityName: "Healthcare Business Advisory",
        schemaType: "ProfessionalService",
      },
    },
    {
      id: "retail",
      slug: "ecommerce-retail",
      label: "Retail & E-commerce",
      quote:
        "\"Every customer experience is supported by the structure behind it.\"",
      description:
        "Retail and e-commerce businesses need taxation, compliance and digital operations to remain aligned across every customer channel.",
      highlights: [
        {
          label: "Business Compliance",
          href: "/services/compliance-management",
        },
        {
          label: "Taxation",
          href: "/services/tax-gst",
        },
        {
          label: "Digital Operations",
          href: "/services/digital-growth",
        },
      ],
      tags: [
        "retail compliance",
        "ecommerce GST",
        "online business advisory",
        "digital operations",
      ],
      iconKey: "retail",
      imageAlt:
        "Retail and e-commerce business team reviewing sales and operational systems",
      href: "/industries/ecommerce-retail",
      routeStatus: "planned",
      visible: true,
      order: 4,
      seo: {
        title: "Retail and E-commerce Business Compliance",
        description:
          "Tax, compliance and operational advisory for retail and e-commerce businesses.",
        keywords: [
          "retail compliance",
          "ecommerce GST",
          "online business registration",
          "retail business advisory",
        ],
        entityName: "Retail and E-commerce Advisory",
        schemaType: "ProfessionalService",
      },
    },
    {
      id: "agriculture",
      slug: "agriculture-fpo",
      label: "Agriculture & FPO",
      quote:
        "\"Sustainable growth begins with the right structure at ground level.\"",
      description:
        "Agriculture and FPO enterprises need formal structure, scheme readiness, compliance and market access to support sustainable growth.",
      highlights: [
        {
          label: "FPO Formation",
          href: "/services/fpo-formation",
        },
        {
          label: "Government Schemes",
          href: "/services/government-schemes",
        },
        {
          label: "Compliance Support",
          href: "/services/compliance-management",
        },
      ],
      tags: [
        "FPO formation",
        "agriculture compliance",
        "farmer producer company",
        "government schemes",
      ],
      iconKey: "agriculture",
      imageAlt:
        "Agriculture and FPO representatives reviewing business and government scheme documentation",
      href: "/industries/agriculture-fpo",
      routeStatus: "planned",
      visible: true,
      order: 5,
      seo: {
        title: "Agriculture and FPO Formation Advisory",
        description:
          "FPO formation, compliance and government scheme support for agriculture-based enterprises.",
        keywords: [
          "FPO formation",
          "farmer producer company registration",
          "agriculture government schemes",
          "FPO compliance",
        ],
        entityName: "Agriculture and FPO Advisory",
        schemaType: "ProfessionalService",
      },
    },
  ],
};

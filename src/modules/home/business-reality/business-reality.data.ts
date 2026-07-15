import type { BusinessRealityContent } from "./business-reality.types";

export const businessRealityFallbackContent: BusinessRealityContent = {
  sectionId: "businesses-like-yours",
  eyebrow: "Built for Your Business",
  headingLead: "Every industry",
  headingMiddle: "works differently.",
  headingAccent: "So should every roadmap.",
  quoteCaption: "Context before recommendation",
  description:
    "The right registration, licence, tax requirement and growth plan depends on how the business actually operates. Explore support shaped around the realities of your industry.",
  items: [
    {
      id: "startups",
      slug: "startups",
      label: "Startups",
      quote:
        "\"Starting quickly matters. Starting with the right structure matters longer.\"",
      description:
        "Support for company formation, founder ownership, GST, legal protection, compliance and growth readiness from the first serious stage.",
      highlights: [
        {
          label: "Company Registration",
          href: "/services/business-formation",
        },
        {
          label: "Trademark Protection",
          href: "/services/trademark-registration",
        },
        {
          label: "Startup Compliance",
          href: "/services/business-compliance",
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
        "Startup founders reviewing company registration, ownership and compliance decisions",
      href: "/industries/startups",
      routeStatus: "planned",
      visible: true,
      order: 1,
      seo: {
        title: "Startup Registration, Compliance and Business Advisory",
        description:
          "Company formation, GST, trademark, compliance and growth-readiness support for startups.",
        keywords: [
          "startup registration",
          "startup business advisory",
          "startup legal compliance",
          "company formation support",
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
        "\"Production runs better when the business behind it remains compliant and prepared.\"",
      description:
        "Support for GST, labour compliance, contracts, licences, accounting and government incentives around manufacturing operations.",
      highlights: [
        {
          label: "GST & Tax",
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
        "Manufacturing team reviewing GST, labour compliance and licence documentation",
      href: "/industries/manufacturing",
      routeStatus: "planned",
      visible: true,
      order: 2,
      seo: {
        title: "Manufacturing Compliance, GST and Business Advisory",
        description:
          "GST, labour compliance, contracts, licences and government incentive support for manufacturing businesses.",
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
        "\"Trust depends on the registrations, records and systems behind the service.\"",
      description:
        "Support for healthcare registrations, regulatory obligations, tax, documentation and ongoing operational compliance.",
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
        "Healthcare administration team managing registration and regulatory records",
      href: "/industries/healthcare",
      routeStatus: "planned",
      visible: true,
      order: 3,
      seo: {
        title: "Healthcare Registration, Regulatory and Compliance Support",
        description:
          "Registration, regulatory, tax and operational compliance support for healthcare businesses.",
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
        "\"Every sale depends on tax, records and operations working behind the customer experience.\"",
      description:
        "Support for business registration, GST, accounting, marketplace compliance, legal documentation and digital operations across online and offline channels.",
      highlights: [
        {
          label: "GST & Compliance",
          href: "/services/compliance-management",
        },
        {
          label: "Accounting",
          href: "/services/accounting-bookkeeping",
        },
        {
          label: "Digital Operations",
          href: "/services/digital-growth",
        },
      ],
      tags: [
        "retail compliance",
        "ecommerce GST",
        "online business registration",
        "digital operations",
      ],
      iconKey: "retail",
      imageAlt:
        "Retail and e-commerce team reviewing GST, accounting and online operations",
      href: "/industries/ecommerce-retail",
      routeStatus: "planned",
      visible: true,
      order: 4,
      seo: {
        title: "Retail and E-commerce Registration, GST and Compliance",
        description:
          "Registration, GST, accounting, marketplace compliance and digital operations support for retail and e-commerce businesses.",
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
        "\"A stronger enterprise begins with the right structure at ground level.\"",
      description:
        "Support for FPO and producer-company formation, government schemes, registrations, compliance and market readiness.",
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
        "Agriculture and FPO representatives reviewing formation and scheme documentation",
      href: "/industries/agriculture-fpo",
      routeStatus: "planned",
      visible: true,
      order: 5,
      seo: {
        title: "FPO Formation, Agriculture Compliance and Scheme Support",
        description:
          "FPO formation, producer-company registration, compliance and government scheme support for agriculture-based enterprises.",
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

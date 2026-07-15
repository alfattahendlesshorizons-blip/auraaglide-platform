import type { IndustriesSectionContent } from "./industries.types";

export const industriesFallbackContent: IndustriesSectionContent = {
  sectionId: "industries",
  eyebrow: "Who We Support",
  headingLead: "Built around",
  headingMiddle: "your business",
  headingAccent: "reality.",
  description:
    "Registrations, tax, compliance and growth needs change with the way a business operates. Explore support shaped around the realities of your industry.",
  industries: [
    {
      id: "startups",
      eyebrow: "Starting with",
      title: "Startups",
      statement: "Build the company, ownership and compliance foundation.",
      description:
        "Company formation, GST, legal protection, founder documentation and growth readiness for new ventures.",
      iconKey: "startup",
      href: "/industries/startups",
      routeStatus: "planned",
      featured: false,
      visible: true,
      order: 1,
    },
    {
      id: "manufacturing",
      eyebrow: "Supporting",
      title: "Manufacturing",
      statement: "Keep operations, licences and compliance aligned.",
      description:
        "GST, labour compliance, contracts, licences, accounting and government incentive support for manufacturers.",
      iconKey: "manufacturing",
      href: "/industries/manufacturing",
      routeStatus: "planned",
      featured: true,
      visible: true,
      order: 2,
    },
    {
      id: "healthcare",
      eyebrow: "Built for",
      title: "Healthcare",
      statement: "Manage registrations and regulatory responsibility.",
      description:
        "Registration, tax, regulatory documentation and ongoing compliance support for healthcare businesses.",
      iconKey: "healthcare",
      href: "/industries/healthcare",
      routeStatus: "planned",
      featured: true,
      visible: true,
      order: 3,
    },
    {
      id: "retail",
      eyebrow: "Growing with",
      title: "Retail & E-commerce",
      statement: "Connect sales with GST, records and operations.",
      description:
        "Registration, GST, accounting, marketplace compliance and digital operations across online and offline channels.",
      iconKey: "retail",
      href: "/industries/ecommerce-retail",
      routeStatus: "planned",
      featured: false,
      visible: true,
      order: 4,
    },
    {
      id: "agriculture",
      eyebrow: "Strengthening",
      title: "Agriculture & FPO",
      statement: "Build the structure behind collective growth.",
      description:
        "FPO formation, producer-company registration, schemes, compliance and market-readiness support.",
      iconKey: "agriculture",
      href: "/industries/agriculture-fpo",
      routeStatus: "planned",
      featured: true,
      visible: true,
      order: 5,
    },
  ],
};

import type { IndustriesSectionContent } from "./industries.types";

export const industriesFallbackContent: IndustriesSectionContent = {
  sectionId: "industries",
  eyebrow: "Who We Support",
  headingLead: "Built around",
  headingMiddle: "your business",
  headingAccent: "reality.",
  description:
    "Every industry operates through different regulations, priorities and growth decisions. Our advisory adapts to the structure of your business and the direction you want to take next.",
  industries: [
    {
      id: "startups",
      eyebrow: "Helping",
      title: "Startups",
      statement: "Turning ideas into structured businesses.",
      description:
        "Formation, legal protection, tax foundations and growth readiness for businesses taking their first serious steps.",
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
      statement: "Operational clarity built for scale.",
      description:
        "Compliance, taxation, contracts, incentives and advisory support aligned with complex business operations.",
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
      statement: "Guidance shaped around trust and continuity.",
      description:
        "Structured support for registrations, regulatory obligations, taxation and sustainable healthcare operations.",
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
      statement: "Structure across every customer touchpoint.",
      description:
        "Business, tax, legal and operational guidance for businesses selling across physical and digital channels.",
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
      statement: "Helping enterprises grow from the ground up.",
      description:
        "Formation, schemes, compliance and advisory support for agricultural enterprises, producers and FPOs.",
      iconKey: "agriculture",
      href: "/industries/agriculture-fpo",
      routeStatus: "planned",
      featured: true,
      visible: true,
      order: 5,
    },
  ],
};

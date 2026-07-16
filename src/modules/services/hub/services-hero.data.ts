import type { ServicesHeroContent } from "./services-hero.types";

export const servicesHeroContent: ServicesHeroContent = {
  eyebrow: "Business Support",
  title: "Find the support your business",
  accent: "needs today.",
  description:
    "Start with the requirement you already know. Understand what applies now, what may follow and how each decision connects to the wider business.",
  primaryCta: {
    label: "Get a Business Assessment",
    href: "/approach/assessment",
  },
  secondaryCta: {
    label: "Talk to an Advisor",
    href: "/contact",
  },
  categories: [
    {
      id: "start",
      label: "Start",
      title: "Start Your Business",
      description:
        "Choose and register the structure that fits your ownership, risk and future direction.",
      image: null,
      imageAlt: "Business formation support",
      targetSection: "start-your-business",
      ctaLabel: "Explore Formation Services",
      enabled: true,
      order: 1,
    },
    {
      id: "run",
      label: "Run",
      title: "Run Your Business",
      description:
        "Manage essential registrations, licences and recurring operating responsibilities.",
      image: null,
      imageAlt: "Business compliance support",
      targetSection: "run-your-business",
      ctaLabel: "Explore Compliance Services",
      enabled: true,
      order: 2,
    },
    {
      id: "protect",
      label: "Protect",
      title: "Protect Your Business",
      description:
        "Protect the name, work and legal relationships your business is building.",
      image: null,
      imageAlt: "Business protection support",
      targetSection: "protect-your-business",
      ctaLabel: "Explore Protection Services",
      enabled: true,
      order: 3,
    },
    {
      id: "manage",
      label: "Manage",
      title: "Manage GST, Tax & Accounts",
      description:
        "Keep tax, filings and financial records connected to daily business activity.",
      image: null,
      imageAlt: "Tax and finance support",
      targetSection: "manage-tax-and-finance",
      ctaLabel: "Explore Tax Services",
      enabled: true,
      order: 4,
    },
    {
      id: "expand",
      label: "Expand",
      title: "Expand Globally",
      description:
        "Evaluate international setup routes with the wider legal and operating context in view.",
      image: null,
      imageAlt: "Global business expansion support",
      targetSection: "expand-globally",
      ctaLabel: "Explore Global Services",
      enabled: true,
      order: 5,
    },
  ],
};

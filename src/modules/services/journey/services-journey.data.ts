import type { ServicesJourneyContent } from "./services-journey.types";

export const servicesJourneyContent: ServicesJourneyContent = {
  eyebrow: "Business Support Journey",
  title: "Choose the support that fits where your business stands today.",
  description:
    "Start with the stage that best reflects your current requirement. Each category connects the immediate decision with the services and responsibilities that may follow.",
  categories: [
    {
      id: "start",
      slug: "start-a-business",
      shortLabel: "Start",
      eyebrow: "Start a Business",
      title: "Build the right legal foundation from the beginning.",
      question: "Which structure best supports your ownership, risk and future plans?",
      description:
        "Starting correctly helps avoid unnecessary restructuring, compliance gaps and confusion later. Explore the available business structures and registrations before choosing your next step.",
      quote:
        "The right beginning creates clarity for every decision that follows.",
      image: {
        src: null,
        alt: "Business registration and formation support",
      },
      cta: {
        label: "Explore Start-up Services",
        href: "/services#start-a-business",
      },
      serviceIds: [
        "private-limited-company",
        "limited-liability-partnership",
        "one-person-company",
        "partnership-firm",
        "proprietorship",
        "section-8-company",
        "msme-registration",
      ],
      enabled: true,
      order: 1,
    },
    {
      id: "manage",
      slug: "manage-your-business",
      shortLabel: "Manage",
      eyebrow: "Manage Your Business",
      title: "Keep daily responsibilities connected and under control.",
      question: "What needs regular attention to keep your business operating correctly?",
      description:
        "Registrations, filings, records and recurring responsibilities should work as one connected system rather than isolated tasks.",
      quote:
        "Consistency today prevents costly corrections tomorrow.",
      image: {
        src: null,
        alt: "Business tax, accounts and compliance management",
      },
      cta: {
        label: "Explore Management Services",
        href: "/services#manage-your-business",
      },
      serviceIds: [
        "gst-registration",
        "gst-returns",
        "income-tax-return",
        "roc-filing",
        "accounting-and-bookkeeping",
      ],
      enabled: true,
      order: 2,
    },
    {
      id: "protect",
      slug: "protect-your-business",
      shortLabel: "Protect",
      eyebrow: "Protect Your Business",
      title: "Protect the identity, work and relationships you are building.",
      question: "What should be legally secured before the business grows further?",
      description:
        "A business should protect its name, original work, inventions and important commercial relationships before they become vulnerable.",
      quote:
        "What you build deserves protection before it becomes difficult to replace.",
      image: {
        src: null,
        alt: "Trademark, copyright, patent and legal protection",
      },
      cta: {
        label: "Explore Protection Services",
        href: "/services#protect-your-business",
      },
      serviceIds: [
        "trademark-registration",
        "copyright-registration",
        "patent-support",
        "legal-agreements",
      ],
      enabled: true,
      order: 3,
    },
    {
      id: "grow",
      slug: "grow-your-business",
      shortLabel: "Grow",
      eyebrow: "Grow Your Business",
      title: "Strengthen the systems that support sustainable growth.",
      question: "Which improvements can make the business more capable and scalable?",
      description:
        "Growth becomes more manageable when quality, advisory and operational systems evolve together with the business.",
      quote:
        "Growth works better when the business behind it is ready.",
      image: {
        src: null,
        alt: "Business growth, certification and automation support",
      },
      cta: {
        label: "Explore Growth Services",
        href: "/services#grow-your-business",
      },
      serviceIds: [
        "iso-certification",
        "business-advisory",
        "business-automation",
      ],
      enabled: true,
      order: 4,
    },
    {
      id: "expand",
      slug: "global-expansion",
      shortLabel: "Expand",
      eyebrow: "Global Expansion",
      title: "Evaluate international opportunities with the wider context in view.",
      question: "Which market and setup route fits your expansion plans?",
      description:
        "International expansion requires the right market, structure, registrations and operating plan to be considered together.",
      quote:
        "Expansion should open opportunities without creating avoidable complexity.",
      image: {
        src: null,
        alt: "International company setup and import export support",
      },
      cta: {
        label: "Explore Global Services",
        href: "/services#global-expansion",
      },
      serviceIds: [
        "iec-registration",
        "uae-company-setup",
        "singapore-company-setup",
        "malaysia-company-setup",
      ],
      enabled: true,
      order: 5,
    },
  ],
};

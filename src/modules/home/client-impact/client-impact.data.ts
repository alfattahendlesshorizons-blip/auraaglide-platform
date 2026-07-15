import type { ClientImpactContent } from "./client-impact.types";

export const clientImpactFallback: ClientImpactContent = {
  eyebrow: "BUSINESS OUTCOMES",

  heading: {
    primary: "What better business decisions",
    secondary: "make",
    accent: "possible.",
  },

  quote:
    "Progress becomes visible when the business knows what needs attention, what can wait and what should follow.",

  quoteCaption: "OUTCOMES OVER ACTIVITY",

  helper:
    "The objective is not more activity. It is a business that is easier to understand, manage and prepare for what comes next.",

  stories: [
    {
      id: "startup-foundation",
      label: "Clear Direction",
      eyebrow: "KNOW WHAT NEEDS ATTENTION",
      heading: {
        primary: "From scattered questions",
        secondary: "to one clear",
        accent: "next step.",
      },
      summary:
        "The business gains a clearer view of the immediate requirement, the connected responsibilities and the order in which work should happen.",
      outcomes: [
        {
          label: "Relevant requirements identified",
          description:
            "The business understands which registration, filing, licence or document applies.",
        },
        {
          label: "Priorities put in order",
          description:
            "Immediate needs are separated from work that can follow later.",
        },
        {
          label: "Fewer avoidable gaps",
          description:
            "Connected responsibilities are considered before action begins.",
        },
      ],
      ctaLabel: "Explore startup support",
      href: "/industries/startups",
    },
    {
      id: "operational-readiness",
      label: "Greater Control",
      eyebrow: "KEEP RESPONSIBILITIES VISIBLE",
      heading: {
        primary: "From reactive follow-up",
        secondary: "to better control of",
        accent: "ongoing work.",
      },
      summary:
        "Registrations, filings, accounts, records and responsibilities become easier to manage when ownership and timing are clear.",
      outcomes: [
        {
          label: "Clear responsibility",
          description:
            "The business knows who is responsible for documents, filings and follow-up.",
        },
        {
          label: "Better organised records",
          description:
            "Information is easier to retrieve for filing, review and future decisions.",
        },
        {
          label: "Greater compliance readiness",
          description:
            "Recurring obligations are less likely to become last-minute surprises.",
        },
      ],
      ctaLabel: "Explore compliance support",
      href: "/services/business-compliance",
    },
    {
      id: "coordinated-growth",
      label: "Prepared Growth",
      eyebrow: "GROW WITHOUT CREATING AVOIDABLE RISK",
      heading: {
        primary: "From disconnected activity",
        secondary: "to growth the business",
        accent: "can support.",
      },
      summary:
        "Expansion becomes more sustainable when finance, compliance, technology and operations are prepared for the same direction.",
      outcomes: [
        {
          label: "Connected operating decisions",
          description:
            "Growth plans consider tax, compliance, systems and delivery together.",
        },
        {
          label: "Manageable complexity",
          description:
            "New demand is supported without unnecessary operational confusion.",
        },
        {
          label: "Stronger expansion readiness",
          description:
            "The business is better prepared for investment, exports or new markets.",
        },
      ],
      ctaLabel: "Explore growth support",
      href: "/services/business-growth",
    },
  ],
};

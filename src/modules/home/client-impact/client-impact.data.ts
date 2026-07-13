import type { ClientImpactContent } from "./client-impact.types";

export const clientImpactFallback: ClientImpactContent = {
  eyebrow: "PROGRESS IN PRACTICE",

  heading: {
    primary: "Progress",
    secondary: "you can",
    accent: "see.",
  },

  quote:
    "The value of good advisory becomes visible when decisions become clearer, risks become easier to manage and progress becomes easier to sustain.",

  quoteCaption: "OUTCOMES OVER PROMISES",

  helper:
    "Explore how stronger structure changes the way a business starts, operates and grows.",

  stories: [
    {
      id: "startup-foundation",
      label: "Startup Foundation",
      eyebrow: "START WITH STRUCTURE",
      heading: {
        primary: "From scattered setup decisions",
        secondary: "to one clear",
        accent: "operating foundation.",
      },
      summary:
        "Formation, registrations, ownership and early compliance work better when they are planned as one connected starting point.",
      outcomes: [
        {
          label: "Clear entity direction",
          description:
            "The structure reflects ownership, risk and future growth.",
        },
        {
          label: "Coordinated registrations",
          description:
            "Required registrations follow one practical sequence.",
        },
        {
          label: "Defined next-step roadmap",
          description:
            "The business knows what must happen now and what comes later.",
        },
      ],
      ctaLabel: "Explore startup advisory",
      href: "/industries/startups",
    },
    {
      id: "operational-readiness",
      label: "Operational Readiness",
      eyebrow: "MOVE FROM REACTIVE TO READY",
      heading: {
        primary: "From reactive compliance",
        secondary: "to planned",
        accent: "operational control.",
      },
      summary:
        "Licences, documentation, reporting and review cycles become more manageable when they follow the actual rhythm of operations.",
      outcomes: [
        {
          label: "Visible compliance position",
          description:
            "Responsibilities, deadlines and gaps are easier to understand.",
        },
        {
          label: "Stronger documentation",
          description:
            "Records support both daily operations and future review.",
        },
        {
          label: "Improved readiness",
          description:
            "The business is better prepared for expansion, finance and scrutiny.",
        },
      ],
      ctaLabel: "Explore operational advisory",
      href: "/services/business-compliance",
    },
    {
      id: "coordinated-growth",
      label: "Coordinated Growth",
      eyebrow: "ALIGN THE NEXT STAGE",
      heading: {
        primary: "From disconnected growth activity",
        secondary: "to one coordinated",
        accent: "direction.",
      },
      summary:
        "Finance, compliance, protection and digital execution create stronger outcomes when they support the same growth priorities.",
      outcomes: [
        {
          label: "Better decision visibility",
          description:
            "Leadership can see how one choice affects the wider business.",
        },
        {
          label: "Aligned growth systems",
          description:
            "Demand, operations and reporting move in the same direction.",
        },
        {
          label: "Sustainable next steps",
          description:
            "Growth decisions reflect capability, risk and long-term intent.",
        },
      ],
      ctaLabel: "Explore growth advisory",
      href: "/services/business-growth",
    },
  ],
};

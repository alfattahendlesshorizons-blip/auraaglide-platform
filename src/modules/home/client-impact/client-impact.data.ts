import type { ClientImpactContent } from "./client-impact.types";

export const clientImpactFallback: ClientImpactContent = {
  eyebrow: "BUSINESS OUTCOMES",

  heading: {
    primary: "What stronger foundations",
    secondary: "make",
    accent: "possible.",
  },

  quote:
    "Progress is not activity. It is confidence in what comes next.",

  quoteCaption: "OUTCOMES OVER ACTIVITY",

  helper:
    "Real progress appears when a business becomes easier to manage, more prepared for change and clearer about what comes next.",

  stories: [
    {
      id: "startup-foundation",
      label: "Greater Clarity",
      eyebrow: "KNOW WHAT COMES NEXT",
      heading: {
        primary: "From scattered priorities",
        secondary: "to one clear",
        accent: "direction.",
      },
      summary:
        "Clarity improves when priorities, responsibilities and dependencies are understood as one connected starting point.",
      outcomes: [
        {
          label: "Clear next-step direction",
          description:
            "The business knows what deserves attention now and what should follow later.",
        },
        {
          label: "Visible priorities",
          description:
            "Responsibilities and dependencies are easier to understand and manage.",
        },
        {
          label: "Confident planning",
          description:
            "Future decisions are grounded in a clearer view of the business.",
        },
      ],
      ctaLabel: "Explore startup advisory",
      href: "/industries/startups",
    },
    {
      id: "operational-readiness",
      label: "Stronger Structure",
      eyebrow: "OPERATE WITH GREATER CONTROL",
      heading: {
        primary: "From reactive operations",
        secondary: "to stronger",
        accent: "working structure.",
      },
      summary:
        "Systems, responsibilities and review cycles become more manageable when they reflect how the business actually operates.",
      outcomes: [
        {
          label: "Clear responsibilities",
          description:
            "Ownership and accountability become easier to see across daily operations.",
        },
        {
          label: "Reliable operating records",
          description:
            "Documentation supports daily work, review and future decisions.",
        },
        {
          label: "Greater readiness",
          description:
            "The business is better prepared for change, finance and increasing complexity.",
        },
      ],
      ctaLabel: "Explore operational advisory",
      href: "/services/business-compliance",
    },
    {
      id: "coordinated-growth",
      label: "Sustainable Growth",
      eyebrow: "GROW WITHOUT LOSING CONTROL",
      heading: {
        primary: "From disconnected activity",
        secondary: "to growth that",
        accent: "systems can support.",
      },
      summary:
        "Growth becomes more sustainable when finance, compliance, technology and delivery can support the same direction.",
      outcomes: [
        {
          label: "Connected operations",
          description:
            "Teams and systems work with greater awareness of the wider business.",
        },
        {
          label: "Manageable complexity",
          description:
            "Increasing demand does not immediately create avoidable operational pressure.",
        },
        {
          label: "Stronger growth readiness",
          description:
            "Expansion reflects capability, risk and the foundations already in place.",
        },
      ],
      ctaLabel: "Explore growth advisory",
      href: "/services/business-growth",
    },
  ],
};

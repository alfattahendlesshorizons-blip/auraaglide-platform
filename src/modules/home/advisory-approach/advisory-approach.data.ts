import type { AdvisoryApproachContent } from "./advisory-approach.types";

export const advisoryApproachContent: AdvisoryApproachContent = {
  eyebrow: "ADVISORY APPROACH",
  heading: {
    primary: "Every recommendation",
    secondary: "begins with",
    accent: "understanding.",
  },
  quote:
    "Good advice starts by listening, not by prescribing.",
  quoteCaption: "CONTEXT BEFORE RECOMMENDATION",
  introduction:
    "Before discussing solutions, we understand how the business works today, what requires attention and what it is trying to build next.",
  steps: [
    {
      id: "understand",
      label: "Understand",
      eyebrow: "SEE THE BUSINESS AS IT IS",
      heading: {
        primary: "We begin with",
        secondary: "the business",
        accent: "as it operates today.",
      },
      description:
        "We listen to the business model, operating reality, responsibilities and goals before proposing any direction.",
      points: [
        "Business model and ownership",
        "Current operations and systems",
        "Priorities, constraints and goals",
      ],
      href: "/approach/discovery",
      ctaLabel: "Explore discovery",
    },
    {
      id: "assess",
      label: "Assess",
      eyebrow: "IDENTIFY WHAT REQUIRES ATTENTION",
      heading: {
        primary: "We evaluate",
        secondary: "priorities, dependencies",
        accent: "and avoidable risk.",
      },
      description:
        "We review the current structure, obligations, dependencies and capability so guidance reflects the real position.",
      points: [
        "Compliance and documentation review",
        "Risk and dependency mapping",
        "Readiness and opportunity assessment",
      ],
      href: "/approach/assessment",
      ctaLabel: "Explore assessment",
    },
    {
      id: "structure",
      label: "Structure",
      eyebrow: "PRIORITISE THE NEXT STEP",
      heading: {
        primary: "We define",
        secondary: "what deserves attention",
        accent: "now and next.",
      },
      description:
        "We organise priorities, responsibilities and dependencies into a practical sequence the business can understand.",
      points: [
        "Prioritised roadmap",
        "Clear responsibilities",
        "Connected legal, finance and growth decisions",
      ],
      href: "/approach/structure",
      ctaLabel: "Explore structuring",
    },
    {
      id: "execute",
      label: "Execute",
      eyebrow: "CONVERT DIRECTION INTO PROGRESS",
      heading: {
        primary: "We help turn",
        secondary: "clear direction into",
        accent: "coordinated progress.",
      },
      description:
        "Required workstreams are coordinated so progress in one area does not create avoidable friction somewhere else.",
      points: [
        "Coordinated implementation",
        "Milestone visibility",
        "Documentation and decision tracking",
      ],
      href: "/approach/execution",
      ctaLabel: "Explore execution",
    },
    {
      id: "support",
      label: "Support",
      eyebrow: "REMAIN CONNECTED AS THINGS CHANGE",
      heading: {
        primary: "We stay connected",
        secondary: "as priorities",
        accent: "keep changing.",
      },
      description:
        "Ongoing review helps guidance remain relevant as circumstances, responsibilities and opportunities evolve.",
      points: [
        "Review and follow-up",
        "Issue resolution and guidance",
        "Long-term advisory continuity",
      ],
      href: "/approach/ongoing-support",
      ctaLabel: "Explore ongoing support",
    },
  ],
};

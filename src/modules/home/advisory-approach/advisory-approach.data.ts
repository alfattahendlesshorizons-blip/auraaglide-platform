import type { AdvisoryApproachContent } from "./advisory-approach.types";

export const advisoryApproachContent: AdvisoryApproachContent = {
  eyebrow: "OUR ADVISORY APPROACH",
  heading: {
    primary: "Better decisions",
    secondary: "begin with better",
    accent: "understanding.",
  },
  quote:
    "We recommend only after we understand how the business actually works.",
  quoteCaption: "ADVICE WITH CONTEXT",
  introduction:
    "We connect the present position, the real risk and the intended direction before defining the next step.",
  steps: [
    {
      id: "understand",
      label: "Understand",
      eyebrow: "LISTEN BEFORE RECOMMENDING",
      heading: {
        primary: "We begin with",
        secondary: "how the business",
        accent: "really works.",
      },
      description:
        "We learn the business model, operating reality, responsibilities and goals before proposing any solution.",
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
      eyebrow: "SEE THE REAL POSITION",
      heading: {
        primary: "We identify",
        secondary: "what needs attention",
        accent: "and why.",
      },
      description:
        "We review the current structure, obligations, risks and capability so the recommendation reflects the real position.",
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
      eyebrow: "CREATE THE RIGHT ORDER",
      heading: {
        primary: "We turn complexity",
        secondary: "into a clear",
        accent: "working plan.",
      },
      description:
        "We organise priorities, responsibilities and dependencies into a sequence the business can understand and execute.",
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
      eyebrow: "MOVE WITH CONTROL",
      heading: {
        primary: "We help convert",
        secondary: "the plan into",
        accent: "real progress.",
      },
      description:
        "Execution is coordinated across the required workstreams so one action does not create avoidable problems elsewhere.",
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
      eyebrow: "STAY ALIGNED",
      heading: {
        primary: "We remain connected",
        secondary: "as the business",
        accent: "keeps changing.",
      },
      description:
        "Ongoing review keeps compliance, operations and growth aligned as circumstances, opportunities and responsibilities evolve.",
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

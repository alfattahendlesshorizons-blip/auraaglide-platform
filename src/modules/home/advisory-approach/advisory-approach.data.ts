import type { AdvisoryApproachContent } from "./advisory-approach.types";

export const advisoryApproachContent: AdvisoryApproachContent = {
  eyebrow: "HOW WE WORK",
  heading: {
    primary: "We understand the business",
    secondary: "before recommending",
    accent: "the service.",
  },
  quote:
    "The right recommendation begins with understanding the business behind the requirement.",
  quoteCaption: "CONTEXT BEFORE RECOMMENDATION",
  introduction:
    "We begin by understanding how the business works today, what requirement brought you here and what other decisions may be connected to it.",
  steps: [
    {
      id: "understand",
      label: "Understand",
      eyebrow: "BEGIN WITH YOUR SITUATION",
      heading: {
        primary: "We understand",
        secondary: "the business and",
        accent: "the requirement.",
      },
      description:
        "We listen to the business model, ownership, activities, current registrations and the outcome you are trying to achieve.",
      points: [
        "Business model and ownership",
        "Current registrations and operations",
        "Immediate requirement and wider goal",
      ],
      href: "/approach/discovery",
      ctaLabel: "Explore discovery",
    },
    {
      id: "assess",
      label: "Assess",
      eyebrow: "IDENTIFY WHAT APPLIES",
      heading: {
        primary: "We review",
        secondary: "requirements, dependencies",
        accent: "and avoidable gaps.",
      },
      description:
        "We assess which registration, filing, licence, document or advisory support is relevant and what may depend on it.",
      points: [
        "Applicable registrations and filings",
        "Document and compliance review",
        "Dependencies and avoidable risk",
      ],
      href: "/approach/assessment",
      ctaLabel: "Explore assessment",
    },
    {
      id: "structure",
      label: "Structure",
      eyebrow: "PUT THE WORK IN ORDER",
      heading: {
        primary: "We organise",
        secondary: "what should happen",
        accent: "now and next.",
      },
      description:
        "We arrange the work in a practical sequence so immediate action does not create unnecessary rework later.",
      points: [
        "Prioritised action plan",
        "Clear responsibilities",
        "Connected legal, tax and growth steps",
      ],
      href: "/approach/structure",
      ctaLabel: "Explore structuring",
    },
    {
      id: "execute",
      label: "Execute",
      eyebrow: "MOVE THE WORK FORWARD",
      heading: {
        primary: "We coordinate",
        secondary: "documents, applications",
        accent: "and follow-through.",
      },
      description:
        "Required workstreams are coordinated with clear documentation, status visibility and attention to connected requirements.",
      points: [
        "Application and filing coordination",
        "Document and milestone tracking",
        "Clear communication on progress",
      ],
      href: "/approach/execution",
      ctaLabel: "Explore execution",
    },
    {
      id: "support",
      label: "Support",
      eyebrow: "STAY PREPARED AFTER COMPLETION",
      heading: {
        primary: "We help you understand",
        secondary: "what follows after",
        accent: "the immediate work.",
      },
      description:
        "Where required, ongoing support helps the business manage filings, renewals, documentation and new decisions as circumstances change.",
      points: [
        "Follow-up and issue guidance",
        "Recurring compliance awareness",
        "Ongoing business advisory",
      ],
      href: "/approach/ongoing-support",
      ctaLabel: "Explore ongoing support",
    },
  ],
};

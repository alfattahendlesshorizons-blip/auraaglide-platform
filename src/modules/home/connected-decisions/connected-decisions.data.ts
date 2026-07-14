import type { ConnectedDecisionItem } from "./connected-decisions.types";

export const connectedDecisionsContent = {
  eyebrow: "DECISION CHAIN",
  headingLead: "No decision",
  headingMiddle: "stands",
  headingAccent: "alone.",
  description:
    "Every important business choice changes what becomes possible next. Small decisions rarely stay small.",
  quote:
    "Today's decisions quietly become tomorrow's business reality.",
  quoteCaption: "CONSEQUENCES BEYOND THE MOMENT",
  items: [
    {
      id: "foundation",
      label: "Foundation",
      eyebrow: "DEFINE WHAT FOLLOWS",
      heading:
        "The starting structure shapes ownership, responsibility and future flexibility.",
      description:
        "The foundation chosen today affects taxation, compliance, investment readiness and how easily the business can change later.",
      insight:
        "Early clarity creates more room for stronger choices later.",
      links: [
        {
          label: "Business registration",
          href: "/services/business-registration",
        },
        {
          label: "Entity selection",
          href: "/resources/entity-selection",
        },
      ],
    },
    {
      id: "legal",
      label: "Legal",
      eyebrow: "PROTECT WHAT IS GROWING",
      heading:
        "Value becomes harder to protect after exposure has already appeared.",
      description:
        "Ownership rights, agreements, licences and intellectual property influence partnerships, responsibility and future opportunity.",
      insight:
        "Protection planned early reduces avoidable friction later.",
      links: [
        {
          label: "Trademark support",
          href: "/services/trademark-registration",
        },
        {
          label: "Legal documentation",
          href: "/services/legal-documentation",
        },
      ],
    },
    {
      id: "compliance",
      label: "Compliance",
      eyebrow: "PRESERVE OPERATING FREEDOM",
      heading:
        "Compliance determines how confidently the business can keep moving.",
      description:
        "Filings, licences and statutory responsibilities change with revenue, team size, activity and operating complexity.",
      insight:
        "Readiness today protects momentum when the next opportunity arrives.",
      links: [
        {
          label: "GST compliance",
          href: "/services/gst-compliance",
        },
        {
          label: "Annual compliance",
          href: "/services/annual-compliance",
        },
      ],
    },
    {
      id: "finance",
      label: "Finance",
      eyebrow: "CREATE DECISION VISIBILITY",
      heading:
        "Financial visibility changes the quality and timing of every next move.",
      description:
        "Reporting, taxation and cash-flow discipline reveal what the business can support, where pressure is building and what is realistic next.",
      insight:
        "Clear numbers convert activity into direction.",
      links: [
        {
          label: "Accounting support",
          href: "/services/accounting",
        },
        {
          label: "Tax advisory",
          href: "/services/tax-advisory",
        },
      ],
    },
    {
      id: "growth",
      label: "Growth",
      eyebrow: "EXPAND WITHOUT LOSING CONTROL",
      heading:
        "Growth magnifies the quality of every system already in place.",
      description:
        "Demand, teams and market reach create stronger outcomes when compliance, finance, technology and delivery can support the added complexity.",
      insight:
        "Sustainable growth builds on readiness, not activity alone.",
      links: [
        {
          label: "Digital growth",
          href: "/services/digital-growth",
        },
        {
          label: "Growth systems",
          href: "/services/business-growth",
        },
      ],
    },
    {
      id: "advisory",
      label: "Advisory",
      eyebrow: "KEEP THE CONSEQUENCES IN VIEW",
      heading:
        "The next choice should understand what came before and what may follow.",
      description:
        "Ongoing guidance helps immediate action reflect risk, capability, timing and the wider direction of the business.",
      insight:
        "The wider view prevents a useful action from creating a new problem elsewhere.",
      links: [
        {
          label: "Business advisory",
          href: "/services/business-advisory",
        },
        {
          label: "Talk to an advisor",
          href: "/contact",
        },
      ],
    },
  ] satisfies ConnectedDecisionItem[],
};

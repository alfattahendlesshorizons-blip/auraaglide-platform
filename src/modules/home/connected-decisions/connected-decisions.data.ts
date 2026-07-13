import type { ConnectedDecisionItem } from "./connected-decisions.types";

export const connectedDecisionsContent = {
  eyebrow: "DECISIONS IN MOTION",
  headingLead: "No decision",
  headingMiddle: "stands",
  headingAccent: "alone.",
  description:
    "Formation, protection, compliance, finance and growth continuously shape one another.",
  quote:
    "The strongest next step is the one that considers the whole business.",
  quoteCaption: "CONNECTED DECISION-MAKING",
  items: [
    {
      id: "foundation",
      label: "Foundation",
      eyebrow: "START WITH CLARITY",
      heading:
        "The structure chosen today shapes every decision that follows.",
      description:
        "Entity type, ownership and registrations influence taxation, compliance, fundraising and future flexibility.",
      insight:
        "A strong foundation reduces expensive corrections later.",
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
      eyebrow: "PROTECT THE POSITION",
      heading:
        "Protection should grow with the value being created.",
      description:
        "Contracts, ownership rights, licences and intellectual property need to evolve as operations and partnerships expand.",
      insight:
        "Protection works best before a dispute or opportunity appears.",
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
      eyebrow: "STAY READY",
      heading:
        "Compliance works best when it follows the business rhythm.",
      description:
        "Filings, licences and statutory obligations change with revenue, team size and operating complexity.",
      insight:
        "Timely compliance protects operational confidence.",
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
      eyebrow: "SEE THE REAL POSITION",
      heading:
        "Reliable decisions depend on reliable financial visibility.",
      description:
        "Reporting, taxation and cash-flow discipline turn business activity into information leaders can use.",
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
      eyebrow: "BUILD FOR DEMAND",
      heading:
        "Growth becomes sustainable when the operating structure can support it.",
      description:
        "Visibility, lead systems and digital execution perform better when finance, compliance and delivery remain aligned.",
      insight:
        "Demand is valuable only when the business can serve it well.",
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
      eyebrow: "KEEP THE WIDER VIEW",
      heading:
        "The next decision should reflect the whole business, not one isolated issue.",
      description:
        "Ongoing advisory connects immediate actions with risk, capability and long-term direction.",
      insight:
        "The wider view keeps individual decisions working together.",
      links: [
        {
          label: "Business advisory",
          href: "/services/business-advisory",
        },
        {
          label: "Book a consultation",
          href: "/contact",
        },
      ],
    },
  ] satisfies ConnectedDecisionItem[],
};

import type { ServicesEcosystemContent } from "./services-ecosystem.types";

export const servicesEcosystemFallback: ServicesEcosystemContent = {
  eyebrow: "BUSINESS SUPPORT",

  heading: {
    primary: "Find the support",
    secondary: "your business needs",
    accent: "today.",
  },

  statement:
    "One requirement often creates another. The right support keeps those decisions connected.",

  statementCaption: "FROM ONE REQUIREMENT TO THE NEXT",

  helper:
    "Start with the requirement you already know. AuraaGlide helps you understand what applies now, what may follow and how each step connects to the wider business.",

  capabilities: [
    {
      id: "foundation",
      shortLabel: "Start",
      eyebrow: "START YOUR BUSINESS",
      title: "Business Registration & Formation",
      heading: {
        primary: "Choose and register",
        secondary: "the structure that fits",
        accent: "your business.",
      },
      description:
        "The right structure affects ownership, taxation, compliance and future expansion. Compare the available options before registering the business.",
      insight: "THE RIGHT STRUCTURE MAKES LATER DECISIONS EASIER.",
      services: [
        {
          label: "Private Limited Company",
          href: "/services/private-limited-company-registration",
        },
        {
          label: "Limited Liability Partnership",
          href: "/services/llp-registration",
        },
        {
          label: "One Person Company",
          href: "/services/opc-registration",
        },
        {
          label: "Proprietorship Registration",
          href: "/services/proprietorship-registration",
        },
        {
          label: "Partnership Firm Registration",
          href: "/services/partnership-firm-registration",
        },
        {
          label: "Section 8 Company",
          href: "/services/section-8-company-registration",
        },
        {
          label: "MSME Registration",
          href: "/services/msme-registration",
        },
      ],
      cta: {
        label: "Explore Business Registration",
        href: "/services/business-setup",
      },
      order: 1,
      published: true,
    },
    {
      id: "protection",
      shortLabel: "Protect",
      eyebrow: "PROTECT YOUR BUSINESS",
      title: "Brand, Intellectual Property & Legal Documents",
      heading: {
        primary: "Protect the name, work",
        secondary: "and agreements your business",
        accent: "depends on.",
      },
      description:
        "Brand names, creative work, inventions, contracts and ownership records become more valuable as the business becomes visible. Protection is easier before a dispute begins.",
      insight: "PROTECT BUSINESS VALUE BEFORE EXPOSURE BECOMES A PROBLEM.",
      services: [
        {
          label: "Trademark Registration",
          href: "/services/trademark-registration",
        },
        {
          label: "Patent Registration",
          href: "/services/patent-registration",
        },
        {
          label: "Copyright Registration",
          href: "/services/copyright-registration",
        },
        {
          label: "Business Agreements",
          href: "/services/business-agreements",
        },
        {
          label: "Legal Documentation",
          href: "/services/legal-documentation",
        },
      ],
      cta: {
        label: "Explore Business Protection",
        href: "/services/legal-protection",
      },
      order: 2,
      published: true,
    },
    {
      id: "compliance",
      shortLabel: "Comply",
      eyebrow: "MANAGE REGISTRATIONS & COMPLIANCE",
      title: "Licences, Filings & Ongoing Compliance",
      heading: {
        primary: "Understand what applies",
        secondary: "and keep recurring work",
        accent: "under control.",
      },
      description:
        "Registrations, licences, statutory filings and renewals depend on the activity and structure of the business. Clear ownership makes ongoing compliance easier to manage.",
      insight: "COMPLIANCE WORKS BEST AS A ROUTINE, NOT A LAST-MINUTE RESPONSE.",
      services: [
        {
          label: "GST Registration",
          href: "/services/gst-registration",
        },
        {
          label: "Annual & ROC Compliance",
          href: "/services/annual-compliance",
        },
        {
          label: "FSSAI Registration",
          href: "/services/fssai-registration",
        },
        {
          label: "Import Export Code",
          href: "/services/import-export-code",
        },
        {
          label: "Business Licences",
          href: "/services/business-licences",
        },
      ],
      cta: {
        label: "Explore Compliance Support",
        href: "/services/business-compliance",
      },
      order: 3,
      published: true,
    },
    {
      id: "finance-tax",
      shortLabel: "Tax",
      eyebrow: "MANAGE GST, TAX & ACCOUNTS",
      title: "Tax Filing, Accounting & Reporting",
      heading: {
        primary: "Meet filing requirements",
        secondary: "and understand the numbers",
        accent: "behind the business.",
      },
      description:
        "Income tax, GST returns, bookkeeping and reporting should meet compliance requirements while giving the business a clearer view of income, costs and obligations.",
      insight: "GOOD RECORDS SUPPORT BOTH COMPLIANCE AND BETTER DECISIONS.",
      services: [
        {
          label: "Income Tax Return Filing",
          href: "/services/income-tax-return",
        },
        {
          label: "GST Return Filing",
          href: "/services/gst-return-filing",
        },
        {
          label: "Accounting & Bookkeeping",
          href: "/services/accounting-bookkeeping",
        },
        {
          label: "TDS & Payroll",
          href: "/services/tds-payroll",
        },
        {
          label: "Tax Planning",
          href: "/services/tax-planning",
        },
      ],
      cta: {
        label: "Explore GST, Tax & Accounts",
        href: "/services/finance-tax",
      },
      order: 4,
      published: true,
    },
    {
      id: "growth",
      shortLabel: "Grow",
      eyebrow: "GROW YOUR BUSINESS",
      title: "Digital Systems, Market Access & Growth Readiness",
      heading: {
        primary: "Build demand",
        secondary: "with systems that can",
        accent: "support it.",
      },
      description:
        "Web platforms, customer management, automation, market access and funding readiness should strengthen the business without creating avoidable operational pressure.",
      insight: "GROWTH IS STRONGER WHEN OPERATIONS CAN KEEP UP.",
      services: [
        {
          label: "Website & Digital Platform",
          href: "/services/website-development",
        },
        {
          label: "CRM & Lead Management",
          href: "/services/crm",
        },
        {
          label: "Business Automation",
          href: "/services/business-automation",
        },
        {
          label: "ISO Certification",
          href: "/services/iso-certification",
        },
        {
          label: "Funding Support",
          href: "/services/funding-readiness",
        },
      ],
      cta: {
        label: "Explore Growth Support",
        href: "/services/business-growth",
      },
      order: 5,
      published: true,
    },
    {
      id: "advisory",
      shortLabel: "Global",
      eyebrow: "EXPAND & STAY GUIDED",
      title: "Global Setup & Ongoing Business Advisory",
      heading: {
        primary: "Prepare for expansion",
        secondary: "without losing sight of",
        accent: "what must remain connected.",
      },
      description:
        "International company setup, export readiness and ongoing advisory require legal, financial and operational decisions to move in the same direction.",
      insight: "EXPANSION WORKS BETTER WHEN EACH NEW STEP UNDERSTANDS THE WIDER BUSINESS.",
      services: [
        {
          label: "UAE Company Setup",
          href: "/services/uae-company-setup",
        },
        {
          label: "Singapore Company Registration",
          href: "/services/singapore-company-registration",
        },
        {
          label: "Malaysia Company Registration",
          href: "/services/malaysia-company-registration",
        },
        {
          label: "Business Advisory",
          href: "/services/business-advisory",
        },
        {
          label: "Ongoing Business Support",
          href: "/services/ongoing-support",
        },
      ],
      cta: {
        label: "Explore Global Business Support",
        href: "/services/global-business",
      },
      order: 6,
      published: true,
    },
  ],
};

import type { ConnectedDecisionItem } from "./connected-decisions.types";

export const connectedDecisionsContent = {
  eyebrow: "CONNECTED DECISIONS",
  headingLead: "One requirement",
  headingMiddle: "often leads",
  headingAccent: "to another.",
  description:
    "A company registration, licence, tax filing or brand-protection decision rarely ends by itself. Understanding the next connected step prevents avoidable gaps.",
  quote:
    "The value of one business decision is often seen in how well it prepares the next.",
  quoteCaption: "WHAT HAPPENS AFTER THIS?",
  items: [
    {
      id: "foundation",
      label: "Start",
      eyebrow: "FROM REGISTRATION TO OPERATIONS",
      heading:
        "Registering the business creates the foundation for tax, banking, ownership and future compliance.",
      description:
        "The chosen structure may lead to PAN and TAN, GST, MSME recognition, agreements, accounting and recurring statutory filings.",
      insight:
        "A registration is the beginning of the operating structure, not the end of the process.",
      links: [
        {
          label: "Business registration",
          href: "/services/business-registration",
        },
        {
          label: "GST registration",
          href: "/services/gst-registration",
        },
      ],
    },
    {
      id: "legal",
      label: "Protect",
      eyebrow: "FROM BUSINESS NAME TO BRAND VALUE",
      heading:
        "A business name becomes more valuable when ownership and usage rights are clear.",
      description:
        "Trademark, copyright, patent support and business agreements help protect the identity, work and relationships the business is building.",
      insight:
        "Protection planned early is usually simpler than protection sought after a conflict.",
      links: [
        {
          label: "Trademark registration",
          href: "/services/trademark-registration",
        },
        {
          label: "Patent registration",
          href: "/services/patent-registration",
        },
      ],
    },
    {
      id: "compliance",
      label: "Comply",
      eyebrow: "FROM LICENCE TO RENEWAL",
      heading:
        "A registration or licence often creates ongoing filing, renewal and record-keeping responsibilities.",
      description:
        "GST returns, ROC filings, FSSAI renewals, statutory records and other obligations depend on the activity and structure of the business.",
      insight:
        "Knowing the recurring responsibility is as important as completing the first application.",
      links: [
        {
          label: "Annual compliance",
          href: "/services/annual-compliance",
        },
        {
          label: "Business licences",
          href: "/services/business-licences",
        },
      ],
    },
    {
      id: "finance",
      label: "Manage",
      eyebrow: "FROM TRANSACTIONS TO FINANCIAL VISIBILITY",
      heading:
        "Tax filing becomes easier when accounts, records and reporting remain organised throughout the year.",
      description:
        "Bookkeeping, GST returns, income tax, TDS, payroll and financial reporting work better when they share accurate and consistent records.",
      insight:
        "Better records reduce filing pressure and improve the quality of business decisions.",
      links: [
        {
          label: "Accounting & bookkeeping",
          href: "/services/accounting-bookkeeping",
        },
        {
          label: "Income tax return",
          href: "/services/income-tax-return",
        },
      ],
    },
    {
      id: "growth",
      label: "Grow",
      eyebrow: "FROM DEMAND TO DELIVERY",
      heading:
        "Growth creates new pressure on systems, people, compliance and cash flow.",
      description:
        "Digital growth, customer management, automation and market expansion create stronger results when operations and reporting can support the added demand.",
      insight:
        "Growth is more sustainable when the business is ready for the complexity it creates.",
      links: [
        {
          label: "CRM & automation",
          href: "/services/business-automation",
        },
        {
          label: "Growth readiness",
          href: "/services/growth-readiness",
        },
      ],
    },
    {
      id: "advisory",
      label: "Expand",
      eyebrow: "FROM ONE MARKET TO THE NEXT",
      heading:
        "International expansion adds new legal, tax, banking and operating decisions.",
      description:
        "Country selection, company setup, documentation, tax context and ongoing obligations should be reviewed together before entering a new jurisdiction.",
      insight:
        "The right international route depends on the business behind the application.",
      links: [
        {
          label: "Global business setup",
          href: "/services/global-business",
        },
        {
          label: "Business assessment",
          href: "/approach/assessment",
        },
      ],
    },
  ] satisfies ConnectedDecisionItem[],
};

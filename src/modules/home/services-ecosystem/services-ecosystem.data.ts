import type { ServicesEcosystemContent } from "./services-ecosystem.types";

export const servicesEcosystemFallback: ServicesEcosystemContent = {
  eyebrow: "CONNECTED CAPABILITIES",

  heading: {
    primary: "The support your business needs",
    secondary: "should not work",
    accent: "in isolation.",
  },

  statement:
    "Formation, protection, compliance, finance and growth create stronger outcomes when every decision understands what comes next.",

  statementCaption: "ONE CONNECTED SUPPORT SYSTEM",

  helper:
    "Explore the capability areas that help a business start correctly, stay protected, operate responsibly and grow with greater clarity.",

  capabilities: [
    {
      id: "foundation",
      shortLabel: "Foundation",
      eyebrow: "START WITH CLARITY",
      title: "Business Setup & Formation",
      heading: {
        primary: "Choose a structure",
        secondary: "that supports",
        accent: "what comes next.",
      },
      description:
        "The right structure shapes ownership, taxation, compliance and future expansion. Early choices should create room for the business to grow, not restrictions it must later undo.",
      insight: "EARLY STRUCTURE SHAPES LATER FREEDOM.",
      services: [
        { label: "Private Limited Company", href: "/services/private-limited-company-registration" },
        { label: "Limited Liability Partnership", href: "/services/llp-registration" },
        { label: "One Person Company", href: "/services/opc-registration" },
        { label: "Startup India Recognition", href: "/services/startup-india-registration" },
        { label: "MSME Registration", href: "/services/msme-registration" },
      ],
      cta: { label: "Explore Business Foundation", href: "/services/business-setup" },
      order: 1,
      published: true,
    },
    {
      id: "protection",
      shortLabel: "Protection",
      eyebrow: "PROTECT WHAT YOU BUILD",
      title: "Legal & Brand Protection",
      heading: {
        primary: "Protect the value",
        secondary: "your business is",
        accent: "working to create.",
      },
      description:
        "Names, brands, agreements and ownership positions become more important as visibility grows. Protection works best when it is planned before avoidable disputes or exposure appear.",
      insight: "PROTECTION IS STRONGEST BEFORE IT BECOMES URGENT.",
      services: [
        { label: "Trademark Registration", href: "/services/trademark-registration" },
        { label: "Copyright Registration", href: "/services/copyright-registration" },
        { label: "Business Agreements", href: "/services/business-agreements" },
        { label: "Legal Documentation", href: "/services/legal-documentation" },
        { label: "Brand Protection Review", href: "/services/brand-protection" },
      ],
      cta: { label: "Explore Legal Protection", href: "/services/legal-protection" },
      order: 2,
      published: true,
    },
    {
      id: "compliance",
      shortLabel: "Compliance",
      eyebrow: "STAY READY",
      title: "Registrations & Compliance",
      heading: {
        primary: "Turn obligations",
        secondary: "into a clear",
        accent: "operating rhythm.",
      },
      description:
        "Registrations, licences, filings and documentation are easier to manage when they follow the real structure and activities of the business. Clear ownership reduces reactive decisions.",
      insight: "COMPLIANCE WORKS BETTER AS A SYSTEM, NOT A DEADLINE.",
      services: [
        { label: "GST Registration", href: "/services/gst-registration" },
        { label: "Business Licences", href: "/services/business-licences" },
        { label: "Annual Compliance", href: "/services/annual-compliance" },
        { label: "FSSAI Registration", href: "/services/fssai-registration" },
        { label: "Import Export Code", href: "/services/import-export-code" },
      ],
      cta: { label: "Explore Compliance Support", href: "/services/business-compliance" },
      order: 3,
      published: true,
    },
    {
      id: "finance-tax",
      shortLabel: "Finance & Tax",
      eyebrow: "SEE THE FINANCIAL PICTURE",
      title: "Finance, Tax & Reporting",
      heading: {
        primary: "Build visibility",
        secondary: "before financial decisions",
        accent: "become difficult.",
      },
      description:
        "Tax, reporting and records should help leadership understand the business, not only satisfy a filing requirement. Better visibility supports stronger operating and growth decisions.",
      insight: "GOOD REPORTING TURNS NUMBERS INTO DIRECTION.",
      services: [
        { label: "Income Tax Return", href: "/services/income-tax-return" },
        { label: "GST Return Filing", href: "/services/gst-return-filing" },
        { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
        { label: "Financial Reporting", href: "/services/financial-reporting" },
        { label: "Tax Planning", href: "/services/tax-planning" },
      ],
      cta: { label: "Explore Finance & Tax", href: "/services/finance-tax" },
      order: 4,
      published: true,
    },
    {
      id: "growth",
      shortLabel: "Growth",
      eyebrow: "ALIGN THE NEXT STAGE",
      title: "Digital Growth & Market Access",
      heading: {
        primary: "Create demand",
        secondary: "that your systems",
        accent: "can support.",
      },
      description:
        "Digital presence and market access are more valuable when operations, compliance and reporting can support the demand they create. Visibility should connect to readiness.",
      insight: "GROWTH IS STRONGER WHEN DELIVERY CAN KEEP UP.",
      services: [
        { label: "Website & Digital Platform", href: "/services/website-development" },
        { label: "Digital Growth Strategy", href: "/services/digital-growth" },
        { label: "Marketplace Enablement", href: "/services/marketplace-enablement" },
        { label: "Export Readiness", href: "/services/export-readiness" },
        { label: "Business Automation", href: "/services/business-automation" },
      ],
      cta: { label: "Explore Business Growth", href: "/services/business-growth" },
      order: 5,
      published: true,
    },
    {
      id: "advisory",
      shortLabel: "Advisory",
      eyebrow: "KEEP THE WIDER VIEW",
      title: "Ongoing Business Advisory",
      heading: {
        primary: "Make the next decision",
        secondary: "with the wider business",
        accent: "in view.",
      },
      description:
        "As priorities change, businesses need continuity across legal, financial, operational and growth decisions. Ongoing guidance helps each next step understand what came before it.",
      insight: "CONTINUITY PREVENTS GOOD DECISIONS FROM WORKING ALONE.",
      services: [
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "Compliance Review", href: "/services/compliance-review" },
        { label: "Growth Readiness Review", href: "/services/growth-readiness" },
        { label: "Documentation Review", href: "/services/documentation-review" },
        { label: "Business Support Retainer", href: "/services/ongoing-support" },
      ],
      cta: { label: "Explore Ongoing Advisory", href: "/services/business-advisory" },
      order: 6,
      published: true,
    },
  ],
};

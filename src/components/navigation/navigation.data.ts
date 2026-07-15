import type { NavigationContent } from "./navigation.types";

export const navigationContent: NavigationContent = {
  logo: {
    src: "/images/brand/auraaglide-logo-horizontal.png",
    alt: "AuraaGlide Solutions",
    href: "/",
  },

  groups: [
    {
      label: "Services",
      href: "/services",
      eyebrow: "What do you need help with today?",
      description:
        "Find business registration, GST, tax, compliance, brand protection, licences and global setup support.",
      items: [
        {
          label: "Start Your Business",
          href: "/services/business-setup",
          description:
            "Private Limited, LLP, OPC, Proprietorship, Partnership, Section 8 and MSME.",
          icon: "setup",
        },
        {
          label: "Run Your Business",
          href: "/services/tax-compliance",
          description:
            "GST, income tax, ROC filings, accounting, TDS, payroll and annual compliance.",
          icon: "tax",
        },
        {
          label: "Protect Your Business",
          href: "/services/legal-protection",
          description:
            "Trademark, patent, copyright, agreements and business documentation.",
          icon: "legal",
        },
        {
          label: "Grow Your Business",
          href: "/services/business-growth",
          description:
            "ISO, advisory, digital systems, automation and funding readiness.",
          icon: "industry",
        },
        {
          label: "Expand Globally",
          href: "/services/global-business",
          description:
            "IEC, UAE, Singapore, Malaysia and international business setup.",
          icon: "certificate",
        },
      ],
      quickLinks: [
        {
          label: "GST Registration",
          href: "/services/gst-registration",
        },
        {
          label: "Private Limited Company",
          href: "/services/private-limited-company-registration",
        },
        {
          label: "Trademark Registration",
          href: "/services/trademark-registration",
        },
        {
          label: "Income Tax Return",
          href: "/services/income-tax-return",
        },
        {
          label: "Business Assessment",
          href: "/approach/assessment",
        },
      ],
    },

    {
      label: "Industries",
      href: "/industries",
      eyebrow: "Support shaped around your business",
      description:
        "Explore registration, compliance, tax and growth support for different operating realities.",
      items: [
        {
          label: "Startups",
          href: "/industries/startups",
          description:
            "Formation, ownership, GST, protection and startup compliance.",
          icon: "startup",
        },
        {
          label: "Manufacturing",
          href: "/industries/manufacturing",
          description:
            "GST, licences, labour compliance, contracts and incentives.",
          icon: "industry",
        },
        {
          label: "Healthcare",
          href: "/industries/healthcare",
          description:
            "Registrations, regulatory records, tax and operational compliance.",
          icon: "industry",
        },
        {
          label: "E-commerce & Retail",
          href: "/industries/ecommerce-retail",
          description:
            "Registration, GST, accounting and marketplace operations.",
          icon: "industry",
        },
      ],
      quickLinks: [
        {
          label: "Agriculture & FPO",
          href: "/industries/agriculture-fpo",
        },
        {
          label: "SMEs",
          href: "/industries/smes",
        },
        {
          label: "Explore Industries",
          href: "/industries",
        },
      ],
    },

    {
      label: "Resources",
      href: "/resources",
      eyebrow: "Understand before you decide",
      description:
        "Use practical guides, compliance updates and clear answers to understand business requirements.",
      items: [
        {
          label: "Business Guides",
          href: "/resources/guides",
          description:
            "Step-by-step guidance for registrations and business decisions.",
          icon: "guide",
        },
        {
          label: "Compliance Updates",
          href: "/resources/updates",
          description:
            "Important filing, tax and regulatory updates.",
          icon: "update",
        },
        {
          label: "Knowledge Hub",
          href: "/resources/knowledge-hub",
          description:
            "Articles and explainers in clear business language.",
          icon: "knowledge",
        },
        {
          label: "FAQs",
          href: "/faq",
          description:
            "Clear answers to common registration and compliance questions.",
          icon: "faq",
        },
      ],
      quickLinks: [
        {
          label: "Latest Updates",
          href: "/resources/updates",
        },
        {
          label: "Download Guides",
          href: "/resources/guides",
        },
        {
          label: "View All Resources",
          href: "/resources",
        },
      ],
    },
  ],

  directLinks: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  cta: {
    label: "Start with Clarity",
    href: "/contact",
  },
};

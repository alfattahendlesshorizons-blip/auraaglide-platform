import type { SeoContract, ServiceContract } from "../contracts";

const seedTimestamp = "2026-07-15T00:00:00.000Z";

function createDraftSeo(
  title: string,
  description: string,
  canonicalPath: string,
): SeoContract {
  return {
    title,
    description,
    canonicalPath,
    robots: {
      index: false,
      follow: true,
    },
    twitter: {
      card: "summary_large_image",
    },
    schemaTypes: ["Service", "BreadcrumbList"],
    includeInSitemap: false,
  };
}

export const servicesSeed: readonly ServiceContract[] = [
  {
    id: "service-private-limited-company-registration",
    slug: "private-limited-company-registration",
    title: "Private Limited Company Registration",
    shortTitle: "Private Limited Company",
    summary:
      "A structured company-formation route for businesses that need defined ownership, limited liability and a formal base for future operations and growth.",
    domainId: "domain-business-formation",
    categoryId: "category-company-formation",
    lifecycleStages: ["idea", "start", "register"],
    availability: "active",
    deliveryModel: "to-confirm",
    audience: [
      "Founders preparing to establish a formal company",
      "Businesses that need defined ownership and governance",
      "Ventures planning for investment, hiring or structured expansion",
    ],
    outcomes: [
      "A formally incorporated company, subject to approval",
      "Clearer ownership and governance records",
      "A foundation for connected tax, banking and compliance steps",
    ],
    scopeNotes: [
      "Final scope depends on founder profile, proposed activity, ownership and document readiness.",
      "Government review, name availability and clarification requests remain outside guaranteed control.",
    ],
    exclusions: [
      "Sector-specific licences unless separately confirmed",
      "Ongoing accounting, tax filing and annual compliance unless included in the agreed scope",
      "Guaranteed name approval or government processing time",
    ],
    sections: [
      {
        id: "private-limited-decision-context",
        kind: "decision-context",
        eyebrow: "Business context",
        title: "Understand where a Private Limited Company fits.",
        summary:
          "A Private Limited Company creates a separate legal structure for the business. The decision affects ownership, governance, compliance, taxation and future fundraising, so the structure should be assessed before incorporation begins.",
        body:
          "It can be suitable where founders want clearer ownership, limited liability and a formal framework for growth. It may be unnecessary where the business is very small, low-risk or better served by a simpler structure.",
        order: 1,
        enabled: true,
        theme: "light",
      },
      {
        id: "private-limited-relevance",
        kind: "relevance-check",
        eyebrow: "Is this relevant for you?",
        title: "Consider the business behind the registration.",
        summary:
          "The right structure depends on ownership, risk, compliance capacity and long-term plans.",
        items: [
          {
            id: "private-limited-relevant-multiple-founders",
            title: "You need defined ownership",
            description:
              "Useful where founder roles, shareholding and decision rights should be recorded through a formal company structure.",
          },
          {
            id: "private-limited-relevant-liability",
            title: "You want liability separated from the individual",
            description:
              "A separate legal entity can provide a clearer distinction between company obligations and personal capacity, subject to law and conduct.",
          },
          {
            id: "private-limited-relevant-growth",
            title: "You are preparing for structured growth",
            description:
              "Often considered by businesses planning to hire, raise capital, add shareholders or enter larger commercial relationships.",
          },
          {
            id: "private-limited-alternative",
            title: "A simpler structure may be enough",
            description:
              "A proprietorship, partnership, LLP or OPC may be more suitable depending on ownership, activity, risk and compliance expectations.",
          },
        ],
        order: 2,
        enabled: true,
        theme: "soft",
      },
      {
        id: "private-limited-deliverables",
        kind: "deliverables",
        eyebrow: "What the engagement covers",
        title: "A defined incorporation scope with clear boundaries.",
        summary:
          "The exact deliverables will be confirmed before work begins and may vary with founder profile and applicable requirements.",
        items: [
          {
            id: "private-limited-deliverable-structure",
            title: "Structure and information review",
            description:
              "Review of proposed ownership, business activity, name options and incorporation information.",
          },
          {
            id: "private-limited-deliverable-preparation",
            title: "Incorporation preparation",
            description:
              "Preparation and coordination of the applicable incorporation forms, declarations and supporting records.",
          },
          {
            id: "private-limited-deliverable-submission",
            title: "Application coordination",
            description:
              "Submission support, status tracking and response coordination where clarification is requested.",
          },
          {
            id: "private-limited-deliverable-next",
            title: "Post-incorporation direction",
            description:
              "Guidance on connected steps such as banking, GST, MSME, trademark, accounting and recurring compliance.",
          },
        ],
        order: 3,
        enabled: true,
        theme: "light",
      },
      {
        id: "private-limited-requirements",
        kind: "requirements",
        eyebrow: "Before the filing",
        title: "Information and decisions that should be ready.",
        items: [
          {
            id: "private-limited-requirement-founders",
            title: "Founder and ownership details",
            description:
              "Proposed directors, shareholders, ownership split and contact information.",
          },
          {
            id: "private-limited-requirement-name",
            title: "Proposed company names",
            description:
              "Name options aligned with the proposed activity and checked for obvious conflicts before filing.",
          },
          {
            id: "private-limited-requirement-activity",
            title: "Business activity",
            description:
              "A clear description of the proposed products, services and operating model.",
          },
          {
            id: "private-limited-requirement-office",
            title: "Registered office context",
            description:
              "Address details and supporting proof based on the intended registered office.",
          },
        ],
        order: 4,
        enabled: true,
        theme: "light",
      },
      {
        id: "private-limited-documents",
        kind: "documents",
        eyebrow: "Document checklist",
        title: "Documents depend on the people, address and ownership involved.",
        summary:
          "The final checklist should be confirmed for the specific incorporation. The following categories are commonly reviewed.",
        items: [
          {
            id: "private-limited-document-identity",
            title: "Identity and address records",
            description:
              "Identity, address and contact records for the proposed directors and shareholders.",
          },
          {
            id: "private-limited-document-office",
            title: "Registered office records",
            description:
              "Ownership or occupancy proof, utility evidence and consent where applicable.",
          },
          {
            id: "private-limited-document-ownership",
            title: "Ownership and governance information",
            description:
              "Proposed shareholding, director details and other incorporation declarations.",
          },
          {
            id: "private-limited-document-conditional",
            title: "Conditional records",
            description:
              "Additional records may apply for non-resident participants, regulated activities or special ownership arrangements.",
          },
        ],
        order: 5,
        enabled: true,
        theme: "soft",
      },
      {
        id: "private-limited-process",
        kind: "process",
        eyebrow: "How the work moves",
        title: "A controlled sequence from structure review to incorporation.",
        items: [
          {
            id: "private-limited-process-assess",
            title: "1. Assess the structure",
            description:
              "Confirm whether a Private Limited Company fits the ownership, activity and future direction.",
          },
          {
            id: "private-limited-process-information",
            title: "2. Collect and review information",
            description:
              "Review founder, address, ownership, business-activity and name details.",
          },
          {
            id: "private-limited-process-digital",
            title: "3. Prepare digital and director requirements",
            description:
              "Coordinate the applicable digital-signature and director information requirements.",
          },
          {
            id: "private-limited-process-file",
            title: "4. Prepare and submit incorporation",
            description:
              "Prepare the applicable incorporation forms, attachments and declarations for submission.",
          },
          {
            id: "private-limited-process-track",
            title: "5. Track review and clarifications",
            description:
              "Monitor application status and coordinate responses if the authority requests clarification.",
          },
          {
            id: "private-limited-process-next",
            title: "6. Map the next responsibilities",
            description:
              "Identify banking, GST, MSME, trademark, accounting and recurring compliance steps after incorporation.",
          },
        ],
        order: 6,
        enabled: true,
        theme: "light",
      },
      {
        id: "private-limited-timeline",
        kind: "timeline",
        eyebrow: "Time and dependency factors",
        title: "Processing time depends on readiness and official review.",
        summary:
          "A fixed completion date should not be promised before the documents, proposed name, founder profile and authority requirements are reviewed.",
        items: [
          {
            id: "private-limited-timeline-documents",
            title: "Document readiness",
            description:
              "Incomplete, inconsistent or outdated records can delay preparation and filing.",
          },
          {
            id: "private-limited-timeline-name",
            title: "Name availability",
            description:
              "A proposed name may require alternatives if it conflicts with existing names, marks or naming rules.",
          },
          {
            id: "private-limited-timeline-review",
            title: "Government review",
            description:
              "Processing and clarification requests depend on the reviewing authority and cannot be guaranteed.",
          },
          {
            id: "private-limited-timeline-complexity",
            title: "Founder and activity complexity",
            description:
              "Non-resident participation, regulated activities or special ownership may require additional review.",
          },
        ],
        order: 7,
        enabled: true,
        theme: "soft",
      },
      {
        id: "private-limited-related-decisions",
        kind: "related-decisions",
        eyebrow: "What usually comes next",
        title: "Incorporation is one step in a connected business setup.",
        summary:
          "The next actions depend on the activity, turnover, location and operating model of the company.",
        items: [
          {
            id: "private-limited-next-bank",
            title: "Banking and financial records",
            description:
              "Set up the company’s banking, accounting and record-management foundation.",
          },
          {
            id: "private-limited-next-gst",
            title: "GST registration",
            description:
              "Assess whether GST registration is mandatory, operationally necessary or commercially useful.",
          },
          {
            id: "private-limited-next-msme",
            title: "MSME registration",
            description:
              "Review eligibility for Udyam recognition and relevant business benefits.",
          },
          {
            id: "private-limited-next-trademark",
            title: "Trademark protection",
            description:
              "Protect the business name, logo or eligible brand assets before visibility increases.",
          },
          {
            id: "private-limited-next-roc",
            title: "ROC and annual compliance",
            description:
              "Understand recurring company records, filings and governance responsibilities.",
          },
        ],
        order: 8,
        enabled: true,
        theme: "accent",
      },
      {
        id: "private-limited-business-lens",
        kind: "business-lens",
        eyebrow: "Compare before deciding",
        title: "Private Limited, LLP, OPC or another structure?",
        summary:
          "There is no universal winner. Ownership, liability, compliance capacity, funding plans and long-term goals should guide the choice.",
        items: [
          {
            id: "private-limited-lens-pvt",
            title: "Private Limited Company",
            description:
              "Often considered where defined shareholding, governance and future investment readiness matter.",
          },
          {
            id: "private-limited-lens-llp",
            title: "Limited Liability Partnership",
            description:
              "May suit professional or partner-led businesses seeking operational flexibility with limited liability.",
          },
          {
            id: "private-limited-lens-opc",
            title: "One Person Company",
            description:
              "May suit an eligible single promoter who wants a company structure, subject to applicable conditions.",
          },
        ],
        order: 9,
        enabled: true,
        theme: "light",
      },
      {
        id: "private-limited-faq",
        kind: "faq",
        eyebrow: "Common questions",
        title: "Questions to resolve before incorporation.",
        faqs: [
          {
            id: "private-limited-faq-right-for-all",
            question: "Is a Private Limited Company right for every business?",
            answer:
              "No. The right structure depends on ownership, liability, activity, compliance capacity, taxation and future plans. A simpler or different structure may be more suitable.",
          },
          {
            id: "private-limited-faq-name",
            question: "Can a proposed company name be guaranteed?",
            answer:
              "No. Name approval depends on availability, naming rules and official review. Alternative names should be prepared.",
          },
          {
            id: "private-limited-faq-finish",
            question: "Does incorporation complete all business compliance?",
            answer:
              "No. Banking, accounting, tax, GST, licences, records and recurring company compliance may still apply after incorporation.",
          },
          {
            id: "private-limited-faq-time",
            question: "How long does registration take?",
            answer:
              "Timing depends on document readiness, name availability, founder profile, filing quality and government review. A responsible estimate should be given after assessment.",
          },
          {
            id: "private-limited-faq-foreign",
            question: "Can non-resident or overseas participants be involved?",
            answer:
              "Participation may be possible subject to eligibility, documentation, ownership, sector and regulatory requirements. The specific structure should be reviewed before filing.",
          },
        ],
        order: 10,
        enabled: true,
        theme: "light",
      },
      {
        id: "private-limited-related-resources",
        kind: "related-resources",
        eyebrow: "Continue your research",
        title: "Useful decisions connected to company formation.",
        items: [
          {
            id: "private-limited-resource-comparison",
            title: "Private Limited vs LLP vs OPC",
            description:
              "Compare ownership, liability, compliance and growth considerations before choosing.",
          },
          {
            id: "private-limited-resource-documents",
            title: "Company-registration document checklist",
            description:
              "Prepare founder, office, ownership and business-activity information before the filing begins.",
          },
          {
            id: "private-limited-resource-after",
            title: "What happens after incorporation?",
            description:
              "Understand banking, GST, MSME, trademark, accounting and recurring compliance decisions.",
          },
        ],
        order: 11,
        enabled: true,
        theme: "soft",
      },
    ],
    relationships: {
      relatedServiceIds: [
        "service-llp-registration",
        "service-msme-registration",
        "service-gst-registration",
        "service-trademark-registration",
      ],
      relatedIndustryIds: [
        "industry-startups",
        "industry-manufacturing",
        "industry-retail",
      ],
      relatedResourceIds: [
        "resource-business-structure-comparison",
        "resource-company-registration-checklist",
      ],
    },
    primaryCta: {
      id: "private-limited-assessment",
      label: "Get a Business Assessment",
      href: "/approach/assessment",
      style: "primary",
      analyticsEvent: "service_private_limited_assessment",
    },
    secondaryCta: {
      id: "private-limited-contact",
      label: "Talk to an Advisor",
      href: "/contact",
      style: "secondary",
      analyticsEvent: "service_private_limited_contact",
    },
    seo: createDraftSeo(
      "Private Limited Company Registration",
      "Understand Private Limited Company registration, suitability, documents, process, connected compliance and what normally comes next.",
      "/services/private-limited-company-registration",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-llp-registration",
    slug: "llp-registration",
    title: "LLP Registration",
    summary:
      "A partnership structure with separate legal identity and limited liability, subject to business suitability.",
    domainId: "domain-business-formation",
    categoryId: "category-company-formation",
    lifecycleStages: ["idea", "start", "register"],
    availability: "active",
    deliveryModel: "to-confirm",
    sections: [],
    seo: createDraftSeo(
      "LLP Registration",
      "Understand LLP registration, suitability, requirements and the decisions that normally follow.",
      "/services/llp-registration",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-msme-registration",
    slug: "msme-registration",
    title: "MSME Registration",
    summary:
      "Government recognition for eligible micro, small and medium enterprises through the applicable Udyam process.",
    domainId: "domain-business-formation",
    categoryId: "category-business-recognition",
    lifecycleStages: ["start", "register", "operate"],
    availability: "active",
    deliveryModel: "to-confirm",
    sections: [],
    seo: createDraftSeo(
      "MSME Registration",
      "Understand MSME registration, eligibility, business relevance and connected next steps.",
      "/services/msme-registration",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-trademark-registration",
    slug: "trademark-registration",
    title: "Trademark Registration",
    summary:
      "A structured route to protect a brand name, logo or other eligible mark.",
    domainId: "domain-legal-protection",
    categoryId: "category-intellectual-property",
    lifecycleStages: ["start", "operate", "protect"],
    availability: "active",
    deliveryModel: "to-confirm",
    sections: [],
    seo: createDraftSeo(
      "Trademark Registration",
      "Understand trademark registration, brand protection context and related business decisions.",
      "/services/trademark-registration",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-fssai-registration",
    slug: "fssai-registration",
    title: "FSSAI Registration",
    summary:
      "Food business registration or licensing support based on the activity, scale and applicable category.",
    domainId: "domain-registrations-compliance",
    categoryId: "category-business-licences",
    lifecycleStages: ["register", "operate", "comply"],
    availability: "active",
    deliveryModel: "to-confirm",
    sections: [],
    seo: createDraftSeo(
      "FSSAI Registration",
      "Understand FSSAI registration or licensing relevance, requirements and next compliance steps.",
      "/services/fssai-registration",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-import-export-code",
    slug: "import-export-code",
    title: "Import Export Code",
    shortTitle: "IEC Registration",
    summary:
      "Registration generally required for businesses undertaking eligible import or export activities.",
    domainId: "domain-registrations-compliance",
    categoryId: "category-business-licences",
    lifecycleStages: ["register", "operate", "expand", "global"],
    availability: "active",
    deliveryModel: "to-confirm",
    sections: [],
    seo: createDraftSeo(
      "Import Export Code Registration",
      "Understand IEC registration, business relevance and connected export-readiness decisions.",
      "/services/import-export-code",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-gst-registration",
    slug: "gst-registration",
    title: "GST Registration",
    summary:
      "GST registration support based on business activity, turnover and applicable conditions.",
    domainId: "domain-finance-tax",
    categoryId: "category-gst",
    lifecycleStages: ["register", "operate", "comply", "finance"],
    availability: "active",
    deliveryModel: "to-confirm",
    sections: [],
    seo: createDraftSeo(
      "GST Registration",
      "Understand whether GST registration is relevant, what it changes and what follows.",
      "/services/gst-registration",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-income-tax-return",
    slug: "income-tax-return",
    title: "Income Tax Return Filing",
    shortTitle: "ITR Filing",
    summary:
      "Income tax return filing support for relevant taxpayer profiles and income sources.",
    domainId: "domain-finance-tax",
    categoryId: "category-income-tax",
    lifecycleStages: ["operate", "comply", "finance"],
    availability: "seasonal",
    deliveryModel: "to-confirm",
    sections: [],
    seo: createDraftSeo(
      "Income Tax Return Filing",
      "Understand ITR filing relevance, taxpayer context and the information normally required.",
      "/services/income-tax-return",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-uae-company-setup",
    slug: "uae-company-setup",
    title: "UAE Company Setup",
    summary:
      "Overseas company setup coordination for supported UAE jurisdictions, subject to confirmed scope.",
    domainId: "domain-global-business",
    categoryId: "category-overseas-incorporation",
    lifecycleStages: ["expand", "global"],
    availability: "country-specific",
    deliveryModel: "to-confirm",
    jurisdictions: [
      {
        countryCode: "AE",
        countryName: "United Arab Emirates",
      },
    ],
    sections: [],
    seo: createDraftSeo(
      "UAE Company Setup",
      "Explore UAE company setup context, jurisdiction considerations and connected documentation.",
      "/services/uae-company-setup",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "service-singapore-company-registration",
    slug: "singapore-company-registration",
    title: "Singapore Company Registration",
    summary:
      "Company registration coordination in Singapore, subject to confirmed eligibility and scope.",
    domainId: "domain-global-business",
    categoryId: "category-overseas-incorporation",
    lifecycleStages: ["expand", "global"],
    availability: "country-specific",
    deliveryModel: "to-confirm",
    jurisdictions: [
      {
        countryCode: "SG",
        countryName: "Singapore",
      },
    ],
    sections: [],
    seo: createDraftSeo(
      "Singapore Company Registration",
      "Explore Singapore company registration context, requirements and connected decisions.",
      "/services/singapore-company-registration",
    ),
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
];

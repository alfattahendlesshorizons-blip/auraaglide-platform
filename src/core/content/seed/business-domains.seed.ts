import type { BusinessDomainContract } from "../contracts";

const seedTimestamp = "2026-07-15T00:00:00.000Z";

export const businessDomainsSeed: readonly BusinessDomainContract[] = [
  {
    id: "domain-business-formation",
    key: "business-formation",
    slug: "business-formation",
    title: "Business Formation",
    shortTitle: "Formation",
    summary:
      "Business structures and registrations needed to establish the right legal foundation.",
    lifecycleStages: ["idea", "start", "register"],
    order: 1,
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "domain-legal-protection",
    key: "legal-protection",
    slug: "legal-protection",
    title: "Legal Protection",
    shortTitle: "Protection",
    summary:
      "Brand, ownership and documentation support that protects what a business is building.",
    lifecycleStages: ["start", "operate", "protect"],
    order: 2,
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "domain-registrations-compliance",
    key: "registrations-compliance",
    slug: "registrations-compliance",
    title: "Registrations & Compliance",
    shortTitle: "Compliance",
    summary:
      "Registrations, licences and recurring compliance required to operate with clarity.",
    lifecycleStages: ["register", "operate", "comply"],
    order: 3,
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "domain-finance-tax",
    key: "finance-tax",
    slug: "finance-tax",
    title: "Finance & Tax",
    shortTitle: "Finance & Tax",
    summary:
      "Tax filing, reporting and financial records that support compliance and better decisions.",
    lifecycleStages: ["operate", "comply", "finance", "scale"],
    order: 4,
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "domain-global-business",
    key: "global-business",
    slug: "global-business",
    title: "Global Business",
    shortTitle: "Global",
    summary:
      "Overseas company setup and cross-border documentation for supported jurisdictions.",
    lifecycleStages: ["expand", "global", "scale"],
    order: 5,
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "domain-business-enablement",
    key: "business-enablement",
    slug: "business-enablement",
    title: "Business Enablement",
    shortTitle: "Enablement",
    summary:
      "Digital platforms and operational systems that help a business work more effectively.",
    lifecycleStages: ["operate", "expand", "scale"],
    order: 6,
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "domain-advisory",
    key: "advisory",
    slug: "advisory",
    title: "Business Advisory",
    shortTitle: "Advisory",
    summary:
      "Guidance that keeps legal, compliance, financial and growth decisions connected.",
    lifecycleStages: ["idea", "start", "operate", "expand", "global", "scale"],
    order: 7,
    status: "draft",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
];

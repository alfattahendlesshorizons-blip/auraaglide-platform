export type ServiceCapabilityId =
  | "foundation"
  | "protection"
  | "compliance"
  | "finance-tax"
  | "growth"
  | "advisory";

export interface ServiceEcosystemLink {
  label: string;
  href: string;
}

export interface ServiceCapability {
  id: ServiceCapabilityId;
  shortLabel: string;
  eyebrow: string;
  title: string;
  heading: {
    primary: string;
    secondary: string;
    accent: string;
  };
  description: string;
  insight: string;
  services: ServiceEcosystemLink[];
  cta: ServiceEcosystemLink;
  order: number;
  published: boolean;
}

export interface ServicesEcosystemContent {
  eyebrow: string;
  heading: {
    primary: string;
    secondary: string;
    accent: string;
  };
  statement: string;
  statementCaption: string;
  helper: string;
  capabilities: ServiceCapability[];
}

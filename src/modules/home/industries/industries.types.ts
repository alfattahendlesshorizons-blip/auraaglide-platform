export type IndustryIconKey =
  | "startup"
  | "manufacturing"
  | "healthcare"
  | "retail"
  | "agriculture";

export type IndustryRouteStatus = "live" | "planned" | "hidden";

export type IndustryItem = {
  id: string;
  eyebrow: string;
  title: string;
  statement: string;
  description: string;
  iconKey: IndustryIconKey;
  imageSrc?: string;
  imageAlt?: string;
  href: string;
  routeStatus: IndustryRouteStatus;
  featured?: boolean;
  visible: boolean;
  order: number;
};

export type IndustriesSectionContent = {
  sectionId: string;
  eyebrow: string;
  headingLead: string;
  headingMiddle: string;
  headingAccent: string;
  description: string;
  industries: IndustryItem[];
};

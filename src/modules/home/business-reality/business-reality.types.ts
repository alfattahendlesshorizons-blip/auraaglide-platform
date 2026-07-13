export type BusinessRealityIconKey =
  | "startup"
  | "manufacturing"
  | "healthcare"
  | "retail"
  | "agriculture";

export type BusinessRealityRouteStatus =
  | "live"
  | "planned"
  | "hidden";

export type BusinessRealitySeo = {
  title: string;
  description: string;
  keywords: string[];
  entityName: string;
  schemaType: "ProfessionalService";
};

export type BusinessRealityItem = {
  id: string;
  slug: string;
  label: string;
  quote: string;
  description: string;
  highlights: {
    label: string;
    href: string;
  }[];
  tags: string[];
  iconKey: BusinessRealityIconKey;
  imageSrc?: string;
  imageAlt: string;
  href: string;
  routeStatus: BusinessRealityRouteStatus;
  visible: boolean;
  order: number;
  seo: BusinessRealitySeo;
};

export type BusinessRealityContent = {
  sectionId: string;
  eyebrow: string;
  headingLead: string;
  headingMiddle: string;
  headingAccent: string;
  quoteCaption: string;
  description: string;
  items: BusinessRealityItem[];
};

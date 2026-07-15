import type {
  AuditFields,
  ContentId,
  ContentSlug,
  CtaContract,
  MediaReference,
  PublishFields,
  RouteVisibility,
  SeoContract,
} from "./content.shared";

export type PageSectionType =
  | "hero"
  | "rich-text"
  | "feature-grid"
  | "service-grid"
  | "industry-grid"
  | "process"
  | "faq"
  | "related-content"
  | "cta"
  | "form";

export interface PageSectionContract {
  id: ContentId;
  type: PageSectionType;
  order: number;
  enabled: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  media?: MediaReference;
  ctas?: CtaContract[];
  payload?: Record<string, unknown>;
}

export interface PageContract extends AuditFields, PublishFields {
  id: ContentId;
  slug: ContentSlug;
  path: string;
  title: string;
  summary?: string;
  visibility: RouteVisibility;
  template: "standard" | "landing" | "contact" | "legal";
  sections: PageSectionContract[];
  seo: SeoContract;
}

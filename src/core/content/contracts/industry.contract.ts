import type {
  AuditFields,
  ContentId,
  ContentSlug,
  CtaContract,
  MediaReference,
  PublishFields,
  SeoContract,
} from "./content.shared";

export interface IndustryCategoryContract extends AuditFields, PublishFields {
  id: ContentId;
  slug: ContentSlug;
  title: string;
  order: number;
}

export interface IndustryContract extends AuditFields, PublishFields {
  id: ContentId;
  slug: ContentSlug;
  title: string;
  summary: string;
  categoryId?: ContentId;
  challenges?: string[];
  supportAreas?: string[];
  relatedServiceIds: ContentId[];
  relatedResourceIds?: ContentId[];
  featuredMedia?: MediaReference;
  primaryCta?: CtaContract;
  seo: SeoContract;
}

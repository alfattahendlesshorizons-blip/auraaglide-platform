import type {
  AuditFields,
  ContentId,
  ContentSlug,
  MediaReference,
  PublishFields,
  SeoContract,
} from "./content.shared";

export type ResourceType = "article" | "guide" | "update" | "faq";

export interface ResourceContract extends AuditFields, PublishFields {
  id: ContentId;
  slug: ContentSlug;
  type: ResourceType;
  title: string;
  excerpt: string;
  body?: string;
  authorId?: ContentId;
  categoryIds?: ContentId[];
  relatedServiceIds?: ContentId[];
  relatedIndustryIds?: ContentId[];
  featuredMedia?: MediaReference;
  seo: SeoContract;
}

export interface FaqContract extends AuditFields, PublishFields {
  id: ContentId;
  question: string;
  answer: string;
  category?: string;
  relatedServiceIds?: ContentId[];
  relatedIndustryIds?: ContentId[];
  order: number;
}

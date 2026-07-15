import type {
  AuditFields,
  ContentId,
  ContentSlug,
  CtaContract,
  MediaReference,
  PublishFields,
  SeoContract,
} from "./content.shared";
import type {
  BusinessLifecycleStage,
  DeliveryModel,
  JurisdictionReference,
} from "./business-domain.contract";
import type { ServiceSectionContract } from "./service-section.contract";

export type ServiceAvailability =
  | "active"
  | "seasonal"
  | "country-specific"
  | "industry-specific"
  | "retainer"
  | "future";

export interface ServiceCategoryContract extends AuditFields, PublishFields {
  id: ContentId;
  domainId: ContentId;
  parentCategoryId?: ContentId;
  slug: ContentSlug;
  title: string;
  shortTitle?: string;
  summary?: string;
  lifecycleStages: BusinessLifecycleStage[];
  order: number;
}

export interface ServiceRelationshipContract {
  relatedServiceIds?: ContentId[];
  relatedIndustryIds?: ContentId[];
  relatedResourceIds?: ContentId[];
  relatedFaqIds?: ContentId[];
  relatedRegulationIds?: ContentId[];
}

export interface ServiceContract extends AuditFields, PublishFields {
  id: ContentId;
  slug: ContentSlug;
  title: string;
  shortTitle?: string;
  summary: string;

  domainId: ContentId;
  categoryId: ContentId;
  subcategoryId?: ContentId;

  lifecycleStages: BusinessLifecycleStage[];
  availability: ServiceAvailability;
  deliveryModel: DeliveryModel;
  jurisdictions?: JurisdictionReference[];

  audience?: string[];
  outcomes?: string[];
  scopeNotes?: string[];
  exclusions?: string[];

  sections: ServiceSectionContract[];
  relationships?: ServiceRelationshipContract;

  featuredMedia?: MediaReference;
  cardMedia?: MediaReference;
  socialMedia?: MediaReference;

  primaryCta?: CtaContract;
  secondaryCta?: CtaContract;

  seo: SeoContract;
}

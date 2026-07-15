import type {
  AuditFields,
  ContentId,
  ContentSlug,
  MediaReference,
  PublishFields,
  SeoContract,
} from "./content.shared";

export type BusinessLifecycleStage =
  | "idea"
  | "start"
  | "register"
  | "operate"
  | "comply"
  | "protect"
  | "finance"
  | "expand"
  | "global"
  | "scale";

export type DeliveryModel =
  | "to-confirm"
  | "in-house"
  | "partner-managed"
  | "mixed";

export type BusinessDomainKey =
  | "business-formation"
  | "legal-protection"
  | "registrations-compliance"
  | "finance-tax"
  | "global-business"
  | "business-enablement"
  | "advisory";

export interface JurisdictionReference {
  countryCode: string;
  countryName: string;
  regionCode?: string;
  regionName?: string;
  city?: string;
}

export interface BusinessDomainContract extends AuditFields, PublishFields {
  id: ContentId;
  key: BusinessDomainKey;
  slug: ContentSlug;
  title: string;
  shortTitle: string;
  summary: string;
  lifecycleStages: BusinessLifecycleStage[];
  order: number;
  featuredMedia?: MediaReference;
  seo?: SeoContract;
}

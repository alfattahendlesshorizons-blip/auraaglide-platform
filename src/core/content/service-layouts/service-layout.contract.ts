import type { ServiceSectionKind } from "../contracts/service-section.contract";

export type ServiceLayoutKey =
  | "service-standard-v1"
  | "service-global-v1"
  | "service-recurring-compliance-v1";

export type ServicePageSectionKey =
  | "hero"
  | "page-navigation"
  | ServiceSectionKind
  | "delivery-note";

export interface ServiceLayoutDefinition {
  key: ServiceLayoutKey;
  label: string;
  description: string;
  sectionOrder: readonly ServicePageSectionKey[];
  requiredSections: readonly ServicePageSectionKey[];
  optionalSections: readonly ServicePageSectionKey[];
}

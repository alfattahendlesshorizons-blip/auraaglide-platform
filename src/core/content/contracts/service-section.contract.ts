import type {
  ContentId,
  CtaContract,
  MediaReference,
} from "./content.shared";

export type ServiceSectionKind =
  | "decision-context"
  | "relevance-check"
  | "business-impact"
  | "scope"
  | "deliverables"
  | "process"
  | "requirements"
  | "documents"
  | "timeline"
  | "risks"
  | "business-lens"
  | "faq"
  | "related-decisions"
  | "related-resources"
  | "consultation-cta";

export interface ServiceSectionBase {
  id: ContentId;
  kind: ServiceSectionKind;
  eyebrow?: string;
  title: string;
  summary?: string;
  order: number;
  enabled: boolean;
  theme?: "dark" | "light" | "soft" | "accent";
  media?: MediaReference;
}

export interface ServiceTextItem {
  id: ContentId;
  title: string;
  description?: string;
}

export interface ServiceFaqItem {
  id: ContentId;
  question: string;
  answer: string;
}

export interface ServiceSectionContract extends ServiceSectionBase {
  body?: string;
  items?: ServiceTextItem[];
  faqs?: ServiceFaqItem[];
  primaryCta?: CtaContract;
  secondaryCta?: CtaContract;
}

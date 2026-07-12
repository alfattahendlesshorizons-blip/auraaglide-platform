import type {
  BusinessJourneyContent,
  JourneyStageId,
} from "./business-journey.types";

export type BusinessJourneyCmsService = {
  label?: unknown;
  href?: unknown;
  enabled?: unknown;
  order?: unknown;
};

export type BusinessJourneyCmsStage = {
  id?: unknown;
  label?: unknown;
  shortLabel?: unknown;
  eyebrow?: unknown;
  title?: unknown;
  description?: unknown;
  visualKey?: unknown;
  services?: unknown;
  cta?: unknown;
  enabled?: unknown;
  order?: unknown;
  featured?: unknown;
};

export type BusinessJourneyCmsPayload = {
  eyebrow?: unknown;
  heading?: unknown;
  quote?: unknown;
  stages?: unknown;
};

export type BusinessJourneyRepositoryResult = {
  content: BusinessJourneyContent;
  source: "cms" | "fallback";
  errors: string[];
};

export const journeyStageIds: JourneyStageId[] = [
  "idea",
  "launch",
  "running",
  "growth",
  "expansion",
];


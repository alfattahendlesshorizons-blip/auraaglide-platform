import { businessJourneyContent } from "./business-journey.data";
import {
  journeyStageIds,
  type BusinessJourneyCmsPayload,
  type BusinessJourneyCmsStage,
} from "./business-journey.schema";
import type {
  BusinessJourneyContent,
  JourneyHeadingLine,
  JourneyService,
  JourneyStage,
  JourneyStageId,
  JourneyTone,
} from "./business-journey.types";

const validTones: JourneyTone[] = ["light", "steel", "gold"];

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isJourneyStageId(value: unknown): value is JourneyStageId {
  return (
    typeof value === "string" &&
    journeyStageIds.includes(value as JourneyStageId)
  );
}

function isSafeHref(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  return (
    value.startsWith("/") ||
    value.startsWith("https://") ||
    value.startsWith("tel:") ||
    value.startsWith("mailto:")
  );
}

function adaptHeading(
  value: unknown,
  fallback: JourneyHeadingLine[],
  errors: string[]
): JourneyHeadingLine[] {
  if (!Array.isArray(value)) {
    errors.push("Invalid journey heading; fallback used.");
    return fallback;
  }

  const lines = value
    .map((item) => {
      if (
        typeof item !== "object" ||
        item === null ||
        !("text" in item) ||
        !("tone" in item)
      ) {
        return null;
      }

      const text = item.text;
      const tone = item.tone;

      if (
        !isString(text) ||
        !validTones.includes(tone as JourneyTone)
      ) {
        return null;
      }

      return {
        text: text.trim(),
        tone: tone as JourneyTone,
      };
    })
    .filter((item): item is JourneyHeadingLine => item !== null);

  if (lines.length === 0) {
    errors.push("Journey heading contains no valid lines; fallback used.");
    return fallback;
  }

  return lines;
}

function adaptServices(
  value: unknown,
  fallback: JourneyService[],
  errors: string[],
  stageId: string
): JourneyService[] {
  if (!Array.isArray(value)) {
    errors.push(`Invalid services for ${stageId}; fallback used.`);
    return fallback;
  }

  const services = value
    .map((item, index) => {
      if (typeof item !== "object" || item === null) {
        return null;
      }

      const record = item as Record<string, unknown>;

      if (record.enabled === false) {
        return null;
      }

      if (!isString(record.label) || !isSafeHref(record.href)) {
        errors.push(
          `Invalid service ${index + 1} in ${stageId}; item skipped.`
        );
        return null;
      }

      return {
        label: record.label.trim(),
        href: record.href,
        order: isNumber(record.order) ? record.order : index,
      };
    })
    .filter(
      (
        item
      ): item is JourneyService & {
        order: number;
      } => item !== null
    )
    .sort((a, b) => a.order - b.order)
    .map(({ label, href }) => ({ label, href }));

  return services.length > 0 ? services : fallback;
}

function adaptStage(
  raw: BusinessJourneyCmsStage,
  fallback: JourneyStage,
  errors: string[]
): JourneyStage {
  const id = isJourneyStageId(raw.id) ? raw.id : fallback.id;

  if (!isJourneyStageId(raw.id)) {
    errors.push(`Invalid stage id near ${fallback.id}; fallback id used.`);
  }

  const cta =
    typeof raw.cta === "object" && raw.cta !== null
      ? (raw.cta as Record<string, unknown>)
      : {};

  return {
    id,
    label: isString(raw.label) ? raw.label.trim() : fallback.label,
    shortLabel: isString(raw.shortLabel)
      ? raw.shortLabel.trim()
      : fallback.shortLabel,
    eyebrow: isString(raw.eyebrow)
      ? raw.eyebrow.trim()
      : fallback.eyebrow,
    title: isString(raw.title) ? raw.title.trim() : fallback.title,
    description: isString(raw.description)
      ? raw.description.trim()
      : fallback.description,
    visualKey: isJourneyStageId(raw.visualKey)
      ? raw.visualKey
      : fallback.visualKey,
    services: adaptServices(
      raw.services,
      fallback.services,
      errors,
      id
    ),
    cta: {
      label: isString(cta.label)
        ? cta.label.trim()
        : fallback.cta.label,
      href: isSafeHref(cta.href)
        ? cta.href
        : fallback.cta.href,
    },
    enabled: isBoolean(raw.enabled)
      ? raw.enabled
      : fallback.enabled,
    order: isNumber(raw.order)
      ? raw.order
      : fallback.order,
    featured: isBoolean(raw.featured)
      ? raw.featured
      : fallback.featured,
  };
}

export function adaptBusinessJourneyContent(
  payload: BusinessJourneyCmsPayload | null | undefined
): {
  content: BusinessJourneyContent;
  errors: string[];
} {
  const fallback = businessJourneyContent;
  const errors: string[] = [];

  if (!payload || typeof payload !== "object") {
    return {
      content: fallback,
      errors: ["CMS payload unavailable; local fallback used."],
    };
  }

  const rawStages = Array.isArray(payload.stages)
    ? (payload.stages as BusinessJourneyCmsStage[])
    : [];

  const stages = fallback.stages
    .map((fallbackStage) => {
      const rawStage = rawStages.find(
        (stage) => stage.id === fallbackStage.id
      );

      return rawStage
        ? adaptStage(rawStage, fallbackStage, errors)
        : fallbackStage;
    })
    .filter((stage) => stage.enabled)
    .sort((a, b) => a.order - b.order);

  if (stages.length === 0) {
    errors.push("No enabled journey stages; fallback stages used.");
  }

  const rawQuote =
    typeof payload.quote === "object" && payload.quote !== null
      ? (payload.quote as Record<string, unknown>)
      : {};

  const featuredStages = stages.filter((stage) => stage.featured);

  if (featuredStages.length > 1) {
    let foundFeatured = false;

    stages.forEach((stage) => {
      if (stage.featured && !foundFeatured) {
        foundFeatured = true;
      } else if (stage.featured) {
        stage.featured = false;
      }
    });

    errors.push("Multiple featured stages found; first one retained.");
  }

  return {
    content: {
      eyebrow: isString(payload.eyebrow)
        ? payload.eyebrow.trim()
        : fallback.eyebrow,
      heading: adaptHeading(
        payload.heading,
        fallback.heading,
        errors
      ),
      quote: {
        text: isString(rawQuote.text)
          ? rawQuote.text.trim()
          : fallback.quote.text,
        signature: isString(rawQuote.signature)
          ? rawQuote.signature.trim()
          : fallback.quote.signature,
      },
      stages: stages.length > 0 ? stages : fallback.stages,
    },
    errors,
  };
}


import type { JourneyStageId } from "./business-journey.types";

export type JourneyAnalyticsEvent =
  | {
      name: "journey_stage_selected";
      stageId: JourneyStageId;
    }
  | {
      name: "journey_service_clicked";
      stageId: JourneyStageId;
      serviceLabel: string;
      destination: string;
    }
  | {
      name: "journey_cta_clicked";
      stageId: JourneyStageId;
      destination: string;
    };

export function trackJourneyEvent(
  event: JourneyAnalyticsEvent
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("auraaglide:analytics", {
      detail: {
        ...event,
        sourceSection: "business_journey",
        timestamp: new Date().toISOString(),
      },
    })
  );

  /*
   * Future integrations:
   * - Google Analytics
   * - Meta Pixel
   * - CRM lead-source tracking
   * - Internal analytics API
   */
}

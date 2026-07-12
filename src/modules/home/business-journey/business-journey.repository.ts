import { businessJourneyContent } from "./business-journey.data";
import { adaptBusinessJourneyContent } from "./business-journey.adapter";
import type {
  BusinessJourneyCmsPayload,
  BusinessJourneyRepositoryResult,
} from "./business-journey.schema";

async function fetchJourneyFromCms():
  Promise<BusinessJourneyCmsPayload | null> {
  /*
   * Future CMS integration:
   *
   * const response = await fetch(
   *   `${process.env.CMS_API_URL}/home/business-journey`,
   *   {
   *     next: { revalidate: 300 },
   *   }
   * );
   *
   * if (!response.ok) return null;
   * return response.json();
   */

  return null;
}

export async function getBusinessJourneyContent():
  Promise<BusinessJourneyRepositoryResult> {
  try {
    const cmsPayload = await fetchJourneyFromCms();

    if (!cmsPayload) {
      return {
        content: businessJourneyContent,
        source: "fallback",
        errors: [],
      };
    }

    const adapted = adaptBusinessJourneyContent(cmsPayload);

    return {
      content: adapted.content,
      source: "cms",
      errors: adapted.errors,
    };
  } catch {
    return {
      content: businessJourneyContent,
      source: "fallback",
      errors: ["CMS request failed; local fallback used."],
    };
  }
}


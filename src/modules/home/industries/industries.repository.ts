import { industriesFallbackContent } from "./industries.data";
import type {
  IndustriesSectionContent,
  IndustryItem,
} from "./industries.types";

function normalizeIndustries(items: IndustryItem[]): IndustryItem[] {
  return items
    .filter((item) => item.visible && item.routeStatus !== "hidden")
    .sort((first, second) => first.order - second.order);
}

export async function getIndustriesSectionContent(): Promise<IndustriesSectionContent> {
  /*
   * Future production flow:
   * API/CMS response
   * -> schema validation
   * -> adapter
   * -> normalized typed content
   * -> fallback on failure
   */

  return {
    ...industriesFallbackContent,
    industries: normalizeIndustries(
      industriesFallbackContent.industries,
    ),
  };
}

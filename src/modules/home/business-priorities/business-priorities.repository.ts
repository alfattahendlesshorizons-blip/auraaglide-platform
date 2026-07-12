import {
  businessPrioritiesFallbackContent,
} from "./business-priorities.data";

import type {
  BusinessPrioritiesContent,
} from "./business-priorities.types";

function normalizeContent(
  content: BusinessPrioritiesContent,
): BusinessPrioritiesContent {
  return {
    ...content,

    items: content.items
      .filter((item) => item.visible)
      .sort(
        (first, second) =>
          first.order - second.order,
      ),
  };
}

export async function getBusinessPrioritiesContent(): Promise<BusinessPrioritiesContent> {
  /*
   * Future CMS/API integration:
   *
   * const response = await cmsClient.getBusinessPriorities();
   * return normalizeContent(response);
   */

  return normalizeContent(
    businessPrioritiesFallbackContent,
  );
}

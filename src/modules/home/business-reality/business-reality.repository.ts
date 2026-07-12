import { businessRealityFallbackContent } from "./business-reality.data";
import type {
  BusinessRealityContent,
  BusinessRealityItem,
} from "./business-reality.types";

function normalizeItems(
  items: BusinessRealityItem[],
): BusinessRealityItem[] {
  return items
    .filter(
      (item) =>
        item.visible &&
        item.routeStatus !== "hidden",
    )
    .sort(
      (first, second) =>
        first.order - second.order,
    );
}

export async function getBusinessRealityContent(): Promise<BusinessRealityContent> {
  /*
   * Future flow:
   *
   * Admin CMS / API
   * -> schema validation
   * -> adapter
   * -> repository
   * -> typed section model
   *
   * Current fallback keeps the frontend independent
   * from the future backend implementation.
   */

  return {
    ...businessRealityFallbackContent,
    items: normalizeItems(
      businessRealityFallbackContent.items,
    ),
  };
}

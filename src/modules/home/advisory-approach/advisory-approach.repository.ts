import { advisoryApproachContent } from "./advisory-approach.data";
import type { AdvisoryApproachContent } from "./advisory-approach.types";

export async function getAdvisoryApproachContent(): Promise<AdvisoryApproachContent> {
  // CMS/API integration boundary.
  // Replace this fallback with an API client without changing the UI module.
  return advisoryApproachContent;
}

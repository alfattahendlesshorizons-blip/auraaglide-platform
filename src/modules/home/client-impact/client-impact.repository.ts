import { clientImpactFallback } from "./client-impact.data";
import type { ClientImpactContent } from "./client-impact.types";

export async function getClientImpactContent(): Promise<ClientImpactContent> {
  return clientImpactFallback;
}

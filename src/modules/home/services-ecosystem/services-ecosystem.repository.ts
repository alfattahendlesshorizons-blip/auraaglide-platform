import { servicesEcosystemFallback } from "./services-ecosystem.data";
import type { ServicesEcosystemContent } from "./services-ecosystem.types";

export async function getServicesEcosystemContent(): Promise<ServicesEcosystemContent> {
  return {
    ...servicesEcosystemFallback,
    capabilities: servicesEcosystemFallback.capabilities
      .filter((capability) => capability.published)
      .sort((a, b) => a.order - b.order),
  };
}

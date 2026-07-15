import {
  businessDomainsSeed,
  serviceCategoriesSeed,
  servicesSeed,
} from "../seed";
import type {
  BusinessDomainRepository,
  ListQueryOptions,
  ServiceCategoryRepository,
  ServiceListQueryOptions,
  ServiceRepository,
} from "./content.repositories";

function sliceResults<T>(
  items: readonly T[],
  options?: ListQueryOptions,
): T[] {
  const offset = options?.offset ?? 0;
  const limit = options?.limit;

  return items.slice(offset, limit ? offset + limit : undefined);
}

export const seedBusinessDomainRepository: BusinessDomainRepository = {
  async getBySlug(slug: string) {
    return businessDomainsSeed.find((domain) => domain.slug === slug) ?? null;
  },

  async getAll(options?: ListQueryOptions) {
    return sliceResults(businessDomainsSeed, options);
  },
};

export const seedServiceCategoryRepository: ServiceCategoryRepository = {
  async getBySlug(slug: string) {
    return serviceCategoriesSeed.find((category) => category.slug === slug) ?? null;
  },

  async getAll(options?: ListQueryOptions) {
    return sliceResults(serviceCategoriesSeed, options);
  },
};

export const seedServiceRepository: ServiceRepository = {
  async getBySlug(slug: string) {
    return servicesSeed.find((service) => service.slug === slug) ?? null;
  },

  async getAll(options?: ServiceListQueryOptions) {
    const filtered = servicesSeed.filter((service) => {
      if (options?.domainId && service.domainId !== options.domainId) {
        return false;
      }

      if (options?.categoryId && service.categoryId !== options.categoryId) {
        return false;
      }

      if (
        options?.lifecycleStage &&
        !service.lifecycleStages.includes(
          options.lifecycleStage as (typeof service.lifecycleStages)[number],
        )
      ) {
        return false;
      }

      if (
        options?.countryCode &&
        !service.jurisdictions?.some(
          (jurisdiction) =>
            jurisdiction.countryCode.toLowerCase() ===
            options.countryCode?.toLowerCase(),
        )
      ) {
        return false;
      }

      return true;
    });

    return sliceResults(filtered, options);
  },
};

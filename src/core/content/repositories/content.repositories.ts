import type {
  BusinessDomainContract,
  FooterContract,
  GlobalSettingsContract,
  IndustryContract,
  NavigationContract,
  PageContract,
  ResourceContract,
  ServiceCategoryContract,
  ServiceContract,
} from "../contracts";

export interface QueryOptions {
  preview?: boolean;
  locale?: string;
}

export interface ListQueryOptions extends QueryOptions {
  limit?: number;
  offset?: number;
}

export interface ServiceListQueryOptions extends ListQueryOptions {
  domainId?: string;
  categoryId?: string;
  lifecycleStage?: string;
  countryCode?: string;
  industryId?: string;
  featured?: boolean;
}

export interface PageRepository {
  getByPath(path: string, options?: QueryOptions): Promise<PageContract | null>;
  getAll(options?: ListQueryOptions): Promise<PageContract[]>;
}

export interface BusinessDomainRepository {
  getBySlug(
    slug: string,
    options?: QueryOptions,
  ): Promise<BusinessDomainContract | null>;
  getAll(options?: ListQueryOptions): Promise<BusinessDomainContract[]>;
}

export interface ServiceCategoryRepository {
  getBySlug(
    slug: string,
    options?: QueryOptions,
  ): Promise<ServiceCategoryContract | null>;
  getAll(options?: ListQueryOptions): Promise<ServiceCategoryContract[]>;
}

export interface ServiceRepository {
  getBySlug(
    slug: string,
    options?: QueryOptions,
  ): Promise<ServiceContract | null>;
  getAll(options?: ServiceListQueryOptions): Promise<ServiceContract[]>;
}

export interface IndustryRepository {
  getBySlug(slug: string, options?: QueryOptions): Promise<IndustryContract | null>;
  getAll(options?: ListQueryOptions): Promise<IndustryContract[]>;
}

export interface ResourceRepository {
  getBySlug(slug: string, options?: QueryOptions): Promise<ResourceContract | null>;
  getAll(options?: ListQueryOptions): Promise<ResourceContract[]>;
}

export interface SiteRepository {
  getNavigation(options?: QueryOptions): Promise<NavigationContract>;
  getFooter(options?: QueryOptions): Promise<FooterContract>;
  getGlobalSettings(options?: QueryOptions): Promise<GlobalSettingsContract>;
}

export interface ContentRepositories {
  pages: PageRepository;
  businessDomains: BusinessDomainRepository;
  serviceCategories: ServiceCategoryRepository;
  services: ServiceRepository;
  industries: IndustryRepository;
  resources: ResourceRepository;
  site: SiteRepository;
}

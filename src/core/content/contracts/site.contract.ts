import type {
  AuditFields,
  ContentId,
  CtaContract,
  LinkReference,
  MediaReference,
  PublishFields,
} from "./content.shared";

export interface NavigationItemContract extends LinkReference {
  id: ContentId;
  order: number;
  parentId?: ContentId;
  enabled: boolean;
  children?: NavigationItemContract[];
}

export interface NavigationContract extends AuditFields, PublishFields {
  id: ContentId;
  name: string;
  items: NavigationItemContract[];
  primaryCta?: CtaContract;
}

export interface FooterContract extends AuditFields, PublishFields {
  id: ContentId;
  brandSummary: string;
  navigationGroups: Array<{
    id: ContentId;
    title: string;
    links: LinkReference[];
  }>;
  contactLinks: LinkReference[];
  legalLinks: LinkReference[];
  cta?: CtaContract;
}

export interface GlobalSettingsContract extends AuditFields {
  siteName: string;
  siteUrl: string;
  defaultLocale: string;
  defaultSeoImage?: MediaReference;
  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
  };
  socialLinks: LinkReference[];
}

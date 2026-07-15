export type ContentId = string;
export type ContentSlug = string;
export type IsoDateTime = string;

export type PublishStatus =
  | "draft"
  | "in-review"
  | "scheduled"
  | "published"
  | "archived";

export type RouteVisibility = "public" | "private" | "hidden";

export interface AuditFields {
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
  createdBy?: ContentId;
  updatedBy?: ContentId;
}

export interface PublishFields {
  status: PublishStatus;
  publishedAt?: IsoDateTime;
  scheduledFor?: IsoDateTime;
}

export interface SeoContract {
  title: string;
  description: string;
  canonicalPath: string;
  robots: {
    index: boolean;
    follow: boolean;
  };
  openGraph?: {
    title?: string;
    description?: string;
    imageId?: ContentId;
  };
  twitter?: {
    card: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    imageId?: ContentId;
  };
  schemaTypes?: string[];
  includeInSitemap: boolean;
}

export interface MediaReference {
  id: ContentId;
  alt: string;
  title?: string;
  caption?: string;
}

export interface LinkReference {
  label: string;
  href: string;
  external?: boolean;
}

export interface CtaContract extends LinkReference {
  id: ContentId;
  style: "primary" | "secondary" | "text";
  analyticsEvent?: string;
}

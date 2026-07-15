export type RouteFamily =
  | "home"
  | "company"
  | "approach"
  | "services"
  | "industries"
  | "resources"
  | "contact"
  | "legal"
  | "system";

export type RouteContentState =
  | "published"
  | "planned"
  | "draft"
  | "archived";

export interface RouteDefinition {
  pathname: string;
  family: RouteFamily;
  label: string;
  contentState: RouteContentState;
  indexable: boolean;
  sitemap: boolean;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  parentPath?: string;
  contentKey?: string;
}

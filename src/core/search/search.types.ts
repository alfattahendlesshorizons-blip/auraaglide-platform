export type SearchItemType =
  | "service"
  | "industry"
  | "resource"
  | "page";

export type SearchItem = {
  id: string;
  label: string;
  description?: string;
  href: string;
  type: SearchItemType;
  keywords: string[];
};

export type SearchResult = SearchItem & {
  score: number;
};


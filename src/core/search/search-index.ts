import { navigationContent } from "@/components/navigation/navigation.data";
import type {
  SearchItem,
  SearchItemType,
} from "./search.types";

function inferType(groupLabel: string): SearchItemType {
  switch (groupLabel) {
    case "Services":
      return "service";

    case "Industries":
      return "industry";

    case "Resources":
      return "resource";

    default:
      return "page";
  }
}

function cleanKeywords(
  values: Array<string | null | undefined>
): string[] {
  return values
    .filter(
      (value): value is string =>
        typeof value === "string" &&
        value.trim().length > 0
    )
    .map((value) => value.trim());
}

const groupItems: SearchItem[] =
  navigationContent.groups.flatMap<SearchItem>((group) => {
    const type = inferType(group.label);

    const primaryItems: SearchItem[] =
      group.items.map((item) => ({
        id: `${type}:${item.href}`,
        label: item.label,
        description: item.description,
        href: item.href,
        type,
        keywords: cleanKeywords([
          group.label,
          group.eyebrow,
          group.description,
          item.label,
          item.description,
        ]),
      }));

    const quickItems: SearchItem[] =
      group.quickLinks.map((item) => ({
        id: `${type}:quick:${item.href}`,
        label: item.label,
        description: `Quick access from ${group.label}`,
        href: item.href,
        type,
        keywords: cleanKeywords([
          group.label,
          group.eyebrow,
          item.label,
        ]),
      }));

    return [...primaryItems, ...quickItems];
  });

const directItems: SearchItem[] =
  navigationContent.directLinks.map((item) => ({
    id: `page:${item.href}`,
    label: item.label,
    description: `${item.label} — AuraaGlide Solutions`,
    href: item.href,
    type: "page",
    keywords: cleanKeywords([
      item.label,
      "AuraaGlide",
      "AuraaGlide Solutions",
    ]),
  }));

const homeItem: SearchItem = {
  id: "page:/",
  label: "Home",
  description: "AuraaGlide connected business ecosystem",
  href: "/",
  type: "page",
  keywords: [
    "home",
    "AuraaGlide",
    "business advisory",
    "business ecosystem",
  ],
};

const uniqueItems = new Map<string, SearchItem>();

[homeItem, ...groupItems, ...directItems].forEach((item) => {
  const existing = uniqueItems.get(item.href);

  if (!existing) {
    uniqueItems.set(item.href, item);
    return;
  }

  uniqueItems.set(item.href, {
    ...existing,
    keywords: Array.from(
      new Set([...existing.keywords, ...item.keywords])
    ),
  });
});

export const searchIndex: SearchItem[] =
  Array.from(uniqueItems.values());

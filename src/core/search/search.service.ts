import { searchIndex } from "./search-index";
import type {
  SearchItem,
  SearchResult,
} from "./search.types";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s&-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreItem(
  item: SearchItem,
  normalizedQuery: string
): number {
  const label = normalize(item.label);
  const description = normalize(item.description ?? "");
  const keywords = normalize(item.keywords.join(" "));

  if (label === normalizedQuery) {
    return 100;
  }

  if (label.startsWith(normalizedQuery)) {
    return 80;
  }

  if (label.includes(normalizedQuery)) {
    return 65;
  }

  if (keywords.includes(normalizedQuery)) {
    return 45;
  }

  if (description.includes(normalizedQuery)) {
    return 30;
  }

  const words = normalizedQuery.split(" ").filter(Boolean);

  const matchedWords = words.filter(
    (word) =>
      label.includes(word) ||
      keywords.includes(word) ||
      description.includes(word)
  );

  return matchedWords.length > 0
    ? matchedWords.length * 12
    : 0;
}

export function searchSite(
  query: string,
  limit = 8
): SearchResult[] {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return searchIndex
      .slice(0, limit)
      .map((item, index) => ({
        ...item,
        score: limit - index,
      }));
  }

  return searchIndex
    .map((item) => ({
      ...item,
      score: scoreItem(item, normalizedQuery),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.label.localeCompare(b.label);
    })
    .slice(0, limit);
}

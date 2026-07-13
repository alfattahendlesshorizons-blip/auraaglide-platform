import type { ClientImpactContent } from "./client-impact.types";

type ClientImpactStructuredDataProps = {
  content: ClientImpactContent;
};

export function ClientImpactStructuredData({
  content,
}: ClientImpactStructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AuraaGlide advisory outcome frameworks",
    itemListElement: content.stories.map((story, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: story.label,
      url: story.href,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

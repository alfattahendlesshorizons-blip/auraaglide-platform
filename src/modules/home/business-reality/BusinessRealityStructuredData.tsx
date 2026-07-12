import type { BusinessRealityItem } from "./business-reality.types";

type BusinessRealityStructuredDataProps = {
  items: BusinessRealityItem[];
};

export function BusinessRealityStructuredData({
  items,
}: BusinessRealityStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Business industries supported by AuraaGlide",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": item.seo.schemaType,
        name: item.seo.entityName,
        description: item.seo.description,
        keywords: item.seo.keywords.join(", "),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

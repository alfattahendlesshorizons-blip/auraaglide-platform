import type { AdvisoryApproachContent } from "./advisory-approach.types";

type AdvisoryApproachStructuredDataProps = {
  content: AdvisoryApproachContent;
};

export function AdvisoryApproachStructuredData({
  content,
}: AdvisoryApproachStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AuraaGlide advisory approach",
    itemListElement: content.steps.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.label,
      description: step.description,
      url: step.href,
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

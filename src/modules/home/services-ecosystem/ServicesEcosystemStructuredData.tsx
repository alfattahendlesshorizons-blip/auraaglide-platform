import type { ServicesEcosystemContent } from "./services-ecosystem.types";

type ServicesEcosystemStructuredDataProps = {
  content: ServicesEcosystemContent;
};

export function ServicesEcosystemStructuredData({
  content,
}: ServicesEcosystemStructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AuraaGlide connected business capabilities",
    itemListElement: content.capabilities.map((capability, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: capability.title,
      item: {
        "@type": "Service",
        name: capability.title,
        description: capability.description,
        url: capability.cta.href,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: capability.title,
          itemListElement: capability.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.label,
              url: service.href,
            },
          })),
        },
      },
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
